'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';

export const getOrderById = async (id: string) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    return {
      ok: false,
      message: 'Debe de estar autenticado',
    };
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        OrderAddress: true,
        OrderItem: {
          select: {
            price: true,

            product: {
              select: {
                id: true,
                title: true,
                slug: true,

                ProductImage: {
                  select: {
                    url: true,
                  },
                  take: 1,
                },
              },
            },
          },
        },
      },
    });

    if (!order) throw `${id} no existe`;

    if (session.user.role === 'user') {
      if (session.user.id !== order.userId) {
        throw `${id} no es de ese usuario`;
      }
    }

    let hasPurchasedItems = false;
    if (!order.isPaid && session.user) {
      const alreadyPurchased = !!(await prisma.orderItem.findFirst({
        where: {
          productId: {
            in: order.OrderItem.map((item: any) => item.product.id),
          },
          order: {
            userId: order.userId,
            isPaid: true,
          },
        },
      }));
      hasPurchasedItems = alreadyPurchased;
    }

    return {
      ok: true,
      order: order,
      hasPurchasedItems,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: 'Orden no existe',
    };
  }
};
