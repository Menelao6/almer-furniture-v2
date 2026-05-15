/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
  },
  allowedDevOrigins: [
    'vm-7n789dlclx5e39xwuogfhm6c.vusercontent.net',
    'localhost:3000',
    '127.0.0.1:3000',
  ],
}

export default nextConfig
