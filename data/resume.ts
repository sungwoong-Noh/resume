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
  tagline: '백엔드 엔지니어 | 성능 병목 진단부터 팀 개발 문화 개선까지',
  email: 'asdz453@gmail.com',
  phone: '010-8866-3354',
  github: 'https://github.com/sungwoong-Noh',
  githubHandle: 'sungwoong-Noh',
  linkedin: 'https://www.linkedin.com/in/sunwoongnoh',
  blog: 'https://sw-noh.tistory.com',
  blogHandle: 'sw-noh.tistory.com',
  website: 'https://swnoh.pe.kr',
  websiteHandle: 'swnoh.pe.kr',
  desiredSalary: '',
  /**
   * intro — 화면에 표시되는 자기소개 본문.
   * 현재는 임팩트 있는 경험 기반으로 작성됨.
   * 본인의 언어로 더 다듬고 싶은 부분이 있으면 직접 수정.
   */
  intro: `문제를 마주했을 때 표면적인 현상에 그치지 않고 **구조적 원인을 끝까지 파고들어**, **2시간 소요되던 14만 건의 배치 작업을 10초로 단축**하고 DB 응답 지연을 **17초에서 3초로 개선**했습니다.
기술적 파편화로 인한 비효율을 발견하면 개인의 편리함에 가두지 않고, **객관적인 파일럿 시연으로 팀을 설득**하여 조직 전체의 코드를 표준화해왔습니다.
수동 운영 업무를 자동화 API로 전환해 월 공수를 90% 절감한 경험처럼, 언제나 **근본적인 문제를 타격하여 시스템 성능과 팀 전체의 생산성을 함께 끌어올리는 백엔드 개발자**입니다.`,
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
    description: '응답 지연 1초가 쌓이면 운영 병목이 됩니다. 실행계획 분석부터 아키텍처까지 병목의 근본 원인을 파고듭니다.',
    hashtag: '',
  },
  {
    icon: '🧹',
    title: '기술 부채 해결사',
    description: '동료가 읽기 좋은 명료한 코드로 협업 비용을 최소화합니다.',
    hashtag: '',
  },
  {
    icon: '🛡️',
    title: '안정성 우선주의',
    description: '모니터링 지표로 이상 징후를 사전에 감지하고 장애를 근본부터 해결합니다.',
    hashtag: '',
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
    detail: 'N+1로 14만 건 동기화에 2시간 소요 → Fetch Join + JDBC Template Bulk Insert로 10초',
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
    metric: '70',
    unit: '%',
    description: 'Native 쿼리 제거율',
    detail: 'QueryDSL 지사 내 3개 프로젝트 도입 주도 · SQL 문자열 대신 타입 안전 Java 코드로 전환 · 런타임 SQL 오류 제거',
  },
]

// ─── Experience ───────────────────────────────────────────────
export type PARItem = {
  result: string       // 헤드라인 — 항상 표시
  problem?: string     // P: 왜 이 문제가 중요했나
  analyze?: string     // A: 왜 이 방법을 선택했나
}

export type ResumeContent = {
  subtitle: string     // 스토리 소제목
  body: string[]       // 줄글 단락들
  result: string       // → 결과
}

export type Project = {
  name: string
  period: string
  achievements: PARItem[]
  /** 이력서 전용: 있으면 achievements 대신 소제목+줄글 형태로 렌더링 */
  resumeContent?: ResumeContent[]
  /** 이력서에서 project.name을 숨기고 subtitle을 teal로 표시 (플랜아이처럼 계층 없는 경우) */
  hideNameInResume?: boolean
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
  /** 이력서 전용: 있으면 projects 대신 이 단락들을 표시 */
  resumeParagraphs?: string[]
}

