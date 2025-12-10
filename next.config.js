/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure content directory is included in serverless function bundles
  // This is critical for Vercel deployments where files need to be explicitly included
  experimental: {
    outputFileTracingIncludes: {
      '/resources/[...slug]': [
        './SEO Strategy/content/**/*',
        './SEO Strategy/**/*',
      ],
      '/resources': [
        './SEO Strategy/content/**/*',
        './SEO Strategy/**/*',
      ],
      '/sitemap.xml': [
        './SEO Strategy/content/**/*',
        './SEO Strategy/**/*',
      ],
    },
  },
};

module.exports = nextConfig;
