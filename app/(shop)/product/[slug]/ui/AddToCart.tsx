'use client';

import { useEffect, useState } from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import type { CartProduct, Product } from '@/interfaces';
import { useCartStore } from '@/store';
import { Button } from '@/components/ui/button';

interface Props {
  product: Product;
  hasPurchased?: boolean;
}

export const AddToCart = ({ product, hasPurchased }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const addProductToCart = useCartStore((state) => state.addProductTocart);
  const removeProduct = useCartStore((state) => state.removeProduct);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const cartProduct: CartProduct = {
    id: product.id,
    slug: product.slug,
    title: product.title,
    price_usd: product.price_usd,
    image: product.images[0],
  };

  const isInCart = cart.some((item) => item.id === product.id);

  if (hasPurchased) {
    return (
      <div className="flex items-center justify-end">
        <Button
          disabled
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gray-400 py-6 font-bold text-white shadow-none transition-all duration-300 disabled:opacity-80"
        >
          YOU ALREADY OWN THIS PRODUCT
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-end">
      {loaded && isInCart ? (
        <Button
          onClick={() => removeProduct(cartProduct)}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-6 font-bold text-white shadow-[0_10px_30px_rgba(239,68,68,0.3)] transition-all duration-300 hover:bg-red-600 active:scale-90"
        >
          <Trash2 size={20} className="transition-transform group-hover:-translate-y-1" />
          REMOVE FROM CART
        </Button>
      ) : (
        <Button
          onClick={() => addProductToCart(cartProduct)}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#4a72ff] py-6 font-bold text-white shadow-[0_10px_30px_rgba(74,114,255,0.3)] transition-all duration-300 hover:bg-[#3d61e6] active:scale-90"
        >
          <ShoppingCart size={20} className="transition-transform group-hover:translate-x-1" />
          ADD TO CART
        </Button>
      )}
    </div>
  );
};
