import { portfolioProfile } from '@/data/portfolio'

export default function PortfolioHero() {
  const { name, role, email, phone } = portfolioProfile

  return (
    <section className="bg-gray-900 py-10 px-6 print:py-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-widest text-teal-400 uppercase mb-3">
          Portfolio
        </p>
        <h1 className="text-5xl font-bold text-white mb-2">{name}</h1>
        <p className="text-teal-400 font-bold text-base mb-5">{role}</p>
        <div className="flex gap-6 text-sm text-gray-400">
          <p>✉ {email}</p>
          <p>✆ {phone}</p>
        </div>
      </div>
    </section>
  )
}
