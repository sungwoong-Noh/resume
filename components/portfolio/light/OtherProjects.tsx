import { portfolioOtherProjects, type PortfolioProject } from '@/data/portfolio'
import { parseBold } from '@/lib/parseBold'
import Section from '@/components/Section'

export default function OtherProjects() {
  if (portfolioOtherProjects.length === 0) return null
  return (
    <Section title="그 외 경력">
      {portfolioOtherProjects.map((project, i) => (
        <OtherProjectCard key={project.id} project={project} first={i === 0} />
      ))}
    </Section>
  )
}

function OtherProjectCard({ project, first }: { project: PortfolioProject; first: boolean }) {
  const stacks = [
    ...(project.techStack.backend ?? []),
    ...(project.techStack.infra ?? []),
    ...(project.techStack.frontend ?? []),
  ]
  return (
    <div data-avoid-break className={first ? '' : 'border-t border-dashed border-line pt-[18px] mt-[18px]'}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h3 className="text-base font-[650] leading-[1.45] text-ink">{project.name}</h3>
        <span className="font-mono text-xs text-ink3">{project.period}</span>
      </div>
      <p className="text-[13.5px] leading-[1.65] text-ink3 mt-2">{project.overviewDescription}</p>
      <ul className="flex flex-col gap-1 mt-2">
        {project.overviewContributions.map((c, i) => (
          <li key={i} className="flex gap-2 text-[14.5px] leading-[1.7] text-ink2">
            <span className="text-ink3 flex-shrink-0">—</span>
            <span>{parseBold(c, 'font-[650] text-ink')}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {stacks.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded border border-line text-ink3 font-mono">{t}</span>
        ))}
      </div>
    </div>
  )
}
