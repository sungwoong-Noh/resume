import Image from 'next/image'
import { portfolioSideProjects, type PortfolioSideProject, type PortfolioPARItem } from '@/data/portfolio'
import { parseBold } from '@/lib/parseBold'

export default function SideProjectsSection() {
  return (
    <section className="bg-gray-50 py-10 px-6 print:py-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-3">
            Side Project
          </p>
          <div className="w-12 h-px bg-teal-500" />
        </div>
        <div className="space-y-10 print:space-y-8">
          {portfolioSideProjects.map((project) => (
            <SideProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SideProjectCard({ project }: { project: PortfolioSideProject }) {
  const { frontend, backend, infra } = project.techStack

  return (
    <div className="">
      <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.gradientClass} mb-6`} />

      {(() => {
        const images = project.screenshotSrcs ?? (project.screenshotSrc ? [project.screenshotSrc] : [])
        if (images.length === 0) return null
        const [first, ...rest] = images
        return (
          <div className="mb-6 space-y-4 max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <Image src={first} alt={`${project.name} 1`} width={1200} height={675} loading="eager" className="w-full object-contain bg-gray-50" />
            </div>
            {rest.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {rest.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-gray-200 h-52">
                    <Image src={src} alt={`${project.name} ${i + 2}`} width={800} height={450} loading="eager" className="w-full h-full object-contain bg-gray-50" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })()}

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
            <span className="text-xs font-mono text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full">
              {project.organization}
            </span>
          </div>
          <p className="text-xs font-mono text-teal-600 mb-5">{project.period}</p>
          <div className="space-y-3">
            {project.detailParagraphs.map((para, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">
                {parseBold(para, 'font-semibold text-gray-900')}
              </p>
            ))}
          </div>

          <div className="mt-7">
            <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-3">
              Tech Stack
            </p>
            <div className="space-y-2">
              {frontend && frontend.length > 0 && <TechRow label="Frontend" items={frontend} />}
              {backend && backend.length > 0 && <TechRow label="Backend" items={backend} />}
              {infra && infra.length > 0 && <TechRow label="Infra" items={infra} />}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-5">
            Key Responsibilities
          </p>
          <ul className="space-y-4">
            {project.keyResponsibilities.map((item, i) => (
              <PARItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-b border-gray-200" />
    </div>
  )
}

function PARItem({ item }: { item: PortfolioPARItem }) {
  const hasPAR = item.problem || item.analyze
  return (
    <li className="space-y-2">
      <div className="flex items-start gap-3">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
        <span className="text-sm text-gray-800 font-medium leading-relaxed">{parseBold(item.result, 'font-semibold text-gray-900')}</span>
      </div>
      {hasPAR && (
        <div className="ml-4 pl-4 border-l border-gray-200 space-y-1.5">
          {item.problem && (
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="text-amber-500 font-mono font-semibold mr-2">문제</span>
              {parseBold(item.problem, 'font-semibold text-gray-700')}
            </p>
          )}
          {item.analyze && (
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="text-sky-500 font-mono font-semibold mr-2">분석</span>
              {parseBold(item.analyze, 'font-semibold text-gray-700')}
            </p>
          )}
        </div>
      )}
    </li>
  )
}

function TechRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-wrap items-start gap-1.5">
      <span className="text-xs font-mono text-gray-400 w-16 pt-0.5 flex-shrink-0">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs text-gray-600 font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
