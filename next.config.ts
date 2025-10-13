import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false, // Disable LightningCSS to avoid build errors on Vercel
  },
};

export default nextConfig;
