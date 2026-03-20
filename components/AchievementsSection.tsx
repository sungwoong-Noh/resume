import { achievements } from '@/data/resume'
import SectionLabel from './SectionLabel'

export default function AchievementsSection() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Achievements</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-gray-800 border border-gray-700 hover:border-teal-500/50 p-6 overflow-hidden transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-black text-teal-400 leading-none">{a.metric}</span>
                  <span className="text-2xl font-bold text-teal-300 pb-1">{a.unit}</span>
                </div>
                <p className="text-sm font-semibold text-gray-200 mb-1">{a.description}</p>
                <p className="text-xs text-gray-500">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
