// RPMS 전용 다이어그램 (SVG)
// 이력서엔 없는 시각 자료로 포트폴리오 차별화

export default function RpmsDiagrams() {
  return (
    <div className="space-y-6 mb-8">
      <figure className="rounded-xl border border-gray-200 bg-white p-4 print:p-2 max-w-xl mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio_image/rpms_동기화.svg"
          alt="RPMS 자산 동기화 성능 개선 — 건별 처리(2시간)에서 일괄 조회·HashMap 인메모리 비교·JDBC Bulk Insert(10초)로 전환"
          className="w-full h-auto"
        />
        <figcaption className="mt-3 text-[11px] text-gray-500 text-center leading-relaxed">
          자산 동기화 성능 개선 · 건별 처리 → 일괄 조회 + HashMap 비교 + JDBC Bulk Insert (2시간 → 10초)
        </figcaption>
      </figure>

      <figure className="rounded-xl border border-gray-200 bg-white p-4 print:p-2 max-w-xl mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio_image/rpms_변경이력.svg"
          alt="RPMS diff 기반 변경 이력 — 필드 단위 비교(타입 정규화)로 실제 변경 시에만 이력 적재"
          className="w-full h-auto"
        />
        <figcaption className="mt-3 text-[11px] text-gray-500 text-center leading-relaxed">
          예산심사 감사 요구를 반영한 diff 기반 변경 이력 · 실제 변경 시에만 이력 적재
        </figcaption>
      </figure>
    </div>
  )
}
