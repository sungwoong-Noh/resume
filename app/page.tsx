import type { Metadata } from 'next'
import Link from 'next/link'
import { profile } from '@/data/resume'
import PrintButton from '@/components/PrintButton'
import HeroSection from '@/components/HeroSection'
import AchievementsSection from '@/components/AchievementsSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import SideProjectsSection from '@/components/SideProjectsSection'
import CertificationsSection from '@/components/CertificationsSection'
import EducationSection from '@/components/EducationSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      {/* ── Navigation ──────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-teal-400 tracking-widest text-sm uppercase">
            {profile.nameEn}
          </span>
          <div className="flex items-center gap-3 print:hidden">
            <Link
              href="/portfolio"
              className="!text-gray-400 hover:!text-teal-400 text-xs font-mono transition-colors"
            >
              포트폴리오 →
            </Link>
            <Link
              href="/light"
              className="!text-gray-400 hover:!text-teal-400 text-xs font-mono transition-colors"
            >
              라이트 버전 →
            </Link>
            <PrintButton />
          </div>
        </div>
      </nav>

      <HeroSection />
      <AchievementsSection />
      <ExperienceSection />
      <SkillsSection />
      <SideProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <CTASection />

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-600 text-xs font-mono">
        마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}
      </footer>
    </main>
  )
}
