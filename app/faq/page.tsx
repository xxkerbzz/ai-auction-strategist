import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { generateMetadata as genMeta } from '../lib/seo-utils';

export const metadata: Metadata = genMeta({
  title: 'BidSmart FAQ - Frequently Asked Questions',
  description: 'Frequently asked questions about BidSmart: how it works, pricing, features, platform support, and more. Get answers to common questions.',
  canonical: 'https://ai-auction-strategist.vercel.app/faq',
});

export default function FAQPage() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'FAQ', url: '/faq' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does BidSmart work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BidSmart analyzes thousands of completed auctions to predict prices and suggest bidding strategies. Upload a photo or paste a listing link to get instant price predictions with confidence intervals and custom bidding recommendations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a free trial?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All plans include a 14-day free trial with no credit card required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which auction platforms does BidSmart support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BidSmart works across eBay, Heritage Auctions, LiveAuctioneers, and other major auction platforms. We\'re constantly adding support for new platforms.',
        },
      },
    ],
  };

  return (
    <>
      <StructuredData schemaType="FAQPage" data={faqSchema} />
      <Navigation />
      <main>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-4xl font-bold text-gray-900 mt-4">Frequently Asked Questions</h1>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Getting Started</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">How do I get started with BidSmart?</h3>
                <p className="text-gray-600">Getting started is easy. Sign up for a free trial, upload a photo or paste a listing link, and get instant price predictions. No credit card required to start.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Is there a free trial?</h3>
                <p className="text-gray-600">Yes! All plans include a 14-day free trial. No credit card required to start. You can cancel anytime during the trial period.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Do I need to install any software?</h3>
                <p className="text-gray-600">No. BidSmart is a web-based platform that works in any modern browser. No downloads or installations required.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">How It Works</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">How does BidSmart predict prices?</h3>
                <p className="text-gray-600">BidSmart uses AI and machine learning to analyze thousands of completed auctions. It considers item characteristics, condition, rarity, market trends, and platform dynamics to provide accurate price predictions with confidence intervals.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">How accurate are the price predictions?</h3>
                <p className="text-gray-600">Price predictions are based on historical data from thousands of completed auctions. Accuracy varies by item type and market conditions, but we provide confidence intervals so you know the reliability of each prediction.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">How quickly do I get results?</h3>
                <p className="text-gray-600">Most analyses complete within seconds. Upload a photo or paste a listing link, and you'll receive price predictions, comparable sales data, and bidding strategies almost instantly.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Pricing and Plans</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">What's the difference between Collector and Professional plans?</h3>
                <p className="text-gray-600">The Collector plan ($29/month) is perfect for casual collectors with up to 50 analyses per month. The Professional plan ($99/month) includes unlimited analyses, bulk analysis, inventory management, profit tracking, and tax reporting tools.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Can I cancel anytime?</h3>
                <p className="text-gray-600">Yes, absolutely. There are no long-term contracts. Cancel anytime from your account settings.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Do you offer annual plans?</h3>
                <p className="text-gray-600">Yes, annual plans save you 20% compared to monthly billing. Contact us for details.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Features and Capabilities</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">What types of items can BidSmart analyze?</h3>
                <p className="text-gray-600">BidSmart can analyze a wide variety of items including watches, jewelry, collectibles, art, antiques, and more. Our AI recognizes items from photos or listing descriptions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">What information do I get with each analysis?</h3>
                <p className="text-gray-600">Each analysis includes price predictions with confidence intervals, comparable sales data, market trends, and custom bidding strategies with timing recommendations.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Can I analyze multiple items at once?</h3>
                <p className="text-gray-600">Yes, Professional plan users can use bulk analysis to analyze multiple items simultaneously, perfect for resellers evaluating inventory.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Platform Support</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Which auction platforms does BidSmart support?</h3>
                <p className="text-gray-600">BidSmart works across eBay, Heritage Auctions, LiveAuctioneers, and other major auction platforms. We're constantly adding support for new platforms.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Do I need accounts on these platforms to use BidSmart?</h3>
                <p className="text-gray-600">No. You can analyze items from any platform by uploading a photo or pasting a listing link. You don't need accounts on the auction platforms.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Account and Billing</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">How do I update my billing information?</h3>
                <p className="text-gray-600">You can update your billing information anytime from your account settings.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Still have questions?</h3>
                <p className="text-gray-600">If you have more questions, please <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>. We're here to help!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Making Smarter Bids?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Everything you need to know about BidSmart. Start your free trial today and experience the power of AI-powered auction intelligence.
            </p>
            <Link
              href="/pricing"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg inline-block"
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
