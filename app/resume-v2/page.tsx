import type { Metadata } from 'next'
import { profile } from '@/data/resume'
import ResumeA from '@/components/resume-a/ResumeA'

export const metadata: Metadata = {
  title: `이력서(강의형) | ${profile.name}`,
  description: profile.tagline,
}

export default function ResumeV2Page() {
  return <ResumeA compactCompanies={['주식회사 에이직스']} />
}
