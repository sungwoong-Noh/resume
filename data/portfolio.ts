export type PortfolioPARItem = {
  result: string       // 헤드라인 — 항상 표시
  problem?: string     // P: 왜 이 문제가 중요했나
  analyze?: string     // A: 왜 이 방법을 선택했나
}

export type PortfolioProject = {
  id: string
  name: string
  period: string
  /** Career Overview 섹션 — 짧은 설명 */
  overviewDescription: string
  overviewContributions: string[]
  /** Project Detail 섹션 — 단락 배열 */
  detailParagraphs: string[]
  keyResponsibilities: PortfolioPARItem[]
  techStack: {
    frontend?: string[]
    backend?: string[]
    infra?: string[]
  }
  /** public/ 기준 스크린샷 경로 (선택) */
  screenshotSrc?: string
  /** 여러 이미지가 있을 때 사용 — screenshotSrc보다 우선 */
  screenshotSrcs?: string[]
  /** Tailwind gradient 클래스 (스크린샷 없을 때 폴백) */
  gradientClass: string
  /** 고용 형태 뱃지 (예: '계약직'). 정규직이면 생략 */
  employmentType?: string
}

export type PortfolioSideProject = PortfolioProject & {
  organization: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'ppp-cloud',
    name: 'PPP Cloud — CSP 멀티테넌트 네트워크 상품',
    period: '2024.08 ~ 2025.06',
    overviewDescription:
      '국가정보자원관리원에 프라이빗 클라우드(AWS 같은 CSP)를 제공하는 플랫폼입니다. 백엔드 5인 팀에서 방화벽·로드밸런서(L4)·포트포워딩 네트워크 상품을 담당하며, 여러 벤더 장비를 조율하는 프로비저닝 자동화와 멀티테넌트 데이터 모델을 설계했습니다.',
    overviewContributions: [
      '운영자가 대신 처리하던 매니지드 방식을 고객 셀프서비스 API로 전환',
      '서로 다른 벤더 장비 API의 다단계 프로비저닝을 Saga 패턴(11개 예외 타입 기반 차등 롤백)으로 설계',
      '로드밸런서 공유 자원(Citrix Service)에 참조 카운팅을 설계해 중복 생성·조기 삭제 방지',
      '상품 도메인별 특성에 맞춘 멀티테넌트 데이터 모델(정규화 그래프 / 비정규화 + 2단 격리) 설계',
      '장비 API를 실제 호출하는 통합 테스트로 스펙 불일치·IP 충돌을 배포 전 검증',
    ],
    detailParagraphs: [
      '운영자가 대신 처리하던 매니지드 방식을 고객 셀프서비스 API로 전환하면서, 서로 다른 벤더 장비를 순서대로 호출하는 **다단계 프로비저닝의 안정성**과 **멀티테넌트 데이터 모델**이라는 두 설계 과제를 풀었습니다. (문제·해결 상세는 아래 Key Responsibilities 참고)',
      '고객(테넌트)마다 독립된 환경을 보장해야 했는데, 방화벽과 로드밸런서는 격리 특성이 서로 달라 단일 방식으로 모델링하기 어려운 게 관건이었습니다. 각 벤더 장비가 실시간 상태 조회 API를 제공해 DB가 장비 전체 상태를 복제할 필요가 없었고, 테넌트-자원 매핑에 필요한 최소 데이터만 저장하면 됐기에 단일 스키마 논리 격리를 택했습니다. **방화벽**은 Zone(테넌트)을 루트로 하는 FK 그래프로, zone_idx(Zone PK)를 경계 루트인 FireWallVs에만 두고 하위 엔티티는 상위로 조인해 테넌트를 식별하도록 정규화했습니다. **로드밸런서**는 LoadbalancerEntity에 zone_idx(DB 식별자)와 lb_partition(장비 Citrix의 Partition 이름)을 나란히 저장하는 비정규화로, DB 조회와 장비 API 호출에 각각 맞는 키를 바로 쓰게 했습니다. 여기에 DB는 FK 논리 격리, 물리 장비는 TrusGuard의 VS·Citrix의 Partition으로 테넌트별 물리 격리하는 **2단 구조**를 구성했습니다.',
    ],
    keyResponsibilities: [
      {
        result: '운영자가 대신 처리하던 매니지드 방식을 **고객 셀프서비스 API로 전환** · 반복 처리 요청을 한 자릿수 수준으로 감소',
        problem: '고객이 자원을 직접 제어할 수 없고 운영자가 대신 생성해주는 매니지드 방식이라, 로드밸런서에 VM 하나 연결하는 것도 요청·대기가 반복(체감상 월 50건 안팎)되는 제한적인 CSP 구조',
        analyze: '네트워크 장비가 이미 제공하는 멀티테넌트 기능을 외부에 안전하게 노출하는 별도 API 서버를 신규 개발 → 고객이 자기 테넌트 범위에서 직접 자원을 신청·즉시 처리',
      },
      {
        result: '다단계 벤더 프로비저닝을 **Saga 패턴(11개 예외 타입 기반 차등 롤백)**으로 설계 · 자원 고아 상태 구조적 방지, 벤더 추가 시 예외 타입·핸들러만 추가하는 확장 구조',
        problem: '방화벽·VS·라우트·ACI·OpenStack 등 서로 다른 벤더 API의 순차 호출이 외부 시스템이라 DB 트랜잭션·@Transactional로 묶을 수 없어, 중간 실패 시 자원이 고아로 남고 재시도조차 막힘',
        analyze: '벤더 호출을 조율하는 Integration 계층 분리(도메인 서비스 / 벤더 어댑터 / Builder) + 프로비저닝 7단계마다 실패 지점별 롤백 범위가 다른 11개 예외 타입 체계 설계(공통 예외 상속, 하위 예외는 컨텍스트만 추가)',
      },
      {
        result: '로드밸런서 공유 자원(Citrix Service)에 **참조 카운팅**을 설계 · 애플리케이션 레벨에서 참조 상태를 직접 관리해 여러 가상서버의 백엔드 공유를 안전하게 보장, 중복 생성·조기 삭제 방지',
        problem: 'Citrix 장비에서 백엔드는 {IP}_{PORT}로 식별되는 하나의 Service 객체인데 여러 로드밸런서가 같은 Service를 공유 바인딩 가능. 여러 가상서버가 안전하게 공유하려면 애플리케이션이 직접 참조 상태를 추적해야 해 중복 생성·사용 중인 자원의 조기 삭제 위험',
        analyze: '연결 시 장비에 Service 존재 여부를 조회해 재사용/신규 생성 분기, 해제 시 DB에서 동일 IP·Port를 참조하는 다른 활성 바인딩 존재 여부를 쿼리로 확인 후 삭제하는 방식으로 참조 카운팅 구현',
      },
      {
        result: '상품 도메인별 특성에 맞춘 **멀티테넌트 데이터 모델**(방화벽 정규화 FK 그래프 / LB 비정규화) + DB 논리 격리·장비 물리 격리 2단 구조 설계',
        problem: '고객(테넌트)마다 독립 네트워크 환경을 보장해야 하는데 상품(방화벽·LB)마다 격리 특성이 달라 단일 방식으로 모델링 불가',
        analyze: '장비가 상태 조회 API를 제공해 DB는 얇은 매핑 레이어로 충분 → 단일 스키마 논리 격리. 방화벽은 Zone 루트 FK 그래프로 정규화, LB는 DB·장비 식별자를 함께 저장하는 비정규화로 조인 없이 각자 필요한 키 사용',
      },
      {
        result: '장비 API를 실제 호출하는 **통합 테스트**로 스펙 불일치·IP 충돌을 배포 전 검증',
      },
    ],
    techStack: {
      frontend: ['Vue 3', 'TypeScript', 'TanStack Query', 'Ant Design'],
      backend: ['Spring Boot', 'JPA', 'QueryDSL', 'MariaDB', 'JUnit5'],
      infra: ['K8s', 'Jenkins', 'Citrix ADC', 'AhnLab TrusGuard', 'OpenStack'],
    },
    gradientClass: 'from-slate-700 via-slate-600 to-slate-800',
  },
  {
    id: 'rpms',
    name: 'RPMS — 자산계획 관리 시스템',
    period: '2024.01 ~ 2025.06',
    overviewDescription:
      '국가정보자원관리원의 IT 자산을 계획·관리하는 시스템으로, 예산심사·감사 대응이 걸려 있어 자산 데이터의 정확성과 변경 이력 추적이 핵심입니다. 5인 팀(PL·선임·신입 2)에서 핵심 기능인 자산 동기화와 심사 도메인 로직을 담당했습니다.',
    overviewContributions: [
      '14만 건 동기화 배치 2시간 → 10초 (HashMap 캐싱 + JDBC Bulk Insert)',
      '예산심사 감사 요구를 반영한 diff 기반 변경 이력 및 사업유형별 검증 규칙 설계',
      '사내 최초 QueryDSL 도입으로 혼재된 쿼리 방식 통일',
    ],
    detailParagraphs: [
      '5인 팀에서 핵심 기능인 자산 동기화 성능을 담당했습니다. 연 2회 스케줄러 배치였던 동기화가 "버튼 즉시 실행"으로 기획이 바뀌면서 14만 건 2시간이 병목으로 드러났고, 건별 비교 조회를 **HashMap 인메모리 비교**로, INSERT는 **JPA IDENTITY 전략이 Bulk Insert를 막는 한계**를 확인해 **JDBC Bulk Insert**로 전환해 10초로 줄였습니다.',
      '하지만 이 프로젝트에서 더 공들인 건 **예산심사 도메인 규칙을 코드 구조로 옮기는 일**이었습니다. 감사 대응상 "누가 언제 무엇을 바꿨는지"를 추적해야 했는데, 수정 요청마다 이력을 남기면 **실제 값 변경이 없는 저장에도 불필요한 이력이 과다 적재되어 감사 추적성을 오히려 저해하는** 문제가 있었습니다. 그래서 서버·스토리지·네트워크·백업·보안장비 등 **7종 자원 각각을 요청 값과 기존 데이터로 필드 단위(자원당 20여 개)로 비교해 실제 변경이 있을 때만 이력을 적재**하도록 설계했습니다. 이때 폼 입력값은 문자열, 엔티티 값은 숫자·boolean이라 단순 비교하면 `"500"`과 `500`을 다르다고 잡는 오탐이 생겨, **타입을 정규화해 비교**하는 로직까지 넣어야 했습니다.',
      '심사 규정 자체도 도메인 모델에 반영했습니다. 사업유형(신규·증설·추가·노후·폐기)마다 요구 항목이 달라, 폐기 예정 자산에 신규 도입과 같은 스펙 필수값을 요구하면 실무자가 잘못된 값을 채워 설계 오류로 이어졌습니다. **Bean Validation의 Validation Group을 사업유형별로 나누고**, 요청의 사업유형 코드에 따라 런타임에 적용할 Group을 선택해 **검증 규칙 자체가 분기**되도록 했습니다 (폐기는 최소 식별 정보만, 신규는 스펙까지 엄격 검증).',
    ],
    keyResponsibilities: [
      {
        result: '**배치 처리 2시간 → 10초 (약 700배)** — HashMap 캐싱 + JDBC Bulk Insert 전환',
        problem: '연 2회 스케줄러 배치였으나 버튼 즉시 실행으로 기획 변경 후, 14만 건 처리에 2시간이 걸려 사용자가 결과를 볼 때까지 대기해야 하는 사실상 못 쓰는 구조',
        analyze: '건별 비교 조회를 전체 조회 + HashMap 인메모리 비교로 개선. INSERT 병목은 JPA IDENTITY 전략이 단건 INSERT를 강제하는 구조적 한계를 확인해 JDBC Template Bulk Insert로 전환',
      },
      {
        result: '**값 변경이 있을 때만 이력을 남겨** 심사자가 봐야 할 내역만 남도록 설계 · **사업유형별로 검증 규칙을 분리**해 실무자 입력 부담 축소',
        problem: '감사 대응상 변경 이력 추적이 필요하나 단순 적재 시 값 변경 없는 저장도 이력이 과다 적재돼 감사 추적성을 저해. 또 사업유형마다 심사 규정(요구 항목)이 다른데 동일 검증을 걸면 폐기 자산에도 불필요한 스펙을 요구',
        analyze: '7종 자원을 필드 단위로 비교해 실제 변경 시에만 이력 적재(타입 차이 오탐 처리) + Bean Validation Group을 사업유형별로 분리해 런타임에 검증 규칙 분기',
      },
      {
        result: '**사내 최초 QueryDSL 도입**으로 혼재된 쿼리 방식 통일 · 컴파일 단계 쿼리 오류 사전 감지',
        problem: 'Data JPA·Criteria API·Native Query 세 방식이 혼재해 유지보수 시 구현 방식 파악이 부담이고, Native Query는 오타가 런타임에야 발견됨',
        analyze: '팀의 초기 회의론을 자산 현황 모듈 파일럿으로 설득 → 타입 안정성·가독성 개선을 직접 시연 후 지사 내 3개 프로젝트로 확산',
      },
    ],
    techStack: {
      frontend: ['Vue.js', 'ES6'],
      backend: ['Spring Boot', 'JPA', 'QueryDSL', 'Bean Validation', 'MariaDB', 'Redis'],
      infra: ['K8s', 'Docker', 'Jenkins', 'HashiCorp Vault', 'Harbor'],
    },
    gradientClass: 'from-indigo-900 via-indigo-800 to-blue-900',
  },
]

