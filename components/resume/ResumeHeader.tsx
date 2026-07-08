import Image from 'next/image'
import { profile } from '@/data/resume'

export default function ResumeHeader({ showPhoto = true }: { showPhoto?: boolean }) {
  return (
    <section className="resume-header bg-white pt-12 pb-6 px-6">
      <div className="max-w-4xl mx-auto flex items-start justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{profile.name}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
          </div>
        </div>
        {showPhoto && (
          <div className="flex-shrink-0">
            <Image
              src="/profile_photo.png"
              alt={profile.name}
              width={110}
              height={140}
              priority
              className="rounded-lg border border-gray-200 object-cover w-[100px] h-[128px] print:w-[90px] print:h-[116px]"
            />
          </div>
        )}
      </div>
    </section>
  )
}
