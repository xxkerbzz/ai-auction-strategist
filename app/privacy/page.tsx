import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { generateMetadata as genMeta } from '../lib/seo-utils';

export const metadata: Metadata = genMeta({
  title: 'BidSmart Privacy Policy - How We Protect Your Data',
  description: 'BidSmart privacy policy. Learn how we collect, use, and protect your data. Your auction data is secure and confidential.',
  canonical: 'https://bidsmart.com/privacy',
});

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Privacy Policy', url: '/privacy' },
  ];

  return (
    <>
      <Navigation />
      <main>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-4xl font-bold text-gray-900 mt-4">Privacy Policy</h1>
            <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Information We Collect</h2>
            <p className="text-lg text-gray-600 mb-4">
              We collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Account information (name, email address, password)</li>
              <li>• Payment information (processed securely through third-party payment processors)</li>
              <li>• Auction listings and photos you upload for analysis</li>
              <li>• Usage data and analytics about how you use our platform</li>
            </ul>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">How We Use Your Information</h2>
            <p className="text-lg text-gray-600 mb-4">
              We use the information we collect to provide, maintain, and improve our services:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• To provide price predictions and bidding strategies</li>
              <li>• To process payments and manage your account</li>
              <li>• To communicate with you about your account and our services</li>
              <li>• To improve our AI models and prediction accuracy</li>
              <li>• To detect and prevent fraud or abuse</li>
            </ul>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Data Security</h2>
            <p className="text-lg text-gray-600 mb-4">
              We take your privacy seriously and implement industry-standard security measures to protect your data:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Encryption of data in transit and at rest</li>
              <li>• Secure authentication and access controls</li>
              <li>• Regular security audits and updates</li>
              <li>• Limited access to personal data on a need-to-know basis</li>
            </ul>
            <p className="text-lg text-gray-600 mt-6">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Your Rights</h2>
            <p className="text-lg text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Access your personal data</li>
              <li>• Correct inaccurate data</li>
              <li>• Request deletion of your data</li>
              <li>• Opt out of marketing communications</li>
              <li>• Export your data</li>
            </ul>
            <p className="text-lg text-gray-600 mt-6">
              To exercise these rights, please contact us at privacy@bidsmart.com.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@bidsmart.com
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
