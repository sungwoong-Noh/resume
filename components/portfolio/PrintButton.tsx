'use client'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-xs hover:border-teal-500 transition font-mono"
    >
      🖨️ PDF 저장
    </button>
  )
}
