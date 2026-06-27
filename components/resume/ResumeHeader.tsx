import { profile } from '@/data/resume'

export default function ResumeHeader() {
  return (
    <section className="bg-gray-950 pt-12 pb-6 px-6 print:pt-8 print:pb-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-3">{profile.name}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <span>{profile.email}</span>
          <span>{profile.phone}</span>
        </div>
      </div>
    </section>
  )
}
