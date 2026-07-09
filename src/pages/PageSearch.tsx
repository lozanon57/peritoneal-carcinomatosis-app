import { useState } from 'react'
import { Search, X, ChevronDown, ChevronUp, Layers, FlaskConical, Beaker } from 'lucide-react'
import { useSearch } from '../hooks/useSearch'
import { HIPECProtocolCard } from '../components/HIPECProtocolCard'
import type { PCDisease } from '../types'

function eligibilityBadge(e: PCDisease['hipec_eligibility']) {
  const map: Record<string, string> = {
    standard: 'tag-standard',
    selected: 'tag-selected',
    investigational: 'tag-investigational',
    contraindicated: 'tag-contraindicated',
  }
  const labels: Record<string, string> = {
    standard: 'Standard HIPEC',
    selected: 'Selected cases',
    investigational: 'Investigational',
    contraindicated: 'Contraindicated',
  }
  return <span className={`badge ${map[e] ?? 'badge-gray'}`}>{labels[e] ?? e}</span>
}

type Tab = 'overview' | 'hipec' | 'pearls'

function DiseaseDetail({ disease, onClose }: { disease: PCDisease; onClose: () => void }) {
  const [tab, setTab] = useState<Tab>('overview')

  const tabs: { id: Tab; label: string; Icon: React.ElementType }[] = [
    { id: 'overview', label: 'Overview', Icon: Layers },
    { id: 'hipec', label: 'HIPEC/PIPAC', Icon: FlaskConical },
    { id: 'pearls', label: 'Pearls', Icon: Beaker },
  ]

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 flex flex-col">
      <div className="bg-white border-b border-gray-100 px-4 pt-safe-top pb-3">
        <div className="flex items-start justify-between mt-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900 leading-tight">{disease.name_short}</h2>
            <p className="text-xs text-gray-500">{disease.name}</p>
          </div>
          <button onClick={onClose} className="p-2 -mr-2 text-gray-400">
            <X size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          {eligibilityBadge(disease.hipec_eligibility)}
          <span className="badge badge-blue">{disease.origin}</span>
        </div>
      </div>

      <div className="flex border-b border-gray-100 bg-white">
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium transition-colors ${
              tab === id ? 'text-primary-700 border-b-2 border-primary-600' : 'text-gray-400'
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {tab === 'overview' && (
          <>
            <div className="card">
              <h3 className="font-semibold text-gray-800 mb-1 text-base">Description</h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">{disease.description}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-gray-800 mb-2 text-base">PCI Threshold</h3>
              <div className="flex items-center gap-3">
                <div className="bg-primary-50 rounded-xl p-3 text-center min-w-[64px]">
                  <div className="text-2xl font-bold text-primary-600">
                    {disease.pci_threshold?.match(/\d+/)?.[0] ?? '—'}
                  </div>
                  <div className="text-[10px] text-primary-400 font-medium">max PCI</div>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.7] flex-1">{disease.pci_threshold}</p>
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold text-gray-800 mb-2 text-base">Prognosis</h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">{disease.prognosis}</p>
            </div>
            {disease.ihc.length > 0 && (
              <div className="card">
                <h3 className="font-semibold text-gray-800 mb-2 text-base">IHC Profile</h3>
                <div className="flex flex-wrap gap-1.5">
                  {disease.ihc.map(m => (
                    <span key={m} className="badge badge-blue">{m}</span>
                  ))}
                </div>
              </div>
            )}
            {disease.molecular_markers.length > 0 && (
              <div className="card">
                <h3 className="font-semibold text-gray-800 mb-2 text-base">Molecular Markers</h3>
                <div className="space-y-1.5">
                  {disease.molecular_markers.map((m, i) => (
                    <div key={i} className="text-[15px] leading-relaxed">
                      <span className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">{m.alteration}</span>
                      {m.frequency && <span className="text-gray-400 text-xs ml-1.5">{m.frequency}</span>}
                      {m.therapeutic_relevance && (
                        <p className="text-xs text-gray-500 mt-0.5">{m.therapeutic_relevance}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="card">
              <h3 className="font-semibold text-gray-800 mb-1 text-base">Patient Selection</h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">{disease.patient_selection}</p>
            </div>
          </>
        )}

        {tab === 'hipec' && (
          <>
            {disease.hipec_protocols.length > 0 ? (
              <div className="card">
                <h3 className="font-semibold text-gray-800 mb-3 text-base">HIPEC Protocols</h3>
                <div className="space-y-2">
                  {disease.hipec_protocols.map((p, i) => <HIPECProtocolCard key={i} protocol={p} index={i} />)}
                </div>
              </div>
            ) : (
              <div className="card text-center text-gray-400 text-sm py-6">
                No established HIPEC protocol for this entity
              </div>
            )}
            {disease.pipac_indication && (
              <div className="card">
                <h3 className="font-semibold text-gray-800 mb-2 text-base">PIPAC</h3>
                <p className="text-[15px] text-gray-600 leading-[1.7]">{disease.pipac_indication}</p>
              </div>
            )}
            {disease.systemic_treatment && (
              <div className="card">
                <h3 className="font-semibold text-gray-800 mb-2 text-base">Systemic Treatment</h3>
                <p className="text-[15px] text-gray-600 leading-[1.7]">{disease.systemic_treatment}</p>
              </div>
            )}
          </>
        )}

        {tab === 'pearls' && (
          <div className="space-y-3">
            {disease.clinical_pearls.map((pearl, i) => (
              <div key={i} className="card border-l-4 border-l-amber-400">
                <p className="text-[15px] text-gray-700 leading-[1.7]">{pearl}</p>
              </div>
            ))}
            {disease.clinical_pearls.length === 0 && (
              <div className="text-center text-gray-400 text-sm py-6">No pearls available</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function DiseaseCard({ disease, onClick }: { disease: PCDisease; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left card active:bg-gray-50 transition-colors"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-gray-900 text-sm">{disease.name_short}</span>
            {eligibilityBadge(disease.hipec_eligibility)}
          </div>
          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{disease.name}</p>
        </div>
        <ChevronDown size={16} className="text-gray-300 mt-0.5 flex-shrink-0 rotate-[-90deg]" />
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
  const { filters, results, updateFilter, resetFilters } = useSearch()
  const [selected, setSelected] = useState<PCDisease | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  return (
    <>
      <div className="px-4 pt-6 pb-4 max-w-lg mx-auto space-y-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Disease Search</h1>
          <p className="text-xs text-gray-400">{results.length} entities</p>
        </div>

        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={filters.query}
            onChange={e => updateFilter('query', e.target.value)}
            placeholder="Search by name, marker, tag…"
            className="input-field pl-9"
          />
          {filters.query && (
            <button onClick={() => updateFilter('query', '')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <X size={14} />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowFilters(v => !v)}
          className="flex items-center gap-1.5 text-xs font-medium text-gray-500"
        >
          {showFilters ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          Filters {(filters.origin !== 'all' || filters.hipec !== 'all') ? '(active)' : ''}
        </button>

        {showFilters && (
          <div className="space-y-3 p-3 bg-gray-50 rounded-xl">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">Origin</label>
              <div className="flex flex-wrap gap-1.5">
                {ORIGINS.map(o => (
                  <button
                    key={o}
                    onClick={() => updateFilter('origin', o as typeof filters.origin)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      filters.origin === o ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-500 border-gray-200'
                    }`}
                  >
                    {o === 'all' ? 'All' : o.charAt(0).toUpperCase() + o.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">HIPEC Eligibility</label>
              <div className="flex flex-wrap gap-1.5">
                {HIPEC_OPTS.map(h => (
                  <button
                    key={h}
                    onClick={() => updateFilter('hipec', h as typeof filters.hipec)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      filters.hipec === h ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-500 border-gray-200'
                    }`}
                  >
                    {h === 'all' ? 'All' : h.charAt(0).toUpperCase() + h.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={resetFilters} className="text-xs text-gray-400 underline">Reset filters</button>
          </div>
        )}

        <div className="space-y-2">
          {results.length === 0 && (
            <div className="text-center py-10 text-gray-400 text-sm">No results found</div>
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
