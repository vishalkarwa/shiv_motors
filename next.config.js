/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com', 'maps.googleapis.com'],
    unoptimized: true,
  },
  // Environment variable exposure to browser
  env: {
    GOOGLE_MAPS_EMBED_URL: process.env.GOOGLE_MAPS_EMBED_URL,
    WORKSHOP_PHONE: process.env.WORKSHOP_PHONE,
    WORKSHOP_WHATSAPP: process.env.WORKSHOP_WHATSAPP,
  },
};

module.exports = nextConfig;
