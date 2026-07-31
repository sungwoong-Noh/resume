import { experiences, type Experience, type Project, type PARItem, type ResumeContent } from '@/data/resume'
import { parseBold } from '@/lib/parseBold'

export default function ResumeExperience({ compactCompanies }: { compactCompanies?: string[] } = {}) {
  return (
    <section className="bg-white py-6 px-6 print:py-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6 pb-2 border-b border-gray-200">
          경력
        </h2>
        <div className="space-y-[4.5rem] print:space-y-14">
          {experiences.map((exp) => (
            <ExperienceBlock key={exp.company} exp={exp} compact={compactCompanies?.includes(exp.company)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceBlock({ exp, compact }: { exp: Experience; compact?: boolean }) {
  return (
    <div>
      {/* 회사 헤더 */}
      <div className="mb-4 exp-header">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
          <span className="text-lg font-bold text-gray-900">{exp.company}</span>
          <span className="text-gray-400 text-sm">|</span>
          <span className="text-gray-700 text-sm font-medium">{exp.position}</span>
          {exp.employmentType && (
            <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-gray-500 font-medium">{exp.employmentType}</span>
          )}
          <span className="text-gray-400 text-xs font-mono ml-auto">{exp.period}</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed max-w-[760px]">{exp.description.replace(/\\n/g, ' ')}</p>
      </div>

      {compact ? <CompactMode exp={exp} /> : <ProjectsMode projects={exp.projects} />}
    </div>
  )
}

function CompactMode({ exp }: { exp: Experience }) {
  return (
    <div className="space-y-1.5 ml-1">
      {exp.highlights.map((h, i) => (
        <p key={i} className="text-sm text-gray-600 max-w-[760px]">
          <span className="text-blue-600 mr-2">→</span>
          {parseBold(h, 'font-semibold text-gray-900')}
        </p>
      ))}
    </div>
  )
}

function ProjectsMode({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-7 print:space-y-5">
      {projects.map((project) => (
        <ProjectBlock key={project.name} project={project} />
      ))}
    </div>
  )
}

function ProjectBlock({ project }: { project: Project }) {
  if (project.resumeBullets) {
    return (
      <div>
        <h3 className="text-base font-bold text-blue-600 mb-2">{project.name}</h3>
        {project.serviceOverview && (
          <p className="text-xs text-gray-500 leading-relaxed mb-3 ml-1 max-w-[760px]">{project.serviceOverview}</p>
        )}
        <div className="space-y-1.5 ml-1">
          {project.resumeBullets.map((b, i) => (
            <p key={i} className="text-sm text-gray-600 max-w-[760px]">
              <span className="text-blue-600 mr-2">→</span>
              {parseBold(b, 'font-semibold text-gray-900')}
            </p>
          ))}
        </div>
      </div>
    )
  }
  if (project.resumeContent) {
    // hideNameInResume: subtitle을 accent color로 직접 표시 (플랜아이처럼 계층 없는 경우)
    if (project.hideNameInResume) {
      return (
        <div className="space-y-6">
          {project.resumeContent.map((rc, i) => (
            <ResumeContentBlock key={i} content={rc} titleClass="text-[15px] font-bold text-blue-600" />
          ))}
        </div>
      )
    }
    return (
      <div>
        <h3 className="text-base font-bold text-blue-600 mb-2">{project.name}</h3>
        {project.serviceOverview && (
          <p className="text-xs text-gray-500 leading-relaxed mb-4 ml-1 max-w-[760px]">{project.serviceOverview}</p>
        )}
        <div className="space-y-6 ml-1">
          {project.resumeContent.map((rc, i) => (
            <ResumeContentBlock key={i} content={rc} titleClass="text-[15px] font-bold text-gray-900" />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div>
      <h3 className="text-base font-bold text-blue-600 mb-2">{project.name}</h3>
      {project.serviceOverview && (
        <p className="text-xs text-gray-500 leading-relaxed mb-3 ml-1 max-w-[760px]">{project.serviceOverview}</p>
      )}
      <div className="space-y-4 ml-1">
        {project.achievements.map((item, i) => (
          <AchievementItem key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

function ResumeContentBlock({ content, titleClass }: { content: ResumeContent; titleClass?: string }) {
  return (
    <div className="resume-story-card">
      <h4 className={`mb-2 max-w-[680px] ${titleClass ?? 'text-sm font-bold text-gray-900'}`}>{content.subtitle}</h4>
      <div className="space-y-3 mb-3">
        {content.body.map((para, i) => (
          <p key={i} className="text-sm text-gray-600 leading-relaxed max-w-[760px]">{parseBold(para, 'font-semibold text-gray-900')}</p>
        ))}
      </div>
      <div className="space-y-1.5">
        {content.result.map((r, i) => (
          <p key={i} className="text-sm text-gray-500 max-w-[760px]">
            <span className="text-blue-600 mr-2">→</span>
            {parseBold(r, 'font-semibold text-gray-800')}
          </p>
        ))}
      </div>
    </div>
  )
}

function AchievementItem({ item }: { item: PARItem }) {
  const hasContext = item.problem || item.analyze
  return (
    <div className="resume-story-card">
      {hasContext && (
        <div className="space-y-3 mb-3">
          {item.problem && (
            <p className="text-sm text-gray-600 leading-relaxed max-w-[760px]">{parseBold(item.problem, 'font-semibold text-gray-900')}</p>
          )}
          {item.analyze && (
            <p className="text-sm text-gray-600 leading-relaxed max-w-[760px]">{parseBold(item.analyze, 'font-semibold text-gray-900')}</p>
          )}
        </div>
      )}
      <p className="text-sm text-gray-500 max-w-[760px]">
        {parseBold(item.result, 'font-semibold text-gray-800')}
      </p>
    </div>
  )
}
