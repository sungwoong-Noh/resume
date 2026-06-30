import React from 'react'

/**
 * **텍스트** 형태의 마크다운 볼드를 <strong>으로 변환
 */
export function parseBold(text: string, className = 'font-semibold text-white'): React.ReactNode {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  if (parts.length === 1) return text
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className={className}>{part}</strong>
      : part
  )
}
