/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure content directory is included in serverless function bundles
  experimental: {
    outputFileTracingIncludes: {
      '/resources/[...slug]': ['./SEO Strategy/content/**/*'],
      '/resources': ['./SEO Strategy/content/**/*'],
      '/sitemap.xml': ['./SEO Strategy/content/**/*'],
    },
  },
};

module.exports = nextConfig;
