import type { Metadata } from 'next'
import Link from 'next/link'
import { profile } from '@/data/resume'
import PrintButton from '@/components/PrintButton'
import ResumeHeader from '@/components/resume/ResumeHeader'
import ResumeSummary from '@/components/resume/ResumeSummary'
import ResumeExperience from '@/components/resume/ResumeExperience'
import ResumeEducation from '@/components/resume/ResumeEducation'

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">

      {/* ── Navigation ──────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800 print:hidden">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-teal-400 tracking-widest text-sm uppercase">
            {profile.nameEn}
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/career"
              className="!text-gray-400 hover:!text-teal-400 text-xs font-mono transition-colors"
            >
              경력기술서 →
            </Link>
            <Link
              href="/portfolio"
              className="!text-gray-400 hover:!text-teal-400 text-xs font-mono transition-colors"
            >
              포트폴리오 →
            </Link>
            <PrintButton />
          </div>
        </div>
      </nav>

      <ResumeHeader />
      <ResumeSummary />
      <ResumeExperience />
      <ResumeEducation />

      <footer className="py-6 px-6 border-t border-gray-800 text-center text-gray-600 text-xs font-mono print:hidden">
        마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}
      </footer>
    </main>
  )
}
