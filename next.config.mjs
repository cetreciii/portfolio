/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio',
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    remotePatterns: [
      { protocol: "https", hostname: "**.mzstatic.com" },
    ],
  },
};

export default nextConfig;
