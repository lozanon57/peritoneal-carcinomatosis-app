import { useState, useEffect, useRef } from 'react'
import {
  Zap, Timer, ClipboardList, BookOpen, AlertTriangle, Star,
  RotateCcw, ChevronRight, CheckCircle2, XCircle, Trophy, Lightbulb,
  Flame, X, BookMarked, FileText,
} from 'lucide-react'
import { useQuiz, TIMED_SECONDS } from '../hooks/useQuiz'
import { useAppI18n } from '../App'
import type { QuizMode, QuizQuestion, QuizStats, QuizTopic } from '../types'

type Choice = 'A' | 'B' | 'C' | 'D' | 'E'

const TOPICS: { id: QuizTopic; key: string }[] = [
  { id: 'patient_selection', key: 'quiz.topic_patient_selection' },
  { id: 'hipec_protocols', key: 'quiz.topic_hipec_protocols' },
  { id: 'pci_scoring', key: 'quiz.topic_pci_scoring' },
  { id: 'completeness', key: 'quiz.topic_completeness' },
  { id: 'landmark_trials', key: 'quiz.topic_landmark_trials' },
  { id: 'molecular_markers', key: 'quiz.topic_molecular_markers' },
  { id: 'pipac', key: 'quiz.topic_pipac' },
  { id: 'morbidity', key: 'quiz.topic_morbidity' },
  { id: 'perioperative', key: 'quiz.topic_perioperative' },
  { id: 'histology_specific', key: 'quiz.topic_histology_specific' },
]

const COUNT_OPTIONS = [5, 10, 20] as const

// ─── Difficulty helper ─────────────────────────────────────────────────────────

function difficultyMeta(d: number) {
  if (d <= 1) return { labelKey: 'quiz.diff_easy', cls: 'badge-green' }
  if (d === 2) return { labelKey: 'quiz.diff_medium', cls: 'badge-gold' }
  return { labelKey: 'quiz.diff_hard', cls: 'badge-red' }
}

