import { useNavigate } from 'react-router-dom'
import {
  Search, Stethoscope, BookOpen, GraduationCap, ChevronRight, Zap,
  Sparkles, Layers, ArrowRight, Clock, Activity,
} from 'lucide-react'
import { useQuiz } from '../hooks/useQuiz'
import { PC_DISEASES } from '../data/diseases'
import { LANDMARK_TRIALS } from '../data/landmark_trials'
import { QUIZ_QUESTIONS } from '../data/quiz_questions'
import { LEARN_CHAPTERS } from '../data/learn_content'
import { InstitutionLogo, CreatorPhoto } from '../components/Institutions'

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden bg-tsinghua-deep text-white rounded-b-[2rem] shadow-hero">
      {/* energy orbits */}
      <svg className="absolute -right-16 -top-20 opacity-40" width="320" height="320" viewBox="0 0 320 320" fill="none" aria-hidden>
        <circle cx="160" cy="160" r="150" stroke="#dda92b" strokeWidth="1.2" opacity="0.5" />
        <circle cx="160" cy="160" r="112" stroke="#ffffff" strokeWidth="1" opacity="0.25" />
        <circle cx="160" cy="160" r="74" stroke="#dda92b" strokeWidth="1" opacity="0.4" />
      </svg>
      <div className="absolute -left-10 bottom-[-40px] w-56 h-56 rounded-full bg-primary-500/30 blur-3xl" aria-hidden />

      <div className="relative max-w-lg mx-auto px-5 pt-6 pb-8">
        {/* Institution logos */}
        <div className="flex items-center gap-4 mb-5">
          <InstitutionLogo which="tsinghua" theme="dark" className="h-10 max-w-[44%]" />
          <span className="w-px h-9 bg-white/25" />
          <InstitutionLogo which="btch" theme="dark" className="h-10 max-w-[52%]" />
        </div>

        <div className="eyebrow !text-gold-300 mb-3">
          <Sparkles size={13} /> Peritoneal Surface Oncology Academy
        </div>

        <h1 className="font-serif text-[31px] leading-[1.1] font-bold text-balance">
          Master Peritoneal<br />Surface Oncology
        </h1>
        <p className="mt-3.5 text-[15px] text-white/80 leading-[1.65] max-w-[20rem]">
          A board-level academy for CRS+HIPEC, PIPAC and cytoreductive surgery — from first principles to landmark evidence.
        </p>

        {/* faculty */}
        <div className="mt-5 flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <CreatorPhoto file="yan-li.jpg" initials="YL" size={44} ring="gold" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">Prof. Yan Li</div>
              <div className="text-[10px] text-white/60">MD PhD · Author</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <CreatorPhoto file="pablo-lozano.jpg" initials="PL" size={44} ring="white" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">Dr. Pablo Lozano</div>
              <div className="text-[10px] text-white/60">MD PhD · Author</div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-5 flex gap-2.5">
          <button
            onClick={() => navigate('/learn')}
            className="flex-1 bg-gold-sheen text-ink font-bold text-sm rounded-xl py-3 flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(221,169,43,0.4)] active:scale-[0.98] transition-transform"
          >
            <Layers size={16} /> Start learning
          </button>
          <button
            onClick={() => navigate('/quiz')}
            className="px-4 bg-white/12 backdrop-blur border border-white/20 text-white font-semibold text-sm rounded-xl py-3 flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform"
          >
            <GraduationCap size={16} /> Quiz
          </button>
        </div>
      </div>
    </section>
  )
}

// ── Stat strip ────────────────────────────────────────────────────────────────
function StatStrip() {
  const stats = [
    { value: String(LEARN_CHAPTERS.length), label: 'Chapters', Icon: Layers },
    { value: `${QUIZ_QUESTIONS.length}`,    label: 'Questions', Icon: GraduationCap },
    { value: String(LANDMARK_TRIALS.length),label: 'Trials',    Icon: BookOpen },
    { value: String(PC_DISEASES.length),    label: 'Entities',  Icon: Activity },
  ]
  return (
    <div className="grid grid-cols-4 gap-2 -mt-6 relative z-10 max-w-lg mx-auto px-4">
      {stats.map(({ value, label, Icon }) => (
        <div key={label} className="card px-1.5 py-3 flex flex-col items-center gap-0.5">
          <Icon size={15} className="text-primary-600 mb-0.5" />
          <div className="font-display text-lg font-bold text-ink leading-none">{value}</div>
          <div className="text-[9.5px] font-semibold uppercase tracking-wide text-ink-muted">{label}</div>
        </div>
      ))}
    </div>
  )
}

