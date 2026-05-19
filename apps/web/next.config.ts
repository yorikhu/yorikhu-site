import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output build to root directory (relative to apps/web)
  distDir: "../../dist/web",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
