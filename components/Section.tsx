import type { ReactNode } from 'react'

/** 디자인 공통 2열 섹션: 좌측 제목(140px) + 우측 본문. 좁은 폭에선 1열로 접힌다. */
export default function Section({ title, aside, children }: { title: ReactNode; aside?: ReactNode; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-6 flex flex-wrap gap-x-8 gap-y-4">
      <div className="flex-[0_0_140px]">
        <h2 className="text-[15px] font-bold text-ink">{title}</h2>
        {aside}
      </div>
      <div className="flex-[1_1_520px] min-w-0">{children}</div>
    </section>
  )
}

/** 페이지 컨테이너: 880px, 섹션 간 56px */
export function Page({ children }: { children: ReactNode }) {
  return <div className="max-w-[880px] mx-auto px-8 pt-[72px] pb-24 flex flex-col gap-14">{children}</div>
}
