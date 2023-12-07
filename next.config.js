/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: ['i.dummyjson.com'],
  },
};