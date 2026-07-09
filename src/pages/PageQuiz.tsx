import { useState } from 'react'
import { GraduationCap, Zap, BookOpen, ClipboardList, RotateCcw, ChevronRight, CheckCircle2, XCircle, Trophy } from 'lucide-react'
import { useQuiz } from '../hooks/useQuiz'
import type { QuizTopic } from '../types'

const TOPICS: { id: QuizTopic; label: string }[] = [
  { id: 'patient_selection', label: 'Patient Selection' },
  { id: 'hipec_protocols', label: 'HIPEC Protocols' },
  { id: 'pci_scoring', label: 'PCI Scoring' },
  { id: 'completeness', label: 'Completeness (CC)' },
  { id: 'landmark_trials', label: 'Landmark Trials' },
  { id: 'molecular_markers', label: 'Molecular Markers' },
  { id: 'pipac', label: 'PIPAC' },
  { id: 'morbidity', label: 'Morbidity' },
  { id: 'perioperative', label: 'Perioperative' },
  { id: 'histology_specific', label: 'Histology-Specific' },
]

// ─── Mode selector ─────────────────────────────────────────────────────────────

function ModeSelector({ stats, onStart, onReset }: { stats: ReturnType<typeof useQuiz>['stats']; onStart: (mode: 'quick' | 'topic' | 'exam', topic?: QuizTopic) => void; onReset: () => void }) {
  const [topicMode, setTopicMode] = useState(false)
  const accuracy = stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : null

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-gray-900">E-Learning Quiz</h1>
        <p className="text-xs text-gray-400">CRS+HIPEC · PIPAC · Peritoneal Surface Oncology</p>
      </div>

      {/* Stats */}
      {stats.totalAnswered > 0 && (
        <div className="grid grid-cols-3 gap-3">
          <div className="card text-center">
            <div className="text-xl font-bold text-primary-600">{stats.totalAnswered}</div>
            <div className="text-[10px] text-gray-400">Answered</div>
          </div>
          <div className="card text-center">
            <div className="text-xl font-bold text-green-600">{accuracy}%</div>
            <div className="text-[10px] text-gray-400">Accuracy</div>
          </div>
          <div className="card text-center">
            <div className="text-xl font-bold text-amber-500">{stats.bestStreak}</div>
            <div className="text-[10px] text-gray-400">Best streak</div>
          </div>
        </div>
      )}

      {/* Quick modes */}
      <div className="space-y-2">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Quiz Modes</h2>
        <button
          onClick={() => onStart('quick')}
          className="w-full card text-left active:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="bg-primary-100 p-2 rounded-lg">
              <Zap size={18} className="text-primary-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-base">Quick Quiz</p>
              <p className="text-xs text-gray-400">5 random questions · ~3 min</p>
            </div>
          </div>
        </button>
        <button
          onClick={() => onStart('exam')}
          className="w-full card text-left active:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-2 rounded-lg">
              <ClipboardList size={18} className="text-amber-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-base">Exam Mode</p>
              <p className="text-xs text-gray-400">20 questions · board-level difficulty</p>
            </div>
          </div>
        </button>
        <button
          onClick={() => setTopicMode(v => !v)}
          className="w-full card text-left active:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <BookOpen size={18} className="text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-base">By Topic</p>
              <p className="text-xs text-gray-400">10 questions · focused review</p>
            </div>
          </div>
          <ChevronRight size={14} className={`ml-auto text-gray-300 transition-transform ${topicMode ? 'rotate-90' : ''}`} />
        </button>

        {topicMode && (
          <div className="pl-2 space-y-1.5">
            {TOPICS.map(t => (
              <button
                key={t.id}
                onClick={() => onStart('topic', t.id)}
                className="w-full text-left text-[15px] px-3 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Current streak */}
      {stats.streak > 0 && (
        <div className="card text-center col-span-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-orange-500">🔥 {stats.streak}</span>
            <span className="text-xs text-gray-400">Current streak</span>
          </div>
        </div>
      )}

      {/* Weak areas */}
      {stats.wrongQuestionIds.length > 0 && (
        <div>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Spaced Repetition</h2>
          <div className="card">
            <p className="text-[15px] text-gray-700 leading-relaxed">
              You have <span className="font-bold text-red-600">{stats.wrongQuestionIds.length}</span> questions marked for review.
            </p>
            <p className="text-xs text-gray-400 mt-0.5">These appear twice as often in future quizzes.</p>
          </div>
        </div>
      )}

      <button
        onClick={onReset}
        className="text-xs text-gray-300 underline w-full text-center"
      >
        Reset all progress
      </button>
    </div>
  )
}

// ─── Question card ─────────────────────────────────────────────────────────────

function QuestionCard({
  question,
  selectedAnswer,
  revealed,
  onAnswer,
  onReveal,
  onNext,
  index,
  total,
}: {
  question: ReturnType<typeof useQuiz>['currentQuestion']
  selectedAnswer?: 'A' | 'B' | 'C' | 'D' | 'E'
  revealed: boolean
  onAnswer: (choice: 'A' | 'B' | 'C' | 'D' | 'E') => void
  onReveal: () => void
  onNext: () => void
  index: number
  total: number
}) {
  if (!question) return null
  const q = question

  const opts = (['A', 'B', 'C', 'D', 'E'] as const).filter(opt => opt in q.options) as ('A' | 'B' | 'C' | 'D' | 'E')[]

  function optionClass(opt: 'A' | 'B' | 'C' | 'D' | 'E') {
    if (!revealed) {
      return selectedAnswer === opt ? 'quiz-option bg-primary-50 border-primary-300 text-primary-800' : 'quiz-option'
    }
    if (opt === q.correct) return 'quiz-option quiz-correct'
    if (opt === selectedAnswer && opt !== q.correct) return 'quiz-option quiz-wrong'
    return 'quiz-option quiz-neutral'
  }

  const difficultyColor = question.difficulty <= 1 ? 'text-green-600' : question.difficulty === 2 ? 'text-amber-600' : 'text-red-600'
  const difficultyLabel = question.difficulty <= 1 ? 'Easy' : question.difficulty === 2 ? 'Medium' : 'Hard'

  return (
    <div className="space-y-4">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">{index + 1} / {total}</span>
        <div className="flex gap-1.5 items-center">
          <span className={`text-xs font-medium ${difficultyColor}`}>{difficultyLabel}</span>
          <span className="badge badge-gray text-[10px]">{question.topic.replace(/_/g, ' ')}</span>
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div
          className="bg-primary-500 h-1.5 rounded-full transition-all"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      {/* Stem */}
      <div className="card">
        <p className="text-[16px] font-medium text-gray-800 leading-relaxed">{question.stem}</p>
        {question.guideline_ref && (
          <p className="text-[10px] text-gray-400 mt-2 italic">{question.guideline_ref}</p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-2">
        {opts.map(opt => (
          <button
            key={opt}
            disabled={revealed}
            onClick={() => onAnswer(opt)}
            className={`${optionClass(opt)} w-full text-left flex gap-3`}
          >
            <span className="font-bold text-xs flex-shrink-0 mt-0.5">{opt}.</span>
            <span className="text-[15px] leading-relaxed">{question.options[opt]}</span>
            {revealed && opt === question.correct && (
              <CheckCircle2 size={16} className="ml-auto text-green-600 flex-shrink-0 mt-0.5" />
            )}
            {revealed && opt === selectedAnswer && opt !== question.correct && (
              <XCircle size={16} className="ml-auto text-red-500 flex-shrink-0 mt-0.5" />
            )}
          </button>
        ))}
      </div>

      {/* Reveal / Next */}
      {!revealed && selectedAnswer && (
        <button onClick={onReveal} className="w-full btn-primary">
          Check Answer
        </button>
      )}

      {revealed && (
        <div className="space-y-3">
          <div className={`card ${selectedAnswer === question.correct ? 'border-green-200 bg-green-50' : 'border-red-100 bg-red-50'}`}>
            <div className="flex items-center gap-2 mb-2">
              {selectedAnswer === question.correct
                ? <CheckCircle2 size={16} className="text-green-600" />
                : <XCircle size={16} className="text-red-500" />}
              <span className={`font-semibold text-sm ${selectedAnswer === question.correct ? 'text-green-700' : 'text-red-600'}`}>
                {selectedAnswer === question.correct ? 'Correct!' : 'Incorrect'}
              </span>
            </div>
            <p className="text-[15px] text-gray-700 leading-relaxed">{question.explanation}</p>
            {question.pearl && (
              <div className="mt-2 pt-2 border-t border-gray-200">
                <p className="text-xs font-semibold text-amber-700 mb-0.5">Pearl</p>
                <p className="text-[15px] text-gray-600 leading-relaxed">{question.pearl}</p>
              </div>
            )}
          </div>
          <button onClick={onNext} className="w-full btn-primary flex items-center justify-center gap-2">
            Next <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Score screen ─────────────────────────────────────────────────────────────

function ScoreScreen({ correct, total, onRestart }: { correct: number; total: number; onRestart: () => void }) {
  const pct = Math.round((correct / total) * 100)
  const grade = pct >= 80 ? { label: 'Excellent', color: 'text-green-600' } :
                pct >= 60 ? { label: 'Good', color: 'text-amber-600' } :
                { label: 'Needs review', color: 'text-red-600' }

  return (
    <div className="text-center space-y-6 py-8">
      <div className="flex justify-center">
        <div className="bg-primary-100 p-6 rounded-full">
          <Trophy size={40} className="text-primary-600" />
        </div>
      </div>
      <div>
        <div className="relative w-24 h-24 mx-auto">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />
            <circle
              cx="48" cy="48" r="40" fill="none"
              stroke={pct >= 80 ? '#16a34a' : pct >= 60 ? '#d97706' : '#dc2626'}
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - pct / 100)}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.8s ease' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${grade.color}`}>{pct}%</span>
          </div>
        </div>
        <div className={`text-lg font-semibold mt-1 ${grade.color}`}>{grade.label}</div>
        <div className="text-sm text-gray-500 mt-1">{correct} / {total} correct</div>
      </div>
      <div className="card text-left max-w-xs mx-auto">
        <div className="text-xs text-gray-400 text-center">
          Wrong answers added to spaced repetition pool for targeted review.
        </div>
      </div>
      <button onClick={onRestart} className="btn-primary inline-flex items-center gap-2 mx-auto">
        <RotateCcw size={16} /> New Quiz
      </button>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PageQuiz() {
  const { session, stats, currentQuestion, startSession, answer, reveal, next, endSession, resetStats } = useQuiz()

  if (!session) {
    return (
      <div className="px-4 pt-6 pb-4 max-w-lg mx-auto">
        <ModeSelector stats={stats} onStart={startSession} onReset={resetStats} />
      </div>
    )
  }

  if (session.finished) {
    const correct = Object.entries(session.answers).filter(([qId, choice]) => {
      const q = session.questions.find(x => x.id === qId)
      return q && q.correct === choice
    }).length
    return (
      <div className="px-4 pt-6 pb-4 max-w-lg mx-auto">
        <ScoreScreen correct={correct} total={session.questions.length} onRestart={endSession} />
      </div>
    )
  }

  if (!currentQuestion) return null

  const revealed = !!session.revealed[currentQuestion.id]
  const selectedAnswer = session.answers[currentQuestion.id] as 'A' | 'B' | 'C' | 'D' | 'E' | undefined

  return (
    <div className="px-4 pt-6 pb-4 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button onClick={endSession} className="text-xs text-gray-400">✕ Exit</button>
        <span className="text-xs text-gray-400 capitalize">{session.mode} mode</span>
      </div>
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        revealed={revealed}
        onAnswer={choice => answer(currentQuestion.id, choice)}
        onReveal={() => reveal(currentQuestion.id)}
        onNext={next}
        index={session.currentIndex}
        total={session.questions.length}
      />
    </div>
  )
}
