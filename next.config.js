/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Ignore ESLint errors during production builds — quick workaround
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true, // disable image optimization for static export
  },
}

module.exports = nextConfig