// 기타 경험 — 플래그십(PPP·RPMS) 대비 가볍게 표시
export const portfolioOtherProjects: PortfolioProject[] = [
  {
    id: 'kepco',
    name: '한전 위험성 평가기반 자율안전 솔루션',
    period: '2022.02 ~ 2023.10',
    overviewDescription:
      '한전과 진행한 위험성 평가기반 자율안전 솔루션 개발에 SI 풀스택으로 참여했습니다. GIS 기반 현장 관제, 메타데이터 관리, 보고서 생성 기능을 개발하고, 반복 비효율을 직접 발견해 템플릿화·배포 자동화로 개선했습니다.',
    overviewContributions: [
      'GIS 실시간 관제 대시보드 및 메타데이터 관리 백엔드 개발',
      'jsPDF 보고서를 FastAPI 헤드리스 렌더 서버로 서비스화 (앱/웹 동일 품질 PDF)',
      'Tiles 프레임워크 도입으로 중복 코드 65% → 10% · Jenkins 파이프라인으로 배포 7일 → 1일',
    ],
    detailParagraphs: [
      'GIS와 모빌리티 게이트웨이를 결합해 작업 현장을 실시간 관제하고 산업재해를 예방하는 플랫폼에서, 현장 작업 관리·관리자 페이지와 메타데이터 관리 백엔드를 개발했습니다.',
      '앱과 웹에서 동일한 PDF 보고서를 생성해야 했는데, jsPDF는 브라우저 렌더링 환경이 필요해 Spring에서 직접 실행할 수 없었습니다. 앱팀과 논의 끝에 **브라우저 렌더링이 되는 별도 크롤링 서버를 두는 방식**을 택했고, 빠른 구현이 가능한 FastAPI로 헤드리스 렌더 서버를 구축해 보고서 생성을 API로 서비스화했습니다.',
      'JSP 화면마다 헤더·푸터·네비게이션을 반복 복붙하는 구조라 레이아웃 변경 시 전 페이지를 손봐야 했습니다. include 방식은 중복 제거 효과가 제한적이라 **레이아웃 템플릿화가 가능한 Tiles 프레임워크 도입을 직접 제안·적용**해 중복 코드를 65%에서 10%로 줄였고, 폐쇄망·온프레미스라 관리형 CI를 쓸 수 없어 **자체 구축 가능한 Jenkins로 배포 파이프라인을 구성**해 배포 주기를 7일에서 1일로 줄였습니다.',
    ],
    keyResponsibilities: [
      {
        result: '현장 메타데이터 수집을 위한 작업 관리·관리자 페이지 및 GIS 관제 대시보드 개발',
      },
      {
        result: 'jsPDF 보고서를 **FastAPI 헤드리스 렌더 서버로 서비스화** — 앱/웹 동일 품질 PDF 제공',
        problem: 'jsPDF는 브라우저 렌더링 환경이 필요해 Spring에서 직접 실행 불가, 앱에서 웹과 동일한 PDF 생성 불가',
        analyze: '브라우저 렌더링이 필요한 실행을 위해 별도 크롤링 서버 방식 선택 → 빠른 구현이 가능한 FastAPI로 헤드리스 렌더 환경 구축',
      },
      {
        result: '**Tiles 프레임워크 도입으로 중복 코드 65% → 10%**, 신규 페이지 리드타임 2일 → 0.5일',
        problem: 'JSP 화면마다 공통 레이아웃을 반복 포함해 변경 시 전체 페이지를 수정해야 하는 구조',
        analyze: 'include 방식은 중복 제거 효과 제한적 → Tiles 레이아웃 템플릿화로 변경 지점을 1곳으로 통일',
      },
      {
        result: '**Jenkins 배포 파이프라인 구성으로 배포 7일 → 1일** · 2022 BIXPO 시연 및 한전 연구과제 평가 통과 기여',
      },
    ],
    techStack: {
      frontend: ['JSP', 'jQuery', 'ES6'],
      backend: ['eGovFramework', 'MyBatis', 'MySQL', 'FastAPI'],
      infra: ['Docker', 'Jenkins'],
    },
    gradientClass: 'from-sky-700 via-blue-700 to-cyan-800',
  },
  {
    id: 'planai',
    name: 'MSP WAF 차단 프로세스 AI 반자동화',
    period: '2026.02 ~ 2026.05',
    employmentType: '계약직',
    overviewDescription:
      'KT Cloud MSP 파트너사(3개월 계약)에서 40개 이상 고객사의 클라우드 인프라 운영을 담당했습니다. 반복 운영 업무를 자동화·표준화하는 데 집중해, WAF 차단 요청 처리를 AI 에이전트로 반자동화하고 고객사 모니터링 체계를 구축했습니다.',
    overviewContributions: [
      'WAF 유해 IP 차단 요청을 Gmail API·MCP·Claude Code로 반자동화 (기관별 예외 규칙 인코딩 + 사람 승인 게이트)',
      '40개 고객사 Prometheus·Grafana 모니터링 구축 · VictoriaMetrics로 지표 보존 30일 → 1년',
    ],
    detailParagraphs: [
      'KT Cloud MSP 파트너사(3개월 계약)에서 반복 운영 업무를 자동화·표준화하는 데 집중했습니다. 대표적으로 기관마다 규칙이 달라 단순 자동화가 어렵던 WAF 차단 요청 처리를, **Gmail API·MCP·Claude Code로 기관별 예외 규칙을 인코딩**하고 AI 오분류를 관측해 **사람 승인 게이트**를 두는 구조로 반자동화했습니다. 그 외 40개 고객사 Prometheus·Grafana 모니터링 체계를 구축했습니다. (상세는 아래 Key Responsibilities 참고)',
    ],
    keyResponsibilities: [
      {
        result: '**WAF 차단 요청을 AI 에이전트로 반자동화** — 반복 메일 확인·분류·작성 자동화 + 관측된 AI 실패 모드를 사람 승인 게이트로 차단',
        problem: '기관마다 예외 규칙(특정 국가 IP 차단 금지, 회신 참조 대상, 담당 업체 상이)이 달라 단순 자동화 불가',
        analyze: 'Gmail API·MCP + Claude Code skill에 기관별 예외 규칙을 인코딩해 파싱·분류·회신 작성을 자동화. 관측된 AI 오분류·오독을 근거로 임시저장 → 사람 검토 → 발송 승인 게이트 설계',
      },
      {
        result: '40개 고객사 Prometheus·Grafana 모니터링 구축 · **VictoriaMetrics로 지표 보존 30일 → 1년**',
      },
    ],
    techStack: {
      backend: ['Gmail API', 'MCP', 'Claude Code'],
      infra: ['Prometheus', 'Grafana', 'VictoriaMetrics', 'Ansible', 'KT Cloud'],
    },
    screenshotSrcs: [
      '/portfolio_image/플랜아이_모니터링.png',
      '/portfolio_image/플랜아이_그라파나.png',
    ],
    gradientClass: 'from-emerald-900 via-teal-800 to-slate-800',
  },
]

