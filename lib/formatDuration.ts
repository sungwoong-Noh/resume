/** "2024.08 ~ 2025.06" 같은 프로젝트 기간 문자열에서 개월 수를 계산한다. 형식이 안 맞으면 null. */
export function formatProjectDuration(period: string): string | null {
  const match = period.match(/^(\d{4})\.(\d{1,2})\s*~\s*(\d{4})\.(\d{1,2})$/)
  if (!match) return null

  const [, startYear, startMonth, endYear, endMonth] = match.map(Number)
  const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1
  if (months <= 0) return null

  if (months < 12) return `${months}개월`
  const years = Math.floor(months / 12)
  const remainder = months % 12
  return remainder === 0 ? `${years}년` : `${years}년 ${remainder}개월`
}

/** "2024.08 ~ 2025.06" → 월 인덱스(year*12+month-1) 구간. 끝이 없으면 시작과 같다. 형식이 안 맞으면 null. */
export function parsePeriod(period: string, now = new Date()): { start: number; end: number } | null {
  const m = period.match(/(\d{4})\.(\d{1,2})(?:\s*~\s*(?:(\d{4})\.(\d{1,2})|(현재)))?/)
  if (!m) return null
  const start = Number(m[1]) * 12 + Number(m[2]) - 1
  // ponytail: '현재'는 빌드 시점 월 기준(정적 export), 재배포해야 타임라인 막대가 늘어남
  const end = m[3] ? Number(m[3]) * 12 + Number(m[4]) - 1 : m[5] ? now.getFullYear() * 12 + now.getMonth() : start
  return { start, end }
}

/** 시작일 내림차순 정렬용 비교 함수 */
export const byStartDesc = (a: { period: string }, b: { period: string }) =>
  (parsePeriod(b.period)?.start ?? 0) - (parsePeriod(a.period)?.start ?? 0)
