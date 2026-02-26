'use client';
import { useEffect, useState } from 'react';

import { useCartStore } from '@/store';
import { ProductImage } from '@/components/product';
import Link from 'next/link';

export const ProductsInCart = () => {
  const removeProduct = useCartStore((state) => state.removeProduct);

  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore((state) => state.cart);

  useEffect(() => {
    setLoaded(true);
  });

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.id}`} className="mb-5 flex">
          <ProductImage
            src={product.image}
            width={1920}
            height={1080}
            style={{
              width: '100px',
              height: '100px',
            }}
            alt={product.title}
            className="mr-5 rounded"
          />

          <div>
            <Link className="cursor-pointer hover:underline" href={`/product/${product.slug}`}>
              {product.title}
            </Link>

            <p>${product.price_usd}</p>

            <button onClick={() => removeProduct(product)} className="mt-3 cursor-pointer underline">
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
