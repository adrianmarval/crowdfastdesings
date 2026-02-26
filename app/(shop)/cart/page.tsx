import Link from 'next/link';

import { ProductsInCart } from './ui/ProductsInCart';
import { OrderSummary } from './ui/OrderSummary';
import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui';

export default function CartPage() {
  return (
    <div className="mb-72 flex items-center justify-center px-10 sm:px-0">
      <div className="flex w-[1000px] flex-col">
        <Title title="Cart" />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Carrito */}
          <div className="mt-5 flex flex-col">
            <span className="text-xl">Add more items</span>
            <Link href="/" className="mb-5 underline">
              Continue shopping
            </Link>
            {/* Items */}
            <ProductsInCart />
          </div>
          {/* Checkout - Resumen de orden */}
          <div className="h-fit rounded-xl bg-white p-7 shadow-xl">
            <h2 className="mb-2 text-2xl">Order Summary</h2>
            <OrderSummary />
            <Button className="mt-5 mb-2 w-full rounded-sm bg-blue-600 py-5 text-lg text-white hover:bg-blue-700">
              <Link className="flex justify-center" href="/checkout/address">
                Checkout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
