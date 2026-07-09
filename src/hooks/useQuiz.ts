import React, { useState, useCallback, useMemo } from 'react'
import { QUIZ_QUESTIONS } from '../data/quiz_questions'
import type { QuizMode, QuizQuestion, QuizSession, QuizStats, QuizTopic } from '../types'

const EMPTY_STATS: QuizStats = {
  totalAnswered: 0,
  totalCorrect: 0,
  streak: 0,
  bestStreak: 0,
  masteryByTopic: {} as QuizStats['masteryByTopic'],
  wrongQuestionIds: [],
  bookmarks: [],
  lastPlayed: 0,
}

const STORAGE_KEY = 'pc-quiz-stats'
const BOOKMARKS_KEY = 'pc-quiz-bookmarks'

/** Default per-question countdown for Timed mode. */
export const TIMED_SECONDS = 75

function loadStats(): QuizStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as QuizStats
      return { ...EMPTY_STATS, ...parsed }
    }
  } catch {}
  return EMPTY_STATS
}

function saveStats(s: QuizStats): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)) } catch {}
}

function loadBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed as string[]
    }
  } catch {}
  return []
}

function saveBookmarks(ids: string[]): void {
  try { localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(ids)) } catch {}
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export interface StartOptions {
  topic?: QuizTopic
  count?: number
}

function pickQuestions(
  mode: QuizMode,
  opts: StartOptions,
  wrongIds: string[],
  bookmarks: string[],
): QuizQuestion[] {
  let pool = QUIZ_QUESTIONS

  if (mode === 'topic' && opts.topic) {
    pool = pool.filter(q => q.topic === opts.topic)
  } else if (mode === 'weak') {
    pool = pool.filter(q => wrongIds.includes(q.id))
  } else if (mode === 'bookmark') {
    pool = pool.filter(q => bookmarks.includes(q.id))
  } else if (mode === 'practice' || mode === 'timed' || mode === 'exam') {
    // Weight previously-wrong questions for spaced repetition.
    if (wrongIds.length > 0) {
      const wrong = pool.filter(q => wrongIds.includes(q.id))
      pool = [...pool, ...wrong]
    }
  }

  const shuffled = shuffle(pool)
  const defaultCount = mode === 'exam' ? 20 : 10
  const requested = opts.count ?? defaultCount
  const count = Math.min(requested, shuffled.length)
  return shuffled.slice(0, count)
}

export function useQuiz() {
  const [session, setSession] = useState<QuizSession | null>(null)
  const [stats, setStats] = useState<QuizStats>(loadStats)
  const [bookmarks, setBookmarks] = useState<string[]>(loadBookmarks)

  const startSession = useCallback((mode: QuizMode, opts: StartOptions = {}) => {
    const questions = pickQuestions(mode, opts, stats.wrongQuestionIds, bookmarks)
    setSession({
      mode,
      topic: opts.topic,
      questions,
      currentIndex: 0,
      answers: {},
      revealed: {},
      startTime: Date.now(),
      finished: false,
      secondsPerQuestion: mode === 'timed' ? TIMED_SECONDS : undefined,
    })
  }, [stats.wrongQuestionIds, bookmarks])

  const answer = useCallback((questionId: string, choice: 'A' | 'B' | 'C' | 'D' | 'E' | null) => {
    setSession(prev => {
      if (!prev) return prev
      return { ...prev, answers: { ...prev.answers, [questionId]: choice } }
    })
  }, [])

  const reveal = useCallback((questionId: string) => {
    setSession(prev => {
      if (!prev) return prev
      if (prev.revealed[questionId]) return prev
      const q = prev.questions.find(x => x.id === questionId)
      if (!q) return prev
      const isCorrect = prev.answers[questionId] === q.correct
      const newRevealed = { ...prev.revealed, [questionId]: true }

      setStats(s => {
        const newStreak = isCorrect ? s.streak + 1 : 0
        const topicStats = s.masteryByTopic[q.topic] ?? { correct: 0, total: 0 }
        const newWrong = isCorrect
          ? s.wrongQuestionIds.filter(id => id !== questionId)
          : s.wrongQuestionIds.includes(questionId) ? s.wrongQuestionIds : [...s.wrongQuestionIds, questionId]
        return {
          ...s,
          totalAnswered: s.totalAnswered + 1,
          totalCorrect: s.totalCorrect + (isCorrect ? 1 : 0),
          streak: newStreak,
          bestStreak: Math.max(s.bestStreak, newStreak),
          masteryByTopic: {
            ...s.masteryByTopic,
            [q.topic]: { correct: topicStats.correct + (isCorrect ? 1 : 0), total: topicStats.total + 1 },
          },
          wrongQuestionIds: newWrong,
          lastPlayed: Date.now(),
        }
      })

      return { ...prev, revealed: newRevealed }
    })
  }, [])

  const next = useCallback(() => {
    setSession(prev => {
      if (!prev) return prev
      const nextIndex = prev.currentIndex + 1
      if (nextIndex >= prev.questions.length) return { ...prev, finished: true, currentIndex: nextIndex }
      return { ...prev, currentIndex: nextIndex }
    })
  }, [])

  const endSession = useCallback(() => setSession(null), [])

  const toggleBookmark = useCallback((questionId: string) => {
    setBookmarks(prev =>
      prev.includes(questionId) ? prev.filter(id => id !== questionId) : [...prev, questionId]
    )
  }, [])

  const isBookmarked = useCallback((questionId: string) => bookmarks.includes(questionId), [bookmarks])

  const resetStats = useCallback(() => {
    setStats(EMPTY_STATS)
    setBookmarks([])
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
    try { localStorage.removeItem(BOOKMARKS_KEY) } catch {}
  }, [])

  React.useEffect(() => { saveStats(stats) }, [stats])
  React.useEffect(() => { saveBookmarks(bookmarks) }, [bookmarks])

  const currentQuestion = useMemo(() =>
    session ? session.questions[session.currentIndex] ?? null : null,
    [session]
  )

  const dailyQuestion = useMemo(() => {
    const idx = Math.floor(Date.now() / 86_400_000) % QUIZ_QUESTIONS.length
    return QUIZ_QUESTIONS[idx]
  }, [])

  return {
    session,
    stats,
    bookmarks,
    currentQuestion,
    dailyQuestion,
    startSession,
    answer,
    reveal,
    next,
    endSession,
    toggleBookmark,
    isBookmarked,
    resetStats,
  }
}
