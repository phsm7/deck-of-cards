/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APIBASEURL: 'https://deckofcardsapi.com/api/deck',
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deckofcardsapi.com',
        // port: '',
        pathname: '/static/img/**',
      },
    ],
  },
}

module.exports = nextConfig
