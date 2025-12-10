import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { generateMetadata as genMeta } from '../lib/seo-utils';

export const metadata: Metadata = genMeta({
  title: 'About BidSmart - Our Mission to Transform Auction Bidding',
  description: 'Learn about BidSmart\'s mission to transform auction bidding with AI-powered intelligence. Built by collectors and resellers, for collectors and resellers.',
  canonical: 'https://ai-auction-strategist.vercel.app/about',
});

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
  ];

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BidSmart',
    url: 'https://ai-auction-strategist.vercel.app',
    description: 'AI-powered auction intelligence platform for collectors and resellers',
  };

  return (
    <>
      <StructuredData schemaType="Organization" data={orgSchema} />
      <Navigation />
      <main>
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs items={breadcrumbs} />
            <h1 className="text-4xl font-bold text-gray-900 mt-4">About BidSmart</h1>
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              BidSmart was founded with a simple mission: to transform auction bidding from guesswork into data-driven decision making. We believe every collector and reseller should have access to the same intelligence that professional auction houses use, without the high costs or complexity.
            </p>
            <p className="text-lg text-gray-600">
              Our goal is to eliminate blind bidding—the frustrating experience of seeing something you want, guessing what it's worth, and either overpaying or getting outbid by someone who knows something you don't. We're committed to making auction intelligence accessible to everyone.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why We Built BidSmart</h2>
            <p className="text-lg text-gray-600 mb-4">
              As collectors and resellers ourselves, we experienced the frustration of bidding blind. We tried researching prices manually, but found it time-consuming and incomplete. We tried single-platform tools, but found they didn't give us the cross-platform intelligence we needed.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We realized that auction intelligence shouldn't be limited to professional dealers with expensive subscriptions. Every bidder deserves to know what items are really worth before placing a bid. That's why we built BidSmart: to democratize auction intelligence and turn gut-feeling bidders into data-driven profit machines.
            </p>
            <p className="text-lg text-gray-600">
              We understand the frustration of overpaying or losing bids due to lack of information. We've been there. That's why every feature in BidSmart is designed to eliminate guesswork and give you the confidence to bid smart.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Commitment to Data-Driven Bidding</h2>
            <p className="text-lg text-gray-600 mb-6">
              Data-driven decision making is at the core of everything we do. We're committed to:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700"><strong>Accurate Predictions:</strong> Using thousands of completed auctions to provide reliable price predictions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700"><strong>Actionable Strategies:</strong> Providing specific bidding recommendations, not just data dumps</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700"><strong>Cross-Platform Intelligence:</strong> Working across all major auction platforms for complete market visibility</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700"><strong>Continuous Improvement:</strong> Constantly updating our models with new auction data for better accuracy</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Thousands of Smarter Bidders</h2>
            <p className="text-lg text-gray-600 mb-6">
              BidSmart is trusted by thousands of collectors and resellers who never wonder "what's this really worth?" again. From casual collectors buying vintage watches to professional resellers managing inventory, our users rely on BidSmart to make smarter auction decisions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're bidding on eBay, Heritage Auctions, LiveAuctioneers, or specialty auction houses, BidSmart gives you the intelligence you need to bid with confidence.
            </p>
            <Link
              href="/pricing"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-block"
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
