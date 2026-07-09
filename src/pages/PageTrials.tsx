import { useState } from 'react'
import { ChevronRight, X, Search, BookText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { LANDMARK_TRIALS } from '../data/landmark_trials'
import type { LandmarkTrial } from '../types'

const HIST_FILTERS = ['all', 'cpm', 'ovarian', 'mesothelioma', 'appendiceal/PMP', 'gastric', 'general'] as const
type HistFilter = typeof HIST_FILTERS[number]

function evidenceBadge(level: LandmarkTrial['evidence_level']) {
  const positive = ['Ib', 'Ia']
  return (
    <span className={`badge border ${positive.includes(level) ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
      Level {level}
    </span>
  )
}

function studyTypeBadge(type: LandmarkTrial['study_type']) {
  const colors: Record<string, string> = {
    RCT: 'bg-blue-50 text-blue-700 border-blue-200',
    'phase-II': 'bg-purple-50 text-purple-700 border-purple-200',
    'phase-III': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'meta-analysis': 'bg-amber-50 text-amber-700 border-amber-200',
    prospective: 'bg-green-50 text-green-600 border-green-200',
    retrospective: 'bg-gray-50 text-gray-600 border-gray-200',
    registry: 'bg-gray-50 text-gray-600 border-gray-200',
  }
  return <span className={`badge border ${colors[type] ?? 'bg-gray-100 border-gray-200'}`}>{type}</span>
}

function TrialDetail({ trial, onClose }: { trial: LandmarkTrial; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-gray-50 flex flex-col">
      <div className="bg-white border-b border-gray-100 px-4 pt-safe-top pb-3">
        <div className="flex items-start justify-between mt-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{trial.name}</h2>
            <p className="text-xs text-gray-500">{trial.publication} · n={trial.n_patients ?? '?'}</p>
          </div>
          <button onClick={onClose} className="p-2 -mr-2 text-gray-400">
            <X size={20} />
          </button>
        </div>
        <div className="flex gap-2 mt-2 flex-wrap">
          {evidenceBadge(trial.evidence_level)}
          {studyTypeBadge(trial.study_type)}
          <span className="badge badge-gray">{trial.year}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <div className="card">
          <h3 className="font-semibold text-base text-gray-700 mb-1">Clinical Question</h3>
          <p className="text-[15px] text-gray-600 leading-[1.7]">{trial.clinical_question}</p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-base text-gray-700 mb-1">Key Results</h3>
          <p className="text-[15px] text-gray-700 leading-[1.7]">{trial.key_result}</p>
        </div>
        <div className="card border-l-4 border-l-primary-400">
          <h3 className="font-semibold text-base text-primary-700 mb-1">Practice Impact</h3>
          <p className="text-[15px] text-gray-600 leading-[1.7]">{trial.practice_impact}</p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-base text-gray-700 mb-1">Full Citation</h3>
          <p className="text-[15px] text-gray-500 leading-[1.7]">{trial.full_citation}</p>
          {trial.doi && (
            <p className="text-xs text-primary-600 mt-1">DOI: {trial.doi}</p>
          )}
        </div>
        <div className="card bg-gray-50">
          <div className="flex gap-4 text-xs text-gray-500">
            <span><strong>Histologies:</strong> {trial.histologies.join(', ')}</span>
            <span><strong>Evidence:</strong> {trial.evidence_level}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function TrialCard({ trial, onClick }: { trial: LandmarkTrial; onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-full text-left card active:bg-gray-50 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-gray-900 text-sm">{trial.name}</span>
            {studyTypeBadge(trial.study_type)}
          </div>
          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{trial.publication}</p>
        </div>
        <ChevronRight size={16} className="text-gray-300 flex-shrink-0 mt-0.5" />
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mt-2 line-clamp-2">{trial.clinical_question}</p>
      <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
        <span>{trial.year}</span>
        <span>·</span>
        <span>n={trial.n_patients ?? '?'}</span>
        <span>·</span>
        {evidenceBadge(trial.evidence_level)}
      </div>
    </button>
  )
}

export default function PageTrials() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<HistFilter>('all')
  const [selected, setSelected] = useState<LandmarkTrial | null>(null)
  const [search, setSearch] = useState('')

  const filtered = filter === 'all'
    ? LANDMARK_TRIALS
    : LANDMARK_TRIALS.filter(t => t.histologies.includes(filter))

  const displayed = search
    ? filtered.filter(t =>
        t.name?.toLowerCase().includes(search.toLowerCase()) ||
        t.clinical_question?.toLowerCase().includes(search.toLowerCase()) ||
        t.key_result?.toLowerCase().includes(search.toLowerCase())
      )
    : filtered

  return (
    <>
      <div className="px-4 pt-6 pb-4 max-w-lg mx-auto space-y-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Landmark Trials</h1>
            <p className="text-xs text-gray-400">{displayed.length} trials shown</p>
          </div>
          <button
            onClick={() => navigate('/library')}
            className="mt-1 flex items-center gap-1.5 bg-primary-50 text-primary-800 font-semibold px-3 py-2 rounded-xl text-xs active:scale-95 transition-transform whitespace-nowrap"
          >
            <BookText size={14} /> Library
          </button>
        </div>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search trials…"
            className="input-field pl-8 text-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 no-scrollbar">
          {HIST_FILTERS.map(h => (
            <button
              key={h}
              onClick={() => setFilter(h)}
              className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors ${
                filter === h ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-500 border-gray-200'
              }`}
            >
              {h === 'all' ? 'All' : h}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {displayed.map(t => (
            <TrialCard key={t.id} trial={t} onClick={() => setSelected(t)} />
          ))}
          {displayed.length === 0 && (
            <div className="text-center py-8 text-gray-400 text-sm">No trials for this filter</div>
          )}
        </div>
      </div>

      {selected && <TrialDetail trial={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
