// 이력서 데이터 — sungwoong-Noh/resume data/resume.ts 기반. 두 시안이 공유합니다.
// **굵게** 표기 지원. tags = 기술 스택 필터용 (skills 이름과 일치해야 매칭됨)
window.RESUME_DATA = {
  profile: {
    name: '노성웅', nameEn: 'Sungwoong Noh', title: 'Backend Engineer', years: 5,
    tagline: '성능 병목 진단부터 팀 개발 문화 개선까지',
    intro: [
      '**표면이 아니라 근본 원인을 고치는 백엔드 개발자 노성웅입니다.**',
      '기술을 목적이 아니라 문제 해결의 도구로 보고, 성능 병목을 끝까지 추적해 해결하며, 만든 사람이 아니어도 읽고 유지보수하기 쉬운 코드를 만드는 데 강점이 있습니다.',
      '**Spring Boot/Java 기반으로 공공 클라우드 환경에서 수십만 건 규모의 자산 데이터**를 다루며, 성능 개선과 다단계 트랜잭션 구조 설계, 쿼리 방식 표준화를 해왔습니다.',
      '당장 돌아가게 하기보다, 원인까지 해결해서 오래 안정적으로 유지되는 시스템을 만들려고 합니다.'
    ]
  },
  contacts: [
    { label: 'Email', value: 'asdz453@gmail.com', href: 'mailto:asdz453@gmail.com' },
    { label: 'Phone', value: '010-8866-3354', href: 'tel:01088663354' },
    { label: 'GitHub', value: 'sungwoong-Noh', href: 'https://github.com/sungwoong-Noh' },
    { label: 'Blog', value: 'sw-noh.tistory.com', href: 'https://sw-noh.tistory.com' },
    { label: 'LinkedIn', value: 'sunwoongnoh', href: 'https://www.linkedin.com/in/sunwoongnoh' },
    { label: 'Web', value: 'swnoh.pe.kr', href: 'https://swnoh.pe.kr' }
  ],
  metrics: [
    { before: '2시간', after: '10초', label: '자산 동기화 배치 · 14만 건', note: '약 700배' },
    { before: '7일', after: '1일', label: '배포 주기 · Jenkins 파이프라인', note: '' },
    { before: '5초', after: '0.9초', label: 'p95 응답 · SMS 서비스', note: '' },
    { before: '30일', after: '1년', label: '지표 보존 · 40개 고객사', note: '' }
  ],
  skills: [
    { category: 'Backend', items: [['Java','expert'],['Spring Boot','expert'],['JPA / Hibernate','expert'],['QueryDSL','expert'],['RESTful API','expert'],['MariaDB / MySQL','expert'],['Spring Cloud','proficient'],['Spring Security','proficient'],['Tibero','proficient'],['Redis','proficient'],['eGovFramework','proficient'],['MyBatis','proficient'],['PostgreSQL','familiar']] },
    { category: 'Infrastructure', items: [['Docker','expert'],['Jenkins','expert'],['Kubernetes','proficient'],['AWS ECS / ECR','proficient'],['KT Cloud','proficient'],['Ansible','proficient'],['GitHub Actions','proficient'],['AWS CloudMap / ALB','familiar'],['Harbor','familiar'],['HashiCorp Vault','familiar'],['Helm','familiar']] },
    { category: 'Observability', items: [['Prometheus','proficient'],['Grafana','proficient'],['VictoriaMetrics','proficient'],['Zipkin','proficient'],['Elasticsearch','familiar'],['k6','familiar']] },
    { category: 'Frontend', items: [['Vue 3','proficient'],['TypeScript','proficient'],['TanStack Query','proficient'],['Ant Design','proficient'],['jQuery','familiar']] }
  ],
  experiences: [
    {
      company: '오케스트로 클라우드', position: '선임연구원 · 클라우드 서비스 본부', period: '2023.10 ~ 2026.02', duration: '2년 4개월',
      description: '프라이빗·퍼블릭 클라우드부터 CSP까지 담당하는 B2B 클라우드 기업. 국가정보자원관리원 공공 클라우드 사업에서 클라우드 네이티브 플랫폼을 개발·운영합니다.',
      projects: [
        {
          name: 'CSP 멀티테넌트 네트워크 상품 개발 (PPP Cloud)', period: '2024.08 ~ 2025.06', teamSize: '5인 팀',
          tags: ['Java','Spring Boot','JPA / Hibernate','RESTful API','Kubernetes','Vue 3','Jenkins'],
          overview: '공공기관에 프라이빗 클라우드를 제공하는 플랫폼으로, 기관(테넌트)마다 격리된 네트워크 환경을 자동 프로비저닝합니다. 방화벽·로드밸런서(L4) 등 네트워크 상품을 담당했습니다.',
          bullets: [
            '운영자가 대신 처리하던 **매니지드 방식**을 **Self-Service API**로 전환해, 최소 1~2시간 걸리던 반복 요청을 즉시 처리로 전환',
            '이기종 벤더 API로 이뤄지는 다단계 프로비저닝을 **Saga 패턴**(11개 예외 타입 기반 차등 롤백)으로 설계해 실패 시 자원 누수 구조적 방지',
            '실 장비 대상 **통합 테스트**로 벤더 스펙 불일치를 배포 전 검증, 테넌트 전체 연결 장애 사전 차단'
          ],
          par: [
            { title: 'Self-Service API 전환', p: '고객이 자원을 신청하면 운영자가 직접 생성해주는 **매니지드 방식**. 반복 처리 요청이 체감상 월 50건 안팎이고, 고객이 자원을 직접 제어할 수 없는 제한적인 CSP 구조', s: '장비 자체가 이미 멀티테넌트 기능을 갖추고 있어, 이를 운영자 개입 없이 API로 직접 노출하는 **별도 API 서버 신규 개발**', r: '고객이 직접 신청하고 즉시 처리되는 구조로 전환, 반복 수동 처리 업무 해소' },
            { title: 'Saga 기반 다단계 프로비저닝', p: '방화벽·VS·라우트·ACI·OpenStack 등 **서로 다른 벤더 API의 순차 호출**. 외부 시스템이라 @Transactional로 묶을 수 없어 중간 실패 시 자원 누수·재시도 불가', s: '**Integration 계층 분리** + 프로비저닝 7단계마다 롤백 범위가 다른 **11개 예외 타입 체계**(오케스트레이션 Saga) 제안·구현. ControllerAdvice 분리로 프로비저닝·롤백 로직 **131줄 → 32줄**', r: '**자원 누수 구조적 방지** · 벤더 추가 시 예외 타입·핸들러만 추가하는 확장 구조' },
            { title: 'Service 객체 참조 카운팅', p: 'Citrix 장비에서 {IP}_{PORT} Service 객체를 여러 로드밸런서가 공유 바인딩. 애플리케이션이 참조 상태를 추적하지 않으면 중복 생성·조기 삭제 위험', s: '연결 시 장비 조회로 **재사용/신규 생성 분기**, 해제 시 DB에서 동일 IP·Port의 다른 활성 바인딩 존재 여부를 확인 후 삭제하는 **참조 카운팅** 구현', r: '여러 가상서버의 백엔드 공유를 **구조적으로 안전하게 보장**' },
            { title: '실 장비 통합 테스트 도입', p: '설정 실패 시 테넌트 전체가 연결 불가. **벤더 장비마다 스펙 문서와 실제 동작이 달라** 반복 수정·재배포', s: '테스트 문화가 없던 조직에 **Mock 없이 스테이징 장비를 직접 호출하는 통합 테스트** 도입, 요청 포맷의 스펙 일치 여부 검증에 초점', r: '**벤더별 스펙 불일치를 배포 전 검증**, 테넌트 전체 연결 장애 사전 차단' }
          ]
        },
        {
          name: '자산계획 시스템(RPMS) 설계/개발', period: '2024.01 ~ 2025.06', teamSize: '5인 팀',
          tags: ['Java','Spring Boot','JPA / Hibernate','QueryDSL','Tibero','MariaDB / MySQL','Vue 3','TanStack Query','Ant Design'],
          overview: '국가정보자원관리원의 IT 자산을 계획·관리하는 시스템. 수십만 건 규모 자산의 빠른 동기화·조회 성능과 감사 대응을 위한 변경 이력 추적이 함께 요구됐습니다.',
          bullets: [
            '자산 동기화 배치 **2시간 → 10초**(약 700배) — HashMap 인메모리 비교 + JDBC Bulk Insert 전환',
            '**diff 기반 변경 이력**으로 감사 요구사항을, **사업유형별 Bean Validation Group**으로 심사 규정을 도메인 모델에 반영',
            '혼재된 쿼리 방식을 **QueryDSL**로 통일해 컴파일 단계 오류 감지, 지사 내 3개 프로젝트로 확산',
            'RPMS 히스토리를 유일하게 파악한 담당자로서 **패치 방향·일정·담당자 지정** 전담'
          ],
          par: [
            { title: '동기화 배치 700배 개선', p: '연 2회 배치가 **버튼 즉시 실행으로 기획 변경** 후, 14만 건 처리에 2시간 — 사실상 못 쓰는 구조', s: '건별 조회를 **전체 조회 + HashMap 인메모리 비교**로 전환. **JPA IDENTITY 전략은 Bulk Insert가 불가능한 구조**임을 확인하고 **JDBC Template Bulk Insert**로 전환', r: '14만 건 처리 **2시간 → 10초** (약 700배)' },
            { title: '감사 이력 · 사업유형별 검증', p: '감사 이력 추적이 필요하고 사업유형마다 심사 규정이 다름. 단순 구현 시 이력 과다 적재, 폐기 자산에도 불필요한 스펙 요구', s: '**7종 자원 필드 단위 비교로 실제 변경 시에만 이력 적재** + **Bean Validation Group을 사업유형별로 분리**해 런타임 검증 분기', r: '감사·심사 규정을 **도메인 모델·검증 구조로 정확히 반영**' },
            { title: 'QueryDSL 표준화', p: 'Data JPA·Criteria API·Native Query가 혼재, **어떤 방식으로 구현됐는지 파악하는 것 자체가 부담**', s: '컴파일 단계 오류 감지·영속성 컨텍스트 활용이 가능한 **QueryDSL로 통일** 제안. 회의적 의견에 **파일럿 적용 후 시연으로 설득**', r: '쿼리 오류 사전 감지 · **지사 내 3개 프로젝트로 확산**' }
          ]
        }
      ]
    },
    {
      company: '주식회사 에이직스', position: '주임 · SI기술개발', period: '2021.08 ~ 2023.10', duration: '2년 3개월',
      description: '대용량 이미지 3D 시각화 기술 기반 IT 기업으로, 한전 등 공공기관 SI 프로젝트를 수행합니다.',
      projects: [
        {
          name: '동구청 과학행사 신청 플랫폼', period: '2023.07 ~ 2023.10',
          tags: ['Java','eGovFramework','MyBatis','MariaDB / MySQL','jQuery'],
          overview: '과학행사 온라인 신청·참가자 관리 플랫폼. 시민이 직접 신청하고 담당자는 신청 현황과 통계를 통합 관리합니다.',
          bullets: [
            'eGovFramework 기반 3개월 내 풀스택 개발 및 안정적 런칭',
            '동시 신청 중복 가능성을 Redis 분산락·DB 비관적 락 대신 **Soft Reservation**(DB 제약 기반 임시 예약)으로 방지',
            'NICE 본인인증 + OAuth 2.0 SNS 로그인, 행사·참가자·통계 통합 어드민 구축'
          ],
          par: [
            { title: 'Soft Reservation', p: '동시 신청 시 **중복 신청 가능성**', s: '**Redis 분산락은 별도 인프라 필요**, **비관적 락은 소규모 트래픽에 과도** → 임시 예약 상태를 DB로 관리하는 **Soft Reservation** 선택', r: '**DB 제약 기반 중복 신청 방지 구조**' }
          ]
        },
        {
          name: '충남도청 SMS 서비스 DB 이관', period: '2023.03 ~ 2023.05',
          tags: ['MariaDB / MySQL'],
          overview: '노후 장비로 지속적으로 다운되던 SMS 발송 서비스를 교체하며 1,000만 건 규모 발송 이력을 이관한 프로젝트입니다.',
          bullets: [
            'OS 설치 → 마이그레이션 → 납품 전 과정 수행, **1,000만 건 데이터 무결성 100% 유지**',
            '페이지마다 자동 실행되던 집계 쿼리를 온디맨드 조회로 변경해 **p95 5초 → 0.9초**',
            '노후 장비 교체로 물리적 장애 포인트 제거, 이관 후 다운타임 0건'
          ],
          par: [
            { title: '집계 쿼리 온디맨드 전환', p: '매 페이지 이동 시 **헤더에서 전체 SMS 카운트 집계 쿼리가 자동 실행**', s: '상시 표시가 불필요한 집계임을 파악 → **버튼 클릭 시에만 조회**', r: '**p95 5초 → 0.9초** · CPU 65% → 40%' }
          ]
        },
        {
          name: '한전 위험성 평가기반 자율안전 솔루션', period: '2022.02 ~ 2023.10',
          tags: ['Java','eGovFramework','MyBatis','MariaDB / MySQL','Jenkins','Docker','jQuery'],
          overview: '한전 현장의 위험성 평가와 자율 안전관리를 지원하는 솔루션. GIS 기반 실시간 현장 모니터링과 보고서 관리를 제공합니다.',
          bullets: [
            'GIS 기반 실시간 모니터링 대시보드 및 메타데이터 관리 백엔드 개발',
            'Spring에서 실행 불가한 jsPDF를 위해 **FastAPI 크롤링 서버** 구축, 모바일/웹 동일 품질 PDF 제공',
            '**Tiles 프레임워크**로 중복 코드 65% → 10%, 페이지 리드타임 2일 → 0.5일',
            '**Jenkins 파이프라인**으로 배포 빈도 7일 → 1일',
            '2022 BIXPO 기술 시연 성공, 한전 연구과제 최종 평가 통과 기여'
          ],
          par: [
            { title: 'PDF 보고서 API', p: '**Spring에서 jsPDF를 직접 실행할 수 없어** 앱에서 웹과 동일한 보고서 생성 불가', s: '**FastAPI 크롤링 서버를 별도 구축**해 JS 실행 환경 확보', r: 'jsPDF 보고서 생성 **API 서비스화**' },
            { title: 'Tiles 레이아웃 템플릿', p: '페이지마다 헤더·푸터·네비게이션을 **복붙하는 중복 레이아웃**', s: 'include 방식의 한계 → **Tiles 프레임워크** 도입 제안·적용', r: '**중복 코드 65% → 10%** · 리드타임 **2일 → 0.5일**' },
            { title: 'Jenkins 배포 자동화', p: '수동 배포의 **휴먼에러**와 **7일 배포 주기**', s: '폐쇄망·온프레미스라 SaaS CI 불가 → **자체 구축 Jenkins 파이프라인**', r: '**배포 빈도 7일 → 1일**' }
          ]
        }
      ]
    },
    {
      company: '플랜아이(PlanAI)', position: 'Cloud Engineer', period: '2026.02 ~ 2026.05', duration: '3개월', employmentType: '계약직',
      description: 'KT Cloud 기반 클라우드 인프라 구축·운영(MSP) 파트너사로, 40개 이상 고객사 인프라를 관리합니다.',
      projects: [
        {
          name: 'WAF 유해 IP 차단 프로세스 AI 반자동화', period: '2026.02 ~ 2026.05',
          tags: ['KT Cloud'],
          overview: 'WAF 유해 의심 IP 이벤트 발생 시 관리 업체에 차단 요청 메일을 보내는 업무로, 담당자가 일일이 확인·작성·발송하던 프로세스입니다.',
          bullets: [
            '기관마다 다른 예외 규칙을 **Gmail API·MCP + Claude Code skill**에 인코딩해 메일 확인·분류·작성 자동화',
            'AI 오분류·오독을 관측해 **임시저장 → 사람 검토 → 발송** 승인 게이트 설계, 단독 구축 후 팀 전파'
          ],
          par: [
            { title: '기관별 예외 규칙 인코딩', p: '기관마다 예외 규칙(국가별 차단 금지, 참조 담당자 등)이 달라 **단순 자동화 불가**', s: 'Gmail API·MCP 서버 구성 + **Claude Code skill에 기관별 규칙 인코딩**', r: '반복적인 메일 확인·분류·작성 자동화' },
            { title: '사람 승인 게이트', p: '초기 AI의 **오분류·오독 실패 모드** 발생', s: '완전 자동 발송 대신 **임시저장 → 사람 검토 → 발송** 구조', r: '보안 사고·AI 오발송 동시 방지 · **단독 구축 후 팀 전파**' }
          ]
        },
        {
          name: 'MSP 고객사 모니터링 체계 구축', period: '2026.02 ~ 2026.05',
          tags: ['Prometheus','Grafana','VictoriaMetrics','KT Cloud'],
          overview: '40개 고객사 클라우드 인프라에 통합 모니터링이 없어, 장애 감지와 월간 운영 보고서를 수작업으로 처리하던 환경이었습니다.',
          bullets: [
            '**Prometheus + Grafana**로 40개 고객사 통합 모니터링, **VictoriaMetrics**로 지표 보존 30일 → 1년',
            '미활용이던 **Prometheus 연동 보고서 기능** 활성화, 월간 보고서 2시간 → 10분'
          ],
          par: [
            { title: '장기 지표 보존', p: '기본 지표 **7일 보존**, 메일 알람뿐, 통합 관제 부재로 **장애 사후 원인 추적 불가**', s: 'Grafana + Prometheus 선택, Thanos 등 검토 후 구성 변경 없이 도입 가능한 **VictoriaMetrics**로 전환', r: '40개 고객사 구축 · 보존 **30일 → 1년**' },
            { title: '월간 보고서 자동화', p: '서버마다 직접 접속해 확인 — **서버 20개 기준 2시간 이상**', s: 'CMP 개발팀과 협의한 **Prometheus 연동**으로 미활용 보고서 기능 활성화', r: '보고서 작성 **2시간 → 10분**' }
          ]
        }
      ]
    }
  ],
  sideProjects: [
    {
      name: 'InnerCircle Commerce', org: '패스트캠퍼스 · 5인 팀', period: '2025.07 ~ 2025.09',
      tags: ['Java','Spring Boot','Spring Cloud','JPA / Hibernate','PostgreSQL','AWS ECS / ECR','AWS CloudMap / ALB','GitHub Actions','Zipkin','Grafana','Redis'],
      description: '고트래픽 커머스 시나리오 기반 MSA 프로젝트. 인프라·CI/CD·인증/인가·회원 도메인 담당.',
      bullets: ['**AWS ECS 기반 MSA** Auto-scaling 인프라 설계·구축', '**JWT + API Gateway 중앙 인증**으로 서비스 간 결합도 완화', 'Redis **토큰 버킷 Rate Limiting**으로 다운스트림 보호'],
      url: 'https://github.com/INNER-CIRCLE-ICD4/Project-3.-Commerce', urlLabel: 'github.com/INNER-CIRCLE-ICD4'
    },
    {
      name: 'TechGate — 검색엔진 스터디', org: '개인 프로젝트', period: '2025.09 ~ 2025.10',
      tags: ['Spring Boot','MariaDB / MySQL','Redis','Elasticsearch','Docker','Grafana','Prometheus','k6'],
      description: 'RDB·Redis·Elasticsearch 벤치마크로 10M 상품 검색 엔진 설계·구현.',
      bullets: ['k6 벤치마크 후 **Elasticsearch** 도입 · p95 **60,000ms → 130ms**', 'Nori·fuzziness·부스팅 조합으로 오타/복합어에 강한 자동완성'],
      url: 'https://github.com/Tech-Gate-Step/search-system-evolution', urlLabel: 'github.com/Tech-Gate-Step'
    }
  ],
  education: [
    { period: '2022.03', title: '목원대학교', sub: '전자공학과 학사 졸업' }
  ],
  certifications: [
    { period: '2024.09', title: '정보처리기사', sub: '한국산업인력공단' },
    { period: '2025.06 ~ 2025.09', title: 'InnerCircle 백엔드 4기 수료', sub: '패스트캠퍼스 · CIDR Validator 라이브러리 구현·Jitpack 배포, Testcontainers 통합 테스트' }
  ]
};
