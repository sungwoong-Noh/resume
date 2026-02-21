// ============================================================
// 이력서 데이터 중앙 관리 파일
// 이곳에서 모든 이력서 데이터를 수정하면 두 버전에 모두 반영됩니다.
// ============================================================

export const profile = {
  name: '노성웅',
  nameEn: 'Sungwoong Noh',
  title: 'Backend Engineer',
  tagline: '견고한 시스템 설계와 건강한 개발 문화로 지속 가능한 안정성을 만드는 개발자',
  email: 'asdz453@gmail.com',
  phone: '010-8866-3354',
  github: 'https://github.com/sungwoong-noh',
  githubHandle: 'sungwoong-Noh',
  intro: `건강한 개발 문화에서 시작된 좋은 코드가 결국 시스템의 안정성을 결정한다고 믿습니다.
팀 내 코드리뷰와 테스트 코드를 도입하여 기술 부채를 관리하고, 동료 누구나 구조와 흐름을 쉽게 이해할 수 있는 명료한 코드 베이스를 만드는 데 집중해 왔습니다.
DB 조회 성능을 최적화하고 WAS 단의 동기화 로직을 개선하는 등 집요하게 성능을 튜닝하여 대용량 데이터 환경에서도 흔들림 없는 시스템을 증명해 왔습니다.`,
}

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
    description: '대규모 트래픽에도 중단 없는 견고한 인프라를 설계합니다.',
    hashtag: '#안정성_우선주의',
  },
]

export type WorkingStyle = {
  icon: string
  title: string
  description: string
}

export const workingStyles: WorkingStyle[] = [
  {
    icon: '🔬',
    title: '가설 기반의 문제 해결',
    description: '막연한 추측이 아닌 로그와 실행계획 분석을 통해 원인을 진단합니다.',
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
    detail: '2시간 → 10초 (JPA N+1 해결, Bulk Insert)',
  },
  {
    metric: '82',
    unit: '%',
    description: 'DB 조회 성능 향상',
    detail: 'p95 17초 → 3초 (실행계획·인덱스 최적화)',
  },
  {
    metric: '40',
    unit: '%',
    description: 'CI/CD 배포 시간 단축',
    detail: 'GitHub Actions + ECR 파이프라인 최적화',
  },
  {
    metric: '100',
    unit: '%',
    description: '분산 환경 데이터 무결성',
    detail: 'Saga 패턴 + Soft Reservation 도입',
  },
]

export type Experience = {
  company: string
  position: string
  period: string
  duration: string
  description: string
  highlights: string[]
  techStack: string[]
  projects: {
    name: string
    period: string
    achievements: string[]
  }[]
}

