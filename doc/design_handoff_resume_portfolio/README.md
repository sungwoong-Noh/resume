# Handoff: 이력서(문서형) + 포트폴리오(케이스 스터디)

대상 레포: `sungwoong-Noh/resume` (main) — Next.js + Tailwind, 데이터는 `data/resume.ts`.

## Overview
- **이력서 (Resume A – 문서형)**: 채용 담당자와 EM/CTO가 함께 보는 1단 문서형 웹 이력서. 링크 공유, PDF 저장, 다크 모드, 상세/타임라인 보기 전환, 기술 스택 필터.
- **포트폴리오 (케이스 스터디)**: 이력서와 같은 톤. 목록 → 상세 2단계. 코드는 넣지 않고, 대안 비교 · 흐름 다이어그램 · 측정 근거로 사고 과정을 보여줌.

## About the Design Files
이 폴더의 `.dc.html` 파일은 **HTML로 만든 디자인 레퍼런스**입니다 — 의도한 모양과 동작을 보여주는 프로토타입이지 그대로 옮길 프로덕션 코드가 아닙니다. 기존 레포(Next.js App Router + Tailwind)의 패턴으로 **재구현**하세요. 브라우저에서 바로 열립니다(`support.js` 필요, 같은 폴더 유지).

`Resume B - 엔지니어 로그형.dc.html`은 비교용 대안 시안입니다. 구현 대상은 **A + 포트폴리오**입니다.

## Fidelity
**High-fidelity.** 색상·타이포·간격·인터랙션 모두 최종값. 아래 토큰을 Tailwind theme / CSS 변수로 옮겨 픽셀 단위로 맞춰주세요.

---

## Design Tokens

### Colors (CSS 변수로 구현, `html[data-theme="dark"]`로 전환)
| 토큰 | Light | Dark | 용도 |
|---|---|---|---|
| `--bg` | `#FAF9F6` | `#141412` | 페이지 배경 |
| `--surface` | `#FFFFFF` | `#1C1B19` | 펼친 패널, 다이어그램 박스 |
| `--ink` | `#1C1B19` | `#EDEBE6` | 제목, 강조(굵게) 텍스트 |
| `--ink2` | `#46443F` | `#C2BFB8` | 본문 |
| `--ink3` | `#6F6C65` | `#8F8C85` | 메타, 라벨, 보조 |
| `--line` | `#E4E1DA` | `#302E2B` | 구분선, 테두리 |
| `--accent` | `oklch(0.5 0.13 255)` | `oklch(0.76 0.11 255)` | 수치, 링크, 선택 상태 |
| `--accentSoft` | `oklch(0.95 0.025 255)` | `oklch(0.3 0.05 255)` | (예비) |
| `--accentInk` | `#FFFFFF` | `#141412` | accent 배경 위 텍스트 |

oklch 미지원 환경 fallback: light accent ≈ `#2F5FA8`, dark accent ≈ `#8FB4F0`.

### Typography
- 본문: **Pretendard Variable** (`https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css`) → 실제 구현은 `next/font/local` 권장
- 모노(라벨·기간·메타): **JetBrains Mono** 400/500 (`next/font/google`)
- 전역: `word-break: keep-all`, `-webkit-font-smoothing: antialiased`, 긴 문단 `text-wrap: pretty`

| 역할 | size / weight / line-height / letter-spacing |
|---|---|
| 이름(H1) | 44px / 700 / 1.1 / -0.02em |
| 케이스 제목(H1, 상세) | 40px / 700 / 1.2 / -0.02em, `text-wrap: balance` |
| 영문 이름 | 18px / 400 / ink3 |
| 태그라인 | 19px / 500 / 1.5 / ink2 |
| 섹션 제목(H2, 좌측 열) | 15px / 700 |
| 회사명(H3) | 20px / 700 / -0.01em |
| 프로젝트명(H4) | 16px / 650 / 1.45 |
| 본문 소개 | 15.5px / 400 / 1.75 / ink2 |
| 불릿 | 14.5px / 1.7 / ink2, `**강조**`는 650 + ink |
| 설명·개요 | 13.5px / 1.65 / ink3 |
| 수치(after) | 26px / 700 / -0.02em / accent |
| 수치(before) | 14px / ink3, 뒤에 ` →` |
| 모노 라벨 | 11.5–13px JetBrains Mono / ink3 (상단 eyebrow는 13px accent, 0.02em) |

