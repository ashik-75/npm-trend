/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "utfs.io",
      },
      {
        // protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        // protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        // protocol: "https",
        hostname: "rickandmortyapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
