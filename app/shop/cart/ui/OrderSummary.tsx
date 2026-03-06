'use client';

import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useIsMounted } from '@/hooks';

export const OrderSummary = () => {
  const router = useRouter();

  const loaded = useIsMounted();
  const { itemsInCart, subTotal, tax, total } = useCartStore(useShallow((state) => state.getSummaryInformation()));

  useEffect(() => {
    if (itemsInCart === 0 && loaded === true) {
      router.replace('/shop/empty');
    }
  }, [itemsInCart, loaded, router]);

  if (!loaded) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2">
      <span>No. Products</span>
      <span className="text-right">{itemsInCart === 1 ? '1 item' : `${itemsInCart} items`}</span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)} USD</span>

      <span>Tax (15%)</span>
      <span className="text-right">{currencyFormat(tax)} USD</span>

      <span className="mt-5 text-2xl">Total:</span>
      <span className="mt-5 text-right text-2xl font-bold">{currencyFormat(total)} USD</span>
    </div>
  );
};
