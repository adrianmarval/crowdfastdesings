'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

import { placeOrder } from '@/actions';
import { useAddressStore, useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '@/components/ui/button';
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';

export const PlaceOrder = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const address = useAddressStore((state) => state.address);

  const { itemsInCart, subTotal, tax, total } = useCartStore(useShallow((state) => state.getSummaryInformation()));
  const cart = useCartStore(useShallow((state) => state.cart));
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onPlaceOrder = async () => {
    setIsPlacingOrder(true);
    // await sleep(2);

    const productsToOrder = cart.map((product) => ({
      productId: product.id,
    }));

    //! Server Action
    const resp = await placeOrder(productsToOrder, address);
    if (!resp.ok) {
      setIsPlacingOrder(false);
      setErrorMessage(resp.message);
      return;
    }

    //* Todo salio bien!
    clearCart();
    router.replace('/orders/' + resp.order?.id);
  };

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="rounded-xl bg-white p-7 shadow-xl dark:bg-[#2f2d2d]">
      <h2 className="mb-2 text-2xl">Billing Address</h2>
      <div className="mb-10">
        <p className="text-xl">
          {address.firstName} {address.lastName}
        </p>
        <p>{address.address}</p>
        <p>{address.address2}</p>
        <p>{address.postalCode}</p>
        <p>
          {address.city}, {address.country}
        </p>
        <p>{address.phone}</p>
      </div>

      {/* Divider */}
      <div className="mb-10 h-0.5 w-full rounded bg-gray-200 dark:bg-gray-700" />

      <h2 className="mb-2 text-2xl">Order Summary</h2>

      <div className="grid grid-cols-2">
        <span>No. Products</span>
        <span className="text-right">{itemsInCart === 1 ? '1 item' : `${itemsInCart} items`}</span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subTotal)} USD</span>

        <span>Taxes (15%)</span>
        <span className="text-right">{currencyFormat(tax)} USD</span>

        <span className="mt-5 text-2xl">Total:</span>
        <span className="mt-5 text-right text-2xl font-bold">{currencyFormat(total)} USD</span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <p className="mb-5">
          {/* Disclaimer */}
          <span className="text-xs text-gray-600 dark:text-gray-400">
            By clicking &quot;Place Order&quot;, you agree to our{' '}
            <a href="/legal/terms" className="underline hover:text-gray-900 dark:hover:text-white" target="_blank">
              terms and conditions
            </a>{' '}
            and{' '}
            <a href="/legal/privacy" className="underline hover:text-gray-900 dark:hover:text-white" target="_blank">
              privacy policy
            </a>
            .
          </span>
        </p>

        {/* Accepted Cards - Stripe Compliance */}
        <div className="mb-4 flex items-center justify-center gap-2 text-gray-400">
          <FaCcVisa className="h-6 w-auto" />
          <FaCcMastercard className="h-6 w-auto" />
          <FaCcAmex className="h-6 w-auto" />
        </div>

        <p className="text-red-500">{errorMessage}</p>

        <Button
          onClick={onPlaceOrder}
          className={clsx({ 'h-10 w-full font-bold': true, 'btn-primary': !isPlacingOrder, 'btn-disabled': isPlacingOrder })}
        >
          {isPlacingOrder ? 'Processing...' : `Pay Now`}
        </Button>
      </div>
    </div>
  );
};
