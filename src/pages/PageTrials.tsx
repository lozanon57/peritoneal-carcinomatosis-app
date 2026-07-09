import { useState } from 'react'
import { ChevronRight, X, Search, BookText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { LANDMARK_TRIALS } from '../data/landmark_trials'
import { useAppI18n } from '../App'
import type { LandmarkTrial } from '../types'

const HIST_FILTERS = ['all', 'cpm', 'ovarian', 'mesothelioma', 'appendiceal/PMP', 'gastric', 'general'] as const
type HistFilter = typeof HIST_FILTERS[number]

const PICO_KEY: Record<string, string> = {
  population: 'trials.pico_population',
  intervention: 'trials.pico_intervention',
  comparator: 'trials.pico_comparator',
  outcome: 'trials.pico_outcome',
}

function evidenceBadge(level: LandmarkTrial['evidence_level'], t: (k: string) => string) {
  const positive = ['Ib', 'Ia']
  return (
    <span className={`badge border ${positive.includes(level) ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>
      {t('trials.level')} {level}
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

const PICO_META = [
  { key: 'population', letter: 'P', label: 'Population', chip: 'bg-primary-700 text-white' },
  { key: 'intervention', letter: 'I', label: 'Intervention', chip: 'bg-gold-500 text-white' },
  { key: 'comparator', letter: 'C', label: 'Comparator', chip: 'bg-gray-500 text-white' },
  { key: 'outcome', letter: 'O', label: 'Outcome', chip: 'bg-emerald-600 text-white' },
] as const

function PicoBlock({ pico }: { pico: NonNullable<LandmarkTrial['pico']> }) {
  const { t } = useAppI18n()
  return (
    <div>
      <p className="eyebrow mb-2">{t('trials.pico_framework')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {PICO_META.map(m => {
          const text = pico[m.key]
          if (!text) return null
          return (
            <div key={m.key} className="card p-3 flex gap-3 items-start">
              <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-serif font-bold text-base ${m.chip}`}>
                {m.letter}
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">{t(PICO_KEY[m.key])}</p>
                <p className="text-[15px] text-ink-soft leading-relaxed mt-0.5">{text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function TrialDetail({ trial, onClose }: { trial: LandmarkTrial; onClose: () => void }) {
  const { t } = useAppI18n()
  const practiceChange = trial.practice_change ?? trial.practice_impact
  return (
    <div className="fixed inset-0 z-50 bg-[#f7f5fa] flex flex-col animate-fade-in">
      <div className="bg-surface border-b border-line px-4 pt-safe-top pb-4">
        <div className="max-w-3xl mx-auto w-full flex items-start justify-between gap-3 mt-3">
          <div>
            <h2 className="t-h2 text-balance">{trial.name}</h2>
            <p className="t-small mt-1">{trial.publication} · n={trial.n_patients ?? '?'}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="p-2 -mr-2 rounded-lg text-ink-muted hover:text-ink hover:bg-primary-50 transition-colors flex-shrink-0">
            <X size={20} />
          </button>
        </div>
        <div className="max-w-3xl mx-auto w-full flex gap-2 mt-3 flex-wrap">
          {evidenceBadge(trial.evidence_level, t)}
          {studyTypeBadge(trial.study_type)}
          <span className="badge badge-gray">{trial.year}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5 lg:py-8 space-y-4 lg:space-y-5 max-w-3xl mx-auto w-full">
        {trial.pico && <PicoBlock pico={trial.pico} />}

        {trial.background && (
          <div className="card p-4 lg:p-5">
            <h3 className="t-h3 mb-1">{t('trials.why')}</h3>
            <div className="rule-gold mb-2.5" />
            <p className="t-body">{trial.background}</p>
          </div>
        )}

        {trial.design && (
          <div className="card p-4 lg:p-5">
            <h3 className="t-h3 mb-1">{t('trials.design')}</h3>
            <div className="rule-gold mb-2.5" />
            <p className="t-body">{trial.design}</p>
          </div>
        )}

        <div className="card p-4 lg:p-5">
          <h3 className="t-h3 mb-1">{t('trials.clinical_question_h')}</h3>
          <div className="rule-gold mb-2.5" />
          <p className="t-body">{trial.clinical_question}</p>
        </div>

        <div className="card p-4 lg:p-5">
          <h3 className="t-h3 mb-1">{t('trials.detailed_results')}</h3>
          <div className="rule-gold mb-2.5" />
          <p className="t-body">{trial.results_detail ?? trial.key_result}</p>
          {trial.results_detail && trial.key_result && (
            <p className="t-small mt-3 pt-3 border-t border-line">
              <span className="font-semibold text-ink-soft">{t('trials.in_brief')} </span>{trial.key_result}
            </p>
          )}
        </div>

        {practiceChange && (
          <div className="callout-key">
            <h3 className="t-h3 text-primary-800 mb-1.5">{t('trials.changed_practice')}</h3>
            <p className="t-body">{practiceChange}</p>
          </div>
        )}

        {trial.criticisms && (
          <div className="callout-pitfall">
            <h3 className="t-h3 mb-1.5">{t('trials.criticisms')}</h3>
            <p className="t-body">{trial.criticisms}</p>
          </div>
        )}

        <div className="card p-4 lg:p-5">
          <h3 className="t-h3 mb-1">{t('trials.full_citation')}</h3>
          <div className="rule-gold mb-2.5" />
          <p className="t-small">{trial.full_citation}</p>
          {trial.doi && (
            <a
              href={`https://doi.org/${trial.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-semibold text-primary-700 mt-2 underline"
            >
              DOI: {trial.doi}
            </a>
          )}
        </div>

        <div className="card p-4 bg-primary-50/40">
          <div className="flex gap-4 t-small flex-wrap">
            <span><strong className="text-ink-soft">{t('trials.histologies')}</strong> {trial.histologies.join(', ')}</span>
            <span><strong className="text-ink-soft">{t('trials.evidence_label')}</strong> {trial.evidence_level}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function TrialCard({ trial, onClick }: { trial: LandmarkTrial; onClick: () => void }) {
  const { t } = useAppI18n()
  return (
    <button onClick={onClick} className="w-full text-left card-interactive">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-ink text-sm">{trial.name}</span>
            {studyTypeBadge(trial.study_type)}
          </div>
          <p className="text-xs text-ink-muted mt-0.5 line-clamp-1">{trial.publication}</p>
        </div>
        <ChevronRight size={16} className="text-ink-muted flex-shrink-0 mt-0.5" />
      </div>
      <p className="text-sm text-ink-soft leading-relaxed mt-2 line-clamp-2">{trial.clinical_question}</p>
      <div className="flex items-center gap-2 mt-2 text-xs text-ink-muted">
        <span>{trial.year}</span>
        <span>·</span>
        <span>n={trial.n_patients ?? '?'}</span>
        <span>·</span>
        {evidenceBadge(trial.evidence_level, t)}
      </div>
    </button>
  )
}

const HIST_ORDER = ['cpm', 'ovarian', 'mesothelioma', 'mpm', 'appendiceal/PMP', 'appendiceal', 'gastric', 'general']
const HIST_GROUP_LABELS: Record<string, string> = {
  cpm: 'Colorectal Peritoneal Metastases',
  ovarian: 'Ovarian & Primary Peritoneal',
  mesothelioma: 'Peritoneal Mesothelioma',
  mpm: 'Peritoneal Mesothelioma',
  'appendiceal/PMP': 'Appendiceal / Pseudomyxoma',
  appendiceal: 'Appendiceal / Pseudomyxoma',
  gastric: 'Gastric',
  general: 'Cross-cutting & Consensus',
}

function primaryHist(t: LandmarkTrial): string {
  return HIST_ORDER.find(h => t.histologies.includes(h)) ?? t.histologies[0] ?? 'general'
}

function groupByHistology(trials: LandmarkTrial[]): { label: string; trials: LandmarkTrial[] }[] {
  const map = new Map<string, LandmarkTrial[]>()
  for (const t of trials) {
    const label = HIST_GROUP_LABELS[primaryHist(t)] ?? primaryHist(t)
    if (!map.has(label)) map.set(label, [])
    map.get(label)!.push(t)
  }
  const ordered: string[] = []
  for (const h of HIST_ORDER) {
    const l = HIST_GROUP_LABELS[h] ?? h
    if (map.has(l) && !ordered.includes(l)) ordered.push(l)
  }
  for (const l of map.keys()) if (!ordered.includes(l)) ordered.push(l)
  return ordered.map(l => ({ label: l, trials: map.get(l)! }))
}

export default function PageTrials() {
  const { t } = useAppI18n()
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
      <div className="wrap pt-6 lg:pt-12 pb-4 space-y-4 lg:space-y-6 animate-fade-in">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-xl lg:text-4xl font-bold text-ink">{t('trials.page_title')}</h1>
            <p className="text-xs lg:text-sm text-ink-muted">{displayed.length} {t('trials.trials_shown')}</p>
          </div>
          <button
            onClick={() => navigate('/library')}
            className="mt-1 flex items-center gap-1.5 bg-primary-50 text-primary-800 font-semibold px-3 py-2 rounded-xl text-xs active:scale-95 transition-transform whitespace-nowrap"
          >
            <BookText size={14} /> {t('trials.library')}
          </button>
        </div>

        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t('trials.search_placeholder')}
            className="input-field pl-8 text-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 no-scrollbar">
          {HIST_FILTERS.map(h => (
            <button
              key={h}
              onClick={() => setFilter(h)}
              className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors ${
                filter === h ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-ink-soft border-[#efe9f3]'
              }`}
            >
              {h === 'all' ? t('common.all') : h}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {groupByHistology(displayed).map(group => (
            <div key={group.label}>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="section-title text-base lg:text-xl">{group.label}</span>
                <span className="rule-gold" />
                <span className="text-[11px] text-ink-muted ml-auto">{group.trials.length}</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5">
                {group.trials.map(t => (
                  <TrialCard key={t.id} trial={t} onClick={() => setSelected(t)} />
                ))}
              </div>
            </div>
          ))}
          {displayed.length === 0 && (
            <div className="text-center py-8 text-ink-muted text-sm">{t('trials.no_trials')}</div>
          )}
        </div>
      </div>

      {selected && <TrialDetail trial={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
