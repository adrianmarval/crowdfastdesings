import Link from 'next/link';

import { ProductsInCart } from './ui/ProductsInCart';
import { OrderSummary } from './ui/OrderSummary';
import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Cart',
  description: 'Review and complete your purchase at Crowdfast Designs. The best frontend templates at your fingertips.',
};

export default function CartPage() {
  return (
    <div className="mb-72 flex items-center justify-center px-10 sm:px-0">
      <div className="flex w-[1000px] flex-col">
        <Title title="Cart" />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Carrito */}
          <div className="mt-5 flex flex-col">
            <span className="text-xl">Add more items</span>
            <Link href="/shop" className="mb-5 underline">
              Continue shopping
            </Link>
            {/* Items */}
            <ProductsInCart />
          </div>
          {/* Checkout - Resumen de orden */}
          <div className="h-fit rounded-xl bg-white p-7 dark:bg-[#2f2d2d]">
            <h2 className="mb-2 text-2xl">Order Summary</h2>
            <OrderSummary />
            <Link className="flex h-10 w-1/2 justify-center" href="/shop/checkout/address">
              <Button className="mt-5 mb-2 w-full rounded-sm bg-blue-600 py-5 text-lg text-white hover:bg-blue-700">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
