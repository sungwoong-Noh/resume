import { skillCategories } from '@/data/resume'
import Section from '@/components/Section'

const levelClass: Record<string, string> = {
  expert: 'font-[650] text-ink',
  proficient: 'font-[450] text-ink2',
  familiar: 'font-normal text-ink3',
}

export default function SkillsSection() {
  return (
    <Section title="기술 스택">
      <div className="flex flex-col gap-3">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="flex flex-wrap gap-x-3 gap-y-2">
            <span className="flex-[0_0_108px] font-mono text-xs text-ink3 pt-1">{cat.category}</span>
            <div className="flex-1 flex flex-wrap gap-1.5 min-w-[200px]">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`text-[13px] px-[9px] py-1 rounded border border-line ${levelClass[skill.level ?? 'familiar']}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4 text-xs text-ink3">
        <span className="font-[650] text-ink">주력</span>
        <span className="text-ink2">활용</span>
        <span>경험</span>
      </div>
    </Section>
  )
}
