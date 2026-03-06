'use client';

import Image from 'next/image';

import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { resolveProductImageUrl } from '@/lib/resolve-image-url';
import { useIsMounted } from '@/hooks';

export const ProductsInCart = () => {
  const loaded = useIsMounted();
  const productsInCart = useCartStore((state) => state.cart);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}`} className="mb-5 flex">
          <Image
            src={resolveProductImageUrl(product.image)}
            width={100}
            height={100}
            style={{
              width: '100px',
              height: '100px',
            }}
            alt={product.title}
            className="mr-5 rounded"
          />
          <div>
            <span>{product.title}</span>
            <p className="font-bold">{currencyFormat(product.price_usd)}</p>
          </div>
        </div>
      ))}
    </>
  );
};
