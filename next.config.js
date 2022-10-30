/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APIBASEURL: 'https://deckofcardsapi.com/api/deck',
  },
}

module.exports = nextConfig
