'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config(process.env.CLOUDINARY_URL ?? '');

const productSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  title: z.string().min(3).max(255),
  slug: z.string().min(3).max(255),
  description: z.string().optional().nullable(),
  price_usd: z.coerce
    .number()
    .min(0)
    .transform((val) => Number(val.toFixed(2))),
  url_live_preview: z.string().optional().nullable(),
  file_url: z.string().min(1, 'File URL es requerido'),
  version: z.string().optional().nullable(),
  categoryId: z.string().uuid(),
  tags: z.string(),
});

export const createUpdateProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const productParsed = productSchema.safeParse(data);

  if (!productParsed.success) {
    console.log(productParsed.error);
    return { ok: false, message: 'Campos inválidos' };
  }

  const product = productParsed.data;
  product.slug = product.slug.toLowerCase().replace(/ /g, '-').trim();

  const { id, ...rest } = product;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let productDb;
      const tagsArray = rest.tags
        .split(',')
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean);

      const productData = {
        title: rest.title,
        slug: rest.slug,
        description: rest.description || null,
        price_usd: rest.price_usd,
        url_live_preview: rest.url_live_preview || null,
        file_url: rest.file_url,
        version: rest.version || null,
        categoryId: rest.categoryId,
        tags: {
          set: tagsArray,
        },
      };

      if (id) {
        // Actualizar
        productDb = await tx.product.update({
          where: { id },
          data: productData,
        });
      } else {
        // Crear
        productDb = await tx.product.create({
          data: productData,
        });
      }

      // Proceso de carga y guardado de imagenes
      if (formData.getAll('images')) {
        const fileArray = formData.getAll('images') as File[];
        const validFiles = fileArray.filter((f) => f.size > 0);

        if (validFiles.length > 0) {
          const images = await uploadImages(validFiles);
          if (!images) {
            throw new Error('No se pudo cargar las imágenes, rollingback');
          }

          const validImages = images.filter(Boolean) as string[];

          if (validImages.length > 0) {
            await tx.productImage.createMany({
              data: validImages.map((image) => ({
                url: image,
                productId: productDb.id,
              })),
            });

            await tx.product.update({
              where: { id: productDb.id },
              data: {
                images: {
                  push: validImages,
                },
              },
            });
          }
        }
      }

      return {
        product: productDb,
      };
    });

    // RevalidatePaths
    revalidatePath('/admin/products');
    revalidatePath(`/admin/product/${prismaTx.product.slug}`);
    revalidatePath(`/products/${prismaTx.product.slug}`);

    return {
      ok: true,
      product: prismaTx.product,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo actualizar/crear',
    };
  }
};

const uploadImages = async (images: File[]) => {
  try {
    const uploadPromises = images.map(async (image) => {
      try {
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');

        return cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`).then((r) => r.secure_url);
      } catch (error) {
        console.log(error);
        return null;
      }
    });

    const uploadedImages = await Promise.all(uploadPromises);
    return uploadedImages;
  } catch (error) {
    console.log(error);
    return null;
  }
};
