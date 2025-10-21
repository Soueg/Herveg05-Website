/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  output: 'export',
  basePath: isProd ? '/Herveg05-Website' : '',
  assetPrefix: isProd ? '/Herveg05-Website/' : '',
  images: { unoptimized: true },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;
