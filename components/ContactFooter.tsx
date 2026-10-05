import { profile } from '@/data/resume'
import Section from '@/components/Section'

export default function ContactFooter() {
  const { name, email, phone } = profile

  return (
    <div data-avoid-break>
      <Section title="연락처">
        <p className="text-[15.5px] leading-[1.75] text-ink2">함께 일할 기회를 기다립니다.</p>
        <div className="flex flex-wrap gap-x-[22px] gap-y-2 mt-3">
          {[
            ['Name', name, null],
            ['Email', email, `mailto:${email}`],
            ['Phone', phone, null],
          ].map(([label, value, href]) => (
            <span key={label} className="flex items-baseline gap-1.5">
              <span className="font-mono text-[11.5px] text-ink3">{label}</span>
              {href ? <a href={href} className="text-[13.5px] text-ink">{value}</a> : <span className="text-[13.5px] text-ink">{value}</span>}
            </span>
          ))}
        </div>
      </Section>
    </div>
  )
}
