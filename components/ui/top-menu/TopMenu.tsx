'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';

import { titleFont } from '@/config/fonts';
import { useCartStore, useUiStore } from '@/store/';
import { ThemeToggle } from '../theme-toggle';
import Image from 'next/image';

export const TopMenu = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const theme = useUiStore((state) => state.theme);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex h-16 w-full items-center justify-between px-2 sm:px-5">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-1 transition-all hover:opacity-80 active:scale-95">
          {/* <Image
            src="/logo.svg"
            alt="Crowdfast Logo"
            width={100}
            height={100}
            className="mt-4 h-10 w-10 object-contain sm:h-30 sm:w-30 dark:invert"
            priority
          /> */}
          <div className="flex items-center whitespace-nowrap">
            <span className={`${titleFont.className} text-lg font-bold antialiased sm:text-xl`}>Crowdfast</span>
            <span className="hidden text-lg font-light sm:inline-block">
              <span className="mx-1">|</span>Designs
            </span>
          </div>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800" href="/category/dashboards">
          Dashboards
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800" href="/category/ecommerce">
          E-Commerce
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800" href="/category/ui-kits">
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

        <button onClick={openSideMenu} className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
          Menu
        </button>
      </div>
    </nav>
  );
};
