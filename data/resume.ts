// ============================================================
// 이력서 데이터 중앙 관리 파일
// 두 버전(라이트/다크) 모두 이 파일을 import합니다.
// TODO 주석이 달린 항목은 직접 내용을 채워주세요.
// ============================================================

export const profile = {
  name: '노성웅',
  nameEn: 'Sungwoong Noh',
  title: 'Backend Engineer',
  /** 총 경력 연수 — 업데이트 시 수동으로 조정 */
  yearsOfExp: 4,
  tagline: '견고한 시스템 설계와 건강한 개발 문화로 지속 가능한 안정성을 만드는 개발자',
  email: 'asdz453@gmail.com',
  phone: '010-8866-3354',
  /** TODO: 실제 GitHub URL 확인 후 수정 (현재 sungwoong-Noh 기준) */
  github: 'https://github.com/sungwoong-Noh',
  githubHandle: 'sungwoong-Noh',
  /** TODO: LinkedIn URL이 있다면 채워주세요. 없으면 null 유지 */
  linkedin: null as string | null,
  /**
   * intro — 화면에 표시되는 자기소개 본문.
   * 현재는 임팩트 있는 경험 기반으로 작성됨.
   * 본인의 언어로 더 다듬고 싶은 부분이 있으면 직접 수정.
   */
  intro: `2시간이 걸리던 데이터 동기화를 10초로 줄인 경험처럼, 저는 문제의 근본 원인을 찾아 시스템 전체를 바꾸는 것을 즐깁니다.
단순히 기능을 구현하는 것을 넘어 로그와 실행계획을 분석해 병목을 찾고, JPA 내부 동작을 이해하여 쿼리 구조를 재설계하는 방식으로 성능을 개선해 왔습니다.
코드 품질도 같은 철학으로 접근합니다. 팀 내 QueryDSL 도입, 단위 테스트 문화 정착, 코드 리뷰 체계 수립을 주도하며 기술 부채를 줄이고 동료 모두가 신뢰할 수 있는 코드베이스를 만드는 데 집중해 왔습니다.`,
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
    description: '대규모 트래픽에도 중단 없는 견고한 인프라를 설계합니다.',
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
    detail: '2시간 → 10초 (JPA N+1 해결, Bulk Insert)',
  },
  {
    metric: '82',
    unit: '%',
    description: 'DB 조회 성능 향상',
    detail: 'p95 17초 → 3초 (실행계획·인덱스 최적화)',
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
    company: '오케스트로주식회사',
    position: '선임연구원 · 클라우드 서비스 본부',
    period: '2023.10 ~ 현재',
    duration: '2년 5개월',
    description:
      '국정자원 3개 시스템(nTOPS, RPMS, 통합포털) 통합 운영을 담당합니다. 요구사항 정제부터 아키텍처 설계, CI/CD, 관측성, 운영까지 전 흐름을 일원화하여 주도하고 있습니다.',
    highlights: [
      '데이터 동기화 2시간 → 10초 (99% 향상, JPA N+1·Bulk Insert)',
      'p95 응답시간 17초 → 3초 (Tibero 실행계획·인덱스 최적화)',
      '인시던트 12건 → 5건/주 지속 감소',
      '국정자원 업무 리드타임 5일 → 3일 단축',
      '팀 내 최초 QueryDSL 도입 · Native 쿼리 70% 제거 · 유지보수 비용 50% 절감',
    ],
    techStack: [
      'Spring Boot', 'JPA', 'QueryDSL', 'Kubernetes', 'Vue 3',
      'TanStack Query', 'Ant Design', 'Tibero', 'MariaDB', 'Redis', 'Jenkins',
    ],
    projects: [
      {
        name: '국정자원 통합 운영유지보수',
        period: '2025.07 ~ 진행중',
        achievements: [
          'RPMS·통합포털·ITSM 3개 시스템 통합운영 체계화 (End-to-End 운영 체계 정립)',
          'Tibero 실행계획·힌트/인덱스 최적화로 핵심 조회 p95 17초 → 3초',
          '월 30건+ 운영 이슈 개선 · 처리 리드타임 단축 및 재발률 감소',
          'ITSM 오류 개선·신규 기능 개발로 인시던트 12건 → 5건/주',
        ],
      },
      {
        name: 'CSP 멀티테넌트 네트워크 상품 개발 (PPP Cloud)',
        period: '2024.08 ~ 2025.06',
        achievements: [
          '풀스택 리드 개발자로 컨벤션·공통 모듈·에러 표준화 주도',
          'Saga 패턴 기반 보상 트랜잭션으로 장비 설정충돌 오류 0건 달성',
          'Self-Service API 전환으로 수동 운영 워크로드 90% 절감 (월 50건 → 5건)',
          '팀 내 최초 JUnit5 단위테스트 도입 · 개발 속도 30% 향상 · 설정오류 0건',
          '코드 재사용성 60% 향상 (공통 모듈화)',
        ],
      },
      {
        name: '자산계획 시스템 설계/개발 및 운영 (RPMS)',
        period: '2024.01 ~ 2025.06',
        achievements: [
          'SpringBoot, JPA, MariaDB, K8s, Vue.js 기반 End-to-End 설계·개발·운영',
          'JPA N+1 · Bulk Insert 최적화 → 데이터 동기화 99% 개선 (2시간 → 10초)',
          '업무 리드타임 5일 → 3일 단축',
          '팀 내 최초 QueryDSL 도입 · Native 쿼리 70%+ 제거 · 유지보수 비용 50% 절감',
          '폐쇄망 K8s 개발 클러스터·미들웨어 재구축 및 Jenkins·Helm 배포 자동화',
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
      'Jenkins 기반 배포 자동화 · 배포 빈도 7일 → 1일',
      'Tiles 프레임워크 도입 · 중복 코드 65% → 10% · 페이지 리드타임 2일 → 0.5일',
      'SMS 서비스 DB 이관 · 1,000만 건 무결성 100% 유지 · p95 5초 → 0.9초',
    ],
    techStack: ['eGovFramework', 'MyBatis', 'MySQL', 'JSP', 'jQuery', 'Fast API', 'Docker', 'Jenkins', 'SVN'],
    projects: [
      {
        name: '동구청 과학행사 신청 플랫폼',
        period: '2023.07 ~ 2023.10',
        achievements: [
          'eGovFramework 기반 3개월 내 Full-stack 개발 및 안정적 런칭',
          '임시예약(Soft Reservation) 전략으로 동시성 이슈 방지 · 이중 신청 0건',
          'NICE 본인인증 모듈 + OAuth 2.0 SNS 로그인 구현 · 회원관리 표준화',
          '직관적인 행사 관리 어드민 페이지 구축',
        ],
      },
      {
        name: '충남도청 SMS 서비스 DB 이관',
        period: '2023.03 ~ 2023.05',
        achievements: [
          'OS 설치 → 데이터 마이그레이션 → 장비 납품까지 전 과정 일괄 수행',
          '1,000만 건 대용량 데이터 무결성 100% 유지',
          'p95 5초 → 0.9초 · CPU 사용률 65% → 40% 개선',
          '물리적 장애 포인트 제거 · 시스템 다운타임 발생률 제로화',
        ],
      },
      {
        name: '한전 위험성 평가기반 자율안전 솔루션',
        period: '2022.02 ~ 2023.10',
        achievements: [
          'GIS 기반 실시간 모니터링 대시보드 · 메타데이터 관리 백엔드 개발',
          'jsPDF 기반 보고서 생성 API 서비스화 · 모바일/웹 동일 품질 PDF 제공',
          'Tiles 프레임워크 도입 · 중복 코드 65% → 10%',
          'Jenkins CI/CD 구축 · 배포 빈도 7일 → 1일 · 휴먼에러 제거',
          '2022 BIXPO 기술 시연 성공 및 연구과제 성과 기여',
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
      { name: 'PostgreSQL', level: 'familiar' },
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
      { name: 'Helm', level: 'familiar' },
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
    /** TODO: 학교명을 채워주세요 */
    school: 'TODO: 학교명',
    /** TODO: 학위를 채워주세요 (예: 학사) */
    degree: 'TODO: 학위',
    /** TODO: 전공을 채워주세요 (예: 컴퓨터공학) */
    major: 'TODO: 전공',
    /** TODO: 재학/졸업 기간을 채워주세요 (예: 2017.03 ~ 2021.02) */
    period: 'TODO: 기간',
    todo: true,
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
      'GitHub Actions + ECR CI/CD 구축 · 배포 시간 40% 단축 · 인프라 비용 100% 절감',
      'JWT 무상태 인증 + API Gateway 중앙 인증 · 서비스 간 결합도 완화',
      'Zipkin 분산 추적(B3 전파) · 병목/오류 지점 식별 속도 개선',
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
      'Elasticsearch 도입 · MySQL 대비 지연을 임계치(p95 < 600ms, 실패율 < 1%) 이내로 개선',
      '한국어 형태소 분석(Nori) · 오타 허용(fuzziness) · 동의어 적용 · 검색 품질 향상',
      'Nori·prefix·fuzziness·부스팅·캐시 조합 · 오타/복합어에 강한 자동완성 구현',
    ],
    techStack: ['Spring Boot', 'MySQL', 'Redis', 'ElasticSearch', 'Docker', 'Grafana', 'Prometheus', 'k6'],
  },
  {
    name: '오케스트로 사내 스터디 기획·운영',
    period: '2025.05 ~ 2025.08',
    organization: '오케스트로주식회사 사내',
    description:
      '성능 개선 사례 공유·알고리즘 실습·개발 서적 리딩을 정례화. 현업 개선 사례를 표준 지식으로 전파해 팀 생산성과 코드 품질을 향상했습니다.',
    achievements: [
      '주 1회(4개월) · 평균 참여율 75% · 발표자 순환제 운영',
      '\'데이터 동기화 2시간 → 10초\' 등 성능 개선 사례를 RCA → 해결 전략 → 벤치마크 → 체크리스트로 문서화 · 유사 과제 리드타임 50% 단축',
      '이펙티브 자바·JPA 서적 리딩 결과를 규약·코딩 컨벤션·리뷰 체크리스트로 정립',
      '노션/위키 저장소 구축 (가이드·체크리스트·런북) · 검색·재사용성 향상',
    ],
    techStack: [],
  },
]
