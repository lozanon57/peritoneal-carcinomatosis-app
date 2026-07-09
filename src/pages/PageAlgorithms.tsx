import { useState } from 'react'
import { GitBranch, RotateCcw, ChevronRight, ArrowLeft, Search } from 'lucide-react'
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
        <p className="text-ink-muted text-sm">Node not found</p>
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

  const totalNodes = algo.nodes.length
  const stepNum = history.length + 1

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-1 text-sm text-ink-soft">
          <ArrowLeft size={16} /> Algorithms
        </button>
        <button onClick={restart} className="flex items-center gap-1 text-xs text-ink-muted">
          <RotateCcw size={12} /> Restart
        </button>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold text-ink-soft truncate max-w-[200px]">{algo.title}</span>
          <span className="text-xs text-ink-muted whitespace-nowrap">Step {stepNum} / {totalNodes}</span>
        </div>
        <div className="w-full bg-primary-100 rounded-full h-1">
          <div
            className="bg-primary-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${Math.min((stepNum / totalNodes) * 100, 100)}%` }}
          />
        </div>
      </div>

      {history.length > 0 && (
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 text-xs text-ink-muted flex-nowrap pb-1">
            {history.slice(-4).map((hId) => {
              const node = algo.nodes.find(n => n.id === hId)
              return (
                <span key={hId} className="flex items-center gap-1 flex-shrink-0">
                  <span className="bg-primary-50 rounded px-1.5 py-0.5 max-w-[80px] truncate block">
                    {node?.text?.slice(0, 22) ?? hId}
                  </span>
                  <ChevronRight size={10} />
                </span>
              )
            })}
            <span className="text-primary-600 font-medium flex-shrink-0">Now</span>
          </div>
        </div>
      )}

      <div className={nodeTypeClass[current.type]}>
        <div className="text-xs uppercase font-semibold text-ink-muted mb-1 tracking-wide">{current.type}</div>
        <p className="font-medium text-ink text-[16px] leading-relaxed">{current.text}</p>
        {current.detail && (
          <p className="text-[15px] text-ink-soft mt-2 leading-[1.7]">{current.detail}</p>
        )}
        {current.reference && (
          <p className="text-xs text-primary-700 mt-2 italic">{current.reference}</p>
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
        <button onClick={goBack} className="w-full text-sm text-ink-muted py-2">
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
  const [search, setSearch] = useState('')

  const filtered = search
    ? ALGORITHMS.filter(a =>
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.subtitle?.toLowerCase().includes(search.toLowerCase()) ||
        a.category?.toLowerCase().includes(search.toLowerCase())
      )
    : ALGORITHMS

  if (selected) {
    return (
      <div className="px-4 pt-6 pb-4 max-w-lg mx-auto animate-fade-in">
        <AlgoRunner algo={selected} onBack={() => setSelected(null)} />
      </div>
    )
  }

  return (
    <div className="px-4 pt-6 pb-4 max-w-lg mx-auto space-y-4 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-ink">Decision Algorithms</h1>
        <p className="text-xs text-ink-muted">{ALGORITHMS.length} clinical decision trees</p>
      </div>

      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
        <input
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search algorithms…"
          className="input-field pl-8 text-sm"
        />
      </div>

      <div className="space-y-2">
        {filtered.map(algo => (
          <button
            key={algo.id}
            onClick={() => setSelected(algo)}
            className="w-full text-left card-interactive"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                  <GitBranch size={16} className="text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-ink text-base">{algo.title}</p>
                  <p className="text-sm text-ink-muted leading-relaxed mt-0.5">{algo.subtitle}</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-ink-muted flex-shrink-0" />
            </div>
            <div className="ml-11 mt-2">
              <span className="badge badge-purple">{CATEGORY_LABELS[algo.category] ?? algo.category}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
