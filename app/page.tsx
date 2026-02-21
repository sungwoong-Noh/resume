export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">

        {/* Hero Header */}
        <header className="mb-16 relative">
          <div className="absolute -left-4 -right-4 top-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500"></div>

          <div className="pt-8 pb-12">
            <h1 className="text-6xl font-bold font-serif text-gray-900 mb-2">노성웅</h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-teal-500"></div>
              <p className="text-2xl font-medium text-teal-600">Backend Engineer</p>
            </div>

            <p className="text-lg text-gray-700 font-light mb-6 max-w-2xl leading-relaxed">
              견고한 시스템 설계와 건강한 개발 문화로 <span className="font-semibold text-teal-600">지속 가능한 안정성</span>을 만드는 개발자입니다.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <a href="mailto:asdz453@gmail.com" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
                <span>📧</span> asdz453@gmail.com
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <span>📱</span> 010-8866-3354
              </div>
              <a href="https://github.com/sungwoong-noh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
                <span>🔗</span> GitHub Profile
              </a>
            </div>
          </div>
        </header>

        {/* Core Values */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: '성능 집착', desc: '0.1초의 응답 속도 개선이 고객 경험의 큰 차이를 만든다' },
              { icon: '🧹', title: '기술 부채 해결', desc: '명료한 코드와 리뷰 문화로 협업 비용을 최소화' },
              { icon: '🛡️', title: '안정성 우선', desc: '대규모 트래픽도 견디는 견고한 인프라 설계' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border-t-4 border-teal-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">경력</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-teal-500 to-transparent"></div>
          </div>

          <div className="space-y-6">
            {/* Current Position */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-teal-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">오케스트로주식회사</h3>
                  <p className="text-teal-600 font-semibold mt-1">선임연구원 • 클라우드 서비스 본부</p>
                </div>
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full">2년 4개월 진행중</span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                국정자원 3개 시스템(nTOPS, RPMS, 통합포털)의 통합 운영 업무를 담당합니다.
                요구사항 정제부터 아키텍처 설계, 공통 모듈 표준화, CI/CD 구축, 운영까지 전 흐름을 일원화하여 주도하고 있습니다.
              </p>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">📊 핵심 성과</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">→</span>
                    <span><strong>데이터 동기화</strong> 2시간 → 10초 (99% 향상)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">→</span>
                    <span><strong>응답 속도</strong> p95 17초 → 3초 (82% 개선)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">→</span>
                    <span><strong>인시던트</strong> 월 12건 → 5건/주 (개선)</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'JPA', 'QueryDSL', 'K8s', 'Vue.js', 'Tibero'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Previous Position */}
            <div className="bg-white rounded-lg p-8 border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">주식회사에이직스</h3>
                  <p className="text-emerald-600 font-semibold mt-1">주임 • SI기술개발</p>
                </div>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">2년 3개월</span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                SI 프로젝트 풀스택 개발자로 다양한 공공 프로젝트를 수행했습니다.
                운영 환경의 표준화, 배포 자동화, 성능 최적화를 중심으로 개발 프로세스 전체를 개선했습니다.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded p-4 mb-4">
                <h4 className="font-bold text-gray-900 mb-3 text-sm">📊 주요 개선사항</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">→</span>
                    <span><strong>배포 빈도</strong> 7일 → 1일 (Jenkins 자동화)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">→</span>
                    <span><strong>페이지 개발 속도</strong> 2일 → 0.5일 (Tiles 프레임워크)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">→</span>
                    <span><strong>중복 코드 제거</strong> 65% → 10% (기술 부채 해결)</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {['eGovFramework', 'MyBatis', 'jQuery', 'MySQL', 'Docker', 'Jenkins'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">기술 스택</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-teal-500 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">⚙️</span> Backend
              </h3>
              <div className="space-y-2">
                {['Spring Boot', 'Spring Cloud', 'JPA/Hibernate', 'QueryDSL', 'MariaDB', 'Tibero', 'Redis'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">🎨</span> Frontend
              </h3>
              <div className="space-y-2">
                {['Vue 3', 'TypeScript', 'TanStack Query', 'Ant Design', 'ES6+', 'jQuery'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-xl">🚀</span> Infrastructure
              </h3>
              <div className="space-y-2">
                {['Kubernetes (K8s)', 'Docker', 'AWS ECS/ECR', 'Jenkins', 'Git', 'AWS ALB'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">주요 성과</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-teal-500 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: '성능 최적화의 달인',
                items: [
                  'JPA N+1 문제 해결 및 Bulk Insert로 동기화 성능 99% 개선',
                  'QueryDSL 도입으로 Native 쿼리 70% 제거 및 타입 안정성 확보'
                ]
              },
              {
                title: '분산 시스템 설계',
                items: [
                  'Saga 패턴과 Soft Reservation으로 100% 데이터 무결성 달성',
                  'API Gateway 기반 JWT 중앙 인증으로 서비스 간 결합도 완화'
                ]
              },
              {
                title: '배포 자동화 전문가',
                items: [
                  'CI/CD 파이프라인 최적화로 배포 시간 40% 단축',
                  'GitHub Actions + ECR로 인프라 비용 100% 절감'
                ]
              },
              {
                title: '팀 문화 리더',
                items: [
                  '사내 스터디 운영으로 코드 리뷰 문화 정착',
                  'JUnit5 단위 테스트 도입으로 런타임 오류 원천 차단'
                ]
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border-l-4 border-teal-500">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 text-sm text-gray-700">
                      <span className="text-teal-600 font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">함께 성장하는 팀을 찾고 있습니다</h2>
          <p className="text-lg opacity-90 mb-6">
            견고한 아키텍처와 건강한 개발 문화로 만드는 지속 가능한 시스템
          </p>
          <a
            href="mailto:asdz453@gmail.com"
            className="inline-block px-8 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-50 transition-colors"
          >
            연락하기
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200 text-gray-600 text-sm">
          <p>마지막 업데이트: {new Date().toLocaleDateString('ko-KR')}</p>
        </footer>
      </div>
    </main>
  )
}
