// PPP Cloud 전용 다이어그램 (SVG)
// 이력서엔 없는 시각 자료로 포트폴리오 차별화

export default function PppDiagrams() {
  return (
    <div className="space-y-6 mb-8">
      <figure className="rounded-xl border border-gray-200 bg-white p-4 print:p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio_image/ppp_롤백.svg"
          alt="PPP 다단계 프로비저닝 오케스트레이션 및 실패 지점별 차등 롤백 구조"
          className="w-full h-auto"
        />
        <figcaption className="mt-3 text-[11px] text-gray-500 text-center leading-relaxed">
          다단계 벤더 프로비저닝 오케스트레이션 · 실패 지점별 차등 롤백(11개 예외 타입)
        </figcaption>
      </figure>

      <figure className="rounded-xl border border-gray-200 bg-white p-4 print:p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/portfolio_image/ppp_domain.svg"
          alt="PPP 멀티테넌트 데이터 모델 — 방화벽 정규화 FK 그래프 / 로드밸런서 비정규화, 2단 격리"
          className="w-full h-auto"
        />
        <figcaption className="mt-3 text-[11px] text-gray-500 text-center leading-relaxed">
          상품 도메인별 멀티테넌트 데이터 모델 · DB 논리 격리 + 장비 물리 격리(2단)
        </figcaption>
      </figure>
    </div>
  )
}
