/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,

  basePath: isProd ? "/portfolio-2026" : "",
  assetPrefix: isProd ? "/portfolio-2026/" : "",

  output: "export",
};

export default nextConfig;
