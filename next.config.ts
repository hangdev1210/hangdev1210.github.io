import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static exports
  images: {
    unoptimized: true, // Prevents image optimization that requires a server
  },
};

export default nextConfig;
