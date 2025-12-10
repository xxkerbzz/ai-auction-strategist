import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { generateMetadata as genMeta } from '../lib/seo-utils';

export const metadata: Metadata = genMeta({
  title: 'BidSmart Product - AI Auction Intelligence Platform',
  description: 'Learn how BidSmart analyzes thousands of completed auctions to predict prices and provide custom bidding strategies. See how our AI auction intelligence works.',
  canonical: 'https://ai-auction-strategist.vercel.app/product',
});

export default function ProductPage() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Product', url: '/product' },
  ];

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BidSmart',
    applicationCategory: 'Business Software',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '29',
      priceCurrency: 'USD',
    },
    description: 'AI-powered auction intelligence platform that predicts auction prices and suggests winning bidding strategies for collectors and resellers.',
  };

  return (
    <>
      <StructuredData schemaType="SoftwareApplication" data={softwareSchema} />
      <Navigation />
      <main>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-4xl font-bold text-gray-900 mt-4">How BidSmart Works</h1>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Upload a Photo or Paste a Listing Link</h2>
            <p className="text-lg text-gray-600 mb-6">
              Getting started with BidSmart is simple. Upload a photo of the item you're interested in, or paste a listing link from eBay, Heritage Auctions, LiveAuctioneers, or other major auction platforms.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our AI analyzes the item using computer vision and natural language processing to identify key characteristics like brand, model, condition, rarity, and other factors that affect value. No manual data entry required—just upload and get instant insights.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Photo Upload</h3>
                <p className="text-gray-700">
                  Take or upload a photo of the item. Our AI recognizes items from watches and jewelry to collectibles and art. Works with single items or multiple items in one photo.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Listing Link Analysis</h3>
                <p className="text-gray-700">
                  Paste any auction listing URL and BidSmart automatically extracts item details, current bid, time remaining, and seller information to provide comprehensive analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Instant Price Prediction Analysis</h2>
            <p className="text-lg text-gray-600 mb-6">
              Within seconds, BidSmart analyzes thousands of completed auctions to predict what your item will likely sell for. Our prediction engine considers:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Historical sales data:</strong> Analyzes thousands of similar completed auctions across all platforms</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Condition and grading:</strong> Factors in item condition, authenticity, and professional grading where applicable</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Market trends:</strong> Considers recent market movements and seasonal patterns</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Platform dynamics:</strong> Adjusts predictions based on platform-specific bidding behavior and fees</span>
              </li>
            </ul>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Example Prediction</h3>
              <p className="text-lg text-gray-700 mb-4">
                "This vintage Rolex Submariner will likely sell for <strong>$8,000-$12,000</strong>. Based on 47 similar sales in the past 6 months, we recommend bidding up to <strong>$9,500</strong> in the final 30 seconds."
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Confidence: 87% | Comparable Sales: 47 | Last Updated: Today
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Comparable Sales Data and Market Insights</h2>
            <p className="text-lg text-gray-600 mb-6">
              Every prediction includes detailed comparable sales data showing recent sales of similar items. See exactly what similar items sold for, when they sold, and on which platform.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Price Trends</h3>
                <p className="text-gray-600">See how prices have changed over time for similar items</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Condition Comparison</h3>
                <p className="text-gray-600">Compare your item's condition to similar sold items</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Platform Analysis</h3>
                <p className="text-gray-600">See which platforms typically yield better prices for similar items</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Custom Bidding Strategy Recommendations</h2>
            <p className="text-lg text-gray-600 mb-6">
              BidSmart doesn't just tell you what something is worth—it tells you exactly how to bid. Get specific timing recommendations, maximum bid calculations, and risk management strategies tailored to each auction.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Strategy Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700"><strong>Timing recommendations:</strong> Know exactly when to bid—"place your maximum bid in the final 30 seconds" or "bid early to establish presence"</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700"><strong>Maximum bid calculation:</strong> Get your optimal maximum bid based on market value and your profit goals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700"><strong>Risk assessment:</strong> Understand when to walk away—get alerts when items are likely to exceed your budget</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-700"><strong>Multi-platform strategies:</strong> Different tactics for eBay vs Heritage Auctions vs LiveAuctioneers</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Multi-Platform Auction Intelligence</h2>
            <p className="text-lg text-gray-600 mb-6">
              BidSmart works across all major auction platforms, providing unified intelligence regardless of where you're bidding. Our cross-platform analysis gives you a complete picture of the market.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">eBay Integration</h3>
                <p className="text-gray-600">Full support for eBay auctions with real-time bid tracking and sniping recommendations</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Heritage Auctions</h3>
                <p className="text-gray-600">Specialized analysis for high-end collectibles and fine art auctions</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">LiveAuctioneers</h3>
                <p className="text-gray-600">Support for live auction events and timed online auctions</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Specialty Platforms</h3>
                <p className="text-gray-600">Expanding support for niche auction houses and specialty markets</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Professional Tools for Resellers</h2>
            <p className="text-lg text-gray-600 mb-6">
              Professional resellers get advanced tools including bulk analysis, inventory management, profit margin tracking, and tax reporting—all in one platform.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Pro Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  <span className="text-gray-700"><strong>Bulk analysis:</strong> Analyze multiple items at once to quickly identify profitable opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-gray-700"><strong>Inventory management:</strong> Track your inventory, purchases, and sales all in one place</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-gray-700"><strong>Profit margin tracking:</strong> Automatically calculate profit margins and ROI for all your purchases</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-gray-700"><strong>Tax reporting:</strong> Generate tax reports with purchase and sale data formatted for your accountant</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Making Smarter Bids?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of collectors and resellers who never wonder "what's this really worth?" again. Start your free trial today.
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
