import { Title } from '@/components/ui/title/Title';

export default function CategoryLoading() {
  return (
    <>
      <Title title="Loading Category" subtitle="Fetching products in this category..." className="mb-2" />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className="fade-in overflow-hidden rounded-md">
            <div className="aspect-5/3 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            <div className="flex flex-col p-4">
              <div className="mb-2 h-5 w-3/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
