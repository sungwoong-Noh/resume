import { educations } from '@/data/resume'
import SectionLabel from './SectionLabel'

export default function EducationSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Education</SectionLabel>
        <div className="space-y-4">
          {educations.map((edu, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-50 p-6 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{edu.school}</h3>
                  <p className="text-sm text-gray-500">{edu.degree} · {edu.major}</p>
                </div>
                <span className="text-xs text-gray-400 font-mono flex-shrink-0">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
