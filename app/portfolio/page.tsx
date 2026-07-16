import DocNav from '@/components/DocNav'
import PortfolioHero from '@/components/portfolio/light/PortfolioHero'
import ProjectDetail from '@/components/portfolio/light/ProjectDetail'
import OtherProjects from '@/components/portfolio/light/OtherProjects'
import SideProjectsSection from '@/components/portfolio/light/SideProjectsSection'
import ContactFooter from '@/components/ContactFooter'

export const metadata = {
  title: '포트폴리오 | 노성웅',
  description: '노성웅 Back-end Engineer 포트폴리오',
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <DocNav />
      <PortfolioHero />
      <ProjectDetail />
      <OtherProjects />
      <SideProjectsSection />
      <ContactFooter />
    </main>
  )
}
