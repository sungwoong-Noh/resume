import { skillCategories } from '@/data/resume'

export default function TopSkillsStrip() {
  const expertSkills = skillCategories.flatMap((cat) => cat.skills).filter((s) => s.level === 'expert')

  return (
    <div className="bg-white px-6 pb-6">
      <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
        {expertSkills.map((skill) => (
          <span key={skill.name} className="px-2.5 py-1 rounded-lg text-xs bg-blue-500 text-white font-semibold">
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
}
