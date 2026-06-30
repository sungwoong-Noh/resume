import { profile } from '@/data/resume'
import { parseBold } from '@/lib/parseBold'

export default function ResumeSummary() {
  const paragraphs = profile.intro.split('\n').filter(Boolean)

  return (
    <section className="bg-white py-6 px-6 print:py-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 pb-2 border-b border-gray-200">
          자기소개
        </h2>
        <div className="space-y-3">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-sm text-gray-600 leading-relaxed">
              {parseBold(para, 'font-semibold text-gray-900')}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
