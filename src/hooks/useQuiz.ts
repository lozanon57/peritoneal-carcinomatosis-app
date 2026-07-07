import React, { useState, useCallback, useMemo } from 'react'
import { QUIZ_QUESTIONS } from '../data/quiz_questions'
import type { QuizQuestion, QuizSession, QuizStats, QuizTopic } from '../types'

const EMPTY_STATS: QuizStats = {
  totalAnswered: 0,
  totalCorrect: 0,
  streak: 0,
  bestStreak: 0,
  masteryByTopic: {} as QuizStats['masteryByTopic'],
  wrongQuestionIds: [],
  lastPlayed: 0,
}

const STORAGE_KEY = 'pc-quiz-stats'

function loadStats(): QuizStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as QuizStats
  } catch {}
  return EMPTY_STATS
}

function saveStats(s: QuizStats): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)) } catch {}
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickQuestions(mode: QuizSession['mode'], topic?: QuizTopic, wrongIds?: string[]): QuizQuestion[] {
  let pool = QUIZ_QUESTIONS
  if (mode === 'topic' && topic) pool = pool.filter(q => q.topic === topic)
  // Weight wrong questions: add them twice for spaced repetition
  if (wrongIds && wrongIds.length > 0) {
    const wrong = pool.filter(q => wrongIds.includes(q.id))
    pool = [...pool, ...wrong]
  }
  const shuffled = shuffle(pool)
  const count = mode === 'quick' ? 5 : mode === 'exam' ? 20 : Math.min(10, shuffled.length)
  return shuffled.slice(0, count)
}

export function useQuiz() {
  const [session, setSession] = useState<QuizSession | null>(null)
  const [stats, setStats] = useState<QuizStats>(loadStats)

  const startSession = useCallback((mode: QuizSession['mode'], topic?: QuizTopic) => {
    const questions = pickQuestions(mode, topic, stats.wrongQuestionIds)
    setSession({
      mode,
      topic,
      questions,
      currentIndex: 0,
      answers: {},
      revealed: {},
      startTime: Date.now(),
      finished: false,
    })
  }, [stats.wrongQuestionIds])

  const answer = useCallback((questionId: string, choice: 'A' | 'B' | 'C' | 'D') => {
    setSession(prev => {
      if (!prev) return prev
      return { ...prev, answers: { ...prev.answers, [questionId]: choice } }
    })
  }, [])

  const reveal = useCallback((questionId: string) => {
    setSession(prev => {
      if (!prev) return prev
      const q = prev.questions.find(x => x.id === questionId)
      if (!q) return prev
      const isCorrect = prev.answers[questionId] === q.correct
      const newRevealed = { ...prev.revealed, [questionId]: true }

      // Update stats
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

  const resetStats = useCallback(() => {
    const fresh = EMPTY_STATS
    setStats(fresh)
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }, [])

  React.useEffect(() => { saveStats(stats) }, [stats])

  const currentQuestion = useMemo(() =>
    session ? session.questions[session.currentIndex] ?? null : null,
    [session]
  )

  const dailyQuestion = useMemo(() => {
    const idx = Math.floor(Date.now() / 86_400_000) % QUIZ_QUESTIONS.length
    return QUIZ_QUESTIONS[idx]
  }, [])

  return { session, stats, currentQuestion, dailyQuestion, startSession, answer, reveal, next, endSession, resetStats }
}
