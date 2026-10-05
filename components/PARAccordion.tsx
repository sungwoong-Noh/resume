import type { PARItem } from '@/data/resume'
import { parseBold } from '@/lib/parseBold'

export default function PARAccordion({ item }: { item: PARItem }) {
  const hasDetail = !!(item.problem || item.analyze)

  return (
    <li data-avoid-break className="flex flex-col gap-1 text-[14.5px] leading-[1.7]">
      <div className="flex items-start gap-2">
        <span className="text-ink3 flex-shrink-0">—</span>
        <span className="text-ink2">{parseBold(item.result, 'font-[650] text-ink')}</span>
      </div>

      {hasDetail && (
        <div className="ml-5 mt-1 space-y-1.5 border-l border-line pl-3">
          {item.problem && (
            <p className="text-[13px] text-ink3 leading-[1.65]">
              <span className="text-ink3 font-semibold mr-1.5">문제</span>
              {parseBold(item.problem, 'font-[650] text-ink2')}
            </p>
          )}
          {item.analyze && (
            <p className="text-[13px] text-ink3 leading-[1.65]">
              <span className="text-ink font-semibold mr-1.5">분석</span>
              {parseBold(item.analyze, 'font-[650] text-ink2')}
            </p>
          )}
        </div>
      )}
    </li>
  )
}
