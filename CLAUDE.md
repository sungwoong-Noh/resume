# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요
Vercel에 배포되는 개인 이력서 포트폴리오 프로젝트. Next.js 기반의 정적 사이트로 빠른 로딩, SEO 최적화, 간편한 배포를 지원합니다.

## 개발 환경 설정

### 필수 요구사항
- Node.js 18.17 이상
- npm 또는 yarn

### 개발 서버 실행
```bash
npm run dev
# localhost:3000에서 실시간 확인
```

### 프로덕션 빌드
```bash
npm run build
npm start
```

### 배포 (Vercel)
```bash
# Vercel CLI 설치 (처음 한 번만)
npm i -g vercel

# 배포
vercel deploy --prod
```
GitHub 연결 시 자동 배포 가능.

## 프로젝트 구조

```
resume/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 메인 이력서 페이지
│   ├── layout.tsx         # 전체 레이아웃
│   └── globals.css        # 전역 스타일
├── components/            # 재사용 가능한 컴포넌트
│   ├── Header.tsx         # 상단 헤더/네비게이션
│   ├── Experience.tsx     # 경력 섹션
│   ├── Skills.tsx         # 기술 스택 섹션
│   └── Projects.tsx       # 프로젝트 섹션
├── public/                # 정적 자산 (이미지, 문서)
├── package.json
├── tsconfig.json
├── next.config.js
├── vercel.json            # Vercel 배포 설정
└── README.md
```

## 이력서 데이터 구조

이력서 데이터는 다음과 같이 구성:
- **개인정보**: 이름, 이메일, 전화, 위치, 링크 (GitHub, LinkedIn, 포트폴리오)
- **경력**: 회사명, 직책, 기간, 주요 업무
- **기술 스택**: 언어, 프레임워크, 도구 (태그 형식)
- **프로젝트**: 프로젝트명, 설명, 기술 스택, 링크
- **교육**: 학교, 학위, 전공, 졸업 연도

데이터는 컴포넌트 내 상수로 관리하거나, 별도의 `data/resume.ts` 파일에서 중앙관리 가능.

## 디자인 및 스타일링

- **CSS 프레임워크**: Tailwind CSS (기본 설정)
- **글꼴**: Google Fonts 추천 (예: Inter, Playfair Display)
- **색상 팔레트**: 전문성 있는 톤 (검정/흰색/강조색)
- **인쇄 최적화**: CSS `@media print` 활용하여 PDF 출력 시 깔끔한 레이아웃 보장
- **반응형 디자인**: 모바일/태블릿/데스크톱 모두 지원

## 이력서 검토 및 배포 워크플로우

1. **로컬 개발**: `npm run dev`로 변경사항 실시간 확인
2. **인쇄 미리보기**: 브라우저 인쇄 기능(Ctrl+P)으로 PDF 확인
3. **변경사항 저장**: 주요 업데이트 후 커밋
4. **Vercel 배포**: `vercel deploy --prod`로 라이브 배포
5. **URL 공유**: Vercel 자동 생성 URL(예: resume-xxx.vercel.app)로 이력서 공유

## 주요 고려사항

- **파일 크기**: 이미지는 최적화하여 로딩 속도 유지
- **SEO**: meta 태그, Open Graph 설정으로 공유 시 미리보기 제공
- **접근성**: 적절한 heading 계층, alt 텍스트, 충분한 색상 대비
- **다크 모드**: 선택적으로 dark mode 지원 고려
- **PDF 다운로드**: 이력서 PDF 다운로드 기능 구현 가능 (html2pdf 라이브러리)

## 배포 후 확인 사항

- 모든 링크 정상 작동 확인
- 이미지 로딩 확인
- 모바일 환경 테스트
- 인쇄/PDF 출력 레이아웃 확인
