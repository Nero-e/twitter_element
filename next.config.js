/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
    ];
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
}

module.exports = nextConfig
