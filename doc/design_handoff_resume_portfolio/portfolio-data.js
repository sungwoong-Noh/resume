// 포트폴리오 케이스 스터디 데이터. **굵게** 지원. retro가 비어 있으면 '직접 작성' 자리로 표시됩니다.
window.PORTFOLIO_DATA = {
  owner: { name: '노성웅', nameEn: 'Sungwoong Noh', title: 'Backend Engineer', email: 'asdz453@gmail.com' },
  intro: '병목을 어떻게 찾고, 어떤 대안을 비교해 무엇을 선택했는지에 집중한 기록입니다.',
  cases: [
    {
      id: 'batch-700x',
      title: '자산 동기화 배치 2시간 → 10초',
      org: '오케스트로 클라우드 · RPMS', period: '2024.01 ~ 2025.06', role: '백엔드 개발 · 5인 팀',
      tags: ['Java', 'Spring Boot', 'JPA', 'JDBC Template', 'Tibero'],
      metric: { before: '2시간', after: '10초', label: '14만 건 동기화' },
      summary: [
        '연 2회 돌던 배치가 **버튼 즉시 실행**으로 기획 변경되며 2시간 처리 시간이 문제가 됨',
        '건별 조회를 **전체 조회 + HashMap 인메모리 비교**로, 저장을 **JDBC Bulk Insert**로 전환',
        '14만 건 기준 **2시간 → 10초 (약 700배)**'
      ],
      context: [
        ['도메인', '국가정보자원관리원 IT 자산 계획·관리 시스템'],
        ['데이터 규모', '동기화 대상 자산 약 14만 건'],
        ['요구 변화', '연 2회 배치 → 사용자가 버튼으로 즉시 실행'],
        ['추가 제약', '감사 대응을 위해 변경 이력 추적 필요']
      ],
      problem: '자산 1건마다 기존 데이터를 조회하고 저장하는 구조라 **DB 왕복이 건수만큼** 발생했습니다. 배치일 때는 문제가 드러나지 않았지만, 즉시 실행 기능에서는 사실상 사용할 수 없는 수준이었습니다.',
      measure: '14만 건 전체 동기화 1회 소요 시간',
      alternatives: [
        { name: '건별 처리 유지 + 인덱스 튜닝', pros: '코드 변경 최소', cons: '왕복 횟수 자체가 병목이라 개선 폭이 제한적', chosen: false },
        { name: 'JPA saveAll 배치 저장', pros: '기존 엔티티·영속성 구조 유지', cons: '**IDENTITY 전략에서는 Hibernate가 Batch Insert를 수행하지 못함**', chosen: false },
        { name: '전체 조회 + HashMap 비교 + JDBC Bulk Insert', pros: '조회·저장 모두 왕복 횟수를 상수 수준으로 축소', cons: '저장 경로가 JPA 밖으로 분리됨 → 이력 적재 로직 별도 관리', chosen: true }
      ],
      flowTitle: '개선 후 동기화 흐름',
      flow: [
        { label: '외부 자산 전체 조회', note: '1회 조회' },
        { label: '기존 자산 전체 조회', note: 'HashMap 적재' },
        { label: '키 기준 인메모리 비교', note: '신규 · 변경 · 삭제 분류' },
        { label: 'JDBC Bulk Insert / Update', note: '분류별 일괄 저장' },
        { label: '변경 필드 diff 이력 적재', note: '실제 변경 시에만' }
      ],
      results: [
        { label: '동기화 소요 시간', before: '2시간', after: '10초', note: '14만 건 기준' }
      ],
      outcomes: ['배치 전용이던 동기화를 **사용자 즉시 실행 기능**으로 제공', '7종 자원 필드 단위 diff로 **이력 과다 적재 방지**'],
      retro: [],
      links: []
    },
    {
      id: 'saga-provisioning',
      title: '이기종 벤더 다단계 프로비저닝의 실패 처리',
      org: '오케스트로 클라우드 · PPP Cloud', period: '2024.08 ~ 2025.06', role: '네트워크 상품 백엔드 · 5인 팀',
      tags: ['Java', 'Spring Boot', 'Saga', 'Kubernetes', 'OpenStack'],
      metric: { before: '131줄', after: '32줄', label: '프로비저닝·롤백 로직' },
      summary: [
        '방화벽·로드밸런서 등 **서로 다른 벤더 API를 순차 호출**해 테넌트 네트워크를 구성',
        '외부 시스템이라 트랜잭션으로 묶을 수 없어, **단계별 롤백 범위가 다른 11개 예외 타입**으로 Saga 설계',
        '**자원 누수를 구조적으로 방지**하고 벤더 추가 시 예외 타입·핸들러만 추가하는 구조로 정리'
      ],
      context: [
        ['도메인', '공공기관 대상 CSP — 테넌트별 격리 네트워크 자동 프로비저닝'],
        ['연동 대상', '방화벽 · VS · 라우트 · ACI · OpenStack'],
        ['실패 영향', '설정이 어긋나면 테넌트 전체 연결 불가'],
        ['기존 방식', '운영자가 요청을 대신 처리하는 매니지드 방식 (건당 1~2시간)']
      ],
      problem: '7단계 프로비저닝 중 어느 단계에서 실패하든 **앞 단계에서 만든 외부 자원이 남는** 구조였습니다. @Transactional은 외부 벤더 API에 적용되지 않아 재시도도 불가능했습니다.',
      measure: '실패 시 잔여 자원 여부 · 롤백 로직 코드량',
      alternatives: [
        { name: '운영자 매니지드 방식 유지', pros: '실패 시 사람이 직접 정리', cons: '반복 요청마다 1~2시간 · 고객이 자원을 직접 제어 불가', chosen: false },
        { name: '단일 예외 처리 후 전체 롤백', pros: '구현이 단순', cons: '실패 단계와 무관하게 동일 처리 → 이미 없는 자원 삭제 시도, 롤백 범위 오류', chosen: false },
        { name: '단계별 예외 타입 기반 오케스트레이션 Saga', pros: '실패 지점마다 롤백 범위를 명시적으로 결정', cons: '예외 타입 체계 설계·관리 비용', chosen: true }
      ],
      flowTitle: '실패 처리 구조',
      flow: [
        { label: 'Self-Service API 요청', note: '테넌트가 직접 신청' },
        { label: 'Integration 계층', note: '벤더별 연동 분리' },
        { label: '7단계 순차 프로비저닝', note: '단계마다 고유 예외 타입' },
        { label: 'ControllerAdvice', note: '예외 타입 → 롤백 범위 결정' },
        { label: '보상 처리', note: '생성된 자원만 역순 정리' }
      ],
      results: [
        { label: '프로비저닝·롤백 로직', before: '131줄', after: '32줄', note: 'ControllerAdvice 분리' },
        { label: '반복 네트워크 요청 처리', before: '1~2시간', after: '즉시', note: 'Self-Service 전환' }
      ],
      outcomes: ['실패 시 **자원 누수 구조적 방지**', '실 장비 대상 **통합 테스트**로 벤더 스펙 불일치를 배포 전 검증'],
      retro: [],
      links: []
    },
    {
      id: 'techgate-search',
      title: '1,000만 건 상품 검색, 저장소별 벤치마크',
      org: '개인 프로젝트 · TechGate', period: '2025.09 ~ 2025.10', role: '설계 · 구현 · 벤치마크',
      tags: ['Spring Boot', 'Elasticsearch', 'Redis', 'MariaDB', 'k6'],
      metric: { before: '60,000ms', after: '130ms', label: '검색 p95' },
      summary: [
        '10M 상품 데이터에서 **RDB · Redis · Elasticsearch**를 같은 조건으로 벤치마크',
        'k6 측정 결과를 근거로 **Elasticsearch** 도입',
        '검색 p95 **60,000ms → 130ms**, Nori·fuzziness로 오타·복합어 대응 자동완성 구현'
      ],
      context: [
        ['데이터 규모', '상품 1,000만 건'],
        ['목표', '저장소별 검색 성능을 같은 조건에서 비교'],
        ['측정 도구', 'k6 부하 테스트 · Prometheus / Grafana'],
        ['품질 요구', '한국어 복합어 · 오타 검색']
      ],
      problem: 'RDB LIKE 검색은 데이터가 늘수록 **풀 스캔**이 되어 p95가 60초 수준까지 올라갔습니다. 한국어 복합어와 오타도 처리하지 못했습니다.',
      measure: 'k6 부하 테스트 p95 응답 시간',
      alternatives: [
        { name: 'RDB (LIKE / Full-text)', pros: '추가 인프라 없음', cons: '대용량에서 풀 스캔 · 한국어 형태소 처리 한계', chosen: false },
        { name: 'Redis', pros: '접두어 자동완성에 빠름', cons: '전문 검색·관련도 정렬에 부적합', chosen: false },
        { name: 'Elasticsearch', pros: '역색인 · Nori 형태소 분석 · 관련도 스코어링', cons: '클러스터 운영 비용 · 색인 동기화 필요', chosen: true }
      ],
      flowTitle: '검색 질의 처리',
      flow: [
        { label: '검색 API', note: 'Spring Boot' },
        { label: 'Nori 형태소 분석', note: '복합어 분해' },
        { label: 'fuzziness', note: '오타 보정' },
        { label: '필드 부스팅', note: '관련도 정렬' },
        { label: '결과 · 자동완성', note: '' }
      ],
      results: [
        { label: '검색 p95', before: '60,000ms', after: '130ms', note: 'k6 · 10M 건' }
      ],
      outcomes: ['측정값을 근거로 저장소를 선택하는 **벤치마크 기반 의사결정** 과정 기록'],
      retro: [],
      links: [{ label: 'github.com/Tech-Gate-Step/search-system-evolution', href: 'https://github.com/Tech-Gate-Step/search-system-evolution' }]
    }
  ]
};
