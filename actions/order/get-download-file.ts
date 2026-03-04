'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { storage } from '@/lib/appwrite-server';
import { headers } from 'next/headers';

/**
 * Validates that a user has purchased and paid for a product,
 * then downloads the file from Appwrite and returns it as base64.
 */
export const getDownloadFile = async (orderId: string, productId: string) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    return { ok: false, message: 'You must be logged in' };
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        OrderItem: {
          where: { productId },
          select: {
            product: {
              select: {
                id: true,
                title: true,
                file_url: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      return { ok: false, message: 'Order not found' };
    }

    // Verify the order belongs to the user
    if (session.user.id !== order.userId) {
      return { ok: false, message: 'Unauthorized' };
    }

    // Verify the order is paid
    if (!order.isPaid) {
      return { ok: false, message: 'Order is not paid yet' };
    }

    const orderItem = order.OrderItem[0];
    if (!orderItem?.product?.file_url) {
      return { ok: false, message: 'Product file not found' };
    }

    const fileId = orderItem.product.file_url;
    const bucketId = process.env.APPWRITE_ZIPS_BUCKET || '';

    // Get file metadata (name, mimeType, size)
    const fileMeta = await storage.getFile({ bucketId, fileId });

    // Download file from Appwrite (returns ArrayBuffer)
    const fileBuffer = await storage.getFileDownload({ bucketId, fileId });

    // Convert ArrayBuffer to base64 string for client transfer
    const base64 = Buffer.from(fileBuffer).toString('base64');

    return {
      ok: true,
      fileName: fileMeta.name,
      mimeType: fileMeta.mimeType || 'application/octet-stream',
      base64,
    };
  } catch (error) {
    console.error('Download error:', error);
    return { ok: false, message: 'Something went wrong' };
  }
};
