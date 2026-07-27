import { portfolioOtherProjects, type PortfolioProject } from '@/data/portfolio'
import { parseBold } from '@/lib/parseBold'

export default function OtherProjects() {
  if (portfolioOtherProjects.length === 0) return null
  return (
    <section className="bg-white py-10 px-6 print:py-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-8 pb-2 border-b border-gray-200 print:mb-4">
          Other Experience
        </p>
        <div className="grid md:grid-cols-2 gap-6 print:gap-4">
          {portfolioOtherProjects.map((project) => (
            <OtherProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function OtherProjectCard({ project }: { project: PortfolioProject }) {
  const stacks = [
    ...(project.techStack.backend ?? []),
    ...(project.techStack.infra ?? []),
    ...(project.techStack.frontend ?? []),
  ]
  return (
    <div className="rounded-xl border border-gray-200 p-5 print:p-3">
      <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.gradientClass} mb-4`} />
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <h3 className="text-base font-bold text-gray-900">{project.name}</h3>
        <span className="text-[11px] font-mono text-teal-600 whitespace-nowrap">{project.period}</span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{project.overviewDescription}</p>
      <ul className="space-y-1.5 mb-4">
        {project.overviewContributions.map((c, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-teal-500 flex-shrink-0" />
            <span>{parseBold(c, 'font-semibold text-gray-900')}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {stacks.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 text-[11px] font-mono border border-gray-200">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
