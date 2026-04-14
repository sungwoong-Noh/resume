export type PortfolioProject = {
  id: string
  name: string
  period: string
  /** Career Overview 섹션 — 짧은 설명 */
  overviewDescription: string
  overviewContributions: string[]
  /** Project Detail 섹션 — 단락 배열 */
  detailParagraphs: string[]
  keyResponsibilities: string[]
  techStack: {
    frontend?: string[]
    backend?: string[]
    infra?: string[]
  }
  /** public/ 기준 스크린샷 경로 (선택) */
  screenshotSrc?: string
  /** Tailwind gradient 클래스 (스크린샷 없을 때 폴백) */
  gradientClass: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'ppp-cloud',
    name: 'PPP Cloud',
    period: '2024.08 ~ 2025.07',
    overviewDescription:
      'Kt Cloud와 진행된 CSP 플랫폼 구축 프로젝트에 Third-party 파트로 참여하였습니다. 파티셔닝 네트워크 환경의 완전 자동화 문제를 구현하며 사용자에게 CSP 경험을 제공하는데 기여했습니다.',
    overviewContributions: [
      '확장성을 고려한 백엔드 설계 및 RESTful API 인터페이스 표준화',
      '멀티테넌트 고가용성 네트워크 상품 기획 및 구현',
      '수동 프로세스의 Self-Service API 기반 자동화 전환으로 수동 운영 워크로드 90% 절감 (월 50건 → 5건)',
      '코드 리뷰 및 JUnit5 기반 단위 테스트 도입으로 런타임 오류 원천 차단',
    ],
    detailParagraphs: [
      '국정자원 클라우드 전환을 위해 이기종 인프라 설정을 자동화하는 로드밸런서(L4) 및 포트포워딩 셀프서비스 개발을 주도했습니다.',
      '기존의 수동 설정 방식을 API 기반 자동화 체계로 전환하여 수동 운영 워크로드를 90% 절감 (월 50건 → 5건)하였으며, 인프라 지식이 부족한 사용자도 안전하게 트래픽 제어 규칙을 관리할 수 있도록 설정을 추상화했습니다.',
      '특히 장비 간 설정 불일치를 방지하기 위해 Saga 패턴 기반의 분산 트랜잭션을 설계하여, 장애 상황에서도 자동 롤백을 통한 100%의 데이터 정합성을 확보했습니다.',
      '또한 JUnit5 기반 테스트와 코드 리뷰를 주도하여 런타임 오류를 최소화하고 코드 재사용성을 60% 향상시키는 등 대규모 인프라 운영의 안정성을 강화했습니다.',
    ],
    keyResponsibilities: [
      '멀티테넌트 환경의 고가용성 네트워크(L4/L7) 상품 설계 및 자동화 로직 구현',
      'Managed 설정 방식을 자동화 기반 Self-Service로 전환하여 수동 운영 워크로드 90% 절감 (월 50건 → 5건)',
      'Saga 패턴 기반 보상 트랜잭션 설계로 분산 환경 내 데이터 정합성 및 원자적 적용 보장',
      '컨벤션, 공통 모듈, 응답/에러 표준화에 기여',
      'JUnit5 기반 단위 테스트 및 시나리오 검증 도입으로 배포 안정성 확보 및 런타임 오류 원천 차단',
      '기술 부채 해결을 위한 코드 리뷰 문화 주도 및 공통 모듈화를 통한 코드 재사용성 60% 향상',
    ],
    techStack: {
      frontend: ['Vue 3', 'Typescript', 'Tanstack Query', 'Ant Design'],
      backend: ['Spring Boot', 'JPA', 'QueryDSL', 'MariaDB'],
      infra: ['K8s', 'Jenkins', 'Citrix ADC', 'AhnLab TrusGuard'],
    },
    gradientClass: 'from-slate-700 via-slate-600 to-slate-800',
  },
  {
    id: 'commerce',
    name: '통합 커머스 프로젝트',
    period: '2025.07 ~ 2025.09',
    overviewDescription:
      '패스트캠퍼스 부트캠프를 통해 진행된 통합 커머스 구현 프로젝트에 참여하였습니다. 고효율, 확장성을 고려한 MSA 시스템 설계 및 인프라 구축과 JWT 기반 중앙 인증과 커머스 회원 기능 구현에 기여했습니다.',
    overviewContributions: [
      '대규모 트래픽 부하 분산을 위한 AWS ECS 기반 오토 스케일링 인프라 설계 및 구축',
      '대규모 트래픽 대응을 위한 도메인 중심 MSA 설계 및 Service Discovery 기반 가용성 확보',
      'API Gateway 기반 중앙인증 아키텍처 도입으로 서비스 간 결합도 완화 및 개발 효율성 극대화',
    ],
    detailParagraphs: [
      '대량 트래픽 환경에서도 안정적인 서비스를 제공하기 위해 상품, 주문, 결제 도메인을 MSA 아키텍처로 설계했습니다.',
      '특히 AWS ECS 기반의 Auto-scaling 구조를 직접 설계하여, 급격한 트래픽 변동에도 서비스 가용성을 끊임 없이 유지할 수 있는 인프라 확장성을 확보했습니다.',
      '분산 환경에서의 복잡한 인증 문제를 해결하고자 API Gateway 중심의 JWT 무상태(Stateless) 인증 체계를 수립했습니다. 이를 통해 서비스 간 결합도를 낮추고 수평적 확장이 용이한 구조를 완성했습니다.',
      '단순 기능 구현을 넘어, 대량의 데이터 처리 시 발생할 수 있는 병목 현상을 사전에 고려하여 응답 속도와 데이터 정합성 사이의 최적의 균형을 맞춘 설계를 지향했습니다.',
    ],
    keyResponsibilities: [
      'AWS ECS 기반 고가용성 MSA 인프라 아키텍처 설계 및 오토 스케일링 체계 구축',
      'GitHub Actions 및 AWS ECR 기반의 CI/CD 파이프라인 구축을 통한 배포 프로세스 자동화 및 인프라 운영 비용 최적화',
      '분산 추적 시스템(Zipkin) 도입으로 마이크로서비스 간 호출 흐름 가시화 및 장애 원인 식별/진단 효율성 제고',
      'JWT 무상태 인증 및 API Gateway 중앙 인증 아키텍처 적용으로 서비스 간 결합도 완화 및 확장 가능한 인증 체계 수립',
      'API Gateway 토큰 버킷 기반 Rate Limiting 구현으로 스파이크 트래픽 대응 및 다운스트림 서비스 보호 기반의 안정성 강화',
    ],
    techStack: {
      backend: [
        'Spring Boot',
        'Spring Boot Cloud',
        'JPA',
        'Gradle kts',
        'JUnit5',
        'Spring Security',
        'Zipkin',
        'PostgreSQL',
      ],
      infra: [
        'AWS ECS',
        'AWS ECR',
        'Oracle Cloud',
        'Docker',
        'Github Actions',
        'AWS S3',
        'AWS CloudMap',
        'Prometheus',
        'Grafana',
      ],
    },
    gradientClass: 'from-gray-900 via-gray-800 to-gray-900',
  },
  {
    id: 'ntops',
    name: '국정자원 시스템 통합운영',
    period: '2025.07 ~ 2026.01',
    overviewDescription:
      '국정자원 업무 수행을 위한 통합포털, RPMS, ITSM 3개의 시스템 통합 운영업무를 수행중입니다. 국정자원 업무 효율·안정성 향상을 목표로 오류 개선, 성능 최적화를 통해 시스템 안정성에 기여했습니다.',
    overviewContributions: [
      '이기종 시스템(통합포털, RPMS, ITSM) 간 운영 프로세스 표준화 및 요구사항 정제부터 릴리스까지의 End-to-End 운영 체계 정립',
      'Tibero 실행계획 분석 및 힌트·인덱스 최적화로 핵심 업무 조회 p95 17초 → 3초 (82% 개선)',
      '월 30건 이상의 운영 이슈 적기 개선으로 서비스 리드타임 단축 및 시스템 안정성 확보',
    ],
    detailParagraphs: [
      '국가정보자원관리원의 핵심 업무 시스템을 운영하며 이기종 인프라 간의 프로세스를 표준화하고, 요구사항 정제부터 릴리스까지 이어지는 End-to-End 운영 체계를 정립하여 서비스 신뢰도를 높였습니다.',
      '특히 대규모 데이터 조회 시 발생하는 병목 현상을 해결하기 위해 Tibero 실행계획 분석 및 인덱스 튜닝을 주도하였으며, DBA와 협업해 WHERE 절 타입 불일치가 인덱스를 무력화하는 근본 원인을 확인하고 수정하여 p95 17초 → 3초 (82% 개선)를 달성했습니다.',
      '또한, 매월 30건 이상의 이슈를 처리함에 있어 단순 수정을 넘어 근본적인 원인을 분석하고 재발 방지 로직을 구현하는 등, 중단 없는 서비스를 제공하기 위한 실질적인 운영 안정화 역량을 입증해 왔습니다.',
    ],
    keyResponsibilities: [
      '국정자원 nTOPS, RPMS, 통합포털 3가지 업무시스템 통합운영 담당자로 참여',
      '클라이언트와 직접 소통하며 요구사항 정제부터 개선 릴리스까지 End-to-End 운영 체계화',
      'DBA 협업으로 WHERE 절 타입 불일치 근본 원인 확인 → Tibero 힌트/인덱스 최적화로 핵심 조회 p95 17초 → 3초 (82% 개선)',
      '월 30건 이상 운영 이슈 개선으로 처리 리드타임 단축 및 재발률 감소',
    ],
    techStack: {
      frontend: ['jQuery', 'Vue.js', 'Steg egene'],
      backend: [
        'eGovFramework',
        'SpringBoot',
        'MyBatis',
        'JPA',
        'JSP',
        'QueryDSL',
        'MariaDB',
        'Tibero',
        'Redis',
      ],
      infra: ['K8s', 'Jenkins', 'JBoss'],
    },
    gradientClass: 'from-blue-900 via-blue-800 to-slate-800',
  },
  {
    id: 'rpms',
    name: 'RPMS',
    period: '2024.01 ~ 2025.07',
    overviewDescription:
      '국정자원 자원통합 사업을 위한 전산 시스템 구축에 참여하였습니다. 시스템 설계부터 개발, 운영까지 모든 과정에 기여하였습니다.',
    overviewContributions: [
      '대규모 자산 관리 도메인 모델링 및 확장성을 고려한 RESTful API 아키텍처 구현',
      'N+1 쿼리 Fetch Join · JDBC Bulk Insert 전환으로 배치 처리 10초로 단축 (99% 개선)',
      'QueryDSL 최초 도입으로 Native 쿼리 70% 제거 및 유지보수 비용 50% 절감',
      '운영 효율화를 위한 관리 서비스 CMS 구축 및 고객 요구사항 기반 지속적인 성능 고도화',
    ],
    detailParagraphs: [
      '분산되어 있던 수기 자산 설계 프로세스를 전산화하여 이력 관리의 투명성과 데이터 정합성을 확보했습니다.',
      '복잡한 비즈니스 로직을 체계적으로 모델링함과 동시에, 사내 최초로 QueryDSL 도입을 주도하여 Native 쿼리의 70%를 리팩토링함으로써 시스템의 타입 안정성과 유지보수성을 획기적으로 높였습니다.',
      '또한, JPA N+1 쿼리를 Fetch Join으로 해결하고, INSERT 병목은 JPA IDENTITY 전략의 단건 INSERT 강제 한계를 파악해 JDBC Template Bulk Insert로 전환하여 배치 처리를 10초로 단축 (99% 개선)하였습니다.',
    ],
    keyResponsibilities: [
      '시스템 설계/개발 단계부터 운영까지 End-to-End 참여',
      '국정자원 자원통합 업무 프로세스 개선, 리드타임 50% 단축',
      'JPA N+1 Fetch Join 해결 + JDBC Bulk Insert 전환으로 배치 처리 10초 단축 (99% 개선)',
      'QueryDSL 최초 도입으로 타입 안정성 확보 및 Native 쿼리 70% 이상 제거하여 유지보수 비용 50% 절감',
      '폐쇄망 K8s 개발 클러스터·미들웨어 재구축 및 Jenkins·Helm 배포 자동화 파이프라인 구축',
    ],
    techStack: {
      frontend: ['Vue.js', 'HTML', 'ES6'],
      backend: ['Spring Boot', 'JPA', 'QueryDSL', 'MariaDB', 'Redis'],
      infra: ['K8s', 'Docker', 'Jenkins', 'HashCorp Vault', 'Harbor'],
    },
    gradientClass: 'from-indigo-900 via-indigo-800 to-blue-900',
  },
  {
    id: 'kepco',
    name: '한전 안전관리 플랫폼 · 자율안전 솔루션',
    period: '2022.02 ~ 2023.10',
    overviewDescription:
      '한전과 함께 진행된 위험성 평가기반 자율안전 솔루션 개발에 참여하였습니다. 공사현장 메타데이터 관리, 보고서 생성, 실시간 스트리밍 연동 기능을 수행하였고, DB 설계, API 설계 및 구현까지 시스템 구축에 기여하였습니다.',
    overviewContributions: [
      'GIS 기반 대시보드 및 실시간 스트리밍 연동을 위한 백엔드 API 설계 및 대규모 메타데이터 DB 스키마 구축',
      '서버 사이드 헤드리스 렌더링 기반 보고서 생성 API 서비스화로 모바일/웹 동일 품질의 보고서 제공 및 운영 효율성 제고',
      'Tiles 프레임워크 도입으로 페이지 중복 코드 55% 절감 및 Jenkins CI/CD 파이프라인 구축으로 배포 빈도 7일 → 1일 단축',
    ],
    detailParagraphs: [
      'GIS와 모빌리티 게이트웨이를 결합해 작업 현장을 실시간 관제하고, 산업재해를 예방하는 플랫폼을 구축했습니다.',
      '한전의 작업 절차를 전산화하여 체계적인 메타데이터 관리 시스템을 수립하였으며, 수집된 데이터를 분석해 현장의 위험 요소를 사전에 식별함으로써 작업 안정성을 높였습니다.',
      '풀스택 개발자로서 실시간 모니터링 대시보드와 자동 보고서 생성 엔진 등 핵심 기능을 전담 개발했습니다.',
      '현장 데이터를 직관적으로 시각화하여 관제 효율을 극대화하였으며, 이를 통해 2022 BIXPO에서 솔루션 시연을 성공적으로 마무리하며 기술력을 입증했습니다.',
    ],
    keyResponsibilities: [
      '현장 메타데이터 수집을 위한 현장 작업 관리페이지 및 관리자 페이지 기능 개발',
      'jsPDF를 활용한 보고서 생성 기능 구현, 서버사이드 헤드리스 렌더 API로 서비스화하여 앱에서도 동일 품질 PDF 제공',
      'Tiles 프레임워크 도입으로 페이지당 중복 코드 55% 감소, 신규 페이지 제작 리드타임 단축',
      'SI 폐쇄망 특성상 자체 구축 Jenkins 선택해 배포 자동화 파이프라인 구성, 배포 빈도 7일 → 1일 단축',
      '2022 BIXPO 기술 시연 주도 및 한전 연구과제 최종 평가 통과에 기여',
    ],
    techStack: {
      frontend: ['HTML', 'ES6', 'CSS'],
      backend: ['eGovFramework', 'Fast API', 'MyBatis', 'MySQL', 'JSP'],
      infra: ['Docker', 'Jenkins'],
    },
    gradientClass: 'from-sky-700 via-blue-700 to-cyan-800',
  },
]

