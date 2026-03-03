'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { titleFont } from '@/config/fonts';

const legalLinks = [
  { href: '/shop/legal/about', label: 'About Us' },
  { href: '/shop/legal/terms', label: 'Terms & Conditions' },
  { href: '/shop/legal/privacy', label: 'Privacy Policy' },
  { href: '/shop/legal/refunds', label: 'Refund Policy' },
  { href: '/shop/legal/contact', label: 'Contact Us' },
];

export function LegalSidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-[#2f2d2d]">
      <h2 className={cn(`${titleFont.className} mb-4 text-xl font-bold`)}>Legal</h2>
      <nav className="flex flex-col space-y-1">
        {legalLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white',
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
