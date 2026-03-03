export const revalidate = 0;

import { getPaginatedOrders } from '@/actions';
import { Pagination, Title } from '@/components/ui';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { IoCardOutline } from 'react-icons/io5';

export default async function OrdersPage() {
  const { ok, orders = [] } = await getPaginatedOrders();

  if (!ok) {
    redirect('/auth/login');
  }

  return (
    <>
      <Title title="Todas las orders" />

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="border-b bg-gray-200 dark:border-zinc-800 dark:bg-zinc-800">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-zinc-100">
                #ID
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-zinc-100">
                Nombre completo
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-zinc-100">
                Estado
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-zinc-100">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-zinc-200">
                  {order.id.split('-').at(-1)}
                </td>
                <td className="px-6 py-4 text-sm font-light whitespace-nowrap text-gray-900 dark:text-zinc-200">
                  {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                </td>
                <td className="flex items-center px-6 py-4 text-sm font-light whitespace-nowrap text-gray-900 dark:text-zinc-200">
                  {order.isPaid ? (
                    <>
                      <IoCardOutline className="text-green-800" />
                      <span className="mx-2 text-green-800">Pagada</span>
                    </>
                  ) : (
                    <>
                      <IoCardOutline className="text-red-800" />
                      <span className="mx-2 text-red-800">No Pagada</span>
                    </>
                  )}
                </td>
                <td className="px-6 text-sm font-light text-gray-900 dark:text-zinc-200">
                  <Link href={`/shop/orders/${order.id}`} className="text-blue-600 hover:underline dark:text-blue-400">
                    Ver orden
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination totalPages={1} />
      </div>
    </>
  );
}
