import { LegalSidebar } from './components/legal-sidebar';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        <aside className="w-full shrink-0 md:w-64">
          <LegalSidebar />
        </aside>

        <main className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 md:p-10 dark:border-gray-800 dark:bg-[#2f2d2d]">
          {children}
        </main>
      </div>
    </div>
  );
}
