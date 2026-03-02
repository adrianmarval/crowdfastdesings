import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Checkout Order',
  description: 'Verify your order before proceeding to payment.',
  robots: { index: false, follow: false },
};

import { Title } from '@/components/ui/';
import { ProductsInCart } from './ui/ProductsInCart';
import { PlaceOrder } from './ui/PlaceOrder';

export default function CheckoutPage() {
  return (
    <div className="mb-72 flex items-center justify-center px-10 sm:px-0">
      <div className="flex w-[1000px] flex-col">
        <Title title="Verify Order" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Cart */}
          <div className="mt-5 flex flex-col">
            <span className="text-xl">Adjust elements</span>
            <Link href="/shop/cart" className="mb-5 underline">
              Edit cart
            </Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout - Order Summary */}
          <PlaceOrder />
        </div>
      </div>
    </div>
  );
}
