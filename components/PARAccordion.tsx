import type { PARItem } from '@/data/resume'
import { parseBold } from '@/lib/parseBold'

export default function PARAccordion({ item }: { item: PARItem }) {
  const hasDetail = !!(item.problem || item.analyze)

  return (
    <li className="flex flex-col gap-1 text-sm text-gray-500">
      <div className="flex items-start gap-2.5 max-w-[640px]">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
        <span className="text-gray-700">{parseBold(item.result, 'font-semibold text-gray-900')}</span>
      </div>

      {hasDetail && (
        <div className="ml-5 mt-1 space-y-1.5 border-l border-gray-200 pl-3 max-w-[640px]">
          {item.problem && (
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="text-amber-500 font-mono font-semibold mr-1.5">문제</span>
              {parseBold(item.problem, 'font-semibold text-gray-700')}
            </p>
          )}
          {item.analyze && (
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="text-sky-500 font-mono font-semibold mr-1.5">분석</span>
              {parseBold(item.analyze, 'font-semibold text-gray-700')}
            </p>
          )}
        </div>
      )}
    </li>
  )
}
