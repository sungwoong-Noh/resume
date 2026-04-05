// ============================================================
// 이력서 데이터 중앙 관리 파일
// 두 버전(라이트/다크) 모두 이 파일을 import합니다.
// ============================================================

export const profile = {
  name: '노성웅',
  nameEn: 'Sungwoong Noh',
  title: 'Backend Engineer',
  /** 총 경력 연수 — 업데이트 시 수동으로 조정 */
  yearsOfExp: 5,
  tagline: '복잡한 비즈니스 도메인에서 성능 병목을 근본부터 해결하고, 분산 환경 데이터 무결성을 직접 설계한 백엔드 개발자',
  email: 'asdz453@gmail.com',
  phone: '010-8866-3354',
  github: 'https://github.com/sungwoong-Noh',
  githubHandle: 'sungwoong-Noh',
  linkedin: 'https://www.linkedin.com/in/sunwoongnoh',
  blog: 'https://sw-noh.tistory.com',
  blogHandle: 'sw-noh.tistory.com',
  desiredSalary: '',
  /**
   * intro — 화면에 표시되는 자기소개 본문.
   * 현재는 임팩트 있는 경험 기반으로 작성됨.
   * 본인의 언어로 더 다듬고 싶은 부분이 있으면 직접 수정.
   */
  intro: `상품·프로모션·정산 같은 핵심 비즈니스 도메인을 다루며, 실행계획 분석과 JPA 내부 동작 이해를 바탕으로 쿼리를 재설계해왔습니다. N+1 문제로 2시간이 걸리던 동기화를 10초로 단축하고, 130만 건 DB 조회 p95를 17초에서 3초로 개선한 것처럼 문제의 근본 원인을 찾아 해결합니다.
Saga 패턴 기반 보상 트랜잭션으로 분산 환경에서 데이터 무결성을 직접 설계했고, Elasticsearch 기반 10M 상품 검색엔진을 구축해 p95를 60,000ms에서 130ms로 개선한 경험도 있습니다.
커머스 도메인의 복잡한 비즈니스 로직과 대용량 데이터를 안정적으로 다루는 백엔드 개발자로 기여하고 싶습니다.`,
}

// ─── Core Values ──────────────────────────────────────────────
export type CoreValue = {
  icon: string
  title: string
  description: string
  hashtag: string
}

export const coreValues: CoreValue[] = [
  {
    icon: '⚡',
    title: '성능 집착',
    description: '0.1초의 응답 속도 개선이 고객 경험의 차이를 만든다고 믿습니다.',
    hashtag: '#성능_집착',
  },
  {
    icon: '🧹',
    title: '기술 부채 해결사',
    description: '동료가 읽기 좋은 명료한 코드로 협업 비용을 최소화합니다.',
    hashtag: '#기술_부채_해결사',
  },
  {
    icon: '🛡️',
    title: '안정성 우선주의',
    description: '모니터링 지표로 이상 징후를 사전에 감지하고 장애를 근본부터 해결합니다.',
    hashtag: '#안정성_우선주의',
  },
]

// ─── Working Style ────────────────────────────────────────────
export type WorkingStyle = {
  icon: string
  title: string
  description: string
}

export const workingStyles: WorkingStyle[] = [
  {
    icon: '🔬',
    title: '가설 기반의 문제 해결',
    description: '막연한 추측이 아닌 실행계획 분석과 JPA 동작 이해를 통해 원인을 진단합니다.',
  },
  {
    icon: '📚',
    title: '지속 가능한 개발 문화',
    description: '의사결정을 문서화하고 코드 리뷰를 통해 팀의 성장을 도모합니다.',
  },
  {
    icon: '💼',
    title: '비즈니스 가치 중심',
    description: '기술 자체보다 서비스 가용성과 비즈니스 임팩트를 최우선합니다.',
  },
]

// ─── Key Achievements ─────────────────────────────────────────
export type Achievement = {
  metric: string
  unit: string
  description: string
  detail: string
}

