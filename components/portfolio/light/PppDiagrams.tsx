// PPP Cloud 전용 다이어그램 (인라인, 이미지 파일 없음)
// 이력서엔 없는 시각 자료로 포트폴리오 차별화

const PROVISION_STEPS = ['계정', 'VS', '인터페이스', '라우트', 'ACI', 'OpenStack', 'DB']

export default function PppDiagrams() {
  return (
    <div className="space-y-6 mb-8">
      {/* 1. 오케스트레이션 & 차등 롤백 */}
      <figure className="rounded-xl border border-gray-200 bg-gray-50 p-5 print:p-3">
        <figcaption className="text-xs font-semibold text-gray-700 mb-4">
          다단계 벤더 프로비저닝 오케스트레이션 &middot; 실패 지점별 차등 롤백
        </figcaption>

        {/* 정방향 프로비저닝 */}
        <div className="flex items-center gap-1.5 flex-wrap mb-3">
          {PROVISION_STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-1.5">
              <span
                className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                  i === 4
                    ? 'bg-rose-50 border-rose-300 text-rose-600'
                    : 'bg-white border-gray-300 text-gray-700'
                }`}
              >
                {s}
              </span>
              {i < PROVISION_STEPS.length - 1 && (
                <span className="text-gray-400 text-xs">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        {/* 롤백 방향 */}
        <div className="flex items-center gap-2 text-xs text-rose-600">
          <span className="font-mono">ACI 단계 실패 시</span>
          <span className="text-gray-400">&larr;</span>
          <span>앞서 만든 자원(라우트&middot;인터페이스&middot;VS&middot;계정)만 역순 롤백</span>
        </div>

        <p className="mt-3 text-[11px] text-gray-500 leading-relaxed">
          외부 벤더 API라 하나의 트랜잭션으로 묶을 수 없어, 7단계마다{' '}
          <b className="text-gray-700">실패 지점별 롤백 범위가 다른 11개 예외 타입</b>을 설계.
          공통 예외는 상속으로 재사용, 각 도메인 담당자는 자기 단계 롤백만 정의.
        </p>
      </figure>

      {/* 2. 멀티테넌트 데이터 모델 */}
      <figure className="rounded-xl border border-gray-200 bg-gray-50 p-5 print:p-3">
        <figcaption className="text-xs font-semibold text-gray-700 mb-4">
          상품 도메인별 멀티테넌트 데이터 모델 &middot; 2단 격리
        </figcaption>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* 방화벽: 정규화 FK 그래프 */}
          <div>
            <p className="text-[11px] font-medium text-gray-500 mb-2">방화벽 &mdash; 정규화 FK 그래프</p>
            <div className="flex flex-col items-start gap-1">
              {[
                { name: 'Zone (테넌트)', key: true },
                { name: 'FireWallVs', key: true, note: 'zone_idx (PK)' },
                { name: 'FireWallInterface' },
                { name: 'FireWallPublicIp' },
                { name: 'FireWallPortForwarding' },
              ].map((n, i) => (
                <div key={n.name} className="flex flex-col items-start">
                  {i > 0 && <span className="text-gray-300 text-[10px] ml-3 leading-none">&#124;</span>}
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] border ${
                      n.key ? 'bg-teal-50 border-teal-200 text-teal-700' : 'bg-white border-gray-300 text-gray-600'
                    }`}
                  >
                    {n.name}
                    {n.note && <span className="ml-1 text-teal-500 font-mono text-[10px]">{n.note}</span>}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[10px] text-gray-400">zone_idx는 루트(VS)에만 &middot; 하위는 상위로 조인해 테넌트 식별</p>
          </div>

          {/* LB: 비정규화 */}
          <div>
            <p className="text-[11px] font-medium text-gray-500 mb-2">로드밸런서 &mdash; 비정규화</p>
            <div className="rounded-lg border border-gray-300 bg-white overflow-hidden">
              <div className="px-2 py-1 text-[11px] font-medium text-gray-700 border-b border-gray-200 bg-gray-50">
                LoadbalancerEntity
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200 text-[11px]">
                <div className="px-2 py-1.5">
                  <span className="font-mono text-teal-600">zone_idx</span>
                  <span className="block text-gray-400 text-[10px]">DB 조회 키</span>
                </div>
                <div className="px-2 py-1.5">
                  <span className="font-mono text-teal-600">lb_partition</span>
                  <span className="block text-gray-400 text-[10px]">장비(Citrix) 키</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-gray-400">두 키를 나란히 저장 &middot; 조인 없이 각자 필요한 곳에서 바로 사용</p>
          </div>
        </div>

        <p className="mt-4 text-[11px] text-gray-500 leading-relaxed border-t border-gray-200 pt-3">
          <b className="text-gray-700">2단 격리</b> &middot; DB는 FK 기반 논리 격리, 물리 장비는 테넌트별 격리(TrusGuard VS / Citrix Partition)
        </p>
      </figure>
    </div>
  )
}
