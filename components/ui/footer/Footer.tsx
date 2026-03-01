import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-20 w-full border-t border-gray-200 bg-white py-10 text-sm text-gray-600 dark:border-gray-800 dark:bg-[#0C0A09] dark:text-gray-400">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link href="/" className="flex items-center gap-1">
            <span className={`${titleFont.className} font-bold text-gray-900 antialiased dark:text-white`}>Crowdfast </span>
            <span className="text-gray-900 dark:text-white">| Designs </span>
          </Link>
          <span>© {new Date().getFullYear()} Crowdfast Designs. All rights reserved.</span>
          <div className="mt-1 flex items-center gap-1 text-xs text-green-600 dark:text-green-500">
            <ShieldCheck size={14} /> Secure Checkout
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium">
          <Link href="/legal/about" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            About Us
          </Link>
          <Link href="/legal/terms" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Terms & Conditions
          </Link>
          <Link href="/legal/privacy" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/legal/refunds" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Refund Policy
          </Link>
          <Link href="/legal/contact" className="transition-colors hover:text-gray-900 dark:hover:text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};
