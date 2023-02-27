/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'storage.googleapis.com',
      'i.scdn.co',
      't.scdn.co',
      'wrapped-images.spotifycdn.com',
      'dailymix-images.scdn.co',
      'mosaic.scdn.co',
      'blend-playlist-covers.spotifycdn.com',
      'newjams-images.scdn.co',
      'seed-mix-image.spotifycdn.com',
      'charts-images.scdn.co',
      'daily-mix.scdn.co',
      'mixed-media-images.spotifycdn.com',
      'blend-playlist-covers.spotifycdn.com',
    ]
  }
}

module.exports = nextConfig
