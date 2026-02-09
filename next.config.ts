import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'fikirsanatrotary.com',
      },
      {
        protocol: 'https',
        hostname: 'commons.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'tr.wikipedia.org',
      },
      {
        protocol: 'https',
        hostname: 'en.wikipedia.org',
      },
      {
        protocol: 'https',
        hostname: 'bogazicindebilim.bogazici.edu.tr',
      },
    ],
  },
};

export default nextConfig;
