import { Title } from '@/components/ui';

export default function OrderByIdLoading() {
  return (
    <div className="mb-72 flex items-center justify-center px-10 sm:px-0">
      <div className="flex w-[1000px] flex-col">
        <Title title="Loading Order..." />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Items Column */}
          <div className="mt-5 flex flex-col gap-5">
            <div className="mb-4 h-10 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />

            {[1, 2].map((id) => (
              <div key={id} className="flex flex-row items-start gap-5">
                <div className="h-[100px] w-[100px] shrink-0 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                <div className="flex w-full flex-col gap-2">
                  <div className="h-5 w-3/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                  <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                  <div className="h-5 w-1/3 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                </div>
              </div>
            ))}
          </div>

          {/* Payment and Billing Address Column */}
          <div className="rounded-xl bg-white p-7 shadow-xl dark:bg-[#2f2d2d]">
            <h2 className="mb-4 text-2xl">Billing Address</h2>
            <div className="mb-10 space-y-2">
              <div className="h-5 w-3/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              <div className="h-5 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              <div className="h-5 w-1/2 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              <div className="h-5 w-2/3 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            </div>

            <div className="mb-10 h-0.5 w-full rounded bg-gray-200 dark:bg-gray-700" />

            <h2 className="mb-4 text-2xl">Order Summary</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              </div>
              <div className="flex justify-between">
                <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="h-8 w-1/3 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                <div className="h-8 w-1/3 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              </div>
            </div>

            <div className="mt-10 h-12 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
