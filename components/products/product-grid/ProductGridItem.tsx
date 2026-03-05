'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';
import { resolveProductImageUrl } from '@/lib/resolve-image-url';

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(resolveProductImageUrl(product.images[0]));

  return (
    <div className="fade-in overflow-hidden rounded-md">
      <Link href={`/shop/product/${product.slug}`}>
        <Image
          src={displayImage}
          alt={product.title}
          className="w-full rounded object-cover"
          width={1920}
          height={1080}
          onMouseEnter={() => {
            if (product.images[1]) setDisplayImage(resolveProductImageUrl(product.images[1]));
          }}
          onMouseLeave={() => setDisplayImage(resolveProductImageUrl(product.images[0]))}
        />
      </Link>

      <div className="flex flex-col p-4">
        <Link className="hover:text-blue-600" href={`/shop/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price_usd}</span>
      </div>
    </div>
  );
};
