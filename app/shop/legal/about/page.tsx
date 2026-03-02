import type { Metadata } from 'next';
import { titleFont } from '@/config/fonts';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about Crowdfast Designs, your premier marketplace for high-fidelity digital products, web templates, and UI kits.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className={`${titleFont.className} mb-8 text-4xl font-bold`}>About Us</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">Elevating Digital Craftsmanship</h2>
          <p className="leading-relaxed">
            At Crowdfast Designs, we believe that high-quality design should be accessible to developers and entrepreneurs alike. We are a
            premier digital marketplace dedicated to providing elite, production-ready frontend templates, SaaS dashboards, and
            comprehensive UI kits that help you launch faster without compromising on aesthetic or code quality.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">Our Mission</h2>
          <p className="leading-relaxed">
            Our mission is simple: to bridge the gap between design and development. We understand that time is your most valuable asset.
            That's why we meticulously craft and curate digital products that are not just visually stunning, but also built on modern,
            scalable stacks like React, Next.js, and Tailwind CSS. We empower you to focus on your core business logic while we handle the
            heavy lifting of UI/UX.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-white/5">
            <h3 className="mb-3 text-xl font-bold text-blue-600 dark:text-blue-400">Elite Quality</h3>
            <p className="text-sm">
              Every template in our store is built following the highest standards of clean code, responsiveness, and performance
              optimization.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-white/5">
            <h3 className="mb-3 text-xl font-bold text-blue-600 dark:text-blue-400">Developer First</h3>
            <p className="text-sm">
              Our products are documented and logically structured, ensuring that customization is a seamless experience for developers of
              all levels.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">Why Choose Crowdfast?</h2>
          <ul className="list-disc space-y-3 pl-5">
            <li>
              <strong>Time Optimization:</strong> Save hundreds of hours of design and development time on every project.
            </li>
            <li>
              <strong>Modern Stack:</strong> Build on future-proof technologies (React 19, Next.js, Vite, TypeScript).
            </li>
            <li>
              <strong>Premium Aesthetics:</strong> Captivate your users with glassmorphism, dark-mode-first designs, and pixel-perfect
              layouts.
            </li>
            <li>
              <strong>Scalability:</strong> Modular components designed to grow alongside your application.
            </li>
          </ul>
        </section>

        <section className="border-t pt-10 text-center dark:border-gray-800">
          <h2 className="mb-4 text-2xl font-bold">Ready to Build Something Amazing?</h2>
          <p className="mb-6">Explore our collection and find the perfect foundation for your next big idea.</p>
          <a
            href="/"
            className="inline-block rounded-2xl bg-blue-600 px-8 py-3 font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 active:scale-95"
          >
            Browse Products
          </a>
        </section>

        <section className="text-center text-sm text-gray-500">
          <p>
            Have questions or interested in a custom collaboration?{' '}
            <a href="/legal/contact" className="text-blue-600 hover:underline">
              Get in touch
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
