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
  description: '은혜광성교회 청년부 Tebah free 공동체의 홈페이지입니다.',
  metadataBase: new URL('https://www.gksyouth.kr'),
  openGraph: {
    title: 'Tebah Free | 은혜광성교회 청년부',
    description: '은혜광성교회 청년부 Tebah free 공동체',
  },
  verification: {
    other: {
      'naver-site-verification': '961ff14515f33bcc6e0bf37959ede036a231ad8d',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const productionMode = process.env.NODE_ENV !== 'development'

  return (
    <html lang="kr" className={`${inter.variable} ${pretendard.variable} scroll-smooth`}>
      <body className={`${inter.className} ${pretendard.className} bg-gray-100`}>
        <div className="mx-auto min-w-[360px] max-w-[600px] bg-white">{children}</div>
      </body>
      {productionMode && <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />}
    </html>
  )
}
