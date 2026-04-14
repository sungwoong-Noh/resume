import { portfolioProfile } from '@/data/portfolio'

export default function PortfolioHero() {
  const { name, tagline, role, email, phone, github, workingStyles, keywords, introduction } =
    portfolioProfile

  return (
    <section className="bg-[#f5f0e8] py-16 px-6 print:py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Left — identity */}
          <div>
            <p className="text-xs font-mono tracking-widest text-[#2a6041] uppercase mb-4">
              Professional Summary
            </p>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{name}</h1>
            <p className="text-lg text-gray-800 font-semibold leading-snug mb-5 border-l-4 border-[#2a6041] pl-3">
              {tagline}
            </p>
            <p className="text-[#2a6041] font-bold text-base mb-4">{role}</p>
            <div className="space-y-1 text-sm text-gray-500">
              <p>✉ {email}</p>
              <p>✆ {phone}</p>
              <p>
                <a
                  href={`https://github.com/${github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2a6041] underline underline-offset-2"
                >
                  {github}
                </a>
              </p>
            </div>
          </div>

          {/* Right — core working style */}
          <div>
            <p className="text-xs font-mono tracking-widest text-[#2a6041] uppercase mb-4">
              Core Working Style
            </p>
            <div className="space-y-4">
              {workingStyles.map((ws) => (
                <div key={ws.title} className="flex gap-3">
                  <span className="text-xl mt-0.5">{ws.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{ws.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{ws.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Keywords */}
        <div className="mb-10">
          <p className="text-xs font-mono tracking-widest text-[#2a6041] uppercase mb-4">
            Keyword
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {keywords.map((kw) => (
              <div
                key={kw.tag}
                className="bg-white rounded-xl p-4 border border-[#d6e8dc] shadow-sm"
              >
                <p className="font-bold text-gray-800 text-sm mb-1">{kw.tag}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{kw.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div>
          <p className="text-xs font-mono tracking-widest text-[#2a6041] uppercase mb-4">
            Introduction
          </p>
          <div className="bg-white rounded-xl p-6 border-l-4 border-[#2a6041] space-y-3">
            {introduction.map((para, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
