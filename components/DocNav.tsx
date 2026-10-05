'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, type ReactNode } from 'react'

const tabs = [
  { href: '/', label: '이력서' },
  { href: '/resume-v2', label: '이력서(강의형)' },
  { href: '/portfolio', label: '포트폴리오' },
  { href: '/career', label: '경력기술서' },
]

const btn = 'text-[13px] px-3 py-1.5 rounded-md border'

export default function DocNav({ children }: { children?: ReactNode }) {
  const pathname = usePathname()
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    if (next) document.documentElement.dataset.theme = 'dark'
    else delete document.documentElement.dataset.theme
    try { localStorage.setItem('resume-a-theme', next ? 'dark' : 'light') } catch {}
  }

  return (
    <nav data-noprint className="sticky top-0 z-10 bg-bg border-b border-line">
      <div className="max-w-[880px] mx-auto px-8 py-2.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-mono text-xs text-ink3">resume / Sungwoong Noh</span>
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`text-[13px] ${pathname === tab.href ? 'text-ink font-semibold' : 'text-ink3'}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {children}
          <button onClick={toggleTheme} className={`${btn} border-line text-ink2 bg-transparent`}>
            {dark ? '라이트 모드' : '다크 모드'}
          </button>
          <button onClick={() => window.print()} className={`${btn} border-ink bg-ink text-bg font-semibold`}>
            PDF 저장
          </button>
        </div>
      </div>
    </nav>
  )
}
