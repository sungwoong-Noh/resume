import Link from 'next/link'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import CareerOverview from '@/components/portfolio/CareerOverview'
import ProjectDetail from '@/components/portfolio/ProjectDetail'
import SideProjectsSection from '@/components/portfolio/SideProjectsSection'
import PortfolioContact from '@/components/portfolio/PortfolioContact'
import PrintButton from '@/components/portfolio/PrintButton'

export const metadata = {
  title: '포트폴리오 | 노성웅',
  description: '노성웅 Back-end Engineer 포트폴리오',
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* ── Navigation ──────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800 print:hidden">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-teal-400 tracking-widest text-sm uppercase">
            Portfolio
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/portfolio/light"
              className="!text-gray-400 hover:!text-teal-400 text-xs font-mono transition-colors"
            >
              라이트 버전 →
            </Link>
            <Link
              href="/"
              className="!text-gray-400 hover:!text-teal-400 text-xs font-mono transition-colors"
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
