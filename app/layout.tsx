import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

// Font tanımlamaları - display swap ile hızlı gösterim
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ali Olkaç | Portfolio',
  description: 'Bilgisayar Mühendisliği Öğrencisi & Full-Stack Developer',
  keywords: ['portfolio', 'developer', 'full-stack', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Ali Olkaç' }],
  creator: 'Ali Olkaç',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://aliolkac.com',
    title: 'Ali Olkaç | Portfolio',
    description: 'Bilgisayar Mühendisliği Öğrencisi & Full-Stack Developer',
    siteName: 'Ali Olkaç Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Olkaç | Portfolio',
    description: 'Bilgisayar Mühendisliği Öğrencisi & Full-Stack Developer',
    creator: '@aliolkac',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background text-text antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 