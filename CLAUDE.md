# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Vercel에 배포되는 개인 이력서 포트폴리오 (Next.js 14 App Router + TypeScript + Tailwind CSS).
두 가지 버전의 이력서가 존재하며 하나의 데이터 파일에서 공통으로 관리된다.

## 이력서 버전

| URL | 파일 | 특징 |
|-----|------|------|
| `/` | `app/page.tsx` | 다크 테마, 수치 강조, 화려한 UI, 인터랙티브 |

## 데이터 중앙 관리

**`data/resume.ts`** 에서 모든 이력서 데이터를 관리한다.
**내용 수정은 이 파일만 수정하면 된다.**

```
data/resume.ts
  └── profile          // 기본 정보 (이름, 이메일, GitHub 등)
  └── coreValues       // 핵심 가치관 3가지
  └── workingStyles    // 업무 스타일
  └── achievements     // 주요 수치 성과
  └── experiences      // 경력 및 프로젝트 상세
  └── skillCategories  // 기술 스택 (카테고리 + 레벨)
  └── sideProjects     // 사이드 프로젝트 / 대외활동
```

## 개발 명령어

```bash
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
```

## 배포 (Vercel)

### ⚠️ 루트 디렉토리 설정
**저장소 루트 디렉토리를 그대로 유지하세요.** `app/` 디렉토리로 변경하면 안 됩니다.
- `app/` 는 Next.js App Router 디렉토리일 뿐, 프로젝트 루트가 아님
- Vercel은 `package.json`과 `next.config.js` 위치로 프로젝트 루트를 자동 감지

### Vercel CLI로 배포
```bash
npm i -g vercel          # Vercel CLI 설치 (최초 1회)
vercel deploy --prod     # 프로덕션 배포
```

### GitHub 연동 배포 (권장)
1. GitHub에 저장소 push
2. https://vercel.com → "New Project" 클릭
3. GitHub 리포지토리 선택 → Import
4. **Root Directory: 자동 감지** (수정하지 않음)
5. Deploy 클릭

### vercel.json 설명
현재 설정:
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```
이 설정이 맞으므로 수정 불필요합니다.

## 프로젝트 구조

```
resume/
├── app/
│   ├── page.tsx           # 이력서 페이지 (다크 테마, 화려한 UI)
│   ├── layout.tsx         # 루트 레이아웃 + SEO 메타데이터
│   └── globals.css        # 전역 스타일 (Tailwind + 커스텀)
├── data/
│   └── resume.ts          # 이력서 데이터 + 타입 정의 (단일 진실 소스)
├── components/            # 재사용 컴포넌트 (추후 분리 시 활용)
├── public/                # 정적 자산 (이미지, PDF 등)
├── tailwind.config.js
├── tsconfig.json          # @/* path alias 설정됨
└── vercel.json
```

## 기술 스택

| 영역 | 기술 |
|------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| 폰트 | Google Fonts (Inter) |
| 배포 | Vercel |

## 스킬 레벨 정의 (data/resume.ts)

`skillCategories` 배열의 각 스킬에 `level` 속성으로 숙련도를 정의한다.

| level | 표시 | 의미 |
|-------|------|------|
| `expert` | `[주력]` | 업무에서 적극 활용, 깊은 이해 보유 |
| `proficient` | `[활용]` | 실무 프로젝트에서 사용 |
| `familiar` | `[경험]` | 경험 보유, 필요 시 활용 가능 |
| (없음) | — | 단순 나열 |

## 주요 수정 시나리오

### 이력서 내용 수정
`data/resume.ts` 수정 → 페이지에 자동 반영

### 레이아웃 변경
`app/page.tsx` 수정

### PDF 출력 스타일 조정
`app/globals.css` → `@media print` 블록 수정

### SEO/메타데이터 변경
`app/layout.tsx` → `metadata` 객체 수정

## 배포 후 확인 사항

- `/` 페이지 정상 렌더링 확인
- 모바일 환경 레이아웃 확인
- 인쇄(Ctrl+P) 시 레이아웃 확인
