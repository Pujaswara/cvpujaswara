/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disables linting during builds in CI/Vercel
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
