import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  FlaskConical,
  Gem,
  AlertTriangle,
  KeyRound,
  BookOpen,
  Layers,
  ClipboardCheck,
  Scissors,
  Thermometer,
  Wind,
  BookMarked,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { LEARN_CHAPTERS } from '../data/learn_content'
import type { LearnBlock, LearnChapter, LearnSection } from '../types/learn'

// ── Icon resolution ──────────────────────────────────────────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  Layers,
  ClipboardCheck,
  Scissors,
  Thermometer,
  Wind,
  BookMarked,
}

function chapterIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? BookOpen
}

// ── Level badge styling ───────────────────────────────────────────────────────
function levelBadgeClass(level: LearnChapter['level']): string {
  switch (level) {
    case 'Foundation':
      return 'badge-purple'
    case 'Core':
      return 'badge-gold'
    case 'Advanced':
      return 'badge-red'
  }
}

// ── Inline **bold** / *italic* renderer ───────────────────────────────────────
function renderInline(text: string): (string | JSX.Element)[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i} className="italic">{part.slice(1, -1)}</em>
    }
    return part
  })
}

// ── Callout eyebrow config ────────────────────────────────────────────────────
const CALLOUT_META: Record<
  'trial' | 'pearl' | 'pitfall' | 'key',
  { label: string; Icon: LucideIcon; wrap: string; eyebrow: string }
> = {
  trial: { label: 'LANDMARK TRIAL', Icon: FlaskConical, wrap: 'callout-trial', eyebrow: 'text-primary-700' },
  pearl: { label: 'CLINICAL PEARL', Icon: Gem, wrap: 'callout-pearl', eyebrow: 'text-gold-700' },
  pitfall: { label: 'COMMON PITFALL', Icon: AlertTriangle, wrap: 'callout-pitfall', eyebrow: 'text-cardinal-700' },
  key: { label: 'KEY POINT', Icon: KeyRound, wrap: 'callout-key', eyebrow: 'text-primary-700' },
}

