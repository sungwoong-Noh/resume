import type { Metadata } from 'next'
import { profile } from '@/data/resume'
import DocNav from '@/components/DocNav'
import ResumeHeader from '@/components/resume/ResumeHeader'
import ResumeSummary from '@/components/resume/ResumeSummary'
import ResumeExperience from '@/components/resume/ResumeExperience'
import ResumeEducation from '@/components/resume/ResumeEducation'
import ContactFooter from '@/components/ContactFooter'

export const metadata: Metadata = {
  title: `경력기술서 | ${profile.name}`,
  description: profile.tagline,
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <DocNav />
      <ResumeHeader />
      <ResumeSummary />
      <ResumeExperience />
      <ResumeEducation />
      <ContactFooter />
    </main>
  )
}
