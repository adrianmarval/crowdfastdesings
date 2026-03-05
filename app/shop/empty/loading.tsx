import { IoCartOutline } from 'react-icons/io5';

export default function EmptyLoading() {
  return (
    <div className="flex h-[800px] items-center justify-center">
      <div className="animate-pulse opacity-50">
        <IoCartOutline size={80} className="mx-5 text-slate-300 dark:text-slate-700" />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="h-6 w-48 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-8 w-32 animate-pulse rounded bg-blue-100 dark:bg-blue-900/40" />
      </div>
    </div>
  );
}
