import type { Metadata } from 'next';
import { Title } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Checkout Address',
  description: 'Enter your billing address securely.',
  robots: { index: false, follow: false },
};
import { AddressForm } from './ui/AddressForm';

import { getCountries, getUserAddress } from '@/actions';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function AddressPage() {
  const countries = await getCountries();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return <h3 className="text-5xl">500 - No user session found!</h3>;
  }

  const userAddress = (await getUserAddress(session.user.id)) ?? undefined;

  return (
    <div className="mb-72 flex flex-col px-10 sm:items-center sm:justify-center sm:px-0">
      <div className="flex w-full flex-col justify-center text-left xl:w-[1000px]">
        <Title title="Address" subtitle="Billing Address" />

        <AddressForm countries={countries} userStoredAddress={userAddress} />
      </div>
    </div>
  );
}
