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
  intro: `**표면이 아니라 근본 원인을 고치는 백엔드 개발자 노성웅입니다.**
기술을 목적이 아니라 문제 해결의 도구로 보고, 성능 병목을 끝까지 추적해 해결하며, 만든 사람이 아니어도 읽고 유지보수하기 쉬운 코드를 만드는 데 강점이 있습니다.
**Spring Boot/Java 기반으로 공공 클라우드 환경에서 수십만 건 규모의 자산 데이터**를 다루며, 성능 개선과 다단계 트랜잭션 구조 설계, 쿼리 방식 표준화를 해왔습니다.
당장 돌아가게 하기보다, 원인까지 해결해서 오래 안정적으로 유지되는 시스템을 만들려고 합니다.`,
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
    description: '여러 시스템이 얽힌 흐름도 실패 지점마다 자원이 깨지지 않도록 구조로 설계해 시스템을 안정적으로 유지합니다.',
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
    title: '유지보수하기 쉬운 코드',
    description: '만든 사람이 아니어도 읽고 이어가기 쉽도록, 구현 방식을 표준화하고 명료하게 씁니다.',
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
    metric: '700',
    unit: '배',
    description: '데이터 동기화 성능 개선',
    detail: '건별 조회를 HashMap 캐싱으로, JPA IDENTITY의 Bulk Insert 제약을 JDBC Bulk Insert로 해결 (14만 건 2시간 → 10초)',
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
  /** 서비스/도메인 배경 — 무슨 시스템인지·누가 쓰는지·규모. 프로젝트명 아래, 성과 앞에 표시 */
  serviceOverview?: string
}

export type Experience = {
  company: string
  position: string
  period: string
  duration: string
  /** 고용 형태 뱃지 (예: '계약직'). 정규직이면 생략 */
  employmentType?: string
  /** 이력서용 회사 소개 */
  description: string
  /** 경력기술서용 역할 요약 — 있으면 description 대신 표시 */
  careerDescription?: string
  highlights: string[]
  techStack: string[]
  projects: Project[]
  /** 이력서 전용: 있으면 projects 대신 이 단락들을 표시 */
  resumeParagraphs?: string[]
}

