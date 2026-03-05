export default function ProductDetailLoading() {
  return (
    <div className="mt-5 mb-20 w-full font-sans">
      <div className="w-full">
        <div className="text-gray-900 dark:text-white">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
            {/* Image Gallery Skeleton */}
            <div className="col-span-1 space-y-6 lg:col-span-7">
              <div className="overflow-hidden rounded-[24px] bg-gray-50/50 p-2 dark:bg-white/5">
                <div className="aspect-4/3 w-full animate-pulse rounded-[16px] bg-slate-300 dark:bg-slate-700" />
                <div className="mt-2 hidden grid-cols-4 gap-2 md:grid">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info Skeleton */}
            <div className="col-span-1 flex h-full flex-col justify-between py-2 lg:col-span-5">
              <div>
                <div className="mb-6 flex items-start justify-between">
                  <div className="w-full">
                    {/* Badge */}
                    <div className="mb-4 h-6 w-24 animate-pulse rounded-full bg-slate-300 dark:bg-slate-700" />
                    {/* Title */}
                    <div className="mb-2 h-10 w-3/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                    <div className="mb-4 h-10 w-1/2 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-24 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                      <div className="h-4 w-32 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                    </div>
                  </div>
                  {/* Share button */}
                  <div className="h-12 w-12 shrink-0 animate-pulse rounded-2xl bg-slate-300 dark:bg-slate-700" />
                </div>

                {/* Price and Cart */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="h-10 w-24 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                  <div className="flex-1 px-8">
                    <div className="h-12 w-full animate-pulse rounded-lg bg-slate-300 dark:bg-slate-700" />
                  </div>
                </div>

                {/* Description Skeleton */}
                <div className="mb-10">
                  <div className="mb-4 h-4 w-24 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                  <div className="space-y-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-4 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                    ))}
                    <div className="h-4 w-3/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