### Spacing / Radius
- 컨테이너: `max-width: 880px`, 좌우 패딩 32px, 상단 72px(상세 64px), 하단 96px
- 섹션 간 gap 56px. 각 섹션: `border-top: 1px solid var(--line)`, `padding-top: 24px`
- **2열 섹션 패턴**: `flex-wrap: wrap; gap: 16px 32px` — 좌측 H2 `flex: 0 0 140px`, 우측 `flex: 1 1 520px; min-width: 0` (좁은 화면에서 자동으로 1열)
- 프로젝트 사이: `border-top: 1px dashed var(--line)`, padding-top 18px
- Radius: 버튼 6px, 칩 4px, 배지 3px, 패널 6px
- 그림자 없음. 카드형 박스 최소화 — 선과 여백으로 구분하는 것이 이 톤의 핵심

### 강조 표기
데이터 문자열의 `**텍스트**` → `<strong>` (weight 650, color ink). 레포의 기존 방식 유지.

---

## Screens / Views

### 공통: 상단 툴바 (sticky, 인쇄 시 숨김)
- `position: sticky; top: 0; z-index: 10; background: var(--bg); border-bottom: 1px solid var(--line)`
- 내부 880px, padding 10px 32px, space-between, wrap
- 좌: 모노 12px ink3 (`resume / Sungwoong Noh`, 포트폴리오는 `portfolio / …` + `이력서 보기 ↗` 링크 13px ink2)
- 우 버튼(13px, padding 6px 12px, radius 6px):
  - 보기 전환 세그먼트(이력서만): `상세` / `타임라인` — 테두리 그룹, 선택 시 bg ink / fg bg
  - `다크 모드` ↔ `라이트 모드`: 투명 bg, line 테두리, ink2
  - `PDF 저장`: bg ink, fg bg, 600

### 1. 이력서 — 헤더
- eyebrow: `Backend Engineer · 5년차` (모노 13px accent)
- 이름 `노성웅` + 영문 `Sungwoong Noh` (baseline 정렬, gap 14px)
- 태그라인 → 소개 문단 4개 (max-width 680px, 문단 gap 6px)
- 연락처: 가로 wrap, gap 8px 22px. 각 항목 = 모노 라벨(11.5px ink3) + 링크(13.5px ink)

### 2. 이력서 — 핵심 성과
- 2열 패턴. 우측 `grid repeat(auto-fit, minmax(150px,1fr)) gap 20px`
- 각 항목: `before →`(14px ink3) + `after`(26px accent) / 라벨 13px ink2
- 데이터: 2시간→10초(자산 동기화 배치·14만 건), 7일→1일(배포 주기), 5초→0.9초(p95·SMS), 30일→1년(지표 보존·40개 고객사)

### 3. 이력서 — 기술 스택 (필터)
- 좌측 H2 아래 보조문구 `클릭하면 관련 프로젝트만 강조` (12px ink3, 인쇄 숨김)
- 카테고리 행: 모노 라벨 `flex: 0 0 108px` + 칩 wrap(gap 6px)
- 칩: `border 1px line; radius 4px; padding 4px 9px; 13px`. 숙련도는 **글자 굵기/색**으로만 표현
  - expert: 650 / ink · proficient: 450 / ink2 · familiar: 400 / ink3
  - 선택: bg accent, border accent, fg accentInk
- 범례 + 필터 활성 시 `‘Spring Boot’ 관련 프로젝트 N개` (accent) + `해제` 링크