export const experiences: Experience[] = [
  {
    company: '오케스트로 클라우드',
    position: '선임연구원 · 클라우드 서비스 본부',
    period: '2023.10 ~ 2026.02',
    duration: '2년 4개월',
    description:
      '프라이빗·퍼블릭 클라우드부터 CSP까지 담당하는 B2B 클라우드 기업입니다. 국가정보자원관리원 공공 클라우드 사업에서 클라우드 네이티브 플랫폼을 개발·운영합니다.',
    careerDescription: '자산계획 시스템(RPMS) 5인 팀 개발 및 성능 최적화, CSP 멀티테넌트 네트워크 상품(PPP Cloud) 로드밸런서·포트포워딩 개발 및 다단계 프로비저닝 오케스트레이션 구조 설계 담당',
    highlights: [
      '데이터 동기화 2시간 → 10초 (약 700배) · JPA IDENTITY 구조 한계를 JDBC Bulk Insert로 해결',
      '멀티벤더 프로비저닝을 11개 예외 타입 기반 차등 롤백 구조로 설계 · 실패 시 자원 고아 방지',
      '혼재된 쿼리 방식을 QueryDSL로 통일해 유지보수성 개선',
    ],
    techStack: [
      'Spring Boot', 'JPA', 'QueryDSL', 'Kubernetes', 'Vue 3',
      'TanStack Query', 'Ant Design', 'Tibero', 'MariaDB', 'Redis', 'Jenkins',
    ],
    projects: [
      {
        name: 'CSP 멀티테넌트 네트워크 상품 개발 (PPP Cloud)',
        period: '2024.08 ~ 2025.06',
        serviceOverview: '공공기관에 프라이빗 클라우드(AWS 같은 CSP)를 제공하는 플랫폼으로, 기관(테넌트)마다 격리된 네트워크 환경을 자동 프로비저닝합니다. 이 중 방화벽·로드밸런서(L4) 등 네트워크 상품을 담당했습니다.',
        resumeContent: [
          {
            subtitle: 'Self-Service API 전환으로 반복 운영 요청 대폭 절감',
            body: [
              '백엔드 5인 팀에서 **로드밸런서(L4)·포트포워딩 상품**을 개발했습니다. 당시 고객은 자기 자원을 직접 만들 수 없고, 신청하면 운영자가 대신 생성해주는 **매니지드 방식**이었습니다. 방화벽 정책 하나, 포트포워딩 하나를 바꾸려 해도 요청을 넣고 담당자가 처리해줄 때까지 기다려야 했고, 이런 반복 요청이 **체감상 월 50건 안팎**으로 운영자 손이 계속 묶였습니다. 고객 입장에선 자기 자원을 직접 제어할 수 없는 **반쪽짜리 CSP**였습니다.',
              '**네트워크 장비가 이미 멀티테넌트 기능을 제공한다는 점에 착안**해, 이 기능을 외부에 안전하게 노출하는 별도 API 서버를 신규 개발했습니다. 고객이 자기 테넌트 범위 안에서 직접 자원을 신청하면 즉시 처리되도록 흐름을 바꿨습니다.',
            ],
            result: '고객이 직접 자원을 신청하고 즉시 처리되는 구조로 전환, **체감상 월 50건 안팎이던 반복 처리 요청이 한 자릿수 수준으로 감소**',
          },
          {
            subtitle: '다단계 벤더 연동을 위한 Integration 계층 분리',
            body: [
              '고객이 네트워크 환경을 하나 만들려면 방화벽 계정 생성부터 VS·인터페이스·라우트 설정, ACI 초기화, OpenStack 네트워크 생성까지 **서로 다른 벤더의 장비 API를 정해진 순서로** 호출해야 했습니다. 이 장비들은 전부 외부 시스템이라, **DB 트랜잭션(과 이를 자동화해주는 Spring @Transactional)이 커버하는 범위 밖에 있었습니다.**',
              '중간 한 단계라도 실패하면 앞 단계에서 만든 자원이 그대로 남았습니다. 예를 들어 포트포워딩 설정 중 출발지 객체만 만들어진 채 실패하면, **다음 시도에서 "이미 존재한다"며 재시도조차 막혔습니다.** 이 흐름 전체가 **150~250줄짜리 한 서비스 메서드**에 몰려 있었고, 롤백도 단계마다 try-catch로 흩어져 있었습니다.',
              '**벤더 호출 순서를 조율하는 Integration 계층을 신설**했습니다. 순수 DB 로직(도메인 서비스)과 벤더 어댑터(external 서비스)를 분리하고, 엔티티 조립은 별도 Builder로 떼어냈습니다.',
            ],
            result: '오케스트레이션 로직과 도메인·벤더 로직을 계층으로 분리해, **뒤엉켜 있던 프로비저닝 흐름을 책임별로 정리**',
          },
          {
            subtitle: '실패 지점별 롤백 범위를 반영한 예외 타입 체계 설계',
            body: [
              'Integration 계층으로 흐름을 한 곳에 모으고 나니, 프로비저닝 7단계(계정·VS·인터페이스·라우트·ACI·OpenStack·DB)마다 **실패 지점을 명확히 구분**할 수 있었습니다. 이를 바탕으로 단계별로 롤백 범위가 다른 **11개 예외 타입 체계**를 제안·구현했습니다.',
              '공통 예외는 상속으로 재사용하고, 하위 예외마다 롤백에 필요한 컨텍스트만 얹었습니다. 이 뼈대 위에서 **각 도메인 담당자는 자기 단계의 롤백만 정의하면 되도록** 만들어, 공통 구조와 도메인 지식을 분리했습니다.',
            ],
            result: '실패 지점과 무관하게 **자원이 고아 상태로 남지 않도록 구조적으로 보장** · 벤더 추가 시 예외 타입·핸들러만 추가하는 확장 구조 확립',
          },
          {
            subtitle: '멀티테넌트 네트워크 상품 데이터 모델 설계',
            body: [
              '고객(테넌트)마다 독립된 환경을 보장해야 했는데, **방화벽과 로드밸런서는 격리 방식이 서로 달라 단일 방식으로 모델링하기 어려운 게 관건**이었습니다. 각 벤더 장비가 실시간 상태 조회 API를 자체 제공하고 있어, **DB가 장비의 전체 상태를 복제해 들고 있을 필요는 없었습니다.** 테넌트-자원 매핑과 오케스트레이션에 필요한 최소한의 서비스 데이터만 저장하면 됐기 때문에, 고객별로 데이터베이스를 나눌 만큼 볼륨·복잡도가 크지 않다고 판단해 하나의 데이터베이스 안에서 고객별로 논리적으로 구분하는 구조를 택했습니다.',
              '다만 상품마다 특성이 달라 설계를 다르게 가져갔습니다. 방화벽은 고객 정보를 최상위에서 한 번만 연결하고 하위 데이터들이 연쇄적으로 연결되도록 구성해 데이터 중복을 줄였고, 로드밸런서는 우리 시스템에서 쓰는 고객 식별자와 실제 장비(Citrix)에서 쓰는 식별자가 서로 달라서, **두 값을 한 테이블에 함께 저장해 각자 필요한 곳에서 바로 꺼내 쓸 수 있게** 했습니다. 또한 데이터베이스뿐 아니라 실제 방화벽·로드밸런서 장비에서도 고객별로 구획을 나눠, 데이터와 장비 양쪽에서 이중으로 고객 간 정보가 섞이지 않도록 했습니다.',
            ],
            result: '상품마다 다른 격리 요구사항을 하나의 데이터베이스 안에서 관리 · 데이터베이스와 실제 장비 양쪽의 식별자를 함께 다뤄 처리 경로 단순화',
          },
        ],
        achievements: [
          {
            problem: '고객이 자원을 신청하면 운영자가 직접 자원을 생성해주는 **매니지드 방식**. **반복 처리 요청이 체감상 월 50건 안팎**으로 상당한 비중을 차지하고, 고객이 직접 자원을 제어할 수 없는 **반쪽짜리 CSP** 구조',
            analyze: '**네트워크 장비가 멀티테넌트 기능을 제공한다는 점에 착안**, 이를 외부에 API로 노출하는 별도 API 서버 신규 개발',
            result: '고객이 직접 자원을 신청하고 즉시 처리되는 구조로 전환, **체감상 월 50건 안팎이던 반복 요청이 한 자릿수 수준으로 감소**',
          },
          {
            problem: '네트워크 환경 프로비저닝이 방화벽·VS·라우트·ACI·OpenStack 등 **서로 다른 벤더 API의 순차 호출**로 이뤄지는데, 외부 시스템이라 **DB 트랜잭션·Spring @Transactional로 묶을 수 없어** 중간 실패 시 자원이 고아로 남고 재시도 불가',
            analyze: '벤더 호출을 조율하는 **Integration 계층 분리** + 프로비저닝 7단계마다 **실패 지점별 롤백 범위가 다른 11개 예외 타입 체계**를 제안·구현 (도메인별 구체 롤백은 각 도메인 담당자가 구조 위에서 처리)',
            result: '실패 지점 무관 **자원 고아 상태 구조적 방지** · 벤더 추가 시 예외 타입·핸들러만 추가하는 확장 구조',
          },
          {
            problem: '고객(테넌트)마다 독립된 네트워크 환경을 제공해야 하는데 **상품 도메인(방화벽·LB)마다 격리 특성이 달라** 단일 방식으로 모델링 불가',
            analyze: '**단일 스키마 + FK 그래프 논리 격리**를 기본으로, 방화벽은 Zone 루트의 엄격한 FK 그래프 / LB는 DB·장비 식별자를 함께 저장하는 비정규화로 설계. DB 논리 격리 + 장비 파티션 물리 격리의 **2단 구조** 구성',
            result: '도메인별 격리 요구가 다른 멀티테넌트 상품을 단일 스키마에서 일관 관리 · 조회·프로비저닝 경로 단순화',
          },
        ],
      },
      {
        name: '자산계획 시스템(RPMS) 설계/개발',
        period: '2024.01 ~ 2025.06',
        serviceOverview: '국가정보자원관리원의 IT 자산을 계획·관리하는 시스템입니다. 자산 현황이 최신·정확해야 예산심사에서 도입·폐기·교체 결정을 제대로 내릴 수 있어, 수십만 건 규모의 자산을 빠르게 동기화·조회하는 성능과 감사 대응을 위한 변경 이력 추적이 함께 요구됐습니다.',
        resumeContent: [
          {
            subtitle: '자산 데이터 동기화 성능 개선 (2시간 → 10초)',
            body: [
              'PL·선임 개발자·신입 2명과 함께한 **5인 팀에서 핵심 기능인 자산 동기화를 담당**했습니다. 이 동기화는 원래 **연 2회 설계 시즌에만 도는 스케줄러 배치**라 다소 느려도 문제가 없었는데, 기획이 **"사용자가 버튼으로 즉시 실행"하는 방식으로 바뀌면서** 문제가 드러났습니다. 배치를 직접 실행해보니 **14만 건 처리에 2시간**이 걸려, 버튼을 누른 사용자가 결과를 볼 때까지 2시간을 기다려야 하는 **사실상 못 쓰는 구조**였습니다. 왜 이렇게 오래 걸리는지 코드를 뜯어보니 두 가지 병목이 있었습니다.',
              '첫째, 기존 데이터와 비교하는 로직이 건마다 조회하는 방식이라 쿼리가 과도하게 많았습니다. **전체 데이터를 한 번에 조회해 HashMap으로 캐싱하고 인메모리에서 비교**하는 방식으로 개선했습니다.',
              '둘째, **JPA IDENTITY 전략은 INSERT 시점에 DB에서 ID를 즉시 발급받아야 해 Bulk Insert가 불가능한 구조**였습니다. 이를 **JDBC Template 기반 Bulk Insert로 전환**해 두 병목을 함께 해결했습니다.',
            ],
            result: '14만 건 처리 **2시간 → 10초** (약 700배)',
          },
          {
            subtitle: '예산심사 감사 요구사항을 반영한 도메인 규칙 설계',
            body: [
              'RPMS는 공공기관 예산심사 시스템이라 **"누가 언제 무엇을 변경했는지" 추적 가능해야 하는 감사 요구사항**이 있었습니다. 그런데 단순히 "수정 요청이 오면 이력을 남긴다"로 구현하면, 실제 값 변경이 없는 저장 요청에도 이력이 쌓여 **심사자가 정작 봐야 할 변경 내역이 노이즈에 묻히는** 문제가 생길 수 있다고 봤습니다.',
              '그래서 서버·스토리지·네트워크·백업·보안장비 등 **7종 자원 각각을 요청 값과 기존 데이터로 필드 단위(자원당 20여 개)로 비교해, 실제 변경이 있을 때만 이력을 적재**하는 로직을 설계 단계부터 반영했습니다. 폼 입력값(문자열)과 엔티티 값(숫자·boolean) 간 타입 차이로 생기는 오탐도 함께 걸러냈습니다.',
              '같은 맥락에서 심사 규정 자체도 들여다봤습니다. 사업유형(신규·증설·추가·노후·폐기)마다 요구 항목이 달랐습니다. 예를 들어 폐기 예정 자산은 CPU·메모리 스펙이 필요 없는데도 시스템은 신규 도입과 동일한 필수값을 요구하는 구조였습니다. 이걸 **Bean Validation Group으로 사업유형별로 분리**해, 폐기 대상은 최소 식별 정보만, 신규 도입은 스펙까지 엄격히 검증하도록 설계했습니다.',
            ],
            result: '값 변경이 있을 때만 이력을 남겨 심사자가 봐야 할 내역만 남도록 설계 · 사업유형별로 검증 규칙을 분리해 실무자 입력 부담 축소',
          },
          {
            subtitle: '혼재된 쿼리 방식 통일로 유지보수성 개선',
            body: [
              '같은 프로젝트 안에서 쿼리 짜는 방식이 세 가지로 갈려 있었습니다. 단순 조회는 Data JPA, 조건이 복잡하면 Criteria API, 그보다 더 복잡하면 Native Query. 문제는 유지보수할 때였습니다. 같은 기능을 고치려 해도 **이게 어떤 방식으로 짜였는지부터 확인**해야 했고, Criteria API는 코드가 장황해 읽기 어려웠으며 Native Query는 문자열이라 **오타가 나도 런타임에야 터졌습니다.**',
              '세 방식을 하나로 통일하면 이 부담이 사라진다고 보고 **QueryDSL 도입을 제안**했습니다. QueryDSL은 **컴파일 단계에서 쿼리 오류를 잡을 수 있고, JPA 영속성 컨텍스트를 그대로 활용**할 수 있어 선택했습니다.',
              '팀에 회의적인 의견이 있어, 말로 설득하기보다 **자산 현황 모듈에 먼저 파일럿으로 적용해 직접 시연**했습니다. 효과가 눈에 보이자 받아들여졌고, 이후 지사 내 3개 프로젝트로 확대됐습니다.',
            ],
            result: '컴파일 단계에서 쿼리 오류 사전 감지 · 팀 전체 쿼리 방식 통일',
          },
        ],
        achievements: [
          {
            problem: '원래 **연 2회 스케줄러 배치**였으나 **버튼 즉시 실행 방식으로 기획 변경** 후, 14만 건 처리에 **2시간**이 걸려 사용자가 버튼을 누르고 2시간 대기해야 하는 사실상 못 쓰는 구조',
            analyze: '기존 데이터와 비교하는 로직이 건마다 조회하는 방식이라 쿼리 과다. **전체 데이터를 한 번에 조회해 HashMap으로 캐싱하고 인메모리에서 비교**하는 방식으로 개선. 또한 **JPA IDENTITY 전략은 INSERT 시점에 DB에서 ID를 즉시 발급받아야 해 Bulk Insert가 불가능한 구조**임을 확인 → **JDBC Template 기반 Bulk Insert로 전환**해 두 병목 해결',
            result: '14만 건 처리 **2시간 → 10초** (약 700배)',
          },
          {
            problem: '공공 예산심사 시스템이라 **감사 이력 추적**이 필요하고, **사업유형(신규·폐기 등)마다 심사 규정(요구 항목)이 다름**. 단순 구현 시 값 변경 없는 저장도 이력이 쌓여 노이즈가 되고, 모든 유형에 동일 검증을 걸면 폐기 자산에도 불필요한 스펙을 요구해 실무자 혼란',
            analyze: '**7종 자원을 필드 단위로 비교해 실제 변경 시에만 이력 적재**(타입 차이 오탐 처리) + **Bean Validation Group을 사업유형별로 분리**해 런타임에 검증 규칙 분기(폐기는 최소 식별 정보, 신규는 스펙까지)',
            result: '감사 이력 추적·사업유형별 심사 규정을 **도메인 모델·검증 구조로 정확히 반영** · 심사자·실무자 모두 신뢰할 수 있는 설계',
          },
          {
            problem: 'JPA를 사용하면서도 단순 조회는 Data JPA, 복잡한 조건은 Criteria API, 쿼리 자체가 복잡해지면 Native Query를 쓰는 방식이 혼재, **유지보수 시 어떤 방식으로 구현됐는지 파악하는 것 자체가 부담**',
            analyze: '**QueryDSL을 통해 세 가지 방식을 하나로 통일**할 수 있다고 판단해 도입 제안. Criteria API의 낮은 가독성과 Native Query의 런타임 오류 위험성을 해결하고자, **컴파일 단계에서 오류를 잡고 JPA 영속성 컨텍스트를 활용할 수 있는 QueryDSL 선택**. 팀 내 회의적인 의견에 대해 **자산 현황 모듈에 파일럿으로 선행 적용 후 시연하여 설득**, 이후 지사 내 3개 프로젝트로 도입 확대',
            result: '컴파일 단계에서 쿼리 오류 사전 감지 · 팀 전체 쿼리 방식 통일',
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
      '대용량 이미지 3D 시각화 기술 기반 IT 기업으로, 한전 등 공공기관 SI 프로젝트를 수행합니다.',
    careerDescription: '3~4인 SI 기술개발팀 풀스택 개발. 템플릿·공통 모듈·CI/CD 구축으로 납기 환경 표준화·자동화, 설계–개발–운영 전 주기 담당',
    highlights: [
      'Soft Reservation 설계로 DB 제약 기반 중복 신청 방지 구조 구현',
      'Jenkins 기반 배포 자동화 · 배포 빈도 7일 → 1일',
      'Tiles 프레임워크 도입 · 중복 코드 65% → 10% · 페이지 개발 리드타임 2일 → 0.5일',
      'SMS 서비스 DB 이관 · 1,000만 건 무결성 100% 유지 · p95 5초 → 0.9초',
    ],
    resumeParagraphs: [
      '공공기관 SI 프로젝트를 수행하는 IT 기업에서 **비효율을 직접 발견하고 개선하는 방식**으로 일했습니다.',
      'JSP 페이지마다 반복되는 레이아웃 코드를 발견해 **Tiles 프레임워크 도입을 직접 제안**해 중복 코드를 **65%에서 10%로 줄였고**, **Jenkins 배포 파이프라인을 구성**해 배포 주기를 **7일에서 1일로 단축**했습니다.',
      'SMS 서비스 DB 이관 과정에서는 **헤더 집계 쿼리가 페이지마다 자동 실행**되는 문제를 파악해 **p95를 5초에서 0.9초로 개선**했습니다.',
      '행사 신청 플랫폼에서는 **동시 신청이 몰리면 한 사람이 중복 신청할 수 있는 동시성 문제**를 설계로 풀었습니다. Redis 분산락과 DB 비관적 락을 검토한 뒤 **소규모 트래픽에 과한 설계라 판단해 배제**하고, 별도 인프라 없이 DB 임시 예약 상태로 관리하는 **Soft Reservation 방식으로 DB 제약 기반 중복 신청 방지 구조를 설계**했습니다.',
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
            problem: '동시 신청 시 **중복 신청 가능성** 존재',
            analyze: '**Redis 분산락은 별도 인프라 구성 필요**, **DB 비관적 락은 소규모 행사 트래픽에 과도한 설계** → 별도 인프라 없이 **임시 예약 상태를 DB로 관리하는 Soft Reservation** 선택',
            result: '**DB 제약 기반 중복 신청 방지 구조 설계**',
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
            problem: '매 페이지 이동 시 **헤더에서 전체 SMS 카운트 집계 쿼리가 자동 실행**되어 페이지 로딩 지연 반복',
            analyze: '상시 표시가 불필요한 집계 쿼리임을 파악 → **버튼 클릭 시에만 조회**하는 방식으로 변경',
            result: '**p95 5초 → 0.9초** · CPU 사용률 65% → 40% 개선',
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
            problem: '**Spring에서 jsPDF JS 함수를 직접 실행할 수 없어** 앱에서 웹과 동일한 PDF 보고서 생성 불가',
            analyze: '브라우저 렌더링이 필요한 jsPDF 실행을 위해 **FastAPI 크롤링 서버를 별도 구축**해 JS 실행 환경 확보',
            result: '**jsPDF 기반 보고서 생성 API 서비스화** · 모바일/웹 동일 품질 PDF 제공',
          },
          {
            problem: 'JSP 페이지마다 헤더·푸터·네비게이션을 **반복 복붙하는 중복 레이아웃** 문제',
            analyze: 'JSP include 방식은 중복 제거 효과 제한적이며 구조 변경 시 전 페이지 수정 필요 → **레이아웃 템플릿화가 가능한 Tiles 프레임워크 도입** 제안 및 적용',
            result: '**중복 코드 65% → 10%** · **페이지 개발 리드타임 2일 → 0.5일**',
          },
          {
            problem: '수동 배포로 인한 **휴먼에러**와 **7일 배포 주기**가 긴급 패치 대응을 가로막는 문제',
            analyze: 'SI 폐쇄망·온프레미스 환경 특성상 관리형 SaaS CI 사용 불가 → **자체 구축 가능한 Jenkins 선택**해 직접 파이프라인 구성',
            result: '**배포 빈도 7일 → 1일**',
          },
          {
            result: '2022 BIXPO 기술 시연 성공 · 한전 연구과제 최종 평가 통과에 기여',
          },
        ],
      },
    ],
  },
  {
    company: '플랜아이(PlanAI)',
    position: 'Cloud Engineer',
    period: '2026.02 ~ 2026.05',
    duration: '3개월',
    employmentType: '계약직',
    description: `기업·공공기관에 KT Cloud 기반 클라우드 인프라 구축·운영(MSP)을 제공하는 파트너사로, 40개 이상 고객사 인프라를 관리합니다.`,
    careerDescription: 'KT Cloud MSP 파트너사(3개월 계약)에서 WAF 차단 프로세스 AI 반자동화 및 40개 고객사 모니터링 체계 구축 담당',
    highlights: [
      'WAF 유해 IP 차단 요청을 AI 에이전트(MCP)로 반자동화 · 기관별 예외 규칙 인코딩 + 사람 승인 게이트 설계',
      '40개 고객사 Prometheus·Grafana 모니터링 구축 · VictoriaMetrics로 지표 보존 30일 → 1년',
    ],
    resumeParagraphs: [
      'MSP 사업부에서 40개 이상 고객사 인프라 운영을 담당한 **3개월 계약직** 경험으로, 반복 운영 업무를 자동화·표준화하는 데 집중했습니다.',
      'WAF 유해 IP 차단 요청 업무를 **Gmail API·MCP·Claude Code 기반으로 반자동화**했습니다. 기관마다 다른 예외 규칙(특정 국가 IP 차단 금지 등)을 AI 지침에 인코딩하고, AI 오분류를 관측해 **사람 승인 게이트**를 두는 구조로 설계했습니다.',
      'Prometheus·Grafana 기반 모니터링 체계를 구축하고 **VictoriaMetrics로 지표 보존을 30일에서 1년으로** 늘렸습니다.',
    ],
    techStack: ['Gmail API', 'MCP', 'Claude Code', 'Prometheus', 'Grafana', 'VictoriaMetrics'],
    projects: [],
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
      '재직 중 수료한 백엔드 부트캠프. 커머스, 핀테크, O2O 등 다양한 도메인의 현업 멘토님들과 프로젝트 기반으로 코드 품질과 문제 해결 능력을 향상했습니다.',
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
      '고트래픽 시나리오를 가정한 고성능 검색·동시성·유연한 상품 모델링 요구에 대응하는 통합 커머스 프로젝트 설계 및 개발. 5인 팀에서 인프라(AWS ECS·ALB 기반 MSA·오토스케일링), CI/CD, 인증/인가, 회원 도메인을 담당.',
    achievements: [
      {
        problem: '커머스에서 주문·재고·결제 등 도메인별 트래픽 집중 패턴이 달라 모놀리식은 전체를 스케일링해야 하는 비효율 발생',
        analyze: 'K8s는 관리 복잡도가 높고, AWS ECS는 관리형 오케스트레이션으로 Auto-scaling 구성이 단순 → MSA + ECS 조합 선택',
        result: 'AWS ECS 기반 MSA Auto-scaling 인프라 설계 및 구축',
      },
      {
        problem: 'MSA 환경에서 각 서비스마다 인증 로직이 중복되면 변경 시 전 서비스 수정 필요',
        analyze: '세션 방식은 서비스 간 상태 공유가 필요해 수평 확장에 불리 → JWT 무상태 인증 + API Gateway 중앙 인증으로 인증을 한 지점에 집중',
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
    organization: '오케스트로 클라우드 사내',
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
