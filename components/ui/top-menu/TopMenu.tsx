'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';

import { titleFont } from '@/config/fonts';
import { useCartStore, useUiStore } from '@/store/';
import { ThemeToggle } from '../theme-toggle';

export const TopMenu = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex w-full items-center justify-between px-5">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} font-bold antialiased`}>Crowdfast</span>
          <span> | Desings</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/category/dashboards">
          Dashboards
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/category/ecommerce">
          E-Commerce
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100" href="/category/ui-kits">
          UI Kits
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="h-5 w-5" />
        </Link>

        <Link href={totalItemsInCart === 0 && loaded ? '/empty' : '/cart'} className="mx-2">
          <div className="relative">
            {loaded && totalItemsInCart > 0 && (
              <span className="fade-in absolute -top-2 -right-2 rounded-full bg-blue-700 px-1 text-xs font-bold text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="h-5 w-5" />
          </div>
        </Link>
        <ThemeToggle />

        <button onClick={openSideMenu} className="m-2 rounded-md p-2 transition-all hover:bg-gray-100">
          Menú
        </button>
      </div>
    </nav>
  );
};
