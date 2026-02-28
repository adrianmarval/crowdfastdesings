import { titleFont } from '@/config/fonts';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className={`${titleFont.className} mb-8 text-4xl font-bold`}>Privacy Policy</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <p>
          <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
        </p>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Information We Collect</h2>
          <p>At Crowdfast Designs, we collect various types of information in connection with the services we provide, including:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              <strong>Personal Information:</strong> Name, email address, billing address, and phone number when you register for an account
              or make a purchase.
            </li>
            <li>
              <strong>Payment Information:</strong> We do not store your full credit card functionality. Payment processing is handled
              securely by third-party processors like PayPal and Stripe. We only receive limited transaction details.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you navigate and use our platform (e.g., IP address, browser type, device
              information).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">2. How We Use Your Information</h2>
          <p>The information we collect is used to:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Provide, operate, and maintain our website.</li>
            <li>Process transactions and send related information, including purchase confirmations and invoices.</li>
            <li>Manage your account and provide customer support.</li>
            <li>Send technical notices, updates, security alerts, and administrative messages.</li>
            <li>Communicate with you about products, services, offers, and events (you can opt-out at any time).</li>
          </ul>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Sharing Your Information</h2>
          <p>We respect your privacy. We do not sell your personal information. We may share information with:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              <strong>Service Providers:</strong> Third-party vendors that provide services on our behalf (e.g., payment processing via
              Stripe/PayPal, email delivery via Resend).
            </li>
            <li>
              <strong>Legal Compliance:</strong> When required by law or to respond to legal process.
            </li>
          </ul>
          <p className="mt-2">
            <em>Specifically regarding Stripe:</em> If you choose to pay via Stripe, your payment data is passed directly to Stripe. You can
            review Stripe's Privacy Policy at{' '}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              stripe.com/privacy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">4. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure,
            or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">5. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, or delete your personal information. You can manage your
            account information securely from your profile dashboard.
          </p>
        </section>

        <section>
          <h2 className="mt-8 mb-4 text-2xl font-semibold">6. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:contact@crowdfast.store" className="text-blue-600 hover:underline">
              contact@crowdfast.store
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
