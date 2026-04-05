import { certifications } from '@/data/resume'
import SectionLabel from './SectionLabel'

export default function CertificationsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Education Programs</SectionLabel>
        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-50 p-6 transition"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="font-bold text-gray-900">{c.name}</h3>
                <span className="text-xs text-gray-400 font-mono flex-shrink-0">{c.period}</span>
              </div>
              <p className="text-xs text-teal-600 font-mono mb-3">{c.organization}</p>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{c.description}</p>
              <ul className="space-y-1.5">
                {c.achievements.map((a, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-teal-500 flex-shrink-0 mt-0.5">→</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
