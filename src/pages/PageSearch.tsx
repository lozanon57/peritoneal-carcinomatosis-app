import { useState } from 'react'
import { Search, X, ChevronDown, ChevronUp, Layers, FlaskConical, Beaker } from 'lucide-react'
import { useSearch } from '../hooks/useSearch'
import { useAppI18n } from '../App'
import { HIPECProtocolCard } from '../components/HIPECProtocolCard'
import type { PCDisease } from '../types'

function eligibilityBadge(e: PCDisease['hipec_eligibility'], t: (k: string) => string) {
  const map: Record<string, string> = {
    standard: 'tag-standard',
    selected: 'tag-selected',
    investigational: 'tag-investigational',
    contraindicated: 'tag-contraindicated',
  }
  const labelKeys: Record<string, string> = {
    standard: 'search.elig_standard',
    selected: 'search.elig_selected',
    investigational: 'search.elig_investigational',
    contraindicated: 'search.elig_contraindicated',
  }
  return <span className={`badge ${map[e] ?? 'badge-gray'}`}>{labelKeys[e] ? t(labelKeys[e]) : e}</span>
}

type Tab = 'overview' | 'hipec' | 'pearls'

function DiseaseDetail({ disease, onClose }: { disease: PCDisease; onClose: () => void }) {
  const { t } = useAppI18n()
  const [tab, setTab] = useState<Tab>('overview')

  const tabs: { id: Tab; label: string; Icon: React.ElementType }[] = [
    { id: 'overview', label: t('search.tab_overview'), Icon: Layers },
    { id: 'hipec', label: t('search.tab_hipec'), Icon: FlaskConical },
    { id: 'pearls', label: t('search.tab_pearls'), Icon: Beaker },
  ]

  return (
    <div className="fixed inset-0 z-50 bg-[#f7f5fa] flex flex-col animate-fade-in">
      <div className="bg-white border-b border-[#efe9f3] px-4 pt-safe-top pb-3">
        <div className="max-w-3xl mx-auto w-full flex items-start justify-between mt-3">
          <div>
            <h2 className="text-lg font-bold text-ink leading-tight">{disease.name_short}</h2>
            <p className="text-xs text-ink-muted">{disease.name}</p>
          </div>
          <button onClick={onClose} className="p-2 -mr-2 text-ink-muted">
            <X size={20} />
          </button>
        </div>
        <div className="max-w-3xl mx-auto w-full flex items-center gap-2 mt-2 flex-wrap">
          {eligibilityBadge(disease.hipec_eligibility, t)}
          <span className="badge badge-purple">{disease.origin}</span>
        </div>
      </div>

      <div className="flex border-b border-[#efe9f3] bg-white max-w-3xl mx-auto w-full">
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium transition-colors ${
              tab === id ? 'text-primary-700 border-b-2 border-primary-600' : 'text-ink-muted'
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 max-w-3xl mx-auto w-full">
        {tab === 'overview' && (
          <>
            <div className="card">
              <h3 className="font-semibold text-ink mb-1 text-base">{t('search.field_description')}</h3>
              <p className="text-[15px] text-ink-soft leading-[1.7]">{disease.description}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-ink mb-2 text-base">{t('search.field_pci_threshold')}</h3>
              <div className="flex items-center gap-3">
                <div className="bg-primary-50 rounded-xl p-3 text-center min-w-[64px]">
                  <div className="text-2xl font-bold text-primary-600">
                    {disease.pci_threshold?.match(/\d+/)?.[0] ?? '—'}
                  </div>
                  <div className="text-[10px] text-primary-400 font-medium">{t('search.field_max_pci')}</div>
                </div>
                <p className="text-[15px] text-ink-soft leading-[1.7] flex-1">{disease.pci_threshold}</p>
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold text-ink mb-2 text-base">{t('search.field_prognosis')}</h3>
              <p className="text-[15px] text-ink-soft leading-[1.7]">{disease.prognosis}</p>
            </div>
            {disease.ihc.length > 0 && (
              <div className="card">
                <h3 className="font-semibold text-ink mb-2 text-base">{t('search.field_ihc')}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {disease.ihc.map(m => (
                    <span key={m} className="badge badge-purple">{m}</span>
                  ))}
                </div>
              </div>
            )}
            {disease.molecular_markers.length > 0 && (
              <div className="card">
                <h3 className="font-semibold text-ink mb-2 text-base">{t('search.field_molecular')}</h3>
                <div className="space-y-1.5">
                  {disease.molecular_markers.map((m, i) => (
                    <div key={i} className="text-[15px] leading-relaxed">
                      <span className="font-mono text-xs bg-primary-50 px-1.5 py-0.5 rounded text-primary-800">{m.alteration}</span>
                      {m.frequency && <span className="text-ink-muted text-xs ml-1.5">{m.frequency}</span>}
                      {m.therapeutic_relevance && (
                        <p className="text-xs text-ink-muted mt-0.5">{m.therapeutic_relevance}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="card">
              <h3 className="font-semibold text-ink mb-1 text-base">{t('search.field_patient_selection')}</h3>
              <p className="text-[15px] text-ink-soft leading-[1.7]">{disease.patient_selection}</p>
            </div>
          </>
        )}

        {tab === 'hipec' && (
          <>
            {disease.hipec_protocols.length > 0 ? (
              <div className="card">
                <h3 className="font-semibold text-ink mb-3 text-base">{t('search.field_hipec_protocols')}</h3>
                <div className="space-y-2">
                  {disease.hipec_protocols.map((p, i) => <HIPECProtocolCard key={i} protocol={p} index={i} />)}
                </div>
              </div>
            ) : (
              <div className="card text-center text-ink-muted text-sm py-6">
                {t('search.no_hipec')}
              </div>
            )}
            {disease.pipac_indication && (
              <div className="card">
                <h3 className="font-semibold text-ink mb-2 text-base">{t('search.field_pipac')}</h3>
                <p className="text-[15px] text-ink-soft leading-[1.7]">{disease.pipac_indication}</p>
              </div>
            )}
            {disease.systemic_treatment && (
              <div className="card">
                <h3 className="font-semibold text-ink mb-2 text-base">{t('search.field_systemic')}</h3>
                <p className="text-[15px] text-ink-soft leading-[1.7]">{disease.systemic_treatment}</p>
              </div>
            )}
          </>
        )}

        {tab === 'pearls' && (
          <div className="space-y-3">
            {disease.clinical_pearls.map((pearl, i) => (
              <div key={i} className="card border-l-4 border-l-amber-400">
                <p className="text-[15px] text-ink-soft leading-[1.7]">{pearl}</p>
              </div>
            ))}
            {disease.clinical_pearls.length === 0 && (
              <div className="text-center text-ink-muted text-sm py-6">{t('search.no_pearls')}</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function DiseaseCard({ disease, onClick }: { disease: PCDisease; onClick: () => void }) {
  const { t } = useAppI18n()
  return (
    <button
      onClick={onClick}
      className="w-full text-left card-interactive"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-ink text-sm">{disease.name_short}</span>
            {eligibilityBadge(disease.hipec_eligibility, t)}
          </div>
          <p className="text-xs text-ink-muted mt-0.5 line-clamp-1">{disease.name}</p>
        </div>
        <ChevronDown size={16} className="text-ink-muted mt-0.5 flex-shrink-0 rotate-[-90deg]" />
      </div>
      {disease.tags.slice(0, 3).map(t => (
        <span key={t} className="inline-block badge badge-gray mr-1 mt-1.5">{t}</span>
      ))}
    </button>
  )
}

const ORIGINS = ['all', 'colorectal', 'appendiceal', 'ovarian', 'gastric', 'mesothelioma', 'sarcoma', 'other'] as const
const HIPEC_OPTS = ['all', 'standard', 'selected', 'investigational', 'contraindicated'] as const

export default function PageSearch() {
  const { t } = useAppI18n()
  const { filters, results, updateFilter, resetFilters } = useSearch()
  const [selected, setSelected] = useState<PCDisease | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  return (
    <>
      <div className="wrap pt-6 lg:pt-12 pb-4 space-y-4 lg:space-y-6 animate-fade-in">
        <div>
          <h1 className="text-xl lg:text-4xl font-bold text-ink">{t('search.page_title')}</h1>
          <p className="text-xs lg:text-sm text-ink-muted">{results.length} {t('search.entities_word')}</p>
        </div>

        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input
            type="search"
            value={filters.query}
            onChange={e => updateFilter('query', e.target.value)}
            placeholder={t('search.placeholder')}
            className="input-field pl-9"
          />
          {filters.query && (
            <button onClick={() => updateFilter('query', '')} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted">
              <X size={14} />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowFilters(v => !v)}
          className="flex items-center gap-1.5 text-xs font-medium text-ink-soft"
        >
          {showFilters ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {t('search.filters')} {(filters.origin !== 'all' || filters.hipec !== 'all') ? t('search.filters_active') : ''}
        </button>

        {showFilters && (
          <div className="space-y-3 p-3 bg-primary-50/40 rounded-xl">
            <div>
              <label className="text-xs font-semibold text-ink-muted uppercase tracking-wide block mb-1.5">{t('search.origin')}</label>
              <div className="flex flex-wrap gap-1.5">
                {ORIGINS.map(o => (
                  <button
                    key={o}
                    onClick={() => updateFilter('origin', o as typeof filters.origin)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      filters.origin === o ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-ink-soft border-[#efe9f3]'
                    }`}
                  >
                    {o === 'all' ? t('common.all') : o.charAt(0).toUpperCase() + o.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-muted uppercase tracking-wide block mb-1.5">{t('search.hipec_eligibility')}</label>
              <div className="flex flex-wrap gap-1.5">
                {HIPEC_OPTS.map(h => (
                  <button
                    key={h}
                    onClick={() => updateFilter('hipec', h as typeof filters.hipec)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      filters.hipec === h ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-ink-soft border-[#efe9f3]'
                    }`}
                  >
                    {h === 'all' ? t('common.all') : h.charAt(0).toUpperCase() + h.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={resetFilters} className="text-xs text-ink-muted underline">{t('common.reset_filters')}</button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5">
          {results.length === 0 && (
            <div className="text-center py-10 text-ink-muted text-sm lg:col-span-2 xl:col-span-3">{t('search.no_results')}</div>
          )}
          {results.map(d => (
            <DiseaseCard key={d.id} disease={d} onClick={() => setSelected(d)} />
          ))}
        </div>
      </div>

      {selected && <DiseaseDetail disease={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
