import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.krapasc.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
        pathname: "/images/products/thumbnails/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/ddlo8lkmx/image/upload/**", // Matches your specific folder structure
      },
    ],
  },
};

export default nextConfig;
