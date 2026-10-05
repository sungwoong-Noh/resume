import { experiences } from '@/data/resume'
import Section from '@/components/Section'
import PARAccordion from '../PARAccordion'
import { formatProjectDuration } from '@/lib/formatDuration'

export default function ExperienceSection() {
  return (
    <Section title="경력">
      <div className="flex flex-col gap-12">
        {experiences.map((exp, i) => (
          <div key={i}>
            <div data-keep-next className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-xl font-bold tracking-[-0.01em] text-ink">{exp.company}</h3>
              <span className="font-mono text-xs text-ink3">
                {exp.period} · {exp.employmentType ? `${exp.employmentType} · ${exp.duration}` : exp.duration}
              </span>
            </div>
            <p className="text-sm font-medium text-ink2 mt-1">{exp.position}</p>
            <p className="text-[13.5px] leading-[1.65] text-ink3 mt-2">{exp.careerDescription ?? exp.description}</p>

            <h4 className="font-mono text-xs text-ink3 mt-6 mb-2">Key Achievements</h4>
            <ul className="flex flex-col gap-1">
              {exp.highlights.map((h, j) => (
                <li key={j} className="flex gap-2 text-[14.5px] leading-[1.7] text-ink2">
                  <span className="text-ink3 flex-shrink-0">—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <h4 className="font-mono text-xs text-ink3 mt-6">Projects</h4>
            {exp.projects.map((proj, k) => (
              <div key={k} className="border-t border-dashed border-line pt-[18px] mt-[18px]">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h5 className="text-base font-[650] leading-[1.45] text-ink">{proj.name}</h5>
                  <span className="font-mono text-xs text-ink3">
                    {[proj.period, formatProjectDuration(proj.period), proj.teamSize].filter(Boolean).join(' · ')}
                  </span>
                </div>
                {proj.serviceOverview && (
                  <p className="text-[13.5px] leading-[1.65] text-ink3 mt-2">{proj.serviceOverview}</p>
                )}
                <ul className="flex flex-col gap-2 mt-3">
                  {proj.achievements.map((a, l) => (
                    <PARAccordion key={l} item={a} />
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-wrap gap-1.5 mt-5">
              {exp.techStack.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded border border-line text-ink3 font-mono">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
