import { profile } from '@/data/resume'

export default function ResumeHeader() {
  return (
    <section className="resume-header bg-white pt-12 pb-6 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{profile.name}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span>{profile.email}</span>
          <span>{profile.phone}</span>
        </div>
      </div>
    </section>
  )
}
