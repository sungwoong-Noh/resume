# 노성웅 | 백엔드 개발자 이력서 포트폴리오

> 견고한 시스템 설계와 건강한 개발 문화로 지속 가능한 안정성을 만드는 백엔드 개발자

**배포 주소**: [Vercel에 배포됨]

## 📌 특징

✨ **현대적인 UI/UX**
- Tailwind CSS 기반 반응형 디자인
- 깔끔한 타이포그래피와 색상 조합
- 인터랙티브 요소와 부드러운 전환

🎨 **전문적인 디자인**
- 틸/민트 색상 테마
- 섹션별 카드 레이아웃
- 모바일/태블릿/데스크톱 최적화

📄 **인쇄 최적화**
- 브라우저 인쇄로 PDF 생성 가능
- 인쇄 환경에 최적화된 스타일

## 🚀 빠른 시작

### 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build
npm start
```

### Vercel 배포

#### 방법 1: Vercel CLI 사용
```bash
# 처음 한 번만
npm i -g vercel

# 배포
vercel deploy --prod
```

#### 방법 2: GitHub 연동 (추천)
1. GitHub에 리포지토리 push
2. Vercel 웹사이트에서 프로젝트 import
3. 자동 배포 설정

## 📂 프로젝트 구조

```
resume/
├── app/
│   ├── page.tsx           # 메인 이력서 페이지
│   ├── layout.tsx         # 레이아웃 및 메타데이터
│   └── globals.css        # 전역 스타일
├── components/            # 재사용 컴포넌트 (추후 확장용)
├── public/                # 정적 자산 (이미지, PDF 등)
├── package.json           # 의존성 정의
├── tailwind.config.js     # Tailwind CSS 설정
├── tsconfig.json          # TypeScript 설정
├── next.config.js         # Next.js 설정
└── vercel.json            # Vercel 배포 설정
```

## 🎯 주요 섹션

### Hero Header
- 이름, 직급, 한 줄 소개
- 연락처 정보 (이메일, 전화, GitHub)

### Core Values (핵심 가치관)
- **성능 집착**: 응답 속도 최적화
- **기술 부채 해결**: 코드 품질 향상
- **안정성 우선**: 견고한 인프라 설계

### 경력 섹션
- 현직: 오케스트로주식회사 (선임연구원)
- 전직: 주식회사에이직스 (주임)
- 각 포지션별 상세 설명 및 성과

### 기술 스택
- **Backend**: Spring Boot, JPA, QueryDSL, MariaDB, Redis 등
- **Frontend**: Vue 3, TypeScript, TanStack Query, Ant Design
- **Infrastructure**: Kubernetes, Docker, AWS ECS, Jenkins

### 주요 성과
- 성능 최적화 (데이터 동기화 99% 개선)
- 분산 시스템 설계 (100% 데이터 무결성)
- 배포 자동화 (40% 배포 시간 단축)
- 팀 문화 리더십

## 🎨 커스터마이징

### 색상 변경
`tailwind.config.js`에서 색상 팔레트 수정:
```javascript
theme: {
  extend: {
    colors: {
      // 색상 변경
    }
  }
}
```

### 폰트 변경
`app/globals.css`에서 Google Fonts 수정:
```css
@import url('https://fonts.googleapis.com/css2?family=...');
```

### 내용 수정
`app/page.tsx`의 데이터 섹션 수정:
- 경력 정보
- 기술 스택
- 성과 내용

## 📱 반응형 디자인

- **모바일** (< 768px): 단일 열 레이아웃
- **태블릿** (768px ~ 1024px): 2열 그리드
- **데스크톱** (> 1024px): 최적화된 멀티 열 레이아웃

## 🖨️ PDF 생성

1. 브라우저에서 `Ctrl+P` (또는 `Cmd+P`)
2. "PDF로 저장" 선택
3. 여백 및 옵션 조정
4. 저장

## 🔄 업데이트 방법

1. `app/page.tsx`에서 이력서 내용 수정
2. 로컬에서 `npm run dev`로 확인
3. 변경사항을 git 커밋
4. `git push` (GitHub 연동 시 자동 배포)

## 📋 체크리스트

- [x] 프로젝트 초기화
- [x] 이력서 내용 작성
- [x] 디자인 개선 (색상, 레이아웃)
- [x] 반응형 디자인 적용
- [x] Git 버전 관리
- [ ] GitHub에 push
- [ ] Vercel 배포
- [ ] 도메인 연결 (선택사항)

## 📚 참고 자료

- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Vercel 배포 가이드](https://vercel.com/docs)

## 🤝 지원

문제가 발생하거나 개선 제안이 있으면:
- CLAUDE.md 파일 참고
- GitHub Issues 생성 (GitHub 호스팅 시)

---

**마지막 업데이트**: 2024년 2월
**버전**: 1.0.0
