/** @type {import('next').NextConfig} */
const server="https://codecampjrbackend.onrender.com";
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },
  env: {
    SERVER_URL:server ,
  },
  
};

module.exports = nextConfig;
