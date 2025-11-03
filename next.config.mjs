// /** @type {import('next').NextConfig} */
// const nextConfig = {};


// export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

// Initialize the next-intl plugin
const withNextIntl = createNextIntlPlugin();

// Export your config wrapped with next-intl
export default withNextIntl(nextConfig);
