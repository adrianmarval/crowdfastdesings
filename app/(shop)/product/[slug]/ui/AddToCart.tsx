'use client';

import { ShoppingCart } from 'lucide-react';
import type { CartProduct, Product } from '@/interfaces';
import { useCartStore } from '@/store';
import { Button } from '@/components/ui/button';

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductTocart);

  const addToCart = () => {
    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price_usd: product.price_usd,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
  };

  return (
    <div className="flex items-center justify-end">
      <Button
        onClick={addToCart}
        className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#4a72ff] py-6 font-bold text-white shadow-[0_10px_30px_rgba(74,114,255,0.3)] transition-all duration-300 hover:bg-[#3d61e6] active:scale-90"
      >
        <ShoppingCart size={20} className="transition-transform group-hover:translate-x-1" />
        ADD TO CART
      </Button>
    </div>
  );
};
