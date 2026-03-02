'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

import { titleFont } from '@/config/fonts';
import { useCartStore, useUiStore } from '@/store/';
import { ThemeToggle } from '../theme-toggle';
import { GlobalSearch } from '../global-search/GlobalSearch';
import { Button } from '../button';

export const TopMenu = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const theme = useUiStore((state) => state.theme);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="flex h-16 w-full items-center justify-between bg-white px-2 sm:px-20 dark:bg-[#0C0A09]">
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
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800" href="/shop/category/dashboards">
          Dashboards
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800" href="/shop/category/ecommerce">
          E-Commerce
        </Link>
        <Link className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800" href="/shop/category/ui-kits">
          UI Kits
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <GlobalSearch />

        <Link href={totalItemsInCart === 0 && isClient ? '/empty' : '/cart'} className="mx-2">
          <div className="relative">
            {isClient && totalItemsInCart > 0 ? (
              <span className="fade-in absolute -top-2 -right-2 rounded-full bg-blue-700 px-1 text-xs font-bold text-white">
                {totalItemsInCart}
              </span>
            ) : null}
            <IoCartOutline className="h-5 w-5" />
          </div>
        </Link>
        <ThemeToggle />

        <Button
          variant="ghost"
          onClick={openSideMenu}
          className="m-2 rounded-md p-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Menu
        </Button>
      </div>
    </nav>
  );
};
