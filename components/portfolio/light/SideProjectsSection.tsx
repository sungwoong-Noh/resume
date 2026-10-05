import Image from 'next/image'
import { portfolioSideProjects, type PortfolioSideProject } from '@/data/portfolio'
import { parseBold } from '@/lib/parseBold'
import Section from '@/components/Section'
import PARAccordion from '@/components/PARAccordion'
import { TechStack } from './TechRow'

export default function SideProjectsSection() {
  return (
    <Section title="사이드 프로젝트">
      <div className="flex flex-col gap-14">
        {portfolioSideProjects.map((project) => (
          <SideProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}

function SideProjectCard({ project }: { project: PortfolioSideProject }) {
  const images = project.screenshotSrcs ?? (project.screenshotSrc ? [project.screenshotSrc] : [])
  const [first, ...rest] = images

  return (
    <div>
      <div data-keep-next className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h3 className="text-xl font-bold tracking-[-0.01em] text-ink">{project.name}</h3>
        <span className="font-mono text-xs text-ink3">{project.period}</span>
      </div>
      <p className="font-mono text-xs text-ink3 mt-0.5 mb-4">{project.organization}</p>

      {first && (
        <div className="mb-6 space-y-4">
          <div className="rounded-md overflow-hidden border border-line">
            <Image src={first} alt={`${project.name} 1`} width={1200} height={675} loading="eager" className="w-full object-contain bg-surface" />
          </div>
          {rest.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {rest.map((src, i) => (
                <div key={i} className="rounded-md overflow-hidden border border-line h-52">
                  <Image src={src} alt={`${project.name} ${i + 2}`} width={800} height={450} loading="eager" className="w-full h-full object-contain bg-surface" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

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
