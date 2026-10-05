import { sideProjects } from '@/data/resume'
import Section from '@/components/Section'
import PARAccordion from '../PARAccordion'

export default function SideProjectsSection() {
  return (
    <Section title="프로젝트·활동">
      {sideProjects.map((p, i) => (
        <div key={i} className={i > 0 ? 'border-t border-dashed border-line pt-[18px] mt-[18px]' : ''}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="text-base font-[650] leading-[1.45] text-ink">{p.name}</h3>
            <span className="font-mono text-xs text-ink3">{p.period}</span>
          </div>
          <p className="font-mono text-xs text-ink3 mt-0.5">{p.organization}</p>
          <p className="text-[13.5px] leading-[1.65] text-ink3 mt-2">{p.description}</p>
          <ul className="flex flex-col gap-2 mt-3">
            {p.achievements.map((a, j) => (
              <PARAccordion key={j} item={a} />
            ))}
          </ul>
          {p.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.techStack.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded border border-line text-ink3 font-mono">{t}</span>
              ))}
            </div>
          )}
          {p.url && (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 font-mono text-xs text-accent">
              {p.url.replace('https://', '')} ↗
            </a>
          )}
        </div>
      ))}
    </Section>
  )
}
