import Link from 'next/link'
import PortfolioHero from '@/components/portfolio/light/PortfolioHero'
import CareerOverview from '@/components/portfolio/light/CareerOverview'
import ProjectDetail from '@/components/portfolio/light/ProjectDetail'
import SideProjectsSection from '@/components/portfolio/light/SideProjectsSection'
import PortfolioContact from '@/components/portfolio/light/PortfolioContact'
import PrintButton from '@/components/PrintButton'

export const metadata = {
  title: '포트폴리오 | 노성웅',
  description: '노성웅 Back-end Engineer 포트폴리오',
}

export default function PortfolioLightPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Navigation ──────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 print:hidden">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-teal-600 tracking-widest text-sm uppercase">
            Portfolio
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/portfolio"
              className="!text-gray-400 hover:!text-teal-600 text-xs font-mono transition-colors"
            >
              다크 버전 →
            </Link>
            <Link
              href="/"
              className="!text-gray-400 hover:!text-teal-600 text-xs font-mono transition-colors"
            >
              ← 이력서
            </Link>
            <PrintButton />
          </div>
        </div>
      </nav>

      <PortfolioHero />
      <CareerOverview />
      <ProjectDetail />
      <SideProjectsSection />
      <PortfolioContact />
    </main>
  )
}
