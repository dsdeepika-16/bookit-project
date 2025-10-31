import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    unoptimized: true, // ensures image loads even if optimization fails
  },
  experimental: {
    turbo: true, // if error comes again, change to false
  },
};

export default nextConfig;
