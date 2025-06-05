import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.com",
        pathname: "/docs/images/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname:
          "96395f82-abac-474f-bd7b-b1796a8ee26f-00-261xtg4c4vm6w.sisko.replit.dev",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
