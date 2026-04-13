import type { PARItem } from '@/data/resume'

export default function PARAccordion({ item }: { item: PARItem }) {
  const hasDetail = !!(item.problem || item.analyze)

  return (
    <li className="flex flex-col gap-1 text-sm text-gray-400">
      <div className="flex items-start gap-2">
        <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
        <span>{item.result}</span>
      </div>

      {hasDetail && (
        <div className="ml-5 mt-0.5 space-y-1 border-l border-gray-700 pl-3">
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
