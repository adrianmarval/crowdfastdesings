import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
    serverActions: {
      bodySizeLimit: '20mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'appwrite-pckgos4gg8g4gog8gk4o8ggk.185.209.228.49.sslip.io',
      },
      {
        protocol: 'https',
        hostname: 'appwrite-pckgos4gg8g4gog8gk4o8ggk.185.209.228.49.sslip.io',
      },
    ],
  },
};

export default nextConfig;
