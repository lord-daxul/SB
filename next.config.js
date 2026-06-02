/** @type {import('next').NextConfig} */
const nextConfig = {
  // Necesario para OpenNext/Cloudflare
  output: 'standalone',

  // Tu dominio de WordPress backend
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.spyblue.co',
      },
    ],
    unoptimized: true, // Necesario para Workers
  },

  env: {
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  },
}

module.exports = nextConfig
