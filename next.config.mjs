/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'uzxjjshqimoduovnmkwn.supabase.co',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚀 bỏ qua lỗi ESLint khi build
  },
};

export default nextConfig;
