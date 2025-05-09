import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.com',
        pathname: '/docs/images/**',
      },
    ],
  },
};

export default nextConfig;
