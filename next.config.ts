import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allow any hostname
        port: "", // Optional: allow any port
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
