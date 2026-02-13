import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["scontent-bru2-1.xx.fbcdn.net"],
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
