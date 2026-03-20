import { educations } from '@/data/resume'
import SectionLabel from './SectionLabel'

const TODO_BADGE = (
  <span className="inline-block px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-bold rounded border border-amber-500/40">
    ✏️ 채워주세요
  </span>
)

function isTodo(value: string) {
  return value.startsWith('TODO:')
}

export default function EducationSection() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Education</SectionLabel>
        <div className="space-y-4">
          {educations.map((edu, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 transition ${
                edu.todo
                  ? 'bg-amber-500/5 border-amber-500/30'
                  : 'bg-gray-800 border-gray-700 hover:border-teal-500/30'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-white">
                      {isTodo(edu.school) ? (
                        <span className="text-gray-500 italic">학교명을 입력해주세요</span>
                      ) : edu.school}
                    </h3>
                    {edu.todo && TODO_BADGE}
                  </div>
                  <p className="text-sm text-gray-400">
                    {isTodo(edu.degree) ? (
                      <span className="text-amber-500/70 italic text-xs">학위 · 전공을 data/resume.ts에서 채워주세요</span>
                    ) : `${edu.degree} · ${edu.major}`}
                  </p>
                </div>
                <span className="text-xs text-gray-500 font-mono flex-shrink-0">
                  {isTodo(edu.period) ? (
                    <span className="text-amber-500/70 italic">재학 기간</span>
                  ) : edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
