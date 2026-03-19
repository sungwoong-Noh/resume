# 이력서 일관성 점검

`data/resume.ts` 파일을 읽고 일관성 관점에서 점검하라.

## 점검 항목

### 1. 용어 통일
다음 항목들의 표기가 파일 전체에서 일관적인지 확인하라:
- 영문 약어 vs 풀네임 (K8s vs Kubernetes, DB vs Database)
- 한글/영문 혼용 (풀스택 vs Full-stack, 백엔드 vs Backend)
- 기술명 표기 (Spring Boot vs SpringBoot, Vue.js vs Vue 3)
- 발견된 불일치를 목록화하고 통일 방향을 제안하라

### 2. 날짜/기간 정확성
- period 필드의 형식 통일 (YYYY.MM 형식)
- 기간 겹침이나 공백 확인
- duration과 실제 period의 계산이 맞는지 검증
- 현재 진행 중인 항목의 표기 통일 ("현재" vs "진행중")

### 3. 문체 통일
- 경어체("~했습니다") vs 평서체("~함") 혼용 여부
- achievements 내 bullet 시작 패턴 일관성
- description과 achievements의 톤 차이

### 4. 데이터 정합성
- profile.yearsOfExp와 실제 경력 기간 계산 일치 여부
- highlights와 projects.achievements 간 수치 불일치 여부
- techStack에 명시된 기술이 achievements에서도 언급되는지

## 출력 형식

카테고리별로 발견 사항을 테이블로 정리하라.
각 항목에 [현재] → [수정안]을 명시하라.
단, 실제 파일 수정은 하지 말고 제안만 하라. 사용자가 승인하면 그때 수정하라.
