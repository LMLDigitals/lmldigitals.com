/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },

  env: {
    RESEND_API: process.env.RESEND_API,
  },
};

export default nextConfig;
