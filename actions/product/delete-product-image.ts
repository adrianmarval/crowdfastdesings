'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { storage } from '@/lib/appwrite-server';

export const deleteProductImage = async (imageId: number, imageUrl: string) => {
  if (!imageUrl.startsWith('http')) {
    return {
      ok: false,
      error: 'No se pueden borrar imagenes de FS',
    };
  }

  // Appwrite file URLs are typically formulated as:
  // .../storage/buckets/{bucketId}/files/{fileId}/view...
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

  // Si hallamos un fileId de Appwrite, intentamos borrarlo de Storage
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
    // Si no tiene "files/" quizas sea de cloudinary. Lo loggeamos pero continuamos
    console.warn(`No se detecto un fileId de Appwrite para la url: ${imageUrl}. Se eliminara solo de la base de datos.`);
  }

  try {
    const deletedImage = await prisma.productImage.delete({
      where: {
        id: imageId,
      },
      select: {
        url: true,
        product: {
          select: {
            id: true,
            slug: true,
            images: true,
          },
        },
      },
    });

    // Delete image from the top-level string array `images` field
    await prisma.product.update({
      where: { id: deletedImage.product.id },
      data: {
        images: {
          set: deletedImage.product.images.filter((img) => img !== deletedImage.url),
        },
      },
    });

    // Revalidar los paths
    revalidatePath(`/shop/admin/products`);
    revalidatePath(`/shop/admin/product/${deletedImage.product.slug}`);
    revalidatePath(`/shop/product/${deletedImage.product.slug}`);

    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'No se pudo eliminar la imagen de la base de datos',
    };
  }
};
