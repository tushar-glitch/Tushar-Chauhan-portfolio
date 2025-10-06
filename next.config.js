/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Ignore ESLint errors during production builds — quick workaround
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
