/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Portfolio',
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
