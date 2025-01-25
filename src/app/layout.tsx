import { GoogleAnalytics } from '@next/third-parties/google'
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
  const productionMode = process.env.NODE_ENV === 'production'

  return (
    <html lang="kr" className={`${inter.variable} ${pretendard.variable} scroll-smooth`}>
      <body className={`${inter.className} ${pretendard.className} bg-gray-100`}>
        <div className="mx-auto min-w-[360px] max-w-[600px] bg-white">{children}</div>
      </body>
      {productionMode && <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />}
    </html>
  )
}
