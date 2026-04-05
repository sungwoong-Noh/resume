import { skillCategories } from '@/data/resume'
import SectionLabel from './SectionLabel'

const levelLabel: Record<string, string> = {
  expert: '주력',
  proficient: '활용',
  familiar: '경험',
}

const levelColor: Record<string, string> = {
  expert: 'bg-teal-500 text-white font-semibold',
  proficient: 'bg-teal-50 text-teal-700 border border-teal-200',
  familiar: 'bg-gray-100 text-gray-500 border border-gray-200',
}

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <div className="flex gap-5 mb-8 text-xs text-gray-400 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-500 inline-block" /> 주력
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-300 inline-block" /> 활용
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" /> 경험
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-50 p-6 transition"
            >
              <h3 className="flex items-center gap-2 font-bold text-gray-800 mb-5">
                <span>{cat.icon}</span> {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2.5 py-1 rounded-lg text-xs ${
                      skill.level ? levelColor[skill.level] : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {skill.level && (
                      <span className="opacity-50 mr-1 text-[10px]">[{levelLabel[skill.level]}]</span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
