/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // pageExtensions: ["page.js"],
  output: "standalone",
  env: {
    // BASE_URL: process.env.BASE_URL,
    // SECRET: process.env.SECRET,
  },
};

export default nextConfig;
