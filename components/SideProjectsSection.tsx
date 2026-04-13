import { sideProjects } from '@/data/resume'
import SectionLabel from './SectionLabel'
import PARAccordion from './PARAccordion'

export default function SideProjectsSection() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Projects & Activities</SectionLabel>
        <div className="grid md:grid-cols-2 gap-5">
          {sideProjects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-800 border border-gray-700 hover:border-teal-500/30 overflow-hidden transition"
            >
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-bold text-white text-lg leading-tight">{p.name}</h3>
                  <span className="flex-shrink-0 px-2 py-0.5 bg-gray-700 rounded text-gray-400 text-xs font-mono">
                    {p.period}
                  </span>
                </div>
                <p className="text-xs text-teal-400 font-mono mb-3">{p.organization}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  {p.achievements.map((a, j) => (
                    <PARAccordion key={j} item={a} />
                  ))}
                </ul>
                {p.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-700">
                    {p.techStack.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-gray-700 rounded text-gray-400 text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
