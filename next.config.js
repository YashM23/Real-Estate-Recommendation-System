/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  images: {
    path:"/",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
