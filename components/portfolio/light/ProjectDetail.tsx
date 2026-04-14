import { portfolioProjects, type PortfolioProject, type PortfolioPARItem } from '@/data/portfolio'

export default function ProjectDetail() {
  return (
    <section className="bg-white py-16 px-6 print:py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-3">
            Project Detail
          </p>
          <div className="w-12 h-px bg-teal-500" />
        </div>
        <div className="space-y-16 print:space-y-12">
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
    <div className="">
      <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.gradientClass} mb-6`} />

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.name}</h3>
          <p className="text-xs font-mono text-teal-600 mb-5">{project.period}</p>
          <div className="space-y-3">
            {project.detailParagraphs.map((para, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-7">
            <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-3">
              Tech Stack
            </p>
            <div className="space-y-2">
              {frontend && frontend.length > 0 && <TechRow label="Frontend" items={frontend} />}
              {backend && backend.length > 0 && <TechRow label="Backend" items={backend} />}
              {infra && infra.length > 0 && <TechRow label="Infra" items={infra} />}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-5">
            Key Responsibilities
          </p>
          <ul className="space-y-4">
            {project.keyResponsibilities.map((item, i) => (
              <PARItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 border-b border-gray-200" />
    </div>
  )
}

function PARItem({ item }: { item: PortfolioPARItem }) {
  const hasPAR = item.problem || item.analyze
  return (
    <li className="space-y-2">
      <div className="flex items-start gap-3">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
        <span className="text-sm text-gray-800 font-medium leading-relaxed">{item.result}</span>
      </div>
      {hasPAR && (
        <div className="ml-4 pl-4 border-l border-gray-200 space-y-1.5">
          {item.problem && (
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="text-teal-600 font-mono mr-2">문제</span>
              {item.problem}
            </p>
          )}
          {item.analyze && (
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="text-teal-600 font-mono mr-2">분석</span>
              {item.analyze}
            </p>
          )}
        </div>
      )}
    </li>
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
            className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs text-gray-600 font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
