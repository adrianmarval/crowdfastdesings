import { Providers } from '@/components/providers/providers';
import { inter } from '@/config/fonts';
import './globals.css';

export const metadata = {
  title: {
    template: '%s - Crowdfast Designs',
    default: 'Home - Crowdfast Designs',
  },
  description: 'Crowdfast Designs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
