# Quarterly Update Guide — PSM Academy

The academy is refreshed **every 3 months** so its guidelines and evidence stay
current. A GitHub Action (`.github/workflows/quarterly-review.yml`) automatically
opens a **reminder issue** on the 1st of January, April, July and October with the
checklist below. This guide explains exactly what to edit.

> **Golden rule:** all clinical changes (doses, thresholds, results, recommendations)
> must be **verified by a qualified specialist** before merging. AI/automation only
> reminds and structures — it never changes clinical content on its own.

---

## The one file that drives it all

**`src/data/guidelines.ts`** is the single source of truth for guideline versions
and the review cadence.

Each quarter:

1. **Check each guideline** for a new edition (use the checklist / the links in the
   file). For any that changed, update its `version` and `published` (`YYYY-MM`).
2. **Bump the review dates** at the top of the file:
   ```ts
   export const LAST_REVIEW = '2026-10'   // ← today's review month
   export const NEXT_REVIEW = '2027-01'   // ← LAST_REVIEW + 3 months
   ```
3. Add a new guideline object to the `GUIDELINES` array if a relevant body publishes
   one (fields: `id, org, name, scope, version, published, region, url`).

The About → **Guidelines & Updates** panel renders this automatically, including the
"Last reviewed / Next review" dates and the guideline versions — no UI edits needed.

---

## Adding a new landmark trial

Append an object to **`src/data/landmark_trials.ts`** matching the `LandmarkTrial`
type. Fill the PICO block and the detail fields; use **only verified numbers**
(HR/CI/median OS-PFS, p, doses). Example skeleton:

```ts
{
  id: 'trial-id',
  name: 'TRIAL NAME',
  year: 2027,
  publication: 'Journal, 2027',
  doi: '10.xxxx/xxxxx',
  histologies: ['cpm'],            // cpm | gastric | ovarian | mesothelioma | appendiceal/PMP | general
  clinical_question: '…',
  key_result: '… (with the primary number)',
  practice_impact: '…',
  evidence_level: 'Ib',            // Ia|Ib|IIa|IIb|III|IV
  study_type: 'RCT',              // RCT|phase-II|phase-III|meta-analysis|prospective|retrospective|registry
  full_citation: 'Authors. Title. Journal. Year;vol(issue):pages. PMID: …',
  n_patients: 000,
  pico: { population, intervention, comparator, outcome },
  background, design, results_detail, practice_change, criticisms,
}
```

It appears in **Trials** (grouped by histology) and its PICO / accordions render
automatically.

## Updating disease content / quiz / chapters

- Disease atlas: `src/data/diseases.ts`
- Board questions: `src/data/quiz_questions.ts`
- Curriculum chapters: `src/data/learn_content.ts` and `src/data/learn/*.ts`
- References (incl. Chinese): `src/data/references_bank.ts` / `src/data/references_china.ts`

Each chapter has a `guidelines_version` string — update it when its evidence base
changes.

---

## Ship the update

```bash
npm install          # first time only
npx tsc --noEmit     # type-check
npm run build        # verify it builds
git add -A && git commit -m "chore: 2027-01 quarterly guideline review"
git push origin main # GitHub Actions rebuilds + deploys automatically
```

The PWA auto-updates on users' devices (service worker reload), so no manual cache
clearing is needed once they load the new version once.

---

## Quarterly checklist (mirrors the auto-issue)

- [ ] NCCN (Colon, Rectal, Gastric, Ovarian)
- [ ] ESMO (mCRC, Gastric, Ovarian)
- [ ] PSOGI consensus
- [ ] Chicago Consensus
- [ ] CSCO (China)
- [ ] CACA CRS+HIPEC technical guideline (China)
- [ ] JGCA / JPGA (Japan)
- [ ] New landmark RCTs (PubMed, ASCO/ESMO/ASCO-GI)
- [ ] Bump `LAST_REVIEW` / `NEXT_REVIEW`
