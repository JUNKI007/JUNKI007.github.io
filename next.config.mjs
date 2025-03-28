/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/JUNKI007.github.io/' : undefined,
  basePath: isProd ? '/JUNKI007.github.io' : undefined,
};

export default nextConfig;
