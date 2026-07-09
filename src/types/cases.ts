// ─────────────────────────────────────────────────────────────────────────────
// Clinical Case Simulator — branching decision pathways
// A case is a directed graph of nodes. The learner starts at startNodeId and
// makes decisions at each 'decision' node; each option routes to another node
// and may carry teaching feedback. 'outcome' nodes end a pathway.
// ─────────────────────────────────────────────────────────────────────────────

export type CaseNodeType = 'scenario' | 'decision' | 'info' | 'outcome'

export type CaseVerdict = 'optimal' | 'acceptable' | 'suboptimal' | 'harmful'

export interface CaseOption {
  id: string
  label: string            // the decision the learner can take
  next: string             // node id this option routes to
  verdict?: CaseVerdict    // quality of this choice (drives scoring + colour)
  feedback?: string        // immediate teaching feedback shown after choosing
}

export interface CaseNode {
  id: string
  type: CaseNodeType
  title?: string
  body: string             // scenario / prompt / info text (supports **bold**)
  detail?: string          // optional supporting detail (labs, imaging, PCI…)
  vitals?: { label: string; value: string }[] // optional data chips
  options?: CaseOption[]   // for 'decision' nodes
  next?: string            // for 'scenario' / 'info' nodes (linear continue)
  // outcome-node fields
  verdict?: CaseVerdict
  outcomeSummary?: string
  teachingPoints?: string[]
  references?: string[]
}

export interface CaseSimulation {
  id: string
  title: string
  subtitle: string
  histology: string        // e.g. 'Colorectal PM', 'Ovarian', 'Gastric', 'PMP'
  difficulty: 1 | 2 | 3
  icon: string             // lucide icon name
  estMinutes: number
  summary: string          // one-paragraph case overview shown on the card
  learningObjectives: string[]
  guideline_ref?: string
  startNodeId: string
  nodes: CaseNode[]
}
