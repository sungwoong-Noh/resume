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
