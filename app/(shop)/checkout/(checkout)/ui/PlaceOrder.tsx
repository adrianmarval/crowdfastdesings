'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

import { placeOrder } from '@/actions';
import { useAddressStore, useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '@/components/ui/button';

export const PlaceOrder = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const address = useAddressStore((state) => state.address);

  const { itemsInCart, subTotal, tax, total } = useCartStore(useShallow((state) => state.getSummaryInformation()));
  const cart = useCartStore((state) => state.cart);
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
        <div className="mb-4 flex items-center justify-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
            alt="Visa"
            className="h-4 object-contain opacity-70 grayscale"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
            alt="Mastercard"
            className="h-5 object-contain opacity-70 grayscale"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png"
            alt="American Express"
            className="h-5 object-contain opacity-70 grayscale"
          />
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