export const experiences: Experience[] = [
  {
    company: '플랜아이(PlanAI)',
    position: 'Cloud Engineer',
    period: '2026.02 ~ 2026.05',
    duration: '3개월',
    description: `플랜아이는 기업과 공공기관을 대상으로 클라우드 환경 구축·운영(MSP)을 제공하는 KT Cloud 공식 파트너사입니다.\n\n고객사 40개 이상의 클라우드 인프라를 운영하며, 클라우드 사업 3년 만에 지방 최초 KT Cloud 골드 등급을 달성했습니다.`,
    highlights: [
      '40개 고객사 Prometheus + Grafana 모니터링 구축 · CMP 연동으로 월간 보고서 수작업 2시간 → 10분',
      'VictoriaMetrics 도입으로 메트릭 보존 기간 30일 → 1년 확장',
      'Ansible 기반 Exporter 일괄 설치 자동화 · WAF 유해 IP 차단 요청 반자동화',
    ],
    techStack: ['Prometheus', 'Grafana', 'VictoriaMetrics', 'Ansible', 'KT Cloud'],
    projects: [
      {
        name: '모니터링 구축 및 보고서 자동화',
        period: '2026.02 ~ 2026.05',
        hideNameInResume: true,
        resumeContent: [
          {
            subtitle: '모니터링 구축 및 보고서 자동화',
            body: [
              'MSP로 관리하는 **40개 이상 고객사의 클라우드 인프라 모니터링 스택**을 직접 제안하고 구축한 프로젝트입니다. 모니터링 시스템 없이 KT Cloud Watch에만 의존하다 보니 일주일 이상 지난 장애는 추적 자체가 불가능했습니다. 문제가 생기면 수십 개 서버를 일일이 접속해 로그를 뒤져야 했고, 월간 보고서도 서버마다 직접 접속해 리소스를 확인하는 방식이라 **서버 20개 기준 2시간 이상** 걸렸습니다.',
              '이를 해결하기 위해 모니터링 스택 도입을 검토했습니다. **시각화와 알람 연동을 단일 도구로 처리할 수 있는 Grafana를 선택**했고, **메트릭 수집은 Prometheus로 구성**했습니다.',
              '다만 고객사 모니터링 서버 사양이 제한적이어서 Prometheus 단독으로 장기 보존하면 용량 부족 위험이 있었습니다. **압축 효율이 높은 VictoriaMetrics를 함께 적용해 1년 치 메트릭을 안정적으로 보존**할 수 있도록 했습니다.',
              '40개 고객사 전체에 직접 구축하고 Google Chat 알람 연동까지 완료했습니다. Prometheus 구축이 내부 CMP의 보고서 자동 생성 기능 활성화로도 이어져, **2시간 이상 걸리던 수기 보고서 작업이 10분으로 줄었습니다**.',
            ],
            result: '장애 감지: 사후 파악 불가 → **실시간 알람 감지** · 메트릭 보존 기간: **30일 → 1년** · 월간 보고서 작성 시간: **2시간 → 10분** (서버 20개 기준)',
          },
        ],
        achievements: [
          {
            problem: 'MSP로 관리하는 **40개 이상 고객사**의 클라우드 인프라 모니터링 체계가 전무해 장애 발생 후에야 인지하는 구조적 문제. 월간 보고서도 서버마다 직접 접속해 리소스를 확인하는 방식으로 **서버 20개 기준 2시간 이상** 소요.',
            analyze: '시각화와 알람 연동을 단일 도구로 처리할 수 있는 **Grafana를 선택**했고, 메트릭 수집은 **Prometheus로 구성**. 고객사 모니터링 서버 사양이 제한적이어서 **압축 효율이 높은 VictoriaMetrics를 함께 적용해 1년치 메트릭을 안정적으로 보존**할 수 있도록 했습니다.',
            result: '40개 고객사 전체 구축 완료 · **2시간 이상 걸리던 수기 보고서 작업이 10분으로 단축** · 장애 감지 사후 파악 불가 → 실시간 알람',
          },
        ],
      },
      {
        name: 'AI 에이전트(MCP) 기반 WAF 차단 요청 프로세스 반자동화',
        period: '2026.02 ~ 2026.05',
        hideNameInResume: true,
        resumeContent: [
          {
            subtitle: 'AI 에이전트(MCP) 기반 WAF 차단 요청 프로세스 반자동화',
            body: [
              'WAF에서 유해 IP 이벤트가 발생할 때마다 **담당자가 수동으로 메일을 확인하고 차단 요청을 작성하는 비효율**이 있었습니다.',
              '**Gmail MCP 서버를 구성하고 Claude Code와 연동**하여, 명령 하나로 **메일 조회·라벨링·발신 기관 분류 및 차단 요청 초안 작성까지 자동으로 처리하는 파이프라인**을 구축했습니다.',
              '단순 자동화를 넘어, 복잡한 기관별 담당 업체 분류 로직을 AI 지침에 내재화하되, **최종 발송 전에는 담당자가 검토·승인하는 구조**로 설계하여 시스템의 효율성과 운영의 안정성을 동시에 확보했습니다.',
            ],
            result: '유해 IP 수집·분류·초안 작성 자동화 및 담당자 개입 최소화',
          },
        ],
        achievements: [
          {
            problem: 'WAF에서 유해 IP 이벤트가 발생할 때마다 **담당자가 수동으로 메일을 확인하고 차단 요청을 작성하는 비효율**이 있었습니다.',
            analyze: '**Gmail MCP 서버를 구성하고 Claude Code와 연동**하여, 명령 하나로 **메일 조회·라벨링·발신 기관 분류 및 차단 요청 초안 작성까지 자동으로 처리하는 파이프라인**을 구축. 복잡한 기관별 담당 업체 분류 로직을 AI 지침에 내재화하되, **최종 발송 전에는 담당자가 검토·승인하는 구조**로 설계.',
            result: '유해 IP 수집·분류·초안 작성 자동화 및 담당자 개입 최소화',
          },
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
      '자산계획 시스템(RPMS) 설계·개발, CSP 멀티테넌트 네트워크 상품(PPP Cloud) 풀스택 개발 리드, 국정자원 3개 백오피스 시스템 통합 운영유지보수를 담당했습니다.',
    highlights: [
      '데이터 동기화 99% 개선 (2시간 → 10초)',
      '핵심 조회 p95 응답시간 82% 개선 (17초 → 3초)',
      '인시던트 12건 → 5건/주 지속 감소',
      'RPMS 단독 운영·개발·고객 대응 전담 · ITSM 오류 개선·배포 참여',
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
        resumeContent: [
          {
            subtitle: 'Tibero DB 쿼리 최적화 · p95 17초 → 3초',
            body: [
              '**130만 건 규모의 자산 조회** 기능에서 검색 조건을 추가하면 응답이 급격히 느려지는 문제가 있었습니다. **p95가 17초**에 달해 현업 업무가 지연되고 있었습니다.',
              '실행계획을 분석해 **WHERE절 컬럼 타입과 파라미터 타입이 불일치해 인덱스가 무력화**되고 있다는 원인을 파악하고, 타입 정합성을 수정했습니다.',
            ],
            result: '자산 조회 응답속도 **p95 17초 → 3초** (82% 개선)',
          },
        ],
        achievements: [
          {
            problem: '3개 시스템이 별도 담당자 없이 분산 운영되어 이슈 발생 시 책임 소재 불명확·대응 지연 반복',
            result: 'RPMS 단독 전담으로 대응 창구 단일화 · ITSM 개발·오류 개선 참여',
          },
          {
            problem: '**130만 건 규모의 자산 조회** 기능에서 검색 조건을 추가하면 응답이 급격히 느려지는 문제. **p95가 17초**에 달해 현업 업무가 지연되고 있었습니다.',
            analyze: '실행계획을 분석해 **WHERE절 컬럼 타입과 파라미터 타입이 불일치해 인덱스가 무력화**되고 있다는 원인을 파악하고, 타입 정합성을 수정했습니다.',
            result: '자산 조회 응답속도 **p95 17초 → 3초** (82% 개선)',
          },
          {
            problem: '동일 오류가 반복 접수돼도 즉각 패치 후 종결하는 관행으로 근본 원인이 누적',
            result: '월 30건+ 운영 이슈를 유형별 분류·재발 빈도로 우선순위화해 고빈도 원인부터 순차 제거',
          },
          {
            problem: '반복 접수되는 ITSM 오류 유형 분석 없이 증상만 패치하는 구조',
            result: '핵심 원인 위주 기능 개선 적용 · 인시던트 12건 → 5건/주 (주간 접수 건수 직접 집계)',
          },
        ],
      },
      {
        name: 'CSP 멀티테넌트 네트워크 상품 개발 (PPP Cloud)',
        period: '2024.08 ~ 2025.06',
        resumeContent: [
          {
            subtitle: 'Self-Service 전환으로 수동 운영 90% 절감',
            body: [
              '고객이 자원을 신청하면 운영자가 직접 내부 시스템에서 자원을 생성해야 하는 티켓 방식이었습니다. **반복 작업이 월 50건**에 달했고, 고객이 직접 자원을 제어할 수 없는 **반쪽짜리 CSP** 구조였습니다.',
              '**네트워크 장비가 멀티테넌트 기능을 제공한다는 점에 착안**해, 이를 외부에 API로 노출하는 별도 API 서버를 신규 개발했습니다.',
            ],
            result: '고객이 직접 자원을 신청하고 즉시 처리되는 구조로 전환해 **수동 운영 티켓을 월 50건에서 5건으로 축소**했습니다.',
          },
          {
            subtitle: 'Saga 패턴으로 다단계 장비 트랜잭션 안정화',
            body: [
              '클라우드 상품 신청 시 공인 IP, 방화벽, Cisco 스위치, OpenStack 등 **다단계 장비 설정이 순차 실행**되는 구조에서 **중간 단계 실패 시 이전 설정이 그대로 남아 충돌**이 발생했습니다.',
              '장비 API와 Spring 트랜잭션이 서로 다른 도메인이라 **2PC(2-Phase Commit)를 적용할 수 없었고**, 각 단계마다 실패 시 이전 상태로 되돌리는 **보상 로직을 직접 구현하는 Saga 패턴**을 선택했습니다.',
            ],
            result: '이후 **장비 설정 충돌 오류 발생 0건** 달성',
          },
          {
            subtitle: '개발 표준 정착 · 테스트 문화 도입',
            body: [
              '신규 플랫폼 초기 개발이라 컨벤션, 공통 모듈, 에러 처리 기준이 없었고 **팀원마다 구현 방식이 달라 중복 코드가 쌓이고 유지보수가 어려운 구조**였습니다.',
              '**코딩 컨벤션, 공통 모듈, 에러 처리 표준을 정의**해 구조를 정비했고, **JUnit5 단위테스트를 핵심 기능부터 점진적으로 도입**해 수동 검증 문화를 바꿨습니다.',
            ],
            result: '**팀 전체가 동일한 개발 기준으로 작업하는 구조 정착**',
          },
        ],
        achievements: [
          {
            result: '5인 개발팀 · KT Cloud 기술팀과 API 연동 및 네트워크 장비 제어 협업',
          },
          {
            problem: '신규 CSP 플랫폼 초기 개발에서 컨벤션·공통 모듈·에러 처리 기준 없어 팀원마다 구현 방식 달라 중복 코드 누적·유지보수 어려움',
            result: '코딩 컨벤션·공통 모듈·에러 처리 표준을 직접 정의해 팀 전체에 적용',
          },
          {
            problem: '클라우드 상품 신청 시 공인IP·방화벽·Cisco 스위치·OpenStack 등 **다단계 장비 설정이 순차 실행**되는 구조에서 **중간 단계 실패 시 이전 설정이 그대로 남아 충돌**이 발생했습니다.',
            analyze: '장비 API와 Spring 트랜잭션이 서로 다른 도메인이라 **2PC(2-Phase Commit)를 적용할 수 없었고**, 각 단계마다 실패 시 이전 상태로 되돌리는 **보상 로직을 직접 구현하는 Saga 패턴**을 선택했습니다.',
            result: '이후 **장비 설정 충돌 오류 발생 0건** 달성',
          },
          {
            problem: '고객이 자원을 신청하면 운영자가 직접 내부 시스템에서 자원을 생성해야 하는 티켓 방식이었습니다. **반복 작업이 월 50건**에 달했고, 고객이 직접 자원을 제어할 수 없는 **반쪽짜리 CSP** 구조였습니다.',
            analyze: '**네트워크 장비가 멀티테넌트 기능을 제공한다는 점에 착안**해, 이를 외부에 API로 노출하는 별도 API 서버를 신규 개발했습니다.',
            result: '고객이 직접 자원을 신청하고 즉시 처리되는 구조로 전환해 **수동 운영 티켓을 월 50건에서 5건으로 축소**했습니다.',
          },
          {
            problem: "'어차피 손으로 눌러보면 된다'는 팀 문화로 테스트 코드 없이 수동 검증에만 의존",
            analyze: '핵심 기능에 점진적 적용을 제안·합의해 JUnit5 단위테스트 문화 정착 유도',
            result: '설정오류 0건 · 장비 API 스펙 불일치·IP 충돌 검증을 테스트 코드로 대체해 서버 재실행 반복 제거',
          },
          {
            problem: '외부 연동 서비스와 내부 도메인 서비스가 한 모듈로 혼재해 변경 시 전체 영향 범위 파악 불가',
            result: '외부 연동 API 모듈·내부 도메인 서비스 모듈 분리 · 의존성 단방향 정리로 외부 연동 모듈 재사용성 확보',
          },
        ],
      },
      {
        name: '자산계획 시스템 설계/개발 및 운영 (RPMS)',
        period: '2024.01 ~ 2025.06',
        resumeContent: [
          {
            subtitle: '자산 데이터 동기화 성능 개선 (2시간 → 10초)',
            body: [
              '인수인계받은 배치를 직접 실행해보니 **14만 건 처리에 2시간이 소요**되어, 수동 동기화 시 사용자가 결과를 볼 때까지 2시간을 대기해야 하는 비효율이 있었습니다. 왜 이렇게 오래 걸리는지 코드를 뜯어보니 두 가지 병목이 있었습니다.',
              '첫째, 기존 데이터와 비교하는 로직이 건마다 조회하는 방식이라 쿼리가 과도하게 많았습니다. **전체 데이터를 한 번에 조회해 HashMap으로 캐싱하고 인메모리에서 비교**하는 방식으로 개선했습니다.',
              '둘째, **JPA IDENTITY 전략은 INSERT 시점에 DB에서 ID를 즉시 발급받아야 해 Bulk Insert가 불가능한 구조**였습니다. 이를 **JDBC Template 기반 Bulk Insert로 전환**해 두 병목을 함께 해결했습니다.',
            ],
            result: '14만 건 처리 **2시간 → 10초** (99% 개선)',
          },
          {
            subtitle: '파일럿 시연으로 팀 설득 · Native 쿼리 70% 제거',
            body: [
              'JPA를 사용하면서도 단순 조회는 Data JPA, 복잡한 조건은 Criteria API, 쿼리 자체가 복잡해지면 Native Query를 쓰는 방식이 혼재해 있었습니다.',
              '**유지보수 시 어떤 방식으로 구현됐는지 파악하는 것 자체가 부담**이었습니다. **QueryDSL을 통해 세 가지 방식을 하나로 통일**할 수 있다고 판단해 도입을 제안했습니다.',
              'Criteria API의 낮은 가독성과 Native Query의 런타임 오류 위험성을 해결하고자, **컴파일 단계에서 오류를 잡고 JPA 영속성 컨텍스트를 활용할 수 있는 QueryDSL을 선택**했습니다.',
              '팀 내 회의적인 의견에 대해 **자산 현황 모듈에 파일럿으로 선행 적용 후 시연하여 설득**했고, 이후 지사 내 3개 프로젝트로 도입을 확대했습니다.',
            ],
            result: '**Native 쿼리 70% 제거** · 컴파일 단계에서 쿼리 오류 사전 감지 · 팀 전체 쿼리 방식 통일',
          },
        ],
        achievements: [
          {
            result: '4인 팀(선임 1·신입 2)에서 핵심 설계·개발 주도 · 팀원 이탈 후 단독 운영 및 고객 컨택 전담',
          },
          {
            problem: '인수인계받은 배치를 직접 실행해보니 **14만 건 처리에 2시간이 소요**되어, 수동 동기화 시 사용자가 결과를 볼 때까지 2시간을 대기해야 하는 비효율이 있었습니다.',
            analyze: '기존 데이터와 비교하는 로직이 건마다 조회하는 방식이라 쿼리가 과도하게 많았습니다. **전체 데이터를 한 번에 조회해 HashMap으로 캐싱하고 인메모리에서 비교**하는 방식으로 개선했습니다. 또한 **JPA IDENTITY 전략은 INSERT 시점에 DB에서 ID를 즉시 발급받아야 해 Bulk Insert가 불가능한 구조**여서, **JDBC Template 기반 Bulk Insert로 전환**해 두 병목을 함께 해결했습니다.',
            result: '14만 건 처리 **2시간 → 10초** (99% 개선)',
          },
          {
            problem: 'JPA를 사용하면서도 단순 조회는 Data JPA, 복잡한 조건은 Criteria API, 쿼리 자체가 복잡해지면 Native Query를 쓰는 방식이 혼재해 **유지보수 시 어떤 방식으로 구현됐는지 파악하는 것 자체가 부담**이었습니다.',
            analyze: '**QueryDSL을 통해 세 가지 방식을 하나로 통일**할 수 있다고 판단해 도입을 제안했습니다. Criteria API의 낮은 가독성과 Native Query의 런타임 오류 위험성을 해결하고자, **컴파일 단계에서 오류를 잡고 JPA 영속성 컨텍스트를 활용할 수 있는 QueryDSL을 선택**했습니다. 팀 내 회의적인 의견에 대해 **자산 현황 모듈에 파일럿으로 선행 적용 후 시연하여 설득**했고, 이후 지사 내 3개 프로젝트로 도입을 확대했습니다.',
            result: '**Native 쿼리 70% 제거** · 컴파일 단계에서 쿼리 오류 사전 감지 · 팀 전체 쿼리 방식 통일',
          },
          {
            result: '폐쇄망 Kubernetes 개발 클러스터·미들웨어 재구축 및 Jenkins·Helm 배포 자동화',
          },
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
      '3~4인 SI 기술개발팀 풀스택 개발자로 합류해 납기 환경을 템플릿·공통·CI/CD로 표준화/자동화하고, 설계–개발–운영 전 주기를 주도해 유지보수성과 성능을 지속 개선했습니다.',
    highlights: [
      'Jenkins 기반 배포 자동화 · 배포 빈도 7일 → 1일',
      'Tiles 프레임워크 도입 · 중복 코드 65% → 10% · 페이지 개발 리드타임 2일 → 0.5일',
      'SMS 서비스 DB 이관 · 1,000만 건 무결성 100% 유지 · p95 5초 → 0.9초',
    ],
    resumeParagraphs: [
      '공공기관 SI 프로젝트를 수행하는 IT 기업에서 **비효율을 직접 발견하고 개선하는 방식**으로 일했습니다.',
      'JSP 페이지마다 반복되는 레이아웃 코드를 발견해 **Tiles 프레임워크 도입을 직접 제안**해 중복 코드를 **65%에서 10%로 줄였고**, **Jenkins 배포 파이프라인을 구성**해 배포 주기를 **7일에서 1일로 단축**했습니다.',
      'SMS 서비스 DB 이관 과정에서는 **헤더 집계 쿼리가 페이지마다 자동 실행**되는 문제를 파악해 **p95를 5초에서 0.9초로 개선**했습니다.',
    ],
    techStack: ['eGovFramework', 'MyBatis', 'MySQL', 'JSP', 'jQuery', 'FastAPI', 'Docker', 'Jenkins', 'SVN'],
    projects: [
      {
        name: '동구청 과학행사 신청 플랫폼',
        period: '2023.07 ~ 2023.10',
        achievements: [
          {
            result: 'eGovFramework 기반 3개월 내 풀스택 개발 및 안정적 런칭',
          },
          {
            problem: '동시 신청 시 이중 예약 가능성 존재',
            analyze: 'Redis 분산락은 별도 인프라 구성 필요, DB 비관적 락은 소규모 행사 트래픽에 과도한 설계 → 별도 인프라 없이 임시 예약 상태를 DB로 관리하는 Soft Reservation 선택',
            result: '이중 신청 0건',
          },
          {
            result: 'NICE 본인인증 모듈 + OAuth 2.0 SNS 로그인 구현 · 회원관리 표준화',
          },
          {
            result: '행사 등록·참가자 관리·통계 조회를 통합한 어드민 페이지 구축',
          },
        ],
      },
      {
        name: '충남도청 SMS 서비스 DB 이관',
        period: '2023.03 ~ 2023.05',
        achievements: [
          {
            result: 'OS 설치 → 데이터 마이그레이션 → 장비 납품까지 전 과정 일괄 수행',
          },
          {
            result: '1,000만 건 대용량 데이터 무결성 100% 유지',
          },
          {
            problem: '매 페이지 이동 시 헤더에서 전체 SMS 카운트 집계 쿼리가 자동 실행되어 페이지 로딩 지연 반복',
            analyze: '상시 표시가 불필요한 집계 쿼리임을 파악 → 버튼 클릭 시에만 조회하는 방식으로 변경',
            result: '쿼리 실행 시간 직접 측정, p95 5초 → 0.9초 · CPU 사용률 65% → 40% 개선',
          },
          {
            result: '노후 장비 교체로 물리적 장애 포인트 제거 · 이관 후 다운타임 0건',
          },
        ],
      },
      {
        name: '한전 위험성 평가기반 자율안전 솔루션',
        period: '2022.02 ~ 2023.10',
        achievements: [
          {
            result: 'GIS 기반 실시간 모니터링 대시보드 · 메타데이터 관리 백엔드 개발',
          },
          {
            problem: 'Spring에서 jsPDF JS 함수를 직접 실행할 수 없어 앱에서 웹과 동일한 PDF 보고서 생성 불가',
            analyze: '브라우저 렌더링이 필요한 jsPDF 실행을 위해 FastAPI 크롤링 서버를 별도 구축해 JS 실행 환경 확보',
            result: 'jsPDF 기반 보고서 생성 API 서비스화 · 모바일/웹 동일 품질 PDF 제공',
          },
          {
            problem: 'JSP 페이지마다 헤더·푸터·네비게이션을 반복 복붙하는 중복 레이아웃 문제',
            analyze: 'JSP include 방식은 중복 제거 효과 제한적이며 구조 변경 시 전 페이지 수정 필요 → 레이아웃 템플릿화가 가능한 Tiles 프레임워크 도입 제안 및 적용',
            result: '중복 코드 65% → 10% · 페이지 개발 리드타임 2일 → 0.5일',
          },
          {
            problem: '수동 배포로 인한 휴먼에러와 7일 배포 주기가 긴급 패치 대응을 가로막는 문제',
            analyze: 'SI 폐쇄망·온프레미스 환경 특성상 관리형 SaaS CI 사용 불가 → 자체 구축 가능한 Jenkins 선택해 직접 파이프라인 구성',
            result: '배포 빈도 7일 → 1일',
          },
          {
            result: '2022 BIXPO 기술 시연 성공 · 한전 연구과제 최종 평가 통과에 기여',
          },
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
      { name: 'Kubernetes', level: 'proficient' },
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
    name: '정보처리기사',
    organization: '한국산업인력공단',
    period: '2024.09',
    description: '소프트웨어 개발, 데이터베이스 구축, 시스템 분석 설계 등 정보처리 직무 국가기술자격',
    achievements: [],
  },
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
  achievements: PARItem[]
  techStack: string[]
  url?: string
}

export const sideProjects: SideProject[] = [
  {
    name: 'InnerCircle Commerce 프로젝트',
    period: '2025.07 ~ 2025.09',
    organization: '패스트캠퍼스',
    description:
      '고트래픽 시나리오를 가정한 고성능 검색·동시성·유연한 상품 모델링 요구에 대응하는 통합 커머스 프로젝트 설계 및 개발.',
    achievements: [
      {
        problem: '커머스에서 주문·재고·결제 등 도메인별 트래픽 집중 패턴이 달라 모놀리식은 전체를 스케일링해야 하는 비효율 발생',
        analyze: 'K8s는 관리 복잡도가 높고, AWS ECS는 관리형 오케스트레이션으로 Auto-scaling 구성이 단순 → MSA + ECS 조합 선택',
        result: 'AWS ECS 기반 MSA Auto-scaling 인프라 설계 및 구축',
      },
      {
        problem: 'MSA 환경에서 각 서비스마다 인증 로직이 중복되면 변경 시 전 서비스 수정 필요',
        result: 'JWT 무상태 인증 + API Gateway 중앙 인증 · 서비스 간 결합도 완화',
      },
      {
        problem: '스파이크 트래픽 시 다운스트림 서비스 과부하 위험',
        analyze: '고정 윈도우·슬라이딩 윈도우는 순간 버스트를 허용하지 못함. 토큰 버킷은 일정 버스트를 허용하면서 평균 속도를 제한하고 Redis 연동 구현이 단순해 선택',
        result: '토큰 버킷 Rate Limiting · 스파이크 트래픽 완화 및 다운스트림 보호',
      },
    ],
    techStack: ['Spring Boot', 'Spring Cloud', 'JPA', 'PostgreSQL', 'AWS ECS', 'GitHub Actions', 'Zipkin', 'Grafana'],
    url: 'https://github.com/INNER-CIRCLE-ICD4/Project-3.-Commerce',
  },
  {
    name: 'TechGate — 검색엔진 스터디',
    period: '2025.09 ~ 2025.10',
    organization: '개인 프로젝트',
    description:
      'RDB·Redis·Elasticsearch 비교 벤치마크를 통해 Elasticsearch 기반 10M 상품 검색 엔진을 설계·구현. 검색 품질과 응답 속도를 동시에 개선.',
    achievements: [
      {
        problem: '10M 상품 데이터에서 RDB LIKE 쿼리 p95 60,000ms로 실서비스 불가, Redis는 형태소 분석·오타 허용 등 전문 검색 기능 미지원',
        analyze: 'RDB·Redis·Elasticsearch 세 엔진을 k6(10 VU)로 직접 벤치마크 비교 → ES가 성능(p95 130ms)과 검색 품질 모두 우위 확인',
        result: 'Elasticsearch 도입 · p95 60,000ms → 130ms',
      },
      {
        result: 'Nori·형태소 분석·fuzziness·부스팅·캐시 조합으로 오타/복합어에 강한 자동완성 구현',
      },
    ],
    techStack: ['Spring Boot', 'MySQL', 'Redis', 'Elasticsearch', 'Docker', 'Grafana', 'Prometheus', 'k6'],
    url: 'https://github.com/Tech-Gate-Step/search-system-evolution',
  },
  {
    name: '오케스트로 사내 스터디 기획·운영',
    period: '2025.05 ~ 2025.08',
    organization: '오케스트로주식회사 사내',
    description:
      '데이터 동기화 개선 사례를 팀에 공유하다 "이런 사례를 정기적으로 나누면 어떨까"는 제안이 스터디로 이어졌습니다. 성능 개선 RCA, 알고리즘 실습, 개발 서적 리딩을 정례화해 현업 경험을 팀 공유 지식으로 전환했습니다.',
    achievements: [
      {
        result: '주 1회(4개월) · 평균 참여율 75% · 발표자 순환제 운영',
      },
      {
        problem: '성능 개선 사례가 담당자 개인 지식으로 남아 팀 공유 및 재활용이 안 되는 문제',
        result: '성능 개선 사례를 RCA → 해결 전략 → 벤치마크 → 체크리스트로 문서화해 팀 공유 지식으로 전환',
      },
      {
        result: '이펙티브 자바·JPA 서적 리딩 결과를 규약·코딩 컨벤션·리뷰 체크리스트로 정립',
      },
      {
        result: '노션/위키 저장소 구축 (가이드·체크리스트·런북) · 검색·재사용성 향상',
      },
    ],
    techStack: [],
  },
]
