import { educations } from '@/data/resume'
import Section from '@/components/Section'

export default function EducationSection() {
  return (
    <Section title="학력">
      {educations.map((edu, i) => (
        <div key={i} className="flex flex-wrap gap-x-4">
          <span className="flex-[0_0_150px] font-mono text-xs text-ink3 pt-1">{edu.period}</span>
          <div className="flex-1 min-w-[200px]">
            <span className="text-[14.5px] font-semibold text-ink">{edu.school}</span>
            <span className="text-[13px] text-ink3 ml-2">{edu.degree} · {edu.major}</span>
          </div>
        </div>
      ))}
    </Section>
  )
}
