/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // add if you're loading external images
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;