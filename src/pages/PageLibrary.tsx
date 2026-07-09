import { useState, useMemo } from 'react'
import { Search, ExternalLink, BookText, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { REFERENCE_BANK } from '../data/references_bank'
import { CHINA_REFERENCES } from '../data/references_china'
import type { Reference } from '../data/references_bank'

// China literature featured first, then the international bank
const ALL_TOPICS = [...CHINA_REFERENCES, ...REFERENCE_BANK]
const isChina = (id: string) => id.startsWith('cn-')

function RefCard({ r }: { r: Reference }) {
  const href = r.doi
    ? `https://doi.org/${r.doi}`
    : r.pmid
      ? `https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/`
      : undefined
  return (
    <div className="card p-4">
      <p className="text-[13px] font-semibold text-primary-800">{r.authors} <span className="text-ink-muted font-normal">· {r.year}</span></p>
      <h3 className="font-serif font-bold text-ink text-[15px] leading-snug mt-1">{r.title}</h3>
      <p className="text-[12px] text-ink-muted italic mt-1">{r.journal}</p>
      <p className="text-[14px] text-ink-soft leading-[1.6] mt-2">{r.takeaway}</p>
      <div className="flex items-center gap-3 mt-2.5">
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-primary-700">
            <ExternalLink size={12} /> {r.doi ? 'DOI' : 'PubMed'}
          </a>
        )}
        {r.pmid && <span className="text-[11px] text-ink-muted font-mono">PMID {r.pmid}</span>}
      </div>
    </div>
  )
}

export default function PageLibrary() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const totalRefs = useMemo(() => ALL_TOPICS.reduce((s, t) => s + t.references.length, 0), [])
  const chinaRefs = useMemo(() => CHINA_REFERENCES.reduce((s, t) => s + t.references.length, 0), [])

  const topics = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ALL_TOPICS
    return ALL_TOPICS
      .map(t => ({
        ...t,
        references: t.references.filter(r =>
          (r.title + r.authors + r.journal + r.takeaway).toLowerCase().includes(q)
        ),
      }))
      .filter(t => t.references.length > 0)
  }, [query])

  const shown = topics.reduce((s, t) => s + t.references.length, 0)

  return (
    <div className="max-w-lg mx-auto px-4 pb-16 animate-fade-in">
      <header className="pt-6 pb-4">
        <button onClick={() => navigate(-1)} className="btn-ghost -ml-3 mb-1 flex items-center gap-1">
          <ArrowLeft size={16} /> Back
        </button>
        <div className="eyebrow text-primary-700"><BookText size={13} /> Bibliography</div>
        <h1 className="font-serif text-3xl font-bold text-ink mt-1">Library</h1>
        <p className="text-[15px] text-ink-soft leading-relaxed mt-1.5">
          {totalRefs} PubMed-verified references across {ALL_TOPICS.length} topics — landmark trials,
          consensus guidelines and key reviews in peritoneal surface oncology, including
          {' '}<strong className="text-primary-800">{chinaRefs} Chinese-authored references</strong> from
          Tsinghua / Chinese peritoneal surface oncology.
        </p>
        <div className="rule-gold mt-3" />
      </header>

      <div className="relative mb-5">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-muted" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search authors, title, journal, topic…"
          className="input-field pl-9"
        />
      </div>

      {query && <p className="text-xs text-ink-muted mb-3">{shown} matching references</p>}

      <div className="space-y-7">
        {topics.map(topic => (
          <div key={topic.id}>
            <div className="flex items-center gap-2 mb-3">
              <span className="section-title text-base">{topic.topic}</span>
              {isChina(topic.id) && <span className="badge badge-red">中国 · China</span>}
              <span className="rule-gold" />
              <span className="text-[11px] text-ink-muted ml-auto">{topic.references.length}</span>
            </div>
            <div className="space-y-3">
              {topic.references.map((r, i) => <RefCard key={i} r={r} />)}
            </div>
          </div>
        ))}
        {topics.length === 0 && (
          <p className="text-center text-ink-muted text-sm py-10">No references match “{query}”.</p>
        )}
      </div>
    </div>
  )
}
