import { profile } from '@/data/resume'

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden py-28 px-6 bg-white">
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <p className="text-teal-600 font-mono text-sm tracking-widest uppercase">Backend Engineer</p>
          <span className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-bold">
            {profile.yearsOfExp}년차
          </span>
        </div>
        <h1 className="text-7xl md:text-8xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent inline-block pb-2">
            {profile.name}
          </span>
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl leading-relaxed mb-4">{profile.tagline}</p>

        {/* 자기소개 */}
        <div className="max-w-3xl mb-10 p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{profile.intro}</p>
        </div>

        {/* 연락처 */}
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-lg !text-teal-700 text-sm hover:bg-teal-100 transition"
          >
            📧 {profile.email}
          </a>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 text-sm">
            📱 {profile.phone}
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg !text-gray-600 text-sm hover:border-teal-400 transition"
          >
            🔗 {profile.githubHandle}
          </a>
          {profile.desiredSalary && (
            <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-lg text-teal-700 text-sm">
              💰 희망 연봉 {profile.desiredSalary}
            </div>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg !text-gray-600 text-sm hover:border-teal-400 transition"
            >
              💼 LinkedIn
            </a>
          )}
          {profile.blog && (
            <a
              href={profile.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg !text-gray-600 text-sm hover:border-teal-400 transition"
            >
              ✍️ {profile.blogHandle}
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
