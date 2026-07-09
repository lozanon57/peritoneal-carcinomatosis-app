import type { LearnChapter } from '../../types/learn'

// ─────────────────────────────────────────────────────────────────────────────
// DISEASE-SPECIFIC DEEP DIVE — Chapters 17–26
// Board-to-fellowship level teaching on individual peritoneal-surface malignancies.
// Sources: PSOGI Consensus 2022 · Chicago Consensus 2020 · NCCN 2024–2025 ·
//          ESMO 2023–2024 · PSOGI Appendiceal (Murphy) 2016 · TARPSWG consensus ·
//          landmark RCTs (PRODIGE 7, COLOPEC, KEYNOTE-177, OVHIPEC-1, FLOT4,
//          SPOTLIGHT/GLOW, SOLO-1, DESKTOP III, CYTO-CHIP).
// ─────────────────────────────────────────────────────────────────────────────

export const DISEASE_CHAPTERS: LearnChapter[] = [
  // ── CHAPTER 17 ──────────────────────────────────────────────────────────────
  {
    id: 'ch17-crc-deep',
    number: '17',
    title: 'Colorectal Peritoneal Metastases — Deep Dive',
    subtitle: 'Biology, selection, the PRODIGE 7 controversy, prophylaxis, and systemic sequencing',
    icon: 'Dna',
    reading_time_min: 30,
    level: 'Core',
    track: 'Disease-Specific',
    guidelines_version: 'PSOGI 2022 · Chicago Consensus 2020 · NCCN Colon v3.2024 · ESMO 2023',
    learning_objectives: [
      'Explain the biology that makes colorectal peritoneal metastasis (CRC-PM) a distinct metastatic compartment',
      'Apply PCI and CC thresholds to select patients for CRS±HIPEC',
      'Interpret the PRODIGE 7 trial and the ongoing debate over the role of oxaliplatin HIPEC',
      'Contrast the prophylactic HIPEC strategies of COLOPEC, PROPHYLOCHIP and CYTO-CHIP',
      'Integrate RAS/BRAF and MMR status into treatment sequencing and prognosis',
    ],
    key_references: [
      'Quénet F, et al. PRODIGE 7. Lancet Oncol 2021;22(2):256–266.',
      'Klaver CEL, et al. COLOPEC. Lancet Gastroenterol Hepatol 2019;4(10):761–770.',
      'Goéré D, et al. PROPHYLOCHIP-PRODIGE 15. Lancet Oncol 2020;21(9):1147–1154.',
      'Bhatt A, Glehen O, et al. CYTO-CHIP propensity study. J Clin Oncol 2019;37(23):2028–2040.',
      'Verwaal VJ, et al. J Clin Oncol 2003;21(20):3737–3743.',
    ],
    sections: [
      {
        id: 'ch17-s1',
        title: 'The Peritoneum as a Distinct Metastatic Compartment',
        blocks: [
          {
            type: 'text',
            content:
              'Peritoneal metastasis complicates roughly **5–15% of colorectal cancers at presentation** and a further ~20% metachronously in high-risk primaries. Unlike haematogenous liver and lung spread, CRC-PM arises by **transcoelomic dissemination**: serosal (T4a) penetration or iatrogenic tumour-cell spillage releases free intraperitoneal cells that implant at fluid-stasis watersheds. The peritoneum behaves as a semi-privileged compartment — systemic chemotherapy penetrates peritoneal nodules poorly because of the blood–peritoneal barrier and the avascular, hypoxic core of mucinous implants.',
          },
          {
            type: 'text',
            content:
              'This compartmentalisation is the rationale for regional therapy. Historically, peritoneal spread carried the worst prognosis of all metastatic sites — median OS 5–7 months with 5-FU alone in the pre-oxaliplatin era. Even with modern systemic doublets/triplets plus biologics, peritoneal-only disease responds less durably than liver-limited disease, and **RECIST radiographic response underestimates the true peritoneal burden**, making CT-based selection unreliable.',
          },
          {
            type: 'key',
            title: 'Serosal breach is the permissive event',
            content:
              'T4 stage, perforation at presentation, positive peritoneal cytology, mucinous/signet histology, ovarian metastases, and incomplete/emergency resection of the primary are the dominant risk factors for developing CRC-PM. These are precisely the patients targeted by adjuvant/prophylactic strategies.',
          },
          {
            type: 'list',
            title: 'High-risk features predicting metachronous peritoneal recurrence',
            items: [
              'pT4a/pT4b primary (serosal or adjacent-organ invasion)',
              'Perforated tumour or obstruction requiring emergency surgery',
              'Positive peritoneal lavage cytology at index operation',
              'Mucinous or signet-ring cell histology; poorly differentiated grade',
              'Synchronous, resected minimal peritoneal disease or ovarian (Krukenberg) metastasis',
              'RAS/BRAF-mutant, right-sided primaries with aggressive biology',
            ],
          },
        ],
      },
      {
        id: 'ch17-s2',
        title: 'Selection for CRS ± HIPEC — PCI, CC and Biology',
        blocks: [
          {
            type: 'text',
            content:
              'Complete cytoreduction (**CC-0**, no visible residual disease; **CC-1**, nodules ≤2.5 mm) is the single strongest modifiable prognostic factor. Verwaal\'s landmark Dutch RCT (2003) established the principle: CRS+HIPEC+systemic chemotherapy roughly doubled median survival versus systemic 5-FU/leucovorin alone (22.3 vs 12.6 months), and the 8-year follow-up confirmed durable benefit **only in patients achieving CC-0/1**. Patients left with gross residual disease derived no meaningful benefit and carried the operative risk.',
          },
          {
            type: 'text',
            content:
              'The **Peritoneal Cancer Index (PCI)** stratifies feasibility and prognosis. In CRC-PM, benefit falls sharply above a PCI of ~15–20. Extensive small-bowel and mesenteric-root involvement, not raw volume, most often precludes a complete cytoreduction. Selection therefore integrates three axes: (1) a realistic prospect of CC-0/1; (2) tumour biology (histology, RAS/BRAF, MMR); and (3) patient fitness and response to neoadjuvant systemic therapy.',
          },
          {
            type: 'table',
            title: 'PCI thresholds and expected outcome in CRC-PM',
            headers: ['PCI band', 'Interpretation', 'Typical 5-yr OS after CC-0/1'],
            rows: [
              ['0–6', 'Low burden — favourable, best cytoreduction candidates', '~45–50%'],
              ['7–15', 'Moderate — benefit persists with complete CRS', '~30%'],
              ['16–20', 'High — individualise; biology-dependent', '~10–15%'],
              ['>20', 'Very high — CRS rarely justified in adenocarcinoma', '<10%'],
            ],
          },
          {
            type: 'pearl',
            title: 'Diagnostic laparoscopy before commitment',
            content:
              'Staging laparoscopy allows direct PCI scoring, small-bowel assessment and biopsy before a laparotomy that could prove futile. It reclassifies a substantial minority of radiologically "resectable" patients as unresectable and spares them a non-therapeutic open procedure.',
          },
          {
            type: 'pitfall',
            title: 'CT systematically under-stages the peritoneum',
            content:
              'CT sensitivity for peritoneal nodules <5 mm is poor (often <25–50%). A "low-volume" CT can conceal a PCI of 20+ at operation. Never counsel a patient on resectability from CT alone — confirm with laparoscopy and, where available, diffusion-weighted MRI or PET for extraperitoneal disease.',
          },
        ],
      },
      {
        id: 'ch17-s3',
        title: 'PRODIGE 7 — The Oxaliplatin HIPEC Controversy',
        blocks: [
          {
            type: 'text',
            content:
              'For two decades CRS was bundled with HIPEC as a single therapy. **PRODIGE 7** (Quénet, Lancet Oncol 2021) was the first RCT to isolate the HIPEC component: 265 patients with CRC-PM (PCI ≤25) undergoing complete CRS were randomised to **oxaliplatin HIPEC (460 mg/m², 30 min, 43 °C)** versus CRS alone, both on a background of perioperative systemic chemotherapy.',
          },
          {
            type: 'trial',
            title: 'PRODIGE 7 — HIPEC added no survival benefit',
            content:
              'Median OS was **41.7 months with HIPEC vs 41.2 months without** (HR 1.00; p=0.99) — nearly identical, and both arms far exceeded historical controls, underscoring the impact of complete CRS plus modern systemic therapy. HIPEC increased **grade ≥3 morbidity at 60 days (26% vs 15%)**. An unplanned subgroup signalled possible benefit at intermediate PCI 11–15, generating hypotheses rather than practice change.',
            ref: 'Quénet F, et al. PRODIGE 7. Lancet Oncol 2021;22(2):256–266.',
          },
          {
            type: 'text',
            content:
              'Interpretation is nuanced and contested. PRODIGE 7 shows that **complete cytoreduction — not the oxaliplatin bath — drives survival**, and that a 30-minute oxaliplatin regimen adds toxicity without a demonstrable OS gain. It does **not** condemn HIPEC universally: the trial used a short high-dose oxaliplatin protocol, only tested one drug/schedule, and cannot address mitomycin-C–based or longer regimens. Peritoneal recurrence-free survival trends and the PCI 11–15 subgroup keep the question open.',
          },
          {
            type: 'quote',
            content:
              'PRODIGE 7 did not kill HIPEC — it dethroned oxaliplatin and crowned complete cytoreduction as the therapeutic act that matters.',
          },
          {
            type: 'pearl',
            title: 'Practice after PRODIGE 7',
            content:
              'Most high-volume centres retain CRS as standard for selected CRC-PM but have moved away from short high-dose oxaliplatin HIPEC. Where HIPEC is used, mitomycin-C protocols predominate; drug, dose and duration remain non-standardised and are legitimate areas for trials.',
          },
        ],
      },
      {
        id: 'ch17-s4',
        title: 'Prophylaxis and Second-Look Strategies',
        blocks: [
          {
            type: 'text',
            content:
              'If serosal breach seeds the peritoneum, can HIPEC at index surgery prevent metachronous disease? Three trials frame the answer. **COLOPEC** randomised pT4/perforated colon cancer patients to adjuvant oxaliplatin HIPEC plus systemic therapy versus systemic therapy alone.',
          },
          {
            type: 'trial',
            title: 'COLOPEC — prophylactic oxaliplatin HIPEC did not improve PFS',
            content:
              'In 202 pT4N0-2/perforated patients, 18-month **peritoneal metastasis-free survival was 80.9% with adjuvant HIPEC vs 76.2% without** (not significant). Notably, ~9% already had peritoneal disease at the planned HIPEC, arguing for early second-look rather than blind prophylaxis. COLOPEC did not establish prophylactic oxaliplatin HIPEC as standard.',
            ref: 'Klaver CEL, et al. COLOPEC. Lancet Gastroenterol Hepatol 2019;4(10):761–770.',
          },
          {
            type: 'trial',
            title: 'PROPHYLOCHIP — routine second-look surgery abandoned',
            content:
              'In 150 high-risk patients (resected minimal PM, ovarian mets, or perforation) rendered disease-free, systematic second-look laparotomy with oxaliplatin HIPEC gave **3-year disease-free survival of 44% vs 53%** with surveillance alone — no benefit, and added morbidity. Routine second-look surgery is therefore not recommended.',
            ref: 'Goéré D, et al. PROPHYLOCHIP-PRODIGE 15. Lancet Oncol 2020;21(9):1147–1154.',
          },
          {
            type: 'text',
            content:
              'The **CYTO-CHIP** propensity-matched analysis addresses established disease rather than prophylaxis: it compared CRS+HIPEC with CRS alone across French centres and found HIPEC associated with better OS and DFS. Being non-randomised it is vulnerable to selection bias, but it provides the counterweight to PRODIGE 7 that sustains interest in optimised HIPEC regimens.',
          },
          {
            type: 'pitfall',
            title: 'Do not extrapolate COLOPEC/PROPHYLOCHIP to therapeutic HIPEC',
            content:
              'These are prophylactic/second-look trials in disease-free patients. Their negative results say nothing about the value of CRS in patients with established, resectable peritoneal metastases — where complete cytoreduction remains standard of care.',
          },
        ],
      },
      {
        id: 'ch17-s5',
        title: 'Molecular Biology and Systemic Sequencing',
        blocks: [
          {
            type: 'text',
            content:
              'Every CRC-PM patient needs extended molecular profiling: **RAS (KRAS/NRAS), BRAF V600E, MMR/MSI, and HER2**. Peritoneal spread is enriched for right-sided, RAS/BRAF-mutant and mucinous tumours — biology that both drives peritoneal tropism and blunts the durability of surgery.',
          },
          {
            type: 'table',
            title: 'Molecular status → systemic strategy in CRC-PM',
            headers: ['Alteration', 'Prognostic signal', 'Systemic implication'],
            rows: [
              ['RAS wild-type, left-sided', 'More favourable', 'Anti-EGFR (cetuximab/panitumumab) eligible'],
              ['RAS-mutant', 'Adverse', 'Anti-EGFR ineffective; use bevacizumab-based doublet/triplet'],
              ['BRAF V600E', 'Strongly adverse', 'Consider FOLFOXIRI-bev; encorafenib + cetuximab in later line'],
              ['dMMR/MSI-H', 'Chemo-refractory but IO-sensitive', 'Immunotherapy first (see Ch. 18)'],
              ['HER2-amplified (RAS-WT)', 'Emerging target', 'Trastuzumab-based combinations in refractory disease'],
            ],
          },
          {
            type: 'text',
            content:
              'Sequencing is individualised. Many centres favour **neoadjuvant systemic chemotherapy** (FOLFOX/FOLFIRI ± biologic) to test biology, downstage, and select responders before committing to CRS — progression on systemic therapy is a strong argument against surgery. Others operate up front in low-PCI, chemo-naïve disease to avoid chemotherapy-related liver/mesenteric toxicity. BRAF-mutant peritoneal disease responds poorly and durably benefits few, tempering enthusiasm for aggressive CRS.',
          },
          {
            type: 'pearl',
            title: 'Biology is the tie-breaker at borderline PCI',
            content:
              'At PCI 15–20, a RAS/BRAF wild-type, MMR-proficient tumour responding to systemic therapy may still justify complete CRS, whereas a BRAF-mutant signet-ring tumour of the same PCI rarely does. Let the molecular profile and treatment response, not the number alone, decide.',
          },
          {
            type: 'key',
            title: 'Bottom line',
            content:
              'Complete cytoreduction plus modern systemic therapy — not the HIPEC drug bath — is what extends survival in CRC-PM. Select on PCI, small-bowel involvement, biology and treatment response; profile every patient molecularly; and reserve regional chemotherapy for protocols and expert judgement.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 18 ──────────────────────────────────────────────────────────────
  {
    id: 'ch18-msi-pathway',
    number: '18',
    title: 'The MSI-H / dMMR Colorectal Pathway',
    subtitle: 'Immunotherapy-first thinking, KEYNOTE-177, CRS timing, and testing algorithms',
    icon: 'ShieldCheck',
    reading_time_min: 24,
    level: 'Core',
    track: 'Disease-Specific',
    guidelines_version: 'NCCN Colon v3.2024 · ESMO 2023 · KEYNOTE-177',
    learning_objectives: [
      'Define dMMR/MSI-H and the testing algorithm (IHC, PCR, NGS) in colorectal cancer',
      'Explain why MSI-H tumours are immunotherapy-sensitive but chemotherapy-resistant',
      'Interpret KEYNOTE-177 and its implications for first-line therapy',
      'Reconsider the timing and role of CRS in MSI-H peritoneal disease',
      'Debunk the hyperprogression myth and distinguish it from pseudoprogression',
    ],
    key_references: [
      'André T, et al. KEYNOTE-177. N Engl J Med 2020;383(23):2207–2218.',
      'Diaz LA, et al. KEYNOTE-177 final OS. Lancet Oncol 2022;23(5):659–670.',
      'Cercek A, et al. Dostarlimab in dMMR rectal cancer. N Engl J Med 2022;386(25):2363–2376.',
      'NCCN Colon Cancer Guidelines v3.2024 — universal MMR testing.',
    ],
    sections: [
      {
        id: 'ch18-s1',
        title: 'Biology of Mismatch-Repair Deficiency',
        blocks: [
          {
            type: 'text',
            content:
              'The DNA mismatch-repair (MMR) system corrects base-mismatch and insertion/deletion errors during replication. Loss of function — through germline mutation (**Lynch syndrome**: MLH1, MSH2, MSH6, PMS2, EPCAM) or somatic **MLH1 promoter hypermethylation** (often BRAF V600E-associated, sporadic) — produces **microsatellite instability (MSI-H)** and a hypermutated phenotype with a very high neoantigen load.',
          },
          {
            type: 'text',
            content:
              'This hypermutation is a double-edged sword. It makes MSI-H tumours **intrinsically immunogenic** — densely infiltrated by cytotoxic T cells and exquisitely sensitive to checkpoint blockade — but also **relatively resistant to fluoropyrimidine chemotherapy**. dMMR accounts for ~15% of early CRC but only ~4–5% of metastatic CRC; when it does metastasise, peritoneal and nodal spread are over-represented.',
          },
          {
            type: 'key',
            title: 'One phenotype, opposite drug responses',
            content:
              'MSI-H = high neoantigen load = checkpoint-inhibitor sensitive AND 5-FU resistant. In stage II, MSI-H is a good-prognosis marker for which adjuvant single-agent fluoropyrimidine is not recommended. In metastatic disease it flips the entire treatment paradigm toward immunotherapy first.',
          },
        ],
      },
      {
        id: 'ch18-s2',
        title: 'Testing Algorithm — Never Miss dMMR',
        blocks: [
          {
            type: 'text',
            content:
              'Universal MMR/MSI testing of all colorectal cancers is guideline-mandated (NCCN, ESMO). It serves three purposes: Lynch-syndrome screening, prognostication, and — decisively in metastatic disease — treatment selection.',
          },
          {
            type: 'table',
            title: 'Methods for detecting dMMR/MSI-H',
            headers: ['Method', 'What it detects', 'Notes'],
            rows: [
              ['IHC (4 antibodies)', 'Loss of MLH1/PMS2/MSH2/MSH6 protein', 'Fast, cheap; loss = deficient. MLH1/PMS2 loss → reflex BRAF/MLH1 methylation'],
              ['PCR (MSI panel)', 'Instability at microsatellite loci (e.g. Bethesda/pentaplex)', 'MSI-H if ≥2/5 (or ≥30%) markers unstable'],
              ['NGS', 'MSI score + full mutation profile (RAS/BRAF/HER2/TMB)', 'Preferred in metastatic disease — one assay, all actionable data'],
            ],
          },
          {
            type: 'pearl',
            title: 'BRAF + MLH1 methylation distinguishes sporadic from Lynch',
            content:
              'MLH1/PMS2 loss on IHC prompts reflex testing: BRAF V600E mutation or MLH1 promoter hypermethylation indicates a sporadic tumour, whereas their absence raises suspicion of Lynch syndrome and mandates germline testing and genetic counselling.',
          },
          {
            type: 'pitfall',
            title: 'Discordance and prior treatment can mislead',
            content:
              'IHC and PCR occasionally disagree; MSH6 loss can be subtle, and neoadjuvant therapy may alter staining. When immunotherapy is being considered and the result is borderline, confirm with a second orthogonal method (NGS/PCR) rather than denying a potentially transformative therapy.',
          },
        ],
      },
      {
        id: 'ch18-s3',
        title: 'KEYNOTE-177 — Immunotherapy Becomes First-Line',
        blocks: [
          {
            type: 'trial',
            title: 'KEYNOTE-177 — pembrolizumab doubles PFS vs chemotherapy',
            content:
              'In 307 patients with previously untreated MSI-H/dMMR metastatic CRC, first-line **pembrolizumab** versus investigator-choice chemotherapy (±bevacizumab/cetuximab) gave median **PFS 16.5 vs 8.2 months (HR 0.60)**. The 24-month PFS was 48% vs 19%. Grade ≥3 treatment-related adverse events were far lower with pembrolizumab (22% vs 66%).',
            ref: 'André T, et al. KEYNOTE-177. N Engl J Med 2020;383(23):2207–2218.',
          },
          {
            type: 'trial',
            title: 'KEYNOTE-177 final analysis — durable, plateauing benefit',
            content:
              'OS did not reach statistical significance (HR 0.74; p=0.036 vs a 0.025 threshold), confounded by 60% crossover from chemotherapy to anti-PD-1. Yet the PFS curve plateaued at ~35–40%, signalling durable disease control in a substantial subset — a pattern chemotherapy never produces.',
            ref: 'Diaz LA, et al. Lancet Oncol 2022;23(5):659–670.',
          },
          {
            type: 'text',
            content:
              'The practical message: **checkpoint blockade is now first-line standard for MSI-H/dMMR metastatic CRC.** Dual blockade (nivolumab + ipilimumab, CheckMate-8HW) extends this further. The dramatic dostarlimab experience in early dMMR rectal cancer — a 100% clinical complete response permitting non-operative management in an initial cohort — shows how completely immunotherapy can reorder the treatment of this molecular subgroup.',
          },
        ],
      },
      {
        id: 'ch18-s4',
        title: 'Implications for CRS Timing and Myth-Busting',
        blocks: [
          {
            type: 'text',
            content:
              'For the peritoneal surgeon, MSI-H status reshapes decision-making. A patient with MSI-H peritoneal metastases who would previously have gone straight to CRS±HIPEC may achieve durable, sometimes complete, systemic control with checkpoint blockade — potentially **deferring or obviating surgery**, or converting unresectable disease to a resectable, low-volume remnant.',
          },
          {
            type: 'pearl',
            title: 'Sequence immunotherapy first, then reassess surgically',
            content:
              'In MSI-H peritoneal disease, front-line checkpoint inhibition followed by response-adapted restaging is increasingly favoured over upfront CRS. Surgery is reserved for oligoresidual or oligoprogressive disease after maximal immunotherapy response — a "consolidation cytoreduction" concept still being defined in trials.',
          },
          {
            type: 'pitfall',
            title: 'The hyperprogression myth',
            content:
              'Fear that immunotherapy "accelerates" tumour growth is largely a misreading. **Pseudoprogression** (transient radiographic enlargement from immune infiltration before response) is real but uncommon; true hyperprogression is rare and hard to distinguish from natural aggressive-disease trajectory. In MSI-H CRC the benefit-risk strongly favours treating — do not withhold checkpoint blockade over hyperprogression anxiety.',
          },
          {
            type: 'text',
            content:
              'Peritoneal disease can respond more slowly and heterogeneously than visceral disease to immunotherapy, and small mucinous implants may be radiographically occult, so response assessment should combine imaging, tumour markers, and — where relevant — laparoscopy before declaring failure.',
          },
          {
            type: 'key',
            title: 'Bottom line',
            content:
              'Test every colorectal cancer for MMR/MSI. In MSI-H metastatic disease, checkpoint blockade is first-line and can be transformative; position CRS after — not before — a trial of immunotherapy, and do not be deterred by the overstated hyperprogression narrative.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 19 ──────────────────────────────────────────────────────────────
  {
    id: 'ch19-pmp-appendiceal',
    number: '19',
    title: 'Pseudomyxoma Peritonei & Appendiceal Neoplasms',
    subtitle: 'PSOGI 2016 classification, LAMN, redistribution, and Basingstoke outcomes',
    icon: 'Droplets',
    reading_time_min: 28,
    level: 'Core',
    track: 'Disease-Specific',
    guidelines_version: 'PSOGI Appendiceal Consensus (Murphy) 2016 · Chicago Consensus 2020 · PSOGI 2022',
    learning_objectives: [
      'Apply the PSOGI 2016 (Murphy) classification of appendiceal mucinous neoplasms and PMP',
      'Distinguish LAMN, HAMN and invasive appendiceal adenocarcinoma',
      'Explain the redistribution phenomenon underlying PMP resectability',
      'Quote Moran/Basingstoke and Sugarbaker long-term survival by grade',
      'Outline the CRS + mitomycin-C HIPEC standard and prognostic determinants',
    ],
    key_references: [
      'Carr NJ, et al. PSOGI consensus on appendiceal mucinous neoplasms & PMP. Am J Surg Pathol 2016;40(1):14–26.',
      'Moran BJ, et al. Basingstoke PMP outcomes. Eur J Surg Oncol / Br J Surg series.',
      'Chua TC, et al. Pooled international PMP registry. J Clin Oncol 2012;30(20):2449–2456.',
      'Sugarbaker PH, Chang D. Ann Surg Oncol 1999;6(8):727–731.',
    ],
    sections: [
      {
        id: 'ch19-s1',
        title: 'Terminology — The PSOGI 2016 Framework',
        blocks: [
          {
            type: 'text',
            content:
              'Appendiceal mucinous pathology was historically a nomenclature minefield. The **PSOGI 2016 (Carr/Murphy) consensus** standardised terms, harmonised with the WHO. **Pseudomyxoma peritonei (PMP)** is a *clinical* syndrome — mucinous ascites with peritoneal mucin and epithelial implants, usually of appendiceal origin — that must be graded histologically, not a diagnosis in itself.',
          },
          {
            type: 'table',
            title: 'PSOGI 2016 classification of peritoneal mucinous disease',
            headers: ['Category', 'Definition', 'Behaviour'],
            rows: [
              ['Acellular mucin', 'Mucin without epithelial cells', 'Best prognosis; still warrants CRS'],
              ['Low-grade mucinous carcinoma peritonei (LGMCP)', 'Low-grade cytology, scant epithelium', 'Indolent; excellent long-term survival'],
              ['High-grade mucinous carcinoma peritonei (HGMCP)', 'High-grade cytology, no signet cells', 'More aggressive; intermediate prognosis'],
              ['HGMCP with signet-ring cells (HGMCP-S)', 'Signet-ring differentiation present', 'Worst prognosis of the mucinous spectrum'],
            ],
          },
          {
            type: 'text',
            content:
              'The primary appendiceal lesions are classified separately: **LAMN** (low-grade appendiceal mucinous neoplasm), **HAMN** (high-grade appendiceal mucinous neoplasm), and **invasive mucinous adenocarcinoma**. LAMN is defined by low-grade epithelium with loss of the muscularis mucosae and a pushing (not infiltrative) border — it cannot "invade" in the conventional sense but can rupture and disseminate mucin.',
          },
          {
            type: 'key',
            title: 'Grade, not volume, dictates prognosis',
            content:
              'Two mucinous tumours of identical PCI 30 have wildly different outlooks: LGMCP may be cured, whereas HGMCP-S behaves like disseminated adenocarcinoma. Always report the grade and signet-cell status — they, not the mucin quantity, drive treatment intensity and prognosis.',
          },
        ],
      },
      {
        id: 'ch19-s2',
        title: 'LAMN and the Ruptured Appendix',
        blocks: [
          {
            type: 'text',
            content:
              'A LAMN confined to the appendix with an intact wall and negative margin is cured by appendicectomy. Once the wall is breached and **acellular or cellular mucin escapes into the peritoneum**, the redistribution cascade begins. Even acellular peritoneal mucin from a ruptured LAMN mandates surveillance — occult epithelial cells and future recurrence are possible.',
          },
          {
            type: 'list',
            title: 'Risk stratification of a LAMN specimen',
            items: [
              'Intact wall, negative margin, no extra-appendiceal mucin → cure by appendicectomy, minimal follow-up',
              'Acellular mucin on serosa but confined → low but non-zero recurrence risk; surveillance',
              'Extra-appendiceal mucin with epithelial cells → established PMP risk; refer to a peritoneal centre',
              'Perforation with peritoneal mucin (PCI-scored) → CRS+HIPEC candidate',
            ],
          },
          {
            type: 'pearl',
            title: 'Right hemicolectomy is usually unnecessary for pure LAMN',
            content:
              'Because LAMN does not metastasise via lymphatics, formal right hemicolectomy adds no oncological benefit for a low-grade lesion — nodal involvement is exceedingly rare. Reserve colectomy for invasive adenocarcinoma, HAMN with concerning features, or a positive resection margin at the appendiceal base.',
          },
          {
            type: 'pitfall',
            title: 'Do not rupture the mucocele',
            content:
              'A mucinous appendiceal mucocele that ruptures intraoperatively — especially during laparoscopy — can seed the peritoneum iatrogenically and convert a curable lesion into PMP. Handle a suspected mucocele with care, avoid piecemeal removal, and consider open retrieval in a bag.',
          },
        ],
      },
      {
        id: 'ch19-s3',
        title: 'Redistribution and the Logic of Complete Cytoreduction',
        blocks: [
          {
            type: 'text',
            content:
              'PMP is the archetype of **Sugarbaker\'s redistribution phenomenon**. Mucinous cells lack invasive capacity; they are carried passively by peritoneal fluid and redeposited at absorption/stasis sites — the greater omentum, subphrenic spaces, pelvis, right retrohepatic space and paracolic gutters — while the constantly moving small-bowel surfaces are relatively spared. This predictable topography is exactly what makes complete cytoreduction feasible even at very high PCI.',
          },
          {
            type: 'quote',
            content:
              'In pseudomyxoma the tumour goes where the fluid rests and spares where the bowel moves — which is why a PCI of 35 can still be rendered disease-free.',
          },
          {
            type: 'text',
            content:
              'The operation combines the peritonectomy procedures with **greater and lesser omentectomy, pelvic peritonectomy, diaphragmatic stripping, and often splenectomy, cholecystectomy and antrectomy** to clear mucin from watershed sites while preserving as much small bowel as possible. Complete cytoreduction (CC-0/1) is the goal and the dominant prognostic factor.',
          },
          {
            type: 'pearl',
            title: 'Small-bowel involvement, not raw PCI, limits cure',
            content:
              'A PMP patient becomes unresectable when disease infiltrates the small bowel and its mesentery so extensively that CC-0/1 would demand a bowel resection incompatible with survival. Surface caking on mobile bowel can often be peeled; mesenteric-root disease usually cannot.',
          },
        ],
      },
      {
        id: 'ch19-s4',
        title: 'Outcomes — Basingstoke, Sugarbaker and the International Registry',
        blocks: [
          {
            type: 'trial',
            title: 'International PMP registry (Chua) — grade-dependent survival',
            content:
              'In a pooled analysis of 2298 PMP patients treated with CRS+HIPEC across 16 centres, median OS was **196 months with 10- and 15-year survival of 63% and 59%**. Complete cytoreduction, low histological grade and low PCI independently predicted survival — the definitive demonstration that CRS+HIPEC can cure a large fraction of low-grade PMP.',
            ref: 'Chua TC, et al. J Clin Oncol 2012;30(20):2449–2456.',
          },
          {
            type: 'trial',
            title: 'Sugarbaker appendiceal series — cure in low-grade disease',
            content:
              'In 385 appendiceal peritoneal patients, low-grade disease achieved **5-year OS 86% and 10-year OS 68%** after complete CRS, versus ~20% at 5 years for high-grade disease. The gulf between grades is the central teaching point.',
            ref: 'Sugarbaker PH, Chang D. Ann Surg Oncol 1999;6(8):727–731.',
          },
          {
            type: 'text',
            content:
              'The Basingstoke (Moran) programme corroborates these figures and emphasises that **outcomes hinge on completeness of cytoreduction and referral to high-volume centres**. Perioperative mortality in experienced hands is ~2–3% despite the magnitude of surgery.',
          },
          {
            type: 'table',
            title: 'CRS + HIPEC for PMP — standard regimen and determinants',
            headers: ['Element', 'Detail'],
            rows: [
              ['HIPEC drug', 'Mitomycin-C (typically ~35 mg/m², intraperitoneal, ~90 min, 41–43 °C)'],
              ['Alternative', 'Oxaliplatin-based in some centres; MMC remains the reference'],
              ['Strongest prognostic factor', 'Completeness of cytoreduction (CC-0/1)'],
              ['Histological grade', 'LGMCP » HGMCP » HGMCP-S (worsening)'],
              ['Systemic chemotherapy', 'Limited role; considered for high-grade/signet-ring disease'],
            ],
          },
          {
            type: 'pearl',
            title: 'Iterative CRS for low-grade recurrence',
            content:
              'Because LGMCP is indolent, a peritoneal recurrence years later can be treated with a repeat cytoreduction with durable benefit — a strategy that would be futile in high-grade adenocarcinoma. Long-term surveillance with tumour markers (CEA, CA19-9, CA125) and imaging is worthwhile.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 20 ──────────────────────────────────────────────────────────────
  {
    id: 'ch20-mesothelioma',
    number: '20',
    title: 'Malignant Peritoneal Mesothelioma',
    subtitle: 'BAP1, the IHC panel, histological subtypes, cisplatin-doxorubicin HIPEC and immunotherapy',
    icon: 'Microscope',
    reading_time_min: 28,
    level: 'Advanced',
    track: 'Disease-Specific',
    guidelines_version: 'PSOGI 2022 · Chicago Consensus 2020 · NCCN Mesothelioma 2024',
    learning_objectives: [
      'Recognise the epidemiology and BAP1 germline/somatic biology of peritoneal mesothelioma',
      'Apply the immunohistochemical panel to confirm mesothelial origin and exclude carcinoma',
      'Distinguish epithelioid, biphasic and sarcomatoid subtypes and their prognosis',
      'Describe the CRS + cisplatin/doxorubicin HIPEC standard and its outcomes',
      'Explain why pleural mesothelioma trial data (e.g. MARS2) do not govern peritoneal disease',
    ],
    key_references: [
      'Yan TD, et al. Multi-institutional peritoneal mesothelioma registry. J Clin Oncol 2009;27(36):6237–6242.',
      'Carbone M, et al. BAP1 and mesothelioma. Nat Rev Cancer / Lancet Oncol reviews.',
      'Baratti D, Deraco M, et al. Peritoneal mesothelioma CRS+HIPEC series. Ann Surg Oncol.',
      'Baas P, et al. CheckMate-743 (pleural). Lancet 2021;397(10272):375–386.',
    ],
    sections: [
      {
        id: 'ch20-s1',
        title: 'Epidemiology and BAP1 Biology',
        blocks: [
          {
            type: 'text',
            content:
              'Malignant peritoneal mesothelioma (MPM) is rare (~10–15% of all mesotheliomas, ~300–500 US cases/year). Asbestos exposure is a weaker driver than in pleural disease; many peritoneal cases have no clear exposure. It arises from the mesothelial lining and, unlike carcinomatosis, is a *primary* peritoneal malignancy. Median age is ~50s, with a notable subset of younger patients.',
          },
          {
            type: 'text',
            content:
              '**BAP1 (BRCA1-associated protein 1)** is central to mesothelial biology. Somatic BAP1 loss is common in mesothelioma; **germline BAP1 mutation** defines the BAP1 tumour predisposition syndrome — a cancer syndrome linking mesothelioma, uveal and cutaneous melanoma, and renal cell carcinoma. Germline BAP1 carriers develop mesothelioma younger, often with less asbestos exposure, and paradoxically better survival.',
          },
          {
            type: 'key',
            title: 'Test BAP1 — diagnostically and hereditarily',
            content:
              'Loss of nuclear BAP1 by IHC helps confirm malignancy (favouring mesothelioma over reactive mesothelial hyperplasia) and, when germline, mandates genetic counselling and family surveillance. BAP1 loss also carries prognostic and emerging therapeutic implications.',
          },
        ],
      },
      {
        id: 'ch20-s2',
        title: 'The Immunohistochemical Panel',
        blocks: [
          {
            type: 'text',
            content:
              'Diagnosis rests on distinguishing mesothelioma from peritoneal carcinomatosis (especially serous ovarian carcinoma) and from reactive mesothelium. A **dual panel** of mesothelial-positive and carcinoma-positive markers is standard — at least two of each.',
          },
          {
            type: 'table',
            title: 'IHC panel for peritoneal mesothelioma',
            headers: ['Marker', 'Mesothelioma', 'Adenocarcinoma'],
            rows: [
              ['Calretinin', 'Positive', 'Negative'],
              ['WT1', 'Positive', 'Negative (except serous ovarian → also WT1+)'],
              ['CK5/6', 'Positive', 'Usually negative'],
              ['D2-40 (podoplanin)', 'Positive', 'Negative'],
              ['CEA (mono)', 'Negative', 'Positive'],
              ['MOC-31 (EpCAM)', 'Negative', 'Positive'],
              ['BerEP4', 'Negative', 'Positive'],
              ['Claudin-4', 'Negative', 'Positive'],
            ],
          },
          {
            type: 'pitfall',
            title: 'WT1 does not separate mesothelioma from serous ovarian carcinoma',
            content:
              'Both peritoneal mesothelioma and serous ovarian/primary peritoneal carcinoma express WT1 and PAX8 patterns can overlap. Use PAX8 (positive in Müllerian carcinoma, negative in mesothelioma), claudin-4/BerEP4 (carcinoma) and BAP1 loss (mesothelioma) to resolve this classic diagnostic trap.',
          },
          {
            type: 'pearl',
            title: 'BAP1 loss + CDKN2A/p16 deletion confirm malignancy',
            content:
              'Reactive mesothelial proliferations can mimic mesothelioma. Loss of nuclear BAP1 (IHC) and homozygous CDKN2A/p16 deletion (FISH) are essentially never seen in benign mesothelium and, when present, confirm malignancy in an ambiguous biopsy.',
          },
        ],
      },
      {
        id: 'ch20-s3',
        title: 'Histological Subtypes and Prognosis',
        blocks: [
          {
            type: 'text',
            content:
              'Histological subtype is the dominant biological determinant. **Epithelioid** mesothelioma (~75%) is the favourable, cytoreducible form. **Biphasic** (mixed) and **sarcomatoid** subtypes are aggressive, chemoresistant, and generally poor CRS candidates. Two indolent variants — **well-differentiated papillary mesothelioma (WDPMT)** and **multicystic (benign) mesothelioma** — behave much better and may not require aggressive therapy.',
          },
          {
            type: 'table',
            title: 'Peritoneal mesothelioma subtypes',
            headers: ['Subtype', 'Frequency', 'Prognosis / management'],
            rows: [
              ['Epithelioid', '~75%', 'Best; candidate for CRS+HIPEC, long survival possible'],
              ['Biphasic', '~15–20%', 'Intermediate–poor; selective CRS at best'],
              ['Sarcomatoid', '~5%', 'Poor; systemic/palliative, CRS rarely indicated'],
              ['Well-differentiated papillary (WDPMT)', 'Rare', 'Indolent; conservative/surveillance often appropriate'],
              ['Multicystic', 'Rare', 'Borderline/benign; local excision, low malignant potential'],
            ],
          },
          {
            type: 'trial',
            title: 'Yan multi-institutional registry — CRS+HIPEC benchmark',
            content:
              'In 405 diffuse MPM patients across 29 centres, CRS+HIPEC achieved a **median OS of 53 months with 5-year survival ~47%** — a transformation from the historical 6–12 months with systemic therapy alone. Epithelioid subtype, absence of nodal disease, complete cytoreduction and HIPEC use predicted survival.',
            ref: 'Yan TD, et al. J Clin Oncol 2009;27(36):6237–6242.',
          },
        ],
      },
      {
        id: 'ch20-s4',
        title: 'CRS + HIPEC — Regimen and Outcomes',
        blocks: [
          {
            type: 'text',
            content:
              'CRS + HIPEC is the standard of care for resectable epithelioid MPM. The most-used HIPEC regimen is **cisplatin + doxorubicin** (the Deraco/Milan protocol), sometimes cisplatin + mitomycin-C. Selected centres add early postoperative intraperitoneal chemotherapy (EPIC) or normothermic intraperitoneal paclitaxel.',
          },
          {
            type: 'table',
            title: 'HIPEC regimen for peritoneal mesothelioma',
            headers: ['Element', 'Detail'],
            rows: [
              ['Standard drugs', 'Cisplatin + doxorubicin (intraperitoneal, hyperthermic ~42 °C, ~60–90 min)'],
              ['Alternative', 'Cisplatin + mitomycin-C'],
              ['Adjunct', 'EPIC or bidirectional systemic pemetrexed/cisplatin in selected cases'],
              ['Key prognostic factors', 'Epithelioid subtype, complete cytoreduction (CC-0/1), low Ki-67, no nodal disease'],
            ],
          },
          {
            type: 'text',
            content:
              'Systemic first-line chemotherapy for unresectable or non-epithelioid disease mirrors pleural mesothelioma: **platinum + pemetrexed** (± bevacizumab). Response rates are modest and durability limited, which is why cytoreducible epithelioid disease is referred for CRS+HIPEC rather than treated systemically alone.',
          },
          {
            type: 'pearl',
            title: 'Ki-67 sharpens epithelioid prognosis',
            content:
              'Within epithelioid MPM, a low proliferative index (Ki-67 < ~9–10%) identifies patients with markedly better survival after CRS+HIPEC. Combine subtype, Ki-67, PCI and nodal status when counselling and selecting.',
          },
        ],
      },
      {
        id: 'ch20-s5',
        title: 'Why Pleural Data Do Not Apply — and the Rise of Immunotherapy',
        blocks: [
          {
            type: 'pitfall',
            title: 'MARS2 does not govern peritoneal mesothelioma',
            content:
              'MARS2 studied extended pleurectomy/decortication in *pleural* mesothelioma and questioned the value of aggressive pleural surgery. Peritoneal mesothelioma is a biologically and surgically distinct disease where **CRS+HIPEC produces median survivals of 4–5 years** — the pleural surgical-nihilism narrative must not be transplanted onto the peritoneal cavity.',
          },
          {
            type: 'text',
            content:
              'Immunotherapy has reshaped *unresectable/systemic* mesothelioma. **CheckMate-743** established first-line nivolumab + ipilimumab as superior to chemotherapy in pleural mesothelioma, with the greatest benefit in non-epithelioid histology; this dual checkpoint approach is extrapolated to peritoneal disease unsuitable for surgery. Trials of checkpoint blockade specifically in MPM, and of BAP1/CDKN2A-directed strategies, are ongoing.',
          },
          {
            type: 'trial',
            title: 'CheckMate-743 — immunotherapy in mesothelioma (pleural)',
            content:
              'First-line **nivolumab + ipilimumab** improved median OS to 18.1 vs 14.1 months versus platinum-pemetrexed, with pronounced benefit in non-epithelioid subtypes. Though a pleural trial, it underpins the use of dual checkpoint blockade for peritoneal mesothelioma patients who are not surgical candidates.',
            ref: 'Baas P, et al. Lancet 2021;397(10272):375–386.',
          },
          {
            type: 'key',
            title: 'Bottom line',
            content:
              'Peritoneal mesothelioma is a curable-intent surgical disease when epithelioid and resectable: confirm with the dual IHC panel plus BAP1, subtype it, and refer for CRS + cisplatin/doxorubicin HIPEC. Reserve platinum-pemetrexed and dual checkpoint blockade for non-epithelioid or unresectable disease — and never let pleural (MARS2) data dictate peritoneal management.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 21 ──────────────────────────────────────────────────────────────
  {
    id: 'ch21-ovarian',
    number: '21',
    title: 'Ovarian & Primary Peritoneal Carcinoma',
    subtitle: 'OVHIPEC, DESKTOP III, the AGO score, BRCA/HRD, PARP inhibitors and FRα therapy',
    icon: 'CircleDot',
    reading_time_min: 30,
    level: 'Core',
    track: 'Disease-Specific',
    guidelines_version: 'ESMO-ESGO 2023 · NCCN Ovarian 2024 · OVHIPEC-1 · SOLO-1 · DESKTOP III',
    learning_objectives: [
      'Contrast primary debulking surgery (PDS) with neoadjuvant chemotherapy and interval debulking',
      'Interpret OVHIPEC-1 and the role of HIPEC at interval cytoreduction',
      'Apply the AGO score to select patients for secondary cytoreduction (DESKTOP III)',
      'Integrate BRCA/HRD testing and PARP-inhibitor maintenance (SOLO-1, PAOLA-1)',
      'Describe folate-receptor-α targeting with mirvetuximab soravtansine',
    ],
    key_references: [
      'van Driel WJ, et al. OVHIPEC-1. N Engl J Med 2018;378(3):230–240.',
      'Moore K, et al. SOLO-1. N Engl J Med 2018;379(26):2495–2505.',
      'Harter P, et al. DESKTOP III. N Engl J Med 2021;385(23):2123–2131.',
      'Ray-Coquard I, et al. PAOLA-1. N Engl J Med 2019;381(25):2416–2428.',
      'Moore KN, et al. MIRASOL (mirvetuximab). N Engl J Med 2023;389(23):2162–2174.',
    ],
    sections: [
      {
        id: 'ch21-s1',
        title: 'Surgical Paradigm — PDS vs NACT and the No-Residual Goal',
        blocks: [
          {
            type: 'text',
            content:
              'Epithelial ovarian and primary peritoneal carcinoma spread predominantly transcoelomically, presenting as advanced (FIGO III–IV) peritoneal disease in ~75% of cases. The over-riding surgical principle is **complete gross resection (R0, no residual disease)** — the strongest determinant of survival. The debate is *when* to operate: **primary debulking surgery (PDS)** up front, or **neoadjuvant chemotherapy (NACT)** followed by interval debulking surgery (IDS) when complete PDS is not feasible.',
          },
          {
            type: 'text',
            content:
              'NACT (typically 3 cycles of carboplatin-paclitaxel) reduces perioperative morbidity and increases complete-resection rates in high-burden disease, at the cost of possibly inferior long-term survival versus a successful upfront R0 PDS. Trials (EORTC 55971, CHORUS) showed non-inferior survival with less morbidity for NACT; expert consensus favours PDS when complete resection is achievable with acceptable morbidity, and NACT when it is not.',
          },
          {
            type: 'key',
            title: 'Residual disease is the currency of ovarian surgery',
            content:
              'Survival tracks with residual tumour: no gross residual > ≤1 cm > gross residual. Every operative decision — bowel resection, diaphragm stripping, splenectomy — is justified by whether it achieves R0. "Optimal" (≤1 cm) is no longer the aim; complete gross resection is.',
          },
        ],
      },
      {
        id: 'ch21-s2',
        title: 'OVHIPEC-1 — HIPEC at Interval Debulking',
        blocks: [
          {
            type: 'trial',
            title: 'OVHIPEC-1 — HIPEC improves survival at interval surgery',
            content:
              'In 245 stage III ovarian cancer patients who received NACT and were undergoing interval cytoreduction, adding **cisplatin HIPEC (100 mg/m², 90 min)** to complete IDS improved median recurrence-free survival (14.2 vs 10.7 months) and **overall survival (45.7 vs 33.9 months; HR 0.67)** — a ~12-month OS gain — without increasing grade 3–4 toxicity.',
            ref: 'van Driel WJ, et al. N Engl J Med 2018;378(3):230–240.',
          },
          {
            type: 'text',
            content:
              'OVHIPEC-1 is the only phase III RCT showing an OS benefit for HIPEC in ovarian cancer, but it applies to a *specific* setting: **stage III disease, at interval debulking after NACT, with cisplatin**. It does not license HIPEC at primary surgery, at recurrence, or with other drugs. Uptake varies by region; OVHIPEC-2 and other trials are refining the population (e.g. primary setting).',
          },
          {
            type: 'pitfall',
            title: 'Do not generalise OVHIPEC-1 beyond its setting',
            content:
              'Applying cisplatin HIPEC at primary debulking or at recurrence extrapolates beyond the evidence. Renal protection (sodium thiosulfate in the trial) and drug/dose specifics matter — the benefit is tied to the exact IDS-after-NACT, stage III, cisplatin protocol tested.',
          },
        ],
      },
      {
        id: 'ch21-s3',
        title: 'Recurrence — The AGO Score and DESKTOP III',
        blocks: [
          {
            type: 'text',
            content:
              'At platinum-sensitive recurrence, selected patients benefit from **secondary cytoreductive surgery**. The **AGO score** predicts who can achieve a complete second resection.',
          },
          {
            type: 'list',
            title: 'AGO score — a positive score requires ALL three',
            items: [
              'Good performance status (ECOG 0)',
              'Complete resection at the initial (primary) surgery — no residual disease then',
              'Ascites < 500 mL at recurrence',
            ],
          },
          {
            type: 'trial',
            title: 'DESKTOP III — secondary surgery benefits AGO-positive patients',
            content:
              'In 407 AGO-positive, platinum-sensitive relapse patients, secondary cytoreduction plus chemotherapy improved median OS (**53.7 vs 46.0 months; HR 0.75**) versus chemotherapy alone — the benefit confined to those achieving complete resection (61.9 vs 46.7 months). Incomplete secondary surgery conferred no advantage and added risk.',
            ref: 'Harter P, et al. N Engl J Med 2021;385(23):2123–2131.',
          },
          {
            type: 'pearl',
            title: 'Select for secondary surgery by resectability, not just relapse',
            content:
              'A positive AGO score identifies patients likely to be rendered disease-free again. If complete resection is not realistically achievable, chemotherapy ± bevacizumab and PARP-inhibitor maintenance is the better path — mirroring the "complete-or-nothing" lesson from DESKTOP III.',
          },
        ],
      },
      {
        id: 'ch21-s4',
        title: 'Molecular Maintenance — BRCA, HRD and PARP Inhibitors',
        blocks: [
          {
            type: 'text',
            content:
              'Roughly half of high-grade serous ovarian cancers exhibit **homologous recombination deficiency (HRD)** — via germline/somatic BRCA1/2 mutation or other HR-pathway defects — creating "BRCAness" and synthetic-lethal vulnerability to **PARP inhibitors**. Testing BRCA (germline + somatic) and HRD status (e.g. genomic instability score) is now standard and directs maintenance therapy.',
          },
          {
            type: 'trial',
            title: 'SOLO-1 — olaparib maintenance transforms BRCA-mutant outcomes',
            content:
              'In newly diagnosed BRCA-mutant advanced ovarian cancer responding to platinum, 2 years of maintenance **olaparib** produced a durable, practice-defining benefit: 7-year OS 67% vs 46.5% and a median PFS advantage of years (HR for progression ~0.33). PARP maintenance is now standard after first-line response in BRCA-mutant disease.',
            ref: 'Moore K, et al. SOLO-1. N Engl J Med 2018;379(26):2495–2505.',
          },
          {
            type: 'trial',
            title: 'PAOLA-1 — olaparib + bevacizumab in HRD-positive disease',
            content:
              'Adding **olaparib to bevacizumab** maintenance improved PFS in HRD-positive (including BRCA-wild-type HRD) advanced ovarian cancer (median PFS 37.2 vs 17.7 months in the HRD-positive subgroup), extending PARP benefit beyond BRCA mutation to the broader HRD population.',
            ref: 'Ray-Coquard I, et al. PAOLA-1. N Engl J Med 2019;381(25):2416–2428.',
          },
          {
            type: 'table',
            title: 'Molecular status → maintenance strategy',
            headers: ['Status', 'Maintenance option'],
            rows: [
              ['BRCA1/2-mutant', 'PARP inhibitor (olaparib) ± bevacizumab — greatest benefit'],
              ['HRD-positive, BRCA-WT', 'PARP inhibitor + bevacizumab (PAOLA-1)'],
              ['HRD-negative / HRP', 'Bevacizumab maintenance; limited PARP benefit'],
            ],
          },
        ],
      },
      {
        id: 'ch21-s5',
        title: 'Targeting Folate Receptor Alpha',
        blocks: [
          {
            type: 'text',
            content:
              '**Folate receptor alpha (FRα)** is over-expressed in most high-grade serous ovarian cancers. **Mirvetuximab soravtansine**, an FRα-directed antibody-drug conjugate delivering a maytansinoid (DM4) payload, targets FRα-high platinum-resistant disease.',
          },
          {
            type: 'trial',
            title: 'MIRASOL — mirvetuximab improves survival in FRα-high platinum-resistant disease',
            content:
              'In FRα-high platinum-resistant ovarian cancer, **mirvetuximab soravtansine** beat investigator-choice chemotherapy on PFS (5.6 vs 4.0 months) and, notably, **overall survival (16.4 vs 12.7 months; HR 0.67)** — the first ADC to show an OS benefit in this hard-to-treat setting, with an ocular-toxicity profile requiring monitoring.',
            ref: 'Moore KN, et al. MIRASOL. N Engl J Med 2023;389(23):2162–2174.',
          },
          {
            type: 'pearl',
            title: 'FRα expression is a companion biomarker',
            content:
              'Mirvetuximab benefit is confined to FRα-high tumours (by validated IHC). Test FRα in platinum-resistant recurrence to identify candidates — targeted delivery only works where the receptor is abundant.',
          },
          {
            type: 'key',
            title: 'Bottom line',
            content:
              'Ovarian/primary peritoneal carcinoma management is a surgical–molecular integration: pursue complete gross resection (PDS or IDS), consider cisplatin HIPEC at interval surgery per OVHIPEC-1, select recurrences for secondary cytoreduction by the AGO score, and drive maintenance/targeted therapy with BRCA/HRD and FRα biomarkers.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 22 ──────────────────────────────────────────────────────────────
  {
    id: 'ch22-gastric',
    number: '22',
    title: 'Gastric Peritoneal Metastases',
    subtitle: 'Investigational status, PCI ≤6, FLOT4, GASTRICHIP, claudin-18.2 and bidirectional therapy',
    icon: 'Activity',
    reading_time_min: 26,
    level: 'Advanced',
    track: 'Disease-Specific',
    guidelines_version: 'ESMO Gastric 2022 · JGCA 2021 · NCCN Gastric 2024 · SPOTLIGHT/GLOW',
    learning_objectives: [
      'Explain why CRS+HIPEC for gastric peritoneal disease remains investigational',
      'Apply the low PCI threshold (≤6) and complete-cytoreduction requirement',
      'Integrate perioperative FLOT and understand GASTRICHIP',
      'Describe claudin-18.2 targeting (SPOTLIGHT/GLOW) and HER2 status',
      'Recognise signet-ring/linitis biology as a contraindication signal',
    ],
    key_references: [
      'Al-Batran SE, et al. FLOT4. Lancet 2019;393(10184):1948–1957.',
      'Shitara K, et al. SPOTLIGHT (zolbetuximab). Lancet 2023;401(10389):1655–1668.',
      'Shah MA, et al. GLOW (zolbetuximab). Nat Med 2023;29:2133–2141.',
      'Bonnot PE, et al. CYTO-CHIP gastric propensity study. J Clin Oncol 2019;37(23):2028–2040.',
      'Rau B, et al. GASTRIPEC-I. Ann Oncol 2024.',
    ],
    sections: [
      {
        id: 'ch22-s1',
        title: 'The Hardest Peritoneal Compartment',
        blocks: [
          {
            type: 'text',
            content:
              'Gastric cancer with peritoneal metastasis (GC-PM) has the most aggressive biology of the common peritoneal malignancies. Peritoneum is the commonest metastatic site in gastric cancer; once established, median survival with systemic therapy alone is ~3–6 months historically, extended to ~12+ months with modern regimens. Diffuse, signet-ring and linitis plastica phenotypes dominate and confer rapid, infiltrative spread.',
          },
          {
            type: 'text',
            content:
              'Consequently, **CRS+HIPEC for GC-PM remains investigational**, offered within trials or highly selected expert practice rather than as standard of care. The therapeutic window is narrow and patient selection unforgiving — the opposite of low-grade PMP.',
          },
          {
            type: 'key',
            title: 'Selection is everything in gastric peritoneal disease',
            content:
              'Only patients with low-volume disease (PCI ≤6), no distant metastases, a response to systemic therapy, and a realistic prospect of complete cytoreduction (CC-0) should be considered for regional therapy — and even then within a trial framework.',
          },
        ],
      },
      {
        id: 'ch22-s2',
        title: 'Selection Thresholds and Cytoreduction Data',
        blocks: [
          {
            type: 'table',
            title: 'Selection criteria for CRS±HIPEC in GC-PM',
            headers: ['Criterion', 'Threshold'],
            rows: [
              ['PCI', '≤6 (benefit falls off sharply above this)'],
              ['Cytoreduction', 'CC-0 required — CC-1 already too much residual disease'],
              ['Response to systemic therapy', 'Stable/responding before surgery'],
              ['Histology', 'Caution with signet-ring/linitis; poor biology'],
              ['Distant disease', 'Absent (peritoneum-limited only)'],
            ],
          },
          {
            type: 'trial',
            title: 'CYTO-CHIP (gastric) — survival gain only with complete CRS',
            content:
              'In a French propensity-matched analysis of GC-PM, CRS+HIPEC was associated with improved OS versus CRS alone, but benefit concentrated in **CC-0 patients with low PCI**; median survival deteriorated rapidly with rising PCI and incomplete cytoreduction, reinforcing the ≤6 / CC-0 doctrine.',
            ref: 'Bonnot PE, et al. J Clin Oncol 2019;37(23):2028–2040.',
          },
          {
            type: 'trial',
            title: 'GASTRIPEC-I — HIPEC did not improve OS',
            content:
              'This German RCT of CRS with vs without cisplatin/mitomycin HIPEC in gastric peritoneal disease closed early and showed **no significant overall survival benefit** for adding HIPEC, though a signal toward improved peritoneal control was noted — underscoring why the field remains investigational and selection-dependent.',
            ref: 'Rau B, et al. GASTRIPEC-I. Ann Oncol 2024.',
          },
          {
            type: 'pitfall',
            title: 'A "low" gastric PCI can still be biologically hopeless',
            content:
              'Signet-ring linitis can present with a modest PCI yet diffuse submucosal and mesenteric infiltration that precludes CC-0 and recurs almost immediately. Number-based selection must be tempered by histology and intraoperative assessment — a PCI of 5 in linitis is not a PCI of 5 in an intestinal-type tumour.',
          },
        ],
      },
      {
        id: 'ch22-s3',
        title: 'Perioperative Systemic Backbone — FLOT and GASTRICHIP',
        blocks: [
          {
            type: 'trial',
            title: 'FLOT4 — the perioperative chemotherapy standard',
            content:
              'In resectable gastric/GEJ adenocarcinoma, perioperative **FLOT (5-FU, leucovorin, oxaliplatin, docetaxel)** improved median OS to 50 vs 35 months versus ECF/ECX, with higher pathologic complete-response and R0 rates. FLOT is the systemic backbone against which any regional strategy for peritoneal-risk gastric cancer is built.',
            ref: 'Al-Batran SE, et al. Lancet 2019;393(10184):1948–1957.',
          },
          {
            type: 'text',
            content:
              '**GASTRICHIP** is the phase III French RCT testing prophylactic oxaliplatin HIPEC at the time of curative gastrectomy in patients at high peritoneal risk (serosal invasion, nodal positivity, or positive cytology). It asks whether HIPEC can prevent — not treat — peritoneal recurrence in a FLOT-era population; results are awaited and will define whether regional prophylaxis has a role.',
          },
          {
            type: 'pearl',
            title: 'Positive cytology (cy+) is peritoneal disease',
            content:
              'Positive peritoneal lavage cytology without visible implants (cy+/P0) is staged as metastatic (M1) and predicts peritoneal recurrence. It is a target population for conversion systemic therapy and, in trials, for intraperitoneal strategies — treat it as microscopic peritoneal disease, not as node-negative resectable disease.',
          },
        ],
      },
      {
        id: 'ch22-s4',
        title: 'Molecular Targets — Claudin-18.2 and HER2',
        blocks: [
          {
            type: 'text',
            content:
              'Two biomarkers have reshaped systemic gastric therapy and are directly relevant to peritoneal disease. **Claudin-18.2 (CLDN18.2)** is a tight-junction protein expressed in a large fraction of gastric adenocarcinomas, including diffuse/signet-ring tumours prone to peritoneal spread. **Zolbetuximab**, an anti-CLDN18.2 monoclonal antibody, adds to first-line chemotherapy in CLDN18.2-positive, HER2-negative disease.',
          },
          {
            type: 'trial',
            title: 'SPOTLIGHT & GLOW — zolbetuximab extends survival',
            content:
              'In CLDN18.2-positive, HER2-negative advanced gastric cancer, adding **zolbetuximab** to chemotherapy improved OS: **SPOTLIGHT** (with mFOLFOX6) raised median OS to 18.2 vs 15.5 months (HR 0.75), and **GLOW** (with CAPOX) to 14.4 vs 12.2 months (HR 0.77). Nausea/vomiting from CLDN18.2 expression in normal gastric mucosa is the characteristic toxicity.',
            ref: 'Shitara K, et al. SPOTLIGHT. Lancet 2023;401(10389):1655–1668; Shah MA, et al. GLOW. Nat Med 2023;29:2133–2141.',
          },
          {
            type: 'table',
            title: 'Biomarker-driven systemic therapy in gastric adenocarcinoma',
            headers: ['Biomarker', 'Frequency', 'Therapy'],
            rows: [
              ['HER2-positive', '~15–20%', 'Trastuzumab + chemo (± pembrolizumab, KEYNOTE-811)'],
              ['CLDN18.2-positive, HER2-neg', '~30–40%', 'Zolbetuximab + chemo (SPOTLIGHT/GLOW)'],
              ['PD-L1 CPS ≥5', 'Variable', 'Nivolumab + chemo (CheckMate-649)'],
              ['dMMR/MSI-H', '~5–10%', 'Checkpoint inhibitor-sensitive'],
            ],
          },
          {
            type: 'pearl',
            title: 'Bidirectional (systemic + intraperitoneal) therapy',
            content:
              'The Japanese "bidirectional" strategy combines systemic chemotherapy with intraperitoneal paclitaxel (via port) to attack peritoneal disease from both the vascular and peritoneal sides. It can convert unresectable cy+/low-volume disease to a state amenable to gastrectomy in responders — an investigational but promising conversion approach (PHOENIX-GC and successors).',
          },
          {
            type: 'key',
            title: 'Bottom line',
            content:
              'Gastric peritoneal disease is aggressive and CRS+HIPEC remains investigational, reserved for PCI ≤6 / CC-0 responders. Build on a FLOT backbone, profile HER2, CLDN18.2, PD-L1 and MMR, watch GASTRICHIP, and treat signet-ring/linitis biology as a strong caution against futile surgery.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 23 ──────────────────────────────────────────────────────────────
  {
    id: 'ch23-sarcomatosis-dsrct',
    number: '23',
    title: 'Peritoneal Sarcomatosis & DSRCT',
    subtitle: 'Retroperitoneal/uterine LMS, dedifferentiated liposarcoma, TARPSWG and EWSR1-WT1 tumours',
    icon: 'Bone',
    reading_time_min: 26,
    level: 'Advanced',
    track: 'Disease-Specific',
    guidelines_version: 'TARPSWG consensus 2021 · NCCN Soft Tissue Sarcoma 2024 · ESMO Sarcoma 2021',
    learning_objectives: [
      'Distinguish sarcomatosis (mesenchymal peritoneal spread) from carcinomatosis',
      'Recognise the dominant histotypes: leiomyosarcoma, dedifferentiated liposarcoma, DSRCT',
      'Apply the >90% cytoreduction goal and histotype-specific systemic therapy',
      'Describe DSRCT (EWSR1-WT1), multimodal therapy and whole-abdominal radiotherapy',
      'Reference TARPSWG guidance on recurrent retroperitoneal sarcoma',
    ],
    key_references: [
      'TARPSWG. Management of recurrent retroperitoneal sarcoma consensus. Ann Surg Oncol 2016/2021.',
      'Baratti D, Deraco M, et al. Sarcomatosis CRS+HIPEC outcomes. Ann Surg Oncol.',
      'Hayes-Jordan A, et al. DSRCT CRS+HIPEC. J Pediatr Surg / Ann Surg Oncol.',
      'Gronchi A, et al. STRASS (preoperative RT in RPS). Lancet Oncol 2020;21(10):1366–1377.',
    ],
    sections: [
      {
        id: 'ch23-s1',
        title: 'Sarcomatosis Is Not Carcinomatosis',
        blocks: [
          {
            type: 'text',
            content:
              'Peritoneal sarcomatosis is the intraperitoneal dissemination of **mesenchymal (sarcomatous) tumour**, biologically distinct from epithelial carcinomatosis. It arises most often from recurrent retroperitoneal or uterine sarcomas, or from primary peritoneal/visceral sarcomas. Lymph-node spread is rare; dissemination is by transcoelomic seeding and local recurrence. Because sarcomas are chemoresistant and histotype-diverse, the treatment logic differs fundamentally from carcinomatosis.',
          },
          {
            type: 'table',
            title: 'Dominant histotypes in peritoneal sarcomatosis',
            headers: ['Histotype', 'Typical origin', 'Behaviour / therapy note'],
            rows: [
              ['Leiomyosarcoma (LMS)', 'Uterine, retroperitoneal, vascular', 'Doxorubicin ± dacarbazine; gemcitabine-docetaxel active'],
              ['Dedifferentiated liposarcoma (DDLPS)', 'Retroperitoneum (MDM2-amplified)', 'Relatively chemoresistant; surgery-led'],
              ['DSRCT', 'Young males, peritoneal', 'EWSR1-WT1; multimodal, chemo-sensitive but relapsing'],
              ['Well-diff liposarcoma (WDLPS)', 'Retroperitoneum', 'Indolent; local control by surgery'],
              ['GIST (peritoneal spread)', 'GI tract', 'Imatinib-driven — a molecular exception'],
            ],
          },
          {
            type: 'key',
            title: 'Histotype dictates everything',
            content:
              'Unlike carcinomatosis, where PCI/CC dominate, sarcomatosis management is first a histopathological question. Chemosensitivity, radiosensitivity and recurrence pattern differ so much between LMS, DDLPS and DSRCT that no single algorithm applies — obtain expert sarcoma pathology (with MDM2/EWSR1 testing) before planning.',
          },
        ],
      },
      {
        id: 'ch23-s2',
        title: 'Surgical Goal and the Role of Cytoreduction',
        blocks: [
          {
            type: 'text',
            content:
              'For sarcomatosis, complete macroscopic resection is the aim, but the survival benefit of aggressive multivisceral cytoreduction is more debated than in carcinomatosis. Series suggest that **>90% cytoreduction (near-complete resection)** is required for any survival benefit; incomplete debulking does not help and carries substantial morbidity. The role of **HIPEC in sarcomatosis is unproven** and generally not recommended outside trials — sarcomas respond poorly to the standard intraperitoneal agents.',
          },
          {
            type: 'trial',
            title: 'Deraco/Baratti sarcomatosis series — completeness matters, HIPEC unproven',
            content:
              'In CRS+HIPEC series for peritoneal sarcomatosis, long-term survival was seen predominantly in patients achieving complete/near-complete cytoreduction, but outcomes remained inferior to epithelial disease and the independent contribution of HIPEC could not be demonstrated — supporting surgery-led, histotype-tailored management rather than routine regional chemotherapy.',
            ref: 'Baratti D, Deraco M, et al. Ann Surg Oncol.',
          },
          {
            type: 'pitfall',
            title: 'Repeated debulking of DDLPS has diminishing returns',
            content:
              'Retroperitoneal dedifferentiated liposarcoma recurs repeatedly; each subsequent resection is more morbid and less durable. TARPSWG cautions against reflexive re-operation — decisions must weigh growth rate, disease-free interval, and grade rather than defaulting to surgery at every recurrence.',
          },
        ],
      },
      {
        id: 'ch23-s3',
        title: 'Retroperitoneal Sarcoma, TARPSWG and Radiotherapy',
        blocks: [
          {
            type: 'text',
            content:
              'Most peritoneal sarcomatosis originates from recurrent **retroperitoneal sarcoma (RPS)**. The **Trans-Atlantic Retroperitoneal Sarcoma Working Group (TARPSWG)** provides consensus guidance: primary RPS is best treated by an aggressive, compartmental en-bloc resection at a high-volume centre; recurrence management is individualised by histotype, growth rate and disease-free interval.',
          },
          {
            type: 'trial',
            title: 'STRASS — preoperative radiotherapy in RPS',
            content:
              'STRASS randomised primary RPS to preoperative radiotherapy plus surgery versus surgery alone. It did not improve abdominal recurrence-free survival overall, but subgroup analyses (STRASS-derived) suggested benefit in **liposarcoma/low-grade histologies** for local control — reinforcing that radiotherapy value is histotype-dependent, not universal.',
            ref: 'Gronchi A, et al. STRASS. Lancet Oncol 2020;21(10):1366–1377.',
          },
          {
            type: 'text',
            content:
              'Systemic therapy is histotype-specific: doxorubicin-based regimens (± ifosfamide or dacarbazine) for LMS and high-grade sarcomas; gemcitabine-docetaxel for LMS; imatinib for GIST; trabectedin and pazopanib in later lines. There is no effective "standard" chemotherapy that reliably controls DDLPS, which is why surgery dominates its management.',
          },
          {
            type: 'pearl',
            title: 'Uterine LMS spreads to the peritoneum',
            content:
              'Uterine leiomyosarcoma — sometimes discovered after morcellation of a presumed fibroid — disseminates transcoelomically. Morcellation of an occult uterine sarcoma can seed the peritoneum and worsen prognosis, a key reason contained/in-bag techniques and preoperative suspicion matter.',
          },
          {
            type: 'pearl',
            title: 'GIST is the molecular exception',
            content:
              'Peritoneal spread of gastrointestinal stromal tumour is the one sarcomatosis where systemic therapy transforms outcome: imatinib (and later-line sunitinib/regorafenib), guided by KIT/PDGFRA genotype, controls disseminated disease. Never manage peritoneal GIST like a conventional chemoresistant sarcoma — genotype it and treat with tyrosine-kinase inhibitors.',
          },
        ],
      },
      {
        id: 'ch23-s4',
        title: 'Desmoplastic Small Round Cell Tumour (DSRCT)',
        blocks: [
          {
            type: 'text',
            content:
              'DSRCT is a rare, highly aggressive small-round-blue-cell sarcoma affecting mainly **adolescent and young-adult males**, presenting as diffuse peritoneal/abdominal nodules. It is defined by the pathognomonic **t(11;22)(p13;q12) translocation producing the EWSR1-WT1 fusion gene**, with characteristic polyphenotypic IHC (co-expression of epithelial keratin/EMA, mesenchymal desmin — dot-like — and neural markers).',
          },
          {
            type: 'key',
            title: 'EWSR1-WT1 is the diagnostic hallmark',
            content:
              'Confirm DSRCT with molecular detection of the EWSR1-WT1 fusion (FISH/RT-PCR). The polyphenotypic staining pattern (keratin + desmin + WT1) plus the fusion distinguishes it from other small-round-cell tumours (Ewing sarcoma, rhabdomyosarcoma, neuroblastoma, lymphoma).',
          },
          {
            type: 'text',
            content:
              'Management is intensively multimodal: high-intensity multi-agent chemotherapy (P6-type regimens: cyclophosphamide, doxorubicin, vincristine alternating with ifosfamide/etoposide), aggressive cytoreductive surgery aiming for >90% resection, and **whole-abdominopelvic radiotherapy (WART)** for consolidation. CRS+HIPEC has been explored (Hayes-Jordan) with improved local control in selected patients, but nearly all relapse and long-term survival remains poor (5-year OS ~15–25%).',
          },
          {
            type: 'trial',
            title: 'Hayes-Jordan DSRCT CRS+HIPEC experience',
            content:
              'In pediatric/young-adult DSRCT, complete cytoreduction (>90%) followed by HIPEC improved peritoneal disease control versus incomplete surgery, and multimodal therapy (chemo + surgery + WART) offers the best chance of prolonged survival — but recurrence is the rule, and the tumour remains one of the most lethal peritoneal malignancies.',
            ref: 'Hayes-Jordan A, et al. Ann Surg Oncol / J Pediatr Surg.',
          },
          {
            type: 'key',
            title: 'Bottom line',
            content:
              'Sarcomatosis is a histotype-first, surgery-led disease where completeness (>90%) matters and HIPEC is unproven. Diagnose the histology precisely (MDM2 for DDLPS, EWSR1-WT1 for DSRCT), tailor systemic therapy to subtype, follow TARPSWG for recurrent RPS, and treat DSRCT with maximal multimodal intent while counselling on its guarded prognosis.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 24 ──────────────────────────────────────────────────────────────
  {
    id: 'ch24-rare-small-bowel',
    number: '24',
    title: 'Rare & Small-Bowel Origin Peritoneal Disease',
    subtitle: 'Small-bowel adenocarcinoma, goblet cell adenocarcinoma, NET peritoneal disease and desmoid',
    icon: 'Sprout',
    reading_time_min: 22,
    level: 'Advanced',
    track: 'Disease-Specific',
    guidelines_version: 'NCCN 2024 · ESMO 2023 · PSOGI 2022 · ENETS guidelines',
    learning_objectives: [
      'Recognise small-bowel adenocarcinoma peritoneal metastasis and its Lynch association',
      'Classify goblet cell adenocarcinoma (Tang/WHO) and its intermediate biology',
      'Approach neuroendocrine peritoneal disease and the value of cytoreduction',
      'Understand desmoid (aggressive fibromatosis) as a non-metastatic infiltrative peritoneal problem',
      'Select rare peritoneal histologies for regional versus systemic therapy',
    ],
    key_references: [
      'PSOGI 2022 consensus — rare peritoneal histologies.',
      'Tang LH, et al. Goblet cell carcinoid classification. Am J Surg Pathol 2008;32(10):1429–1443.',
      'ENETS/NANETS neuroendocrine tumour guidelines.',
      'Desmoid Tumour Working Group global consensus. Eur J Cancer 2020;127:96–107.',
    ],
    sections: [
      {
        id: 'ch24-s1',
        title: 'Small-Bowel Adenocarcinoma and Lynch Syndrome',
        blocks: [
          {
            type: 'text',
            content:
              'Small-bowel adenocarcinoma (SBA) is rare but disproportionately prone to peritoneal spread, presenting late because of vague symptoms and difficult imaging. It is strongly associated with predisposing conditions: **Lynch syndrome, Crohn\'s disease, celiac disease, and familial adenomatous polyposis (duodenal/peri-ampullary)**. A substantial fraction of SBAs are dMMR/MSI-H, linking them to the immunotherapy paradigm of Chapter 18.',
          },
          {
            type: 'text',
            content:
              'For SBA peritoneal metastasis, selected series support CRS+HIPEC in low-volume, complete-cytoreduction-feasible disease, yielding survival superior to systemic therapy alone — but evidence is limited and biology (grade, MMR status, PCI) governs selection. Systemic therapy borrows from colorectal regimens (FOLFOX/CAPOX), with checkpoint blockade for dMMR/MSI-H tumours.',
          },
          {
            type: 'pearl',
            title: 'Test SBA for MMR — it changes management twice',
            content:
              'dMMR in small-bowel adenocarcinoma both flags possible Lynch syndrome (germline testing, family screening) and identifies immunotherapy-responsive disease that may respond better to checkpoint blockade than to surgery or chemotherapy.',
          },
        ],
      },
      {
        id: 'ch24-s2',
        title: 'Goblet Cell Adenocarcinoma of the Appendix',
        blocks: [
          {
            type: 'text',
            content:
              'Goblet cell adenocarcinoma (GCA; formerly goblet cell carcinoid) is a distinct appendiceal tumour with **mixed neuroendocrine and glandular (mucinous) differentiation** — biologically intermediate between a well-differentiated NET and an adenocarcinoma, and more aggressive than a typical carcinoid. The **Tang classification (A/B/C)**, now folded into the WHO grading (G1–G3), stratifies behaviour by the proportion of adenocarcinomatous component.',
          },
          {
            type: 'table',
            title: 'Goblet cell adenocarcinoma — Tang/WHO grading',
            headers: ['Grade', 'Feature', 'Behaviour'],
            rows: [
              ['Tang A / low grade', 'Tubular goblet cell architecture', 'More indolent'],
              ['Tang B / intermediate', 'Signet-ring/atypia emerging', 'Intermediate aggressiveness'],
              ['Tang C / high grade', 'Adenocarcinoma ex-goblet cell', 'Behaves like poorly-diff adenocarcinoma'],
            ],
          },
          {
            type: 'text',
            content:
              'Because GCA metastasises transcoelomically, right hemicolectomy is standard for the primary, and peritoneal spread may be treated with CRS+HIPEC in selected complete-cytoreduction candidates — with prognosis tracking grade. Higher-grade GCA behaves like adenocarcinoma and warrants systemic chemotherapy.',
          },
          {
            type: 'pitfall',
            title: 'Do not treat GCA like a benign carcinoid',
            content:
              'The old "goblet cell carcinoid" label misleadingly implies indolent NET behaviour. GCA is a carcinoma with neuroendocrine features that can spread to the peritoneum and beyond — it requires oncological, not carcinoid-level, management, including formal colectomy.',
          },
        ],
      },
      {
        id: 'ch24-s3',
        title: 'Neuroendocrine Peritoneal Disease',
        blocks: [
          {
            type: 'text',
            content:
              'Well-differentiated neuroendocrine tumours (NETs) — especially small-bowel primaries — can produce peritoneal and mesenteric disease with a characteristic **desmoplastic mesenteric reaction** causing bowel kinking and ischaemia. NET peritoneal disease is generally indolent, and its management differs from carcinomatosis: **cytoreductive/debulking surgery is often worthwhile even when incomplete**, for symptom control and hormonal-syndrome palliation.',
          },
          {
            type: 'list',
            title: 'Management pillars of NET peritoneal/mesenteric disease',
            items: [
              'Somatostatin analogues (octreotide/lanreotide) — antiproliferative and antisecretory (PROMID, CLARINET)',
              'Cytoreductive/debulking surgery for symptom control and mesenteric relief, even if >90% not achievable',
              'Peptide receptor radionuclide therapy (PRRT, ¹⁷⁷Lu-DOTATATE; NETTER-1) for progressive SSTR-positive disease',
              'Grade (Ki-67) directs intensity: G1/G2 indolent, G3/NEC behave aggressively',
              'Carcinoid crisis prophylaxis (octreotide) around surgery in functional tumours',
            ],
          },
          {
            type: 'trial',
            title: 'CLARINET — lanreotide controls NET progression',
            content:
              'In well-differentiated, non-functioning enteropancreatic NETs, the somatostatin analogue **lanreotide** markedly prolonged progression-free survival versus placebo (median PFS not reached vs 18 months; HR 0.47), establishing SSAs as antiproliferative — not merely antisecretory — and as first-line control for indolent NET peritoneal/mesenteric disease.',
            ref: 'Caplin ME, et al. CLARINET. N Engl J Med 2014;371(3):224–233.',
          },
          {
            type: 'trial',
            title: 'NETTER-1 — PRRT for progressive midgut NETs',
            content:
              'In progressive, SSTR-positive midgut NETs, **¹⁷⁷Lu-DOTATATE (PRRT)** plus octreotide dramatically improved PFS versus high-dose octreotide (HR 0.21) with a response rate of ~18% — validating radionuclide therapy for progressive peritoneal/mesenteric NET disease where surgery cannot achieve control.',
            ref: 'Strosberg J, et al. NETTER-1. N Engl J Med 2017;376(2):125–135.',
          },
          {
            type: 'pearl',
            title: 'HIPEC is not standard for NET peritoneal disease',
            content:
              'Unlike carcinomatosis, well-differentiated NET peritoneal spread is managed with surgery + somatostatin analogues + PRRT; HIPEC has no established role. The indolent biology means even palliative debulking yields durable symptom control.',
          },
        ],
      },
      {
        id: 'ch24-s4',
        title: 'Desmoid (Aggressive Fibromatosis)',
        blocks: [
          {
            type: 'text',
            content:
              'Desmoid tumours (aggressive fibromatosis) are clonal **fibroblastic proliferations that infiltrate locally but do not metastasise**. Intra-abdominal/mesenteric desmoids are strongly associated with **familial adenomatous polyposis (Gardner variant, APC mutation)** and can arise after abdominal surgery or during pregnancy; sporadic desmoids carry CTNNB1 (β-catenin) mutations.',
          },
          {
            type: 'text',
            content:
              'The management paradigm has shifted decisively from reflexive surgery to **active surveillance first**, because many desmoids stabilise or spontaneously regress, and mesenteric surgery risks massive bowel loss and high recurrence. Progressive or symptomatic disease is treated medically before surgery is considered.',
          },
          {
            type: 'table',
            title: 'Desmoid management ladder',
            headers: ['Line', 'Approach'],
            rows: [
              ['First', 'Active surveillance (many stabilise/regress)'],
              ['Systemic (progressive/symptomatic)', 'Nirogacestat (γ-secretase inhibitor, DeFi trial), sorafenib, or low-dose chemotherapy'],
              ['Other', 'NSAIDs, hormonal therapy (historical), tyrosine-kinase inhibitors'],
              ['Surgery/radiotherapy', 'Selective — reserved for refractory/localised disease due to recurrence risk'],
            ],
          },
          {
            type: 'pitfall',
            title: 'Do not resect a mesenteric desmoid reflexively',
            content:
              'Aggressive resection of intra-abdominal desmoids, especially in FAP, causes short-bowel syndrome and frequent recurrence at margins. Surveillance and systemic therapy (nirogacestat/sorafenib) precede surgery — a rare peritoneal problem where doing less is doing better.',
          },
          {
            type: 'key',
            title: 'Bottom line',
            content:
              'Rare peritoneal histologies demand histology-specific logic: treat SBA (test MMR/Lynch) and high-grade goblet cell adenocarcinoma as carcinomas amenable to selective CRS+HIPEC; manage NET peritoneal disease with surgery + somatostatin analogues + PRRT and no HIPEC; and approach desmoid with surveillance and systemic therapy before any operation.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 25 ──────────────────────────────────────────────────────────────
  {
    id: 'ch25-molecular-biomarkers',
    number: '25',
    title: 'Molecular Pathology & Biomarkers Across Peritoneal Disease',
    subtitle: 'RAS/BRAF, MMR/MSI, HER2, CLDN18.2, BAP1, BRCA/HRD, ctDNA and tumour-informed surveillance',
    icon: 'FlaskConical',
    reading_time_min: 24,
    level: 'Advanced',
    track: 'Disease-Specific',
    guidelines_version: 'NCCN 2024–25 · ESMO 2023–24 · PSOGI 2022',
    learning_objectives: [
      'Build a disease-agnostic mental map of actionable biomarkers in peritoneal malignancy',
      'Match each biomarker to its targeted therapy and disease context',
      'Explain the biology and diagnostic use of BAP1 and MMR/MSI',
      'Describe circulating tumour DNA (ctDNA) and tumour-informed minimal residual disease testing',
      'Integrate molecular data into CRS selection and surveillance',
    ],
    key_references: [
      'NCCN Biomarker Compendium 2024–2025.',
      'Reinert T, et al. ctDNA MRD in colorectal cancer. JAMA Oncol 2019;5(8):1124–1131.',
      'Tie J, et al. DYNAMIC ctDNA-guided adjuvant therapy. N Engl J Med 2022;386(24):2261–2272.',
      'ESMO recommendations on tumour-agnostic biomarkers (MSI, NTRK, TMB) 2023.',
    ],
    sections: [
      {
        id: 'ch25-s1',
        title: 'A Biomarker Map for the Peritoneal Surface Oncologist',
        blocks: [
          {
            type: 'text',
            content:
              'Molecular profiling now runs across every peritoneal disease and increasingly determines sequencing, drug choice and even whether to operate. The peritoneal surgeon must read a molecular report as fluently as a PCI score. The essential panel spans predictive, prognostic and hereditary axes — often delivered by a single next-generation sequencing (NGS) assay.',
          },
          {
            type: 'table',
            title: 'Actionable biomarkers across peritoneal malignancies',
            headers: ['Biomarker', 'Key disease(s)', 'Therapeutic/clinical implication'],
            rows: [
              ['RAS (KRAS/NRAS)', 'Colorectal', 'Wild-type → anti-EGFR eligible; mutant → bevacizumab-based; KRAS G12C → sotorasib/adagrasib'],
              ['BRAF V600E', 'Colorectal', 'Adverse prognosis; encorafenib + cetuximab (BEACON)'],
              ['MMR/MSI', 'CRC, gastric, SBA, endometrial', 'MSI-H → checkpoint inhibitors (tumour-agnostic); Lynch screen'],
              ['HER2', 'Gastric, colorectal, ovarian', 'Trastuzumab/T-DXd combinations'],
              ['CLDN18.2', 'Gastric', 'Zolbetuximab + chemo (SPOTLIGHT/GLOW)'],
              ['BAP1', 'Mesothelioma', 'Diagnostic (loss confirms malignancy); germline syndrome'],
              ['BRCA1/2 & HRD', 'Ovarian/primary peritoneal', 'PARP-inhibitor maintenance (SOLO-1, PAOLA-1)'],
              ['MDM2 / EWSR1-WT1', 'Sarcomatosis / DSRCT', 'Diagnostic — DDLPS vs DSRCT'],
              ['NTRK fusion', 'Tumour-agnostic (rare)', 'Larotrectinib/entrectinib'],
            ],
          },
          {
            type: 'key',
            title: 'One assay, many decisions',
            content:
              'A comprehensive NGS panel on a peritoneal biopsy can simultaneously deliver RAS/BRAF, MSI/TMB, HER2, fusion and hereditary-risk data — informing systemic therapy, immunotherapy eligibility, prognosis, and genetic referral in a single test. Order it early, before committing to CRS.',
          },
        ],
      },
      {
        id: 'ch25-s2',
        title: 'The Prognostic and Diagnostic Biomarkers',
        blocks: [
          {
            type: 'text',
            content:
              'Some markers change *prognosis and selection* rather than offering a direct drug. **BRAF V600E** in colorectal peritoneal disease signals aggressive biology and short durability, tempering enthusiasm for high-morbidity CRS. **BAP1 loss** confirms mesothelial malignancy and, when germline, triggers cascade family testing. **MDM2 amplification** defines well-differentiated/dedifferentiated liposarcoma; **EWSR1-WT1** defines DSRCT — molecular anchors that redirect the entire treatment pathway.',
          },
          {
            type: 'text',
            content:
              '**MMR/MSI** is both prognostic and predictive and is now *tumour-agnostic*: MSI-H disease of any origin is checkpoint-inhibitor sensitive. Because peritoneal spread is enriched for mucinous, right-sided and diffuse tumours, MSI-H and BRAF-mutant subsets are over-represented — precisely the biology the peritoneal surgeon encounters.',
          },
          {
            type: 'pearl',
            title: 'Let biology veto or endorse the operation',
            content:
              'At borderline PCI, an MMR-proficient, RAS/BRAF wild-type, treatment-responsive tumour endorses complete CRS, whereas a BRAF-mutant or signet-ring MSI-stable tumour argues against it. Molecular status is now a formal input to resectability decisions, not an afterthought.',
          },
          {
            type: 'pitfall',
            title: 'Molecular heterogeneity between sites',
            content:
              'Peritoneal deposits can differ molecularly from the primary or from liver metastases (e.g. HER2 or RAS discordance). When a targeted decision hinges on a marker, sample peritoneal disease itself where feasible rather than assuming concordance with an old primary specimen.',
          },
        ],
      },
      {
        id: 'ch25-s3',
        title: 'Circulating Tumour DNA and Minimal Residual Disease',
        blocks: [
          {
            type: 'text',
            content:
              '**Circulating tumour DNA (ctDNA)** — tumour-derived fragments in plasma — enables blood-based detection of minimal residual disease (MRD) after surgery and dynamic monitoring of response. **Tumour-informed** assays (built from the resected tumour\'s mutations) are highly specific for detecting residual/recurrent disease, often lead-timing radiographic relapse by months.',
          },
          {
            type: 'trial',
            title: 'DYNAMIC — ctDNA-guided adjuvant therapy in colon cancer',
            content:
              'In stage II colon cancer, a **ctDNA-guided** strategy (adjuvant chemotherapy only for ctDNA-positive patients) halved chemotherapy use (15% vs 28%) without compromising recurrence-free survival — proof that MRD status can safely de-escalate or direct therapy. ctDNA positivity after resection strongly predicts recurrence.',
            ref: 'Tie J, et al. DYNAMIC. N Engl J Med 2022;386(24):2261–2272.',
          },
          {
            type: 'text',
            content:
              'For peritoneal disease, ctDNA is promising but imperfect: **low-volume, mucinous and peritoneal-confined tumours shed relatively little ctDNA**, producing false negatives. A negative ctDNA does not exclude peritoneal recurrence, and radiographic/laparoscopic assessment retains its role. Nonetheless, ctDNA MRD is an emerging surveillance and trial-stratification tool after CRS.',
          },
          {
            type: 'trial',
            title: 'Reinert — post-operative ctDNA predicts recurrence',
            content:
              'In serially sampled colorectal cancer patients, **detectable ctDNA after surgery** conferred a dramatically higher recurrence risk (HR ~7 for post-operative positivity), and ctDNA rose a median of ~8 months before radiographic relapse — establishing tumour-informed ctDNA as a high-specificity minimal-residual-disease signal.',
            ref: 'Reinert T, et al. JAMA Oncol 2019;5(8):1124–1131.',
          },
          {
            type: 'pearl',
            title: 'Tumour-informed beats tumour-agnostic for MRD',
            content:
              'Bespoke, tumour-informed ctDNA assays (built from the resected tumour\'s own mutations) are far more specific for residual disease than generic panels. When using ctDNA to survey after CRS, prefer a tumour-informed assay — and still pair it with imaging given peritoneal low-shedding.',
          },
          {
            type: 'pitfall',
            title: 'Low ctDNA shedding in peritoneal disease',
            content:
              'Peritoneal metastases — especially mucinous PMP and low-volume implants — are notoriously low ctDNA shedders. Do not interpret undetectable ctDNA as absence of peritoneal disease; combine it with tumour markers, imaging and clinical judgement.',
          },
        ],
      },
      {
        id: 'ch25-s4',
        title: 'Integrating Molecular Data into Practice',
        blocks: [
          {
            type: 'list',
            title: 'A practical molecular workflow before CRS',
            items: [
              'Obtain comprehensive NGS on tumour tissue (RAS/BRAF, MMR/MSI, HER2, fusions, TMB) at diagnosis',
              'Confirm diagnostic anchors by histotype (BAP1 for mesothelioma, MDM2/EWSR1-WT1 for sarcoma)',
              'Use MSI-H to prioritise immunotherapy before surgery (Ch. 18)',
              'Let BRAF-mutant / signet-ring biology inform against high-morbidity CRS at borderline PCI',
              'Refer germline-suspicious results (Lynch, BAP1, BRCA, FAP/desmoid) for genetic counselling',
              'Consider ctDNA MRD for post-CRS surveillance and trial enrolment, aware of low shedding in peritoneal disease',
            ],
          },
          {
            type: 'text',
            content:
              'The convergence of surgery and molecular oncology means the peritoneal surface team is now a molecular tumour board: the resectability discussion incorporates RAS/BRAF, MMR, HER2 and treatment response alongside PCI and small-bowel involvement. Tumour-agnostic approvals (pembrolizumab for MSI-H/TMB-high, larotrectinib for NTRK) make the molecular report relevant regardless of the disease of origin.',
          },
          {
            type: 'key',
            title: 'Bottom line',
            content:
              'Read every peritoneal patient molecularly: a single NGS panel plus histotype-specific anchors (BAP1, MDM2, EWSR1-WT1, BRCA/HRD) drives systemic sequencing, immunotherapy eligibility, prognosis and genetic referral — and increasingly the decision to operate. ctDNA MRD is an emerging surveillance layer, tempered by low shedding in peritoneal disease.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 26 ──────────────────────────────────────────────────────────────
  {
    id: 'ch26-signet-poor-biology',
    number: '26',
    title: 'Signet-Ring, Linitis & Poor-Biology Phenotypes',
    subtitle: 'Why biology beats PCI, red flags for futile surgery, and the palliative pivot',
    icon: 'AlertTriangle',
    reading_time_min: 22,
    level: 'Core',
    track: 'Disease-Specific',
    guidelines_version: 'PSOGI 2022 · Chicago Consensus 2020 · NCCN 2024',
    learning_objectives: [
      'Explain why signet-ring/linitis biology overrides favourable PCI',
      'Recognise the preoperative and intraoperative red flags for unresectable/futile disease',
      'Apply a structured "stop" checklist to avoid non-therapeutic laparotomy',
      'Counsel patients honestly and pivot to effective palliation when CRS is futile',
      'Integrate diagnostic laparoscopy and molecular biology into the go/no-go decision',
    ],
    key_references: [
      'PSOGI 2022 consensus — patient selection.',
      'Bhatt A, et al. Signet-ring cell histology and CRS outcomes. Ann Surg Oncol.',
      'Chicago Consensus Working Group. Ann Surg Oncol 2020.',
      'van der Kaaij RT, et al. Signet-ring cell gastric cancer biology. reviews.',
    ],
    sections: [
      {
        id: 'ch26-s1',
        title: 'Biology Beats PCI',
        blocks: [
          {
            type: 'text',
            content:
              'The central maxim of peritoneal patient selection is that **tumour biology outranks tumour volume**. A low-grade mucinous tumour with a PCI of 30 may be cured; a signet-ring cell adenocarcinoma with a PCI of 8 may recur within months. PCI and CC scores are necessary but not sufficient — they quantify what is present and what was removed, but say nothing about how the residual microscopic disease will behave.',
          },
          {
            type: 'text',
            content:
              '**Signet-ring cell (SRC)** morphology — intracytoplasmic mucin displacing the nucleus — marks diffuse, infiltrative, chemoresistant disease with early lymphovascular and submucosal spread. **Linitis plastica** ("leather bottle") is its extreme: transmural fibrotic infiltration producing a rigid, non-distensible viscus. These phenotypes seed the peritoneum diffusely and microscopically, defeating the premise of complete cytoreduction.',
          },
          {
            type: 'quote',
            content:
              'You can resect what you see; you cannot resect a biology that spreads faster than the knife.',
          },
          {
            type: 'key',
            title: 'Why signet-ring biology defeats CRS',
            content:
              'CRS+HIPEC assumes disease is macroscopically clearable and microscopically controllable. Signet-ring/linitis disease is diffusely infiltrative and chemoresistant, so even a technically complete CC-0 leaves aggressive microscopic disease that recurs rapidly — the operation removes the visible tumour but not the trajectory.',
          },
          {
            type: 'trial',
            title: 'BIG-RENAPE — signet-ring histology halves survival after CRS',
            content:
              'In the French BIG-RENAPE analysis of colorectal peritoneal metastases treated with complete CRS+HIPEC, **signet-ring cell histology was an independent adverse prognostic factor**, roughly halving overall survival compared with non-signet adenocarcinoma at equivalent PCI — hard evidence that biology, not volume, drives outcome and that signet-ring disease often does not benefit from aggressive surgery.',
            ref: 'Bhatt A, et al. (BIG-RENAPE). Ann Surg Oncol.',
          },
          {
            type: 'trial',
            title: 'GASTRIPEC-I — diffuse gastric biology limits HIPEC benefit',
            content:
              'The GASTRIPEC-I RCT of CRS±HIPEC in gastric peritoneal disease — dominated by diffuse/signet-ring histology — showed **no overall survival benefit** and closed early, illustrating at trial level how poor-biology phenotypes blunt the impact of even complete cytoreduction with regional chemotherapy.',
            ref: 'Rau B, et al. GASTRIPEC-I. Ann Oncol 2024.',
          },
        ],
      },
      {
        id: 'ch26-s2',
        title: 'Red Flags for Futile Surgery',
        blocks: [
          {
            type: 'text',
            content:
              'Recognising futility before or during surgery spares the patient a morbid, non-therapeutic procedure and preserves quality of remaining life. Red flags cluster into biological, anatomical and response-based categories.',
          },
          {
            type: 'list',
            title: 'Preoperative red flags',
            items: [
              'Signet-ring cell / linitis plastica histology (especially gastric)',
              'Progression on adequate neoadjuvant systemic therapy (biology declaring itself)',
              'Extraperitoneal metastases (liver, lung, distant nodes)',
              'Radiological small-bowel/mesenteric root encasement or extensive matting',
              'Massive ascites and hypoalbuminaemia (aggressive, high-shedding disease)',
              'Poor performance status / prohibitive comorbidity for major surgery',
              'BRAF-mutant or otherwise adverse molecular profile at borderline burden',
            ],
          },
          {
            type: 'list',
            title: 'Intraoperative red flags (the "stop" signals)',
            items: [
              'Diffuse small-bowel serosal and mesenteric involvement precluding CC-0/1 without short-bowel',
              'Extensive small-bowel mesentery retraction/foreshortening',
              'Hepatoduodenal ligament / porta hepatis encasement',
              'Bulky retroperitoneal or para-aortic nodal disease',
              'Innumerable miliary deposits carpeting the small bowel',
            ],
          },
          {
            type: 'pitfall',
            title: 'Do not "complete" a cytoreduction you should abandon',
            content:
              'The sunk-cost fallacy is dangerous in peritoneal surgery. Once diffuse small-bowel/mesenteric disease reveals CC-0/1 is unattainable, pressing on with massive multivisceral resection converts a diagnostic laparotomy into a harmful, non-therapeutic one. Knowing when to stop is a core skill, not a failure.',
          },
        ],
      },
      {
        id: 'ch26-s3',
        title: 'The Go / No-Go Decision Framework',
        blocks: [
          {
            type: 'text',
            content:
              'A disciplined selection pathway integrates diagnostic laparoscopy, biology and response before any laparotomy. **Diagnostic laparoscopy** directly scores PCI, assesses the small bowel and mesentery, and biopsies for histology/molecular testing — reclassifying a meaningful fraction of "resectable" patients and preventing futile open surgery.',
          },
          {
            type: 'table',
            title: 'Go / No-Go integration for CRS±HIPEC',
            headers: ['Domain', 'Favours CRS (GO)', 'Favours stopping (NO-GO)'],
            rows: [
              ['Histology', 'Low-grade mucinous, epithelioid meso, intestinal-type', 'Signet-ring, linitis, high-grade/sarcomatoid'],
              ['PCI & bowel', 'Low PCI, mobile clean small bowel', 'High PCI, diffuse small-bowel/mesenteric disease'],
              ['Systemic response', 'Responding/stable on neoadjuvant therapy', 'Progression on adequate therapy'],
              ['Molecular', 'RAS/BRAF-WT, MMR-appropriate', 'BRAF-mutant, adverse profile'],
              ['Patient', 'Fit, good PS, motivated', 'Frail, poor PS, prohibitive comorbidity'],
            ],
          },
          {
            type: 'pearl',
            title: 'Neoadjuvant therapy as a biological test',
            content:
              'A period of systemic therapy before CRS is not just downstaging — it is a biology assay. Disease that progresses through adequate treatment has declared an aggressive trajectory that surgery will not reverse; response identifies the patients most likely to benefit from complete cytoreduction.',
          },
        ],
      },
      {
        id: 'ch26-s4',
        title: 'The Palliative Pivot and Honest Counselling',
        blocks: [
          {
            type: 'text',
            content:
              'When CRS is futile, the goal shifts to maximising quality and length of life through effective, less morbid interventions. This pivot should be framed positively — choosing what genuinely helps — not as "nothing more to do."',
          },
          {
            type: 'list',
            title: 'Effective palliative options in peritoneal disease',
            items: [
              'Modern systemic therapy tailored to biomarker profile (± targeted agents/immunotherapy)',
              'PIPAC (pressurised intraperitoneal aerosol chemotherapy) for symptom/ascites control in trials',
              'Paracentesis, tunnelled peritoneal catheters or denver shunt for refractory ascites',
              'Palliative bypass/stenting or venting gastrostomy for malignant bowel obstruction',
              'Early specialist palliative care integration (improves quality and, in some settings, survival)',
              'Intraperitoneal or bidirectional chemotherapy within conversion protocols where appropriate',
            ],
          },
          {
            type: 'text',
            content:
              'Honest, direct counselling is an ethical obligation. Patients and families often arrive expecting "the big operation"; explaining why biology — not surgeon willingness — precludes benefit, and offering a concrete alternative plan, respects autonomy and avoids the harm of futile surgery. Shared decision-making anchored in realistic prognosis is the standard.',
          },
          {
            type: 'pitfall',
            title: 'Futile CRS harms twice',
            content:
              'A non-therapeutic cytoreduction inflicts major morbidity, consumes precious remaining time in recovery, and denies the patient the systemic/palliative therapy that could actually help. The kindest and most skilled decision is often not to operate.',
          },
          {
            type: 'pearl',
            title: 'PIPAC as a palliative bridge, not a cure',
            content:
              'For diffuse poor-biology disease with symptomatic ascites, repeated PIPAC can improve peritoneal symptom control and, in responders, occasionally convert to resectability within trials. Frame it honestly as disease-control/palliation, not curative-intent therapy — expectation-setting is part of the palliative pivot.',
          },
          {
            type: 'key',
            title: 'Bottom line',
            content:
              'Biology beats PCI: signet-ring and linitis phenotypes recur despite complete cytoreduction, so selection must weigh histology, molecular profile and treatment response above volume. Use diagnostic laparoscopy and neoadjuvant therapy as biological tests, recognise the intraoperative "stop" signals, and pivot decisively — and honestly — to effective palliation when CRS would be futile.',
          },
        ],
      },
    ],
  },
]
