'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { storage } from '@/lib/appwrite-server';

export const deleteProduct = async (id: string, slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      select: { images: true },
    });

    if (product?.images) {
      const deletePromises = product.images.map(async (imageUrl) => {
        if (!imageUrl.startsWith('http')) return;

        let fileId = '';
        try {
          const urlObj = new URL(imageUrl);
          const pathSegments = urlObj.pathname.split('/');
          const filesIndex = pathSegments.indexOf('files');
          if (filesIndex !== -1 && pathSegments.length > filesIndex + 1) {
            fileId = pathSegments[filesIndex + 1];
          }
        } catch (err) {
          console.error('Error parsing Appwrite image URL:', err);
        }

        if (fileId) {
          try {
            await storage.deleteFile({
              bucketId: process.env.NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET || '',
              fileId: fileId,
            });
          } catch (appwriteErr) {
            console.warn('Advertencia: No se pudo eliminar el archivo de Appwrite (puede que ya no exista):', appwriteErr);
          }
        } else {
          console.warn(`No se detecto un fileId de Appwrite para la url: ${imageUrl}`);
        }
      });

      // Ejecutar borrado de imágenes en parelelo
      await Promise.all(deletePromises);
    }

    // Delete the related images first to avoid Foreign Key Constraint violations
    await prisma.productImage.deleteMany({
      where: {
        productId: id,
      },
    });

    const deletedProduct = await prisma.product.delete({
      where: {
        id,
      },
    });

    revalidatePath('/shop/admin/products');
    revalidatePath(`/shop/admin/product/${slug}`);
    revalidatePath(`/shop/product/${slug}`);

    return {
      ok: true,
      product: deletedProduct,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: 'No se pudo eliminar el producto',
    };
  }
};
