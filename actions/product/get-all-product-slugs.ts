'use server';

import prisma from '@/lib/prisma';

export const getAllProductSlugs = async () => {
  try {
    const products = await prisma.product.findMany({
      select: {
        slug: true,
      },
    });
    return products.map((product) => ({ slug: product.slug }));
  } catch (error) {
    console.log(error);
    return [];
  }
};
