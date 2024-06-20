/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // loader: "custom",images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      }
    ],

    formats: ["image/avif", "image/webp"],
  },
};
