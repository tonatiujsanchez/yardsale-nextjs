/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'api.lorem.space',
      'firebasestorage.googleapis.com',
      'placeimg.com',
    ]
  }
}

// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     customKey: 'customValue',
//   },
//   basePath: '/dist',
//   compress: true,
//   async redirects() {
//     return [
//       {
//         source: '/admin',
//         destination: '/admin/articulos',
//         permanent: true,
//       }
//     ]
//   }
// }

module.exports = nextConfig
