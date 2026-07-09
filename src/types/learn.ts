// ─────────────────────────────────────────────────────────────────────────────
// Learn / reader-mode types — residency-course teaching format
// Chapters → learning objectives → sections → pedagogical blocks
// ─────────────────────────────────────────────────────────────────────────────

export type LearnBlockType =
  | 'text'
  | 'trial'
  | 'pearl'
  | 'pitfall'
  | 'key'
  | 'list'
  | 'table'
  | 'quote'

export interface LearnBlock {
  type: LearnBlockType
  title?: string
  content?: string // markdown-ish plain text; supports **bold** inline
  items?: string[] // for 'list'
  headers?: string[] // for 'table'
  rows?: string[][] // for 'table'
  ref?: string // citation / guideline reference
}

export interface LearnSection {
  id: string
  title: string
  blocks: LearnBlock[]
}

export interface LearnChapter {
  id: string
  number: string // e.g. "01"
  title: string
  subtitle: string
  icon: string // lucide icon name, e.g. 'Microscope'
  reading_time_min: number
  level: 'Foundation' | 'Core' | 'Advanced'
  guidelines_version: string
  learning_objectives: string[]
  key_references: string[]
  sections: LearnSection[]
}
