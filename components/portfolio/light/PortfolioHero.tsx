import { portfolioProfile } from '@/data/portfolio'

export default function PortfolioHero() {
  const { name, role, email, phone } = portfolioProfile

  return (
    <header>
      <p className="font-mono text-[13px] tracking-[0.02em] text-accent">Portfolio</p>
      <h1 className="text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-ink mt-3">{name}</h1>
      <p className="text-[19px] font-medium leading-normal text-ink2 mt-4">{role}</p>
      <div className="flex flex-wrap gap-x-[22px] gap-y-2 mt-4">
        <span className="flex items-baseline gap-1.5">
          <span className="font-mono text-[11.5px] text-ink3">Email</span>
          <a href={`mailto:${email}`} className="text-[13.5px] text-ink">{email}</a>
        </span>
        <span className="flex items-baseline gap-1.5">
          <span className="font-mono text-[11.5px] text-ink3">Phone</span>
          <span className="text-[13.5px] text-ink">{phone}</span>
        </span>
      </div>
    </header>
  )
}
