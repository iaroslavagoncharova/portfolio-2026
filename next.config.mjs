/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/portfolio-2026" : "",
  assetPrefix: isProd ? "/portfolio-2026/" : "",

  reactStrictMode: true,
};

export default nextConfig;
