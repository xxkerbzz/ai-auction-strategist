const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure content directory is included in serverless function bundles
  // This is critical for Vercel deployments where files need to be explicitly included
  experimental: {
    outputFileTracingIncludes: {
      // Use absolute paths from project root
      '/resources/[...slug]': [
        path.join(process.cwd(), 'SEO Strategy', 'content', '**', '*'),
      ],
      '/resources': [
        path.join(process.cwd(), 'SEO Strategy', 'content', '**', '*'),
      ],
      '/sitemap.xml': [
        path.join(process.cwd(), 'SEO Strategy', 'content', '**', '*'),
      ],
    },
  },
};

module.exports = nextConfig;
