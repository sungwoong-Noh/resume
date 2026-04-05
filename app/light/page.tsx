import type { Metadata } from 'next'
import Link from 'next/link'
import { profile } from '@/data/resume'
import PrintButton from '@/components/PrintButton'
import HeroSection from '@/components/light/HeroSection'
import AchievementsSection from '@/components/light/AchievementsSection'
import ExperienceSection from '@/components/light/ExperienceSection'
import SkillsSection from '@/components/light/SkillsSection'
import SideProjectsSection from '@/components/light/SideProjectsSection'
import CertificationsSection from '@/components/light/CertificationsSection'
import EducationSection from '@/components/light/EducationSection'
import CTASection from '@/components/light/CTASection'

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
}

export default function LightPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ── Navigation ──────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-teal-600 tracking-widest text-sm uppercase">
            {profile.nameEn}
          </span>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="!text-gray-400 hover:!text-teal-600 text-xs font-mono transition-colors"
            >
              ← 다크 버전
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
      <footer className="py-8 px-6 border-t border-gray-200 text-center text-gray-400 text-xs font-mono">
        마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}
      </footer>
    </main>
  )
}
