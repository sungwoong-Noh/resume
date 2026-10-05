'use client'

import { useState } from 'react'
import {
  profile, metrics, skillCategories, experiences, sideProjects, educations, certifications,
  type Experience, type Project,
} from '@/data/resume'
import { parseBold } from '@/lib/parseBold'
import { byStartDesc, parsePeriod } from '@/lib/formatDuration'
import DocNav from '@/components/DocNav'
import Section, { Page } from '@/components/Section'

type View = 'detail' | 'timeline'

const strong = 'font-[650] text-ink'
const b = (text: string) => parseBold(text, strong)

const levelClass = {
  expert: 'font-[650] text-ink',
  proficient: 'font-[450] text-ink2',
  familiar: 'font-normal text-ink3',
} as const

const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/-/g, '')}` },
  { label: 'GitHub', value: profile.githubHandle, href: profile.github },
  { label: 'Blog', value: profile.blogHandle, href: profile.blog },
  { label: 'LinkedIn', value: profile.linkedin.split('/in/')[1], href: profile.linkedin },
  { label: 'Web', value: profile.websiteHandle, href: profile.website },
]

const sortedExperiences = [...experiences].sort(byStartDesc)

// 개인 프로젝트 태그에만 있고 경력 프로젝트에선 안 쓴 기술은 이력서 기술 스택에서 뺀다
const workTags = new Set(experiences.flatMap((e) => e.projects.flatMap((p) => p.tags ?? [])))
const sideOnlyTags = new Set(sideProjects.flatMap((p) => p.tags ?? []).filter((t) => !workTags.has(t)))
const resumeSkills = skillCategories
  .map((cat) => ({ ...cat, skills: cat.skills.filter((s) => !sideOnlyTags.has(s.name)) }))
  .filter((cat) => cat.skills.length > 0)

export default function ResumeA({ compactCompanies = [] }: { compactCompanies?: string[] }) {
  const [view, setView] = useState<View>('detail')
  const [filter, setFilter] = useState<string | null>(null)
  const [open, setOpen] = useState<Record<string, boolean>>({})

  const matches = (tags?: string[]) => !filter || !!tags?.includes(filter)
  const matchCount = filter
    ? [...experiences.flatMap((e) => e.projects), ...sideProjects].filter((p) => p.tags?.includes(filter)).length
    : 0

  const segment = (
    <div className="flex border border-line rounded-md overflow-hidden text-[13px]">
      {(['detail', 'timeline'] as const).map((v) => (
        <button
          key={v}
          onClick={() => setView(v)}
          className={`px-3 py-1.5 ${view === v ? 'bg-ink text-bg' : 'text-ink2'}`}
        >
          {v === 'detail' ? '상세' : '타임라인'}
        </button>
      ))}
    </div>
  )

  return (
    <main className="min-h-screen">
      <DocNav>{segment}</DocNav>
      <Page>
        <Header />

        <Section title="핵심 성과">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-sm text-ink3">{m.before} →</span>
                  <span className="text-[26px] font-bold tracking-[-0.02em] text-accent">{m.after}</span>
                </div>
                <p className="text-[13px] text-ink2 mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="기술 스택"
          aside={<p data-noprint className="text-xs text-ink3 mt-1.5">클릭하면 관련 프로젝트만 강조</p>}
        >
          <div className="flex flex-col gap-3">
            {resumeSkills.map((cat) => (
              <div key={cat.category} className="flex flex-wrap gap-x-3 gap-y-2">
                <span className="flex-[0_0_108px] font-mono text-xs text-ink3 pt-1">{cat.category}</span>
                <div className="flex-1 flex flex-wrap gap-1.5 min-w-[200px]">
                  {cat.skills.map((s) => {
                    const selected = filter === s.name
                    return (
                      <button
                        key={s.name}
                        onClick={() => setFilter(selected ? null : s.name)}
                        className={`text-[13px] px-[9px] py-1 rounded border ${
                          selected ? 'bg-accent border-accent text-accentInk' : `border-line ${levelClass[s.level ?? 'familiar']}`
                        }`}
                      >
                        {s.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-ink3">
            <span className="font-[650] text-ink">주력</span>
            <span className="text-ink2">활용</span>
            <span>경험</span>
            {filter && (
              <span data-noprint className="text-accent">
                ‘{filter}’ 관련 프로젝트 {matchCount}개
                <button onClick={() => setFilter(null)} className="ml-2 underline underline-offset-2">해제</button>
              </span>
            )}
          </div>
        </Section>

        <Section title="경력">
          {view === 'detail' ? (
            <div className="flex flex-col gap-10">
              {sortedExperiences.map((exp) => (
                <Company
                  key={exp.company}
                  exp={exp}
                  compact={compactCompanies.includes(exp.company)}
                  matches={matches}
                  open={open}
                  toggle={(k) => setOpen((o) => ({ ...o, [k]: !o[k] }))}
                />
              ))}
            </div>
          ) : (
            <Timeline matches={matches} />
          )}
        </Section>

        <Section title="개인·교육 프로젝트">
          <div className="flex flex-col">
            {sideProjects.map((p, i) => (
              <div
                key={p.name}
                data-avoid-break
                className={`transition-opacity duration-200 ${i > 0 ? 'border-t border-dashed border-line pt-[18px] mt-[18px]' : ''} ${matches(p.tags) ? '' : 'opacity-25'}`}
              >
                <div className="flex flex-wrap justify-between gap-x-3">
                  <h4 className="text-base font-[650] leading-[1.45] text-ink">{p.name}</h4>
                  <span className="font-mono text-xs text-ink3 pt-1">{p.period}</span>
                </div>
                <p className="text-[13.5px] leading-[1.65] text-ink3 mt-1">{p.organization} · {p.description}</p>
                <Bullets items={p.achievements.map((a) => a.result)} />
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 font-mono text-xs text-accent">
                    {p.url.replace('https://', '')} ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section title="학력·자격">
          <div className="flex flex-col gap-3">
            {[
              ...educations.map((e) => ({ period: e.period, title: e.school, sub: `${e.major} ${e.degree}` })),
              ...certifications.map((c) => ({ period: c.period, title: c.name, sub: c.organization })),
            ]
              .sort(byStartDesc)
              .map((r) => (
                <div key={r.title} className="flex flex-wrap gap-x-4">
                  <span className="flex-[0_0_150px] font-mono text-xs text-ink3 pt-1">{r.period}</span>
                  <div className="flex-1 min-w-[200px]">
                    <span className="text-[14.5px] font-semibold text-ink">{r.title}</span>
                    <span className="text-[13px] text-ink3 ml-2">{r.sub}</span>
                  </div>
                </div>
              ))}
          </div>
        </Section>

        <footer className="border-t border-line pt-6 flex flex-wrap justify-between gap-2 text-[13px] text-ink3">
          <span>{profile.name} · {profile.title}</span>
          <a href={`mailto:${profile.email}`} className="text-ink2">{profile.email}</a>
        </footer>
      </Page>
    </main>
  )
}

function Header() {
  const paragraphs = profile.intro.split('\n').filter(Boolean)
  return (
    <header>
      <p className="font-mono text-[13px] tracking-[0.02em] text-accent">
        {profile.title} · {profile.yearsOfExp}년차
      </p>
      <div className="flex flex-wrap items-baseline gap-x-3.5 mt-3">
        <h1 className="text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-ink">{profile.name}</h1>
        <span className="text-lg text-ink3">{profile.nameEn}</span>
      </div>
      <p className="text-[19px] font-medium leading-normal text-ink2 mt-4">{profile.tagline}</p>
      <div className="max-w-[680px] mt-5 flex flex-col gap-1.5">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[15.5px] leading-[1.75] text-ink2">{b(p)}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-x-[22px] gap-y-2 mt-6">
        {contacts.map((c) => (
          <span key={c.label} className="flex items-baseline gap-1.5">
            <span className="font-mono text-[11.5px] text-ink3">{c.label}</span>
            <a href={c.href} className="text-[13.5px] text-ink">{c.value}</a>
          </span>
        ))}
      </div>
    </header>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-col gap-1">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2 text-[14.5px] leading-[1.7] text-ink2">
          <span className="text-ink3 flex-shrink-0">—</span>
          <span>{b(t)}</span>
        </li>
      ))}
    </ul>
  )
}

function Company({ exp, compact, matches, open, toggle }: {
  exp: Experience
  compact: boolean
  matches: (tags?: string[]) => boolean
  open: Record<string, boolean>
  toggle: (key: string) => void
}) {
  return (
    <div>
      <div data-keep-next>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold tracking-[-0.01em] text-ink">{exp.company}</h3>
            {exp.employmentType && (
              <span className="text-[11.5px] px-1.5 py-px rounded-[3px] border border-line text-ink3">{exp.employmentType}</span>
            )}
          </div>
          <span className="font-mono text-xs text-ink3">{exp.period} · {exp.duration}</span>
        </div>
        <p className="text-sm font-medium text-ink2 mt-1">{exp.position}</p>
        <p className="text-[13.5px] leading-[1.65] text-ink3 mt-1">{exp.description}</p>
      </div>

      {compact ? (
        <div className={`mt-4 transition-opacity duration-200 ${exp.projects.some((p) => matches(p.tags)) ? '' : 'opacity-25'}`}>
          <Bullets items={exp.highlights} />
        </div>
      ) : (
        <div className="mt-2">
          {exp.projects.map((p) => (
            <ProjectBlock
              key={p.name}
              project={p}
              dim={!matches(p.tags)}
              isOpen={!!open[p.name]}
              onToggle={() => toggle(p.name)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectBlock({ project: p, dim, isOpen, onToggle }: {
  project: Project
  dim: boolean
  isOpen: boolean
  onToggle: () => void
}) {
  const par = p.achievements.filter((a) => a.problem || a.analyze)
  const meta = [p.period, p.teamSize].filter(Boolean).join(' · ')
  return (
    <div className={`border-t border-dashed border-line pt-[18px] mt-[18px] transition-opacity duration-200 ${dim ? 'opacity-25' : ''}`}>
      <h4 className="text-base font-[650] leading-[1.45] text-ink">{p.name}</h4>
      <p className="font-mono text-xs text-ink3 mt-0.5">{meta}</p>
      {p.serviceOverview && <p className="text-[13.5px] leading-[1.65] text-ink3 mt-2">{p.serviceOverview}</p>}
      {p.resumeBullets && <Bullets items={p.resumeBullets} />}

      {par.length > 0 && (
        <>
          <button data-noprint onClick={onToggle} className="mt-3 text-[13px] font-semibold text-accent">
            {isOpen ? '문제 · 해결 · 성과 접기 ↑' : `문제 · 해결 · 성과 보기 (${par.length}) ↓`}
          </button>
          {isOpen && (
            <div className="mt-3 bg-surface border border-line rounded-md px-5 py-[18px] flex flex-col">
              {par.map((a, i) => (
                <div key={i} data-avoid-break className={`flex flex-col gap-2 ${i > 0 ? 'border-t border-line pt-3.5 mt-3.5' : ''}`}>
                  {a.problem && <PsrRow label="문제" labelClass="text-ink3" text={a.problem} />}
                  {a.analyze && <PsrRow label="해결" labelClass="text-ink" text={a.analyze} />}
                  <PsrRow label="성과" labelClass="text-accent" text={a.result} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

function PsrRow({ label, labelClass, text }: { label: string; labelClass: string; text: string }) {
  return (
    <div className="flex gap-3 text-[13.5px] leading-[1.65] text-ink2">
      <span className={`flex-[0_0_32px] font-semibold ${labelClass}`}>{label}</span>
      <span className="flex-1 min-w-0">{b(text)}</span>
    </div>
  )
}

function Timeline({ matches }: { matches: (tags?: string[]) => boolean }) {
  const ranges = experiences.flatMap((e) => [e, ...e.projects]).map((x) => parsePeriod(x.period)).filter((r) => r !== null)
  const min = Math.min(...ranges.map((r) => r.start))
  const max = Math.max(...ranges.map((r) => r.end)) + 1
  const total = max - min
  const firstYear = Math.ceil(min / 12)
  const years = Array.from({ length: Math.floor((max - 1) / 12) - firstYear + 1 }, (_, i) => firstYear + i)
  const pos = (period: string) => {
    const r = parsePeriod(period)
    if (!r) return { display: 'none' }
    return { left: `${((r.start - min) / total) * 100}%`, width: `${((r.end - r.start + 1) / total) * 100}%` }
  }

  const Row = ({ label, period, sub, dim }: { label: string; period: string; sub?: boolean; dim?: boolean }) => (
    <div className={`flex items-center gap-3 py-1.5 transition-opacity duration-200 ${dim ? 'opacity-20' : ''}`}>
      <span
        className={`flex-[0_0_200px] truncate ${sub ? 'pl-3 text-[12.5px] text-ink2' : 'text-sm font-[650] text-ink'}`}
        title={label}
      >
        {label}
      </span>
      <div className="relative flex-1 h-[10px]">
        <div
          title={period}
          className={`absolute top-1/2 -translate-y-1/2 rounded-sm ${sub ? 'h-1.5 bg-accent' : 'h-[10px] bg-ink'}`}
          style={pos(period)}
        />
      </div>
    </div>
  )

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[520px]">
        <div className="flex gap-3 mb-1">
          <span className="flex-[0_0_200px]" />
          <div className="relative flex-1 h-5">
            {years.map((y) => (
              <span
                key={y}
                className="absolute top-0 h-full border-l border-line pl-1 font-mono text-[11px] text-ink3"
                style={{ left: `${((y * 12 - min) / total) * 100}%` }}
              >
                {y}
              </span>
            ))}
          </div>
        </div>
        {sortedExperiences.map((e, i) => (
          <div key={e.company} className={i > 0 ? 'border-t border-line pt-1.5 mt-1.5' : ''}>
            <Row label={e.company} period={e.period} />
            {e.projects.map((p) => (
              <Row key={p.name} label={p.name} period={p.period} sub dim={!matches(p.tags)} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
