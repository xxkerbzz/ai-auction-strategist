import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import StructuredData from './components/StructuredData';
import { generateMetadata as genMeta } from './lib/seo-utils';

export const metadata: Metadata = genMeta({
  title: 'BidSmart - Stop Bidding Blind. Know What It\'s Really Worth.',
  description: 'Stop bidding blind. Know what it\'s really worth. AI-powered auction intelligence that predicts prices and suggests winning bidding strategies across eBay, Heritage Auctions, and LiveAuctioneers.',
  canonical: 'https://ai-auction-strategist.vercel.app',
});

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BidSmart',
    url: 'https://ai-auction-strategist.vercel.app',
    logo: 'https://ai-auction-strategist.vercel.app/logo.png',
    description: 'AI-powered auction intelligence platform that predicts auction prices and suggests winning bidding strategies for collectors and resellers.',
    sameAs: [],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BidSmart',
    url: 'https://ai-auction-strategist.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ai-auction-strategist.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <StructuredData schemaType="Organization" data={organizationSchema} />
      <StructuredData schemaType="WebSite" data={websiteSchema} />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Stop Bidding Blind. Know What It's Really Worth.
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Most people lose money at auctions because they're bidding blind. BidSmart analyzes thousands of completed auctions to predict prices and tells you exactly when to bid, how much to offer, and when to walk away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pricing"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/product"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors border-2 border-white"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How BidSmart Transforms Auction Bidding */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              How BidSmart Transforms Auction Bidding
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Instant Price Predictions</h3>
                <p className="text-gray-600">
                  Upload a photo or paste a listing link and get instant price predictions with confidence intervals based on thousands of completed auctions.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Custom Bidding Strategies</h3>
                <p className="text-gray-600">
                  Get actionable bidding strategies with specific timing recommendations. For a vintage watch, it might say "bid up to $850 in the final 30 seconds."
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Multi-Platform Intelligence</h3>
                <p className="text-gray-600">
                  Works across eBay, Heritage Auctions, LiveAuctioneers, and other major auction platforms. One tool for all your auction needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instant Price Predictions with Confidence Intervals */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Instant Price Predictions with Confidence Intervals
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  No more guessing what an item is worth. BidSmart analyzes thousands of completed auctions to provide accurate price predictions with confidence intervals.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  See comparable sales data showing recent sales of similar items and grades. Know exactly what to expect before you place your first bid.
                </p>
                <Link
                  href="/product"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn How It Works
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="border-l-4 border-blue-600 pl-4 mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Example Prediction</h3>
                  <p className="text-gray-600">
                    "This vintage watch will likely sell for <strong>$800-$1,200</strong>. Based on 47 similar sales, we recommend bidding up to <strong>$850</strong> in the final 30 seconds."
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Confidence: 87% | Comparable Sales: 47 | Last Updated: Today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Bidding Strategies That Win */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Custom Bidding Strategies That Win
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                BidSmart doesn't just show you data—it tells you exactly how to use it. Get specific timing recommendations, maximum bid calculations, and risk management strategies.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Timing Recommendations</h3>
                <p className="text-gray-600">
                  Know exactly when to bid. Get recommendations like "bid in the final 30 seconds" or "place your maximum bid 2 hours before close" based on auction patterns.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Maximum Bid Calculation</h3>
                <p className="text-gray-600">
                  Never overpay again. BidSmart calculates your optimal maximum bid based on market value, comparable sales, and your profit goals.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Risk Management</h3>
                <p className="text-gray-600">
                  Understand when to walk away. Get alerts when items are likely to exceed your budget or when market conditions suggest waiting.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Multi-Platform Strategies</h3>
                <p className="text-gray-600">
                  Different platforms require different tactics. BidSmart adapts its strategies for eBay, Heritage Auctions, LiveAuctioneers, and specialty auction houses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted by Collectors and Resellers */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Trusted by Collectors and Resellers
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join thousands of smarter bidders who never wonder "what's this really worth?" again. Turn gut-feeling bidding into data-driven profit optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Start Your Free Trial
              </Link>
              <Link
                href="/about"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors border-2 border-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Get Started Today */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stop bidding blind. Start making smarter auction decisions with AI-powered price predictions and bidding strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
