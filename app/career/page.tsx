import type { Metadata } from 'next'
import { profile } from '@/data/resume'
import DocNav from '@/components/DocNav'
import ResumeHeader from '@/components/resume/ResumeHeader'
import ExperienceSection from '@/components/light/ExperienceSection'
import SkillsSection from '@/components/light/SkillsSection'
import SideProjectsSection from '@/components/light/SideProjectsSection'
import CertificationsSection from '@/components/light/CertificationsSection'
import EducationSection from '@/components/light/EducationSection'
import ContactFooter from '@/components/ContactFooter'

export const metadata: Metadata = {
  title: `이력서 | ${profile.name}`,
  description: profile.tagline,
}

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <DocNav />
      <ResumeHeader showPhoto={false} />
      <ExperienceSection />
      <SkillsSection />
      <SideProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactFooter />
    </main>
  )
}
