export default function ProfileLoading() {
  return (
    <div className="my-8 flex min-h-[calc(100vh-200px)] w-full flex-col overflow-hidden rounded-xl text-slate-900 md:flex-row dark:text-slate-100">
      {/* Sidebar Skeleton */}
      <div className="w-full border-r border-slate-200 bg-white p-6 md:w-64 dark:border-slate-800 dark:bg-[#1a1f37]">
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mt-4 h-6 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="mt-8 space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-10 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          ))}
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 bg-slate-50 p-6 sm:p-10 dark:bg-[#0F0F13]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 h-8 w-1/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="h-4 w-1/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-12 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
              </div>
            ))}
          </div>
          <div className="mt-8 h-12 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
}
