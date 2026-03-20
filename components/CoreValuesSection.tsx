import { coreValues, workingStyles } from '@/data/resume'
import SectionLabel from './SectionLabel'

export default function CoreValuesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Core Values</SectionLabel>
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {coreValues.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 hover:border-teal-500/50 transition"
            >
              <div className="text-4xl mb-4">{v.icon}</div>
              <p className="text-xs font-mono text-teal-400 mb-2">{v.hashtag}</p>
              <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {workingStyles.map((w, i) => (
            <div key={i} className="rounded-xl bg-gray-900 border border-gray-800 p-5 flex gap-4">
              <span className="text-2xl flex-shrink-0">{w.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-200 text-sm mb-1">{w.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{w.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
