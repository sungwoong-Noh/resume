import {
  profile,
  coreValues,
  workingStyles,
  achievements,
  experiences,
  skillCategories,
  educations,
  certifications,
  sideProjects,
} from '@/data/resume'

const TODO_BADGE = (
  <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded border border-amber-300">
    ✏️ 채워주세요
  </span>
)

function isTodo(value: string) {
  return value.startsWith('TODO:')
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

      {/* ── Nav / Version Switcher ─────────────────────────── */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">노성웅 이력서</span>
          <a
            href="/creative"
            className="text-xs px-3 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition font-medium"
          >
            ✨ 화려한 버전 보기
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">

        {/* ── Header ──────────────────────────────────────── */}
        <header className="mb-14 relative">
          <div className="absolute -left-4 -right-4 top-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500" />
          <div className="pt-8">
            <div className="flex flex-wrap items-end gap-4 mb-2">
              <h1 className="text-6xl font-bold text-gray-900">{profile.name}</h1>
              <span className="mb-1 px-3 py-1 bg-teal-50 border border-teal-200 text-teal-700 text-sm font-bold rounded-full">
                {profile.yearsOfExp}년차 백엔드 개발자
              </span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-0.5 bg-teal-500" />
              <p className="text-xl font-medium text-teal-600">{profile.title}</p>
            </div>

            {/* 연락처 */}
            <div className="flex flex-wrap gap-4 text-sm mb-8">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
                📧 {profile.email}
              </a>
              <span className="flex items-center gap-2 text-gray-600">
                📱 {profile.phone}
              </span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
                🔗 GitHub
              </a>
              {profile.linkedin ? (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
                  💼 LinkedIn
                </a>
              ) : (
                <span className="flex items-center gap-2 text-gray-400 text-xs">
                  💼 LinkedIn {TODO_BADGE}
                </span>
              )}
            </div>

            {/* 자기소개 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{profile.intro}</p>
            </div>
          </div>
        </header>

        {/* ── Core Values ─────────────────────────────────── */}
        <section className="mb-14">
          <SectionTitle>핵심 가치관</SectionTitle>
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border-t-4 border-teal-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{v.icon}</div>
                <p className="text-xs font-mono text-teal-500 mb-1">{v.hashtag}</p>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>

          {/* Working Style */}
          <div className="grid md:grid-cols-3 gap-4">
            {workingStyles.map((w, i) => (
              <div key={i} className="bg-white rounded-lg p-4 flex gap-3 border border-gray-100 shadow-sm">
                <span className="text-xl flex-shrink-0">{w.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{w.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key Achievements ────────────────────────────── */}
        <section className="mb-14">
          <SectionTitle>주요 성과</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((a, i) => (
              <div key={i} className="bg-white rounded-lg p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-teal-600 mb-1">
                  {a.metric}<span className="text-2xl">{a.unit}</span>
                </div>
                <p className="font-semibold text-gray-800 text-sm mb-1">{a.description}</p>
                <p className="text-gray-500 text-xs">{a.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ──────────────────────────────────── */}
        <section className="mb-14">
          <SectionTitle>경력</SectionTitle>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                {/* 헤더 */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                    <p className="text-teal-600 font-semibold mt-0.5">{exp.position}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-gray-600 text-sm">{exp.period}</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-teal-100 text-teal-700 text-xs font-bold rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>

                  {/* 하이라이트 */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Key Achievements</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-teal-500 font-bold mt-0.5 flex-shrink-0">→</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 프로젝트 */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Projects</h4>
                    <div className="space-y-3">
                      {exp.projects.map((proj, k) => (
                        <div key={k} className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                            <h5 className="font-semibold text-gray-900 text-sm">{proj.name}</h5>
                            <span className="text-xs text-gray-500 font-mono">{proj.period}</span>
                          </div>
                          <ul className="space-y-1.5">
                            {proj.achievements.map((a, l) => (
                              <li key={l} className="flex items-start gap-2 text-xs text-gray-600">
                                <span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 기술 스택 */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ──────────────────────────────────────── */}
        <section className="mb-14">
          <SectionTitle>기술 스택</SectionTitle>
          <div className="flex gap-4 mb-5 text-xs text-gray-500">
            <LegendDot color="bg-teal-500" label="주력" />
            <LegendDot color="bg-teal-300" label="활용" />
            <LegendDot color="bg-gray-300" label="경험" />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {skillCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>{cat.icon}</span> {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded text-xs font-medium ${
                        skill.level === 'expert'
                          ? 'bg-teal-100 text-teal-800'
                          : skill.level === 'proficient'
                          ? 'bg-teal-50 text-teal-600 border border-teal-200'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Side Projects & Activities ───────────────────── */}
        <section className="mb-14">
          <SectionTitle>프로젝트 / 대외활동</SectionTitle>
          <div className="grid md:grid-cols-2 gap-5">
            {sideProjects.map((p, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{p.name}</h3>
                    <span className="flex-shrink-0 text-xs text-gray-500 font-mono">{p.period}</span>
                  </div>
                  <p className="text-xs text-teal-600 font-medium mb-3">{p.organization}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>
                </div>
                <div className="p-5 space-y-3">
                  <ul className="space-y-1.5">
                    {p.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="text-teal-500 flex-shrink-0 mt-0.5">→</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                  {p.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                      {p.techStack.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications / Education Programs ─────────── */}
        <section className="mb-14">
          <SectionTitle>교육 / 수료</SectionTitle>
          <div className="space-y-4">
            {certifications.map((c, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900">{c.name}</h3>
                    <p className="text-teal-600 text-sm font-medium">{c.organization}</p>
                  </div>
                  <span className="text-xs text-gray-500 font-mono flex-shrink-0">{c.period}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{c.description}</p>
                <ul className="space-y-1">
                  {c.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="text-teal-500 flex-shrink-0 mt-0.5">•</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ───────────────────────────────────── */}
        <section className="mb-14">
          <SectionTitle>학력</SectionTitle>
          <div className="space-y-3">
            {educations.map((edu, i) => (
              <div
                key={i}
                className={`bg-white rounded-lg p-6 border shadow-sm ${
                  edu.todo ? 'border-amber-200 bg-amber-50/50' : 'border-gray-100'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">
                        {isTodo(edu.school) ? (
                          <span className="text-gray-400 italic">학교명을 입력해주세요</span>
                        ) : edu.school}
                      </h3>
                      {edu.todo && TODO_BADGE}
                    </div>
                    <p className="text-sm text-gray-600">
                      {isTodo(edu.degree) ? (
                        <span className="text-amber-600 italic">학위 · 전공을 입력해주세요</span>
                      ) : (
                        `${edu.degree} · ${edu.major}`
                      )}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 font-mono flex-shrink-0">
                    {isTodo(edu.period) ? (
                      <span className="text-amber-600 italic">재학 기간</span>
                    ) : edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="text-center py-8 border-t border-gray-200 text-gray-500 text-sm">
          <p>마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>
        </footer>
      </div>
    </main>
  )
}

// ── Shared Components ──────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-2xl font-bold text-gray-900">{children}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-teal-400 to-transparent" />
    </div>
  )
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`w-2.5 h-2.5 rounded-full ${color} inline-block`} />
      {label}
    </span>
  )
}