// ── Daily question ────────────────────────────────────────────────────────────
function DailyQuestion() {
  const { dailyQuestion } = useQuiz()
  const navigate = useNavigate()
  if (!dailyQuestion) return null
  return (
    <button
      onClick={() => navigate('/quiz')}
      className="w-full text-left card-interactive p-4 border-l-4 border-l-primary-600"
    >
      <div className="flex items-center gap-2 mb-2">
        <Zap size={14} className="text-primary-600" />
        <span className="eyebrow">Daily Question</span>
      </div>
      <p className="text-sm font-medium text-ink leading-snug line-clamp-2">{dailyQuestion.stem}</p>
      <div className="flex items-center gap-1 mt-2 text-primary-700 font-semibold">
        <span className="text-xs">Answer now</span>
        <ChevronRight size={13} />
      </div>
    </button>
  )
}

// ── Pearl of the day ──────────────────────────────────────────────────────────
function PearlOfDay() {
  const idx = Math.floor(Date.now() / 86_400_000) % PC_DISEASES.length
  const disease = PC_DISEASES[idx]
  if (!disease || !disease.clinical_pearls?.length) return null
  const pearl = disease.clinical_pearls[0]
  return (
    <div className="callout-pearl">
      <div className="flex items-center gap-2 mb-1.5">
        <Sparkles size={14} className="text-gold-600" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-700">
          Clinical Pearl · {disease.name_short}
        </span>
      </div>
      <p className="text-sm text-ink-soft leading-relaxed">{pearl}</p>
    </div>
  )
}

// ── Curriculum banner ─────────────────────────────────────────────────────────
function CurriculumBanner() {
  const navigate = useNavigate()
  const mins = LEARN_CHAPTERS.reduce((s, c) => s + (c.reading_time_min ?? 0), 0)
  return (
    <button
      onClick={() => navigate('/learn')}
      className="w-full text-left relative overflow-hidden rounded-2xl bg-tsinghua p-4 text-white active:scale-[0.99] transition-transform shadow-lift"
    >
      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-20">
        <Layers size={72} />
      </div>
      <div className="eyebrow !text-gold-300 mb-1.5"><BookOpen size={12} /> The Curriculum</div>
      <div className="font-serif text-lg font-bold leading-tight">Six chapters, foundation to mastery</div>
      <div className="flex items-center gap-3 mt-2 text-white/75 text-xs">
        <span className="inline-flex items-center gap-1"><Clock size={12} /> {mins} min</span>
        <span className="inline-flex items-center gap-1"><Layers size={12} /> {LEARN_CHAPTERS.length} chapters</span>
        <span className="inline-flex items-center gap-1 text-gold-300 font-semibold">Begin <ArrowRight size={12} /></span>
      </div>
    </button>
  )
}

// ── Quick access ──────────────────────────────────────────────────────────────
const QUICK_LINKS = [
  { to: '/search',     Icon: Search,     label: 'Disease Atlas',   sub: `${PC_DISEASES.length} entities` },
  { to: '/cases',      Icon: Stethoscope, label: 'Case Simulator', sub: 'Decision pathways' },
  { to: '/trials',     Icon: BookOpen,   label: 'Landmark Trials', sub: `${LANDMARK_TRIALS.length} studies` },
  { to: '/quiz',       Icon: GraduationCap, label: 'E-Learning Quiz', sub: `${QUIZ_QUESTIONS.length} questions` },
]

function QuickAccess() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="section-title text-base">Explore</span>
        <span className="rule-gold" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {QUICK_LINKS.map(({ to, Icon, label, sub }) => (
          <button
            key={to}
            onClick={() => navigate(to)}
            className="card-interactive p-4 text-left flex flex-col gap-2"
          >
            <span className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center">
              <Icon size={18} className="text-primary-700" />
            </span>
            <div>
              <div className="text-sm font-bold text-ink leading-tight">{label}</div>
              <div className="text-[11px] text-ink-muted mt-0.5">{sub}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PageHome() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <StatStrip />
      <div className="max-w-lg mx-auto px-4 pt-5 pb-4 space-y-5">
        <DailyQuestion />
        <PearlOfDay />
        <CurriculumBanner />
        <QuickAccess />
        <p className="text-[10px] text-ink-muted/70 text-center pt-1">
          Educational tool only · Validated against NCCN · ESMO · PSOGI · Chicago Consensus 2020 · JPGA
        </p>
      </div>
    </div>
  )
}
