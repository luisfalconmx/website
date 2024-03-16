/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },
      {
        protocol: 'https',
        hostname: 'www.luisfalconmx.dev'
      },
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com'
      }
    ]
  }
}

export default nextConfig
