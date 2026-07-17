import Image from 'next/image'
import { portfolioProjects, type PortfolioProject, type PortfolioPARItem } from '@/data/portfolio'
import { parseBold } from '@/lib/parseBold'
import PppDiagrams from './PppDiagrams'
import RpmsDiagrams from './RpmsDiagrams'

export default function ProjectDetail() {
  return (
    <section className="bg-white py-10 px-6 print:py-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-widest text-teal-600 uppercase mb-8 pb-2 border-b border-gray-200 print:mb-4">
          Project Detail
        </p>
        <div className="space-y-16 print:space-y-10">
          {portfolioProjects.map((project) => (
            <ProjectDetailCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectDetailCard({ project }: { project: PortfolioProject }) {
  const { frontend, backend, infra } = project.techStack

  return (
    <div className="print:break-inside-avoid">
      <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.gradientClass} mb-5`} />
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          {project.name}
          {project.employmentType && (
            <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-gray-500 font-medium align-middle">{project.employmentType}</span>
          )}
        </h3>
        <span className="text-xs font-mono text-teal-600">{project.period}</span>
      </div>

      {(project.screenshotSrcs ?? (project.screenshotSrc ? [project.screenshotSrc] : [])).map((src, i) => (
        <div key={i} className="mb-4 max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-200">
          <Image
            src={src}
            alt={`${project.name} ${i + 1}`}
            width={1200}
            height={675}
            loading="eager"
            className="w-full object-contain bg-gray-50"
          />
        </div>
      ))}

      {project.id === 'ppp-cloud' && <PppDiagrams />}
      {project.id === 'rpms' && <RpmsDiagrams />}

      <div className="grid md:grid-cols-2 gap-8 print:gap-6">
        <div>
          <div className="space-y-3 mb-6">
            {project.detailParagraphs.map((para, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed">{parseBold(para, 'font-semibold text-gray-900')}</p>
            ))}
          </div>
          <div>
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

      <div className="mt-8 border-b border-gray-200 print:mt-6" />
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
