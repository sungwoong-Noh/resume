import PortfolioHero from '@/components/portfolio/PortfolioHero'
import CareerOverview from '@/components/portfolio/CareerOverview'
import ProjectDetail from '@/components/portfolio/ProjectDetail'
import PortfolioContact from '@/components/portfolio/PortfolioContact'
import PrintButton from '@/components/portfolio/PrintButton'

export const metadata = {
  title: '포트폴리오 | 노성웅',
  description: '노성웅 Back-end Engineer 포트폴리오',
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e8]">
      <PortfolioHero />
      <CareerOverview />
      <ProjectDetail />
      <PortfolioContact />
      <PrintButton />
    </main>
  )
}
