'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PrintButton from '@/components/PrintButton'

const tabs = [
  { href: '/', label: '이력서' },
  { href: '/portfolio', label: '포트폴리오' },
]

export default function DocNav() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 print:hidden">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {tabs.map((tab) => {
            const active = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'bg-teal-50 !text-teal-700'
                    : '!text-gray-500 hover:!text-teal-600 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>
        <PrintButton />
      </div>
    </nav>
  )
}
