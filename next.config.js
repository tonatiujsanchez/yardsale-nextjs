/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/articulos',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
