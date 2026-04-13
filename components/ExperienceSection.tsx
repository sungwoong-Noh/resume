import { experiences } from '@/data/resume'
import SectionLabel from './SectionLabel'
import PARAccordion from './PARAccordion'

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-800 border border-gray-700 hover:border-teal-500/30 overflow-hidden transition"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 border-b border-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                  <p className="text-teal-400 font-medium">{exp.position}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-300 font-mono text-sm">{exp.period}</p>
                  <span className="inline-block mt-1 px-3 py-0.5 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-300 text-xs">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-4">Key Achievements</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-4">Projects</h4>
                  <div className="space-y-4">
                    {exp.projects.map((proj, k) => (
                      <div key={k} className="rounded-xl bg-gray-900 border border-gray-700 p-5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                          <h5 className="font-semibold text-white">{proj.name}</h5>
                          <span className="text-xs text-gray-500 font-mono">{proj.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {proj.achievements.map((a, l) => (
                            <PARAccordion key={l} item={a} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-gray-700 text-gray-300 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
