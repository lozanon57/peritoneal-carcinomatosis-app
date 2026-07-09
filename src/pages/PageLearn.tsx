import { useState, useEffect } from 'react'
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
  List,
  X,
  Microscope,
  Stethoscope,
  Activity,
  Dna,
  Syringe,
  HeartPulse,
  ClipboardList,
  FileText,
  PenLine,
  Presentation,
  BarChart3,
  Sigma,
  BookText,
  GraduationCap,
  FlaskRound,
  Beaker,
  Pill,
  Droplet,
  Scale,
  Users,
  Search,
  Award,
  type LucideIcon,
} from 'lucide-react'
import { LEARN_CHAPTERS } from '../data/learn_content'
import type { LearnBlock, LearnChapter, LearnSection, LearnTrack } from '../types/learn'

// ── Icon resolution ──────────────────────────────────────────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  Layers, ClipboardCheck, Scissors, Thermometer, Wind, BookMarked, BookOpen,
  Microscope, Stethoscope, Activity, Dna, Syringe, HeartPulse, ClipboardList,
  FileText, PenLine, Presentation, BarChart3, Sigma, BookText, GraduationCap,
  FlaskConical, FlaskRound, Beaker, Pill, Droplet, Scale, Users, Search, Award,
  Target, Gem,
}

