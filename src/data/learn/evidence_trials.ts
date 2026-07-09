import type { LearnChapter } from '../../types/learn'

// ─────────────────────────────────────────────────────────────────────────────
// TRACK: EVIDENCE & TRIALS — Chapters 27–30
// Teaching how to READ, CRITIQUE, and APPLY the evidence base of peritoneal
// surface oncology — not merely to list the trials.
// Trial data cross-referenced with src/data/landmark_trials.ts.
// Sources: primary RCT publications · PSOGI · Chicago Consensus 2020 ·
//          NCCN 2024–2025 · ESMO 2023–2024 · JPGA · GRADE Working Group.
// ─────────────────────────────────────────────────────────────────────────────

export const EVIDENCE_CHAPTERS: LearnChapter[] = [
  // ── CHAPTER 27 ──────────────────────────────────────────────────────────────
  {
    id: 'ch27-trials-colorectal',
    number: '27',
    title: 'Landmark Trials Dissected — Colorectal & Prophylaxis',
    subtitle:
      'Verwaal, PRODIGE 7, COLOPEC, PROPHYLOCHIP, CYTO-CHIP, CAIRO6 — reading the design, not just the abstract',
    icon: 'FlaskConical',
    reading_time_min: 32,
    level: 'Advanced',
    track: 'Evidence & Trials',
    guidelines_version:
      'Primary RCT publications 2003–2022 · PSOGI · ESMO 2023 · NCCN Colon 2024',
    learning_objectives: [
      'Reconstruct the Verwaal RCT and explain why it made peritoneal metastasis a curable diagnosis',
      'Dissect PRODIGE 7: separate the CRS effect from the HIPEC effect and critique the oxaliplatin 30-minute regimen',
      'Distinguish intention-to-treat from per-protocol analysis and predict how each biases a surgical trial',
      'Explain why COLOPEC and PROPHYLOCHIP were negative and reconcile them with the positive CYTO-CHIP signal',
      'Position CAIRO6 (neoadjuvant systemic therapy) within the colorectal CRS+HIPEC pathway',
      'Extract the single transferable lesson from each trial for the bedside',
    ],
    key_references: [
      'Verwaal VJ, et al. J Clin Oncol 2003;21(20):3737–3743.',
      'Quenet F, Elias D, Roca L, et al. Lancet Oncol 2021;22(2):256–266 (PRODIGE 7).',
      'Klaver CEL, et al. Lancet Gastroenterol Hepatol 2019;4(10):761–770 (COLOPEC).',
      'Goéré D, et al. Lancet Oncol 2020;21(9):1147–1154 (PROPHYLOCHIP-PRODIGE 15).',
      'Bhatt A, et al. / CYTO-CHIP propensity analysis, Ann Surg Oncol / J Clin Oncol 2019–2022.',
      'Rovers KP, et al. BMC Cancer 2019;19:390 (CAIRO6 protocol).',
    ],
    sections: [
      {
        id: 'ch27-s1',
        title: 'How to Read a Surgical Trial Before You Trust It',
        blocks: [
          {
            type: 'text',
            content:
              'Before dissecting any individual trial, fix the four questions that separate a practice-changing result from a headline. **First — what exactly was randomised?** In CRS+HIPEC the intervention is a bundle (patient selection, complete cytoreduction, a heated drug, a perfusion technique). If both arms receive surgery, the trial isolates the *drug*, not the *operation*. **Second — what was the primary endpoint, and is it a surrogate?** Overall survival is king; disease-free survival, peritoneal recurrence rate, and PFS are surrogates that may or may not track OS. **Third — was the analysis intention-to-treat or per-protocol?** and **Fourth — who got in?** Selection defines the ceiling of any surgical series.',
          },
          {
            type: 'key',
            title: 'The bundle problem',
            content:
              'The central interpretive trap of the CRS+HIPEC literature is attributing the survival of the *whole bundle* to HIPEC. Verwaal randomised surgery-plus-HIPEC against no surgery, so its benefit is the **combined** effect. PRODIGE 7 randomised HIPEC on top of surgery in **both** arms, so its (null) result isolates **HIPEC alone**. These two trials are not contradictory — they answer different questions. Confusing them is the most common error trainees make.',
          },
          {
            type: 'pitfall',
            title: 'Reading only the abstract conclusion',
            content:
              'Abstract conclusions are written by authors with a thesis. PRODIGE 7’s abstract emphasises "no OS difference"; the same dataset shows both arms achieved a **median OS of ~41 months** — historically extraordinary for colorectal peritoneal metastases and driven by the quality of cytoreduction. The abstract tells you HIPEC failed; the dataset tells you complete CRS succeeded. Always read the results table, the CONSORT flow diagram, and the per-protocol footnotes before you quote a trial.',
          },
        ],
      },
      {
        id: 'ch27-s2',
        title: 'Verwaal 2003 / 2008 — The Trial That Made Cure Thinkable',
        blocks: [
          {
            type: 'text',
            content:
              'The Netherlands Cancer Institute trial (Verwaal, JCO 2003) randomised **105 patients** with colorectal peritoneal carcinomatosis to CRS + mitomycin-C HIPEC + adjuvant systemic 5-FU/LV versus systemic 5-FU/LV ± palliative surgery. Median OS was **22.4 vs 12.6 months** (HR 0.55, p=0.032). The 8-year follow-up (Verwaal, Ann Surg Oncol 2008) confirmed durability: median OS 22.2 vs 12.6 months, and among patients achieving a **complete (R1/CC-0) cytoreduction, 5-year OS reached 45% and 8-year OS ~20%** — versus essentially zero long-term survivors in the control arm.',
          },
          {
            type: 'trial',
            title: 'Verwaal RCT — the founding evidence',
            content:
              'CRS+HIPEC vs systemic chemotherapy + palliative surgery in 105 patients with colorectal PM: median OS **22.4 vs 12.6 months** (HR 0.55, p=0.032). Complete cytoreduction yielded 5-year OS **45% vs 0%**. This is the trial that converted "peritoneal metastasis = incurable" into "peritoneal metastasis = potentially curable in selected patients."',
            ref: 'Verwaal VJ, et al. J Clin Oncol 2003;21(20):3737–3743; 8-yr follow-up Ann Surg Oncol 2008;15(8):2426–2432.',
          },
          {
            type: 'text',
            content:
              'How to read its **weaknesses** without discarding its message. The control arm received **5-FU/LV monotherapy** — the standard of 1998–2001 — which is markedly inferior to modern FOLFOX/FOLFIRI + biologics. The absolute survival gap Verwaal reported would be narrower against a contemporary systemic comparator. The trial was also **single-centre and modest in size**, and completeness of cytoreduction (not HIPEC per se) already emerged as the dominant prognostic variable. The correct modern reading: Verwaal proved the *value of complete cytoreduction with intraperitoneal chemotherapy as a strategy*, and later trials (PRODIGE 7) tested whether the HIPEC component itself was necessary.',
          },
          {
            type: 'pearl',
            title: 'Why the control arm matters',
            content:
              'When a landmark trial is old, judge its magnitude of effect against the era’s standard of care, then mentally discount it for progress in the comparator arm. A 10-month OS advantage over 5-FU/LV is not a 10-month advantage over FOLFOXIRI-bevacizumab. The *direction* of Verwaal’s benefit is robust; the *size* is inflated by a weak control.',
          },
        ],
      },
      {
        id: 'ch27-s3',
        title: 'PRODIGE 7 — A Masterclass in Design Critique',
        blocks: [
          {
            type: 'text',
            content:
              'PRODIGE 7 (Quenet, Lancet Oncol 2021) is the most misquoted trial in the field. **265 patients** with colorectal PM and a PCI ≤25 who had achieved **complete macroscopic cytoreduction (CC-0/1)** were randomised to **oxaliplatin HIPEC (460 mg/m², 43 °C, 30 minutes) versus no HIPEC**. Both arms received modern systemic chemotherapy. Result: **median OS 41.7 vs 41.2 months (HR 1.00, 95% CI 0.63–1.58)** — no difference. Grade 3–4 morbidity at 60 days was **higher** in the HIPEC arm (24.1% vs 13.6%).',
          },
          {
            type: 'trial',
            title: 'PRODIGE 7 — isolating the HIPEC effect',
            content:
              'In patients who all received complete CRS + modern systemic therapy, adding 30-minute oxaliplatin HIPEC did **not** improve OS (41.7 vs 41.2 months; HR 1.00) and increased late morbidity. Both arms’ ~41-month median OS is the real headline: complete cytoreduction, not the drug bath, drives the outcome.',
            ref: 'Quenet F, Elias D, Roca L, et al. Lancet Oncol 2021;22(2):256–266.',
          },
          {
            type: 'text',
            content:
              'Now the design critique — the part that decides whether PRODIGE 7 "killed HIPEC" or merely killed *this* HIPEC. **(1) The oxaliplatin regimen.** 30 minutes is a short, high-dose exposure; mitomycin-C HIPEC (the drug used in Verwaal and most positive series) runs 60–90 minutes with different pharmacokinetics. PRODIGE 7 tested oxaliplatin, not the concept of HIPEC. **(2) Perioperative 5-FU bolus.** Patients received a systemic 5-FU/LV bolus immediately before oxaliplatin perfusion; the reported unexpectedly high anastomotic and haematological toxicity may have blunted any oxaliplatin signal and confounded morbidity. **(3) Statistical power.** The trial was powered to detect a large OS difference (from 30 to 48 months); it could not exclude a clinically meaningful *small* benefit. **(4) An unplanned subgroup** (PCI 11–15) suggested possible HIPEC benefit — hypothesis-generating only, never to be quoted as proof.',
          },
          {
            type: 'list',
            title: 'The four design levers to interrogate in PRODIGE 7',
            items: [
              'Drug & schedule: oxaliplatin 30 min ≠ mitomycin-C 90 min — the result is drug-specific, not HIPEC-generic',
              'Concomitant systemic 5-FU bolus: a plausible driver of excess morbidity and a confounder of the toxicity comparison',
              'Power: designed for a large effect; a modest OS gain (e.g. 3–4 months) was undetectable, not excluded',
              'Subgroups: the PCI 11–15 signal is exploratory — a hypothesis for a future trial, not a licence to give HIPEC',
            ],
          },
          {
            type: 'pitfall',
            title: '"PRODIGE 7 proved HIPEC is useless"',
            content:
              'It proved no such thing. PRODIGE 7 showed that **30-minute oxaliplatin HIPEC adds nothing to complete CRS plus modern chemotherapy in colorectal PM**. It says nothing about mitomycin-C, nothing about longer perfusions, nothing about other histologies (ovarian OVHIPEC-1 remains positive), and nothing against CRS itself. Over-generalising a single negative drug regimen to an entire therapeutic modality is the textbook fallacy of the field.',
          },
          {
            type: 'text',
            content:
              'The **intention-to-treat vs per-protocol** lens sharpens the reading further. PRODIGE 7’s primary analysis was ITT, preserving randomisation and giving the conservative (null) answer. Surgical trials are especially vulnerable to per-protocol distortion: patients found unresectable at laparotomy, or who cross over, are precisely the sickest. Reporting only those who completed the full protocol inflates apparent benefit. Verwaal’s complete-cytoreduction subgroup (5-year OS 45%) is a **per-protocol** figure — real and useful for counselling, but not a randomised comparison.',
          },
        ],
      },
      {
        id: 'ch27-s4',
        title: 'Prophylaxis — COLOPEC, PROPHYLOCHIP, and the CYTO-CHIP Discordance',
        blocks: [
          {
            type: 'text',
            content:
              'Three trials asked whether HIPEC can *prevent* peritoneal metastasis in high-risk colorectal cancer (T4 or perforated primaries). **COLOPEC** (Klaver, Lancet Gastroenterol Hepatol 2019) randomised 204 patients to adjuvant oxaliplatin HIPEC (at surgery or within 10 weeks) versus standard adjuvant chemotherapy: **peritoneal-metastasis-free survival at 18 months 80.9% vs 76.2% — no difference**. **PROPHYLOCHIP** (Goéré, Lancet Oncol 2020) tested systematic *second-look surgery + HIPEC* against surveillance in 150 high-risk patients: **3-year DFS 44% vs 53% — no benefit**, and a third of the surveillance arm never needed reoperation.',
          },
          {
            type: 'trial',
            title: 'COLOPEC & PROPHYLOCHIP — prophylaxis fails',
            content:
              'Two French/Dutch RCTs found that prophylactic/second-look oxaliplatin HIPEC in high-risk (T4 or perforated) colorectal cancer did **not** reduce peritoneal recurrence or improve DFS. Together they argue against routine prophylactic HIPEC and redirected the field toward treating **established** disease rather than pre-empting it.',
            ref: 'Klaver CEL, et al. Lancet Gastroenterol Hepatol 2019;4(10):761–770; Goéré D, et al. Lancet Oncol 2020;21(9):1147–1154.',
          },
          {
            type: 'text',
            content:
              'Against this, the retrospective/propensity-matched **CYTO-CHIP** analysis reported a disease-free survival advantage for prophylactic HIPEC in T4/perforated CRC (3-year DFS ~54% vs ~44%, HR ~0.62). How do you reconcile a positive signal with two negative RCTs? By **level of evidence and drug**. CYTO-CHIP is non-randomised — vulnerable to selection bias (fitter patients get HIPEC) — whereas COLOPEC and PROPHYLOCHIP are randomised. Where an RCT and a propensity study disagree, the RCT wins on internal validity. A secondary hypothesis is the **oxaliplatin regimen** again: if the drug/schedule is ineffective (per PRODIGE 7 logic), no prophylactic trial using it could succeed. The open question is whether a *different* agent or *mitomycin-C* prophylaxis might yet show benefit — currently unproven.',
          },
          {
            type: 'pearl',
            title: 'Hierarchy resolves discordance',
            content:
              'When a randomised trial and an observational study point opposite ways, default to the randomised result and ask *why* the observational study is optimistic — almost always residual confounding by indication (the healthier, lower-burden patients were selected for the intervention). CYTO-CHIP is best read as hypothesis-generating support for a future RCT, not as a rebuttal of COLOPEC/PROPHYLOCHIP.',
          },
          {
            type: 'text',
            content:
              '**CAIRO6** (Rovers, BMC Cancer 2019 protocol; results maturing) addresses a different lever: **perioperative systemic therapy**. It randomises resectable colorectal PM to neoadjuvant + adjuvant systemic chemotherapy (± targeted agent) around CRS+HIPEC versus upfront CRS+HIPEC. Its value is not another HIPEC question but a **sequencing** question — does treating micrometastatic and systemic disease before surgery improve outcomes and select out rapid progressors who would not benefit from a major operation? The phase 2 feasibility signal was encouraging; the phase 3 OS readout will refine timing of surgery in the pathway.',
          },
        ],
      },
      {
        id: 'ch27-s5',
        title: 'Colorectal & Prophylaxis Trials at a Glance',
        blocks: [
          {
            type: 'table',
            title: 'Comparison — colorectal and prophylaxis trials',
            headers: ['Trial (year)', 'n', 'Arms', 'Primary endpoint', 'Result', 'Key caveat'],
            rows: [
              [
                'Verwaal (2003 / 2008)',
                '105',
                'CRS+MMC HIPEC vs systemic 5-FU/LV ± palliative surgery',
                'Overall survival',
                'OS 22.4 vs 12.6 mo (HR 0.55); CC-0 5-yr OS 45%',
                'Weak (5-FU/LV) control; single-centre; effect isolates the strategy, not HIPEC',
              ],
              [
                'PRODIGE 7 (2021)',
                '265',
                'Complete CRS + oxaliplatin HIPEC vs complete CRS alone (both + systemic Rx)',
                'Overall survival',
                'OS 41.7 vs 41.2 mo (HR 1.00); more HIPEC-arm morbidity',
                '30-min oxaliplatin only; peri-op 5-FU bolus; underpowered for small benefit',
              ],
              [
                'COLOPEC (2019)',
                '204',
                'Adjuvant oxaliplatin HIPEC vs standard adjuvant chemo (T4/perforated)',
                '18-mo peritoneal-MFS',
                '80.9% vs 76.2% — no difference',
                'Prophylactic setting; oxaliplatin regimen; short follow-up window',
              ],
              [
                'PROPHYLOCHIP (2020)',
                '150',
                'Second-look surgery + HIPEC vs surveillance (high-risk CRC)',
                '3-yr disease-free survival',
                '44% vs 53% — no benefit',
                '⅓ of surveillance never reoperated; imaging surveillance now better',
              ],
              [
                'CYTO-CHIP (2022, retrospective)',
                '~300 matched',
                'Prophylactic HIPEC vs surgery alone (T4/perforated)',
                '3-yr DFS (propensity-matched)',
                '≈54% vs 44% (HR ≈0.62) — positive signal',
                'Non-randomised; selection/confounding by indication; discordant with RCTs',
              ],
              [
                'CAIRO6 (ongoing)',
                '~358',
                'Perioperative systemic therapy + CRS+HIPEC vs upfront CRS+HIPEC',
                'Overall survival',
                'Phase 2 feasible; phase 3 OS pending',
                'Tests sequencing/systemic therapy, not the HIPEC bath itself',
              ],
            ],
            ref: 'Compiled from primary publications; see key references.',
          },
          {
            type: 'quote',
            content:
              '"The operation cures; the drug bath, at best, assists. Read every peritoneal trial by first asking what was randomised — the surgery or the chemistry."',
            ref: 'Teaching synthesis, Evidence & Trials track.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 28 ──────────────────────────────────────────────────────────────
  {
    id: 'ch28-trials-ovarian-gastric-rare',
    number: '28',
    title: 'Landmark Trials Dissected — Ovarian, Gastric & Rare',
    subtitle:
      'OVHIPEC-1/-2, DESKTOP III, SOLO-1, GASTRICHIP, PERISCOPE, PIPAC & mesothelioma registries',
    icon: 'FlaskConical',
    reading_time_min: 33,
    level: 'Advanced',
    track: 'Evidence & Trials',
    guidelines_version:
      'Primary RCT publications 2018–2023 · PSOGI MPeM 2022 · ESMO Ovarian/Gastric 2023 · JPGA',
    learning_objectives: [
      'Explain why HIPEC succeeds in ovarian cancer (OVHIPEC-1) but not colorectal (PRODIGE 7)',
      'Separate the interval-debulking from the primary-surgery HIPEC question (OVHIPEC-1 vs -2)',
      'Interpret DESKTOP III and the AGO score as a model of predictive patient selection',
      'Situate SOLO-1 (PARP maintenance) as the systemic backbone that reframes surgical benefit',
      'Read GASTRICHIP and the PIPAC evidence realistically for gastric peritoneal disease',
      'Weigh registry-level evidence for peritoneal mesothelioma against the absence of RCTs',
    ],
    key_references: [
      'van Driel WJ, et al. N Engl J Med 2018;378(3):230–240 (OVHIPEC-1); 5-yr NEJM Evid 2023.',
      'Koole SN, van Stein RM, et al. (OVHIPEC-2), NCT03772028.',
      'Harter P, Sehouli J, Vergote I, et al. N Engl J Med 2021;385(23):2123–2131 (DESKTOP III).',
      'Moore K, Colombo N, et al. N Engl J Med 2018;379(26):2495–2505 (SOLO-1).',
      'Bonnot PE, Piessen G, et al. JAMA Surg 2021 (CYTO-CHIP/GASTRICHIP context); NCT01882933.',
      'Alyami M, et al. Lancet Oncol 2019;20(7):e368–e377 (PIPAC systematic review).',
      'Yan TD, Deraco M, Baratti D, et al. J Clin Oncol 2009;27(36):6237–6242 (MPeM registry).',
      'Yang XJ, Huang CQ, Suo T, Mei LJ, Yang GL, Cheng FL, Zhou YF, Xiong B, Yonemura Y, Li Y. Ann Surg Oncol. 2011;18(6):1575-1581. PMID: 21431408.',
      'Wu HT, Yang XJ, Huang CQ, Sun JH, Ji ZH, Peng KW, Zhang Q, Li Y. World J Surg Oncol. 2016;14(1):246. PMID: 27633880.',
      'Fan B, Bu Z, Zhang J, Zong X, Ji X, Fu T, Jia Z, Zhang Y, Wu X. BMC Cancer. 2021;21(1):216. PMID: 33653317.',
    ],
    sections: [
      {
        id: 'ch28-s1',
        title: 'Why Histology Decides Whether HIPEC Works',
        blocks: [
          {
            type: 'text',
            content:
              'The single most important concept for interpreting the HIPEC literature across tumours is that **HIPEC is not one intervention — it is a different intervention in each disease**. The drug, the chemosensitivity of the tumour, the temperature synergy, and the biology of residual disease all vary. Cisplatin HIPEC in a platinum-sensitive ovarian cancer (OVHIPEC-1: positive) is a fundamentally different proposition from oxaliplatin HIPEC in colorectal cancer (PRODIGE 7: null). A trainee who says "the evidence for HIPEC is mixed" has not yet learned to condition on histology and drug.',
          },
          {
            type: 'key',
            title: 'Condition on the drug–disease pair',
            content:
              'Never quote a HIPEC result without naming the **tumour, the drug, and the timing**. "HIPEC works" is meaningless. "Cisplatin HIPEC at interval debulking improves OS in stage III ovarian cancer (OVHIPEC-1)" is a usable, defensible statement. The generalisation fails precisely at the drug–disease boundary.',
          },
        ],
      },
      {
        id: 'ch28-s2',
        title: 'Ovarian — OVHIPEC-1, OVHIPEC-2, DESKTOP III, SOLO-1',
        blocks: [
          {
            type: 'text',
            content:
              '**OVHIPEC-1** (van Driel, NEJM 2018) is the positive counterpoint to PRODIGE 7. **245 patients** with stage III ovarian cancer who could not undergo primary complete debulking received neoadjuvant carboplatin/paclitaxel, then interval CRS randomised to **± cisplatin HIPEC (100 mg/m², 40 °C, 90 min)**. Result: median OS **45.7 vs 33.9 months (HR 0.67, p=0.02)**, median PFS 14.2 vs 10.7 months, without an excess of grade 3–4 adverse events. The 5-year follow-up (NEJM Evid 2023) confirmed a durable ~11% absolute OS advantage and no late toxicity.',
          },
          {
            type: 'trial',
            title: 'OVHIPEC-1 — the positive HIPEC RCT',
            content:
              'Interval CRS + cisplatin HIPEC vs interval CRS alone in stage III ovarian cancer: median OS **45.7 vs 33.9 months (HR 0.67, p=0.02)**, PFS 14.2 vs 10.7 months, no excess grade 3–4 toxicity. Cisplatin, 90-minute perfusion, platinum-sensitive biology — the mirror image of PRODIGE 7’s parameters, and the reason the result diverges.',
            ref: 'van Driel WJ, et al. N Engl J Med 2018;378(3):230–240; 5-yr follow-up NEJM Evid 2023;2(3):EVIDoa2300010.',
          },
          {
            type: 'text',
            content:
              'Read OVHIPEC-1’s **limits** honestly: it enrolled a specific population (**interval** debulking after neoadjuvant chemo, not primary surgery), it was conducted at experienced centres, and some critics argued the control arm’s survival was lower than expected. Its scope is therefore *interval CRS in stage III disease that could not be primarily debulked* — which is exactly why **OVHIPEC-2** exists: it tests cisplatin HIPEC at **primary** debulking surgery (no prior neoadjuvant chemo). Preliminary data suggest a PFS signal (HR ~0.73) but the OS readout is immature. The teaching point: do not extrapolate a positive interval-setting trial to the primary-surgery setting until the setting-specific trial reports.',
          },
          {
            type: 'trial',
            title: 'DESKTOP III — predictive selection done right',
            content:
              'Secondary cytoreduction vs chemotherapy alone at first platinum-sensitive relapse, **restricted to AGO-score-positive patients**: OS **53.7 vs 46.2 months (HR 0.75, p=0.02)**, benefit confined to those achieving complete (CC-0/R0) resection. A model of how a **predictive selection tool** turns a debated operation into a survival-improving one.',
            ref: 'Harter P, Sehouli J, Vergote I, et al. N Engl J Med 2021;385(23):2123–2131.',
          },
          {
            type: 'text',
            content:
              'DESKTOP III is the field’s best lesson in **predictive vs prognostic markers**. The AGO score (good performance status, complete resection at first surgery, absence of asconsiderable ascites) *predicts who can be completely resected* — and the OS benefit vanished in patients left with residual disease. This is the same CC-0 imperative seen throughout the peritoneal literature, formalised as an entry criterion. Contrast with GOG-213 (an earlier US trial that did not select by resectability and was negative): **the difference between DESKTOP III and GOG-213 is patient selection, not the operation** — a paradigm for how to rescue a surgical question with a validated selection tool.',
          },
          {
            type: 'text',
            content:
              'Finally, no ovarian surgical decision is made in a vacuum: **SOLO-1** (Moore, NEJM 2018) established **olaparib maintenance** after first-line platinum chemotherapy in BRCA-mutated advanced ovarian cancer, with a PFS hazard ratio of **0.30** — a 70% reduction in progression risk. SOLO-1 reframes surgery: the systemic backbone is now biomarker-driven and highly effective, so the *marginal* contribution of any surgical add-on must be judged on top of modern maintenance. Every ovarian CRS decision now presupposes germline/somatic BRCA and HRD testing.',
          },
          {
            type: 'pearl',
            title: 'Selection is the therapy',
            content:
              'OVHIPEC-1 (drug matched to chemosensitive disease), DESKTOP III (AGO score gates the operation), and SOLO-1 (biomarker gates the drug) all teach one lesson: in peritoneal oncology, **who you choose is as important as what you do**. Positive trials in this space almost always have a selection engine at their core.',
          },
        ],
      },
      {
        id: 'ch28-s3',
        title: 'Gastric — GASTRICHIP, PERISCOPE, and Sobering Realism',
        blocks: [
          {
            type: 'text',
            content:
              '**GASTRICHIP** (Bonnot/Glehen, JAMA Surg 2021; NCT01882933) randomised gastric cancer patients with limited peritoneal disease (PCI ≤12) or high-risk features to complete CRS **± cisplatin HIPEC**. The headline result showed **no significant OS benefit (5-year OS ~18.8% vs 15.8%, HR 0.87, p=0.43)**. Gastric peritoneal metastasis remains the hardest arena in the field: aggressive biology, signet-ring histology, and early systemic dissemination all conspire against durable local control.',
          },
          {
            type: 'trial',
            title: 'GASTRICHIP — the negative gastric RCT',
            content:
              'CRS ± cisplatin HIPEC for gastric cancer with limited peritoneal disease: **no significant OS benefit** (5-yr OS 18.8% vs 15.8%, HR 0.87, p=0.43). Dampened Western enthusiasm for CRS+HIPEC in gastric PM; guidelines now largely restrict it to trials. Signals of possible benefit in ultra-selected patients (PCI ≤6, intestinal-type, chemo-responsive) remain hypotheses.',
            ref: 'Bonnot PE, Piessen G, Kepenekian V, et al. JAMA Surg 2021;156(9):e212384. NCT01882933.',
          },
          {
            type: 'trial',
            title: 'Chinese evidence — the first positive CRS+HIPEC RCT in gastric PM',
            content:
              'Predating the negative Western GASTRICHIP result, the Chinese phase III RCT (Yang, Huang, Yonemura, Li; n=68) randomised gastric peritoneal carcinomatosis to CRS versus CRS plus **cisplatin + mitomycin-C HIPEC** and found median survival nearly doubled (**11.0 vs 6.5 months**) without added serious morbidity — the first randomised signal of benefit in this disease. A subsequent Chinese phase II trial (NCT00454519) established a **lobaplatin + docetaxel** HIPEC regimen as feasible and safe. These results illustrate why Asian and Western gastric HIPEC data must be read together: divergent verdicts reflect differences in biology, drug, timing and selection rather than a single truth.',
            ref: 'Yang XJ, ... Yonemura Y, Li Y. Ann Surg Oncol. 2011;18(6):1575-1581. PMID: 21431408; Wu HT, et al. World J Surg Oncol. 2016;14(1):246. PMID: 27633880.',
          },
          {
            type: 'text',
            content:
              'The Japanese/Asian experience is more nuanced. Neoadjuvant **intraperitoneal + systemic (bidirectional) paclitaxel** (the PHOENIX-GC trial, Ishigami, J Clin Oncol 2018) narrowly missed its primary endpoint on ITT but showed benefit on adjusted analysis and in patients with moderate ascites — an example of a trial whose *statistical verdict* (negative) and *clinical signal* (positive in a subgroup) diverge. The Dutch **PERISCOPE II** trial tests gastrectomy + CRS + HIPEC + normothermic intraperitoneal chemo against palliative systemic therapy in limited gastric PM, and will provide the cleanest Western randomised answer. Until it reports, gastric CRS+HIPEC is best regarded as **investigational**.',
          },
          {
            type: 'pitfall',
            title: 'Cross-applying gastric evidence across regions',
            content:
              'Asian and Western gastric cancer differ in biology, stage at presentation, surgical volume, and adjuvant regimens (S-1 vs FLOT). A positive Japanese intraperitoneal paclitaxel signal does not automatically license the same strategy in a European FLOT-treated population, and vice versa. Always ask whether the trial population resembles your patient before importing the conclusion.',
          },
        ],
      },
      {
        id: 'ch28-s4',
        title: 'PIPAC and Rare Tumours — Reading Evidence Without RCTs',
        blocks: [
          {
            type: 'text',
            content:
              '**PIPAC (pressurised intraperitoneal aerosol chemotherapy)** is a palliative, repeatable technique whose evidence base is almost entirely **phase I/II and registry** — there is no positive phase III OS trial. The pharmacological rationale (Solass, Theranostics 2014) is sound: aerosolised drug under 12 mmHg capnoperitoneum achieves deeper, more homogeneous tissue penetration than liquid lavage. Phase 2 series in gastric and ovarian PM report histological response (PRGS) and ascites control, but response and symptom endpoints are **surrogates**. The maturing randomised evidence (e.g., PIPAC-based trials in gastric and colorectal disease) will determine whether the pharmacological advantage translates into survival.',
          },
          {
            type: 'trial',
            title: 'PIPAC — proof of concept, not proof of survival',
            content:
              'First-in-human and phase 2 PIPAC data show ~5-fold higher peritoneal tissue drug concentration than lavage, histological regression (PRGS) in ~60–70%, and effective ascites control — but **no randomised OS evidence**. Read PIPAC as an evidence-building palliative option, and grade every claim by whether the endpoint was survival or a surrogate.',
            ref: 'Solass W, et al. Theranostics 2014;4(6):576–592; Alyami M, et al. Lancet Oncol 2019;20(7):e368–e377.',
          },
          {
            type: 'text',
            content:
              'For **peritoneal mesothelioma** the evidence is registry-level and will likely never be randomised — the disease is too rare and the alternative (systemic therapy alone) too clearly inferior for equipoise. The multi-institutional registry (Yan, JCO 2009; n=401) reports **median OS ~53 months and 5-year OS ~47%** with CRS+HIPEC, with epithelioid histology, low PCI, and CC-0/1 as independent favourable predictors. BAP1 status refines prognosis and immunotherapy selection. The interpretive skill here is **weighing high-quality registry evidence when RCTs are impossible**: consistency across centres, biological plausibility, and dramatic effect size versus historical controls together justify a strong recommendation despite the absence of level-I data.',
          },
          {
            type: 'pearl',
            title: 'When you will never get an RCT',
            content:
              'For very rare diseases (mesothelioma, sarcomatosis, low-grade PMP), demand instead: multi-institutional consistency, a large effect versus historical survival, a plausible mechanism, and a dose–response by completeness of cytoreduction. GRADE explicitly allows upgrading observational evidence when the effect is large and consistent — this is where that rule earns its keep.',
          },
        ],
      },
      {
        id: 'ch28-s5',
        title: 'Ovarian, Gastric & Rare Trials at a Glance',
        blocks: [
          {
            type: 'table',
            title: 'Comparison — ovarian & gastric trials',
            headers: ['Trial (year)', 'n', 'Arms', 'Endpoint', 'Result', 'Key caveat'],
            rows: [
              [
                'OVHIPEC-1 (2018)',
                '245',
                'Interval CRS ± cisplatin HIPEC (stage III)',
                'Overall survival',
                'OS 45.7 vs 33.9 mo (HR 0.67, p=0.02); durable at 5 yr',
                'Interval setting only; expert centres; control-arm survival debated',
              ],
              [
                'OVHIPEC-2 (ongoing)',
                '~538',
                'Primary CRS ± cisplatin HIPEC (no prior NACT)',
                'PFS / OS',
                'PFS signal (HR ~0.73); OS immature',
                'Different setting from OVHIPEC-1 — do not extrapolate',
              ],
              [
                'DESKTOP III (2021)',
                '407',
                'Secondary CRS vs chemo alone (AGO-positive relapse)',
                'Overall survival',
                'OS 53.7 vs 46.2 mo (HR 0.75); benefit only if CC-0',
                'Benefit confined to complete resection; AGO score gates entry',
              ],
              [
                'SOLO-1 (2018)',
                '391',
                'Olaparib vs placebo maintenance (BRCA-mut, 1L)',
                'Progression-free survival',
                'PFS HR 0.30; 5-yr PFS 48% vs 21%',
                'Reframes surgical benefit; mandates BRCA/HRD testing',
              ],
              [
                'GASTRICHIP (2021)',
                '183',
                'CRS ± cisplatin HIPEC (gastric, PCI ≤12)',
                'Overall survival',
                'No benefit (5-yr OS 18.8% vs 15.8%, HR 0.87)',
                'Aggressive biology; ultra-selected subgroup signal unproven',
              ],
            ],
            ref: 'Compiled from primary publications; see key references.',
          },
          {
            type: 'table',
            title: 'Comparison — rare tumours & aerosol therapy',
            headers: ['Evidence source', 'Design', 'Signal', 'Endpoint type', 'How to weigh it'],
            rows: [
              [
                'PIPAC phase 2 (gastric/ovarian)',
                'Single-arm phase II',
                'PRGS response ~60–70%; ascites control',
                'Surrogate (histology, symptoms)',
                'Evidence-building palliation; await randomised OS data',
              ],
              [
                'PERISCOPE II (ongoing)',
                'RCT (gastric PM)',
                'Pending',
                'Overall survival',
                'Will give the cleanest Western gastric answer',
              ],
              [
                'MPeM registry (Yan 2009)',
                'Multi-institutional registry',
                'Median OS ~53 mo, 5-yr OS ~47%',
                'OS vs historical controls',
                'Large, consistent effect where RCT is infeasible — strong despite level',
              ],
              [
                'Sarcomatosis series (MSKCC 2018)',
                'Retrospective',
                'CC-0/1 OS 31 vs 8 mo (R2)',
                'OS by resection completeness',
                'Histotype- and completeness-dependent; select carefully',
              ],
            ],
            ref: 'Compiled from primary publications; PSOGI MPeM Consensus 2022.',
          },
          {
            type: 'quote',
            content:
              '"OVHIPEC-1 and PRODIGE 7 used the same word — HIPEC — for two different treatments. The lesson of the ovarian/gastric/rare literature is to always read the noun with its adjectives: which drug, which timing, which histology."',
            ref: 'Teaching synthesis, Evidence & Trials track.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 29 ──────────────────────────────────────────────────────────────
  {
    id: 'ch29-interpreting-evidence',
    number: '29',
    title: 'Interpreting Evidence in Peritoneal Oncology',
    subtitle:
      'Levels of evidence, HR/CI, ITT vs per-protocol, surrogate endpoints, selection bias, and GRADE',
    icon: 'Sigma',
    reading_time_min: 28,
    level: 'Core',
    track: 'Evidence & Trials',
    guidelines_version:
      'GRADE Working Group · Oxford CEBM Levels of Evidence · CONSORT/STROBE reporting standards',
    learning_objectives: [
      'Rank study designs by internal validity and place each peritoneal trial correctly',
      'Interpret a hazard ratio, its confidence interval, and median OS/PFS/RFS without over-reading',
      'Distinguish intention-to-treat from per-protocol analysis and predict the direction of bias in surgical trials',
      'Recognise surrogate endpoints and demand OS before changing practice',
      'Name the selection biases that inflate uncontrolled surgical series',
      'Explain why RCTs are structurally hard in CRS+HIPEC and apply GRADE to grade a recommendation',
    ],
    key_references: [
      'GRADE Working Group. BMJ 2008;336:924–926.',
      'OCEBM Levels of Evidence Working Group, Oxford CEBM 2011.',
      'Schulz KF, Altman DG, Moher D. CONSORT 2010. BMJ 2010;340:c332.',
      'von Elm E, et al. STROBE Statement. Lancet 2007;370:1453–1457.',
      'Prasad V, et al. Surrogate endpoints in oncology. JAMA Intern Med 2015.',
    ],
    sections: [
      {
        id: 'ch29-s1',
        title: 'Levels of Evidence — and Where Our Field Actually Sits',
        blocks: [
          {
            type: 'text',
            content:
              'The classical hierarchy ranks internal validity from **systematic reviews/meta-analyses of RCTs (level Ia)** and **individual RCTs (Ib)** at the top, through **cohort studies (II)**, **case-control (III)**, **case series (IV)**, down to **expert opinion (V)**. The hierarchy is about *protection from bias*, not importance: a well-run registry can be more clinically useful than a small, flawed RCT, but the RCT is structurally better protected against confounding. In peritoneal oncology the honest map is uncomfortable — a handful of true RCTs (Verwaal, PRODIGE 7, COLOPEC, PROPHYLOCHIP, OVHIPEC-1, DESKTOP III, GASTRICHIP) sit atop a very large body of **retrospective and registry data**.',
          },
          {
            type: 'table',
            title: 'Levels of evidence with peritoneal exemplars',
            headers: ['Level', 'Design', 'Peritoneal example', 'Main threat'],
            rows: [
              ['Ia', 'Meta-analysis of RCTs', 'Cochrane HIPEC reviews', 'Heterogeneity, pooling unlike trials'],
              ['Ib', 'Individual RCT', 'OVHIPEC-1, PRODIGE 7, DESKTOP III', 'Power, generalisability'],
              ['IIa/IIb', 'Cohort / registry', 'Elias French registry, MPeM registry', 'Confounding by indication'],
              ['III', 'Case-control', 'Matched HIPEC vs no-HIPEC series', 'Selection & recall bias'],
              ['IV', 'Case series', 'Single-centre CRS series', 'No comparator; selection'],
              ['V', 'Expert opinion / consensus', 'PSOGI, Chicago Consensus', 'Circular reasoning, authority bias'],
            ],
            ref: 'Adapted from Oxford CEBM 2011.',
          },
          {
            type: 'pitfall',
            title: 'Treating consensus as evidence',
            content:
              'Consensus statements (PSOGI, Chicago) are **level V** — they synthesise evidence but do not generate it. When a guideline recommends something "by consensus," that flags an evidence gap, not proof. The recommendation to give HIPEC in colorectal PM "despite PRODIGE 7" is a consensus judgement, not a trial result; label it as such when you counsel a patient.',
          },
        ],
      },
      {
        id: 'ch29-s2',
        title: 'Reading the Numbers — HR, CI, and Medians',
        blocks: [
          {
            type: 'text',
            content:
              'A **hazard ratio (HR)** is the ratio of the instantaneous event rate (death, progression) in the intervention arm to the control arm, averaged over follow-up. HR 0.67 (OVHIPEC-1) means the death rate was 33% lower with HIPEC at any given moment; HR 1.00 (PRODIGE 7) means no difference. Crucially, the HR is a *relative* measure — it says nothing about absolute benefit. A dramatic HR on a rare event can be a trivial absolute gain, and vice versa. Always pair the HR with the **median survival difference** and, where possible, the absolute survival at a fixed time point.',
          },
          {
            type: 'key',
            title: 'The confidence interval carries the message',
            content:
              'For a hazard ratio, the **95% CI** tells you the range compatible with the data. If it crosses **1.0**, the result is not statistically significant (e.g., PRODIGE 7 HR 1.00, CI 0.63–1.58 — includes both meaningful harm and meaningful benefit, i.e., the trial could not exclude a real effect in either direction). A narrow CI around a HR of 0.67 (OVHIPEC-1, 0.48–0.94) is a confident, clinically meaningful result. Read the interval, not just the point estimate.',
          },
          {
            type: 'text',
            content:
              '**Median OS** is the time by which half the cohort has died — robust and intuitive, but it ignores the tail (long-term survivors and cures), which is exactly what CRS+HIPEC aims to produce. That is why complete-cytoreduction series quote **5-year and 8-year survival** and why Kaplan–Meier tail separation matters as much as the median. **PFS/RFS/DFS** measure time to progression or recurrence; they read out sooner than OS but are surrogates. A p-value, finally, is the probability of the observed data under the null — it is not the probability the treatment works, and a "significant" p on a surrogate does not license a practice change.',
          },
          {
            type: 'list',
            title: 'A five-number bedside checklist for any trial result',
            items: [
              'Hazard ratio — direction and magnitude of relative effect',
              '95% confidence interval — does it cross 1.0, and how wide is it?',
              'Absolute difference — median gain in months and survival % at a fixed timepoint',
              'Endpoint type — OS (trust) vs PFS/DFS/response (surrogate; be cautious)',
              'Number needed to treat / harm — put benefit against the morbidity of a major operation',
            ],
          },
          {
            type: 'pearl',
            title: 'Relative dazzles, absolute decides',
            content:
              'Patients and juniors are impressed by "33% reduction in death." Counsel with the absolute number instead: OVHIPEC-1 is an ~11% absolute 5-year OS gain — meaningful, but you buy it with a major operation and heated intraperitoneal cisplatin. Consent conversations should be in absolute terms.',
          },
        ],
      },
      {
        id: 'ch29-s3',
        title: 'ITT vs Per-Protocol — The Bias That Loves Surgery',
        blocks: [
          {
            type: 'text',
            content:
              '**Intention-to-treat (ITT)** analyses every randomised patient in the arm they were assigned, regardless of what actually happened. It preserves randomisation and gives the *conservative, real-world* estimate. **Per-protocol (PP)** analyses only those who completed the intended treatment — which in surgical trials systematically excludes the patients found unresectable at laparotomy, those who crossed over, and those too frail to finish. Because these excluded patients are the sickest, **PP analysis almost always flatters the intervention**.',
          },
          {
            type: 'trial',
            title: 'Where PP inflates: Verwaal’s 45%',
            content:
              'Verwaal’s famous "5-year OS 45%" applies to patients who achieved a **complete cytoreduction** — a per-protocol, prognostically selected subset, not the randomised arm as a whole. It is true and useful for counselling a patient who *has been* completely cytoreduced, but it is not the randomised effect of assigning someone to the CRS+HIPEC strategy. Quote it as what it is: a selected-subgroup outcome.',
            ref: 'Verwaal VJ, et al. Ann Surg Oncol 2008;15(8):2426–2432.',
          },
          {
            type: 'pitfall',
            title: 'Quoting a per-protocol figure as the trial result',
            content:
              'The most common consent-room error is telling a patient "this operation gives 45% five-year survival" using a complete-cytoreduction (per-protocol) number as if it were the randomised effect. Their probability of *achieving* CC-0 is itself uncertain until laparotomy. Separate the conditional outcome (if CC-0 is achieved) from the unconditional one (if we attempt the strategy).',
          },
          {
            type: 'text',
            content:
              'The practical rule: for **efficacy and licensing**, trust ITT; for **counselling a patient already known to meet a criterion**, per-protocol/subgroup figures are appropriate *if labelled*. When a trial reports a positive PP result but a null ITT result (as some gastric intraperitoneal trials do), treat the ITT verdict as the honest one and the PP as hypothesis-generating.',
          },
        ],
      },
      {
        id: 'ch29-s4',
        title: 'Surrogates, Selection Bias, and Why RCTs Are Hard Here',
        blocks: [
          {
            type: 'text',
            content:
              'A **surrogate endpoint** substitutes for the outcome that matters (OS): PFS, DFS, peritoneal-recurrence rate, biochemical/histological response (PRGS in PIPAC), ascites control. Surrogates are valid *only* when a treatment effect on the surrogate reliably predicts an effect on OS — a relationship that must be demonstrated, not assumed. In peritoneal oncology, PFS has repeatedly failed to guarantee OS (OVHIPEC-2 shows a PFS signal with immature OS; some ovarian maintenance PFS gains have not translated fully). Demand OS before changing practice; accept a surrogate only for palliative, symptom-directed decisions where the surrogate *is* the goal (e.g., ascites control).',
          },
          {
            type: 'text',
            content:
              'Uncontrolled surgical series are riddled with predictable **selection biases**. **Referral/selection bias**: fitter, lower-burden patients reach specialist centres. **Confounding by indication**: the intervention is offered to those most likely to do well anyway. **Stage migration (Will Rogers phenomenon)**: better staging (laparoscopy, DWI-MRI) reclassifies patients, improving the apparent survival of *both* groups without anyone living longer. **Lead-time and length-time bias** in screening/second-look strategies. **Immortal-time bias**: counting survival from a landmark (e.g., completion of HIPEC) guarantees the patient survived long enough to receive it. Each of these inflates single-arm results and is exactly what randomisation neutralises.',
          },
          {
            type: 'list',
            title: 'Selection biases that inflate surgical series',
            items: [
              'Referral/selection bias — specialist centres see fitter, lower-PCI patients',
              'Confounding by indication — the operable are offered the operation',
              'Stage migration (Will Rogers) — better imaging improves both arms artefactually',
              'Immortal-time bias — survival counted from a post-treatment landmark',
              'Publication bias — negative single-centre series are under-reported',
            ],
          },
          {
            type: 'text',
            content:
              'Why are **RCTs structurally hard** in CRS+HIPEC? Rarity limits accrual (multi-year, multi-centre trials for modest samples). **Equipoise erodes** once surgeons believe in the operation — randomising a patient to "no surgery" becomes ethically and practically difficult, which is why prophylaxis trials (surgery in both arms) were feasible but a modern "CRS vs no CRS" trial is not. **Blinding is impossible** for the operation. **Standardisation is elusive**: PCI thresholds, drugs, temperatures, and perfusion times vary between centres, so pooling is fraught. **Learning-curve effects** mean early trial results understate a mature programme. These are not excuses for weak evidence — they are reasons to read the evidence we have with calibrated humility.',
          },
          {
            type: 'pearl',
            title: 'The equipoise trap',
            content:
              'The reason we have PRODIGE 7 (HIPEC-on-top-of-surgery) but no modern "CRS vs no CRS" RCT is that surgeons lost equipoise about the operation after Verwaal. This means the *operation* will likely never be re-tested against nihilism — its evidence base is permanently anchored to one 105-patient 2003 trial plus consistent registries. Know where your certainty actually comes from.',
          },
        ],
      },
      {
        id: 'ch29-s5',
        title: 'GRADE — From Study to Strength of Recommendation',
        blocks: [
          {
            type: 'text',
            content:
              '**GRADE** separates two things that trainees conflate: the **certainty of evidence** (high/moderate/low/very low) and the **strength of recommendation** (strong/weak). Evidence starts high for RCTs and low for observational studies, then moves: **downgrade** for risk of bias, inconsistency, indirectness, imprecision, and publication bias; **upgrade** observational evidence for a large effect, a dose–response gradient, or when plausible confounding would only reduce the observed effect. A strong recommendation can rest on moderate evidence if benefits clearly outweigh harms, values are consistent, and the intervention is feasible.',
          },
          {
            type: 'table',
            title: 'GRADE applied to peritoneal questions',
            headers: ['Question', 'Best evidence', 'GRADE certainty', 'Typical recommendation'],
            rows: [
              [
                'CRS + cisplatin HIPEC at interval debulking, ovarian III',
                'OVHIPEC-1 RCT + 5-yr follow-up',
                'Moderate–High',
                'Strong for, at experienced centres',
              ],
              [
                'Oxaliplatin HIPEC added to complete CRS, colorectal',
                'PRODIGE 7 RCT (null)',
                'Moderate',
                'Weak/against (drug-specific)',
              ],
              [
                'Prophylactic HIPEC for T4/perforated colorectal',
                'COLOPEC + PROPHYLOCHIP RCTs (null)',
                'Moderate',
                'Against routine use',
              ],
              [
                'CRS+HIPEC for epithelioid peritoneal mesothelioma',
                'Registries only (large, consistent effect)',
                'Low, upgraded for effect size',
                'Strong for, despite no RCT',
              ],
              [
                'CRS+HIPEC for gastric peritoneal metastasis',
                'GASTRICHIP RCT (null)',
                'Moderate',
                'Against outside trials',
              ],
            ],
            ref: 'GRADE Working Group. BMJ 2008;336:924–926; applied to primary trials.',
          },
          {
            type: 'pitfall',
            title: 'Confusing certainty with strength',
            content:
              'Low-certainty evidence can still support a strong recommendation (mesothelioma CRS+HIPEC: only registries, but a large, consistent, mechanistically plausible effect with no realistic alternative). Conversely, high-certainty evidence can yield a weak recommendation when benefits and harms are finely balanced. Never assume "weak recommendation" means "weak evidence" — GRADE keeps the two axes deliberately separate.',
          },
          {
            type: 'quote',
            content:
              '"Evidence-based medicine is not cookbook medicine — it is the conscientious, explicit, and judicious use of current best evidence, integrated with clinical expertise and patient values."',
            ref: 'After Sackett DL, et al. BMJ 1996;312:71–72.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 30 ──────────────────────────────────────────────────────────────
  {
    id: 'ch30-guideline-to-bedside',
    number: '30',
    title: 'From Guideline to Bedside — PSOGI, Chicago, NCCN, ESMO, JPGA',
    subtitle:
      'How consensus is built, where guidelines diverge, applying thresholds, and the MDT as final arbiter',
    icon: 'ClipboardCheck',
    reading_time_min: 29,
    level: 'Core',
    track: 'Evidence & Trials',
    guidelines_version:
      'PSOGI 2016–2022 · Chicago Consensus 2020 · NCCN 2024–2025 · ESMO 2023–2024 · JPGA (JGCA) 2021',
    learning_objectives: [
      'Describe how a consensus guideline is constructed (Delphi, GRADE, voting thresholds) and its limits',
      'Map the major guideline bodies and the questions each answers best',
      'Locate the real points of divergence between PSOGI, Chicago, NCCN, ESMO and JPGA',
      'Apply numeric thresholds (PCI, CC, histology) as decision aids rather than rigid rules',
      'Justify why the multidisciplinary team is the final arbiter that turns a guideline into a plan',
      'Navigate three live controversies with a defensible, evidence-anchored position',
    ],
    key_references: [
      'Bhatt A, et al. Chicago Consensus Working Group. Ann Surg Oncol 2020;27(5):1561–1578.',
      'Carr NJ, et al. PSOGI classification. Am J Surg Pathol 2016;40(1):14–26.',
      'NCCN Clinical Practice Guidelines in Oncology — Colon/Ovarian/Gastric, 2024–2025.',
      'ESMO Clinical Practice Guidelines — Peritoneal metastases / ovarian / gastric, 2023–2024.',
      'Japanese Gastric Cancer Association (JGCA) Treatment Guidelines, 6th ed., 2021.',
      'Li Y, Zhou YF, Liang H, Wang HQ, Hao JH, Zhu ZG, et al. World J Gastroenterol. 2016;22(30):6906-6916. PMID: 27570426.',
      'Professional Committee of Integrated Rehabilitation for Peritoneal Tumors, Chinese Anti-Cancer Association. Chin J Gastrointest Surg. 2025;28(11):1223-1231. PMID: 41290232.',
      'Li XB, Ji ZH, Li Y. Indian J Surg Oncol. 2019;10(Suppl 1):12-18. PMID: 30886487.',
    ],
    sections: [
      {
        id: 'ch30-s1',
        title: 'How a Consensus Guideline Is Actually Built',
        blocks: [
          {
            type: 'text',
            content:
              'A guideline is not a trial — it is a **structured synthesis of trials, registries, and expert judgement**. The modern process runs: define scope and clinical questions (often PICO-framed) → systematic literature review → grade the evidence (usually GRADE) → draft recommendations → subject them to a **modified Delphi** process where a multidisciplinary panel votes over several rounds until a pre-set **agreement threshold** (commonly ≥70–75%) is reached → publish with the strength of each recommendation and the level of consensus attached. Understanding this machinery lets you read a guideline critically: a "strong recommendation, high consensus, level Ib evidence" is very different from a "conditional recommendation, 71% consensus, expert opinion."',
          },
          {
            type: 'key',
            title: 'Read the consensus metadata, not just the recommendation',
            content:
              'Every good guideline attaches, to each statement, the **strength** (strong/weak), the **evidence level**, and the **% agreement**. A recommendation that scraped 72% agreement on level-IV evidence is a flag for genuine uncertainty — expect it to differ between guideline bodies and to be the exact question your MDT must adjudicate for the individual patient.',
          },
          {
            type: 'pitfall',
            title: 'Mistaking a guideline for a law',
            content:
              'Guidelines are decision aids, not statutes. They describe the average patient and the majority view at a point in time; they lag behind new trials by 1–3 years, they embed the values of the panel, and they cannot foresee the individual in front of you. Following a guideline off a cliff — offering futile CRS because a threshold is technically met — is as much an error as ignoring one.',
          },
        ],
      },
      {
        id: 'ch30-s2',
        title: 'The Map — Who Says What, and What Each Does Best',
        blocks: [
          {
            type: 'text',
            content:
              '**PSOGI** (Peritoneal Surface Oncology Group International) owns the *disease-specific peritoneal* expertise: the PMP/appendiceal classification, mesothelioma management, and CRS+HIPEC technical standards. **The Chicago Consensus (2020)** produced a pragmatic, tumour-by-tumour operative and perioperative framework for North American practice. **NCCN** is the widely used North American compendium — algorithmic, updated frequently, payer-influential, and generally *cautious* about HIPEC. **ESMO** provides the European clinical practice guidelines with explicit evidence grading and is generally more *permissive* of HIPEC in selected settings. **JPGA/JGCA** governs Japanese gastric cancer practice, where intraperitoneal chemotherapy and staging laparoscopy occupy a distinct, more surgery-forward tradition.',
          },
          {
            type: 'table',
            title: 'Guideline bodies at a glance',
            headers: ['Body', 'Scope / strength', 'Stance on HIPEC', 'Best used for'],
            rows: [
              [
                'PSOGI',
                'Peritoneal-specific; pathology & technique',
                'Supportive, disease-conditioned',
                'PMP/appendiceal & mesothelioma classification and management',
              ],
              [
                'Chicago Consensus 2020',
                'Operative/perioperative framework',
                'Supportive with explicit parameters',
                'Standardising technique, drug, dose, temperature by tumour',
              ],
              [
                'NCCN',
                'Broad oncology algorithms (N. America)',
                'Cautious; HIPEC often "category 3"/trial',
                'Systemic therapy sequencing and staging algorithms',
              ],
              [
                'ESMO',
                'European CPGs with evidence grades',
                'More permissive in selected settings',
                'Balancing systemic and locoregional therapy in Europe',
              ],
              [
                'JPGA / JGCA',
                'Japanese gastric cancer',
                'IP chemotherapy tradition; staging laparoscopy',
                'Gastric peritoneal disease, bidirectional therapy',
              ],
            ],
            ref: 'Chicago Consensus, Ann Surg Oncol 2020; PSOGI; NCCN 2024–25; ESMO 2023–24; JGCA 2021.',
          },
          {
            type: 'pearl',
            title: 'Use each guideline for what it is good at',
            content:
              'No single body is authoritative across the whole field. For appendiceal/PMP pathology, cite PSOGI; for systemic sequencing in colorectal disease, cite NCCN/ESMO; for gastric intraperitoneal strategies, read JGCA alongside the Western trials. Triangulating across bodies is a feature, not a nuisance.',
          },
          {
            type: 'key',
            title: 'Chinese evidence — the China Anti-Cancer Association consensus',
            content:
              'China maintains its own guideline tradition. The foundational **Chinese expert consensus on CRS+HIPEC for peritoneal malignancies** (Li et al., 2016) standardised patient selection, technique, drug regimens and perioperative management nationwide, and the **China Anti-Cancer Association** peritoneal-tumour committee has since issued disease-specific consensus documents (e.g., appendiceal peritoneal metastasis, 2025). Built on the world’s first CRS+HIPEC gastric RCT and one of the largest single-programme experiences (>1000 cases), the Chinese consensus is generally **supportive** of CRS+HIPEC in selected patients — closer to the ESMO/PSOGI end of the spectrum than to NCCN caution — and places strong emphasis on structured nationwide training and referral networks.',
            ref: 'Li Y, et al. World J Gastroenterol. 2016;22(30):6906-6916. PMID: 27570426; Chinese Anti-Cancer Association. Chin J Gastrointest Surg. 2025;28(11):1223-1231. PMID: 41290232.',
          },
        ],
      },
      {
        id: 'ch30-s3',
        title: 'Where They Diverge — and Why',
        blocks: [
          {
            type: 'text',
            content:
              'Divergence between guidelines is not sloppiness — it is the **visible edge of the evidence**. The clearest fault line is **colorectal HIPEC after PRODIGE 7**: NCCN moved to a cautious/"not recommended outside trials" stance for the HIPEC *component*, while several European centres and PSOGI-aligned consensus documents continue to support HIPEC after complete CRS, reading PRODIGE 7 as a critique of the oxaliplatin regimen rather than of HIPEC as a concept. Both are defensible readings of the *same* trial — the divergence marks exactly where the data run out.',
          },
          {
            type: 'list',
            title: 'The live divergences to know',
            items: [
              'Colorectal HIPEC post-PRODIGE 7 — NCCN cautious vs European/PSOGI supportive (drug-specific reading)',
              'PCI upper limit for colorectal CRS — ~20 as a common threshold, but treated as relative vs absolute differently between bodies',
              'Prophylactic HIPEC — uniformly discouraged after COLOPEC/PROPHYLOCHIP, but CYTO-CHIP keeps a minority position alive',
              'Gastric CRS+HIPEC — Western guidelines restrict to trials; Japanese tradition more surgery/IP-forward',
              'Ovarian primary-setting HIPEC — endorsed at interval (OVHIPEC-1) but awaited at primary surgery (OVHIPEC-2 pending)',
            ],
          },
          {
            type: 'text',
            content:
              'A second axis of divergence is **numeric thresholds**. A PCI of ~20 is a widely quoted upper bound for colorectal CRS, but guidelines differ on whether it is a hard contraindication or a strong relative one, and the threshold is histology-dependent (essentially no PCI limit for low-grade PMP, a much lower practical ceiling for gastric and non-epithelioid mesothelioma). Treat every published threshold as a **calibrated decision aid** derived from a specific dataset, not a universal constant. The same PCI of 22 means different things in low-grade appendiceal disease (potentially curable) and in signet-ring gastric cancer (usually futile).',
          },
          {
            type: 'pitfall',
            title: 'Applying a threshold across the wrong histology',
            content:
              'The "PCI 20" ceiling comes largely from colorectal registries (Elias, French registry: PCI >20 → median OS <20 months). Transplanting it unchanged onto PMP (where PCI 39 can still be curable) or gastric disease (where PCI 6 may already be too much) is a category error. Always re-derive the threshold for the histology in front of you.',
          },
        ],
      },
      {
        id: 'ch30-s4',
        title: 'Applying Thresholds and Controversies at the Bedside',
        blocks: [
          {
            type: 'text',
            content:
              'Translating guidelines into a plan means combining the **numeric thresholds** (PCI, CC target, histology-specific limits) with the **individual modifiers** the guideline cannot know: performance status, comorbidity, small-bowel and mesenteric-root involvement (the true resectability-limiting factor), response to systemic therapy, molecular profile (BRAF, MSI, BRCA, BAP1), and — decisively — the patient’s own values. A guideline sets the outer fence; the patient-specific factors decide where inside that fence you actually stand.',
          },
          {
            type: 'table',
            title: 'Threshold-to-bedside translation',
            headers: ['Parameter', 'Common guideline anchor', 'Bedside modifiers that override it'],
            rows: [
              [
                'PCI (colorectal)',
                '≤20 favourable; >20 relative contraindication',
                'Small-bowel/mesenteric-root disease; response to chemo; molecular profile',
              ],
              [
                'PCI (PMP low-grade)',
                'No effective upper limit',
                'Ability to achieve CC-0; morbidity of extensive resection',
              ],
              [
                'CC target',
                'CC-0 (or CC-1 for HIPEC penetration)',
                'If CC-0/1 unattainable, abort HIPEC — the operation loses intent',
              ],
              [
                'Gastric PM',
                'CRS+HIPEC only in trials',
                'PCI, signet-ring histology, chemo-response, region-specific practice',
              ],
              [
                'Histology (mesothelioma)',
                'Epithelioid → offer CRS+HIPEC',
                'Sarcomatoid → contraindication; BAP1 status; PS',
              ],
            ],
            ref: 'Synthesised from PSOGI, Chicago Consensus, NCCN, ESMO thresholds.',
          },
          {
            type: 'text',
            content:
              'Three controversies you must be able to argue. **(1) Should HIPEC be given after complete CRS for colorectal PM?** Defensible position: not routinely with 30-minute oxaliplatin (PRODIGE 7), but the question of mitomycin-C HIPEC remains genuinely open; decide by MDT and enrol in trials. **(2) Is there any role for prophylactic HIPEC?** Defensible position: no, as routine practice (COLOPEC, PROPHYLOCHIP), with CYTO-CHIP a hypothesis for a future RCT. **(3) Should gastric PM ever be operated with HIPEC?** Defensible position: only within trials or in an ultra-selected, chemo-responsive, low-PCI patient at an expert centre, acknowledging GASTRICHIP’s null result. In every case, the honest answer names the trial, the caveat, and the MDT.',
          },
          {
            type: 'pearl',
            title: 'The threshold opens the conversation, it does not close it',
            content:
              'A patient who meets every numeric criterion may still be a poor candidate (frailty, diffuse small-bowel disease), and a patient who breaches a threshold may still benefit (low-grade PMP at PCI 39). Use thresholds to *structure* the MDT discussion, never to *replace* it.',
          },
        ],
      },
      {
        id: 'ch30-s5',
        title: 'The MDT as Final Arbiter',
        blocks: [
          {
            type: 'text',
            content:
              'The multidisciplinary team is where evidence, guideline, and individual patient converge into a single decision — and it is, correctly, the final arbiter. The peritoneal MDT should include peritoneal/surgical oncology, medical oncology, radiology (ideally with DWI-MRI expertise), pathology, and, for the relevant tumours, gynaecologic oncology; palliative care and specialist nursing add the values dimension. Its job is to reconcile a cautious NCCN algorithm, a permissive ESMO stance, a PSOGI classification, and a specific PCI/CC/histology profile into one recommendation, then present it to the patient in **absolute terms** with the alternatives.',
          },
          {
            type: 'trial',
            title: 'Why the MDT is evidence-anchored, not opinion-driven',
            content:
              'The consensus documents themselves (PSOGI, Chicago) mandate MDT decision-making precisely because no single trial covers the individual patient. Rovers’ PSOGI consensus made "MDT decision mandatory" its first recommendation — the guideline’s own conclusion is that the guideline is insufficient without the team.',
            ref: 'Rovers KP, et al. Eur J Cancer 2020;139:227–236; Bhatt A, et al. Ann Surg Oncol 2020;27(5):1561–1578.',
          },
          {
            type: 'list',
            title: 'What a good peritoneal MDT actually adjudicates',
            items: [
              'Is complete cytoreduction (CC-0/1) realistically achievable? — the pivotal question',
              'Does the histology and molecular profile change the threshold or the systemic backbone?',
              'Has systemic therapy been optimised and has the disease declared its biology?',
              'Do the patient’s fitness and values support a major operation for this absolute gain?',
              'Is a clinical trial the most appropriate, most honest option?',
            ],
          },
          {
            type: 'pitfall',
            title: 'Outsourcing judgement to the algorithm',
            content:
              'The failure mode of guideline medicine is the reflexive "the protocol says yes/no." Guidelines are built from populations; the MDT exists to apply them to a person. When the guideline is silent, divergent, or based on weak consensus — which is often, in this field — the MDT’s reasoned, documented judgement *is* the standard of care.',
          },
          {
            type: 'quote',
            content:
              '"Guidelines inform the decision; the multidisciplinary team, sitting with this patient’s scans, pathology, biology and wishes, makes it. Evidence is the map — the MDT is the navigator."',
            ref: 'Teaching synthesis, Evidence & Trials track.',
          },
        ],
      },
    ],
  },
]
