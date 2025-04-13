/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ini yang penting!
  },
  eslint: {
    ignoreDuringBuilds: true, // Kalau mau lint error juga di-skip.
  },
};

export default nextConfig;