export const experiences: Experience[] = [
  {
    company: '오케스트로주식회사',
    position: '선임연구원 · 클라우드 서비스 본부',
    period: '2023.10 ~ 현재',
    duration: '2년 4개월',
    description:
      '국정자원 3개 시스템(nTOPS, RPMS, 통합포털) 통합 운영을 담당합니다. 요구사항 정제부터 아키텍처 설계, CI/CD, 관측성, 운영까지 전 흐름을 일원화하여 주도하고 있습니다.',
    highlights: [
      '데이터 동기화 2시간 → 10초 (99% 향상)',
      'p95 응답시간 17초 → 3초 (82% 개선)',
      '인시던트 12건 → 5건/주 지속 감소',
      '팀 내 최초 QueryDSL 도입으로 Native 쿼리 70% 제거',
    ],
    techStack: ['Spring Boot', 'JPA', 'QueryDSL', 'Kubernetes', 'Vue 3', 'Tibero', 'MariaDB', 'Redis', 'Jenkins'],
    projects: [
      {
        name: '국정자원 통합 운영유지보수',
        period: '2025.07 ~ 진행중',
        achievements: [
          'RPMS·통합포털·ITSM 3개 시스템 통합운영 체계화',
          'Tibero 실행계획·힌트/인덱스 최적화로 p95 17초 → 3초',
          '월 30건+ 운영 이슈 개선으로 리드타임 단축 및 재발률 감소',
        ],
      },
      {
        name: 'CSP 멀티테넌트 네트워크 상품 개발 (PPP Cloud)',
        period: '2024.08 ~ 2025.06',
        achievements: [
          '풀스택 리드 개발자로 참여하여 컨벤션·공통 모듈/에러 표준화에 기여',
          '보상 트랜잭션(Saga) 적용으로 장비 설정충돌 오류 0건 달성',
          '팀 내 최초 단위테스트 도입으로 개발 속도 30% 향상',
          'Self-Service API로 수동 운영 워크로드 90% 절감 (월 50건 → 5건)',
        ],
      },
      {
        name: '자산계획 시스템 설계/개발 및 운영 (RPMS)',
        period: '2024.01 ~ 2025.06',
        achievements: [
          'SpringBoot, JPA, MariaDB, K8s, Vue.js 기반 End-to-End 개발',
          'JPA N+1, Bulk Insert 최적화로 데이터 동기화 성능 99% 개선',
          '팀 내 최초 QueryDSL 도입으로 Native 쿼리 70% 이상 제거',
          '폐쇄망 K8s 개발 클러스터와 미들웨어 재구축 및 배포 자동화',
        ],
      },
    ],
  },
  {
    company: '주식회사에이직스',
    position: '주임 · SI기술개발',
    period: '2021.08 ~ 2023.10',
    duration: '2년 3개월',
    description:
      'SI 기술개발팀 풀스택 개발자로 합류해 납기 환경을 템플릿·공통·CI/CD로 표준화/자동화하고, 설계–개발–운영 전 주기를 주도해 유지보수성과 성능을 지속 개선했습니다.',
    highlights: [
      'Jenkins 기반 배포 자동화로 배포 빈도 7일 → 1일',
      'Tiles 프레임워크 도입으로 신규 페이지 리드타임 2일 → 0.5일',
      '중복 코드 65% → 10% 감소',
      '데이터 마이그레이션 무결성 100% 유지 (1,000만 건)',
    ],
    techStack: ['eGovFramework', 'MyBatis', 'MySQL', 'JSP', 'jQuery', 'Docker', 'Jenkins'],
    projects: [
      {
        name: '동구청 과학행사 신청 플랫폼',
        period: '2023.07 ~ 2023.10',
        achievements: [
          'eGovFramework 기반 3개월 내 Full-stack 개발 및 런칭',
          '임시예약(Soft Reservation)으로 이중 신청 0건 달성',
          'NICE 본인인증 + OAuth 2.0 SNS 로그인 구현',
        ],
      },
      {
        name: '충남도청 SMS 서비스 DB 이관',
        period: '2023.03 ~ 2023.05',
        achievements: [
          'OS 설치 → 데이터 마이그레이션 → 장비 납품까지 전 과정 수행',
          'p95 5초 → 0.9초, CPU 사용률 65% → 40% 개선',
          '1,000만 건 데이터 무결성 100% 유지',
        ],
      },
      {
        name: '한전 위험성 평가기반 자율안전 솔루션',
        period: '2022.02 ~ 2023.10',
        achievements: [
          'GIS 기반 실시간 모니터링 및 메타데이터 관리 백엔드 개발',
          'Jenkins CI/CD 구축으로 배포 빈도 7일 → 1일',
          '2022 BIXPO 기술 시연 성공',
        ],
      },
    ],
  },
]

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
      { name: 'Spring Boot', level: 'expert' },
      { name: 'Spring Cloud', level: 'proficient' },
      { name: 'Spring Security', level: 'proficient' },
      { name: 'JPA / Hibernate', level: 'expert' },
      { name: 'QueryDSL', level: 'expert' },
      { name: 'MariaDB', level: 'expert' },
      { name: 'Tibero', level: 'proficient' },
      { name: 'Redis', level: 'proficient' },
      { name: 'eGovFramework', level: 'proficient' },
      { name: 'MyBatis', level: 'proficient' },
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
      { name: 'ES6+', level: 'expert' },
      { name: 'jQuery', level: 'expert' },
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
      { name: 'Jenkins', level: 'expert' },
      { name: 'GitHub Actions', level: 'proficient' },
      { name: 'Harbor', level: 'familiar' },
      { name: 'HashiCorp Vault', level: 'familiar' },
    ],
  },
  {
    category: 'Observability',
    icon: '📊',
    color: 'purple',
    skills: [
      { name: 'Prometheus', level: 'proficient' },
      { name: 'Grafana', level: 'proficient' },
      { name: 'Zipkin', level: 'proficient' },
      { name: 'ElasticSearch', level: 'familiar' },
      { name: 'k6', level: 'familiar' },
    ],
  },
]

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
      'GitHub Actions + ECR CI/CD로 배포 시간 40% 단축 및 비용 100% 절감',
      'JWT 무상태 인증 + API Gateway 중앙 인증으로 서비스 간 결합도 완화',
      'Zipkin 분산 추적(B3 전파)으로 병목/오류 지점 식별 속도 개선',
      '토큰 버킷 Rate Limiting으로 스파이크 트래픽 완화',
    ],
    techStack: ['Spring Boot', 'Spring Cloud', 'JPA', 'PostgreSQL', 'AWS ECS', 'GitHub Actions', 'Zipkin', 'Grafana'],
  },
  {
    name: 'TechGate (검색엔진 스터디)',
    period: '2025.09 ~ 2025.10',
    organization: '개인 프로젝트',
    description:
      'RDB·Redis·Elasticsearch 비교 벤치마크 후, Elasticsearch 기반으로 10M 상품 데이터 검색 엔진 구현.',
    achievements: [
      '10M 상품 기준 k6 부하 테스트에서 p95 60,000ms → 130ms',
      '한국어 형태소 분석(Nori), 오타 허용(fuzziness), 동의어 적용으로 검색 품질 개선',
      'Nori·prefix·fuzziness·캐시 조합으로 오타/복합어에 강한 자동완성 구현',
    ],
    techStack: ['Spring Boot', 'MySQL', 'Redis', 'ElasticSearch', 'Docker', 'Grafana', 'Prometheus', 'k6'],
  },
]
