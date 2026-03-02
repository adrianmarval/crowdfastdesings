import { Footer, Sidebar, TopMenu } from '@/components/ui';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <TopMenu />
      <Sidebar />
      <div className="px-0 sm:px-10">{children}</div>
      <Footer />
    </main>
  );
}
