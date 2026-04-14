import { portfolioProfile } from '@/data/portfolio'

export default function PortfolioContact() {
  const { name, email, phone } = portfolioProfile

  return (
    <section className="bg-[#eee8da] py-24 px-6 print:py-12">
      <div className="max-w-5xl mx-auto">
        {/* 화살표 + CONTACT NOW */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex-1 h-px bg-gray-800" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-800 flex-shrink-0"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
          <div className="flex-shrink-0">
            <p className="text-sm text-[#2a6041] mb-0.5">저와 인터뷰, 어떠신가요?</p>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              CONTACT
              <br />
              NOW
            </h2>
          </div>
        </div>
        {/* 연락처 정보 — 우측 정렬 */}
        <div className="flex flex-col items-end space-y-1 mt-4">
          <p className="text-sm text-gray-700">
            <span className="font-bold text-[#2a6041] mr-3">Name.</span>
            {name}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-bold text-[#2a6041] mr-3">Email.</span>
            <a href={`mailto:${email}`} className="underline underline-offset-2 text-[#2a6041]">
              {email}
            </a>
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-bold text-[#2a6041] mr-3">Phone.</span>
            {phone}
          </p>
        </div>
      </div>
    </section>
  )
}
