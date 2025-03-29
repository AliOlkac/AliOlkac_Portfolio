/** @type {import('next').NextConfig} */
const nextConfig = {
  // Resimleri otomatik optimizasyon için WebP ve AVIF formatlarında kullan
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Derleme optimizasyonları
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Gzip sıkıştırma
  compress: true,
}

module.exports = nextConfig 