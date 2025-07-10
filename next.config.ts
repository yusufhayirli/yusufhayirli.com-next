import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  output: 'export', // ← enables static export for GoDaddy
  trailingSlash: true, // ← recommended for static hosting routing

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // ← replace with your actual domain
      },
    ],
  },

  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
