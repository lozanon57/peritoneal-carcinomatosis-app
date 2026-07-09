import { useState, Fragment } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  ChevronRight,
  Clock,
  Layers,
  CheckCircle2,
  Circle,
  Activity,
  Dna,
  Ribbon,
  AlertTriangle,
  Droplets,
  Microscope,
  Scissors,
  Wind,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'
import { CASE_SIMULATIONS } from '../data/case_simulations'
import { useAppI18n } from '../App'
import type { CaseSimulation, CaseNode, CaseOption, CaseVerdict } from '../types/cases'

// ── Verdict label i18n key map ─────────────────────────────────────────────────
const VERDICT_KEY: Record<CaseVerdict, string> = {
  optimal: 'cases.verdict_optimal',
  acceptable: 'cases.verdict_acceptable',
  suboptimal: 'cases.verdict_suboptimal',
  harmful: 'cases.verdict_harmful',
}

// ── Icon lookup (data stores icon by lucide name) ────────────────────────────
const ICONS: Record<string, LucideIcon> = {
  Activity,
  Dna,
  Ribbon,
  AlertTriangle,
  Droplets,
  Microscope,
  Scissors,
  Wind,
  Stethoscope,
}
function iconFor(name: string): LucideIcon {
  return ICONS[name] ?? Stethoscope
}

// ── Verdict → colour + label ─────────────────────────────────────────────────
const VERDICT_META: Record<CaseVerdict, { label: string; badge: string; text: string; ring: string; dot: string }> = {
  optimal: { label: 'Optimal', badge: 'badge-green', text: 'text-emerald-700', ring: 'border-emerald-300 bg-emerald-50', dot: 'bg-emerald-500' },
  acceptable: { label: 'Acceptable', badge: 'badge-gold', text: 'text-gold-700', ring: 'border-gold-300 bg-gold-50', dot: 'bg-gold-500' },
  suboptimal: { label: 'Suboptimal', badge: 'badge-gray', text: 'text-amber-700', ring: 'border-amber-300 bg-amber-50', dot: 'bg-amber-500' },
  harmful: { label: 'Harmful', badge: 'badge-red', text: 'text-cardinal-700', ring: 'border-cardinal-300 bg-cardinal-50', dot: 'bg-cardinal-500' },
}

const VERDICT_SCORE: Record<CaseVerdict, number> = { optimal: 2, acceptable: 1, suboptimal: 0, harmful: -1 }

// ── **bold** inline renderer ─────────────────────────────────────────────────
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}

// ── A single step recorded on the decision trail ─────────────────────────────
interface TrailStep {
  nodeTitle: string
  optionLabel: string
  verdict: CaseVerdict
}

