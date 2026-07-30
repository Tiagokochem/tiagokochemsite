/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['github.com', 'raw.githubusercontent.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
