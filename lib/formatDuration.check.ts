// 실행: npx tsx lib/formatDuration.check.ts
import assert from 'node:assert'
import { parsePeriod, byStartDesc, formatProjectDuration } from './formatDuration'

assert.deepStrictEqual(parsePeriod('2024.08 ~ 2025.06'), { start: 2024 * 12 + 7, end: 2025 * 12 + 5 })
assert.deepStrictEqual(parsePeriod('2022.03 졸업'), { start: 2022 * 12 + 2, end: 2022 * 12 + 2 })
assert.strictEqual(parsePeriod('미정'), null)
const sorted = [{ period: '2021.08 ~ 2023.10' }, { period: '2026.02 ~ 2026.05' }, { period: '2023.10 ~ 2026.02' }].sort(byStartDesc)
assert.deepStrictEqual(sorted.map((x) => x.period.slice(0, 7)), ['2026.02', '2023.10', '2021.08'])
assert.strictEqual(formatProjectDuration('2024.08 ~ 2025.06'), '11개월')
console.log('ok')
