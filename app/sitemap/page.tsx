'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

interface SitemapSection {
  title: string;
  urls: SitemapUrl[];
}

const breadcrumbs = [
  { label: 'Home', url: '/' },
  { label: 'Sitemap', url: '/sitemap' },
];

function parseSitemapXml(xmlText: string): SitemapUrl[] {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  const urlElements = xmlDoc.getElementsByTagName('url');
  const urls: SitemapUrl[] = [];

  for (let i = 0; i < urlElements.length; i++) {
    const urlElement = urlElements[i];
    const loc = urlElement.getElementsByTagName('loc')[0]?.textContent || '';
    const lastmod = urlElement.getElementsByTagName('lastmod')[0]?.textContent;
    const changefreq = urlElement.getElementsByTagName('changefreq')[0]?.textContent;
    const priority = urlElement.getElementsByTagName('priority')[0]?.textContent;

    // Extract path from full URL
    try {
      const url = new URL(loc);
      const path = url.pathname;

      urls.push({
        loc: path,
        lastmod,
        changefreq,
        priority,
      });
    } catch {
      // If URL parsing fails, use the loc as-is
      urls.push({
        loc: loc.replace(/^https?:\/\/[^/]+/, '') || loc,
        lastmod,
        changefreq,
        priority,
      });
    }
  }

  return urls;
}

function organizeUrls(urls: SitemapUrl[]): SitemapSection[] {
  const sections: SitemapSection[] = [];
  
  // Core pages
  const corePages = urls.filter(url => {
    const path = url.loc;
    return path === '/' || 
           path.startsWith('/product') ||
           path.startsWith('/features') ||
           path.startsWith('/pricing') ||
           path.startsWith('/about') ||
           path.startsWith('/contact') ||
           path.startsWith('/faq') ||
           path.startsWith('/integrations') ||
           (path.startsWith('/resources') && path === '/resources');
  });
  
  if (corePages.length > 0) {
    sections.push({
      title: 'Main Pages',
      urls: corePages,
    });
  }

  // Legal pages
  const legalPages = urls.filter(url => 
    url.loc.startsWith('/privacy') || url.loc.startsWith('/terms')
  );
  
  if (legalPages.length > 0) {
    sections.push({
      title: 'Legal Pages',
      urls: legalPages,
    });
  }

  // Resource pages - organize by pillar
  const resourcePages = urls.filter(url => 
    url.loc.startsWith('/resources/') && url.loc !== '/resources'
  );

  // Group by pillar (first segment after /resources/)
  const pillarGroups: Record<string, SitemapUrl[]> = {};

  resourcePages.forEach(url => {
    const pathParts = url.loc.split('/').filter(Boolean);
    if (pathParts.length >= 2) {
      const pillar = pathParts[1]; // e.g., 'auction-price-prediction'
      if (!pillarGroups[pillar]) {
        pillarGroups[pillar] = [];
      }
      pillarGroups[pillar].push(url);
    }
  });

  // Convert pillar groups to sections
  Object.entries(pillarGroups).forEach(([pillar, pillarUrls]) => {
    // Sort: pillar page first, then subtopics, then articles
    pillarUrls.sort((a, b) => {
      const aDepth = a.loc.split('/').filter(Boolean).length;
      const bDepth = b.loc.split('/').filter(Boolean).length;
      if (aDepth !== bDepth) return aDepth - bDepth;
      return a.loc.localeCompare(b.loc);
    });

    const formattedTitle = pillar
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    sections.push({
      title: formattedTitle,
      urls: pillarUrls,
    });
  });

  return sections;
}

function formatDate(dateString?: string): string {
  if (!dateString) return 'N/A';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  } catch {
    return dateString;
  }
}

function getPageTitle(path: string): string {
  if (path === '/') return 'Home';
  
  const parts = path.split('/').filter(Boolean);
  if (parts.length === 0) return 'Home';
  
  // Get the last part and format it
  const lastPart = parts[parts.length - 1];
  return lastPart
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function SitemapPage() {
  const [sections, setSections] = useState<SitemapSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalUrls, setTotalUrls] = useState(0);

  useEffect(() => {
    async function fetchSitemap() {
      try {
        setLoading(true);
        const response = await fetch('/sitemap.xml');
        
        if (!response.ok) {
          throw new Error('Failed to fetch sitemap');
        }

        const xmlText = await response.text();
        const urls = parseSitemapXml(xmlText);
        const organized = organizeUrls(urls);
        
        setSections(organized);
        setTotalUrls(urls.length);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load sitemap');
        console.error('Error fetching sitemap:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchSitemap();
  }, []);

  const resourcePillars = sections.filter(section => 
    !['Main Pages', 'Legal Pages'].includes(section.title)
  ).length;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={breadcrumbs} />
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-gray-600">
              Complete list of all pages on BidSmart
            </p>
          </div>

          {loading && (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading sitemap...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
              <p className="text-red-800">Error: {error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">{totalUrls}</div>
                  <div className="text-sm text-gray-600">Total Pages</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">{sections.length}</div>
                  <div className="text-sm text-gray-600">Sections</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">{resourcePillars}</div>
                  <div className="text-sm text-gray-600">Resource Pillars</div>
                </div>
              </div>

              {sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                    {section.title}
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Page
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Modified
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Change Frequency
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Priority
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {section.urls.map((url, urlIndex) => (
                          <tr key={urlIndex} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Link
                                href={url.loc}
                                className="text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                {getPageTitle(url.loc)}
                              </Link>
                              <div className="text-sm text-gray-500 mt-1">{url.loc}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(url.lastmod)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {url.changefreq || 'N/A'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {url.priority || 'N/A'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
