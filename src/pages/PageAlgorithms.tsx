import { useState } from 'react'
import { GitBranch, RotateCcw, ChevronRight, ArrowLeft } from 'lucide-react'
import { ALGORITHMS } from '../data/algorithms'
import type { Algorithm, AlgorithmNode } from '../types'

function AlgoRunner({ algo, onBack }: { algo: Algorithm; onBack: () => void }) {
  const startId = algo.nodes[0]?.id ?? ''
  const [currentId, setCurrentId] = useState<string>(startId)
  const [history, setHistory] = useState<string[]>([])

  const current = algo.nodes.find(n => n.id === currentId) ?? null

  if (!current) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-400 text-sm">Node not found</p>
        <button onClick={onBack} className="btn-primary mt-4">Back to list</button>
      </div>
    )
  }

  const hasDecision = !!(current.yes || current.no || (current.options && current.options.length > 0))
  const isEnd = !hasDecision && !current.next
  const canContinue = !hasDecision && !!current.next

  function navigate(nextId: string) {
    setHistory(h => [...h, currentId])
    setCurrentId(nextId)
  }

  function goBack() {
    const prev = history[history.length - 1]
    if (prev) {
      setHistory(h => h.slice(0, -1))
      setCurrentId(prev)
    }
  }

  function restart() {
    setHistory([])
    setCurrentId(startId)
  }

  const nodeTypeClass: Record<AlgorithmNode['type'], string> = {
    start: 'algo-step',
    action: 'algo-action',
    decision: 'algo-decision',
    result: 'algo-warning',
    referral: 'algo-warning',
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-1 text-sm text-gray-500">
          <ArrowLeft size={16} /> Algorithms
        </button>
        <button onClick={restart} className="flex items-center gap-1 text-xs text-gray-400">
          <RotateCcw size={12} /> Restart
        </button>
      </div>

      <div>
        <h2 className="font-bold text-gray-900 text-lg">{algo.title}</h2>
        <p className="text-xs text-gray-400 mt-0.5">{algo.subtitle}</p>
      </div>

      {history.length > 0 && (
        <div className="flex items-center gap-1 text-xs text-gray-400 flex-wrap">
          {history.slice(-3).map((hId, i) => {
            const node = algo.nodes.find(n => n.id === hId)
            return (
              <span key={i} className="flex items-center gap-1">
                <span className="max-w-[80px] truncate">{node?.text.slice(0, 25) ?? hId}</span>
                <ChevronRight size={10} />
              </span>
            )
          })}
          <span className="text-primary-600">now</span>
        </div>
      )}

      <div className={nodeTypeClass[current.type]}>
        <div className="text-xs uppercase font-semibold text-gray-400 mb-1 tracking-wide">{current.type}</div>
        <p className="font-medium text-gray-800">{current.text}</p>
        {current.detail && (
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">{current.detail}</p>
        )}
        {current.reference && (
          <p className="text-xs text-primary-600 mt-2 italic">{current.reference}</p>
        )}
      </div>

      {hasDecision && (
        <div className="space-y-2">
          {current.yes && (
            <button
              onClick={() => navigate(current.yes!)}
              className="w-full btn-primary text-left flex items-center justify-between"
            >
              <span>Yes</span>
              <ChevronRight size={16} />
            </button>
          )}
          {current.no && (
            <button
              onClick={() => navigate(current.no!)}
              className="w-full btn-secondary text-left flex items-center justify-between"
            >
              <span>No</span>
              <ChevronRight size={16} />
            </button>
          )}
          {current.options?.map((opt, i) => (
            <button
              key={i}
              onClick={() => navigate(opt.next)}
              className="w-full btn-secondary text-left flex items-center justify-between"
            >
              <span>{opt.text}</span>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      )}

      {canContinue && (
        <button onClick={() => navigate(current.next!)} className="w-full btn-primary flex items-center justify-between">
          <span>Continue</span>
          <ChevronRight size={16} />
        </button>
      )}

      {isEnd && (
        <div className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            End of algorithm
          </div>
          <button onClick={restart} className="block w-full btn-secondary">
            <RotateCcw size={14} className="inline mr-1.5" /> Start again
          </button>
        </div>
      )}

      {history.length > 0 && (
        <button onClick={goBack} className="w-full text-sm text-gray-400 py-2">
          ← Go back one step
        </button>
      )}
    </div>
  )
}

const CATEGORY_LABELS: Record<string, string> = {
  selection: 'Patient Selection',
  protocol: 'Protocol',
  staging: 'Staging',
  pipac: 'PIPAC',
  followup: 'Follow-up',
}

export default function PageAlgorithms() {
  const [selected, setSelected] = useState<Algorithm | null>(null)

  if (selected) {
    return (
      <div className="px-4 pt-6 pb-4 max-w-lg mx-auto">
        <AlgoRunner algo={selected} onBack={() => setSelected(null)} />
      </div>
    )
  }

  return (
    <div className="px-4 pt-6 pb-4 max-w-lg mx-auto space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900">Decision Algorithms</h1>
        <p className="text-xs text-gray-400">{ALGORITHMS.length} clinical decision trees</p>
      </div>

      <div className="space-y-2">
        {ALGORITHMS.map(algo => (
          <button
            key={algo.id}
            onClick={() => setSelected(algo)}
            className="w-full text-left card active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                  <GitBranch size={16} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{algo.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{algo.subtitle}</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />
            </div>
            <div className="ml-11 mt-2">
              <span className="badge badge-blue">{CATEGORY_LABELS[algo.category] ?? algo.category}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
