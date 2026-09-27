# HANDOFF (Claude Code → Antigravity, 2026-09-27)

새 에이전트는 `AGENTS.md`(= `GEMINI.md`)를 먼저 읽고 이 파일로 현재 상태를 파악하세요.

## 파일 지도
| 파일 | 역할 |
|---|---|
| `data/career-context.md` | 원천 데이터(재료 저장소). 모든 사례·팩트·정량 주의 메모의 기준 |
| `data/resume.ts` | 이력서 페이지(`/`) 데이터 |
| `data/portfolio.ts` | 경력기술서/포트폴리오(`/career`, `/portfolio`) 데이터 |
| `app/resume-v2/page.tsx` | 강의 기반 실험용 이력서 탭 |
| `.agent/workflows/resume-*.md` | 진단→구조→첨삭→일관성→맞춤법→최적화→검수 워크플로우 (`/resume-pipeline`이 전체 실행) |
| `doc/` | 과거 PDF/PPTX 산출물, 포트폴리오 가이드 |

실행: `npm run dev`. 배포: main 기준 Cloudflare Workers(정적 export + wrangler, 2026-08 전환. 이전엔 Vercel).

## 지원 현황 (마지막 기록 2026-07 기준, 최신화 필요)
| 브랜치 | 상태 |
|---|---|
| `apply/hyundai-autoever` | 현대오토에버 RX기술팀, 탈락 |
| `apply/daangn-community` | 당근 카페팀, 제출 (07-03) |
| `apply/sk-shieldus` | SK쉴더스 테이블오더, 제출 (07-06). 면접 대비 메모: `data/지원답변_SK쉴더스.md` |
| `apply/cj-foodville` | CJ푸드빌 디지털 채널 BE, 제출 (07-06) |
| `apply/cj-one` | CJ ONE 회원 서비스, 제출 (07-07). 서류 통과 시 코테 |
| `apply/foodtech` | 푸드테크(주문중계 POS), 제출 (07-07) |
| `apply/machbase` | 마크베이스, 잡코리아 경유 진행 중. 킬러 카드: VictoriaMetrics 실무 도입 |
| `apply/cenacle` | 세나클소프트, 준비 완료·미제출 |

그 외 `apply/*` 브랜치(whatap, brainzcompany, tosspayments, cj-oliveyoung-* 등)는 상태 기록 없음. 사용자에게 확인할 것.

## 미처리 작업
- **main 전파 대기**: `apply/sk-shieldus`의 `87172a4`, `apply/daangn-community`의 `da3a467`에 있는 회사 무관 수정(포트폴리오 프로젝트 시간 역순 정정, 인시던트 12→5 수치 보강, 이미지 eager 로딩 버그픽스). main 반영 여부 확인 필요.
