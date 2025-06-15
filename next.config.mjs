/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for detecting potential issues
  swcMinify: true,        // Use SWC for faster builds
  images: {
    unoptimized: true,    // Set to true if not using next/image optimization
  },
  eslint: {
    ignoreDuringBuilds: true, // Prevent ESLint errors from blocking builds
  },
  typescript: {
    ignoreBuildErrors: true,  // Prevent TS errors from blocking builds
  },
  productionBrowserSourceMaps: false, // Saves memory during build
}

export default nextConfig