### 4. 이력서 — 경력 (상세 보기)
- 회사 정렬: 시작일 내림차순
- 회사 블록: 회사명 H3 + 계약직 배지(11.5px, line 테두리) / 우측 모노 기간 `2023.10 ~ 2026.02 · 2년 4개월` / 직책 14px 500 ink2 / 회사 설명 13.5px ink3
- 프로젝트: 이름 H4 / 모노 메타 `기간 · 팀 규모` / 개요 / 불릿(`—` 마커, ink3)
- **문제·해결·성과 토글**: 링크형 버튼 13px 600 accent — `문제 · 해결 · 성과 보기 (N) ↓` / `… 접기 ↑`
  - 펼침 패널: bg surface, line 테두리, radius 6px, padding 18px 20px
  - 각 항목: 제목 14px 650 → 3행 (`문제` ink3 / `해결` ink / `성과` accent, 라벨 폭 32px, 600) — 행 사이 구분선
- 필터와 무관한 프로젝트: `opacity: 0.25`, `transition: opacity .2s`

### 5. 이력서 — 경력 (타임라인 보기)
- 상세 보기의 경력 섹션을 대체 (다른 섹션 유지)
- 좌측 라벨 열 200px + 우측 트랙(flex:1)
- 상단 연도 축: 모노 11px ink3, 연도 눈금 세로선 1px line
- 회사 행: 14px 650 ink, 막대 높이 10px, bg ink. 회사 사이 구분선
- 프로젝트 행: 12.5px ink2, 들여쓰기 12px, 막대 6px, bg accent, 필터 비해당 opacity 0.2
- 막대 위치 = (시작월 − 최소월) / 전체월. `title`로 기간 툴팁
- 라벨 말줄임(`nowrap; ellipsis`)

### 6. 이력서 — 개인·교육 프로젝트, 학력·자격, 푸터
- 개인 프로젝트: 이름 + 우측 기간 / `조직 — 설명` / 불릿 / 모노 링크 `… ↗`. 필터 적용 대상
- 학력·자격: 시작일 내림차순, 모노 기간 `flex: 0 0 150px` + 제목 14.5px 600 / 부가 13px ink3
- 푸터: 이름 · 직함 / 이메일 링크

### 7. 포트폴리오 — 목록
- eyebrow `Backend Engineer · 케이스 스터디 3편` → H1 `문제를 푼 과정` → 소개 19px 500 ink2
- 2열 패턴(좌 `케이스`). 각 케이스 = 전체가 버튼, 하단 dashed 구분선, padding 22px 0
  - 좌(flex 1 1 360px): 모노 `01 · 조직 · 기간` / 제목 19px 700 / 요약 마지막 줄 14.5px / `케이스 읽기 →` 13px 600 accent
  - 우(150px): 대표 수치(before → after) + 라벨

### 8. 포트폴리오 — 케이스 상세
순서 고정, 모두 2열 섹션 패턴:
1. **헤더**: `← 전체 케이스` / eyebrow `케이스 01 · 조직` / H1 / 메타 3쌍(기간·역할·기술, 모노 라벨 + 값)
2. **요약**: 3줄 불릿 + 우측 대표 수치
3. **배경과 제약**: key(모노 12px, 100px) / value(14.5px ink2) 행
4. **문제**: 문단 15.5px/1.75 + `측정 기준` 한 줄
5. **대안 비교**: 대안마다 dashed 구분 행 — 이름 15px 650 + 배지(`선택`: bg accent, fg accentInk / `제외`: line 테두리, ink3) → `장점` / `제외 이유`(선택안은 `트레이드오프`) 2행, 라벨 72px
6. **설계**: 좌측 보조문구(흐름 제목). 우측 surface 패널, 세로 단계 리스트 — 22px 원형 번호(모노 11px) + 세로 연결선 1px line, 마지막 단계만 accent 채움. 단계명 14.5px 600 + 노트 13px ink3
7. **결과**: before→after 그리드(minmax 180px) + 측정조건 모노 11.5px / 결과 불릿
8. **회고**: 데이터 있으면 불릿, 없으면 dashed 박스 `직접 작성할 자리` (인쇄 숨김) / 외부 링크
9. **이전/다음 케이스** 네비 (인쇄 숨김)

**코드 스니펫은 넣지 않습니다** (의도된 결정 — 맥락 없는 코드 대신 대안 비교·다이어그램·측정 근거로 대체).

---

