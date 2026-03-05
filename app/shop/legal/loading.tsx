export default function LegalLoading() {
  return (
    <div>
      <div className="mb-8 h-12 w-64 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />

      <div className="max-w-none space-y-12">
        <section>
          <div className="mb-4 h-8 w-1/3 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
          <div className="space-y-3">
            <div className="h-4 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            <div className="h-4 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            <div className="h-4 w-11/12 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
          </div>
        </section>

        <section>
          <div className="mb-4 h-8 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
          <div className="space-y-3">
            <div className="h-4 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            <div className="h-4 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-white/5">
              <div className="mb-3 h-6 w-32 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              <div className="space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
                <div className="h-3 w-4/5 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
