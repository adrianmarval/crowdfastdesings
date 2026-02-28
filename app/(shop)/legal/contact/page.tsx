import type { Metadata } from 'next';
import { titleFont } from '@/config/fonts';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Crowdfast Designs. Find our company details, support hours, and contact information.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className={`${titleFont.className} mb-8 text-4xl font-bold`}>Contact Us & Company Information</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <section>
          <p>
            At Crowdfast Designs, we are committed to providing you with the best digital products. If you have any questions, concerns, or
            need support regarding your purchases, our policies, or our platform, please reach out to us.
          </p>
        </section>

        <section className="mt-8 rounded-lg bg-slate-50 p-8 dark:bg-slate-800">
          <h2 className="mb-6 text-2xl font-semibold">Company Information</h2>

          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-48 font-semibold">Legal Company Name:</span>
              <span className="text-gray-700 dark:text-gray-300">Crowdfast Desings</span>
            </li>
            <li className="flex items-start">
              <span className="w-48 font-semibold">Registration Country:</span>
              <span className="text-gray-700 dark:text-gray-300">United States</span>
            </li>
            <li className="flex items-start">
              <span className="w-48 font-semibold">Support Email:</span>
              <a href="mailto:contact@crowdfast.store" className="text-blue-600 hover:underline">
                contact@crowdfast.store
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">Support Hours</h2>
          <p>
            Our support team generally responds to inquiries within 24-48 business hours. We review refund requests, account issues, and
            technical support queries related to downloaded assets.
          </p>
        </section>
      </div>
    </div>
  );
}
