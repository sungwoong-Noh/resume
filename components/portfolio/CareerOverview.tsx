import { portfolioProjects } from '@/data/portfolio'

export default function CareerOverview() {
  return (
    <section className="bg-gray-900 py-16 px-6 print:py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-mono tracking-widest text-teal-400 uppercase mb-3">
            Career Overview
          </p>
          <div className="w-12 h-px bg-teal-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-gray-800 border border-gray-700 hover:border-teal-500/40 transition-colors overflow-hidden"
            >
              {/* 상단 컬러 액센트 */}
              <div className={`h-1 bg-gradient-to-r ${project.gradientClass}`} />

              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-white text-base leading-snug">{project.name}</h3>
                  <span className="text-xs font-mono text-gray-500 whitespace-nowrap flex-shrink-0 mt-0.5">
                    {project.period}
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  {project.overviewDescription}
                </p>
                <p className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">기여도</p>
                <ul className="space-y-2">
                  {project.overviewContributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