// ── Block renderer ────────────────────────────────────────────────────────────
function BlockView({ block }: { block: LearnBlock }) {
  switch (block.type) {
    case 'text':
      return (
        <p className="text-sm text-ink-soft leading-relaxed">
          {block.content ? renderInline(block.content) : null}
        </p>
      )

    case 'trial':
    case 'pearl':
    case 'pitfall':
    case 'key': {
      const meta = CALLOUT_META[block.type]
      const { Icon } = meta
      return (
        <div className={meta.wrap}>
          <div className={`eyebrow ${meta.eyebrow} mb-1.5`}>
            <Icon size={13} />
            {meta.label}
          </div>
          {block.title ? <p className="font-serif font-bold text-ink text-[15px] mb-1">{block.title}</p> : null}
          {block.content ? <p className="leading-relaxed">{renderInline(block.content)}</p> : null}
          {block.ref ? <p className="mt-2 text-[11px] text-ink-muted italic">{block.ref}</p> : null}
        </div>
      )
    }

    case 'list':
      return (
        <div>
          {block.title ? <p className="font-serif font-semibold text-ink text-sm mb-2">{block.title}</p> : null}
          <ul className="space-y-1.5">
            {(block.items ?? []).map((item, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-sheen" />
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'table':
      return (
        <div>
          {block.title ? <p className="font-serif font-semibold text-ink text-sm mb-2">{block.title}</p> : null}
          <div className="overflow-x-auto -mx-4 px-4 no-scrollbar">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-primary-50 text-primary-800">
                  {(block.headers ?? []).map((h, i) => (
                    <th key={i} className="text-left font-semibold px-3 py-2 border border-primary-100 whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(block.rows ?? []).map((row, r) => (
                  <tr key={r} className={r % 2 === 0 ? 'bg-white' : 'bg-[#faf7fc]'}>
                    {row.map((cell, c) => (
                      <td key={c} className="px-3 py-2 border border-[#efe9f3] text-ink-soft align-top">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.ref ? <p className="mt-2 text-[11px] text-ink-muted italic">{block.ref}</p> : null}
        </div>
      )

    case 'quote':
      return (
        <blockquote className="border-l-4 border-gold-400 pl-4 py-1">
          <p className="font-serif italic text-ink text-[15px] leading-relaxed">
            {block.content ? renderInline(block.content) : null}
          </p>
        </blockquote>
      )

    default:
      return null
  }
}

// ── Section renderer ──────────────────────────────────────────────────────────
function SectionView({ section }: { section: LearnSection }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="section-title">{section.title}</h2>
        <div className="rule-gold mt-1.5" />
      </div>
      {section.blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </section>
  )
}

// ── Chapter reader ────────────────────────────────────────────────────────────
function ChapterReader({
  chapter,
  onBack,
  onNext,
  hasNext,
}: {
  chapter: LearnChapter
  onBack: () => void
  onNext: () => void
  hasNext: boolean
}) {
  const Icon = chapterIcon(chapter.icon)

  return (
    <div className="max-w-lg mx-auto px-4 pb-16">
      {/* Top bar */}
      <div className="sticky top-0 z-10 -mx-4 px-4 py-3 bg-[#f7f5fa]/90 backdrop-blur border-b border-[#efe9f3] flex items-center justify-between">
        <button onClick={onBack} className="btn-ghost -ml-3 flex items-center gap-1">
          <ArrowLeft size={16} />
          Curriculum
        </button>
        <div className="flex items-center gap-2">
          <span className={`badge ${levelBadgeClass(chapter.level)}`}>{chapter.level}</span>
          <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
            <Clock size={12} />
            {chapter.reading_time_min} min
          </span>
        </div>
      </div>

      <div className="animate-slide-up space-y-8 pt-6">
        {/* Hero */}
        <header className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-11 w-11 rounded-2xl bg-primary-700 text-white font-serif font-bold text-lg shadow-[0_4px_14px_rgba(106,15,142,0.28)]">
              {chapter.number}
            </span>
            <Icon size={22} className="text-primary-700" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-ink leading-tight text-balance">{chapter.title}</h1>
          <p className="text-sm text-ink-soft leading-relaxed">{chapter.subtitle}</p>
          <p className="text-[11px] text-ink-muted italic pt-1">{chapter.guidelines_version}</p>
        </header>

        {/* Learning objectives */}
        <div className="callout-key">
          <div className="eyebrow text-primary-700 mb-2">
            <Target size={13} />
            LEARNING OBJECTIVES
          </div>
          <ul className="space-y-2">
            {chapter.learning_objectives.map((obj, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-sheen" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        {chapter.sections.map((section) => (
          <SectionView key={section.id} section={section} />
        ))}

        {/* Key references */}
        <section className="space-y-2">
          <div className="eyebrow text-ink-muted">KEY REFERENCES</div>
          <ul className="space-y-1">
            {chapter.key_references.map((ref, i) => (
              <li key={i} className="text-[11px] text-ink-muted leading-relaxed">
                {ref}
              </li>
            ))}
          </ul>
        </section>

        {/* Navigation */}
        <div className="space-y-2.5 pt-2">
          {hasNext ? (
            <button onClick={onNext} className="btn-primary">
              Next chapter
              <ArrowRight size={16} />
            </button>
          ) : null}
          <button onClick={onBack} className="btn-secondary w-full">
            Back to curriculum
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Chapter list ──────────────────────────────────────────────────────────────
function ChapterCard({ chapter, onOpen }: { chapter: LearnChapter; onOpen: () => void }) {
  const Icon = chapterIcon(chapter.icon)
  return (
    <button onClick={onOpen} className="card-interactive w-full text-left p-4">
      <div className="flex items-start gap-3">
        <span className="grid place-items-center h-10 w-10 flex-shrink-0 rounded-xl bg-primary-700 text-white font-serif font-bold shadow-[0_3px_10px_rgba(106,15,142,0.26)]">
          {chapter.number}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Icon size={15} className="text-primary-700 flex-shrink-0" />
            <span className={`badge ${levelBadgeClass(chapter.level)}`}>{chapter.level}</span>
          </div>
          <h3 className="font-serif font-bold text-ink leading-snug text-balance">{chapter.title}</h3>
          <p className="text-xs text-ink-soft leading-relaxed mt-1">{chapter.subtitle}</p>
          <div className="flex items-center gap-3 mt-2.5 text-[11px] text-ink-muted">
            <span className="inline-flex items-center gap-1">
              <Clock size={11} />
              {chapter.reading_time_min} min
            </span>
            <span>{chapter.sections.length} sections</span>
            <span>{chapter.learning_objectives.length} objectives</span>
          </div>
        </div>
      </div>
    </button>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PageLearn() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const totalChapters = LEARN_CHAPTERS.length
  const totalMinutes = LEARN_CHAPTERS.reduce((sum, c) => sum + c.reading_time_min, 0)

  if (activeIndex !== null) {
    const chapter = LEARN_CHAPTERS[activeIndex]
    const hasNext = activeIndex < totalChapters - 1
    return (
      <ChapterReader
        chapter={chapter}
        onBack={() => setActiveIndex(null)}
        onNext={() => setActiveIndex(activeIndex + 1)}
        hasNext={hasNext}
      />
    )
  }

  return (
    <div className="max-w-lg mx-auto px-4 pb-16">
      <header className="pt-6 pb-4">
        <div className="eyebrow text-primary-700">CURRICULUM</div>
        <h1 className="font-serif text-3xl font-bold text-ink mt-1">Learn</h1>
        <p className="text-sm text-ink-soft leading-relaxed mt-1">
          Structured peritoneal surface oncology — from foundations to mastery
        </p>
        <div className="rule-gold mt-3" />
        <p className="text-xs text-ink-muted mt-3">
          {totalChapters} chapters · {totalMinutes} min of reading
        </p>
      </header>

      <div className="space-y-3 animate-slide-up">
        {LEARN_CHAPTERS.map((chapter, i) => (
          <ChapterCard key={chapter.id} chapter={chapter} onOpen={() => setActiveIndex(i)} />
        ))}
      </div>
    </div>
  )
}
