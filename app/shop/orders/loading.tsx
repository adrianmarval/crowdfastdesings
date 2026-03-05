import { Title } from '@/components/ui';

export default function OrdersLoading() {
  return (
    <>
      <Title title="Orders" />

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="border-b bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <tr>
              <th scope="col" className="hidden px-6 py-4 text-left text-sm font-medium text-gray-900 md:block dark:text-gray-100">
                Date
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                #ID
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Full Name
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Status
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="border-b bg-white transition duration-300 ease-in-out dark:border-gray-700 dark:bg-[#2f2d2d]">
                <td className="hidden px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 md:block dark:text-gray-100">
                  <div className="h-4 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                </td>
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-gray-100">
                  <div className="h-4 w-16 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                </td>
                <td className="px-6 py-4 text-sm font-light whitespace-nowrap text-gray-900 dark:text-gray-100">
                  <div className="h-4 w-24 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                </td>
                <td className="px-6 py-4 text-sm font-light whitespace-nowrap text-gray-900 dark:text-gray-100">
                  <div className="h-4 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                </td>
                <td className="px-6 py-4 text-sm font-light text-gray-900 dark:text-gray-100">
                  <div className="h-4 w-20 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
