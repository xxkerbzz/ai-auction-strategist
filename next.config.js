/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure content directory is included in serverless function bundles
  // This is critical for Vercel deployments where files need to be explicitly included
  // Paths are relative to project root
  experimental: {
    outputFileTracingIncludes: {
      '/resources/[...slug]': [
        'SEO Strategy/content/**/*',
      ],
      '/resources': [
        'SEO Strategy/content/**/*',
      ],
      '/sitemap.xml': [
        'SEO Strategy/content/**/*',
      ],
    },
  },
};

module.exports = nextConfig;
