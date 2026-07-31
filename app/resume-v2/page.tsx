import type { Metadata } from 'next'
import { profile } from '@/data/resume'
import DocNav from '@/components/DocNav'
import ResumeHeader from '@/components/resume/ResumeHeader'
import ResumeSummary from '@/components/resume/ResumeSummary'
import ResumeExperience from '@/components/resume/ResumeExperience'
import ResumeEducation from '@/components/resume/ResumeEducation'

export const metadata: Metadata = {
  title: `이력서(강의형) | ${profile.name}`,
  description: profile.tagline,
}

export default function ResumeV2Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <DocNav />
      <ResumeHeader />
      <ResumeSummary />
      <ResumeExperience compactCompanies={['주식회사 에이직스']} />
      <ResumeEducation />
    </main>
  )
}
