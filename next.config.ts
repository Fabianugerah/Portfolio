import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Izinkan gambar dari domain eksternal jika diperlukan
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
