/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //__belowe is staff addad to default; refers to app directory
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
};

module.exports = nextConfig;

//___ver1; https://github.com/ipenywis/nextjs-data-fetching/blob/main/next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
//   swcMinify: true,
//   experimental: {
//     // Required:
//     appDir: true,
//   },
// };
// module.exports = nextConfig;

//___ver2: https://www.youtube.com/watch?v=x3fCEPFgUSM
// /**@type {import('next').NextConfig}*/
// module.export = {
//   reactStrictMode: true,
//   //__belowe is staff addad to default; refers to app directory
//   swcMinify: true,
//   experimental: {
//     // Required:
//     appDir: true,
// }
// }
