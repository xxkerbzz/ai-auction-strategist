import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { generateMetadata as genMeta } from '../lib/seo-utils';

export const metadata: Metadata = genMeta({
  title: 'BidSmart Integrations - Supported Auction Platforms',
  description: 'BidSmart works across eBay, Heritage Auctions, LiveAuctioneers, and other major auction platforms. See all supported platforms and integration details.',
  canonical: 'https://bidsmart.com/integrations',
});

export default function IntegrationsPage() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Integrations', url: '/integrations' },
  ];

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BidSmart',
    applicationCategory: 'Business Software',
  };

  return (
    <>
      <StructuredData schemaType="SoftwareApplication" data={softwareSchema} />
      <Navigation />
      <main>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-4xl font-bold text-gray-900 mt-4">Supported Auction Platforms</h1>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">eBay Integration</h2>
            <p className="text-lg text-gray-600 mb-6">
              BidSmart provides full support for eBay auctions, including real-time bid tracking, sniping recommendations, and price predictions based on eBay's unique bidding dynamics.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Real-time auction monitoring</li>
                  <li>• Sniping strategy recommendations</li>
                  <li>• eBay-specific price predictions</li>
                  <li>• Seller reputation analysis</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">How It Works</h3>
                <p className="text-gray-700">Paste any eBay listing URL or upload a photo. BidSmart analyzes the listing, compares it to thousands of completed eBay auctions, and provides price predictions and bidding strategies.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Heritage Auctions Support</h2>
            <p className="text-lg text-gray-600 mb-6">
              Specialized analysis for high-end collectibles and fine art auctions on Heritage Auctions. Our models are trained on Heritage's unique auction format and bidding patterns.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fine art valuation</li>
                  <li>• Collectible authentication insights</li>
                  <li>• Heritage-specific bidding strategies</li>
                  <li>• Premium item analysis</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Best For</h3>
                <p className="text-gray-700">High-end collectors and dealers bidding on rare collectibles, fine art, jewelry, and luxury items at Heritage Auctions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">LiveAuctioneers Analysis</h2>
            <p className="text-lg text-gray-600 mb-6">
              Support for live auction events and timed online auctions on LiveAuctioneers. Get real-time insights for both live and online bidding scenarios.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Live Auction Support</h3>
                <p className="text-gray-700">Get price predictions and bidding strategies for live auction events, helping you bid confidently in real-time.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Timed Auction Analysis</h3>
                <p className="text-gray-700">Analyze timed online auctions with specific recommendations for when to bid and how much to offer.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Specialty Auction Houses</h2>
            <p className="text-lg text-gray-600 mb-6">
              BidSmart is expanding support for niche auction houses and specialty markets. Our platform adapts to different auction formats and bidding styles.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Currently Supported</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li>• Christie's</li>
                <li>• Sotheby's</li>
                <li>• Bonhams</li>
                <li>• Phillips</li>
                <li>• Regional auction houses</li>
                <li>• Specialty collectible markets</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Coming Soon Platforms</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're constantly adding support for new auction platforms. Here's what's coming soon:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">In Development</h3>
                <p className="text-gray-600">Additional specialty auction platforms and regional markets</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">API Integrations</h3>
                <p className="text-gray-600">Direct API integrations for real-time auction data</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Mobile Apps</h3>
                <p className="text-gray-600">Native mobile apps for iOS and Android</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Using BidSmart?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Cross-platform intelligence across major auction sites. Start your free trial today.
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