// ── Data chips (vitals) ──────────────────────────────────────────────────────
function VitalsChips({ vitals }: { vitals: { label: string; value: string }[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {vitals.map((v, i) => (
        <div key={i} className="chip flex-col items-start !py-1.5 !px-3 leading-tight">
          <span className="text-[10px] uppercase tracking-wide text-ink-muted">{v.label}</span>
          <span className="text-sm font-semibold text-ink">{v.value}</span>
        </div>
      ))}
    </div>
  )
}

// ── Case runner ──────────────────────────────────────────────────────────────
function CaseRunner({ sim, onExit }: { sim: CaseSimulation; onExit: () => void }) {
  const { t } = useAppI18n()
  const [currentId, setCurrentId] = useState(sim.startNodeId)
  const [chosenId, setChosenId] = useState<string | null>(null) // option id revealed at a decision
  const [trail, setTrail] = useState<TrailStep[]>([])
  const [score, setScore] = useState(0)

  const node: CaseNode | undefined = sim.nodes.find(n => n.id === currentId)
  const Icon = iconFor(sim.icon)

  function restart() {
    setCurrentId(sim.startNodeId)
    setChosenId(null)
    setTrail([])
    setScore(0)
  }

  function goToNode(nextId: string) {
    setChosenId(null)
    setCurrentId(nextId)
  }

  function chooseOption(opt: CaseOption) {
    if (chosenId) return
    setChosenId(opt.id)
    if (opt.verdict) {
      setScore(s => s + VERDICT_SCORE[opt.verdict!])
      setTrail(t => [...t, { nodeTitle: node?.title ?? 'Decision', optionLabel: opt.label, verdict: opt.verdict! }])
    }
  }

  if (!node) {
    return (
      <div className="text-center py-12">
        <p className="text-ink-muted text-sm">{t('cases.node_not_found')}</p>
        <button onClick={onExit} className="btn-primary mt-4">{t('cases.back_to_cases')}</button>
      </div>
    )
  }

  const chosenOption = node.options?.find(o => o.id === chosenId) ?? null

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-16 animate-slide-up">
      {/* top bar */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={onExit} className="flex items-center gap-1.5 text-sm text-ink-soft">
          <ArrowLeft size={16} /> {t('cases.back_cases')}
        </button>
        <button onClick={restart} className="flex items-center gap-1.5 text-xs text-ink-muted">
          <RotateCcw size={13} /> {t('common.restart')}
        </button>
      </div>

      {/* case header */}
      <div className="flex items-center gap-2.5 mb-5">
        <div className="bg-primary-100 text-primary-700 p-2 rounded-xl flex-shrink-0">
          <Icon size={18} />
        </div>
        <div className="min-w-0">
          <p className="font-serif font-semibold text-ink leading-tight truncate">{sim.title}</p>
          <p className="text-xs text-ink-muted truncate">{sim.histology}</p>
        </div>
      </div>

      {/* ── SCENARIO / INFO ──────────────────────────────────────────────── */}
      {(node.type === 'scenario' || node.type === 'info') && (
        <div className="card animate-slide-up">
          {node.title && <div className="eyebrow mb-1.5">{node.title}</div>}
          <p className="text-[15px] leading-[1.7] text-ink-soft">
            <RichText text={node.body} />
          </p>
          {node.detail && (
            <p className="text-[14px] leading-[1.7] text-ink-muted mt-3 italic">
              <RichText text={node.detail} />
            </p>
          )}
          {node.vitals && node.vitals.length > 0 && <VitalsChips vitals={node.vitals} />}
          <button
            onClick={() => node.next && goToNode(node.next)}
            className="btn-primary w-full mt-5 flex items-center justify-center gap-2"
          >
            {t('common.continue')} <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ── DECISION ─────────────────────────────────────────────────────── */}
      {node.type === 'decision' && (
        <div className="animate-slide-up">
          <div className="card mb-3">
            {node.title && <div className="eyebrow mb-1.5">{node.title}</div>}
            <p className="text-[15px] leading-[1.7] text-ink font-medium">
              <RichText text={node.body} />
            </p>
            {node.detail && (
              <p className="text-[14px] leading-[1.7] text-ink-muted mt-2 italic">
                <RichText text={node.detail} />
              </p>
            )}
            {node.vitals && node.vitals.length > 0 && <VitalsChips vitals={node.vitals} />}
          </div>

          <div className="space-y-2.5">
            {node.options?.map(opt => {
              const isChosen = chosenId === opt.id
              const meta = opt.verdict ? VERDICT_META[opt.verdict] : null
              const dim = chosenId && !isChosen
              return (
                <div key={opt.id}>
                  <button
                    onClick={() => chooseOption(opt)}
                    disabled={!!chosenId}
                    className={[
                      'w-full text-left rounded-2xl border p-4 transition-all',
                      isChosen && meta ? meta.ring : 'border-line bg-white',
                      !chosenId ? 'active:scale-[0.99] card-interactive' : '',
                      dim ? 'opacity-40' : '',
                    ].join(' ')}
                  >
                    <div className="flex items-start gap-2.5">
                      {isChosen ? (
                        <CheckCircle2 size={18} className={`flex-shrink-0 mt-0.5 ${meta?.text ?? ''}`} />
                      ) : (
                        <Circle size={18} className="flex-shrink-0 mt-0.5 text-ink-muted" />
                      )}
                      <span className="text-[14.5px] leading-snug text-ink">
                        <RichText text={opt.label} />
                      </span>
                    </div>
                  </button>

                  {isChosen && meta && (
                    <div className={`mt-2 ml-1 rounded-xl border ${meta.ring} p-3.5 animate-slide-up`}>
                      <span className={`badge ${meta.badge} mb-2 inline-block`}>{t(VERDICT_KEY[opt.verdict!])}</span>
                      {opt.feedback && (
                        <p className="text-[13.5px] leading-[1.65] text-ink-soft">
                          <RichText text={opt.feedback} />
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {chosenOption && (
            <button
              onClick={() => goToNode(chosenOption.next)}
              className="btn-primary w-full mt-4 flex items-center justify-center gap-2 animate-slide-up"
            >
              {t('common.continue')} <ArrowRight size={16} />
            </button>
          )}
        </div>
      )}

      {/* ── OUTCOME ──────────────────────────────────────────────────────── */}
      {node.type === 'outcome' && (
        <OutcomeView node={node} trail={trail} score={score} onRestart={restart} onExit={onExit} />
      )}
    </div>
  )
}

// ── Outcome view ─────────────────────────────────────────────────────────────
function OutcomeView({
  node,
  trail,
  score,
  onRestart,
  onExit,
}: {
  node: CaseNode
  trail: TrailStep[]
  score: number
  onRestart: () => void
  onExit: () => void
}) {
  const { t } = useAppI18n()
  const meta = node.verdict ? VERDICT_META[node.verdict] : VERDICT_META.acceptable
  const verdictKey = VERDICT_KEY[node.verdict ?? 'acceptable']
  const maxScore = trail.length * 2

  return (
    <div className="animate-slide-up space-y-4">
      {/* verdict banner */}
      <div className={`rounded-2xl border ${meta.ring} p-5`}>
        <div className="flex items-center justify-between">
          <span className={`badge ${meta.badge}`}>{t(verdictKey)} {t('cases.pathway')}</span>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wide text-ink-muted">{t('cases.score')}</div>
            <div className={`font-serif text-lg font-semibold ${meta.text}`}>
              {score}
              <span className="text-ink-muted text-sm font-normal"> / {maxScore}</span>
            </div>
          </div>
        </div>
        {node.title && <h2 className="font-serif text-xl font-semibold text-ink mt-3">{node.title}</h2>}
        <p className="text-[15px] leading-[1.7] text-ink-soft mt-1">
          <RichText text={node.body} />
        </p>
      </div>

      {/* outcome summary */}
      {node.outcomeSummary && (
        <div className="card">
          <div className="eyebrow mb-1.5">{t('cases.outcome')}</div>
          <p className="text-[15px] leading-[1.7] text-ink-soft">
            <RichText text={node.outcomeSummary} />
          </p>
        </div>
      )}

      {/* teaching points */}
      {node.teachingPoints && node.teachingPoints.length > 0 && (
        <div className="callout-key">
          <div className="eyebrow mb-2">{t('cases.teaching_points')}</div>
          <ul className="space-y-2">
            {node.teachingPoints.map((tp, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                <span className="text-[14px] leading-[1.6] text-ink-soft">
                  <RichText text={tp} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* decision trail recap */}
      {trail.length > 0 && (
        <div className="card">
          <div className="eyebrow mb-3">{t('cases.decision_trail')}</div>
          <ol className="space-y-2.5">
            {trail.map((step, i) => {
              const m = VERDICT_META[step.verdict]
              return (
                <li key={i} className="flex items-start gap-2.5">
                  <span className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${m.dot}`} />
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wide text-ink-muted">{step.nodeTitle}</div>
                    <div className="text-[13.5px] leading-snug text-ink">{step.optionLabel}</div>
                    <span className={`text-[11px] font-medium ${m.text}`}>{t(VERDICT_KEY[step.verdict])}</span>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      )}

      {/* references */}
      {node.references && node.references.length > 0 && (
        <div className="card">
          <div className="eyebrow mb-2">{t('cases.evidence')}</div>
          <ul className="space-y-1.5">
            {node.references.map((ref, i) => (
              <li key={i} className="text-[12.5px] leading-snug text-ink-muted flex items-start gap-2">
                <span className="mt-1 h-1 w-1 rounded-full bg-primary-400 flex-shrink-0" />
                {ref}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* actions */}
      <div className="flex gap-3 pt-1">
        <button onClick={onRestart} className="btn-secondary flex-1 flex items-center justify-center gap-2">
          <RotateCcw size={15} /> {t('cases.restart_case')}
        </button>
        <button onClick={onExit} className="btn-primary flex-1 flex items-center justify-center gap-2">
          {t('cases.back_to_cases')}
        </button>
      </div>
    </div>
  )
}

// ── Case list card ───────────────────────────────────────────────────────────
function DifficultyDots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map(i => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i <= level ? 'bg-gold-500' : 'bg-line'}`}
        />
      ))}
    </div>
  )
}

function CaseCard({ sim, onStart }: { sim: CaseSimulation; onStart: () => void }) {
  const { t } = useAppI18n()
  const Icon = iconFor(sim.icon)
  return (
    <button onClick={onStart} className="card-interactive w-full text-left">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className="bg-primary-100 text-primary-700 p-2.5 rounded-xl flex-shrink-0">
            <Icon size={18} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="badge badge-purple">{sim.histology}</span>
              <DifficultyDots level={sim.difficulty} />
            </div>
            <h3 className="font-serif text-[17px] font-semibold text-ink leading-tight">{sim.title}</h3>
            <p className="text-[13px] text-ink-muted mt-0.5">{sim.subtitle}</p>
          </div>
        </div>
        <ChevronRight size={18} className="text-ink-muted flex-shrink-0 mt-1" />
      </div>

      <p className="text-[14px] leading-[1.6] text-ink-soft mt-3">{sim.summary}</p>

      <div className="flex items-center gap-4 mt-3 text-[12px] text-ink-muted">
        <span className="flex items-center gap-1.5">
          <Clock size={13} /> {sim.estMinutes} {t('common.min')}
        </span>
        <span className="flex items-center gap-1.5">
          <Layers size={13} /> {sim.nodes.length} {t('cases.nodes_word')}
        </span>
      </div>
    </button>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PageCases() {
  const { t } = useAppI18n()
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = CASE_SIMULATIONS.find(s => s.id === activeId) ?? null

  if (active) {
    return <CaseRunner sim={active} onExit={() => setActiveId(null)} />
  }

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-16 animate-slide-up">
      <div className="eyebrow">{t('cases.eyebrow_simulator')}</div>
      <h1 className="section-title font-serif mt-1">{t('cases.title')}</h1>
      <p className="text-[14px] text-ink-soft mt-1">
        {t('cases.subtitle')}
      </p>
      <div className="rule-gold my-5" />

      <div className="space-y-3.5">
        {CASE_SIMULATIONS.map(sim => (
          <CaseCard key={sim.id} sim={sim} onStart={() => setActiveId(sim.id)} />
        ))}
      </div>
    </div>
  )
}
