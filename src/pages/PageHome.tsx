import { useNavigate } from 'react-router-dom'
import {
  Search, Stethoscope, BookOpen, GraduationCap, ChevronRight, Zap,
  Sparkles, Layers, ArrowRight, Clock, Activity,
} from 'lucide-react'
import { useQuiz } from '../hooks/useQuiz'
import { useAppI18n } from '../App'
import { PC_DISEASES } from '../data/diseases'
import { LANDMARK_TRIALS } from '../data/landmark_trials'
import { QUIZ_QUESTIONS } from '../data/quiz_questions'
import { LEARN_CHAPTERS } from '../data/learn_content'
import { InstitutionLogo, CreatorPhoto } from '../components/Institutions'

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const navigate = useNavigate()
  const { t } = useAppI18n()
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
          <Sparkles size={13} /> {t('home.hero_eyebrow')}
        </div>

        <h1 className="font-serif text-[31px] leading-[1.1] font-bold text-balance">
          {t('home.hero_title_1')}<br />{t('home.hero_title_2')}
        </h1>
        <p className="mt-3.5 text-[15px] text-white/80 leading-[1.65] max-w-[20rem]">
          {t('home.hero_subtitle')}
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
              <div className="text-[10px] text-white/60">MD PhD · EBPSM</div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-5 flex gap-2.5">
          <button
            onClick={() => navigate('/learn')}
            className="flex-1 bg-gold-sheen text-ink font-bold text-sm rounded-xl py-3 flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(221,169,43,0.4)] active:scale-[0.98] transition-transform"
          >
            <Layers size={16} /> {t('home.start_learning')}
          </button>
          <button
            onClick={() => navigate('/quiz')}
            className="px-4 bg-white/12 backdrop-blur border border-white/20 text-white font-semibold text-sm rounded-xl py-3 flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform"
          >
            <GraduationCap size={16} /> {t('home.quiz')}
          </button>
        </div>
      </div>
    </section>
  )
}

// ── Stat strip ────────────────────────────────────────────────────────────────
function StatStrip() {
  const { t } = useAppI18n()
  const stats = [
    { value: String(LEARN_CHAPTERS.length), label: t('home.stat_chapters'), Icon: Layers },
    { value: `${QUIZ_QUESTIONS.length}`,    label: t('home.stat_questions'), Icon: GraduationCap },
    { value: String(LANDMARK_TRIALS.length),label: t('home.stat_trials'),    Icon: BookOpen },
    { value: String(PC_DISEASES.length),    label: t('home.stat_entities'),  Icon: Activity },
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
  const { t } = useAppI18n()
  if (!dailyQuestion) return null
  return (
    <button
      onClick={() => navigate('/quiz')}
      className="w-full text-left card-interactive p-4 border-l-4 border-l-primary-600"
    >
      <div className="flex items-center gap-2 mb-2">
        <Zap size={14} className="text-primary-600" />
        <span className="eyebrow">{t('home.daily_question')}</span>
      </div>
      <p className="text-sm font-medium text-ink leading-snug line-clamp-2">{dailyQuestion.stem}</p>
      <div className="flex items-center gap-1 mt-2 text-primary-700 font-semibold">
        <span className="text-xs">{t('home.answer_now')}</span>
        <ChevronRight size={13} />
      </div>
    </button>
  )
}

// ── Pearl of the day ──────────────────────────────────────────────────────────
function PearlOfDay() {
  const { t } = useAppI18n()
  const idx = Math.floor(Date.now() / 86_400_000) % PC_DISEASES.length
  const disease = PC_DISEASES[idx]
  if (!disease || !disease.clinical_pearls?.length) return null
  const pearl = disease.clinical_pearls[0]
  return (
    <div className="callout-pearl">
      <div className="flex items-center gap-2 mb-1.5">
        <Sparkles size={14} className="text-gold-600" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-700">
          {t('home.clinical_pearl')} · {disease.name_short}
        </span>
      </div>
      <p className="text-sm text-ink-soft leading-relaxed">{pearl}</p>
    </div>
  )
}

// ── Curriculum banner ─────────────────────────────────────────────────────────
function CurriculumBanner() {
  const navigate = useNavigate()
  const { t } = useAppI18n()
  const mins = LEARN_CHAPTERS.reduce((s, c) => s + (c.reading_time_min ?? 0), 0)
  return (
    <button
      onClick={() => navigate('/learn')}
      className="w-full text-left relative overflow-hidden rounded-2xl bg-tsinghua p-4 text-white active:scale-[0.99] transition-transform shadow-lift"
    >
      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-20">
        <Layers size={72} />
      </div>
      <div className="eyebrow !text-gold-300 mb-1.5"><BookOpen size={12} /> {t('home.curriculum_banner')}</div>
      <div className="font-serif text-lg font-bold leading-tight">{t('home.curriculum_headline')}</div>
      <div className="flex items-center gap-3 mt-2 text-white/75 text-xs">
        <span className="inline-flex items-center gap-1"><Clock size={12} /> {mins} {t('common.min')}</span>
        <span className="inline-flex items-center gap-1"><Layers size={12} /> {LEARN_CHAPTERS.length} {t('home.chapters_word')}</span>
        <span className="inline-flex items-center gap-1 text-gold-300 font-semibold">{t('home.begin')} <ArrowRight size={12} /></span>
      </div>
    </button>
  )
}

// ── Quick access ──────────────────────────────────────────────────────────────
function QuickAccess() {
  const navigate = useNavigate()
  const { t } = useAppI18n()
  const QUICK_LINKS = [
    { to: '/search',     Icon: Search,     label: t('home.ql_atlas'),   sub: `${PC_DISEASES.length} ${t('home.entities_word')}` },
    { to: '/cases',      Icon: Stethoscope, label: t('home.ql_cases'), sub: t('home.ql_cases_sub') },
    { to: '/trials',     Icon: BookOpen,   label: t('home.ql_trials'), sub: `${LANDMARK_TRIALS.length} ${t('home.studies_word')}` },
    { to: '/quiz',       Icon: GraduationCap, label: t('home.ql_quiz'), sub: `${QUIZ_QUESTIONS.length} ${t('home.questions_word')}` },
  ]
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="section-title text-base">{t('home.explore')}</span>
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
  const { t } = useAppI18n()
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
          {t('home.disclaimer_line')}
        </p>
      </div>
    </div>
  )
}
