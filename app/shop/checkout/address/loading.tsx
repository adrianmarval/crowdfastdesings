import { Title } from '@/components/ui';

export default function AddressLoading() {
  return (
    <div className="mb-72 flex flex-col px-10 sm:items-center sm:justify-center sm:px-0">
      <div className="flex w-full flex-col justify-center text-left xl:w-[1000px]">
        <Title title="Address" subtitle="Billing Address" />

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="flex flex-col gap-2">
              <div className="h-4 w-20 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              <div className="h-10 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="h-12 w-full animate-pulse rounded bg-slate-200 sm:w-1/2 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
}
