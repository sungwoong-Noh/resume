import type { ReactNode } from 'react'

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-teal-600 font-mono text-xs tracking-widest uppercase mb-10">
      / {children}
    </p>
  )
}
