export const revalidate = 604800; //7 días
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { Star, Share2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import { titleFont } from '@/config/fonts';
import { getProductBySlug } from '@/actions';
import { AddToCart } from './ui/AddToCart';
import Markdown from 'react-markdown';

const ProductMobileSlideshow = dynamic(() => import('@/components/product').then((mod) => mod.ProductMobileSlideshow));
const ProductSlideshow = dynamic(() => import('@/components/product').then((mod) => mod.ProductSlideshow));

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product not found',
      description: 'The product you are looking for is not available at Crowdfast Designs.',
    };
  }

  const title = `${product.title} | Crowdfast Designs`;
  const description = product.description?.substring(0, 160) || 'Download this amazing resource at Crowdfast Designs.';
  // Ensure the image URL format is absolute or relative based on Next.js OG guidelines. Assuming `/products/[image]` is handled correctly via metadataBase.
  const imageUrl = product.images?.[0] ? `/products/${product.images[0]}` : '/default-og-image.png';

  return {
    title: product.title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `/product/${product.slug}`,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
    },
  };
}

export default async function ProductBySlugPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 w-full font-sans">
      <div className="w-full">
        {/* Product Section */}
        <div className="text-gray-900 dark:text-white">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
            {/* Image Gallery */}
            <div className="col-span-1 space-y-6 lg:col-span-7">
              <div className={`${titleFont.className} overflow-hidden rounded-[24px] bg-gray-50/50 p-2 dark:bg-white/5`}>
                {/* Mobile Slideshow */}
                <ProductMobileSlideshow
                  title={product.title}
                  images={product.images}
                  className="block overflow-hidden rounded-[16px] object-cover md:hidden"
                />

                {/* Desktop Slideshow */}
                <ProductSlideshow
                  title={product.title}
                  images={product.images}
                  className="hidden overflow-hidden rounded-[16px] object-cover md:block"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="col-span-1 flex h-full flex-col justify-between py-2 lg:col-span-5">
              <div>
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-600 uppercase dark:bg-blue-600/20 dark:text-blue-400">
                        New Arrival
                      </span>
                    </div>
                    <h1 className={`mb-2 text-4xl font-bold ${titleFont.className}`}>{product.title}</h1>
                    <div className="flex items-center gap-2">
                      <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">(124 Customer Reviews)</span>
                    </div>
                  </div>
                  <button className="rounded-2xl bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-[#1a1f37] dark:text-gray-400 dark:hover:bg-white/5">
                    <Share2 size={20} />
                  </button>
                </div>

                <div className="mb-8 flex items-center justify-between">
                  <span className="text-3xl font-bold">${product.price_usd}</span>
                  <div className="flex-1 px-8">
                    <AddToCart product={product} />
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="mb-4 text-[10px] font-bold tracking-widest text-gray-600 uppercase dark:text-gray-400">Description</h3>
                  <div className="markdown-container max-h-[480px] overflow-y-auto">
                    <Markdown
                      components={{
                        h1: ({ children }) => <h1 className="mt-6 mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">{children}</h1>,
                        h2: ({ children }) => <h2 className="mt-5 mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">{children}</h2>,
                        h3: ({ children }) => <h3 className="mt-4 mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">{children}</h3>,
                        p: ({ children }) => (
                          <p className="mb-4 text-sm leading-relaxed font-light text-gray-600 dark:text-gray-300">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="mb-4 list-disc pl-5 text-sm font-light text-gray-600 dark:text-gray-300">{children}</ul>
                        ),
                        li: ({ children }) => <li className="mb-1 leading-relaxed">{children}</li>,
                        hr: () => <hr className="my-6 border-gray-200 dark:border-gray-800" />,
                      }}
                    >
                      {product.description || ''}
                    </Markdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
