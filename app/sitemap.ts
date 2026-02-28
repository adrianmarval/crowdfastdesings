import { MetadataRoute } from 'next';
import prisma from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  try {
    const products = await prisma.product.findMany({
      select: { slug: true, updatedAt: true },
    });

    const categories = await prisma.category.findMany({
      select: { id: true },
    });

    const productUrls: MetadataRoute.Sitemap = products.map((product) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: product.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    const categoryUrls: MetadataRoute.Sitemap = categories.map((category) => ({
      url: `${baseUrl}/category/${category.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }));

    const staticUrls: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/cart`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/auth/login`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
      },
      {
        url: `${baseUrl}/auth/signup`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
      },
      {
        url: `${baseUrl}/legal/terms`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.4,
      },
      {
        url: `${baseUrl}/legal/privacy`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.4,
      },
    ];

    return [...staticUrls, ...categoryUrls, ...productUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ];
  }
}
