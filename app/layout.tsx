import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: '노성웅 | 백엔드 개발자',
  description: '견고한 시스템 설계와 건강한 개발 문화로 지속 가능한 안정성을 만드는 백엔드 개발자 노성웅의 이력서',
  keywords: ['백엔드', '개발자', 'Spring Boot', 'JPA', '이력서'],
  authors: [{ name: '노성웅' }],
  openGraph: {
    title: '노성웅 | 백엔드 개발자',
    description: '견고한 시스템 설계와 건강한 개발 문화로 지속 가능한 안정성을 만드는 개발자',
    type: 'profile',
  },
}

// 첫 페인트 전에 저장된 테마를 적용해 깜빡임(FOUC) 방지
const themeScript = `try{if(localStorage.getItem('resume-a-theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={mono.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-ink2 font-sans">{children}</body>
    </html>
  )
}
