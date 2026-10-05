import { certifications } from '@/data/resume'
import Section from '@/components/Section'

export default function CertificationsSection() {
  return (
    <Section title="교육·자격">
      {certifications.map((c, i) => (
        <div key={i} data-avoid-break className={i > 0 ? 'border-t border-dashed border-line pt-[18px] mt-[18px]' : ''}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="text-base font-[650] text-ink">{c.name}</h3>
            <span className="font-mono text-xs text-ink3">{c.period}</span>
          </div>
          <p className="font-mono text-xs text-ink3 mt-0.5">{c.organization}</p>
          <p className="text-[13.5px] leading-[1.65] text-ink3 mt-2">{c.description}</p>
          {c.achievements.length > 0 && (
            <ul className="flex flex-col gap-1 mt-2">
              {c.achievements.map((a, j) => (
                <li key={j} className="flex gap-2 text-[14.5px] leading-[1.7] text-ink2">
                  <span className="text-ink3 flex-shrink-0">—</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </Section>
  )
}
