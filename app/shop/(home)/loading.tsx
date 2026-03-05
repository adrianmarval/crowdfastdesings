import { Title } from '@/components/ui/title/Title';

export default function ShopLoading() {
  return (
    <>
      <Title title="Templates Store" subtitle="High-quality interfaces designed to help you build faster." className="mb-8" />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="fade-in overflow-hidden rounded-md">
            {/* Image Placeholder */}
            <div className="aspect-4/3 w-full animate-pulse rounded bg-slate-300 dark:bg-slate-700" />

            {/* Text Placeholders */}
            <div className="flex flex-col p-4">
              <div className="mb-2 h-5 w-3/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
              <div className="h-5 w-1/4 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-10 mb-32 flex justify-center text-center">
        <div className="h-10 w-64 animate-pulse rounded bg-slate-300 dark:bg-slate-700" />
      </div>
    </>
  );
}
