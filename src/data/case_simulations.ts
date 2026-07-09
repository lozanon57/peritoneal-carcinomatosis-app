// ─────────────────────────────────────────────────────────────────────────────
// Clinical Case Simulator — branching decision pathways
// Eight evidence-grounded cases in peritoneal surface oncology. Each case is a
// directed graph: a start scenario, decision nodes (options carry a verdict +
// teaching feedback), and terminal outcome nodes on good / poor pathways.
// Grounded in PRODIGE 7, Verwaal 2003/2008, OVHIPEC-1, KEYNOTE-177, FLOT4,
// PSOGI 2022 and the Chicago Consensus 2020.
// ─────────────────────────────────────────────────────────────────────────────

import type { CaseSimulation } from '../types/cases'

export const CASE_SIMULATIONS: CaseSimulation[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // CASE 1 — Colorectal PM, resectable, PCI 12
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'crc-resectable-pci12',
    title: 'Resectable colorectal peritoneal metastases',
    subtitle: 'Isolated peritoneal disease, PCI 12, fit patient',
    histology: 'Colorectal PM',
    difficulty: 2,
    icon: 'Activity',
    estMinutes: 8,
    summary:
      'A 58-year-old man with pT4 sigmoid adenocarcinoma and synchronous, isolated peritoneal metastases. You must sequence staging, systemic therapy and a CRS+HIPEC decision in the post-PRODIGE 7 era.',
    learningObjectives: [
      'Complete staging before committing to CRS+HIPEC',
      'Use diagnostic laparoscopy to confirm resectability and PCI',
      'Sequence systemic chemotherapy around cytoreduction',
      'Interpret PRODIGE 7 for the HIPEC decision',
    ],
    guideline_ref: 'PRODIGE 7 (Quénet, Lancet Oncol 2021); PSOGI 2022; Chicago Consensus 2020',
    startNodeId: 'c1-start',
    nodes: [
      {
        id: 'c1-start',
        type: 'scenario',
        title: 'Presentation',
        body:
          'A **58-year-old man**, ECOG 0, presents with a pT4 N1 sigmoid adenocarcinoma. Staging CT shows **peritoneal nodules** across the pelvis and right paracolic gutter but **no liver or lung metastases**. CEA is mildly elevated. Molecular: **KRAS wild-type, MMR proficient (pMMR)**.',
        detail: 'The referring team asks whether he is a candidate for cytoreductive surgery.',
        vitals: [
          { label: 'ECOG', value: '0' },
          { label: 'CT PCI (est.)', value: '~12' },
          { label: 'MMR', value: 'pMMR' },
          { label: 'KRAS', value: 'WT' },
        ],
        next: 'c1-workup',
      },
      {
        id: 'c1-workup',
        type: 'decision',
        title: 'Staging',
        body: 'CT already shows isolated peritoneal disease. **What completes staging** before you commit to a treatment plan?',
        options: [
          {
            id: 'c1-workup-a',
            label: 'CT thorax/abdomen/pelvis + MDT review; consider diagnostic laparoscopy',
            next: 'c1-lap',
            verdict: 'optimal',
            feedback:
              'Correct. Cross-sectional imaging systematically underestimates PCI. Formal MDT review and a plan for diagnostic laparoscopy to confirm resectability is the standard pathway.',
          },
          {
            id: 'c1-workup-b',
            label: 'Proceed straight to laparotomy and cytoreduction',
            next: 'c1-lap',
            verdict: 'suboptimal',
            feedback:
              'Premature. Committing to open surgery without laparoscopic assessment risks a non-therapeutic laparotomy in a patient whose true PCI or small-bowel burden may preclude a complete cytoreduction.',
          },
          {
            id: 'c1-workup-c',
            label: 'PET-CT alone, then decide',
            next: 'c1-lap',
            verdict: 'acceptable',
            feedback:
              'PET-CT can find occult extra-peritoneal disease but has poor sensitivity for low-volume peritoneal implants. It complements — but does not replace — laparoscopy and MDT review.',
          },
          {
            id: 'c1-workup-d',
            label: 'Declare him palliative — peritoneal spread is incurable',
            next: 'c1-out-palliative',
            verdict: 'harmful',
            feedback:
              'Isolated, low-volume colorectal PM in a fit patient is potentially curable with complete cytoreduction. Denying assessment forfeits a chance at long-term survival.',
          },
        ],
      },
      {
        id: 'c1-lap',
        type: 'info',
        title: 'Diagnostic laparoscopy',
        body:
          'Diagnostic laparoscopy confirms **peritoneal disease with a PCI of 12**. The small-bowel and its mesentery are largely spared (small-bowel regions score low). There is **no unresectable disease at the root of the mesentery, porta hepatis or on extensive small bowel**.',
        detail: 'This is technically resectable to CC-0 by an experienced peritoneal surface team.',
        vitals: [
          { label: 'Confirmed PCI', value: '12' },
          { label: 'Small-bowel regions', value: 'Spared' },
          { label: 'Resectable to', value: 'CC-0' },
        ],
        next: 'c1-chemo',
      },
      {
        id: 'c1-chemo',
        type: 'decision',
        title: 'Systemic sequencing',
        body: 'He has synchronous, isolated, resectable colorectal PM. **How do you sequence systemic therapy** around cytoreduction?',
        options: [
          {
            id: 'c1-chemo-a',
            label: 'Perioperative systemic chemotherapy (e.g. FOLFOX), with CRS+HIPEC in a treatment-free window',
            next: 'c1-hipec',
            verdict: 'optimal',
            feedback:
              'Reasonable and widely practised. Systemic chemotherapy allows biological selection (excludes rapid progressors) and treats micrometastatic disease. CRS is performed in a chemotherapy-free interval to optimise healing.',
          },
          {
            id: 'c1-chemo-b',
            label: 'Upfront CRS+HIPEC now, adjuvant chemotherapy afterwards',
            next: 'c1-hipec',
            verdict: 'acceptable',
            feedback:
              'Defensible for low-volume, clearly resectable disease. It avoids chemo-induced fibrosis but forgoes the biological test of tumour behaviour that neoadjuvant therapy provides.',
          },
          {
            id: 'c1-chemo-c',
            label: 'Add bevacizumab and operate 2 weeks after the last dose',
            next: 'c1-hipec',
            verdict: 'suboptimal',
            feedback:
              'Bevacizumab impairs wound healing and anastomotic integrity. A minimum 4–6 week washout before major cytoreduction is required; operating at 2 weeks is unsafe.',
          },
          {
            id: 'c1-chemo-d',
            label: 'Indefinite palliative chemotherapy only — no surgery',
            next: 'c1-out-palliative',
            verdict: 'harmful',
            feedback:
              'Withholding surgery in a fit patient with resectable isolated PM discards the only potentially curative option. Median survival with chemotherapy alone is far shorter than with complete cytoreduction.',
          },
        ],
      },
      {
        id: 'c1-hipec',
        type: 'decision',
        title: 'The HIPEC decision (post-PRODIGE 7)',
        body:
          'At operation you achieve a **complete cytoreduction (CC-0)**. PRODIGE 7 randomised oxaliplatin HIPEC vs no HIPEC after CRS and found **no overall survival difference**, with more morbidity in the oxaliplatin arm. **What do you do intraoperatively?**',
        options: [
          {
            id: 'c1-hipec-a',
            label: 'Complete CRS to CC-0; if HIPEC is used, favour a mitomycin-C based regimen and counsel that the CRS drives survival',
            next: 'c1-out-good',
            verdict: 'optimal',
            feedback:
              'Aligned with current evidence. PRODIGE 7 showed the survival benefit comes from complete cytoreduction, not from oxaliplatin HIPEC. Where HIPEC is retained, many centres moved to mitomycin-C protocols with careful risk/benefit counselling.',
          },
          {
            id: 'c1-hipec-b',
            label: 'Give high-dose oxaliplatin HIPEC to every complete cytoreduction as the key therapeutic step',
            next: 'c1-out-morbidity',
            verdict: 'suboptimal',
            feedback:
              'PRODIGE 7 specifically failed to show an OS benefit for 30-minute oxaliplatin HIPEC and showed more late morbidity. Framing oxaliplatin HIPEC as the decisive step misreads the trial.',
          },
          {
            id: 'c1-hipec-c',
            label: 'Perform CRS to CC-0 and omit HIPEC entirely',
            next: 'c1-out-good',
            verdict: 'acceptable',
            feedback:
              'A legitimate, evidence-consistent position after PRODIGE 7 — the complete cytoreduction is the therapeutic core. HIPEC practice now varies by centre and regimen.',
          },
          {
            id: 'c1-hipec-d',
            label: 'Accept CC-2 residual disease but give HIPEC to “clean up” the rest',
            next: 'c1-out-cc2',
            verdict: 'harmful',
            feedback:
              'HIPEC penetrates only 1–3 mm. Leaving macroscopic (CC-2) disease and relying on intraperitoneal chemotherapy to sterilise it is futile and exposes the patient to morbidity without benefit.',
          },
        ],
      },
      {
        id: 'c1-out-good',
        type: 'outcome',
        title: 'Favourable pathway',
        body: 'Complete cytoreduction (CC-0) achieved with an evidence-based intraperitoneal strategy.',
        verdict: 'optimal',
        outcomeSummary:
          'The patient recovers well and completes perioperative systemic therapy. Complete cytoreduction of low-volume, isolated colorectal PM offers the best chance of long-term survival, with reported 5-year survival of roughly 30–50% in selected patients at expert centres.',
        teachingPoints: [
          'Completeness of cytoreduction (CC-0/CC-1) is the dominant modifiable prognostic factor.',
          'PRODIGE 7 reframed HIPEC: oxaliplatin HIPEC added morbidity without an OS benefit — the surgery is the therapy.',
          'PCI and small-bowel burden confirmed at laparoscopy guide resectability more reliably than CT.',
        ],
        references: [
          'Quénet F et al. Lancet Oncol 2021 (PRODIGE 7)',
          'PSOGI Consensus, 2022',
          'Chicago Consensus Working Group, Ann Surg Oncol 2020',
        ],
      },
      {
        id: 'c1-out-morbidity',
        type: 'outcome',
        title: 'Complete but over-treated',
        body: 'CC-0 achieved, but the intraperitoneal strategy was not evidence-aligned.',
        verdict: 'suboptimal',
        outcomeSummary:
          'The cytoreduction itself was appropriate and likely beneficial, but insisting on high-dose oxaliplatin HIPEC exposed the patient to the exact excess morbidity signal seen in PRODIGE 7 without a survival gain.',
        teachingPoints: [
          'Do not overstate the therapeutic role of oxaliplatin HIPEC after PRODIGE 7.',
          'Excess morbidity from HIPEC can delay or preclude adjuvant systemic therapy.',
        ],
        references: ['Quénet F et al. Lancet Oncol 2021 (PRODIGE 7)'],
      },
      {
        id: 'c1-out-cc2',
        type: 'outcome',
        title: 'Incomplete cytoreduction',
        body: 'Macroscopic residual disease left behind.',
        verdict: 'harmful',
        outcomeSummary:
          'A CC-2 cytoreduction confers no survival benefit over systemic therapy alone. HIPEC cannot compensate for macroscopic residual disease because tissue penetration is only millimetres.',
        teachingPoints: [
          'If CC-0/CC-1 is not achievable, the therapeutic rationale for HIPEC collapses.',
          'Intraperitoneal chemotherapy treats microscopic residual disease, not gross tumour.',
        ],
        references: ['Sugarbaker PH. Completeness of cytoreduction score', 'PRODIGE 7, Lancet Oncol 2021'],
      },
      {
        id: 'c1-out-palliative',
        type: 'outcome',
        title: 'Missed curative window',
        body: 'A potentially curable patient was routed to palliation.',
        verdict: 'harmful',
        outcomeSummary:
          'Isolated, low-PCI, resectable colorectal PM in an ECOG 0 patient is one of the few peritoneal scenarios with genuine curative intent. Systemic therapy alone yields markedly shorter survival than complete cytoreduction.',
        teachingPoints: [
          'Peritoneal spread is not automatically incurable — selection matters.',
          'Refer fit patients with limited-volume PM to a peritoneal surface unit before declaring palliation.',
        ],
        references: ['Verwaal VJ et al. J Clin Oncol 2003', 'PSOGI 2022'],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // CASE 2 — Colorectal PM, MSI-H / dMMR (KEYNOTE-177 pathway)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'crc-msi-high',
    title: 'The MSI-H colorectal peritoneal case',
    subtitle: 'Recognise immunotherapy before you reach for the knife',
    histology: 'Colorectal PM',
    difficulty: 3,
    icon: 'Dna',
    estMinutes: 9,
    summary:
      'A 62-year-old woman with dMMR/MSI-H sigmoid cancer and synchronous peritoneal metastases wants upfront CRS+HIPEC. The trap is to operate before recognising the KEYNOTE-177 immunotherapy pathway.',
    learningObjectives: [
      'Test MMR/MSI status before any treatment decision in mCRC',
      'Apply KEYNOTE-177 to first-line therapy of dMMR/MSI-H mCRC',
      'Avoid bevacizumab with anti-PD-1 therapy',
      'Time surgery around immunotherapy response',
    ],
    guideline_ref: 'KEYNOTE-177 (André, NEJM 2020); ESMO mCRC 2023',
    startNodeId: 'c2-start',
    nodes: [
      {
        id: 'c2-start',
        type: 'scenario',
        title: 'Presentation',
        body:
          'A **62-year-old woman**, ECOG 0, has a pT4 N1 sigmoid adenocarcinoma with synchronous peritoneal metastases (**CT PCI ~12**), no liver or extra-abdominal disease. She has read about CRS+HIPEC and asks to proceed **upfront**.',
        detail: 'Molecular testing is pending. She is keen and fit.',
        vitals: [
          { label: 'ECOG', value: '0' },
          { label: 'CT PCI', value: '~12' },
          { label: 'Molecular', value: 'Pending' },
        ],
        next: 'c2-molecular',
      },
      {
        id: 'c2-molecular',
        type: 'decision',
        title: 'Before you decide',
        body: 'She is fit and the disease looks resectable. **What is essential before choosing a treatment strategy?**',
        options: [
          {
            id: 'c2-mol-a',
            label: 'Obtain MMR/MSI status (and RAS/BRAF) and review at MDT',
            next: 'c2-result',
            verdict: 'optimal',
            feedback:
              'Essential. MMR/MSI status fundamentally changes first-line therapy in metastatic colorectal cancer. Never commit to a plan in mCRC without it.',
          },
          {
            id: 'c2-mol-b',
            label: 'Book CRS+HIPEC now; molecular results will not change the surgery',
            next: 'c2-result-forced',
            verdict: 'harmful',
            feedback:
              'This is the core trap. If she is dMMR/MSI-H, first-line pembrolizumab (KEYNOTE-177) may achieve durable control and reshape — or obviate — the surgical plan.',
          },
          {
            id: 'c2-mol-c',
            label: 'Start FOLFOX + bevacizumab empirically while awaiting results',
            next: 'c2-result',
            verdict: 'suboptimal',
            feedback:
              'Starting empirical chemo-bevacizumab before MMR status risks giving the wrong first-line therapy and complicates a later switch to immunotherapy (bevacizumab washout, immune priming).',
          },
        ],
      },
      {
        id: 'c2-result',
        type: 'info',
        title: 'Molecular results',
        body:
          'Results return: **dMMR / MSI-High**, BRAF wild-type. This is the subgroup in which **pembrolizumab out-performed chemotherapy as first-line therapy** in KEYNOTE-177, roughly doubling progression-free survival.',
        vitals: [
          { label: 'MMR', value: 'dMMR' },
          { label: 'MSI', value: 'High' },
          { label: 'BRAF', value: 'WT' },
        ],
        next: 'c2-firstline',
      },
      {
        id: 'c2-result-forced',
        type: 'info',
        title: 'Intraoperative surprise',
        body:
          'She goes to theatre. Only afterwards does molecular testing return **dMMR / MSI-High** — a patient for whom first-line pembrolizumab was the evidence-based standard. She had major surgery before the most effective systemic therapy was even considered.',
        detail: 'The MDT now has to reconstruct a plan around a decision that was taken out of order.',
        next: 'c2-out-outoforder',
      },
      {
        id: 'c2-firstline',
        type: 'decision',
        title: 'First-line therapy',
        body: 'She is dMMR/MSI-H, BRAF-WT, with isolated peritoneal metastases. **What is the first-line systemic strategy?**',
        options: [
          {
            id: 'c2-fl-a',
            label: 'First-line pembrolizumab; reassess systemic and peritoneal response, then re-discuss local therapy at MDT',
            next: 'c2-response',
            verdict: 'optimal',
            feedback:
              'Correct. KEYNOTE-177 established anti-PD-1 monotherapy as first-line for dMMR/MSI-H mCRC. A subset achieve deep, durable responses that change the role and timing of surgery.',
          },
          {
            id: 'c2-fl-b',
            label: 'Pembrolizumab plus bevacizumab for extra anti-angiogenic effect',
            next: 'c2-response',
            verdict: 'suboptimal',
            feedback:
              'Adding bevacizumab is not supported here and complicates any subsequent surgery (wound healing, washout). KEYNOTE-177 used single-agent pembrolizumab.',
          },
          {
            id: 'c2-fl-c',
            label: 'Standard FOLFOX + bevacizumab, ignore MSI status',
            next: 'c2-out-wrongsystemic',
            verdict: 'harmful',
            feedback:
              'Ignoring MSI-H to give chemotherapy discards the single most important predictive result. In KEYNOTE-177 chemotherapy was inferior to pembrolizumab in this subgroup.',
          },
          {
            id: 'c2-fl-d',
            label: 'Upfront CRS+HIPEC, hold all systemic therapy',
            next: 'c2-out-outoforder',
            verdict: 'suboptimal',
            feedback:
              'Operating first forgoes the chance that immunotherapy achieves durable control and rationally sequences local therapy. Systemic biology should be tested first here.',
          },
        ],
      },
      {
        id: 'c2-response',
        type: 'info',
        title: 'Response assessment',
        body:
          'After several months of pembrolizumab she has an **excellent partial response** with markedly reduced peritoneal disease and normalised CEA. She remains fit. The MDT reconvenes to consider consolidative local therapy.',
        vitals: [
          { label: 'Response', value: 'Excellent PR' },
          { label: 'CEA', value: 'Normalised' },
          { label: 'ECOG', value: '0' },
        ],
        next: 'c2-local',
      },
      {
        id: 'c2-local',
        type: 'decision',
        title: 'Consolidation',
        body: 'She has a durable, deep response on immunotherapy. **What is the most defensible next step?**',
        options: [
          {
            id: 'c2-local-a',
            label: 'Continue immunotherapy and re-stage; discuss selective consolidative CRS at MDT if residual resectable disease persists',
            next: 'c2-out-good',
            verdict: 'optimal',
            feedback:
              'Balanced. Durable immunotherapy responses can be long-lasting; the role of surgery is individualised and decided by MDT once biology is known. Consolidative CRS may still benefit selected patients with limited residual disease.',
          },
          {
            id: 'c2-local-b',
            label: 'Stop all therapy — she is in response and needs nothing further',
            next: 'c2-out-undertreated',
            verdict: 'suboptimal',
            feedback:
              'Abruptly stopping without a surveillance and MDT plan risks under-treating residual disease. Response is not the same as cure; ongoing management is individualised.',
          },
          {
            id: 'c2-local-c',
            label: 'Immediately perform aggressive CRS+HIPEC regardless of response depth',
            next: 'c2-out-good',
            verdict: 'acceptable',
            feedback:
              'Consolidative surgery can be reasonable in selected responders, but the decision should weigh the durability of immunotherapy against surgical morbidity at MDT rather than being automatic.',
          },
        ],
      },
      {
        id: 'c2-out-good',
        type: 'outcome',
        title: 'Right therapy, right order',
        body: 'MMR-driven sequencing delivered the most effective therapy first.',
        verdict: 'optimal',
        outcomeSummary:
          'By testing MMR status first and applying KEYNOTE-177, she received the most effective first-line therapy for her biology, with local therapy individualised at MDT. This is the modern paradigm for dMMR/MSI-H peritoneal colorectal disease.',
        teachingPoints: [
          'Always test MMR/MSI before any treatment in mCRC — it changes first-line therapy.',
          'KEYNOTE-177: pembrolizumab beat chemotherapy as first-line in dMMR/MSI-H mCRC.',
          'Surgery is sequenced around systemic biology, not the reverse.',
          'Avoid bevacizumab when anti-PD-1 therapy and possible surgery are planned.',
        ],
        references: ['André T et al. NEJM 2020 (KEYNOTE-177)', 'ESMO mCRC Guidelines 2023'],
      },
      {
        id: 'c2-out-outoforder',
        type: 'outcome',
        title: 'Out of order',
        body: 'Surgery preceded recognition of the immunotherapy pathway.',
        verdict: 'suboptimal',
        outcomeSummary:
          'Major cytoreductive surgery was performed before the single most important predictive biomarker was known. The most effective first-line therapy for her biology was relegated to second-line by a decision taken out of sequence.',
        teachingPoints: [
          'MMR status must precede treatment sequencing in mCRC.',
          'Operating first can compromise later systemic options and timing.',
        ],
        references: ['André T et al. NEJM 2020 (KEYNOTE-177)'],
      },
      {
        id: 'c2-out-wrongsystemic',
        type: 'outcome',
        title: 'Wrong systemic therapy',
        body: 'MSI-H status was ignored.',
        verdict: 'harmful',
        outcomeSummary:
          'Giving chemotherapy while ignoring MSI-H status withholds the therapy shown to be superior in KEYNOTE-177 and exposes her to less effective, more toxic treatment.',
        teachingPoints: [
          'MSI-H is predictive, not merely prognostic — it dictates first-line choice.',
          'Chemotherapy was inferior to pembrolizumab in the dMMR/MSI-H subgroup.',
        ],
        references: ['André T et al. NEJM 2020 (KEYNOTE-177)'],
      },
      {
        id: 'c2-out-undertreated',
        type: 'outcome',
        title: 'Under-treated',
        body: 'Therapy stopped without a plan.',
        verdict: 'suboptimal',
        outcomeSummary:
          'Discontinuing all therapy on a response, without surveillance or MDT-defined consolidation, risks preventable progression of residual disease.',
        teachingPoints: [
          'Response is not cure; maintain surveillance and an individualised plan.',
          'Decisions about stopping immunotherapy belong at MDT.',
        ],
        references: ['ESMO mCRC Guidelines 2023'],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // CASE 3 — Ovarian stage III, post-NACT interval debulking + cisplatin HIPEC
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'ovarian-ovhipec1',
    title: 'Interval debulking and HIPEC in ovarian cancer',
    subtitle: 'Stage III, post-NACT — the OVHIPEC-1 decision',
    histology: 'Ovarian',
    difficulty: 2,
    icon: 'Ribbon',
    estMinutes: 8,
    summary:
      'A 66-year-old woman with FIGO stage III high-grade serous ovarian cancer has completed three cycles of neoadjuvant chemotherapy. You must decide on interval cytoreduction and whether OVHIPEC-1 supports cisplatin HIPEC.',
    learningObjectives: [
      'Identify the OVHIPEC-1 eligible population (stage III, interval surgery)',
      'Recognise complete/optimal debulking as the goal',
      'Apply cisplatin HIPEC in the correct setting',
      'Avoid extrapolating OVHIPEC-1 to primary debulking',
    ],
    guideline_ref: 'OVHIPEC-1 (van Driel, NEJM 2018)',
    startNodeId: 'c3-start',
    nodes: [
      {
        id: 'c3-start',
        type: 'scenario',
        title: 'Presentation',
        body:
          'A **66-year-old woman** with **FIGO stage III high-grade serous ovarian cancer** was deemed not optimally resectable at diagnosis and received **three cycles of neoadjuvant carboplatin–paclitaxel**. Restaging shows a good response and she is now planned for **interval cytoreduction**.',
        vitals: [
          { label: 'FIGO', value: 'Stage III' },
          { label: 'Histology', value: 'HGSOC' },
          { label: 'NACT', value: '3 cycles' },
          { label: 'Response', value: 'Good' },
        ],
        next: 'c3-goal',
      },
      {
        id: 'c3-goal',
        type: 'decision',
        title: 'Surgical goal',
        body: 'At interval surgery, **what is the primary objective?**',
        options: [
          {
            id: 'c3-goal-a',
            label: 'Complete cytoreduction (no visible residual disease)',
            next: 'c3-hipec',
            verdict: 'optimal',
            feedback:
              'Correct. Complete gross resection is the single strongest predictor of survival in advanced ovarian cancer. OVHIPEC-1 enrolled patients undergoing interval surgery with the aim of complete or optimal (≤1 cm) cytoreduction.',
          },
          {
            id: 'c3-goal-b',
            label: 'Optimal debulking to ≤1 cm residual, HIPEC then covers the rest',
            next: 'c3-hipec',
            verdict: 'acceptable',
            feedback:
              'Optimal (≤1 cm) resection was the trial threshold, but the aim is always the least residual disease possible; do not rely on HIPEC to substitute for surgical effort.',
          },
          {
            id: 'c3-goal-c',
            label: 'Maximal debulking accepting bulky residual, then more chemotherapy',
            next: 'c3-out-suboptimal',
            verdict: 'harmful',
            feedback:
              'Leaving bulky residual disease forfeits the survival benefit of cytoreduction. The oncological value of interval surgery depends on achieving complete/optimal resection.',
          },
        ],
      },
      {
        id: 'c3-hipec',
        type: 'decision',
        title: 'HIPEC decision',
        body:
          'You achieve **complete cytoreduction**. OVHIPEC-1 randomised interval-surgery patients to **cisplatin HIPEC vs no HIPEC** and showed improved recurrence-free and overall survival with HIPEC. **What do you do?**',
        options: [
          {
            id: 'c3-hipec-a',
            label: 'Administer cisplatin HIPEC (100 mg/m²) with nephroprotection (sodium thiosulfate)',
            next: 'c3-out-good',
            verdict: 'optimal',
            feedback:
              'This is exactly the OVHIPEC-1 intervention: cisplatin HIPEC at interval cytoreduction in stage III disease, with sodium thiosulfate to protect the kidneys, improved survival.',
          },
          {
            id: 'c3-hipec-b',
            label: 'Give oxaliplatin HIPEC instead',
            next: 'c3-out-wrongdrug',
            verdict: 'suboptimal',
            feedback:
              'OVHIPEC-1 used cisplatin, not oxaliplatin. Do not substitute the agent studied in the pivotal ovarian trial.',
          },
          {
            id: 'c3-hipec-c',
            label: 'Omit HIPEC — it has no role in ovarian cancer',
            next: 'c3-out-missedhipec',
            verdict: 'suboptimal',
            feedback:
              'In the specific OVHIPEC-1 setting (stage III, interval surgery, complete/optimal resection), cisplatin HIPEC did improve survival. Blanket rejection is not evidence-based here.',
          },
          {
            id: 'c3-hipec-d',
            label: 'Give cisplatin HIPEC without any nephroprotection',
            next: 'c3-out-nephrotox',
            verdict: 'harmful',
            feedback:
              'Intraperitoneal cisplatin carries real nephrotoxicity. OVHIPEC-1 mandated sodium thiosulfate; omitting it risks acute kidney injury.',
          },
        ],
      },
      {
        id: 'c3-out-good',
        type: 'outcome',
        title: 'OVHIPEC-1 pathway',
        body: 'Complete interval cytoreduction plus cisplatin HIPEC.',
        verdict: 'optimal',
        outcomeSummary:
          'She received the precise OVHIPEC-1 intervention: complete cytoreduction at interval surgery followed by cisplatin HIPEC with nephroprotection. In that trial this improved both recurrence-free and overall survival versus surgery alone.',
        teachingPoints: [
          'OVHIPEC-1 applies to stage III disease undergoing interval (not primary) cytoreduction.',
          'The HIPEC agent is cisplatin, delivered with sodium thiosulfate nephroprotection.',
          'Complete gross resection remains the dominant survival driver.',
        ],
        references: ['van Driel WJ et al. NEJM 2018 (OVHIPEC-1)'],
      },
      {
        id: 'c3-out-wrongdrug',
        type: 'outcome',
        title: 'Wrong agent',
        body: 'Cytoreduction complete, but oxaliplatin substituted for cisplatin.',
        verdict: 'suboptimal',
        outcomeSummary:
          'The cytoreduction was correct, but substituting oxaliplatin departs from the only regimen with level-1 ovarian evidence. The survival benefit demonstrated in OVHIPEC-1 was specific to cisplatin.',
        teachingPoints: ['Match the HIPEC agent to the trial that generated the evidence.'],
        references: ['van Driel WJ et al. NEJM 2018 (OVHIPEC-1)'],
      },
      {
        id: 'c3-out-missedhipec',
        type: 'outcome',
        title: 'Missed a proven benefit',
        body: 'Complete cytoreduction, but HIPEC withheld in an eligible patient.',
        verdict: 'suboptimal',
        outcomeSummary:
          'Surgery alone is a reasonable standard, but in this OVHIPEC-1-eligible patient, cisplatin HIPEC offered a demonstrated survival advantage that was declined without a specific contraindication.',
        teachingPoints: [
          'Know the trial-defined niche where ovarian HIPEC has level-1 support.',
          'Reserve blanket rejection for settings the trial did not study.',
        ],
        references: ['van Driel WJ et al. NEJM 2018 (OVHIPEC-1)'],
      },
      {
        id: 'c3-out-nephrotox',
        type: 'outcome',
        title: 'Preventable kidney injury',
        body: 'Cisplatin HIPEC given without nephroprotection.',
        verdict: 'harmful',
        outcomeSummary:
          'She develops acute kidney injury. Intraperitoneal cisplatin is nephrotoxic; OVHIPEC-1 mandated sodium thiosulfate precisely to mitigate this predictable harm.',
        teachingPoints: [
          'Sodium thiosulfate nephroprotection is integral to the cisplatin HIPEC protocol.',
          'Anticipate and prevent agent-specific toxicity.',
        ],
        references: ['van Driel WJ et al. NEJM 2018 (OVHIPEC-1)'],
      },
      {
        id: 'c3-out-suboptimal',
        type: 'outcome',
        title: 'Bulky residual disease',
        body: 'Interval surgery left macroscopic tumour.',
        verdict: 'harmful',
        outcomeSummary:
          'Accepting bulky residual disease forfeits the survival benefit of interval cytoreduction. Neither HIPEC nor further chemotherapy compensates for incomplete surgery.',
        teachingPoints: [
          'Complete/optimal resection is the prerequisite for the survival benefit.',
          'HIPEC is an adjunct to, not a substitute for, complete cytoreduction.',
        ],
        references: ['van Driel WJ et al. NEJM 2018 (OVHIPEC-1)'],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // CASE 4 — Gastric PM with signet-ring (know when to say no)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'gastric-signet-ring',
    title: 'Gastric peritoneal metastases with signet-ring cells',
    subtitle: 'When CRS+HIPEC is investigational — and when to say no',
    histology: 'Gastric',
    difficulty: 3,
    icon: 'AlertTriangle',
    estMinutes: 9,
    summary:
      'A 49-year-old with diffuse-type signet-ring gastric cancer and peritoneal spread. The task is to apply FLOT, recognise the poor biology, keep CRS+HIPEC investigational, and know when regional therapy is not appropriate.',
    learningObjectives: [
      'Give perioperative FLOT for resectable gastric adenocarcinoma',
      'Recognise signet-ring / diffuse biology as high-risk',
      'Treat gastric CRS+HIPEC as investigational (trial or expert centre)',
      'Know when to decline aggressive surgery',
    ],
    guideline_ref: 'FLOT4 (Al-Batran, Lancet 2019); PSOGI 2022; Chicago Consensus 2020',
    startNodeId: 'c4-start',
    nodes: [
      {
        id: 'c4-start',
        type: 'scenario',
        title: 'Presentation',
        body:
          'A **49-year-old** presents with a **diffuse-type gastric adenocarcinoma with signet-ring cells** (Lauren diffuse, poorly cohesive). Staging laparoscopy finds **positive peritoneal cytology and a few peritoneal implants** (low-volume, PCI ~4). No distant solid-organ metastases.',
        vitals: [
          { label: 'Histology', value: 'Signet-ring' },
          { label: 'Lauren', value: 'Diffuse' },
          { label: 'Cytology', value: 'Positive' },
          { label: 'PCI', value: '~4' },
        ],
        next: 'c4-firstline',
      },
      {
        id: 'c4-firstline',
        type: 'decision',
        title: 'Systemic therapy',
        body: 'She has metastatic (peritoneal) gastric cancer but is young and fit. **What is the initial systemic strategy?**',
        options: [
          {
            id: 'c4-fl-a',
            label: 'Perioperative / first-line FLOT-based chemotherapy and re-stage response',
            next: 'c4-restage',
            verdict: 'optimal',
            feedback:
              'FLOT is the standard triplet backbone for fit gastric adenocarcinoma patients. Systemic therapy first also serves as a biological test in a high-risk, diffuse/signet-ring tumour.',
          },
          {
            id: 'c4-fl-b',
            label: 'Straight to CRS+HIPEC because PCI is low',
            next: 'c4-out-premature',
            verdict: 'harmful',
            feedback:
              'Gastric CRS+HIPEC remains investigational. Operating upfront on positive-cytology, signet-ring disease without systemic therapy or a trial framework is not standard care.',
          },
          {
            id: 'c4-fl-c',
            label: 'Single-agent 5-FU because of the poor prognosis',
            next: 'c4-restage',
            verdict: 'suboptimal',
            feedback:
              'Under-treating a fit patient with a monotherapy denies her the more active FLOT regimen. Poor prognosis is a reason to use the best-tolerated effective therapy, not the weakest.',
          },
          {
            id: 'c4-fl-d',
            label: 'Best supportive care only',
            next: 'c4-out-undertreat',
            verdict: 'harmful',
            feedback:
              'A fit 49-year-old with low-volume peritoneal gastric disease is not a supportive-care-only patient. Active systemic therapy is indicated.',
          },
        ],
      },
      {
        id: 'c4-restage',
        type: 'info',
        title: 'Re-staging',
        body:
          'After systemic FLOT she has **stable-to-modest response** systemically, but repeat laparoscopy still shows **persistent peritoneal disease and positive cytology**. She and her family are asking about CRS+HIPEC "to remove everything".',
        detail: 'This is where expectation management and evidence literacy matter.',
        vitals: [
          { label: 'Systemic response', value: 'Modest' },
          { label: 'Peritoneal disease', value: 'Persistent' },
          { label: 'Cytology', value: 'Still positive' },
        ],
        next: 'c4-decision',
      },
      {
        id: 'c4-decision',
        type: 'decision',
        title: 'The CRS+HIPEC question',
        body: 'She asks for CRS+HIPEC. **What is the most appropriate, evidence-honest response?**',
        options: [
          {
            id: 'c4-dec-a',
            label: 'Explain gastric CRS+HIPEC is investigational; consider only within a clinical trial / expert centre in highly selected low-PCI responders after MDT',
            next: 'c4-out-honest',
            verdict: 'optimal',
            feedback:
              'Correct. For gastric PM, CRS+HIPEC is not established standard of care; benefit is uncertain and biology (signet-ring, persistent cytology) is adverse. A trial or expert-centre protocol, with careful selection, is the honest route.',
          },
          {
            id: 'c4-dec-b',
            label: 'Proceed with maximal CRS+HIPEC now to give her the best chance',
            next: 'c4-out-premature',
            verdict: 'harmful',
            feedback:
              'Persistent positive cytology and signet-ring histology predict early diffuse recurrence. Aggressive cytoreduction outside a trial exposes her to major morbidity with little evidence of benefit.',
          },
          {
            id: 'c4-dec-c',
            label: 'Offer palliative gastrectomy alone to "debulk"',
            next: 'c4-out-premature',
            verdict: 'suboptimal',
            feedback:
              'Non-curative gastrectomy for diffuse peritoneal disease does not reliably improve survival and carries real morbidity; reserve surgery for symptom control (bleeding, obstruction).',
          },
          {
            id: 'c4-dec-d',
            label: 'Continue systemic therapy / consider regional approaches (e.g. PIPAC) within trials; prioritise quality of life',
            next: 'c4-out-honest',
            verdict: 'acceptable',
            feedback:
              'Reasonable. Continued systemic therapy with trial-based regional options (such as PIPAC) and a quality-of-life focus fits the evidence for adverse-biology gastric PM.',
          },
        ],
      },
      {
        id: 'c4-out-honest',
        type: 'outcome',
        title: 'Evidence-honest counselling',
        body: 'Investigational status made explicit; selection and expectations aligned.',
        verdict: 'optimal',
        outcomeSummary:
          'She is counselled that gastric CRS+HIPEC is investigational and that her signet-ring, persistent-cytology biology is high-risk. Care continues with systemic therapy and trial-based options, avoiding non-beneficial major surgery while keeping quality of life central.',
        teachingPoints: [
          'Gastric CRS+HIPEC is investigational — offer it within trials or expert protocols, not as routine care.',
          'FLOT is the standard chemotherapy backbone in fit gastric adenocarcinoma.',
          'Signet-ring histology and persistent positive cytology predict diffuse recurrence.',
          'Knowing when to say no is a core surgical-oncology skill.',
        ],
        references: [
          'Al-Batran SE et al. Lancet 2019 (FLOT4)',
          'PSOGI Consensus 2022',
          'Chicago Consensus Working Group, Ann Surg Oncol 2020',
        ],
      },
      {
        id: 'c4-out-premature',
        type: 'outcome',
        title: 'Non-beneficial major surgery',
        body: 'Aggressive surgery offered against the biology.',
        verdict: 'harmful',
        outcomeSummary:
          'Major cytoreduction in signet-ring gastric PM with persistent positive cytology carries high morbidity and an early, diffuse recurrence pattern. Outside a trial this exposes the patient to harm without demonstrated benefit.',
        teachingPoints: [
          'Adverse biology overrides a low PCI number.',
          'Do not equate technical resectability with oncological benefit.',
        ],
        references: ['PSOGI Consensus 2022', 'Chicago Consensus 2020'],
      },
      {
        id: 'c4-out-undertreat',
        type: 'outcome',
        title: 'Under-treatment',
        body: 'A fit patient denied active therapy.',
        verdict: 'harmful',
        outcomeSummary:
          'A fit 49-year-old with low-volume peritoneal gastric disease has meaningful systemic treatment options. Defaulting to supportive care alone withholds effective therapy.',
        teachingPoints: ['Offer active systemic therapy to fit patients; reserve supportive-care-only for the truly unfit or refractory.'],
        references: ['Al-Batran SE et al. Lancet 2019 (FLOT4)'],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // CASE 5 — Pseudomyxoma peritonei (LAMN), high PCI
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'pmp-high-pci',
    title: 'Pseudomyxoma peritonei with high PCI',
    subtitle: 'LAMN, PCI 30 — why completeness still wins',
    histology: 'PMP / Appendiceal',
    difficulty: 2,
    icon: 'Droplets',
    estMinutes: 8,
    summary:
      'A 55-year-old with pseudomyxoma peritonei from a low-grade appendiceal mucinous neoplasm, PCI 30 with "jelly belly". The lesson: high PCI is not a barrier in PMP — completeness of cytoreduction is everything.',
    learningObjectives: [
      'Recognise PMP / LAMN biology as indolent and surgically curable',
      'Understand that high PCI alone does not contraindicate CRS in PMP',
      'Prioritise complete cytoreduction and HIPEC (mitomycin-C)',
      'Refer to a specialist peritoneal centre',
    ],
    guideline_ref: 'PSOGI Appendiceal Consensus; Chicago Consensus 2020',
    startNodeId: 'c5-start',
    nodes: [
      {
        id: 'c5-start',
        type: 'scenario',
        title: 'Presentation',
        body:
          'A **55-year-old woman** presents with progressive abdominal distension. Imaging shows extensive **mucinous ascites ("jelly belly")** with scalloping of the liver and spleen. Appendicectomy histology confirms a **low-grade appendiceal mucinous neoplasm (LAMN)** with acellular-to-low-grade mucin on the peritoneum. Estimated **PCI 30**.',
        vitals: [
          { label: 'Diagnosis', value: 'PMP (LAMN)' },
          { label: 'Grade', value: 'Low' },
          { label: 'PCI', value: '30' },
          { label: 'ECOG', value: '1' },
        ],
        next: 'c5-referral',
      },
      {
        id: 'c5-referral',
        type: 'decision',
        title: 'Initial management',
        body: 'She has high-volume low-grade PMP. **What is the correct first move?**',
        options: [
          {
            id: 'c5-ref-a',
            label: 'Refer to a specialist peritoneal surface malignancy centre for CRS + HIPEC assessment',
            next: 'c5-pci',
            verdict: 'optimal',
            feedback:
              'Correct. PMP from LAMN is the paradigm indication for CRS+HIPEC, and outcomes are strongly centre-dependent. Specialist referral is the standard of care.',
          },
          {
            id: 'c5-ref-b',
            label: 'Start palliative systemic chemotherapy — PCI 30 is too high',
            next: 'c5-out-palliative',
            verdict: 'harmful',
            feedback:
              'This is the classic error. Low-grade PMP is relatively chemoresistant, and a high PCI is not a contraindication because the disease is indolent and surgically curable. Chemotherapy alone is not the primary treatment.',
          },
          {
            id: 'c5-ref-c',
            label: 'Repeated paracentesis for symptom control indefinitely',
            next: 'c5-out-palliative',
            verdict: 'suboptimal',
            feedback:
              'Serial drainage manages symptoms but ignores a potentially curative operation. Mucin re-accumulates; the disease progresses locally.',
          },
        ],
      },
      {
        id: 'c5-pci',
        type: 'info',
        title: 'At the specialist centre',
        body:
          'The peritoneal unit confirms **low-grade PMP with a PCI of 30**. Although disease is widespread, it is **low-grade and largely surface-based**, with the small-bowel relatively spared — features that make a **complete cytoreduction achievable** with peritonectomy and visceral resections.',
        detail: 'In PMP, biology (grade) and completeness matter more than the raw PCI number.',
        vitals: [
          { label: 'PCI', value: '30' },
          { label: 'Grade', value: 'Low' },
          { label: 'Small bowel', value: 'Largely spared' },
        ],
        next: 'c5-goal',
      },
      {
        id: 'c5-goal',
        type: 'decision',
        title: 'Operative goal & HIPEC',
        body: 'You proceed to CRS. **What is the objective and adjunct?**',
        options: [
          {
            id: 'c5-goal-a',
            label: 'Complete cytoreduction (CC-0/CC-1) via peritonectomy + mitomycin-C HIPEC',
            next: 'c5-out-good',
            verdict: 'optimal',
            feedback:
              'This is the reference treatment for PMP: complete cytoreduction with mitomycin-C HIPEC yields excellent long-term survival, often exceeding 60–70% at 10 years for low-grade disease.',
          },
          {
            id: 'c5-goal-b',
            label: 'Debulk to CC-2, accept residual mucin, add HIPEC',
            next: 'c5-out-incomplete',
            verdict: 'suboptimal',
            feedback:
              'Incomplete cytoreduction markedly worsens PMP outcomes. Residual disease recurs; the goal must be CC-0/CC-1 whenever technically feasible.',
          },
          {
            id: 'c5-goal-c',
            label: 'Complete cytoreduction but omit HIPEC',
            next: 'c5-out-good',
            verdict: 'acceptable',
            feedback:
              'Complete cytoreduction is the dominant driver of outcome; HIPEC (typically mitomycin-C) is the standard adjunct in PMP and is generally recommended, but the completeness of resection matters most.',
          },
          {
            id: 'c5-goal-d',
            label: 'Simple omentectomy and washout only',
            next: 'c5-out-incomplete',
            verdict: 'harmful',
            feedback:
              'Inadequate surgery for widespread PMP. This neither controls disease nor delivers the peritonectomy required for cure.',
          },
        ],
      },
      {
        id: 'c5-out-good',
        type: 'outcome',
        title: 'Curative-intent cytoreduction',
        body: 'Complete cytoreduction of low-grade PMP.',
        verdict: 'optimal',
        outcomeSummary:
          'Despite a PCI of 30, complete cytoreduction with mitomycin-C HIPEC was achieved. Low-grade PMP treated this way at expert centres has excellent long-term survival — a striking example of biology and completeness trumping raw tumour volume.',
        teachingPoints: [
          'High PCI is not a contraindication in low-grade PMP — completeness is what matters.',
          'CRS + mitomycin-C HIPEC is the reference treatment for PMP of appendiceal origin.',
          'Low-grade PMP is relatively chemoresistant; surgery, not chemotherapy, is primary.',
          'Refer to a specialist peritoneal surface unit early.',
        ],
        references: ['PSOGI Appendiceal / PMP Consensus', 'Chicago Consensus Working Group, Ann Surg Oncol 2020'],
      },
      {
        id: 'c5-out-incomplete',
        type: 'outcome',
        title: 'Incomplete cytoreduction',
        body: 'Residual mucinous disease left in situ.',
        verdict: 'harmful',
        outcomeSummary:
          'Incomplete cytoreduction in PMP predicts recurrence and worse survival. In this curable disease, an inadequate operation squanders the best chance of long-term control.',
        teachingPoints: [
          'CC-0/CC-1 is the goal in PMP; CC-2/3 markedly worsens outcome.',
          'Peritonectomy and visceral resection — not simple debulking — are required.',
        ],
        references: ['PSOGI Appendiceal / PMP Consensus'],
      },
      {
        id: 'c5-out-palliative',
        type: 'outcome',
        title: 'Missed curative surgery',
        body: 'Curable PMP routed to palliation because of a high PCI number.',
        verdict: 'harmful',
        outcomeSummary:
          'Treating high-PCI low-grade PMP as palliative discards a curative operation. The indolent biology and surgical curability of PMP mean a high PCI should trigger specialist referral, not palliation.',
        teachingPoints: [
          'Do not conflate PMP with aggressive carcinomatosis.',
          'A high PCI in low-grade PMP is an indication for specialist CRS, not a contraindication.',
        ],
        references: ['PSOGI Appendiceal / PMP Consensus'],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // CASE 6 — Malignant peritoneal mesothelioma
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'peritoneal-mesothelioma',
    title: 'Malignant peritoneal mesothelioma',
    subtitle: 'IHC differential, BAP1, and the MARS2 trap',
    histology: 'Mesothelioma',
    difficulty: 3,
    icon: 'Microscope',
    estMinutes: 10,
    summary:
      'A 57-year-old with diffuse peritoneal thickening and ascites. The task is to nail the immunohistochemical differential (BAP1, calretinin), distinguish epithelioid from sarcomatoid, and treat with CRS + cisplatin/doxorubicin HIPEC — while avoiding the trap of extrapolating pleural MARS2 data.',
    learningObjectives: [
      'Build the IHC differential for peritoneal mesothelioma (calretinin, WT1, BAP1 loss)',
      'Distinguish epithelioid (favourable) from sarcomatoid (poor) subtype',
      'Apply CRS + cisplatin/doxorubicin HIPEC for epithelioid MPM',
      'Recognise that pleural MARS2 does NOT govern peritoneal disease',
    ],
    guideline_ref: 'Chicago Consensus 2020 (mesothelioma); PSOGI',
    startNodeId: 'c6-start',
    nodes: [
      {
        id: 'c6-start',
        type: 'scenario',
        title: 'Presentation',
        body:
          'A **57-year-old** presents with abdominal distension and pain. CT shows **diffuse peritoneal thickening, omental caking and ascites**, with no dominant visceral primary. There is a remote history of possible **asbestos exposure**. A biopsy is taken.',
        vitals: [
          { label: 'ECOG', value: '1' },
          { label: 'Ascites', value: 'Present' },
          { label: 'Asbestos hx', value: 'Possible' },
        ],
        next: 'c6-ihc',
      },
      {
        id: 'c6-ihc',
        type: 'decision',
        title: 'Confirming the diagnosis',
        body: 'The differential includes carcinomatosis vs mesothelioma. **Which work-up best establishes the diagnosis?**',
        options: [
          {
            id: 'c6-ihc-a',
            label: 'Immunohistochemistry: mesothelial markers (calretinin, WT1, CK5/6, D2-40) plus BAP1 loss, against carcinoma markers (CEA, Ber-EP4, PAX8, CDX2)',
            next: 'c6-subtype',
            verdict: 'optimal',
            feedback:
              'Correct. Peritoneal mesothelioma is diagnosed by an IHC panel: positive mesothelial markers with loss of BAP1 nuclear staining supports mesothelioma, while carcinoma markers help exclude adenocarcinoma and ovarian/GI primaries.',
          },
          {
            id: 'c6-ihc-b',
            label: 'Diagnose carcinomatosis of unknown primary and start empiric chemotherapy',
            next: 'c6-out-misdiagnosis',
            verdict: 'harmful',
            feedback:
              'Skipping the mesothelial IHC panel risks misclassifying an epithelioid mesothelioma — a disease with a very different, surgically curable trajectory — as generic carcinomatosis.',
          },
          {
            id: 'c6-ihc-c',
            label: 'H&E morphology alone is enough to call it mesothelioma',
            next: 'c6-subtype',
            verdict: 'suboptimal',
            feedback:
              'Morphology is suggestive but not sufficient. Mesothelioma is confirmed with IHC (and, where needed, BAP1 / CDKN2A/MTAP) to separate it from reactive mesothelium and carcinoma.',
          },
        ],
      },
      {
        id: 'c6-subtype',
        type: 'info',
        title: 'Histology returns',
        body:
          'IHC confirms **malignant peritoneal mesothelioma**: calretinin+, WT1+, **BAP1 nuclear loss**, negative for carcinoma markers. The subtype is **epithelioid** (not sarcomatoid or biphasic). Disease is diffuse but there is **no extra-abdominal spread**.',
        detail: 'Epithelioid subtype carries a substantially better prognosis and is the group that benefits most from CRS+HIPEC.',
        vitals: [
          { label: 'Diagnosis', value: 'Peritoneal MPM' },
          { label: 'Subtype', value: 'Epithelioid' },
          { label: 'BAP1', value: 'Lost' },
        ],
        next: 'c6-treat',
      },
      {
        id: 'c6-treat',
        type: 'decision',
        title: 'Treatment strategy',
        body: 'She has epithelioid peritoneal mesothelioma confined to the abdomen, and is fit. **What is the optimal treatment?**',
        options: [
          {
            id: 'c6-treat-a',
            label: 'Refer for CRS + cisplatin/doxorubicin HIPEC at a specialist centre',
            next: 'c6-out-good',
            verdict: 'optimal',
            feedback:
              'Correct. For epithelioid peritoneal mesothelioma, complete CRS with HIPEC (commonly cisplatin + doxorubicin) is the standard of care at expert centres and delivers the best long-term survival.',
          },
          {
            id: 'c6-treat-b',
            label: 'Withhold surgery — the pleural MARS2 trial showed no benefit from surgery in mesothelioma',
            next: 'c6-out-mars2trap',
            verdict: 'harmful',
            feedback:
              'This is the intended trap. MARS2 addressed extended pleurectomy/decortication in pleural mesothelioma — a different organ, different operation, different disease. It does NOT govern peritoneal CRS+HIPEC.',
          },
          {
            id: 'c6-treat-c',
            label: 'Systemic platinum–pemetrexed alone, no surgical referral',
            next: 'c6-out-systemiconly',
            verdict: 'suboptimal',
            feedback:
              'Systemic therapy has a role, but for resectable epithelioid peritoneal mesothelioma, denying surgical assessment forgoes the modality most associated with long-term survival.',
          },
          {
            id: 'c6-treat-d',
            label: 'Best supportive care — mesothelioma is uniformly fatal',
            next: 'c6-out-systemiconly',
            verdict: 'harmful',
            feedback:
              'Epithelioid peritoneal mesothelioma treated with complete CRS+HIPEC has median survivals measured in years. Nihilism here denies a genuinely effective treatment.',
          },
        ],
      },
      {
        id: 'c6-out-good',
        type: 'outcome',
        title: 'Correct diagnosis, correct treatment',
        body: 'Epithelioid MPM referred for CRS + cisplatin/doxorubicin HIPEC.',
        verdict: 'optimal',
        outcomeSummary:
          'The IHC panel established epithelioid peritoneal mesothelioma, and she was referred for complete CRS with cisplatin/doxorubicin HIPEC — the standard of care that offers the best long-term survival in this subtype.',
        teachingPoints: [
          'Diagnose peritoneal mesothelioma with an IHC panel (calretinin, WT1) plus BAP1 loss.',
          'Epithelioid subtype is favourable; sarcomatoid/biphasic carry a poor prognosis.',
          'CRS + cisplatin/doxorubicin HIPEC is standard for epithelioid peritoneal MPM.',
          'MARS2 concerns pleural surgery and does NOT apply to peritoneal CRS+HIPEC.',
        ],
        references: ['Chicago Consensus Working Group (mesothelioma), Ann Surg Oncol 2020', 'PSOGI mesothelioma guidance'],
      },
      {
        id: 'c6-out-mars2trap',
        type: 'outcome',
        title: 'The MARS2 trap',
        body: 'Pleural trial data misapplied to peritoneal disease.',
        verdict: 'harmful',
        outcomeSummary:
          'Surgery was withheld by extrapolating MARS2 — a pleural mesothelioma surgical trial — to peritoneal disease. These are different organs, operations and evidence bases; the patient was denied a potentially curative CRS+HIPEC.',
        teachingPoints: [
          'MARS2 addresses pleurectomy/decortication in pleural mesothelioma only.',
          'Peritoneal mesothelioma has its own evidence base supporting CRS+HIPEC.',
          'Do not transplant trial conclusions across anatomically distinct diseases.',
        ],
        references: ['Chicago Consensus Working Group (mesothelioma), Ann Surg Oncol 2020'],
      },
      {
        id: 'c6-out-systemiconly',
        type: 'outcome',
        title: 'Surgery not offered',
        body: 'Resectable epithelioid disease treated without surgical referral.',
        verdict: 'suboptimal',
        outcomeSummary:
          'Systemic therapy alone (or supportive care) in a fit patient with resectable epithelioid peritoneal mesothelioma forgoes the modality most linked to prolonged survival. Surgical assessment at an expert centre was warranted.',
        teachingPoints: [
          'Offer CRS+HIPEC assessment to fit patients with epithelioid peritoneal MPM.',
          'Reserve systemic-only strategies for unresectable or sarcomatoid disease.',
        ],
        references: ['Chicago Consensus Working Group (mesothelioma), Ann Surg Oncol 2020'],
      },
      {
        id: 'c6-out-misdiagnosis',
        type: 'outcome',
        title: 'Misdiagnosis',
        body: 'Mesothelioma missed as generic carcinomatosis.',
        verdict: 'harmful',
        outcomeSummary:
          'Without the mesothelial IHC panel, an epithelioid mesothelioma was managed as carcinomatosis of unknown primary. The correct diagnosis would have opened a surgically curable pathway.',
        teachingPoints: [
          'Always include mesothelial markers and BAP1 when peritoneal mesothelioma is possible.',
          'Diagnosis dictates a completely different treatment trajectory.',
        ],
        references: ['PSOGI mesothelioma guidance'],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // CASE 7 — High small-bowel PCI intraoperative finding (abort vs proceed)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'intraop-smallbowel-abort',
    title: 'The intraoperative small-bowel surprise',
    subtitle: 'High small-bowel PCI — abort or proceed?',
    histology: 'Colorectal PM',
    difficulty: 3,
    icon: 'Scissors',
    estMinutes: 8,
    summary:
      'You are in theatre for planned CRS+HIPEC when you find extensive small-bowel and mesenteric-root involvement that makes CC-0 impossible without short-bowel syndrome. This case drills the discipline of aborting.',
    learningObjectives: [
      'Recognise small-bowel / mesenteric-root involvement as a marker of unresectability',
      'Understand that CC-0 is the prerequisite for benefit',
      'Choose to abort rather than perform a futile, morbid cytoreduction',
      'Plan systemic / regional therapy after aborting',
    ],
    guideline_ref: 'Sugarbaker CC score; PSOGI 2022; PRODIGE 7',
    startNodeId: 'c7-start',
    nodes: [
      {
        id: 'c7-start',
        type: 'scenario',
        title: 'In theatre',
        body:
          'A **60-year-old** with colorectal peritoneal metastases is on the table for planned CRS+HIPEC. Pre-operative CT and laparoscopy suggested a **moderate PCI (~14)**. On opening, you find **diffuse small-bowel serosal implants and disease encasing the root of the mesentery**, with confluent involvement of the proximal jejunum.',
        detail: 'Clearing all of it would require resecting most of the small bowel.',
        vitals: [
          { label: 'Pre-op PCI', value: '~14' },
          { label: 'Small-bowel', value: 'Diffuse' },
          { label: 'Mesenteric root', value: 'Encased' },
        ],
        next: 'c7-assess',
      },
      {
        id: 'c7-assess',
        type: 'decision',
        title: 'Intraoperative assessment',
        body: 'You must judge resectability. **How do you frame the decision?**',
        options: [
          {
            id: 'c7-assess-a',
            label: 'Ask: can I achieve CC-0/CC-1 while preserving adequate small-bowel length?',
            next: 'c7-decide',
            verdict: 'optimal',
            feedback:
              'Exactly the right question. The therapeutic benefit of CRS depends on a complete cytoreduction; if that requires sacrificing so much bowel that short-bowel syndrome results, the operation is not appropriate.',
          },
          {
            id: 'c7-assess-b',
            label: 'Assume that because I have started, I should press on and resect whatever it takes',
            next: 'c7-decide',
            verdict: 'suboptimal',
            feedback:
              'Sunk-cost reasoning is dangerous. The intraoperative finding — not the fact that you have already opened — must drive the decision.',
          },
          {
            id: 'c7-assess-c',
            label: 'Ignore small-bowel burden; overall PCI 14 is within threshold so continue',
            next: 'c7-out-shortbowel',
            verdict: 'harmful',
            feedback:
              'Total PCI hides the pattern. Extensive small-bowel and mesenteric-root disease is a specific, well-recognised marker of unresectability regardless of the aggregate number.',
          },
        ],
      },
      {
        id: 'c7-decide',
        type: 'decision',
        title: 'The decision',
        body: 'You conclude CC-0 is not achievable without leaving the patient with short-bowel syndrome. **What do you do?**',
        options: [
          {
            id: 'c7-decide-a',
            label: 'Abort the cytoreduction; take biopsies, close, and plan systemic ± regional therapy',
            next: 'c7-out-good',
            verdict: 'optimal',
            feedback:
              'The correct, disciplined choice. An incomplete cytoreduction offers no survival benefit over systemic therapy while inflicting major morbidity. Aborting is a positive decision that protects the patient.',
          },
          {
            id: 'c7-decide-b',
            label: 'Perform an extensive small-bowel resection to force a CC-0 at any cost',
            next: 'c7-out-shortbowel',
            verdict: 'harmful',
            feedback:
              'Rendering the patient dependent on parenteral nutrition for a disease that will likely recur is disproportionate harm. Preserve bowel; do not chase CC-0 into short-bowel syndrome.',
          },
          {
            id: 'c7-decide-c',
            label: 'Do a partial (CC-2) debulking and give HIPEC anyway',
            next: 'c7-out-cc2',
            verdict: 'harmful',
            feedback:
              'CC-2 cytoreduction plus HIPEC provides no survival benefit — HIPEC penetrates only millimetres and cannot address macroscopic residual disease. This adds morbidity without benefit.',
          },
          {
            id: 'c7-decide-d',
            label: 'Abort cytoreduction but create a palliative bypass if there is impending obstruction',
            next: 'c7-out-good',
            verdict: 'acceptable',
            feedback:
              'Reasonable. Aborting the cytoreduction is correct; a targeted palliative procedure for a specific symptom (e.g. impending obstruction) can be appropriate and is a separate judgement.',
          },
        ],
      },
      {
        id: 'c7-out-good',
        type: 'outcome',
        title: 'The discipline to stop',
        body: 'Cytoreduction aborted; patient protected from futile morbidity.',
        verdict: 'optimal',
        outcomeSummary:
          'Recognising unresectable small-bowel and mesenteric-root disease, you aborted rather than pursuing a futile, morbid cytoreduction. The patient recovers quickly and moves to systemic ± regional therapy. Knowing when to stop is a hallmark of a mature peritoneal surgeon.',
        teachingPoints: [
          'Extensive small-bowel and mesenteric-root involvement is a key marker of unresectability.',
          'CC-0/CC-1 is the prerequisite for survival benefit; if unachievable, abort.',
          'Aborting is an active, protective decision — not a failure.',
          'Total PCI can mask an unfavourable disease distribution.',
        ],
        references: ['Sugarbaker PH. CC score', 'PSOGI Consensus 2022', 'Quénet F et al. Lancet Oncol 2021'],
      },
      {
        id: 'c7-out-shortbowel',
        type: 'outcome',
        title: 'Short-bowel syndrome',
        body: 'CC-0 forced at the cost of the small bowel.',
        verdict: 'harmful',
        outcomeSummary:
          'An extreme small-bowel resection achieved a technical CC-0 but left the patient with short-bowel syndrome and lifelong parenteral nutrition, for a disease likely to recur. The harm outweighs any oncological gain.',
        teachingPoints: [
          'Preserve adequate bowel length; do not chase CC-0 into intestinal failure.',
          'Resectability is defined by what can be safely achieved, not by ambition.',
        ],
        references: ['PSOGI Consensus 2022'],
      },
      {
        id: 'c7-out-cc2',
        type: 'outcome',
        title: 'Futile debulking',
        body: 'CC-2 residual disease plus HIPEC.',
        verdict: 'harmful',
        outcomeSummary:
          'A CC-2 debulking with HIPEC delivers no survival advantage over systemic therapy while adding operative morbidity. HIPEC cannot treat macroscopic residual disease.',
        teachingPoints: [
          'HIPEC penetrates only 1–3 mm — it is meaningless against gross residual tumour.',
          'If CC-0/CC-1 is impossible, abort rather than debulk-and-perfuse.',
        ],
        references: ['Quénet F et al. Lancet Oncol 2021 (PRODIGE 7)'],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // CASE 8 — Recurrent peritoneal disease / PIPAC candidate
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'recurrent-pipac',
    title: 'Recurrent peritoneal disease and PIPAC',
    subtitle: 'Palliative regional therapy for unresectable carcinomatosis',
    histology: 'Recurrent / palliative',
    difficulty: 2,
    icon: 'Wind',
    estMinutes: 8,
    summary:
      'A 64-year-old with unresectable, symptomatic recurrent peritoneal carcinomatosis and refractory ascites. This case works through candidacy for PIPAC (pressurised intraperitoneal aerosol chemotherapy) as palliative regional therapy — and its limits.',
    learningObjectives: [
      'Distinguish curative CRS+HIPEC candidates from palliative regional-therapy candidates',
      'Understand the rationale and goals of PIPAC',
      'Set realistic (palliative, not curative) expectations for PIPAC',
      'Integrate PIPAC with systemic therapy and best supportive care',
    ],
    guideline_ref: 'PSOGI PIPAC guidance; Chicago Consensus 2020',
    startNodeId: 'c8-start',
    nodes: [
      {
        id: 'c8-start',
        type: 'scenario',
        title: 'Presentation',
        body:
          'A **64-year-old woman** with previously treated colorectal cancer develops **diffuse recurrent peritoneal carcinomatosis** with **refractory ascites** and early satiety. Imaging and prior laparoscopy show **high-volume, unresectable disease** (extensive small-bowel involvement). ECOG 1. She has already had several lines of systemic therapy.',
        vitals: [
          { label: 'Disease', value: 'Recurrent PM' },
          { label: 'Resectable', value: 'No' },
          { label: 'Ascites', value: 'Refractory' },
          { label: 'ECOG', value: '1' },
        ],
        next: 'c8-triage',
      },
      {
        id: 'c8-triage',
        type: 'decision',
        title: 'Curative vs palliative intent',
        body: 'She is symptomatic with unresectable recurrence. **What is the appropriate treatment intent?**',
        options: [
          {
            id: 'c8-triage-a',
            label: 'Palliative: control symptoms and disease burden; consider regional therapy such as PIPAC alongside systemic options',
            next: 'c8-pipac',
            verdict: 'optimal',
            feedback:
              'Correct. Unresectable, high-volume recurrent carcinomatosis is not a CRS+HIPEC scenario. The goal shifts to palliation — symptom control and disease-burden reduction — where PIPAC has an emerging role.',
          },
          {
            id: 'c8-triage-b',
            label: 'Attempt salvage CRS+HIPEC to remove all disease',
            next: 'c8-out-inappropriate',
            verdict: 'harmful',
            feedback:
              'Unresectable disease with extensive small-bowel involvement cannot be cytoreduced to CC-0. Salvage CRS+HIPEC here is high-morbidity and non-therapeutic.',
          },
          {
            id: 'c8-triage-c',
            label: 'Stop all oncological treatment immediately',
            next: 'c8-out-supportive',
            verdict: 'suboptimal',
            feedback:
              'Premature. She has symptomatic but treatable disease burden; palliative regional and systemic options may improve symptoms and quality of life before a purely supportive approach.',
          },
        ],
      },
      {
        id: 'c8-pipac',
        type: 'info',
        title: 'What PIPAC offers',
        body:
          '**PIPAC (Pressurised IntraPeritoneal Aerosol Chemotherapy)** delivers low-dose chemotherapy as an aerosol under pressure during laparoscopy, improving intraperitoneal drug distribution and penetration. It is **repeatable**, generally well tolerated, and can control ascites and peritoneal disease as a **palliative** measure — not a curative one.',
        detail: 'PIPAC is typically delivered in repeated cycles and often combined with systemic therapy in selected patients.',
        vitals: [
          { label: 'Intent', value: 'Palliative' },
          { label: 'Delivery', value: 'Laparoscopic aerosol' },
          { label: 'Repeatable', value: 'Yes' },
        ],
        next: 'c8-counsel',
      },
      {
        id: 'c8-counsel',
        type: 'decision',
        title: 'Counselling & plan',
        body: 'You offer PIPAC. **How do you frame it and integrate care?**',
        options: [
          {
            id: 'c8-counsel-a',
            label: 'Explain PIPAC is palliative — aimed at symptom/ascites control and disease stabilisation — delivered in repeated cycles, often with systemic therapy, at an expert centre',
            next: 'c8-out-good',
            verdict: 'optimal',
            feedback:
              'Correct. Honest, palliative framing with realistic goals (symptom control, quality of life), repeated cycles, multidisciplinary integration and expert-centre delivery is best practice for PIPAC.',
          },
          {
            id: 'c8-counsel-b',
            label: 'Promise PIPAC will cure the carcinomatosis',
            next: 'c8-out-falsehope',
            verdict: 'harmful',
            feedback:
              'PIPAC is not curative. Overselling it breaches informed consent and sets up avoidable disappointment. Its value is palliative disease and symptom control.',
          },
          {
            id: 'c8-counsel-c',
            label: 'Give a single PIPAC session and expect a durable response',
            next: 'c8-out-falsehope',
            verdict: 'suboptimal',
            feedback:
              'PIPAC is designed as a repeated, cyclical therapy; a single session is not how benefit is typically obtained. Plan a course with response assessment.',
          },
          {
            id: 'c8-counsel-d',
            label: 'Offer PIPAC within a clinical trial / registry alongside best supportive care',
            next: 'c8-out-good',
            verdict: 'acceptable',
            feedback:
              'Very reasonable. Much PIPAC practice is delivered within trials/registries, which is appropriate given the evolving evidence base, and it should sit alongside good supportive care.',
          },
        ],
      },
      {
        id: 'c8-out-good',
        type: 'outcome',
        title: 'Appropriate palliative regional therapy',
        body: 'PIPAC offered with honest, palliative intent.',
        verdict: 'optimal',
        outcomeSummary:
          'She is offered repeated PIPAC with realistic palliative goals — ascites and symptom control, disease stabilisation — integrated with systemic therapy and supportive care at an expert centre. This matches the current role of regional therapy in unresectable recurrent carcinomatosis.',
        teachingPoints: [
          'Unresectable, high-volume recurrence is a palliative, not curative, scenario.',
          'PIPAC is a repeatable, palliative regional therapy — it controls symptoms, it does not cure.',
          'Integrate PIPAC with systemic therapy and best supportive care, ideally within trials/registries.',
          'Set explicit, honest expectations about intent.',
        ],
        references: ['PSOGI PIPAC guidance', 'Chicago Consensus Working Group, Ann Surg Oncol 2020'],
      },
      {
        id: 'c8-out-inappropriate',
        type: 'outcome',
        title: 'Salvage surgery misapplied',
        body: 'CRS+HIPEC attempted on unresectable recurrence.',
        verdict: 'harmful',
        outcomeSummary:
          'Attempting salvage CRS+HIPEC on unresectable, extensive small-bowel recurrence delivers major morbidity without the possibility of a complete cytoreduction, and therefore without survival benefit.',
        teachingPoints: [
          'Resectability, not intent, defines whether CRS+HIPEC is possible.',
          'For unresectable recurrence, pivot to palliative regional/systemic care.',
        ],
        references: ['PSOGI Consensus 2022'],
      },
      {
        id: 'c8-out-falsehope',
        type: 'outcome',
        title: 'Expectations misaligned',
        body: 'PIPAC framed or delivered incorrectly.',
        verdict: 'harmful',
        outcomeSummary:
          'Presenting PIPAC as curative — or as a one-off fix — misinforms the patient and undermines consent. PIPAC benefit, where it exists, comes from repeated, palliative cycles with clear goals.',
        teachingPoints: [
          'PIPAC is palliative and cyclical; frame it honestly.',
          'Informed consent requires accurate goals and expected outcomes.',
        ],
        references: ['PSOGI PIPAC guidance'],
      },
      {
        id: 'c8-out-supportive',
        type: 'outcome',
        title: 'Premature withdrawal of therapy',
        body: 'All treatment stopped despite treatable symptoms.',
        verdict: 'suboptimal',
        outcomeSummary:
          'Stopping all oncological treatment for a symptomatic patient with treatable disease burden may forgo palliative interventions (regional or systemic) that could meaningfully improve her quality of life.',
        teachingPoints: [
          'Best supportive care and active palliative therapy are not mutually exclusive.',
          'Reserve treatment cessation for refractory disease or when it aligns with patient goals.',
        ],
        references: ['Chicago Consensus Working Group, Ann Surg Oncol 2020'],
      },
    ],
  },
]
