'use server';

import prisma from '@/lib/prisma';

export const getStockBySlug = async (slug: string): Promise<number> => {
  try {
    const product = await prisma.product.findFirst({
      where: { slug },
      select: { id: true }, // Se consulta únicamente si existe, inStock ya no aplica
    });

    // Los productos digitales virtualmente no expiran su stock
    return product ? 9999 : 0;
  } catch (error) {
    return 0;
  }
};
