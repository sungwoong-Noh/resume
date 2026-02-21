export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold font-serif mb-2">노성웅</h1>
          <p className="text-xl text-gray-600 mb-4">백엔드 개발자</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:asdz453@gmail.com" className="text-blue-600 hover:underline">
              asdz453@gmail.com
            </a>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">010-8866-3354</span>
            <span className="text-gray-400">•</span>
            <a href="https://github.com/sungwoong-noh" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12 border-t pt-8">
          <h2 className="text-2xl font-bold font-serif mb-4">자기소개</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            견고한 시스템 설계와 건강한 개발 문화로 지속 가능한 안정성을 만드는 개발자 노성웅입니다.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-teal-600 mb-2">성능 집착</h3>
              <p className="text-sm text-gray-600">
                0.1초의 응답 속도 개선이 고객 경험의 차이를 만든다고 믿습니다.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-teal-600 mb-2">기술 부채 해결</h3>
              <p className="text-sm text-gray-600">
                동료가 읽기 좋은 명료한 코드로 협업 비용을 최소화합니다.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-teal-600 mb-2">안정성 우선</h3>
              <p className="text-sm text-gray-600">
                대규모 트래픽에도 중단 없는 견고한 인프라를 설계합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12 border-t pt-8">
          <h2 className="text-2xl font-bold font-serif mb-6">경력</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold">오케스트로주식회사</h3>
                  <p className="text-gray-600">선임연구원 • 클라우드 서비스 본부</p>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">2023.10 ~ 현재</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                국정자원 업무 효율·안정성 향상을 목표로 요구사항 정제부터 아키텍처/ERD, 공통 모듈·컨벤션, CI/CD·관측성, 운영까지 전 흐름을 일원화해 주도.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• 데이터 동기화 2시간 → 10초로 개선 (99% 향상)</li>
                <li>• p95 응답시간 17초 → 3초로 개선</li>
                <li>• 인시던트 12건 → 5건/주로 개선</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold">주식회사에이직스</h3>
                  <p className="text-gray-600">주임 • SI기술개발</p>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">2021.08 ~ 2023.10</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                SI 기술개발팀 풀스택 개발자로 합류해 납기 환경을 템플릿·공통·CI/CD로 표준화/자동화하고, 설계–개발–운영 전 주기를 주도해 유지보수성과 성능을 지속 개선.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Jenkins 기반 배포자동화로 배포 빈도 7일 → 1일</li>
                <li>• Tiles 프레임워크 도입으로 신규 페이지 리드타임 2일 → 0.5일 단축</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 border-t pt-8">
          <h2 className="text-2xl font-bold font-serif mb-6">기술 스택</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'JPA', 'QueryDSL', 'MariaDB', 'Tibero', 'Redis'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-teal-100 text-teal-700 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['Vue 3', 'TypeScript', 'TanStack Query', 'Ant Design', 'ES6'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Infra</h3>
              <div className="flex flex-wrap gap-2">
                {['Kubernetes', 'Docker', 'Jenkins', 'AWS ECS', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-12 border-t pt-8">
          <h2 className="text-2xl font-bold font-serif mb-6">주요 성과</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="font-bold mb-2">성능 최적화</h3>
              <p className="text-sm text-gray-600">
                JPA 동작 원리를 깊이 이해하고 최적화하여 데이터 동기화 작업을 2시간에서 10초로 개선 (99% 향상)
              </p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="font-bold mb-2">데이터 무결성</h3>
              <p className="text-sm text-gray-600">
                Saga 패턴과 Soft Reservation 도입으로 분산 시스템 환경에서도 데이터 일관성 100% 확보
              </p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="font-bold mb-2">배포 효율화</h3>
              <p className="text-sm text-gray-600">
                CI/CD 파이프라인 최적화로 배포 시간 40% 단축 및 팀의 민첩한 서비스 운영 지원
              </p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="font-bold mb-2">개발 문화</h3>
              <p className="text-sm text-gray-600">
                사내 스터디 운영으로 리팩토링, 단위 테스트, 코드 리뷰 문화 정착 및 기술 부채 감소
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center py-8 border-t text-gray-600 text-sm">
          <p>마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>
        </section>
      </div>
    </main>
  )
}
