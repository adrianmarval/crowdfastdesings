export const revalidate = 0;

// https://tailwindcomponents.com/component/hoverable-table
import { getOrdersByUser } from '@/actions';
import { Title } from '@/components/ui';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { IoCardOutline } from 'react-icons/io5';

export default async function OrdersPage() {
  const { ok, orders = [] } = await getOrdersByUser();

  if (!ok) {
    redirect('/auth/login');
  }

  return (
    <>
      <Title title="Orders" />

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="border-b bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                #ID
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Nombre completo
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Estado
              </th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100 dark:border-gray-700 dark:bg-[#2f2d2d] dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-gray-100">
                  {order.id.split('-').at(-1)}
                </td>
                <td className="px-6 py-4 text-sm font-light whitespace-nowrap text-gray-900 dark:text-gray-100">
                  {order.OrderAddress?.firstName} {order.OrderAddress?.lastName}
                </td>
                <td className="flex items-center px-6 py-4 text-sm font-light whitespace-nowrap text-gray-900 dark:text-gray-100">
                  {order.isPaid ? (
                    <>
                      <IoCardOutline className="text-green-800 dark:text-green-500" />
                      <span className="mx-2 text-green-800 dark:text-green-500">Pagada</span>
                    </>
                  ) : (
                    <>
                      <IoCardOutline className="text-red-800 dark:text-red-500" />
                      <span className="mx-2 text-red-800 dark:text-red-500">No Pagada</span>
                    </>
                  )}
                </td>
                <td className="px-6 text-sm font-light text-gray-900 dark:text-gray-100">
                  <Link href={`/orders/${order.id}`} className="hover:underline">
                    Ver orden
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
