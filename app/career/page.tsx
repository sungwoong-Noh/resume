import type { Metadata } from 'next'
import { profile } from '@/data/resume'
import DocNav from '@/components/DocNav'
import { Page } from '@/components/Section'
import ExperienceSection from '@/components/light/ExperienceSection'
import SkillsSection from '@/components/light/SkillsSection'
import SideProjectsSection from '@/components/light/SideProjectsSection'
import CertificationsSection from '@/components/light/CertificationsSection'
import EducationSection from '@/components/light/EducationSection'

export const metadata: Metadata = {
  title: `경력기술서 | ${profile.name}`,
  description: profile.tagline,
}

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <DocNav />
      <Page>
        <header>
          <p className="font-mono text-[13px] tracking-[0.02em] text-accent">경력기술서</p>
          <h1 className="text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-ink mt-3">{profile.name}</h1>
          <div className="flex flex-wrap gap-x-[22px] gap-y-2 mt-4 text-[13.5px] text-ink">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
          </div>
        </header>
        <ExperienceSection />
        <SkillsSection />
        <SideProjectsSection />
        <CertificationsSection />
        <EducationSection />
      </Page>
    </main>
  )
}