// ── Track order + accent for the sidebar ──────────────────────────────────────
const TRACK_ORDER: LearnTrack[] = [
  'Foundations',
  'Disease-Specific',
  'Surgical Technique',
  'Regional Therapy',
  'Perioperative Care',
  'Evidence & Trials',
  'Academic Surgery',
]

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
        <p className="text-[16px] text-ink-soft leading-[1.85]">
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
          {block.content ? <p className="text-[15px] leading-[1.7]">{renderInline(block.content)}</p> : null}
          {block.ref ? <p className="mt-2 text-[11px] text-ink-muted italic">{block.ref}</p> : null}
        </div>
      )
    }

    case 'list':
      return (
        <div>
          {block.title ? <p className="font-serif font-semibold text-ink text-base mb-2">{block.title}</p> : null}
          <ul className="space-y-1.5">
            {(block.items ?? []).map((item, i) => (
              <li key={i} className="flex gap-2.5 text-[15px] text-ink-soft leading-relaxed">
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
          {block.title ? <p className="font-serif font-semibold text-ink text-base mb-2">{block.title}</p> : null}
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
    <section id={`sec-${section.id}`} className="space-y-4 scroll-mt-24">
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

// ── Reading progress bar ──────────────────────────────────────────────────────
function ReadingProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const el = document.scrollingElement || document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setPct(max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return (
    <div className="fixed top-14 left-0 right-0 z-30 h-1 pointer-events-none">
      <div className="h-full bg-gold-sheen transition-[width] duration-150 ease-out" style={{ width: `${pct}%` }} />
    </div>
  )
}

// ── Chapter reader ────────────────────────────────────────────────────────────
function ChapterReader({
  chapter,
  onBack,
  onNext,
  hasNext,
  onOpenContents,
}: {
  chapter: LearnChapter
  onBack: () => void
  onNext: () => void
  hasNext: boolean
  onOpenContents: () => void
}) {
  const Icon = chapterIcon(chapter.icon)

  return (
    <div className="max-w-lg mx-auto px-4 pb-16">
      <ReadingProgress />
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
          <button
            onClick={onOpenContents}
            className="ml-1 p-1.5 rounded-lg text-primary-700 bg-primary-50 active:scale-95 transition-transform"
            aria-label="Table of contents"
          >
            <List size={16} />
          </button>
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
          <p className="text-[15px] text-ink-soft leading-relaxed">{chapter.subtitle}</p>
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
              <li key={i} className="flex gap-2.5 text-[15px] text-ink-soft leading-relaxed">
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
          <p className="text-sm text-ink-soft leading-relaxed mt-1">{chapter.subtitle}</p>
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

// ── Track grouping ────────────────────────────────────────────────────────────
function tracksGrouped(): { track: LearnTrack; items: { chapter: LearnChapter; index: number }[] }[] {
  const groups = new Map<LearnTrack, { chapter: LearnChapter; index: number }[]>()
  LEARN_CHAPTERS.forEach((chapter, index) => {
    const t = (chapter.track ?? 'Foundations') as LearnTrack
    if (!groups.has(t)) groups.set(t, [])
    groups.get(t)!.push({ chapter, index })
  })
  return TRACK_ORDER.filter(t => groups.has(t)).map(t => ({ track: t, items: groups.get(t)! }))
}

// ── Sidebar (table of contents) ───────────────────────────────────────────────
function Sidebar({
  open, onClose, activeIndex, onJumpChapter,
}: {
  open: boolean
  onClose: () => void
  activeIndex: number | null
  onJumpChapter: (index: number) => void
}) {
  const groups = tracksGrouped()
  const activeChapter = activeIndex !== null ? LEARN_CHAPTERS[activeIndex] : null

  function jumpToSection(sectionId: string) {
    onClose()
    setTimeout(() => {
      document.getElementById(`sec-${sectionId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  return (
    <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute left-0 top-0 bottom-0 w-[86%] max-w-sm bg-white shadow-hero flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#efe9f3] pt-safe">
          <div>
            <div className="eyebrow text-primary-700">Curriculum</div>
            <div className="font-serif font-bold text-ink text-lg leading-none mt-0.5">Contents</div>
          </div>
          <button onClick={onClose} className="p-2 text-ink-muted" aria-label="Close"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3 no-scrollbar">
          {activeChapter && (
            <div className="mb-4 rounded-xl bg-primary-50/60 p-2.5">
              <div className="eyebrow text-primary-700 px-1 mb-1.5">In this chapter</div>
              <ul className="space-y-0.5">
                {activeChapter.sections.map(s => (
                  <li key={s.id}>
                    <button
                      onClick={() => jumpToSection(s.id)}
                      className="w-full text-left text-[13px] text-ink-soft px-2 py-1.5 rounded-lg hover:bg-white active:bg-white transition-colors leading-snug"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {groups.map(({ track, items }) => (
            <div key={track} className="mb-3">
              <div className="eyebrow text-ink-muted px-2 mb-1.5">{track}</div>
              <ul className="space-y-0.5">
                {items.map(({ chapter, index }) => {
                  const isActive = index === activeIndex
                  return (
                    <li key={chapter.id}>
                      <button
                        onClick={() => onJumpChapter(index)}
                        className={`w-full text-left flex items-start gap-2.5 px-2 py-2 rounded-lg transition-colors ${
                          isActive ? 'bg-primary-700' : 'hover:bg-primary-50'
                        }`}
                      >
                        <span className={`font-mono text-[11px] font-bold mt-0.5 ${isActive ? 'text-gold-300' : 'text-primary-700'}`}>
                          {chapter.number}
                        </span>
                        <span className="min-w-0">
                          <span className={`block text-[13.5px] font-semibold leading-snug ${isActive ? 'text-white' : 'text-ink'}`}>
                            {chapter.title}
                          </span>
                          <span className={`block text-[11px] mt-0.5 ${isActive ? 'text-white/70' : 'text-ink-muted'}`}>
                            {chapter.reading_time_min} min · {chapter.sections.length} sections
                          </span>
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PageLearn() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const totalChapters = LEARN_CHAPTERS.length
  const totalMinutes = LEARN_CHAPTERS.reduce((sum, c) => sum + c.reading_time_min, 0)
  const hours = Math.floor(totalMinutes / 60)
  const groups = tracksGrouped()

  function jumpChapter(index: number) {
    setActiveIndex(index)
    setSidebarOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} activeIndex={activeIndex} onJumpChapter={jumpChapter} />

      {activeIndex !== null ? (
        <ChapterReader
          chapter={LEARN_CHAPTERS[activeIndex]}
          onBack={() => setActiveIndex(null)}
          onNext={() => { setActiveIndex(activeIndex + 1); window.scrollTo(0, 0) }}
          hasNext={activeIndex < totalChapters - 1}
          onOpenContents={() => setSidebarOpen(true)}
        />
      ) : (
        <div className="max-w-lg mx-auto px-4 pb-16">
          <header className="pt-6 pb-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="eyebrow text-primary-700">CURRICULUM</div>
                <h1 className="font-serif text-3xl font-bold text-ink mt-1">Learn</h1>
              </div>
              <button
                onClick={() => setSidebarOpen(true)}
                className="mt-1 flex items-center gap-1.5 bg-primary-50 text-primary-800 font-semibold px-3 py-2 rounded-xl text-xs active:scale-95 transition-transform"
              >
                <List size={15} /> Contents
              </button>
            </div>
            <p className="text-[15px] text-ink-soft leading-relaxed mt-1.5">
              The most detailed peritoneal surface oncology curriculum — foundations, disease mastery,
              operative technique, evidence, and academic surgery.
            </p>
            <div className="rule-gold mt-3" />
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-muted mt-3">
              <span className="font-semibold text-ink-soft">{totalChapters} chapters</span>
              <span>{hours} h {totalMinutes % 60} min of reading</span>
              <span>{groups.length} tracks</span>
            </div>
          </header>

          <div className="space-y-7 animate-slide-up">
            {groups.map(({ track, items }) => (
              <div key={track}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="section-title text-base">{track}</span>
                  <span className="rule-gold" />
                  <span className="text-[11px] text-ink-muted ml-auto whitespace-nowrap">
                    {items.length} ch · {items.reduce((s, i) => s + i.chapter.reading_time_min, 0)} min
                  </span>
                </div>
                <div className="space-y-3">
                  {items.map(({ chapter, index }) => (
                    <ChapterCard key={chapter.id} chapter={chapter} onOpen={() => jumpChapter(index)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
