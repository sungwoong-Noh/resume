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

        <div className="space-y-14">
          {portfolioProjects.map((project) => (
            <div key={project.id}>
              {/* 이미지 배너 */}
              <div className={`relative w-full h-52 rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradientClass}`}>
                {project.screenshotSrc && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.screenshotSrc}
                    alt={project.name}
                    className="w-full h-full object-cover object-top opacity-70"
                  />
                )}
                {/* 하단 페이드 */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90" />
              </div>

              {/* 카드 — 이미지 위에 겹침 */}
              <div className="-mt-10 mx-4 md:mx-10 relative z-10 rounded-2xl bg-gray-800/95 border border-gray-700 p-5 backdrop-blur-sm shadow-xl">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-base">{project.name}</h3>
                  <span className="text-xs font-mono text-gray-400 whitespace-nowrap flex-shrink-0 mt-0.5">
                    {project.period}
                  </span>
                </div>
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
          ))}
        </div>
      </div>
    </section>
  )
}
