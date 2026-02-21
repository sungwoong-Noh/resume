import type { Metadata } from 'next'
import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
