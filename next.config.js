/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.myanimelist.net", "img.youtube.com", "media.kitsu.io"],
  },
};

module.exports = nextConfig;
