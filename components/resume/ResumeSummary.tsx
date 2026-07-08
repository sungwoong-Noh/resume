import { profile } from '@/data/resume'
import { parseBold } from '@/lib/parseBold'

export default function ResumeSummary() {
  const paragraphs = profile.intro.split('\n').filter(Boolean)

  return (
    <section className="bg-white pt-3 pb-12 px-6 print:pt-2 print:pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-1.5">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-base text-gray-800 leading-relaxed tracking-tight">
              {parseBold(para, 'font-semibold text-gray-900')}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
