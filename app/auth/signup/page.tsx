import { SignupForm } from '@/components/auth/signup-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account',
  description: 'Sign up to Crowdfast Designs and start downloading the best frontend templates for your projects.',
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const returnTo = typeof searchParams.returnTo === 'string' ? searchParams.returnTo : '/shop';

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm returnTo={returnTo} />
      </div>
    </div>
  );
}
