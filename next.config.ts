import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
    serverActions: {
      bodySizeLimit: '20mb',
    },
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    qualities: [75, 85, 95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'appwrite-twccswskks4c4k0w00o80g44.185.209.228.49.sslip.io',
      },
      {
        protocol: 'https',
        hostname: 'appwrite-twccswskks4c4k0w00o80g44.185.209.228.49.sslip.io',
      },
    ],
  },
};

export default nextConfig;