export const portfolioProfile = {
  name: '노성웅',
  tagline: '"문제의 원인을 구조 레벨까지 파고들어 해결합니다."',
  role: 'Back-end Engineer',
  email: 'asdz453@gmail.com',
  phone: '010-8866-3354',
  github: 'sungwoong-Noh',
  workingStyles: [
    {
      icon: '🔍',
      title: '가설 기반의 문제 해결',
      description: '막연한 추측이 아닌 실행계획 분석과 JPA 동작 이해로 원인을 진단합니다.',
    },
    {
      icon: '🧱',
      title: '유지보수하기 쉬운 코드',
      description: '만든 사람이 아니어도 읽고 이어가기 쉽도록 구현 방식을 표준화하고 명료하게 씁니다.',
    },
    {
      icon: '🛡️',
      title: '안정성 우선주의',
      description: '여러 시스템이 얽힌 흐름도 실패 지점마다 자원이 깨지지 않도록 구조로 설계합니다.',
    },
  ],
  keywords: [
    {
      tag: '#원인_추적',
      description: '느린 이유를 코드와 실행계획까지 내려가 증상이 아닌 원인을 고칩니다.',
    },
    {
      tag: '#설계력',
      description: '트랜잭션으로 묶이지 않는 흐름도 실패에 강한 구조로 설계합니다.',
    },
    {
      tag: '#유지보수성',
      description: '혼재된 방식을 통일해 남이 읽어도 이어가기 쉬운 코드를 만듭니다.',
    },
  ],
  introduction: [
    '문제를 만나면 표면이 아니라 원인을 봅니다. 14만 건 배치가 2시간 걸리던 원인을 JPA IDENTITY의 Bulk Insert 한계까지 파고들어 10초로 줄이고, 130만 건 조회가 특정 조건에서만 느려지던 원인을 실행계획에서 타입 불일치로 규명해 p95 17초를 3초로 개선했습니다.',
    'PPP Cloud에서는 트랜잭션으로 묶을 수 없는 다단계 벤더 프로비저닝을 11개 예외 타입 기반 차등 롤백 구조로 설계하고, 상품 도메인별 특성에 맞춘 멀티테넌트 데이터 모델을 만들었습니다. RPMS에서는 공공 예산심사의 감사·심사 규정을 diff 기반 이력 관리와 Bean Validation Group으로 도메인 모델에 정확히 옮겼습니다.',
    '좋은 해결은 한 번 고치고 끝나는 게 아니라 다시 안 생기는 구조로 남는 것이라 생각합니다. 혼재된 쿼리 방식을 QueryDSL로 통일하는 등, 당장 돌아가게 하기보다 오래 안정적으로 유지되는 시스템을 지향합니다.',
  ],
}

