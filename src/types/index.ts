// ─── Disease / Histology types ────────────────────────────────────────────────

export type PCBehavior = 'primary_peritoneal' | 'metastatic' | 'borderline'
export type PCOrigin = 'colorectal' | 'appendiceal' | 'mesothelioma' | 'ovarian' | 'gastric' | 'sarcoma' | 'small_bowel' | 'dsrct' | 'primary_peritoneal_carcinoma' | 'signet_ring'
export type Population = 'adult' | 'pediatric' | 'both'
export type HIPECEligibility = 'standard' | 'selected' | 'investigational' | 'contraindicated'

export interface MolecularMarker {
  alteration: string
  frequency?: string
  therapeutic_relevance?: string
}

export interface HIPECProtocol {
  drug: string
  dose: string
  temperature: string
  duration: string
  route: string
  notes?: string
}

export interface PCDisease {
  id: string
  name: string
  name_short: string
  alternative_names?: string[]
  behavior: PCBehavior
  origin: PCOrigin
  population: Population
  pci_threshold: string
  hipec_eligibility: HIPECEligibility
  description: string
  epidemiology: string
  histology: string
  ihc: string[]
  molecular_markers: MolecularMarker[]
  staging: string
  patient_selection: string
  hipec_protocols: HIPECProtocol[]
  pipac_indication: string
  systemic_treatment: string
  neoadjuvant?: string
  follow_up: string
  prognosis: string
  clinical_pearls: string[]
  tags: string[]
}

// ─── Algorithm types ─────────────────────────────────────────────────────────

export interface AlgorithmNode {
  id: string
  type: 'start' | 'decision' | 'action' | 'result' | 'referral'
  text: string
  detail?: string
  yes?: string
  no?: string
  options?: { text: string; next: string }[]
  next?: string
  reference?: string
}

export interface Algorithm {
  id: string
  title: string
  subtitle: string
  category: 'selection' | 'protocol' | 'staging' | 'pipac' | 'followup'
  nodes: AlgorithmNode[]
  references: string[]
  version: string
  source: string
}

// ─── Landmark Trial types ─────────────────────────────────────────────────────

export type EvidenceLevel = 'Ia' | 'Ib' | 'IIa' | 'IIb' | 'III' | 'IV'
export type StudyType = 'RCT' | 'phase-II' | 'phase-III' | 'meta-analysis' | 'prospective' | 'retrospective' | 'registry'

export interface LandmarkTrial {
  id: string
  name: string
  year: number
  publication: string
  doi?: string
  histologies: string[]
  clinical_question: string
  key_result: string
  practice_impact: string
  evidence_level: EvidenceLevel
  study_type: StudyType
  full_citation: string
  n_patients?: number
  pico?: {
    population: string       // P — who was studied (n, disease, setting)
    intervention: string     // I — what the experimental arm received
    comparator: string       // C — the control/comparison arm
    outcome: string          // O — primary (and key secondary) endpoints
  }
  background?: string        // why the question mattered / prior evidence gap
  design?: string            // design detail: randomisation, blinding, phase, sample size, follow-up
  results_detail?: string    // detailed results with numbers (HR, CI, medians, p, subgroups)
  practice_change?: string   // explicit: how it changed clinical practice (before → after)
  criticisms?: string        // limitations, caveats, generalisability
}

// ─── Quiz types ───────────────────────────────────────────────────────────────

export type QuizType = 'mcq' | 'true_false' | 'clinical_case'
export type QuizDifficulty = 1 | 2 | 3
export type QuizTopic =
  | 'patient_selection'
  | 'hipec_protocols'
  | 'pci_scoring'
  | 'completeness'
  | 'landmark_trials'
  | 'molecular_markers'
  | 'pipac'
  | 'morbidity'
  | 'perioperative'
  | 'histology_specific'

export interface QuizQuestion {
  id: string
  type: QuizType
  topic: QuizTopic
  difficulty: QuizDifficulty
  stem: string
  options: { A: string; B: string; C: string; D: string; E?: string }
  correct: 'A' | 'B' | 'C' | 'D' | 'E'
  explanation: string
  guideline_ref?: string
  trial_ref?: string
  pearl: string
}

export type QuizMode = 'practice' | 'timed' | 'exam' | 'topic' | 'weak' | 'bookmark'

export interface QuizSession {
  mode: QuizMode
  topic?: QuizTopic
  questions: QuizQuestion[]
  currentIndex: number
  answers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E' | null>
  revealed: Record<string, boolean>
  startTime: number
  finished: boolean
  /** Per-question countdown in seconds (timed mode only). */
  secondsPerQuestion?: number
}

export interface QuizStats {
  totalAnswered: number
  totalCorrect: number
  streak: number
  bestStreak: number
  masteryByTopic: Record<QuizTopic, { correct: number; total: number }>
  wrongQuestionIds: string[]
  /** Question ids the user has starred/bookmarked. */
  bookmarks?: string[]
  lastPlayed: number
}

// ─── i18n ─────────────────────────────────────────────────────────────────────

export type Language = 'en' | 'es'

export interface Translations {
  [key: string]: string | Translations
}
