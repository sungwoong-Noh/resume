import { experiences, type Experience, type Project, type PARItem, type ResumeContent } from '@/data/resume'
import { parseBold } from '@/lib/parseBold'

export default function ResumeExperience() {
  return (
    <section className="bg-gray-950 py-6 px-6 print:py-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-6 pb-2 border-b border-gray-800">
          경력
        </h2>
        <div className="space-y-12 print:space-y-8">
          {experiences.map((exp) => (
            <ExperienceBlock key={exp.company} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceBlock({ exp }: { exp: Experience }) {
  return (
    <div>
      {/* 회사 헤더 */}
      <div className="mb-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
          <span className="text-lg font-bold text-white">{exp.company}</span>
          <span className="text-gray-500 text-sm">|</span>
          <span className="text-gray-300 text-sm font-medium">{exp.position}</span>
          <span className="text-gray-500 text-xs font-mono ml-auto">{exp.period}</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">{exp.description.replace(/\\n/g, ' ')}</p>
      </div>

      {/* 에이직스: 요약 단락 모드 */}
      {exp.resumeParagraphs ? (
        <SummaryMode exp={exp} />
      ) : (
        <ProjectsMode projects={exp.projects} />
      )}
    </div>
  )
}

function SummaryMode({ exp }: { exp: Experience }) {
  return (
    <div className="space-y-2 ml-1">
      {exp.resumeParagraphs!.map((para, i) => (
        <p key={i} className="text-sm text-gray-300 leading-relaxed">{parseBold(para)}</p>
      ))}
      <div className="mt-3 space-y-1.5">
        {exp.highlights.map((h, i) => (
          <p key={i} className="text-sm text-gray-400">
            <span className="text-teal-500 mr-2">→</span>{parseBold(h, 'font-semibold text-gray-200')}
          </p>
        ))}
      </div>
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
  if (project.resumeContent) {
    // hideNameInResume: subtitle을 teal로 직접 표시 (플랜아이처럼 계층 없는 경우)
    if (project.hideNameInResume) {
      return (
        <div className="space-y-6">
          {project.resumeContent.map((rc, i) => (
            <ResumeContentBlock key={i} content={rc} titleClass="text-sm font-bold text-teal-400" />
          ))}
        </div>
      )
    }
    return (
      <div>
        <h3 className="text-sm font-bold text-teal-400 mb-4">{project.name}</h3>
        <div className="space-y-6 ml-1">
          {project.resumeContent.map((rc, i) => (
            <ResumeContentBlock key={i} content={rc} titleClass="text-sm font-bold text-white" />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div>
      <h3 className="text-sm font-bold text-teal-400 mb-3">{project.name}</h3>
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
    <div>
      <h4 className={`mb-2 ${titleClass ?? 'text-sm font-bold text-white'}`}>{content.subtitle}</h4>
      <div className="space-y-2 mb-2">
        {content.body.map((para, i) => (
          <p key={i} className="text-sm text-gray-300 leading-relaxed">{parseBold(para)}</p>
        ))}
      </div>
      <p className="text-sm text-gray-400">
        <span className="text-teal-500 mr-2">→</span>
        {parseBold(content.result, 'font-semibold text-gray-200')}
      </p>
    </div>
  )
}

function AchievementItem({ item }: { item: PARItem }) {
  const hasContext = item.problem || item.analyze
  return (
    <div>
      {hasContext && (
        <div className="space-y-2 mb-2">
          {item.problem && (
            <p className="text-sm text-gray-300 leading-relaxed">{parseBold(item.problem)}</p>
          )}
          {item.analyze && (
            <p className="text-sm text-gray-300 leading-relaxed">{parseBold(item.analyze)}</p>
          )}
        </div>
      )}
      <p className="text-sm text-gray-400">
        <span className="text-teal-500 mr-2">→</span>
        {parseBold(item.result, 'font-semibold text-gray-200')}
      </p>
    </div>
  )
}
