import { titleFont } from '@/config/fonts';

export default function RefundsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className={`${titleFont.className} mb-8 text-4xl font-bold`}>Refund and Cancellation Policy</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <p>
          <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
        </p>

        <section>
          <p>
            At Crowdfast Designs, we want to ensure you are fully satisfied with your purchase. Because we deal explicitly in digital goods
            (such as templates, UI kits, and dashboards) that can be easily duplicated once downloaded, our refund policy has specific
            limitations.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Eligibility for a Refund</h2>
          <p>
            We offer refunds <strong>only</strong> under the following specific condition:
          </p>
          <div className="my-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-slate-800">
            <p className="font-medium text-blue-900 dark:text-blue-100">
              The purchased digital product is fundamentally not as described or advertised on the sales page at the time of purchase.
            </p>
          </div>
          <p>
            If you believe the product you downloaded critically fails to function as advertised, or lacks major features explicitly stated
            on the product page, you may be eligible for a full refund.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">2. Non-Refundable Circumstances</h2>
          <p>
            To protect our creators and the nature of digital intellectual property, we <strong>cannot</strong> offer refunds for the
            following reasons:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>You changed your mind after downloading the product.</li>
            <li>You purchased the item by mistake.</li>
            <li>You lack the technical expertise to use the product/framework (e.g., buying a Next.js template without knowing React).</li>
            <li>The product did not include features that were never advertised.</li>
            <li>"Buyer's remorse" or discovering you no longer need the product after download.</li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">3. The Refund Process</h2>
          <p>
            To request a refund under the eligible condition, you must contact us within <strong>14 days</strong> of your original purchase
            date.
          </p>
          <p className="mt-2">
            Please email us at{' '}
            <a href="mailto:contact@crowdfast.store" className="text-blue-600 hover:underline">
              contact@crowdfast.store
            </a>{' '}
            and include:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Your Order ID or Transaction Number.</li>
            <li>The email address used to make the purchase.</li>
            <li>A detailed explanation of why the product is not as described, including screenshots or specific examples.</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            *We review all refund requests case-by-case and aim to respond within 3-5 business days. If approved, the refund will be
            processed back to your original method of payment (PayPal/Stripe).
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">4. Cancellations</h2>
          <p>
            Because our digital products are delivered immediately upon successful payment verification, traditional "order cancellations"
            prior to delivery are generally not possible. Once the download link is generated, the order is considered fulfilled.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">5. Repercussions of Chargebacks</h2>
          <p>
            We encourage users to reach out to our support team first to resolve any disputes amicably. Initiating an unauthorized
            chargeback or dispute through your bank, PayPal, or Stripe without first attempting resolution directly may result in a
            permanent ban from the Crowdfast Designs platform.
          </p>
        </section>
      </div>
    </div>
  );
}
