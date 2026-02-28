import { Providers } from '@/components/providers/providers';
import { inter } from '@/config/fonts';
import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    template: '%s - Crowdfast Designs',
    default: 'Home - Crowdfast Designs',
  },
  description:
    'Discover the best frontend designs and web templates at Crowdfast Designs. Accelerate your development with our premium collection.',
  openGraph: {
    title: 'Crowdfast Designs',
    description: 'Discover the best frontend designs and web templates at Crowdfast Designs.',
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Crowdfast Designs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crowdfast Designs',
    description: 'Discover the best frontend designs and web templates at Crowdfast Designs.',
  },
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
