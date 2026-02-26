'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0] || 'placeholder.jpg');

  return (
    <div className="fade-in overflow-hidden rounded-md">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={displayImage.startsWith('http') || displayImage.startsWith('/') ? displayImage : `/products/${displayImage}`}
          alt={product.title}
          className="w-full rounded object-cover"
          width={1920}
          height={1080}
          onMouseEnter={() => {
            if (product.images[1]) setDisplayImage(product.images[1]);
          }}
          onMouseLeave={() => setDisplayImage(product.images[0] || 'placeholder.jpg')}
        />
      </Link>

      <div className="flex flex-col p-4">
        <Link className="hover:text-blue-600" href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price_usd}</span>
      </div>
    </div>
  );
};
