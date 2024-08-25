import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'Tebah Free | 은혜광성교회 청년부',
  description: '은혜광성교회 청년부 Tebah free 공동체',
  metadataBase: new URL('https://tebahfree-web.vercel.app'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kr" className={`${inter.variable} ${pretendard.variable} scroll-smooth`}>
      <body className={`${inter.className} ${pretendard.className}`}>{children}</body>
    </html>
  )
}
