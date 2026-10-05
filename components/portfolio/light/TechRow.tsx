export default function TechRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-wrap items-start gap-1.5">
      <span className="font-mono text-xs text-ink3 w-16 pt-0.5 flex-shrink-0">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="text-xs px-2 py-0.5 rounded border border-line text-ink3 font-mono">{item}</span>
        ))}
      </div>
    </div>
  )
}

export function TechStack({ techStack }: { techStack: { frontend?: string[]; backend?: string[]; infra?: string[] } }) {
  const { frontend, backend, infra } = techStack
  return (
    <div className="mt-6">
      <p className="font-mono text-xs text-ink3 mb-2">Tech Stack</p>
      <div className="space-y-2">
        {frontend && frontend.length > 0 && <TechRow label="Frontend" items={frontend} />}
        {backend && backend.length > 0 && <TechRow label="Backend" items={backend} />}
        {infra && infra.length > 0 && <TechRow label="Infra" items={infra} />}
      </div>
    </div>
  )
}
