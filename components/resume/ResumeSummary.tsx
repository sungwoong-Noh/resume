import { profile } from '@/data/resume'
import { parseBold } from '@/lib/parseBold'

export default function ResumeSummary() {
  const paragraphs = profile.intro.split('\n').filter(Boolean)

  return (
    <section className="bg-gray-950 py-6 px-6 print:py-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 pb-2 border-b border-gray-800">
          자기소개
        </h2>
        <div className="space-y-3">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-sm text-gray-300 leading-relaxed">
              {parseBold(para)}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
