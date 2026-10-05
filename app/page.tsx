import type { Metadata } from 'next'
import { profile } from '@/data/resume'
import ResumeA from '@/components/resume-a/ResumeA'

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
}

export default function Home() {
  return <ResumeA />
}
