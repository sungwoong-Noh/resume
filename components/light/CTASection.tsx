import { profile } from '@/data/resume'

export default function CTASection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-teal-50 via-cyan-50/50 to-transparent" />
      <div className="relative max-w-6xl mx-auto text-center">
        <p className="text-teal-600 font-mono text-xs tracking-widest uppercase mb-6">/ Contact</p>
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
          함께 성장하는 팀을 찾고 있습니다
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
          견고한 아키텍처와 건강한 개발 문화로 만드는 지속 가능한 시스템
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl text-lg hover:opacity-90 transition"
        >
          연락하기 →
        </a>
      </div>
    </section>
  )
}
