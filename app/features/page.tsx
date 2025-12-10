import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { generateMetadata as genMeta } from '../lib/seo-utils';

export const metadata: Metadata = genMeta({
  title: 'BidSmart Features - Complete Auction Intelligence',
  description: 'Discover all BidSmart features: instant price predictions, bidding strategies, multi-platform support, bulk analysis, inventory management, and more.',
  canonical: 'https://bidsmart.com/features',
});

export default function FeaturesPage() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Features', url: '/features' },
  ];

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BidSmart',
    applicationCategory: 'Business Software',
    featureList: [
      'Instant Price Predictions',
      'Confidence Intervals and Market Analysis',
      'Comparable Sales Research',
      'Custom Bidding Strategies',
      'Multi-Platform Support',
      'Bulk Analysis for Resellers',
      'Inventory Management',
      'Profit Margin Tracking',
      'Tax Reporting Tools',
      'Underpriced Item Alerts',
    ],
  };

  return (
    <>
      <StructuredData schemaType="SoftwareApplication" data={softwareSchema} />
      <Navigation />
      <main>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-4xl font-bold text-gray-900 mt-4">Complete Auction Intelligence for Collectors and Resellers</h1>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Instant Price Predictions</h2>
            <p className="text-lg text-gray-600 mb-6">
              Get instant price predictions with confidence intervals based on thousands of completed auctions. Upload a photo or paste a listing link and receive accurate market value estimates within seconds.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">AI-Powered Analysis</h3>
                <p className="text-gray-700">Advanced machine learning analyzes item characteristics, condition, rarity, and market trends to predict accurate prices</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Confidence Intervals</h3>
                <p className="text-gray-700">See price ranges with confidence levels—know the likelihood of different price outcomes</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Confidence Intervals and Market Analysis</h2>
            <p className="text-lg text-gray-600 mb-6">
              Every prediction includes detailed market analysis showing price trends, volatility, and market conditions that affect value.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-gray-900">Price Range Predictions:</strong>
                  <span className="text-gray-700 ml-2">See likely low, mid, and high price outcomes with probability estimates</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-gray-900">Market Volatility Analysis:</strong>
                  <span className="text-gray-700 ml-2">Understand how stable or volatile prices are for similar items</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <strong className="text-gray-900">Seasonal Trends:</strong>
                  <span className="text-gray-700 ml-2">See how prices vary by season, holidays, and market cycles</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Comparable Sales Research</h2>
            <p className="text-lg text-gray-600 mb-6">
              Access detailed comparable sales data showing recent sales of similar items, including prices, dates, platforms, and condition details.
            </p>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Sales Data Includes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Recent Sales History</p>
                  <p className="text-gray-700">See the last 10-50 similar sales with dates and prices</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Condition Comparison</p>
                  <p className="text-gray-700">Compare your item's condition to sold items</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Platform Performance</p>
                  <p className="text-gray-700">See which platforms yield better prices for similar items</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Price Trends</p>
                  <p className="text-gray-700">Visualize how prices have changed over time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Custom Bidding Strategies</h2>
            <p className="text-lg text-gray-600 mb-6">
              Get actionable bidding strategies tailored to each auction, including timing recommendations, maximum bid calculations, and risk management.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Timing Strategies</h3>
                <p className="text-gray-700">Know exactly when to bid—early, mid-auction, or sniping in final seconds</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Maximum Bid Calculation</h3>
                <p className="text-gray-700">Get your optimal maximum bid based on market value and profit goals</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Risk Assessment</h3>
                <p className="text-gray-700">Understand when to walk away and when to bid aggressively</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Platform-Specific Tactics</h3>
                <p className="text-gray-700">Different strategies for eBay, Heritage Auctions, LiveAuctioneers, and more</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Multi-Platform Support</h2>
            <p className="text-lg text-gray-600 mb-6">
              BidSmart works across all major auction platforms, providing unified intelligence regardless of where you're bidding.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">eBay</h3>
                </div>
                <p className="text-sm text-gray-600">Full support for eBay auctions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Heritage Auctions</h3>
                </div>
                <p className="text-sm text-gray-600">High-end collectibles and fine art</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">LiveAuctioneers</h3>
                </div>
                <p className="text-sm text-gray-600">Live and timed online auctions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Specialty Houses</h3>
                </div>
                <p className="text-sm text-gray-600">Expanding platform support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Bulk Analysis for Resellers</h2>
            <p className="text-lg text-gray-600 mb-6">
              Professional resellers can analyze multiple items at once to quickly identify profitable opportunities and optimize inventory decisions.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  <span className="text-gray-700">Upload multiple photos or paste multiple listing links for batch analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-gray-700">Compare profit potential across multiple items at once</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-gray-700">Export analysis results to CSV for further analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Inventory Management</h2>
            <p className="text-lg text-gray-600 mb-6">
              Track your inventory, purchases, and sales all in one place. Organize items by category, track acquisition costs, and monitor sales performance.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Item Tracking</h3>
                <p className="text-gray-600">Organize and track all your auction purchases and inventory</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Purchase History</h3>
                <p className="text-gray-600">Maintain complete records of all purchases with prices and dates</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Sales Tracking</h3>
                <p className="text-gray-600">Track sales performance and identify best-selling categories</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Profit Margin Tracking</h2>
            <p className="text-lg text-gray-600 mb-6">
              Automatically calculate profit margins and ROI for all your purchases. See which categories and items yield the best returns.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Profit Analytics</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-gray-700">Automatic profit calculation for each purchase and sale</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-gray-700">ROI tracking and performance metrics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-gray-700">Category performance analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Tax Reporting Tools</h2>
            <p className="text-lg text-gray-600 mb-6">
              Generate comprehensive tax reports with purchase and sale data formatted for your accountant. Export to CSV or PDF for easy tax preparation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Tax Reports</h3>
                <p className="text-gray-700">Generate annual or quarterly tax reports with all purchase and sale data</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Export Options</h3>
                <p className="text-gray-700">Export to CSV or PDF formats compatible with tax software</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Underpriced Item Alerts</h2>
            <p className="text-lg text-gray-600 mb-6">
              Get alerts when underpriced items hit the market. Set up watchlists for specific items or categories and receive notifications when great deals appear.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Alert Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="text-gray-700">Email and SMS notifications for underpriced items</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <span className="text-gray-700">Customizable price thresholds and watchlists</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Real-time alerts as items are listed</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Ready to See All Features in Action?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Every feature is designed to eliminate guesswork in auction bidding. Start your free trial and experience the power of AI-powered auction intelligence.
            </p>
            <Link
              href="/pricing"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg inline-block"
            >
              See Pricing Plans
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