export const achievements: Achievement[] = [
  {
    metric: '99',
    unit: '%',
    description: '데이터 동기화 성능 개선',
    detail: 'N+1로 14만 건 동기화에 2시간 소요 → Fetch Join + Bulk Insert로 10초',
  },
  {
    metric: '82',
    unit: '%',
    description: 'DB 조회 성능 향상',
    detail: '130만 건 Tibero DB · p95 17초 → 3초 (실행계획·인덱스 최적화)',
  },
  {
    metric: '90',
    unit: '%',
    description: '운영 워크로드 절감',
    detail: 'Self-Service API 자동화 (월 50건 → 5건)',
  },
  {
    metric: '100',
    unit: '%',
    description: '분산 환경 데이터 무결성',
    detail: 'Saga 패턴 + Soft Reservation 도입',
  },
]

// ─── Experience ───────────────────────────────────────────────
export type Project = {
  name: string
  period: string
  achievements: string[]
}

export type Experience = {
  company: string
  position: string
  period: string
  duration: string
  description: string
  highlights: string[]
  techStack: string[]
  projects: Project[]
}

export const experiences: Experience[] = [
  {
    company: '플랜아이(PlanAI)',
    position: 'Cloud Engineer',
    period: '2026.02 ~ 현재',
    duration: '2개월',
    description:
      'MSP 사업부에서 고객사 인프라 모니터링 체계 구축 및 시스템 운영 자동화를 담당하고 있습니다.',
    highlights: [
      '기관별 모니터링 서버 구축 · CMP 보고서 자동 생성 연계',
      'VictoriaMetrics 도입으로 Prometheus 수집 기간 30일 → 1년 확장',
      'Ansible 기반 Exporter 설치·시스템 자원 조회 자동화',
    ],
    techStack: ['Prometheus', 'Grafana', 'VictoriaMetrics', 'Ansible', 'KT Cloud'],
    projects: [
      {
        name: 'MSP 고객사 모니터링 체계 구축',
        period: '2026.02 ~ 진행 중',
        achievements: [
          '기관별 Prometheus + Grafana 모니터링 서버 구축 · CMP 개발팀과 보고서 자동 생성 기능 연계',
          'KT Cloud 기반 고객사 인프라 모니터링 환경 구축 · 멀티테넌트 자원 가시성 확보',
          'VictoriaMetrics 적용으로 Prometheus 메트릭 수집·보존 기간 30일 → 1년 확장',
          'Ansible 활용 Exporter 일괄 설치 및 시스템 자원 조회 자동화로 운영 효율화',
          'Claude MCP 기반 WAF 유해 IP 차단 요청 자동화 · 메일 수동 답장 → 단일 명령으로 처리',
        ],
      },
    ],
  },
  {
    company: '오케스트로주식회사',
    position: '선임연구원 · 클라우드 서비스 본부',
    period: '2023.10 ~ 2026.02',
    duration: '2년 4개월',
    description:
      '국정자원 3개 백오피스 시스템(nTOPS, RPMS, 통합포털) 통합 운영을 담당했습니다. 요구사항 정제부터 아키텍처 설계, CI/CD, 관측성, 운영까지 전 흐름을 일원화하여 주도했습니다.',
    highlights: [
      '데이터 동기화 99% 개선 (2시간 → 10초)',
      '핵심 조회 p95 응답시간 82% 개선 (17초 → 3초)',
      '인시던트 12건 → 5건/주 지속 감소',
      '국정자원 업무 리드타임 5일 → 3일 단축',
      'QueryDSL 도입 주도 · Native 쿼리 70% 제거',
    ],
    techStack: [
      'Spring Boot', 'JPA', 'QueryDSL', 'Kubernetes', 'Vue 3',
      'TanStack Query', 'Ant Design', 'Tibero', 'MariaDB', 'Redis', 'Jenkins',
    ],
    projects: [
      {
        name: '국정자원 통합 운영유지보수',
        period: '2025.07 ~ 2026.02',
        achievements: [
          'RPMS·통합포털·ITSM 3개 시스템 통합운영 체계화 (End-to-End 운영 체계 정립)',
          '130만 건 규모 Tibero DB에서 실행계획·힌트/인덱스 최적화로 핵심 조회 p95 17초 → 3초 (82% 개선)',
          '월 30건+ 운영 이슈를 분류·우선순위화하여 재발률 감소 체계 구축',
          'ITSM 오류 개선·신규 기능 개발로 인시던트 12건 → 5건/주',
        ],
      },
      {
        name: 'CSP 멀티테넌트 네트워크 상품 개발 (PPP Cloud)',
        period: '2024.08 ~ 2025.06',
        achievements: [
          'KT Cloud 협력 기반 CSP 플랫폼 구축 · KT Cloud 기술팀과 API 연동 및 네트워크 장비 제어 협업',
          '풀스택 리드 개발자로 컨벤션·공통 모듈·에러 표준화 주도',
          'Saga 패턴 기반 보상 트랜잭션으로 장비 설정충돌 오류 0건 달성',
          'Self-Service API 전환으로 수동 운영 워크로드 90% 절감 (월 50건 → 5건)',
          '\'어차피 손으로 눌러보면 된다\'는 팀 문화 속에서 핵심 기능 점진 적용을 제안·합의 → JUnit5 단위테스트 문화 정착 · 설정오류 0건 · 개발 속도 30% 향상',
          '중복 코드 산재 문제를 공통 모듈로 통합하여 재사용성 60% 향상',
        ],
      },
      {
        name: '자산계획 시스템 설계/개발 및 운영 (RPMS)',
        period: '2024.01 ~ 2025.06',
        achievements: [
          '폐쇄망 환경에서 요구사항 정제부터 설계·개발·운영까지 전 주기를 단독 리드',
          'N+1로 인해 14만 건 동기화에 2시간이 소요되던 배치를 Fetch Join + Bulk Insert로 재설계 → 10초 단축 (99% 개선)',
          '요구사항 정제·반복 배포 자동화로 업무 리드타임 5일 → 3일 단축',
          'Native 쿼리 남용으로 인한 유지보수 문제를 인식, 팀의 초기 회의론을 파일럿 적용으로 설득하여 QueryDSL 도입 주도 → Native 쿼리 70%+ 제거 · 유지보수 비용 50% 절감',
          '폐쇄망 Kubernetes 개발 클러스터·미들웨어 재구축 및 Jenkins·Helm 배포 자동화',
        ],
      },
    ],
  },
  {
    company: '주식회사 에이직스',
    position: '주임 · SI기술개발',
    period: '2021.08 ~ 2023.10',
    duration: '2년 3개월',
    description:
      'SI 기술개발팀 풀스택 개발자로 합류해 납기 환경을 템플릿·공통·CI/CD로 표준화/자동화하고, 설계–개발–운영 전 주기를 주도해 유지보수성과 성능을 지속 개선했습니다.',
    highlights: [
      'Jenkins 기반 배포 자동화 · 배포 빈도 7일 → 1일',
      'Tiles 프레임워크 도입 · 중복 코드 65% → 10% · 페이지 리드타임 2일 → 0.5일',
      'SMS 서비스 DB 이관 · 1,000만 건 무결성 100% 유지 · p95 5초 → 0.9초',
    ],
    techStack: ['eGovFramework', 'MyBatis', 'MySQL', 'JSP', 'jQuery', 'FastAPI', 'Docker', 'Jenkins', 'SVN'],
    projects: [
      {
        name: '동구청 과학행사 신청 플랫폼',
        period: '2023.07 ~ 2023.10',
        achievements: [
          'eGovFramework 기반 3개월 내 풀스택 개발 및 안정적 런칭',
          '임시예약(Soft Reservation) 전략으로 동시성 이슈 방지 · 이중 신청 0건',
          'NICE 본인인증 모듈 + OAuth 2.0 SNS 로그인 구현 · 회원관리 표준화',
          '행사 등록·참가자 관리·통계 조회를 통합한 어드민 페이지 구축',
        ],
      },
      {
        name: '충남도청 SMS 서비스 DB 이관',
        period: '2023.03 ~ 2023.05',
        achievements: [
          'OS 설치 → 데이터 마이그레이션 → 장비 납품까지 전 과정 일괄 수행',
          '1,000만 건 대용량 데이터 무결성 100% 유지',
          'p95 5초 → 0.9초 · CPU 사용률 65% → 40% 개선',
          '노후 장비 교체로 물리적 장애 포인트 제거 · 이관 후 다운타임 0건',
        ],
      },
      {
        name: '한전 위험성 평가기반 자율안전 솔루션',
        period: '2022.02 ~ 2023.10',
        achievements: [
          'GIS 기반 실시간 모니터링 대시보드 · 메타데이터 관리 백엔드 개발',
          'jsPDF 기반 보고서 생성 API 서비스화 · 모바일/웹 동일 품질 PDF 제공',
          'JSP 중복 레이아웃 문제를 인식, Tiles 프레임워크 도입 제안 → 중복 코드 65% → 10% · 페이지 개발 리드타임 2일 → 0.5일',
          '수동 배포로 인한 휴먼에러·7일 배포 주기 개선을 위해 Jenkins CI/CD 직접 구축 → 배포 빈도 7일 → 1일',
          '2022 BIXPO 기술 시연 성공 · 한전 연구과제 최종 평가 통과에 기여',
        ],
      },
    ],
  },
]

