import { portfolioProjects } from '@/data/portfolio'

export default function CareerOverview() {
  return (
    <section className="bg-[#eee8da] py-16 px-6 print:py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2a6041] text-center mb-12 font-serif">
          Career Overview
        </h2>

        <div className="relative">
          {/* 타임라인 세로선 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#b5cfc0] -translate-x-1/2" />

          <div className="space-y-10">
            {portfolioProjects.map((project, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={project.id} className="relative grid md:grid-cols-2 gap-6 items-start">
                  {/* 타임라인 점 */}
                  <div className="hidden md:block absolute left-1/2 top-5 w-3 h-3 rounded-full bg-[#2a6041] border-2 border-[#eee8da] -translate-x-1/2 z-10" />

                  {/* 카드 — 짝수(왼쪽), 홀수(오른쪽) */}
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
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#d6e8dc]">
      {/* 스크린샷 or 그라디언트 배너 */}
      <div className={`h-28 bg-gradient-to-br ${project.gradientClass} relative`}>
        {project.screenshotSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.screenshotSrc}
            alt={project.name}
            className="w-full h-full object-cover opacity-80"
          />
        ) : null}
        <div className="absolute inset-0 flex items-end p-4">
          <span className="text-xs font-mono text-white/70 bg-black/30 px-2 py-0.5 rounded">
            {project.period}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-base mb-2">{project.name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          {project.overviewDescription}
        </p>
        <p className="text-xs font-mono text-[#2a6041] uppercase tracking-wider mb-2">기여도</p>
        <ul className="space-y-1.5">
          {project.overviewContributions.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#2a6041] flex-shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
