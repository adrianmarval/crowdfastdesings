'use client';

import Link from 'next/link';
import clsx from 'clsx';
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from 'react-icons/io5';

import { useUiStore } from '@/store';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export const Sidebar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeMenu = useUiStore((state) => state.closeSideMenu);

  const { data: session } = authClient.useSession();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === 'admin';
  const router = useRouter();

  async function handleLogOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/auth/login'); // redirect to login page
        },
      },
    });
  }

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && <div className="fixed top-0 left-0 z-10 h-screen w-screen bg-black opacity-30" />}

      {/* Blur */}
      {isSideMenuOpen && (
        <div onClick={closeMenu} className="fade-in fixed top-0 left-0 z-10 h-screen w-screen backdrop-blur-sm backdrop-filter" />
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          'fixed top-0 right-0 z-20 h-screen w-[500px] transform bg-white p-5 shadow-2xl transition-all duration-300 dark:bg-[#2f2d2d]',
          {
            'translate-x-full': !isSideMenuOpen,
          },
        )}
      >
        <IoCloseOutline size={50} className="absolute top-5 right-5 cursor-pointer dark:text-gray-100" onClick={() => closeMenu()} />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2 dark:text-gray-100" />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded border-b-2 border-gray-200 bg-gray-50 py-1 pr-10 pl-10 text-xl focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        {/* Menú */}

        {isAuthenticated && (
          <>
            <Link
              href="/profile"
              onClick={() => closeMenu()}
              className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              <IoPersonOutline size={30} />
              <span className="ml-3 text-xl">Profile</span>
            </Link>

            <Link
              href="/orders"
              onClick={() => closeMenu()}
              className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Orders</span>
            </Link>
          </>
        )}

        {isAuthenticated && (
          <button
            className="mt-10 flex w-full items-center rounded p-2 transition-all hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
            onClick={handleLogOut}
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-xl">Log out</span>
          </button>
        )}

        {!isAuthenticated && (
          <Link
            href="/auth/login"
            className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
            onClick={() => closeMenu()}
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-xl">Login</span>
          </Link>
        )}

        {isAdmin && (
          <>
            {/* Line Separator */}
            <div className="my-10 h-px w-full bg-gray-200 dark:bg-gray-700" />

            <Link
              href="/admin/products"
              onClick={() => closeMenu()}
              className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              <IoShirtOutline size={30} />
              <span className="ml-3 text-xl">Products</span>
            </Link>

            <Link
              href="/admin/orders"
              onClick={() => closeMenu()}
              className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              <IoTicketOutline size={30} />
              <span className="ml-3 text-xl">Orders</span>
            </Link>

            <Link
              href="/admin/users"
              onClick={() => closeMenu()}
              className="mt-10 flex items-center rounded p-2 transition-all hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              <IoPeopleOutline size={30} />
              <span className="ml-3 text-xl">Users</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