// ─── Skills ───────────────────────────────────────────────────
export type SkillCategory = {
  category: string
  icon: string
  color: string
  skills: {
    name: string
    level?: 'expert' | 'proficient' | 'familiar'
  }[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'teal',
    skills: [
      { name: 'Java', level: 'expert' },
      { name: 'RESTful API', level: 'expert' },
      { name: 'Spring Boot', level: 'expert' },
      { name: 'Spring Cloud', level: 'proficient' },
      { name: 'Spring Security', level: 'proficient' },
      { name: 'JPA / Hibernate', level: 'expert' },
      { name: 'QueryDSL', level: 'expert' },
      { name: 'MariaDB / MySQL', level: 'expert' },
      { name: 'Tibero', level: 'proficient' },
      { name: 'Redis', level: 'proficient' },
      { name: 'eGovFramework', level: 'proficient' },
      { name: 'MyBatis', level: 'proficient' },
      { name: 'PostgreSQL', level: 'familiar' },
    ],
  },
  {
    category: 'Observability',
    icon: '📊',
    color: 'purple',
    skills: [
      { name: 'Prometheus', level: 'proficient' },
      { name: 'Grafana', level: 'proficient' },
      { name: 'VictoriaMetrics', level: 'proficient' },
      { name: 'Zipkin', level: 'proficient' },
      { name: 'Elasticsearch', level: 'familiar' },
      { name: 'k6', level: 'familiar' },
    ],
  },
  {
    category: 'Infrastructure',
    icon: '🚀',
    color: 'orange',
    skills: [
      { name: 'Kubernetes (K8s)', level: 'proficient' },
      { name: 'Docker', level: 'expert' },
      { name: 'AWS ECS / ECR', level: 'proficient' },
      { name: 'AWS CloudMap / ALB', level: 'familiar' },
      { name: 'KT Cloud', level: 'proficient' },
      { name: 'Ansible', level: 'proficient' },
      { name: 'Jenkins', level: 'expert' },
      { name: 'GitHub Actions', level: 'proficient' },
      { name: 'Harbor', level: 'familiar' },
      { name: 'HashiCorp Vault', level: 'familiar' },
      { name: 'Helm', level: 'familiar' },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'blue',
    skills: [
      { name: 'Vue 3', level: 'proficient' },
      { name: 'TypeScript', level: 'proficient' },
      { name: 'TanStack Query', level: 'proficient' },
      { name: 'Ant Design', level: 'proficient' },
      { name: 'ES6+', level: 'proficient' },
      { name: 'jQuery', level: 'familiar' },
    ],
  },
]

// ─── Education ────────────────────────────────────────────────
export type Education = {
  school: string
  degree: string
  major: string
  period: string
  /** TODO 플래그: true면 화면에 "내용을 채워주세요" 표시 */
  todo?: boolean
}

export const educations: Education[] = [
  {
    school: '목원대학교',
    degree: '학사',
    major: '전자공학과',
    period: '2022.03 졸업',
  },
]

// ─── Certifications / Education Programs ──────────────────────
export type Certification = {
  name: string
  organization: string
  period: string
  description: string
  achievements: string[]
  todo?: boolean
}

export const certifications: Certification[] = [
  {
    name: 'InnerCircle 백엔드 4기',
    organization: '패스트캠퍼스',
    period: '2025.06 ~ 2025.09',
    description:
      '커머스, 핀테크, O2O 등 다양한 도메인의 현업 멘토님들과 진행된 백엔드 부트캠프. 프로젝트 기반으로 코드 품질과 문제 해결 능력을 향상했습니다.',
    achievements: [
      'CIDR Validator 라이브러리 직접 구현 및 Jitpack 활용한 퍼블리싱',
      '현업 멘토(핀테크·O2O·커머스)와 요구사항 정제, 핵심 문제 정의 및 우선순위 수립',
      '도메인 모델링 (유즈케이스·ERD·시퀀스·상태 다이어그램) 및 경계(BC) 설계',
      'JUnit5·Testcontainers로 단위/통합 테스트 구축, 코드리뷰·리팩토링 사이클 운영',
    ],
  },
]

// ─── Side Projects & Activities ──────────────────────────────
export type SideProject = {
  name: string
  period: string
  organization: string
  description: string
  achievements: string[]
  techStack: string[]
}

export const sideProjects: SideProject[] = [
  {
    name: 'InnerCircle Commerce 프로젝트',
    period: '2025.07 ~ 2025.09',
    organization: '패스트캠퍼스',
    description:
      '대규모 트래픽·고성능 검색·동시성·유연한 상품 모델링 요구에 대응하는 통합 커머스 프로젝트 설계 및 개발.',
    achievements: [
      'AWS ECS 기반 MSA Auto-scaling 인프라 설계 및 구축',
      'JWT 무상태 인증 + API Gateway 중앙 인증 · 서비스 간 결합도 완화',
      '토큰 버킷 Rate Limiting · 스파이크 트래픽 완화 및 다운스트림 보호',
    ],
    techStack: ['Spring Boot', 'Spring Cloud', 'JPA', 'PostgreSQL', 'AWS ECS', 'GitHub Actions', 'Zipkin', 'Grafana'],
  },
  {
    name: 'TechGate — 검색엔진 스터디',
    period: '2025.09 ~ 2025.10',
    organization: '개인 프로젝트',
    description:
      'RDB·Redis·Elasticsearch 비교 벤치마크를 통해 Elasticsearch 기반 10M 상품 검색 엔진을 설계·구현. 검색 품질과 응답 속도를 동시에 개선.',
    achievements: [
      '10M 상품 기준 k6(10 VU) 테스트에서 p95 60,000ms → 130ms',
      'Nori·형태소 분석·fuzziness·부스팅·캐시 조합으로 오타/복합어에 강한 자동완성 구현',
    ],
    techStack: ['Spring Boot', 'MySQL', 'Redis', 'Elasticsearch', 'Docker', 'Grafana', 'Prometheus', 'k6'],
  },
  {
    name: '오케스트로 사내 스터디 기획·운영',
    period: '2025.05 ~ 2025.08',
    organization: '오케스트로주식회사 사내',
    description:
      '데이터 동기화 개선 사례를 팀에 공유하다 "이런 사례를 정기적으로 나누면 어떨까"는 제안이 스터디로 이어졌습니다. 성능 개선 RCA, 알고리즘 실습, 개발 서적 리딩을 정례화해 현업 경험을 팀 공유 지식으로 전환했습니다.',
    achievements: [
      '주 1회(4개월) · 평균 참여율 75% · 발표자 순환제 운영',
      '\'데이터 동기화 2시간 → 10초\' 등 성능 개선 사례를 RCA → 해결 전략 → 벤치마크 → 체크리스트로 문서화 · 유사 과제 리드타임 50% 단축',
      '이펙티브 자바·JPA 서적 리딩 결과를 규약·코딩 컨벤션·리뷰 체크리스트로 정립',
      '노션/위키 저장소 구축 (가이드·체크리스트·런북) · 검색·재사용성 향상',
    ],
    techStack: [],
  },
]
