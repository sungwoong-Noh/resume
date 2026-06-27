import { educations, certifications } from '@/data/resume'

export default function ResumeEducation() {
  return (
    <section className="bg-gray-950 py-6 px-6 print:py-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 pb-2 border-b border-gray-800">
          교육/활동
        </h2>
        <div className="space-y-2">
          {educations.map((edu) => (
            <div key={edu.school} className="flex flex-wrap items-baseline gap-x-2 text-sm">
              <span className="text-gray-300 font-medium">{edu.school} {edu.degree}</span>
              <span className="text-gray-500">({edu.period})</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-500">{edu.major}</span>
            </div>
          ))}
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-wrap items-baseline gap-x-2 text-sm">
              <span className="text-gray-300 font-medium">{cert.name}</span>
              <span className="text-gray-500">({cert.period})</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-500">{cert.organization}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
