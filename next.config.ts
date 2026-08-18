import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // GOOGLE IMAGE PROFILE
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },

      // CLOUDINARY
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },

      // DICEBEAR
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },

      // FIREBASE STORAGE
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
