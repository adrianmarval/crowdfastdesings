'use client';

import { changeUserRole } from '@/actions';
import type { User } from '@/interfaces';

interface Props {
  users: User[];
}

export const UsersTable = ({ users }: Props) => {
  return (
    <table className="min-w-full">
      <thead className="border-b bg-gray-200 dark:border-zinc-800 dark:bg-zinc-800">
        <tr>
          <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-zinc-100">
            Email
          </th>
          <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-zinc-100">
            Nombre completo
          </th>
          <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-zinc-100">
            Role
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            key={user.id}
            className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-zinc-200">{user.email}</td>
            <td className="px-6 py-4 text-sm font-light whitespace-nowrap text-gray-900 dark:text-zinc-200">{user.name}</td>
            <td className="flex items-center px-6 py-4 text-sm font-light whitespace-nowrap text-gray-900 dark:text-zinc-200">
              <select
                value={user.role}
                onChange={(e) => changeUserRole(user.id, e.target.value)}
                className="w-full rounded border p-2 text-sm text-gray-900 outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
