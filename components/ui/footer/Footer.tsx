import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="mb-10 flex w-full justify-center text-xs">
      <Link href="/">
        <span className={`${titleFont.className} font-bold antialiased`}>Crowdfast </span>
        <span>| Designs </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacy & Legal
      </Link>

      <Link href="/" className="mx-3">
        Locations
      </Link>
    </div>
  );
};
