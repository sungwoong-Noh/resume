'use client'

import { useState } from 'react'
import type { PARItem } from '@/data/resume'

export default function PARAccordion({ item }: { item: PARItem }) {
  const [open, setOpen] = useState(false)
  const hasDetail = !!(item.problem || item.analyze)

  return (
    <li className="flex flex-col gap-1 text-sm text-gray-400">
      <div className="flex items-start gap-2">
        <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
        <div className="flex-1 min-w-0">
          <span>{item.result}</span>
          {hasDetail && (
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? '상세 접기' : '문제·분석 보기'}
              className="ml-2 inline-flex items-center gap-0.5 text-xs text-teal-600 hover:text-teal-400 transition-colors print:hidden"
            >
              {open ? '▲' : '▼'}
            </button>
          )}
        </div>
      </div>

      {/* 상세 (화면: 토글 / 인쇄: 항상 표시) */}
      {hasDetail && (
        <div
          className={`ml-5 mt-0.5 space-y-1 border-l border-gray-700 pl-3 ${
            open ? 'block' : 'hidden'
          } print:block`}
        >
          {item.problem && (
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="text-amber-400/80 font-mono font-semibold mr-1.5">문제</span>
              {item.problem}
            </p>
          )}
          {item.analyze && (
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="text-sky-400/80 font-mono font-semibold mr-1.5">분석</span>
              {item.analyze}
            </p>
          )}
        </div>
      )}
    </li>
  )
}