## Interactions & Behavior
- **다크 모드**: `html[data-theme]` 토글. `localStorage['resume-a-theme']`에 저장 → 이력서·포트폴리오 공유. 기본 light. (구현 시 `next-themes` 등 사용 가능, FOUC 방지 스크립트 권장)
- **PDF 저장**: `window.print()`. `@media print`에서 항상 light 토큰 강제, `[data-noprint]`(툴바·토글·필터 안내·회고 placeholder·네비) 숨김, 블록 단위 `break-inside: avoid`. 문제·해결·성과는 **펼친 것만** 인쇄
- **기술 스택 필터**: 단일 선택, 같은 칩 재클릭 시 해제. 매칭 = 프로젝트 `tags` 배열에 스킬 이름 포함. 필터는 경력 상세·타임라인·개인 프로젝트 모두에 적용, 매칭 개수 표시
- **P·S·R 토글**: 프로젝트별 독립 상태. 기본 접힘
- **보기 전환**: 상세 ↔ 타임라인, 경력 섹션만 교체
- **포트폴리오 라우팅**: 프로토타입은 `#case-id` 해시. 구현은 `/portfolio`, `/portfolio/[id]` (정적 생성) 권장. 이력서 프로젝트에서 `/portfolio/batch-700x` 식으로 딥링크 가능하게
- **호버**: 링크 underline. 그 외 별도 hover 효과 없음 (톤 유지)
- **반응형**: 모든 2열 섹션은 flex-wrap으로 좁은 폭에서 1열. 고정 높이 없음

## State
- `theme: 'light' | 'dark'` (persist)
- `view: 'detail' | 'timeline'`
- `filter: string | null`
- `open: Record<projectKey, boolean>`
- 포트폴리오: 현재 케이스 id (라우트 파라미터)

## 데이터 변경 (data/resume.ts)
기존 구조 유지 + 추가:
- `experiences[].projects[].tags: string[]` — 기술 스택 필터용. **skills 항목 이름과 정확히 일치**해야 함. 초안은 `resume-data.js`에 있음(일부 추정 — 본인 확인 필요)
- `sideProjects[].tags: string[]`
- `metrics: { before, after, label }[]` — 핵심 성과 4개
- skills는 `{ name, level: 'expert'|'proficient'|'familiar' }`
- 레포에 있던 핵심 가치/일하는 방식/사내 스터디는 이 디자인에서 **제외**

신규 `data/portfolio.ts` — `portfolio-data.js` 스키마 그대로:
```ts
type Case = {
  id: string; title: string; org: string; period: string; role: string;
  tags: string[];
  metric: { before: string; after: string; label: string };
  summary: [string, string, string];          // **강조** 지원
  context: [key: string, value: string][];
  problem: string; measure: string;
  alternatives: { name: string; pros: string; cons: string; chosen: boolean }[];
  flowTitle: string; flow: { label: string; note: string }[];
  results: { label: string; before: string; after: string; note: string }[];
  outcomes: string[];
  retro: string[];                              // 비어 있으면 placeholder (인쇄 제외)
  links: { label: string; href: string }[];
};
```
⚠ 대안 비교 내용(특히 Saga, TechGate의 Redis 제외 이유)과 회고는 작성자 검수/작성 필요.

## Assets
이미지·아이콘 없음. 필요한 외부 리소스는 폰트 2종뿐:
- Pretendard Variable (OFL) — jsDelivr CDN 또는 `next/font/local`
- JetBrains Mono (OFL) — Google Fonts / `next/font/google`
화살표·대시는 텍스트 문자(`→ ↗ ← —`)를 사용.

## Files
- `Resume A - 문서형.dc.html` — 이력서 (구현 대상)
- `Portfolio - 케이스 스터디.dc.html` — 포트폴리오 목록/상세 (구현 대상)
- `Resume B - 엔지니어 로그형.dc.html` — 대안 시안 (참고용)
- `resume-data.js` — 이력서 데이터 + tags 초안
- `portfolio-data.js` — 케이스 스터디 3편 데이터
- `support.js` — HTML 레퍼런스 실행용 런타임 (구현에 불필요)
