import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { generateMetadata as genMeta } from '../lib/seo-utils';

export const metadata: Metadata = genMeta({
  title: 'BidSmart Terms of Service - User Agreement',
  description: 'BidSmart terms of service and user agreement. Clear terms for using our auction intelligence platform.',
  canonical: 'https://ai-auction-strategist.vercel.app/terms',
});

export default function TermsPage() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Terms of Service', url: '/terms' },
  ];

  return (
    <>
      <Navigation />
      <main>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-4xl font-bold text-gray-900 mt-4">Terms of Service</h1>
            <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Acceptance of Terms</h2>
            <p className="text-lg text-gray-600 mb-4">
              By accessing and using BidSmart, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Service Description</h2>
            <p className="text-lg text-gray-600 mb-4">
              BidSmart is an AI-powered auction intelligence platform that provides price predictions, comparable sales data, and bidding strategies. Our service analyzes auction data to provide insights, but we do not guarantee auction outcomes.
            </p>
            <p className="text-lg text-gray-600">
              Price predictions are estimates based on historical data and should not be considered as guarantees of future auction results.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">User Responsibilities</h2>
            <p className="text-lg text-gray-600 mb-4">
              You are responsible for:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Maintaining the confidentiality of your account credentials</li>
              <li>• All activities that occur under your account</li>
              <li>• Using our service in compliance with all applicable laws</li>
              <li>• Not using our service for any illegal or unauthorized purpose</li>
              <li>• Not attempting to reverse engineer or extract our data or algorithms</li>
            </ul>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Payment Terms</h2>
            <p className="text-lg text-gray-600 mb-4">
              Subscription fees are billed in advance on a monthly or annual basis. By subscribing, you authorize us to charge your payment method for the subscription fee.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• All fees are non-refundable except as required by law</li>
              <li>• You may cancel your subscription at any time</li>
              <li>• Cancellation takes effect at the end of the current billing period</li>
              <li>• We reserve the right to change our pricing with 30 days notice</li>
            </ul>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Limitation of Liability</h2>
            <p className="text-lg text-gray-600 mb-4">
              BidSmart provides price predictions and bidding strategies based on historical data analysis. We do not guarantee:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• The accuracy of price predictions</li>
              <li>• That you will win any auction</li>
              <li>• That bidding strategies will be successful</li>
              <li>• Any specific outcomes from using our service</li>
            </ul>
            <p className="text-lg text-gray-600 mt-6">
              To the maximum extent permitted by law, BidSmart shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@bidsmart.com
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Address:</strong> BidSmart, [Address]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
