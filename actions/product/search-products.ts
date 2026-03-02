'use server';

import prisma from '@/lib/prisma';

export const searchProducts = async (query: string) => {
  if (!query || query.trim().length === 0) {
    return [];
  }

  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
      select: {
        id: true,
        title: true,
        slug: true,
        price_usd: true,
        ProductImage: {
          take: 1,
          select: {
            url: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
      take: 10,
    });

    return products.map((product) => {
      let imageUrl = '/imgs/placeholder.png'; // Default placeholder

      if (product.ProductImage && product.ProductImage.length > 0) {
        const firstImagePath = product.ProductImage[0].url;

        if (firstImagePath) {
          if (firstImagePath.startsWith('http') || firstImagePath.startsWith('/')) {
            imageUrl = firstImagePath;
          } else {
            // According to seed script, images are saved as "folderName/image.png"
            imageUrl = `/products/${firstImagePath}`;
          }
        }
      }

      return {
        id: product.id,
        title: product.title,
        slug: product.slug,
        priceConfig: product.price_usd,
        category: product.category.name,
        image: imageUrl,
      };
    });
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
};
