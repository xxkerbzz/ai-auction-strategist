'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavItem {
  label: string;
  url: string;
  dropdown?: NavItem[];
}

interface NavigationDropdownProps {
  item: NavItem;
}

export default function NavigationDropdown({ item }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  // This component only handles dropdown items (which have dropdown property)
  // All links are always rendered in the DOM for SEO, visibility controlled by CSS
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.url}
        className="flex items-center cursor-pointer py-2 text-gray-900 hover:text-blue-600 transition-colors"
      >
        <span>{item.label}</span>
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Link>
      {/* All dropdown links always rendered in HTML for SEO, visibility controlled by CSS */}
      <div className={`absolute left-0 top-full pt-1 z-50 ${isOpen ? '' : 'hidden'}`}>
        <div className="bg-white border rounded-md shadow-lg py-2 min-w-[200px]">
          {item.dropdown?.map((dropdownItem) => (
            <Link
              key={dropdownItem.url}
              href={dropdownItem.url}
              className="block px-4 py-2 text-sm text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {dropdownItem.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
