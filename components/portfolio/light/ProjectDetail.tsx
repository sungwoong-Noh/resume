import Image from 'next/image'
import { portfolioProjects, type PortfolioProject } from '@/data/portfolio'
import { parseBold } from '@/lib/parseBold'
import Section from '@/components/Section'
import PARAccordion from '@/components/PARAccordion'
import { TechStack } from './TechRow'
import PppDiagrams from './PppDiagrams'
import RpmsDiagrams from './RpmsDiagrams'

export default function ProjectDetail() {
  return (
    <Section title="프로젝트 상세">
      <div className="flex flex-col gap-14">
        {portfolioProjects.map((project) => (
          <ProjectDetailCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

function ProjectDetailCard({ project }: { project: PortfolioProject }) {
  return (
    <div>
      <div data-keep-next className="flex flex-wrap items-baseline justify-between gap-x-3 mb-4">
        <h3 className="text-xl font-bold tracking-[-0.01em] text-ink flex items-center gap-2">
          {project.name}
          {project.employmentType && (
            <span className="text-[11.5px] font-normal px-1.5 py-px rounded-[3px] border border-line text-ink3">{project.employmentType}</span>
          )}
        </h3>
        <span className="font-mono text-xs text-ink3">{project.period}</span>
      </div>

      {(project.screenshotSrcs ?? (project.screenshotSrc ? [project.screenshotSrc] : [])).map((src, i) => (
        <div key={i} className="mb-4 rounded-md overflow-hidden border border-line">
          <Image
            src={src}
            alt={`${project.name} ${i + 1}`}
            width={1200}
            height={675}
            loading="eager"
            className="w-full object-contain bg-surface"
          />
        </div>
      ))}

      {project.id === 'ppp-cloud' && <PppDiagrams />}
      {project.id === 'rpms' && <RpmsDiagrams />}

      <div className="space-y-3">
        {project.detailParagraphs.map((para, i) => (
          <p key={i} className="text-[15px] leading-[1.75] text-ink2">{parseBold(para, 'font-[650] text-ink')}</p>
        ))}
      </div>

      <p className="font-mono text-xs text-ink3 mt-6 mb-2">Key Responsibilities</p>
      <ul className="flex flex-col gap-3">
        {project.keyResponsibilities.map((item, i) => (
          <PARAccordion key={i} item={item} />
        ))}
      </ul>

      <TechStack techStack={project.techStack} />
    </div>
  )
}
