/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
