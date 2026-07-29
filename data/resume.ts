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
  result: string[]     // → 결과 (여러 개면 화살표 여러 줄)
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
  /** 프로젝트 투입 인원 (예: '5인 팀') — 확인된 사실만 기재, 불확실하면 생략 */
  teamSize?: string
  /** 이력서 전용 압축 성과 불릿(한 줄씩). 있으면 resumeContent보다 우선해 렌더링 */
  resumeBullets?: string[]
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
      '멀티벤더 프로비저닝을 Saga 패턴(11개 예외 타입 기반 차등 롤백)으로 설계 · 실패 시 자원 누수 방지',
      '실 장비 대상 통합 테스트로 벤더 스펙 불일치 배포 전 검증 · 테넌트 전체 연결 장애 사전 차단',
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
        teamSize: '5인 팀',
        serviceOverview: '공공기관에 프라이빗 클라우드(AWS 같은 CSP)를 제공하는 플랫폼으로, 기관(테넌트)마다 격리된 네트워크 환경을 자동 프로비저닝합니다. 이 중 방화벽·로드밸런서(L4) 등 네트워크 상품을 담당했습니다.',
        resumeBullets: [
          '운영자가 대신 처리하던 **매니지드 방식**을 **Self-Service API**로 전환해, 최소 1~2시간 걸리던 반복 요청을 즉시 처리로 전환하고 운영자의 수동 처리 업무 해소',
          '이기종 벤더 API로 이뤄지는 다단계 프로비저닝을 **Saga 패턴**(11개 예외 타입 기반 차등 롤백)으로 설계해 실패 시 자원 누수 구조적 방지',
          '실 장비 대상 **통합 테스트**로 벤더 스펙 불일치를 배포 전 검증, 최전방 네트워크 설정 실패로 인한 테넌트 전체 연결 장애 사전 차단',
        ],
        achievements: [
          {
            problem: '고객이 자원을 신청하면 운영자가 직접 자원을 생성해주는 **매니지드 방식**. **반복 처리 요청이 체감상 월 50건 안팎**으로 상당한 비중을 차지하고, 고객이 직접 자원을 제어할 수 없는 **제한적인 CSP** 구조',
            analyze: 'CSP 인프라 특성상 **장비 자체는 이미 멀티테넌트 기능을 갖추고 있어**, 이를 운영자 개입 없이 API로 직접 노출하는 별도 API 서버 신규 개발',
            result: '고객이 직접 자원을 신청하고 즉시 처리되는 구조로 전환, 반복적인 수동 처리 업무 해소',
          },
          {
            problem: '네트워크 환경 프로비저닝이 방화벽·VS·라우트·ACI·OpenStack 등 **서로 다른 벤더 API의 순차 호출**로 이뤄지는데, 외부 시스템이라 **DB 트랜잭션·Spring @Transactional로 묶을 수 없어** 중간 실패 시 자원 누수가 발생하고 재시도 불가',
            analyze: '벤더 호출을 조율하는 **Integration 계층 분리** + 프로비저닝 7단계마다 **실패 지점별 롤백 범위가 다른 11개 예외 타입 체계**(오케스트레이션 기반 **Saga 패턴**)를 제안·구현 (도메인별 구체 롤백은 각 도메인 담당자가 구조 위에서 처리). 이 과정에서 하나의 메서드에 몰려있던 프로비저닝·롤백 로직을 **ControllerAdvice 분리로 131줄에서 32줄까지 정리**',
            result: '**자원 누수 구조적 방지** · 벤더 추가 시 예외 타입·핸들러만 추가하는 확장 구조',
          },
          {
            problem: 'Citrix 장비에서 백엔드는 **{IP}_{PORT}로 식별되는 하나의 Service 객체**인데 여러 로드밸런서가 같은 Service를 공유 바인딩 가능. **여러 가상서버가 안전하게 공유하려면 애플리케이션이 직접 참조 상태를 추적해야 해** 중복 생성·사용 중인 자원의 조기 삭제 위험',
            analyze: '연결 시 **장비에 Service 존재 여부를 조회해 재사용/신규 생성 분기**, 해제 시 **DB에서 동일 IP·Port를 참조하는 다른 활성 바인딩 존재 여부를 쿼리로 확인 후 삭제**하는 방식으로 참조 카운팅 구현',
            result: '**여러 가상서버의 백엔드 공유를 안전하게 구조적으로 보장** · 애플리케이션 레벨에서 참조 상태를 직접 관리해 중복 생성·조기 삭제 방지',
          },
          {
            problem: '네트워크 상품이 테넌트의 최전방 장비를 전부 다루는 구조라 설정 실패 시 테넌트 전체가 연결 불가. **벤더 장비마다 스펙 문서와 실제 동작이 달라**(안랩 방화벽 필드명 오타, Citrix 독자 쿼리 파라미터 인코딩 등) 연동 개발 중 반복적으로 고치고 재배포',
            analyze: '벤더 장비 연동을 검증하는 테스트 문화가 없던 조직에서, **Mock 없이 실제 스테이징 장비를 직접 호출하는 통합 테스트**를 도입 — 비즈니스 로직보다 **요청 포맷이 실제 장비 스펙과 어긋나지 않는지**를 배포 전 검증하는 데 초점',
            result: '**벤더별 스펙 불일치를 배포 전 검증**, 최전방 네트워크 설정 실패로 인한 테넌트 전체 연결 장애를 사전 차단',
          },
        ],
      },
      {
        name: '자산계획 시스템(RPMS) 설계/개발',
        period: '2024.01 ~ 2025.06',
        teamSize: '5인 팀',
        serviceOverview: '국가정보자원관리원의 IT 자산을 계획·관리하는 시스템입니다. 자산 현황이 최신·정확해야 예산심사에서 도입·폐기·교체 결정을 제대로 내릴 수 있어, 수십만 건 규모의 자산을 빠르게 동기화·조회하는 성능과 감사 대응을 위한 변경 이력 추적이 함께 요구됐습니다.',
        resumeBullets: [
          '자산 동기화 배치 **2시간 → 10초**(약 700배) 개선 — HashMap 인메모리 비교 + JDBC Bulk Insert 전환',
          '**diff 기반 변경 이력** 설계로 감사 요구사항을, **사업유형별 Bean Validation Group**으로 심사 규정을 도메인 모델에 반영',
          '혼재된 쿼리 방식을 **QueryDSL**로 통일해 컴파일 단계 오류 감지, 지사 내 3개 프로젝트로 확산',
          'RPMS 히스토리를 유일하게 파악한 담당자로서 **패치 방향·일정·담당자 지정**을 전담, 클라이언트 시스템 교육·대응까지 병행',
        ],
        achievements: [
          {
            problem: '원래 **연 2회 스케줄러 배치**였으나 **버튼 즉시 실행 방식으로 기획 변경** 후, 14만 건 처리에 **2시간**이 걸려 사용자가 버튼을 누르고 2시간 대기해야 하는 사실상 못 쓰는 구조',
            analyze: '기존 데이터와 비교하는 로직이 건마다 조회하는 방식이라 쿼리 과다. **전체 데이터를 한 번에 조회해 HashMap으로 캐싱하고 인메모리에서 비교**하는 방식으로 개선. 또한 **JPA IDENTITY 전략은 INSERT 시점에 DB에서 ID를 즉시 발급받아야 해 Bulk Insert가 불가능한 구조**임을 확인 → **JDBC Template 기반 Bulk Insert로 전환**해 두 병목 해결',
            result: '14만 건 처리 **2시간 → 10초** (약 700배)',
          },
          {
            problem: '공공 예산심사 시스템이라 **감사 이력 추적**이 필요하고, **사업유형(신규·폐기 등)마다 심사 규정(요구 항목)이 다름**. 단순 구현 시 값 변경 없는 저장도 이력이 과다 적재돼 감사 추적성을 저해하고, 모든 유형에 동일 검증을 걸면 폐기 자산에도 불필요한 스펙을 요구해 실무자 혼란',
            analyze: '**7종 자원을 필드 단위로 비교해 실제 변경 시에만 이력 적재**(타입 차이 오탐 처리) + **Bean Validation Group을 사업유형별로 분리**해 런타임에 검증 규칙 분기(폐기는 최소 식별 정보, 신규는 스펙까지)',
            result: '감사 이력 추적·사업유형별 심사 규정을 **도메인 모델·검증 구조로 정확히 반영** · 심사자·실무자 모두 신뢰할 수 있는 설계',
          },
          {
            problem: 'JPA를 사용하면서도 단순 조회는 Data JPA, 복잡한 조건은 Criteria API, 쿼리 자체가 복잡해지면 Native Query를 쓰는 방식이 혼재, **유지보수 시 어떤 방식으로 구현됐는지 파악하는 것 자체가 부담**',
            analyze: '**QueryDSL을 통해 세 가지 방식을 하나로 통일**할 수 있다고 판단해 도입 제안. Criteria API의 낮은 가독성과 Native Query의 런타임 오류 위험성을 해결하고자, **컴파일 단계에서 오류를 잡고 JPA 영속성 컨텍스트를 활용할 수 있는 QueryDSL 선택**. 팀 내 회의적인 의견에 대해 **자산 현황 모듈에 파일럿으로 선행 적용 후 시연하여 설득**, 이후 지사 내 3개 프로젝트로 도입 확대',
            result: '컴파일 단계에서 쿼리 오류 사전 감지 · 지사 내 3개 프로젝트로 쿼리 방식 통일 확산',
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
    techStack: ['eGovFramework', 'MyBatis', 'MySQL', 'JSP', 'jQuery', 'FastAPI', 'Docker', 'Jenkins', 'SVN'],
    projects: [
      {
        name: '동구청 과학행사 신청 플랫폼',
        period: '2023.07 ~ 2023.10',
        resumeBullets: [
          'eGovFramework 기반 3개월 내 풀스택 개발 및 안정적 런칭',
          '동시 신청 시 중복 가능성을 Redis 분산락·DB 비관적 락 대신 **Soft Reservation**(DB 제약 기반 임시 예약)으로 설계해 방지',
          'NICE 본인인증 + OAuth 2.0 SNS 로그인 구현, 회원관리 표준화',
          '행사 등록·참가자 관리·통계 조회를 통합한 어드민 페이지 구축',
        ],
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
        resumeBullets: [
          'OS 설치 → 데이터 마이그레이션 → 장비 납품까지 전 과정 일괄 수행, **1,000만 건 대용량 데이터 무결성 100% 유지**',
          '페이지 이동마다 자동 실행되던 SMS 카운트 집계 쿼리를 버튼 클릭 시 조회로 변경해 **p95 5초 → 0.9초** 개선',
          '노후 장비 교체로 물리적 장애 포인트 제거, 이관 후 다운타임 0건',
        ],
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
        resumeBullets: [
          'GIS 기반 실시간 모니터링 대시보드 및 메타데이터 관리 백엔드 개발',
          'Spring에서 실행 불가능한 jsPDF를 위해 **FastAPI 크롤링 서버**를 별도 구축해 모바일/웹 동일 품질 PDF 보고서 제공',
          '반복되는 JSP 레이아웃 중복을 **Tiles 프레임워크**로 해결해 중복 코드 65% → 10%, 리드타임 2일 → 0.5일 단축',
          '수동 배포의 휴먼에러·긴 배포 주기를 **Jenkins 파이프라인**으로 해결해 배포 빈도 7일 → 1일 단축',
          '2022 BIXPO 기술 시연 성공, 한전 연구과제 최종 평가 통과 기여',
        ],
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
    techStack: ['Gmail API', 'MCP', 'Claude Code', 'Prometheus', 'Grafana', 'VictoriaMetrics'],
    projects: [
      {
        name: 'WAF 유해 IP 차단 프로세스 AI 반자동화',
        period: '2026.02 ~ 2026.05',
        serviceOverview: 'WAF에서 유해 의심 IP 이벤트가 발생하면 관리 업체에 차단 요청 메일을 보내야 하는 업무로, 기존에는 담당자가 메일을 일일이 확인하고 수동으로 작성·발송했습니다.',
        resumeBullets: [
          '기관마다 다른 예외 규칙(국가별 차단 금지 등)을 **Gmail API·MCP + Claude Code skill**에 인코딩해 메일 확인·분류·작성 자동화',
          'AI의 오분류·오독 실패 모드를 관측해 **임시저장 → 사람 검토 → 발송**하는 승인 게이트 설계, 단독 구축 후 팀 전파',
        ],
        achievements: [
          {
            problem: '기관마다 예외 규칙(특정 국가 IP 차단 금지, 회신 시 특정 담당자 참조 필요, 담당 업체 상이 등)이 달라 **단순 자동화가 불가능**한 구조',
            analyze: 'Gmail API·MCP 서버를 구성하고 **Claude Code skill에 기관별 예외 규칙을 인코딩**해 이벤트 메일 파싱·유해 IP 목록 추출·기관별 차단 요청 회신 작성을 자동화',
            result: '반복적인 메일 확인·분류·작성 자동화',
          },
          {
            problem: '초기 AI가 담당 업체를 잘못 분류하거나 메일 내용을 잘못 읽어 회신을 잘못 작성하는 **오분류·오독 실패 모드** 발생',
            analyze: '완전 자동 발송 대신 **임시저장 → 사람 검토 → 발송**하는 승인 게이트를 두는 구조로 설계해 보안 사고와 AI 오발송을 동시에 방지',
            result: '관측된 AI 실패 모드를 사람 승인 게이트로 차단 · **단독 구축 후 팀 전파**',
          },
        ],
      },
      {
        name: 'MSP 고객사 모니터링 체계 구축',
        period: '2026.02 ~ 2026.05',
        serviceOverview: 'MSP로 관리하는 40개 고객사의 클라우드 인프라에 통합 모니터링 체계가 없어, 장애 감지와 월간 운영 보고서를 수작업으로 처리하던 환경이었습니다.',
        resumeBullets: [
          '**Prometheus + Grafana**로 40개 고객사 통합 모니터링 구축, **VictoriaMetrics** 도입으로 지표 보존 30일 → 1년',
          'CMP 개발팀과 협의해 기존에 미활용 상태였던 **Prometheus 연동 보고서 기능**을 활성화, 월간 보고서 작성 시간 2시간 → 10분',
        ],
        achievements: [
          {
            problem: '기존 KT Cloud Watch는 기본 지표를 **7일만 보존**하고 알람은 메일로만 왔으며, 40개 고객사를 한눈에 보는 통합 관제가 없어 **장애 사후 원인 추적이 불가능**',
            analyze: '시각화·알람 연동을 단일 도구로 처리할 수 있는 **Grafana + Prometheus**를 선택. 1년치 보존을 위해 **Thanos 등 별도 장기 저장 방식을 검토**한 뒤, 인프라 구성 변경 없이 가장 간단하게 도입 가능한 **VictoriaMetrics로 전환**',
            result: '40개 고객사 전체 구축 · 지표 보존 기간 **30일 → 1년**',
          },
          {
            problem: '월간 운영 보고서도 서버마다 직접 접속해 리소스를 확인하는 방식이라 **서버 20개 기준 2시간 이상** 소요',
            analyze: '**CMP 개발팀과 사전 협의한 Prometheus 연동**을 통해, 기존에 구현돼 있었으나 연동 환경이 없어 미활용되던 보고서 자동 생성 기능을 활성화',
            result: '월간 보고서 작성 시간 **2시간 → 10분**',
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
