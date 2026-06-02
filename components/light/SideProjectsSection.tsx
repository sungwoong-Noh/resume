import { sideProjects } from '@/data/resume'
import SectionLabel from './SectionLabel'
import PARAccordion from '../PARAccordion'

export default function SideProjectsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Projects &amp; Activities</SectionLabel>
        <div className="grid md:grid-cols-2 gap-5">
          {sideProjects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-50 overflow-hidden transition"
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{p.name}</h3>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600 transition flex-shrink-0" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <span className="flex-shrink-0 px-2 py-0.5 bg-gray-100 rounded text-gray-400 text-xs font-mono border border-gray-200">
                    {p.period}
                  </span>
                </div>
                <p className="text-xs text-teal-600 font-mono mb-3">{p.organization}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  {p.achievements.map((a, j) => (
                    <PARAccordion key={j} item={a} />
                  ))}
                </ul>
                {p.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-200">
                    {p.techStack.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-gray-100 rounded text-gray-400 text-xs font-mono border border-gray-200">
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
