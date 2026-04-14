import { portfolioProjects, type PortfolioProject } from '@/data/portfolio'

export default function ProjectDetail() {
  return (
    <section className="bg-[#f5f0e8] py-16 px-6 print:py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2a6041] text-center mb-14 font-serif">
          Project Detail
        </h2>
        <div className="space-y-20 print:space-y-12">
          {portfolioProjects.map((project) => (
            <ProjectDetailCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectDetailCard({ project }: { project: PortfolioProject }) {
  const { frontend, backend, infra } = project.techStack

  return (
    <div className="print:break-inside-avoid">
      {/* 상단 배너 (스크린샷 or 그라디언트) */}
      <div
        className={`w-full h-52 rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradientClass} relative mb-8 print:h-28`}
      >
        {project.screenshotSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.screenshotSrc}
            alt={project.name}
            className="w-full h-full object-cover opacity-75"
          />
        ) : null}
        <div className="absolute top-2 left-1/2 -translate-x-1/2">
          <span className="text-xs font-mono tracking-widest text-white/60 uppercase">
            Project Detail
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left — description */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.name}</h3>
          <p className="text-xs font-mono text-[#2a6041] mb-4">{project.period}</p>
          <div className="space-y-3">
            {project.detailParagraphs.map((para, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <p className="text-xs font-mono tracking-widest text-[#2a6041] uppercase mb-3">
              Tech Stack
            </p>
            <div className="space-y-2">
              {frontend && frontend.length > 0 && (
                <TechRow label="Frontend" items={frontend} />
              )}
              {backend && backend.length > 0 && (
                <TechRow label="Backend" items={backend} />
              )}
              {infra && infra.length > 0 && (
                <TechRow label="Infra" items={infra} />
              )}
            </div>
          </div>
        </div>

        {/* Right — Key Responsibilities */}
        <div>
          <p className="text-xs font-mono tracking-widest text-[#2a6041] uppercase mb-4">
            Key Responsibilities
          </p>
          <ul className="space-y-3">
            {project.keyResponsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2a6041] flex-shrink-0" />
                <span className="text-sm text-gray-600 leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 구분선 */}
      <div className="mt-12 border-b border-[#d6e8dc]" />
    </div>
  )
}

function TechRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-wrap items-start gap-1.5">
      <span className="text-xs font-mono text-gray-400 w-16 pt-0.5 flex-shrink-0">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 bg-white border border-[#d6e8dc] rounded text-xs text-gray-600 font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
