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

        <div className="relative">
          {/* 타임라인 세로선 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 -translate-x-1/2" />

          <div className="space-y-10">
            {portfolioProjects.map((project, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={project.id} className="relative grid md:grid-cols-2 gap-6 items-start">
                  {/* 타임라인 점 */}
                  <div className="hidden md:block absolute left-1/2 top-5 w-3 h-3 rounded-full bg-teal-500 border-2 border-gray-900 -translate-x-1/2 z-10" />

                  {isLeft ? (
                    <>
                      <div className="md:pr-8">
                        <ProjectCard project={project} />
                      </div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <div className="md:pl-8">
                        <ProjectCard project={project} />
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof portfolioProjects)[number] }) {
  return (
    <div className="rounded-2xl bg-gray-800 border border-gray-700 hover:border-teal-500/30 overflow-hidden transition">
      {/* 배너 */}
      <div className={`h-28 bg-gradient-to-br ${project.gradientClass} relative`}>
        {project.screenshotSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.screenshotSrc}
            alt={project.name}
            className="w-full h-full object-contain opacity-80"
          />
        ) : null}
        <div className="absolute inset-0 flex items-end p-4">
          <span className="text-xs font-mono text-white/70 bg-black/30 px-2 py-0.5 rounded">
            {project.period}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-white text-base mb-2">{project.name}</h3>
        <p className="text-xs text-gray-400 leading-relaxed mb-4">
          {project.overviewDescription}
        </p>
        <p className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">기여도</p>
        <ul className="space-y-1.5">
          {project.overviewContributions.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
