import type { Metadata } from 'next';
import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export const metadata: Metadata = {
  title: 'Empty Cart',
  description: 'Your shopping cart is currently empty.',
  robots: { index: false, follow: false },
};

export default function EmptyPage() {
  return (
    <div className="flex h-[800px] items-center justify-center">
      <IoCartOutline size={80} className="mx-5" />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">Your cart is empty</h1>
        <Link href="/shop" className="mt-2 text-4xl text-blue-500">
          Go back
        </Link>
      </div>
    </div>
  );
}