function fmtTime(secs: number): string {
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

// ─── Configurator (mode picker) ─────────────────────────────────────────────────

function Configurator({
  stats,
  bookmarkCount,
  onStart,
  onReset,
}: {
  stats: QuizStats
  bookmarkCount: number
  onStart: (mode: QuizMode, opts?: { topic?: QuizTopic; count?: number }) => void
  onReset: () => void
}) {
  const { t } = useAppI18n()
  const [count, setCount] = useState<number>(10)
  const [topicOpen, setTopicOpen] = useState(false)

  const accuracy = stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 0
  const weakCount = stats.wrongQuestionIds.length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="eyebrow mb-1">{t('quiz.board_review')}</div>
        <h1 className="t-h1">{t('quiz.title')}</h1>
        <div className="rule-gold mt-2" />
        <p className="text-xs text-ink-muted mt-2">{t('quiz.tagline')}</p>
      </div>

      {/* Overall stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="card p-3 text-center">
          <div className="text-2xl font-bold text-primary-700 font-serif">{stats.totalAnswered}</div>
          <div className="text-[10px] uppercase tracking-wide text-ink-muted mt-0.5">{t('quiz.stat_answered')}</div>
        </div>
        <div className="card p-3 text-center">
          <div className="text-2xl font-bold text-emerald-600 font-serif">{accuracy}%</div>
          <div className="text-[10px] uppercase tracking-wide text-ink-muted mt-0.5">{t('quiz.stat_accuracy')}</div>
        </div>
        <div className="card p-3 text-center">
          <div className="text-2xl font-bold text-gold-600 font-serif">{stats.bestStreak}</div>
          <div className="text-[10px] uppercase tracking-wide text-ink-muted mt-0.5">{t('quiz.stat_best_streak')}</div>
        </div>
      </div>

      {stats.streak > 0 && (
        <div className="flex items-center justify-center gap-2 text-sm">
          <Flame size={16} className="text-orange-500" />
          <span className="font-semibold text-ink-soft">{stats.streak}</span>
          <span className="text-ink-muted">{t('quiz.current_streak')}</span>
        </div>
      )}

      {/* Question count */}
      <div>
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted mb-2">{t('quiz.questions_per_session')}</h2>
        <div className="flex gap-2">
          {COUNT_OPTIONS.map(n => (
            <button
              key={n}
              onClick={() => setCount(n)}
              className={`${count === n ? 'chip chip-active' : 'chip'} flex-1 justify-center py-2`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Modes */}
      <div className="space-y-2.5">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-muted">{t('quiz.choose_mode')}</h2>

        <ModeCard
          icon={<Zap size={18} className="text-primary-700" />}
          tint="bg-primary-100"
          title={t('quiz.mode_practice')}
          subtitle={`${count} ${t('quiz.questions_word')} · ${t('quiz.immediate_feedback')}`}
          onClick={() => onStart('practice', { count })}
        />
        <ModeCard
          icon={<Timer size={18} className="text-cardinal-600" />}
          tint="bg-cardinal-100"
          title={t('quiz.mode_timed')}
          subtitle={`${count} ${t('quiz.questions_word')} · ${TIMED_SECONDS}s ${t('quiz.each')} · ${t('quiz.board_pressure')}`}
          onClick={() => onStart('timed', { count })}
        />
        <ModeCard
          icon={<ClipboardList size={18} className="text-gold-700" />}
          tint="bg-gold-100"
          title={t('quiz.mode_exam')}
          subtitle={t('quiz.mode_exam_sub')}
          onClick={() => onStart('exam', { count: 20 })}
        />

        {/* By topic */}
        <button
          onClick={() => setTopicOpen(v => !v)}
          className="w-full card-interactive p-4 text-left flex items-center gap-3"
        >
          <div className="bg-primary-100 p-2.5 rounded-xl flex-shrink-0">
            <BookOpen size={18} className="text-primary-700" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-ink text-[15px]">{t('quiz.mode_by_topic')}</p>
            <p className="text-xs text-ink-muted">{t('quiz.mode_by_topic_sub')}</p>
          </div>
          <ChevronRight size={16} className={`ml-auto text-ink-muted transition-transform ${topicOpen ? 'rotate-90' : ''}`} />
        </button>
        {topicOpen && (
          <div className="grid grid-cols-2 gap-1.5 pl-1">
            {TOPICS.map(topic => (
              <button
                key={topic.id}
                onClick={() => onStart('topic', { topic: topic.id, count })}
                className="text-left text-[13px] px-3 py-2.5 rounded-xl bg-primary-50/60 text-primary-800 font-medium hover:bg-primary-100 transition-colors"
              >
                {t(topic.key)}
              </button>
            ))}
          </div>
        )}

        {/* Weak areas */}
        <ModeCard
          icon={<AlertTriangle size={18} className="text-cardinal-600" />}
          tint="bg-cardinal-100"
          title={t('quiz.mode_weak')}
          subtitle={weakCount > 0 ? `${weakCount} ${t('quiz.questions_word')} ${t('quiz.in_review_pool')}` : t('quiz.mode_weak_none')}
          disabled={weakCount === 0}
          onClick={() => onStart('weak', { count: Math.max(count, weakCount) })}
        />

        {/* Bookmarked */}
        <ModeCard
          icon={<BookMarked size={18} className="text-gold-700" />}
          tint="bg-gold-100"
          title={t('quiz.mode_bookmarked')}
          subtitle={bookmarkCount > 0 ? `${bookmarkCount} ${t('quiz.starred_questions')}` : t('quiz.mode_bookmarked_none')}
          disabled={bookmarkCount === 0}
          onClick={() => onStart('bookmark', { count: Math.max(count, bookmarkCount) })}
        />
      </div>

      <button onClick={onReset} className="text-xs text-ink-muted underline w-full text-center pt-2">
        {t('quiz.reset_progress')}
      </button>
    </div>
  )
}

function ModeCard({
  icon, tint, title, subtitle, onClick, disabled,
}: {
  icon: React.ReactNode
  tint: string
  title: string
  subtitle: string
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full card-interactive p-4 text-left flex items-center gap-3 ${disabled ? 'opacity-45 pointer-events-none' : ''}`}
    >
      <div className={`${tint} p-2.5 rounded-xl flex-shrink-0`}>{icon}</div>
      <div className="min-w-0">
        <p className="font-semibold text-ink text-[15px]">{title}</p>
        <p className="text-xs text-ink-muted">{subtitle}</p>
      </div>
      <ChevronRight size={16} className="ml-auto text-ink-muted flex-shrink-0" />
    </button>
  )
}

// ─── Question runner ────────────────────────────────────────────────────────────

function QuestionRunner({
  question,
  mode,
  secondsPerQuestion,
  index,
  total,
  selected,
  revealed,
  bookmarked,
  onSelect,
  onTimeout,
  onToggleBookmark,
  onNext,
}: {
  question: QuizQuestion
  mode: QuizMode
  secondsPerQuestion?: number
  index: number
  total: number
  selected: Choice | null | undefined
  revealed: boolean
  bookmarked: boolean
  onSelect: (choice: Choice) => void
  onTimeout: () => void
  onToggleBookmark: () => void
  onNext: () => void
}) {
  const { t } = useAppI18n()
  const isExam = mode === 'exam'
  const isTimed = mode === 'timed'
  const answered = selected !== undefined
  const isLast = index + 1 >= total
  const correct = revealed && selected === question.correct

  const explanationRef = useRef<HTMLDivElement>(null)
  const [timeLeft, setTimeLeft] = useState(secondsPerQuestion ?? TIMED_SECONDS)

  // Reset timer when the question changes.
  useEffect(() => {
    if (isTimed) setTimeLeft(secondsPerQuestion ?? TIMED_SECONDS)
  }, [question.id, isTimed, secondsPerQuestion])

  // Countdown + auto-submit on expiry.
  useEffect(() => {
    if (!isTimed || revealed) return
    if (timeLeft <= 0) {
      onTimeout()
      return
    }
    const t = setTimeout(() => setTimeLeft(s => s - 1), 1000)
    return () => clearTimeout(t)
  }, [isTimed, revealed, timeLeft, onTimeout])

  // Auto-scroll to explanation on reveal (mobile-friendly).
  useEffect(() => {
    if (revealed && explanationRef.current) {
      const id = setTimeout(() => {
        explanationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 120)
      return () => clearTimeout(id)
    }
  }, [revealed])

  const opts = (['A', 'B', 'C', 'D', 'E'] as const).filter(o => o in question.options) as Choice[]
  const diff = difficultyMeta(question.difficulty)

  function optionClass(opt: Choice): string {
    if (revealed) {
      if (opt === question.correct) return 'border-emerald-500 bg-emerald-50'
      if (opt === selected) return 'border-cardinal-400 bg-cardinal-50'
      return 'border-line bg-surface2 opacity-60'
    }
    if (opt === selected) return 'border-primary-500 bg-primary-50'
    return 'border-line hover:border-primary-300 hover:bg-primary-50/50'
  }

  function badgeClass(opt: Choice): string {
    if (revealed) {
      if (opt === question.correct) return 'bg-emerald-500 text-white border-emerald-500'
      if (opt === selected) return 'bg-cardinal-500 text-white border-cardinal-500'
      return 'bg-surface text-ink-muted border-line'
    }
    if (opt === selected) return 'bg-primary-600 text-white border-primary-600'
    return 'bg-surface text-ink-soft border-line'
  }

  const showNext = revealed || (isExam && answered)

  return (
    <div className="space-y-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className={`badge ${diff.cls}`}>{t(diff.labelKey)}</span>
        <div className="flex items-center gap-2">
          {isTimed && !revealed && (
            <span className={`inline-flex items-center gap-1 text-sm font-semibold tabular-nums ${timeLeft <= 10 ? 'text-cardinal-600' : 'text-ink-soft'}`}>
              <Timer size={15} />{fmtTime(Math.max(0, timeLeft))}
            </span>
          )}
          <button
            onClick={onToggleBookmark}
            aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark question'}
            className="w-11 h-11 -mr-1.5 flex items-center justify-center rounded-xl hover:bg-gold-50 transition-colors"
          >
            <Star size={20} className={bookmarked ? 'fill-gold-400 text-gold-500' : 'text-ink-muted'} />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-ink-muted">{t('quiz.q_label')} {index + 1} {t('quiz.q_of')} {total}</span>
          <span className="badge badge-gray text-[10px]">{question.topic.replace(/_/g, ' ')}</span>
        </div>
        <div className="w-full bg-primary-100 rounded-full h-1.5 overflow-hidden">
          <div className="bg-gold-sheen h-1.5 rounded-full transition-all duration-500" style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
      </div>

      {/* Stem */}
      <div className="card p-5 lg:p-7">
        <p className="text-[16px] lg:text-lg leading-relaxed text-ink font-serif">{question.stem}</p>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {opts.map(opt => (
          <button
            key={opt}
            disabled={revealed}
            onClick={() => onSelect(opt)}
            className={`w-full text-left flex items-start gap-3 p-4 lg:p-5 rounded-xl border-2 transition-all ${optionClass(opt)}`}
          >
            <span className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold ${badgeClass(opt)}`}>
              {opt}
            </span>
            <span className="text-[15px] leading-relaxed text-ink-soft flex-1 pt-0.5">{question.options[opt]}</span>
            {revealed && opt === question.correct && <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-1" />}
            {revealed && opt === selected && opt !== question.correct && <XCircle size={18} className="text-cardinal-500 flex-shrink-0 mt-1" />}
          </button>
        ))}
      </div>

      {/* Explanation (non-exam, after reveal) */}
      {revealed && !isExam && (
        <div ref={explanationRef} className="space-y-3 pt-1">
          {/* Result banner */}
          <div className={`rounded-xl p-3.5 flex items-center gap-2 ${correct ? 'bg-emerald-50 border border-emerald-200' : 'bg-cardinal-50 border border-cardinal-100'}`}>
            {correct
              ? <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
              : <XCircle size={18} className="text-cardinal-500 flex-shrink-0" />}
            <span className={`font-semibold text-sm ${correct ? 'text-emerald-700' : 'text-cardinal-700'}`}>
              {correct
                ? t('quiz.correct_short')
                : selected == null
                  ? `${t('quiz.times_up')} ${question.correct}`
                  : `${t('quiz.incorrect_answer')} ${question.correct}`}
            </span>
          </div>

          {/* Pearl */}
          {question.pearl && (
            <div className="callout-pearl flex gap-2.5">
              <Lightbulb size={18} className="text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-700 mb-1">{t('quiz.teaching_point')}</p>
                <p className="text-[15px] leading-relaxed">{question.pearl}</p>
              </div>
            </div>
          )}

          {/* Explanation */}
          <div className="callout-key">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-700 mb-1">{t('quiz.explanation_h')}</p>
            <p className="text-[15px] leading-relaxed">{question.explanation}</p>
          </div>

          {/* Refs */}
          {(question.guideline_ref || question.trial_ref) && (
            <div className="space-y-1 px-1">
              {question.guideline_ref && (
                <p className="text-[11px] text-ink-muted flex items-start gap-1.5"><FileText size={12} className="mt-0.5 flex-shrink-0" />{question.guideline_ref}</p>
              )}
              {question.trial_ref && (
                <p className="text-[11px] text-ink-muted flex items-start gap-1.5"><FileText size={12} className="mt-0.5 flex-shrink-0" />{question.trial_ref}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Exam: subtle recorded hint */}
      {isExam && answered && !revealed && (
        <p className="text-xs text-ink-muted text-center">{t('quiz.answer_recorded')}</p>
      )}

      {/* Next / Finish */}
      {showNext && (
        <button onClick={onNext} className="btn-primary">
          {isLast ? t('quiz.finish') : t('quiz.next')} <ChevronRight size={16} />
        </button>
      )}
    </div>
  )
}

// ─── Score screen ───────────────────────────────────────────────────────────────

function ScoreScreen({
  questions, answers, mode, onRestart, onReview,
}: {
  questions: QuizQuestion[]
  answers: Record<string, Choice | null>
  mode: QuizMode
  onRestart: () => void
  onReview: () => void
}) {
  const { t } = useAppI18n()
  const total = questions.length
  const correct = questions.filter(q => answers[q.id] === q.correct).length
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  const grade = pct >= 80 ? { label: t('quiz.grade_excellent'), color: '#059669', text: 'text-emerald-600' } :
                pct >= 60 ? { label: t('quiz.grade_good'), color: '#dda92b', text: 'text-gold-600' } :
                { label: t('quiz.grade_needs_review'), color: '#c0392b', text: 'text-cardinal-600' }
  const wrong = total - correct

  return (
    <div className="text-center space-y-6 py-6">
      <div className="flex justify-center">
        <div className="bg-primary-100 p-5 rounded-full">
          <Trophy size={36} className="text-primary-700" />
        </div>
      </div>

      <div>
        <div className="relative w-28 h-28 mx-auto">
          <svg className="w-28 h-28 -rotate-90" viewBox="0 0 112 112">
            <circle cx="56" cy="56" r="48" fill="none" stroke="#f0eaf5" strokeWidth="9" />
            <circle
              cx="56" cy="56" r="48" fill="none"
              stroke={grade.color} strokeWidth="9"
              strokeDasharray={`${2 * Math.PI * 48}`}
              strokeDashoffset={`${2 * Math.PI * 48 * (1 - pct / 100)}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.9s ease' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-3xl font-bold font-serif ${grade.text}`}>{pct}%</span>
          </div>
        </div>
        <div className={`text-lg font-semibold mt-2 font-serif ${grade.text}`}>{grade.label}</div>
        <div className="text-sm text-ink-muted mt-0.5">{correct} / {total} {t('quiz.correct_word')} · {mode} {t('quiz.mode')}</div>
      </div>

      {wrong > 0 && (
        <div className="callout-key text-left">
          <p className="text-[13px] leading-relaxed text-ink-soft">
            <span className="font-semibold text-cardinal-600">{wrong}</span> {t('quiz.wrong_pool_suffix')}
          </p>
        </div>
      )}

      <div className="space-y-2.5">
        {mode === 'exam' && (
          <button onClick={onReview} className="btn-secondary w-full">{t('quiz.review_answers')}</button>
        )}
        <button onClick={onRestart} className="btn-primary">
          <RotateCcw size={16} /> {t('quiz.new_quiz')}
        </button>
      </div>
    </div>
  )
}

// ─── Exam review list ───────────────────────────────────────────────────────────

function ExamReview({
  questions, answers, onBack,
}: {
  questions: QuizQuestion[]
  answers: Record<string, Choice | null>
  onBack: () => void
}) {
  const { t } = useAppI18n()
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="section-title text-xl">{t('quiz.review_answers')}</h1>
        <button onClick={onBack} className="text-xs text-ink-muted flex items-center gap-1"><X size={14} /> {t('common.close')}</button>
      </div>
      <div className="rule-gold" />
      {questions.map((q, i) => {
        const chosen = answers[q.id]
        const correct = chosen === q.correct
        const opts = (['A', 'B', 'C', 'D', 'E'] as const).filter(o => o in q.options) as Choice[]
        return (
          <div key={q.id} className="card p-4 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs text-ink-muted">Q{i + 1}</span>
              {correct
                ? <span className="badge badge-green text-[10px]">{t('quiz.correct_badge')}</span>
                : <span className="badge badge-red text-[10px]">{t('quiz.incorrect_badge')}</span>}
            </div>
            <p className="text-[15px] leading-relaxed text-ink font-serif">{q.stem}</p>
            <div className="space-y-1.5">
              {opts.map(opt => {
                const isCorrect = opt === q.correct
                const isChosen = opt === chosen
                return (
                  <div
                    key={opt}
                    className={`flex items-start gap-2 text-[13px] leading-relaxed p-2 rounded-lg ${
                      isCorrect ? 'bg-emerald-50 text-emerald-900'
                      : isChosen ? 'bg-cardinal-50 text-cardinal-700'
                      : 'text-ink-muted'
                    }`}
                  >
                    <span className="font-bold flex-shrink-0">{opt}.</span>
                    <span className="flex-1">{q.options[opt]}</span>
                    {isCorrect && <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0" />}
                    {isChosen && !isCorrect && <XCircle size={15} className="text-cardinal-500 flex-shrink-0" />}
                  </div>
                )
              })}
            </div>
            {q.pearl && (
              <div className="callout-pearl text-[13px] flex gap-2">
                <Lightbulb size={15} className="text-gold-600 flex-shrink-0 mt-0.5" />
                <span>{q.pearl}</span>
              </div>
            )}
          </div>
        )
      })}
      <button onClick={onBack} className="btn-primary">{t('quiz.back_to_results')}</button>
    </div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────────

export default function PageQuiz() {
  const {
    session, stats, bookmarks, currentQuestion,
    startSession, answer, reveal, next, endSession,
    toggleBookmark, isBookmarked, resetStats,
  } = useQuiz()

  const { t } = useAppI18n()
  const [reviewing, setReviewing] = useState(false)

  function handleReset() {
    if (window.confirm(t('quiz.reset_confirm'))) resetStats()
  }

  // Configurator
  if (!session) {
    return (
      <div className="wrap-read pt-6 lg:pt-10 pb-10 animate-fade-in">
        <Configurator
          stats={stats}
          bookmarkCount={bookmarks.length}
          onStart={startSession}
          onReset={handleReset}
        />
      </div>
    )
  }

  // Finished
  if (session.finished) {
    if (reviewing) {
      return (
        <div className="wrap-read pt-6 lg:pt-10 pb-10 animate-fade-in">
          <ExamReview
            questions={session.questions}
            answers={session.answers}
            onBack={() => setReviewing(false)}
          />
        </div>
      )
    }
    return (
      <div className="wrap-read pt-6 lg:pt-10 pb-10 animate-fade-in">
        <ScoreScreen
          questions={session.questions}
          answers={session.answers}
          mode={session.mode}
          onRestart={() => { setReviewing(false); endSession() }}
          onReview={() => setReviewing(true)}
        />
      </div>
    )
  }

  if (!currentQuestion) return null

  const q = currentQuestion
  const revealed = !!session.revealed[q.id]
  const selected = session.answers[q.id] as Choice | null | undefined
  const isExam = session.mode === 'exam'

  function handleSelect(choice: Choice) {
    if (revealed) return
    answer(q.id, choice)
    if (!isExam) reveal(q.id)
  }

  function handleTimeout() {
    if (revealed) return
    answer(q.id, null)
    reveal(q.id)
  }

  return (
    <div className="px-4 pt-6 pb-10 max-w-lg mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <button onClick={endSession} className="text-xs text-ink-muted flex items-center gap-1">
          <X size={14} /> {t('quiz.exit')}
        </button>
        <span className="text-xs text-ink-muted capitalize">{session.mode} {t('quiz.mode')}</span>
      </div>

      <QuestionRunner
        key={q.id}
        question={q}
        mode={session.mode}
        secondsPerQuestion={session.secondsPerQuestion}
        index={session.currentIndex}
        total={session.questions.length}
        selected={selected}
        revealed={revealed}
        bookmarked={isBookmarked(q.id)}
        onSelect={handleSelect}
        onTimeout={handleTimeout}
        onToggleBookmark={() => toggleBookmark(q.id)}
        onNext={next}
      />
    </div>
  )
}
