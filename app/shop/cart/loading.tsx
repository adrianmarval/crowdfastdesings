import { Title } from '@/components/ui';

export default function CartLoading() {
  return (
    <div className="mb-72 flex items-center justify-center px-10 sm:px-0">
      <div className="flex w-[1000px] flex-col">
        <Title title="Cart" />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Cart Items Skeleton */}
          <div className="mt-5 flex flex-col">
            <span className="text-xl">Add more items</span>
            <div className="mb-5 h-5 w-32 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />

            {/* Products In Cart Skeletons */}
            {[1, 2, 3].map((id) => (
              <div key={id} className="mb-5 flex">
                <div className="h-[100px] w-[100px] animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                <div className="ml-5 flex w-full flex-col gap-2">
                  <div className="h-5 w-3/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                  <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                  <div className="h-5 w-1/3 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Skeleton */}
          <div className="h-fit rounded-xl bg-white p-7 dark:bg-[#2f2d2d]">
            <h2 className="mb-2 text-2xl">Order Summary</h2>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              </div>
              <div className="flex justify-between">
                <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              </div>
              <div className="flex justify-between">
                <div className="h-6 w-1/3 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                <div className="h-6 w-1/3 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              </div>
            </div>

            <div className="mt-5 mb-2 h-14 w-full animate-pulse rounded-sm bg-slate-300 dark:bg-slate-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
