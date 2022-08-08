/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["atimg.sonyunara.com", "attrangs.co.kr"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
