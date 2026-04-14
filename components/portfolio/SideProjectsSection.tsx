import { portfolioSideProjects, type PortfolioSideProject } from '@/data/portfolio'

export default function SideProjectsSection() {
  return (
    <section className="bg-gray-900 py-16 px-6 print:py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-teal-400 uppercase mb-3">
            Side Project
          </p>
          <div className="w-12 h-px bg-teal-500" />
        </div>
        <div className="space-y-20 print:space-y-12">
          {portfolioSideProjects.map((project) => (
            <SideProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SideProjectCard({ project }: { project: PortfolioSideProject }) {
  const { frontend, backend, infra } = project.techStack

  return (
    <div className="print:break-inside-avoid">
      {/* 상단 배너 */}
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
        <div className="absolute top-3 left-1/2 -translate-x-1/2">
          <span className="text-xs font-mono tracking-widest text-white/50 uppercase">
            Side Project
          </span>
        </div>
        {/* Organization badge */}
        <div className="absolute bottom-3 left-4">
          <span className="text-xs font-mono text-teal-300 bg-black/40 px-3 py-1 rounded-full">
            {project.organization}
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left — description */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
          <p className="text-xs font-mono text-teal-400 mb-1">{project.period}</p>
          <p className="text-xs font-mono text-gray-500 mb-4">{project.organization}</p>
          <div className="space-y-3">
            {project.detailParagraphs.map((para, i) => (
              <p key={i} className="text-sm text-gray-300 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <p className="text-xs font-mono tracking-widest text-teal-400 uppercase mb-3">
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
          <p className="text-xs font-mono tracking-widest text-teal-400 uppercase mb-4">
            Key Responsibilities
          </p>
          <ul className="space-y-3">
            {project.keyResponsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                <span className="text-sm text-gray-300 leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 border-b border-gray-800" />
    </div>
  )
}

function TechRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-wrap items-start gap-1.5">
      <span className="text-xs font-mono text-gray-500 w-16 pt-0.5 flex-shrink-0">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 bg-gray-700 border border-gray-600 rounded text-xs text-gray-300 font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
