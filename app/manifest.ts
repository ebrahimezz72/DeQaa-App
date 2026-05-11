import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'مؤسسة دقة للمحاماة والاستشارات القانونية',
    short_name: 'دقة للمحاماة',
    description: 'مؤسسة دقة للمحاماة والاستشارات القانونية - خبرة قانونية تمتد لعقود',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f6',
    theme_color: '#021549',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-512.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
