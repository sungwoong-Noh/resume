import { portfolioProfile } from '@/data/portfolio'

export default function PortfolioHero() {
  const { name, role, email, phone, introduction, keywords } = portfolioProfile

  return (
    <section className="bg-white py-10 px-6 print:py-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-3">
          Portfolio
        </p>
        <h1 className="text-5xl font-bold text-gray-900 mb-2 print:text-4xl">{name}</h1>
        <p className="text-teal-600 font-bold text-base mb-5">{role}</p>
        <div className="flex gap-6 text-sm text-gray-500 mb-8">
          <p>✉ {email}</p>
          <p>✆ {phone}</p>
        </div>

        {/* 소개 */}
        <div className="space-y-3 max-w-3xl mb-8">
          {introduction.map((para, i) => (
            <p key={i} className="text-sm text-gray-600 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* 키워드 */}
        <div className="grid sm:grid-cols-3 gap-4">
          {keywords.map((k) => (
            <div key={k.tag} className="rounded-lg border border-gray-200 p-4 print:break-inside-avoid">
              <p className="font-bold text-teal-600 text-sm mb-1">{k.tag}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{k.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
