import { titleFont } from '@/config/fonts';

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className={`${titleFont.className} mb-8 text-4xl font-bold`}>Terms and Conditions</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <p>
          <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
        </p>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Crowdfast Designs ("we," "our," or "us"). These Terms and Conditions govern your use of our website and services. By
            accessing or using our platform, you agree to be bound by these terms. If you disagree with any part of these terms, you may not
            access the service.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">2. Digital Products</h2>
          <p>
            Crowdfast Designs is a marketplace for digital goods, including but not limited to web templates, dashboards, and UI kits. As
            these are digital assets, delivery is fulfilled electronically upon successful payment.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Intellectual Property and Licensing</h2>
          <p>
            All products available on Crowdfast Designs remain the intellectual property of their respective creators. When you purchase a
            digital product, you are granted a license to use the product according to the specific terms outlined during your purchase. You
            may not resell, redistribute, or claim ownership of the original files unless explicitly permitted by the product's license.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">4. User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure
            to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service. You are
            responsible for safeguarding the password that you use to access the service.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">5. Pricing and Payments</h2>
          <p>
            All prices are listed in US Dollars (USD) unless otherwise stated. We reserve the right to change our prices at any time. We use
            secure third-party payment processors (such as Stripe and PayPal) to handle transactions.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">6. Limitation of Liability</h2>
          <p>
            In no event shall Crowdfast Designs, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any
            indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use,
            goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of
            law provisions.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">8. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30
            days notice prior to any new terms taking effect.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:{' '}
            <a href="mailto:contact@crowdfast.store" className="text-blue-600 hover:underline">
              contact@crowdfast.store
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
