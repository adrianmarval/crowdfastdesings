'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { storage, ID } from '@/lib/appwrite-server';
import { InputFile } from 'node-appwrite/file';

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
  file_url: z.string().optional().nullable(),
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
    let finalProduct;

    // Primer paso: validamos uploads y las procesamos fuera de la transaccion
    let validImages: string[] = [];
    if (formData.getAll('images')) {
      const fileArray = formData.getAll('images') as File[];
      const validFiles = fileArray.filter((f) => f.size > 0);

      if (validFiles.length > 0) {
        const uploadedUrls = await uploadImages(validFiles);
        if (!uploadedUrls) {
          throw new Error('No se pudo cargar las imágenes');
        }

        validImages = uploadedUrls.filter(Boolean) as string[];
      }
    }

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
        file_url: rest.file_url || '',
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

      // Proceso de guardado de imagenes final obtenidas previamente
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
              set: [...(productDb.images || []), ...validImages],
            },
          },
        });
      }

      return {
        product: productDb,
      };
    });

    // RevalidatePaths
    revalidatePath('/shop/admin/products');
    revalidatePath(`/shop/admin/product/${prismaTx.product.slug}`);
    revalidatePath(`/shop/products/${prismaTx.product.slug}`);

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
        const inputFile = InputFile.fromBuffer(Buffer.from(buffer), image.name);

        const uploadedFile = await storage.createFile({
          bucketId: process.env.NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET || '',
          fileId: ID.unique(),
          file: inputFile,
        });

        // Retornamos la URL de vista oficial de Appwrite
        return `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET}/files/${uploadedFile.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`;
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
