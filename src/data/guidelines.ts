// ─────────────────────────────────────────────────────────────────────────────
// GUIDELINE TRACKER — quarterly (3-monthly) update system
//
// This file is the single source of truth for the clinical guidelines the app is
// benchmarked against. To keep the academy current, edit ONLY this file every
// quarter (see docs/UPDATING.md):
//   1. Bump each guideline's `version` / `published` when a new edition appears.
//   2. Update LAST_REVIEW to the review date and NEXT_REVIEW to +3 months.
//   3. Add any new landmark trial to src/data/landmark_trials.ts.
// A GitHub Action (.github/workflows/quarterly-review.yml) opens a reminder issue
// every quarter so this never gets forgotten.
// ─────────────────────────────────────────────────────────────────────────────

export type GuidelineRegion = 'international' | 'europe' | 'usa' | 'china' | 'japan'

export interface Guideline {
  id: string
  org: string        // issuing body (short)
  name: string       // full guideline name
  scope: string      // what it covers
  version: string    // currently tracked edition/version
  published: string   // YYYY-MM of the tracked edition
  region: GuidelineRegion
  url?: string
}

// Review cadence
export const REVIEW_CADENCE_MONTHS = 3
export const LAST_REVIEW = '2026-07'   // ← update on each quarterly review
export const NEXT_REVIEW = '2026-10'   // ← LAST_REVIEW + 3 months

export const GUIDELINES: Guideline[] = [
  {
    id: 'nccn',
    org: 'NCCN',
    name: 'NCCN Clinical Practice Guidelines in Oncology (Colon, Rectal, Gastric, Ovarian)',
    scope: 'Systemic therapy, staging and surgical indications for the primary tumours that give peritoneal metastases',
    version: 'v2025 series',
    published: '2025-06',
    region: 'usa',
    url: 'https://www.nccn.org/guidelines',
  },
  {
    id: 'esmo',
    org: 'ESMO',
    name: 'ESMO Clinical Practice Guidelines (Metastatic CRC, Gastric, Ovarian)',
    scope: 'European standards for systemic therapy and CRS+HIPEC patient selection',
    version: '2023–2024',
    published: '2024-01',
    region: 'europe',
    url: 'https://www.esmo.org/guidelines',
  },
  {
    id: 'psogi',
    org: 'PSOGI',
    name: 'PSOGI Consensus (peritoneal surface malignancy classification & management)',
    scope: 'PMP/appendiceal classification, mesothelioma consensus, CRS+HIPEC standardisation',
    version: 'Consensus 2022',
    published: '2022-01',
    region: 'international',
    url: 'https://www.psogi.com',
  },
  {
    id: 'chicago',
    org: 'Chicago Consensus',
    name: 'Chicago Consensus on Peritoneal Surface Malignancies',
    scope: 'Multidisciplinary pathway recommendations by primary (colorectal, appendiceal, gastric, ovarian)',
    version: '2020',
    published: '2020-05',
    region: 'usa',
    url: 'https://doi.org/10.1002/cncr.32874',
  },
  {
    id: 'csco',
    org: 'CSCO',
    name: 'CSCO Guidelines (Chinese Society of Clinical Oncology) — Gastric & Colorectal',
    scope: 'Chinese national standards for systemic therapy and peritoneal metastasis management',
    version: '2024',
    published: '2024-04',
    region: 'china',
    url: 'https://www.csco.org.cn',
  },
  {
    id: 'caca',
    org: 'CACA',
    name: 'CACA Technical Guidelines — Cytoreductive Surgery + HIPEC (China Anti-Cancer Association)',
    scope: 'Chinese expert consensus on CRS+HIPEC technique, HIPEC regimens and patient selection',
    version: '2023–2025',
    published: '2025-01',
    region: 'china',
    url: 'https://www.caca.org.cn',
  },
  {
    id: 'jgca',
    org: 'JGCA / JPGA',
    name: 'Japanese Gastric Cancer Treatment Guidelines (JGCA)',
    scope: 'Japanese standards for gastric cancer, incl. peritoneal cytology and dissemination',
    version: '6th edition',
    published: '2021-07',
    region: 'japan',
    url: 'https://link.springer.com/journal/10120',
  },
]
