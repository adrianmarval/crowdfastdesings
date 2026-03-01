'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

export const getHasPurchasedProduct = async (productId: string) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    return false;
  }

  const hasPurchased = await prisma.orderItem.findFirst({
    where: {
      productId: productId,
      order: {
        userId: session.user.id,
        isPaid: true,
      },
    },
  });

  return !!hasPurchased;
};
