import Link from 'next/link';
import NavigationDropdown from './NavigationDropdown';
import MobileMenuToggle from './MobileMenuToggle';

interface NavItem {
  label: string;
  url: string;
  dropdown?: NavItem[];
}

interface NavigationProps {
  items?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: 'Home', url: '/' },
  { label: 'Product', url: '/product' },
  { label: 'Features', url: '/features' },
  { label: 'Pricing', url: '/pricing' },
  {
    label: 'Resources',
    url: '/resources',
    dropdown: [
      { label: 'Auction Price Prediction', url: '/resources/auction-price-prediction' },
      { label: 'Bidding Strategies', url: '/resources/bidding-strategies' },
      { label: 'Auction Platforms', url: '/resources/auction-platforms' },
      { label: 'Collecting and Reselling', url: '/resources/collecting-and-reselling' },
      { label: 'Auction Market Intelligence', url: '/resources/auction-market-intelligence' },
    ],
  },
  { label: 'About', url: '/about' },
  { label: 'FAQ', url: '/faq' },
  { label: 'Contact', url: '/contact' },
];

export default function Navigation({ items = defaultNavItems }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              BidSmart
            </Link>
          </div>

          {/* Desktop Navigation - All links rendered in initial HTML for SEO */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {items.map((item) => {
              if (!item.dropdown) {
                // Regular link - rendered directly in server component for SEO
                return (
                  <Link
                    key={item.url}
                    href={item.url}
                    className="text-gray-900 hover:text-blue-600 transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                );
              }
              // Dropdown - use client component for interactivity, but links are in initial HTML
              return <NavigationDropdown key={item.url} item={item} />;
            })}
          </div>

          <MobileMenuToggle />
        </div>
        
        {/* Mobile Menu - All links rendered in server component for SEO, visibility controlled by client component */}
        <div id="mobile-menu" className="md:hidden hidden py-4 border-t border-gray-200">
          {items.map((item) => (
            <div key={item.url}>
              {item.dropdown ? (
                <div className="py-2">
                  <div className="text-gray-900 font-medium py-2">{item.label}</div>
                  <div className="pl-4">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.url}
                        href={dropdownItem.url}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.url}
                  className="block py-2 text-gray-900 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