export const portfolioProfile = {
  name: '노성웅',
  tagline: '"건강한 개발문화로 지속 가능한 안정성을 만듭니다."',
  role: 'Back-end Engineer',
  email: 'asdz453@gmail.com',
  phone: '010-8866-3354',
  github: 'sungwoong-Noh',
  workingStyles: [
    {
      icon: '🔍',
      title: '가설 기반의 문제 해결',
      description: '막연한 추측이 아닌 로그와 실행계획 분석을 통해 원인을 진단합니다.',
    },
    {
      icon: '🌱',
      title: '지속 가능한 개발 문화',
      description: '의사결정을 문서화하고 코드 리뷰를 통해 팀의 성장을 도모합니다.',
    },
    {
      icon: '💼',
      title: '비즈니스 가치 중심',
      description: '기술 자체보다 서비스 가용성과 비즈니스 임팩트를 최우선합니다.',
    },
  ],
  keywords: [
    {
      tag: '#성능_집착',
      description: '0.1초의 응답 속도 개선이 고객 경험의 차이를 만든다고 믿습니다.',
    },
    {
      tag: '#기술_부채_해결사',
      description: '동료가 읽기 좋은 명료한 코드로 협업 비용을 최소화합니다.',
    },
    {
      tag: '#안정성_우선주의',
      description: '대규모 트래픽에도 중단 없는 견고한 인프라를 설계합니다.',
    },
  ],
  introduction: [
    '건강한 개발 문화에서 시작된 좋은 코드가 결국 시스템의 안정성을 결정한다고 믿습니다. 이를 위해 팀 내 코드리뷰와 테스트 코드를 도입하여 기술 부채를 관리하고, 동료 누구나 구조와 흐름을 쉽게 이해할 수 있는 명료한 코드 베이스를 만드는 데 집중해 왔습니다. 이러한 노력은 단순히 코드의 질을 높이는 것에 그치지 않고, 시스템 운영 전반의 유지보수성과 신뢰도를 높이는 단단한 밑거름이 되었습니다.',
    '이러한 철학을 바탕으로 실무에서는 시스템 안정성을 저해하는 병목 현상을 해결하는 데 주력했습니다. DB 조회 성능을 최적화하고 WAS 단의 동기화 로직을 개선하는 등 집요하게 성능을 튜닝하여 대용량 데이터를 처리하는 환경에서도 흔들림 없는 시스템을 증명해 왔습니다. 또한, 통합 커머스 프로젝트를 통해 대규모 트래픽을 가정한 Auto-scaling 아키텍처를 설계하며, 비즈니스 확장성에 유연하게 대응할 수 있는 시스템 구조에 대해 깊이 고민했습니다.',
    '좋은 설계와 건강한 문화가 만났을 때 시스템은 비로소 지속 가능해집니다. 저의 이러한 고집과 경험을 바탕으로, 함께 성장하는 개발 문화를 구축하고, 동료들이 신뢰할 수 있는 단단한 시스템 아키텍처를 만들어 나가겠습니다.',
  ],
}