export const portfolioSideProjects: PortfolioSideProject[] = [
  {
    id: 'commerce',
    name: 'InnerCircle 통합 커머스',
    organization: '패스트캠퍼스 이너써클 백엔드 4기',
    period: '2025.06 ~ 2025.09',
    overviewDescription:
      '현업 멘토링 기반으로 진행한 고트래픽 통합 커머스 구현 프로젝트입니다. 5인 팀에서 인프라(AWS 기반 MSA·오토스케일링), CI/CD, 인증/인가, 회원 도메인을 담당했습니다.',
    overviewContributions: [
      'AWS ECS 기반 오토스케일링 MSA 인프라 설계 및 구축',
      'API Gateway 중앙 인증(JWT 무상태) 및 토큰 버킷 기반 Rate Limiting 구현',
      'GitHub Actions·AWS ECR 기반 CI/CD 파이프라인 및 Zipkin 분산 추적 도입',
    ],
    detailParagraphs: [
      '대량 트래픽 환경에서도 안정적인 서비스를 제공하기 위해 상품·주문·결제 도메인을 **MSA 아키텍처**로 설계했습니다. 5인 팀에서 인프라(AWS 기반 MSA·오토스케일링), CI/CD, 인증/인가, 회원 도메인을 담당했습니다.',
      '**AWS ECS 기반 Auto-scaling 구조**를 직접 설계해 급격한 트래픽 변동에도 가용성을 유지하도록 했고, 분산 환경의 인증 문제는 **API Gateway 중심의 JWT 무상태(Stateless) 인증 체계**로 풀어 서비스 간 결합도를 낮췄습니다.',
      'MSA 구조에서 스파이크 트래픽이 다운스트림 서비스 전체로 전파될 위험이 있어, API Gateway 레벨에서 **토큰 버킷 알고리즘 기반 Rate Limiting**을 구현했습니다. 슬라이딩 윈도우 대비 버스트 허용과 평균 제한을 동시에 제어할 수 있어 선택했습니다.',
    ],
    keyResponsibilities: [
      {
        result: 'AWS ECS 기반 고가용성 MSA 인프라 아키텍처 설계 및 오토스케일링 체계 구축',
      },
      {
        result: 'GitHub Actions·AWS ECR 기반 CI/CD 파이프라인 구축 및 Zipkin 분산 추적으로 호출 흐름 가시화',
      },
      {
        result: 'JWT 무상태 인증 + API Gateway 중앙 인증 아키텍처로 서비스 간 결합도 완화',
      },
      {
        result: '**API Gateway 토큰 버킷 기반 Rate Limiting** 구현으로 스파이크 트래픽 대응 및 다운스트림 보호',
        problem: 'MSA 구조에서 스파이크 트래픽 발생 시 다운스트림 서비스 전체로 장애가 전파될 위험',
        analyze: 'API Gateway 레벨에서 토큰 버킷 알고리즘 적용 → 슬라이딩 윈도우 대비 버스트 허용과 평균 제한을 동시에 제어 가능',
      },
    ],
    techStack: {
      backend: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'JPA', 'JUnit5', 'PostgreSQL', 'Zipkin'],
      infra: ['AWS ECS', 'AWS ECR', 'Docker', 'GitHub Actions', 'AWS S3', 'AWS CloudMap', 'Prometheus', 'Grafana'],
    },
    screenshotSrcs: [
      '/portfolio_image/이너써클_MSA.png',
      '/portfolio_image/이너써클_CICD.png',
      '/portfolio_image/이너써클_CICD_유스케이스.png',
    ],
    gradientClass: 'from-gray-900 via-gray-800 to-gray-900',
  },
]
