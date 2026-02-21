import type { Metadata } from 'next'
import {
  profile,
  coreValues,
  achievements,
  experiences,
  skillCategories,
  sideProjects,
} from '@/data/resume'

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
}

const levelLabel: Record<string, string> = {
  expert: '주력',
  proficient: '활용',
  familiar: '경험',
}

const levelColor: Record<string, string> = {
  expert: 'bg-teal-400 text-gray-900',
  proficient: 'bg-teal-700 text-teal-100',
  familiar: 'bg-gray-700 text-gray-300',
}

export default function CreativePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      {/* ─── Navigation ───────────────────────── */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-teal-400 tracking-widest text-sm uppercase">
            {profile.nameEn}
          </span>
          <a
            href="/"
            className="text-xs text-gray-400 hover:text-teal-400 transition-colors"
          >
            ← 일반 버전 보기
          </a>
        </div>
      </nav>

      {/* ─── Hero ─────────────────────────────── */}
      <header className="relative overflow-hidden py-28 px-6">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <p className="text-teal-400 font-mono text-sm mb-4 tracking-widest uppercase">
            Backend Engineer
          </p>
          <h1 className="text-7xl md:text-8xl font-extrabold leading-none mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
            {profile.tagline}
          </p>

          {/* Contact */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-lg text-teal-300 text-sm hover:bg-teal-500/20 transition"
            >
              📧 {profile.email}
            </a>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-sm">
              📱 {profile.phone}
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-sm hover:border-teal-500 transition"
            >
              🔗 {profile.githubHandle}
            </a>
          </div>
        </div>
      </header>

      {/* ─── Key Metrics ─────────────────────── */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-12">
            / Achievements
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="group relative rounded-2xl bg-gray-800 border border-gray-700 hover:border-teal-500/50 p-6 overflow-hidden transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-black text-teal-400 leading-none">
                      {a.metric}
                    </span>
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

      {/* ─── Core Values ────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-12">
            / Core Values
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 hover:border-teal-500/50 transition"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <p className="text-xs font-mono text-teal-400 mb-2">{v.hashtag}</p>
                <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience ─────────────────────── */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-12">
            / Experience
          </p>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gray-800 border border-gray-700 hover:border-teal-500/30 overflow-hidden transition"
              >
                {/* Company header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-8 border-b border-gray-700">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                    <p className="text-teal-400 font-medium">{exp.position}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 font-mono text-sm">{exp.period}</p>
                    <span className="inline-block mt-1 px-3 py-0.5 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-300 text-xs">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-4">
                      Key Achievements
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-4">
                      Projects
                    </h4>
                    <div className="space-y-4">
                      {exp.projects.map((proj, k) => (
                        <div
                          key={k}
                          className="rounded-xl bg-gray-900 border border-gray-700 p-5"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                            <h5 className="font-semibold text-white">{proj.name}</h5>
                            <span className="text-xs text-gray-500 font-mono">
                              {proj.period}
                            </span>
                          </div>
                          <ul className="space-y-1.5">
                            {proj.achievements.map((a, l) => (
                              <li key={l} className="flex items-start gap-2 text-sm text-gray-400">
                                <span className="text-teal-500 mt-0.5">→</span>
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-gray-700 text-gray-300 text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Skills ─────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-4">
            / Skills
          </p>
          <div className="flex gap-4 mb-12 text-xs text-gray-400 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" /> 주력
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-700 inline-block" /> 활용
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gray-600 inline-block" /> 경험
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gray-900 border border-gray-700 hover:border-teal-500/30 p-6 transition"
              >
                <h3 className="flex items-center gap-2 font-bold text-white mb-5">
                  <span>{cat.icon}</span> {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                        skill.level ? levelColor[skill.level] : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {skill.level && (
                        <span className="opacity-60 mr-1 text-[10px]">
                          [{levelLabel[skill.level]}]
                        </span>
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

      {/* ─── Side Projects ───────────────────── */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-12">
            / Side Projects & Activities
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {sideProjects.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gray-800 border border-gray-700 hover:border-teal-500/30 overflow-hidden transition"
              >
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-white text-lg leading-tight">{p.name}</h3>
                    <span className="flex-shrink-0 px-2 py-0.5 bg-gray-700 rounded text-gray-400 text-xs font-mono">
                      {p.period}
                    </span>
                  </div>
                  <p className="text-xs text-teal-400 font-mono mb-3">{p.organization}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-2">
                    {p.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-700">
                    {p.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-gray-700 rounded text-gray-400 text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/5 to-transparent" />
        <div className="relative max-w-6xl mx-auto text-center">
          <p className="text-teal-400 font-mono text-xs tracking-widest uppercase mb-6">
            / Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            함께 성장하는 팀을 찾고 있습니다
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            견고한 아키텍처와 건강한 개발 문화로 만드는 지속 가능한 시스템
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900 font-bold rounded-xl text-lg hover:opacity-90 transition"
          >
            연락하기 →
          </a>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────── */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-600 text-xs font-mono">
        마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}
      </footer>
    </main>
  )
}
