import { SignupForm } from '@/components/auth/signup-form';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const returnTo = typeof searchParams.returnTo === 'string' ? searchParams.returnTo : '/';

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm returnTo={returnTo} />
      </div>
    </div>
  );
}
