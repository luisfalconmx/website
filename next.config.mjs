/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com'
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      },
      {
        protocol: 'https',
        hostname: 'repository-images.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'api.accredible.com'
      },
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com'
      },
      {
        protocol: 'https',
        hostname: 'images.ui8.net'
      },
      {
        protocol: 'https',
        hostname: 'studio.uxpincdn.com'
      },
      {
        protocol: 'https',
        hostname: 'www.luisfalconmx.dev'
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to'
      },
      {
        protocol: 'https',
        hostname: 'us-east-1-shared-usea1-02.graphassets.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ]
  }
}

export default nextConfig
