import type { LearnChapter } from '../../types/learn'

// ─────────────────────────────────────────────────────────────────────────────
// ACADEMIC SURGERY TRACK — Research Methodology & Biostatistics
// Chapters 31–37 · residency-course format for surgical residents/fellows
// becoming academic surgeons. Surgical-oncology examples throughout
// (peritoneal surface oncology / CRS+HIPEC where natural).
// Sources: IDEAL Framework (Lancet 2009/2019) · PRISMA 2020 · CONSORT 2010 ·
//          STROBE 2007 · ICMJE Recommendations 2024 · Cochrane Handbook v6.5 ·
//          Declaration of Helsinki 2013 · GRADE Working Group.
// ─────────────────────────────────────────────────────────────────────────────

export const ACADEMIC_RESEARCH_CHAPTERS: LearnChapter[] = [
  // ── CHAPTER 31 ──────────────────────────────────────────────────────────────
  {
    id: 'ch31-research-question-design',
    number: '31',
    title: 'The Research Question & Study Design',
    subtitle: 'FINER, PICO, the evidence hierarchy, and matching the design to the surgical question',
    icon: 'HelpCircle',
    reading_time_min: 28,
    level: 'Core',
    track: 'Academic Surgery',
    guidelines_version: 'Oxford CEBM Levels of Evidence 2011 · STROBE 2007 · Hulley Designing Clinical Research 4th ed.',
    learning_objectives: [
      'Formulate a research question using the FINER criteria and structure it with PICO(T)',
      'Rank study designs within the hierarchy of evidence and state the limits of that hierarchy',
      'Distinguish RCT, cohort, case-control, and cross-sectional designs and when each fits a surgical question',
      'Recognise the major observational biases — selection, information, confounding, immortal-time — with surgical examples',
      'Choose an appropriate design for a given peritoneal-oncology question and justify the trade-offs',
    ],
    key_references: [
      'Cummings SR, Browner WS, Hulley SB. Conceiving the research question. In: Designing Clinical Research, 4th ed. 2013.',
      'OCEBM Levels of Evidence Working Group. The Oxford 2011 Levels of Evidence. CEBM.',
      'von Elm E, et al. STROBE Statement. Lancet 2007;370:1453–1457.',
    ],
    sections: [
      {
        id: 'ch31-s1',
        title: 'From Curiosity to a Researchable Question',
        blocks: [
          {
            type: 'text',
            content:
              'Every study begins as a clinical irritation — a patient who did badly, a practice that varies between colleagues, a guideline that rests on thin evidence. The academic skill is to convert that irritation into a **single, answerable question** before any data are touched. A vague question ("Is HIPEC good in colorectal disease?") cannot be designed, powered, or analysed. A sharp question ("In patients with colorectal peritoneal metastases and PCI ≤ 15 undergoing complete CRS, does the addition of oxaliplatin HIPEC versus no HIPEC change overall survival at 5 years?") dictates its own methodology.',
          },
          {
            type: 'text',
            content:
              'The **FINER** criteria are the standard filter for a worthwhile question: it should be **F**easible, **I**nteresting, **N**ovel, **E**thical, and **R**elevant. Feasibility is where most trainee projects fail — the disease is too rare, the follow-up too long, the funding absent. In peritoneal surface oncology, single-centre case volumes are small, which is exactly why collaborative registries and multicentre designs dominate the literature.',
          },
          {
            type: 'list',
            title: 'The FINER criteria — interrogate each before committing',
            items: [
              'Feasible — adequate case numbers, technical expertise, funding, and a realistic timeline; run the numbers before you promise them',
              'Interesting — to you, to your mentors, and to the field that will peer-review it',
              'Novel — confirms, refutes, or extends prior work; a systematic search precedes every protocol',
              'Ethical — an honest state of equipoise exists and the burden on participants is justifiable',
              'Relevant — the answer will change practice, policy, or the direction of further research',
            ],
          },
          {
            type: 'text',
            content:
              'The question is then formalised with **PICO** — Population, Intervention, Comparator, Outcome — often extended to **PICOT** by adding Time horizon, and to **PICOTS** by adding Setting. PICO is not merely a writing device: each element maps directly onto a design decision. The Population defines eligibility and external validity; the Comparator defines the counterfactual and is the element most often left implicit and therefore most often wrong; the Outcome dictates the statistical test and the sample size.',
          },
          {
            type: 'table',
            title: 'PICO(T) applied to a peritoneal-oncology question',
            headers: ['Element', 'Definition', 'Worked example'],
            rows: [
              ['P — Population', 'Who is studied; eligibility criteria', 'Adults with colorectal peritoneal metastases, PCI ≤ 15, fit for surgery'],
              ['I — Intervention', 'The exposure/treatment of interest', 'Complete CRS plus oxaliplatin HIPEC'],
              ['C — Comparator', 'The explicit counterfactual', 'Complete CRS alone (no HIPEC)'],
              ['O — Outcome', 'Pre-specified, measurable endpoint', 'Overall survival at 5 years'],
              ['T — Time', 'Follow-up horizon / timing', '5-year follow-up from randomisation'],
            ],
            ref: 'Structure after Richardson WS, et al. ACP J Club 1995; applied to PRODIGE 7.',
          },
          {
            type: 'pearl',
            title: 'Write the comparator down first',
            content:
              'Trainees over-specify the intervention and under-specify the comparator. "No HIPEC" is ambiguous — does it mean surgery alone, surgery plus adjuvant systemic therapy, or best supportive care? The comparator defines the clinical question you are actually answering. If you cannot state the counterfactual in one sentence, you do not yet have a study.',
          },
        ],
      },
      {
        id: 'ch31-s2',
        title: 'The Hierarchy of Evidence — and Its Limits',
        blocks: [
          {
            type: 'text',
            content:
              'Study designs are conventionally ranked by their vulnerability to bias, producing the familiar **evidence pyramid**. At the apex sit systematic reviews and meta-analyses of randomised trials, then the individual RCT, then cohort studies, case-control studies, cross-sectional studies and case series, with expert opinion and mechanistic reasoning at the base. The ranking reflects internal validity — the confidence that the observed effect is causal rather than confounded.',
          },
          {
            type: 'table',
            title: 'Hierarchy of evidence (simplified from Oxford CEBM 2011)',
            headers: ['Level', 'Design', 'Answers best'],
            rows: [
              ['1', 'Systematic review / meta-analysis of RCTs', 'Overall treatment effect across studies'],
              ['2', 'Individual randomised controlled trial', 'Does the intervention cause the outcome?'],
              ['3', 'Prospective cohort study', 'Prognosis, incidence, harm over time'],
              ['4', 'Case-control study', 'Rare outcomes; risk-factor exploration'],
              ['4', 'Cross-sectional study', 'Prevalence, diagnostic accuracy'],
              ['5', 'Case series / case report', 'Novel observation, hypothesis generation'],
            ],
            ref: 'OCEBM Levels of Evidence Working Group, 2011.',
          },
          {
            type: 'text',
            content:
              'The pyramid is a heuristic, not a law. A well-conducted cohort study can outrank a small, biased, or irrelevant RCT — GRADE (Chapter 35) formalises this by allowing evidence to be rated up or down on its actual conduct rather than its label. Crucially, **the best design depends on the question**. RCTs answer questions of therapeutic efficacy; they are the wrong tool for prognosis, for prevalence, for rare harms, and for questions where randomisation is unethical or impossible.',
          },
          {
            type: 'pitfall',
            title: 'The pyramid does not apply to every question type',
            content:
              'Do not demand an RCT of a prognostic or diagnostic question. You cannot randomise a patient to "have a high PCI" or "carry a BRAF mutation." For prognosis, a well-designed prospective cohort is the highest attainable level; for the accuracy of a staging laparoscopy, a cross-sectional diagnostic-accuracy study against a reference standard is the correct apex. Ranking a cohort study as "weak" for a question that no RCT can ethically answer is a category error.',
          },
          {
            type: 'quote',
            content:
              'Absence of evidence is not evidence of absence. A surgical practice unsupported by a randomised trial is not thereby refuted — it may simply be untested, or untestable.',
            ref: 'Altman DG, Bland JM. BMJ 1995;311:485.',
          },
        ],
      },
      {
        id: 'ch31-s3',
        title: 'The Core Designs and When Each Fits',
        blocks: [
          {
            type: 'text',
            content:
              'Four analytic designs cover most clinical research. The **randomised controlled trial** allocates exposure by chance, balancing measured and unmeasured confounders and licensing causal inference. The **cohort study** follows exposed and unexposed groups forward to outcomes — it is the natural design for prognosis and for harms. The **case-control study** starts from the outcome and looks backward at exposures — efficient for rare outcomes. The **cross-sectional study** measures exposure and outcome simultaneously — the design for prevalence and diagnostic accuracy.',
          },
          {
            type: 'table',
            title: 'Design selection matrix for surgical questions',
            headers: ['Design', 'Direction', 'Best question', 'Key weakness'],
            rows: [
              ['RCT', 'Forward, randomised', 'Efficacy of an intervention', 'Cost, feasibility, external validity, blinding limits'],
              ['Prospective cohort', 'Exposure → outcome', 'Prognosis, incidence, long-term harm', 'Confounding; loss to follow-up'],
              ['Retrospective cohort', 'Outcome recorded, look back', 'Efficient prognosis from existing records', 'Data quality; missing data; confounding'],
              ['Case-control', 'Outcome → exposure', 'Rare outcomes; multiple risk factors', 'Recall & selection bias; no incidence'],
              ['Cross-sectional', 'Simultaneous', 'Prevalence; diagnostic accuracy', 'No temporality; cannot infer causation'],
            ],
            ref: 'Adapted from Grimes DA, Schulz KF. Lancet 2002;359:57–61.',
          },
          {
            type: 'trial',
            title: 'PRODIGE 7 — why the question demanded an RCT',
            content:
              'The question "does adding oxaliplatin HIPEC to complete cytoreduction prolong survival?" is a pure efficacy question with a plausible but unproven benefit and genuine equipoise — the textbook indication for an RCT. PRODIGE 7 randomised 265 patients with colorectal peritoneal metastases after complete CRS to HIPEC or no HIPEC and found no overall-survival difference (41.7 vs 41.2 months), overturning a belief built almost entirely on uncontrolled cohort data. No cohort study, however large, could have delivered that answer with equal confidence.',
            ref: 'Quenet F, et al. Lancet Oncol 2021;22(2):256–266.',
          },
          {
            type: 'trial',
            title: 'When randomisation is impossible — the registry cohort',
            content:
              'You cannot randomise patients to develop peritoneal metastases, nor ethically to a CC-2 incomplete cytoreduction. Questions about the prognostic weight of PCI, small-bowel involvement, or completeness of cytoreduction are answered by large prospective cohorts and registries (BIG-RENAPE, PSOGI). These designs accept residual confounding as the price of answering questions no trial can address, and mitigate it with multivariable adjustment and propensity methods (Chapter 34).',
            ref: 'Glehen O, et al. BIG-RENAPE registry; Ann Surg Oncol.',
          },
        ],
      },
      {
        id: 'ch31-s4',
        title: 'Bias in Observational Research',
        blocks: [
          {
            type: 'text',
            content:
              'Observational designs trade feasibility for vulnerability to **bias** — a systematic (non-random) error that distorts the estimated effect and, unlike random error, is not reduced by a larger sample. The three classical families are **selection bias** (how participants entered the study), **information (measurement) bias** (how exposures and outcomes were recorded), and **confounding** (a third variable associated with both exposure and outcome). Surgical series are especially prone to selection bias because the surgeon chooses who is operated on.',
          },
          {
            type: 'list',
            title: 'Biases that recur in surgical-oncology cohorts',
            items: [
              'Selection bias — only fit, low-PCI patients reach cytoreduction, inflating apparent survival of the operated group',
              'Confounding by indication — sicker patients receive (or are denied) an intervention, entangling treatment with prognosis',
              'Immortal-time bias — survival "banked" before an exposure can occur (e.g. counting time before adjuvant HIPEC as exposed time)',
              'Lead-time bias — earlier detection by intensive surveillance lengthens measured survival without changing the disease course',
              'Information/recall bias — retrospective exposure ascertainment differs between those with and without the outcome',
              'Loss to follow-up (attrition) bias — differential dropout between groups distorts the comparison',
            ],
          },
          {
            type: 'pitfall',
            title: 'Immortal-time bias makes ineffective treatments look protective',
            content:
              'If patients must survive long enough to receive a second-look procedure or adjuvant HIPEC, then time spent waiting is "immortal" — by definition they were alive to be treated. Attributing that guaranteed survival to the treatment fabricates a benefit. The fix is a time-dependent exposure variable or a landmark analysis, not a naive treated-versus-untreated comparison.',
          },
          {
            type: 'pearl',
            title: 'Confounding is adjustable; bias baked in by design usually is not',
            content:
              'Measured confounding can be tamed at analysis with multivariable regression or propensity scores. Selection and information bias, once built into how the cohort was assembled and measured, generally cannot be fixed after the fact — they must be prevented by design. Randomisation is powerful precisely because it neutralises even the confounders you never measured. Spend your design effort where the analysis cannot rescue you.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 32 ──────────────────────────────────────────────────────────────
  {
    id: 'ch32-surgical-rcts',
    number: '32',
    title: 'Clinical Trial Design & Surgical RCTs',
    subtitle: 'Phases, randomisation, the IDEAL framework, endpoints, power, and equipoise',
    icon: 'FlaskConical',
    reading_time_min: 30,
    level: 'Advanced',
    track: 'Academic Surgery',
    guidelines_version: 'IDEAL Framework 2009/2019 · CONSORT 2010 · SPIRIT 2013 · ICH-GCP E6(R2)',
    learning_objectives: [
      'Describe the phases of clinical trials and how surgical innovation departs from the drug-trial model',
      'Explain randomisation methods, allocation concealment, and the specific limits of blinding in surgery',
      'Apply the IDEAL framework to stage the evaluation of a surgical innovation',
      'Select appropriate oncological endpoints (OS, PFS, RFS, QoL) and understand surrogate-endpoint pitfalls',
      'Perform the logic of a sample-size/power calculation and distinguish pragmatic from explanatory trials',
    ],
    key_references: [
      'McCulloch P, et al. No surgical innovation without evaluation: the IDEAL recommendations. Lancet 2009;374:1105–1112.',
      'Hirst A, et al. IDEAL 2.0 framework. Ann Surg 2019;269:211–220.',
      'Schulz KF, Altman DG, Moher D. CONSORT 2010 Statement. BMJ 2010;340:c332.',
    ],
    sections: [
      {
        id: 'ch32-s1',
        title: 'Trial Phases and Why Surgery Is Different',
        blocks: [
          {
            type: 'text',
            content:
              'The pharmaceutical model runs from **phase I** (first-in-human safety and dose-finding), through **phase II** (preliminary efficacy and further safety in a small group), to **phase III** (confirmatory efficacy versus standard of care in a large randomised trial), and **phase IV** (post-marketing surveillance). This scaffolding maps awkwardly onto surgery. A new operation has no "dose," its effect is inseparable from the surgeon performing it, and it evolves during its own evaluation — the procedure of year five is not the procedure of year one.',
          },
          {
            type: 'table',
            title: 'Trial phases and their surgical analogues',
            headers: ['Phase', 'Drug-trial purpose', 'Surgical parallel'],
            rows: [
              ['Phase I', 'Safety, dose-finding, pharmacokinetics', 'First-in-human feasibility; technical safety (IDEAL 1–2a)'],
              ['Phase II', 'Preliminary efficacy, further safety', 'Development & exploration; learning curve (IDEAL 2b–3)'],
              ['Phase III', 'Confirmatory RCT vs standard of care', 'Assessment: the surgical RCT (IDEAL 3)'],
              ['Phase IV', 'Post-marketing surveillance', 'Long-term monitoring; registries (IDEAL 4)'],
            ],
            ref: 'Mapping after McCulloch P, et al. Lancet 2009.',
          },
          {
            type: 'text',
            content:
              'Three features make surgical trials distinctive. First, the **learning curve**: outcomes improve with operator experience, so a procedure evaluated too early looks worse than its mature form. Second, **standardisation**: unlike a fixed drug dose, an operation varies between surgeons and centres, demanding explicit fidelity criteria. Third, **blinding is often impossible** — the operating team always knows the allocation. These are not excuses to abandon rigour; they are the reasons a surgery-specific framework was created.',
          },
        ],
      },
      {
        id: 'ch32-s2',
        title: 'Randomisation, Allocation Concealment, and Blinding',
        blocks: [
          {
            type: 'text',
            content:
              '**Randomisation** is the defining feature of the RCT: allocating treatment by chance balances known and unknown confounders across groups, so that any outcome difference can be attributed to the intervention. Simple randomisation (a coin flip) can leave groups unbalanced in small trials; **block randomisation** keeps arm sizes similar; **stratified randomisation** ensures balance on strong prognostic factors (in peritoneal disease, PCI band, histology, or centre); **minimisation** dynamically balances multiple factors and is common in surgical trials with modest sample sizes.',
          },
          {
            type: 'text',
            content:
              'Randomisation must be distinguished from **allocation concealment** — ensuring the person enrolling a patient cannot foresee the next assignment. Concealment protects the randomisation at the moment of enrolment (via central/web-based systems or sealed opaque envelopes) and is empirically associated with less exaggerated effect estimates. **Blinding**, by contrast, prevents knowledge of the assigned treatment *after* allocation, protecting outcome assessment and behaviour. The two are frequently and wrongly conflated.',
          },
          {
            type: 'table',
            title: 'Randomisation methods at a glance',
            headers: ['Method', 'How it works', 'When to use'],
            rows: [
              ['Simple', 'Each patient allocated independently at random', 'Large trials (n > 200)'],
              ['Block', 'Random within fixed-size blocks', 'Keeps arms balanced in smaller trials'],
              ['Stratified', 'Separate randomisation lists per stratum', 'Strong prognostic factors (PCI, histology, centre)'],
              ['Minimisation', 'Allocates to minimise imbalance across factors', 'Multiple prognostic factors, modest n — common in surgery'],
            ],
            ref: 'Schulz KF, Grimes DA. Lancet 2002;359:515–519.',
          },
          {
            type: 'pitfall',
            title: 'You cannot blind the surgeon — so blind everyone you can',
            content:
              'The operating team inevitably knows the allocation, which risks performance bias (co-interventions differing by arm) and detection bias (outcome assessed differently by arm). Mitigate what you can: blind the outcome assessor, the pathologist, the data analyst, and — where feasible — the patient (sham incisions have been used ethically in select trials). Use hard, objective endpoints (overall survival) that are resistant to assessor bias rather than soft ones vulnerable to it.',
          },
          {
            type: 'pearl',
            title: 'Report the balance table, but do not test it',
            content:
              'Baseline characteristics are shown in Table 1 to let readers judge comparability, but running significance tests on them is a documented error — in a properly randomised trial any imbalance is by definition due to chance, so a p-value for it is meaningless. CONSORT explicitly discourages significance testing of baseline differences. Adjust for a strong prognostic factor if it was pre-specified, not because a baseline test came up "significant."',
          },
        ],
      },
      {
        id: 'ch32-s3',
        title: 'The IDEAL Framework for Surgical Innovation',
        blocks: [
          {
            type: 'text',
            content:
              'The **IDEAL framework** (Balliol Collaboration, Lancet 2009; updated 2019) provides the staged evaluation pathway that the phase model lacks for surgery. Its slogan — "no surgical innovation without evaluation" — responds to a history of operations that diffused into practice without any controlled comparison. Each stage has a matched study design and reporting expectation, so that a new technique is followed prospectively from first use to definitive trial and long-term surveillance.',
          },
          {
            type: 'table',
            title: 'The IDEAL stages',
            headers: ['Stage', 'Name', 'Question / design'],
            rows: [
              ['1', 'Idea', 'First-in-human proof of concept — structured case report'],
              ['2a', 'Development', 'Technique refined in a few patients — prospective case series'],
              ['2b', 'Exploration', 'Wider use, learning curve, standardisation — prospective cohort / feasibility RCT'],
              ['3', 'Assessment', 'Definitive comparison — randomised controlled trial'],
              ['4', 'Long-term study', 'Rare harms, durability, real-world outcomes — registry / surveillance'],
            ],
            ref: 'Hirst A, et al. Ann Surg 2019; McCulloch P, et al. Lancet 2009.',
          },
          {
            type: 'trial',
            title: 'PIPAC — a technology mapped onto IDEAL',
            content:
              'Pressurised intraperitoneal aerosol chemotherapy illustrates IDEAL in real time: first-in-human reports (stage 1), single-arm feasibility and safety series defining the technique and its learning curve (stage 2a–2b), and now randomised trials against standard systemic therapy (stage 3), with international registries capturing long-term and rare outcomes (stage 4). Reading the PIPAC literature through the IDEAL lens tells you exactly how much weight each paper can bear.',
            ref: 'Alyami M, et al. Lancet Oncol 2019;20:e368–e377 (PIPAC review, IDEAL framing).',
          },
          {
            type: 'pitfall',
            title: 'Publishing a stage-2 series as if it were evidence of efficacy',
            content:
              'A single-arm series with impressive survival is IDEAL stage 2 — hypothesis-generating, not confirmatory. Presenting it as proof that an operation "works" is the exact error IDEAL was written to stop. Uncontrolled survival in a self-selected surgical cohort is confounded by selection; only stage 3 (randomisation) or, at minimum, rigorously adjusted comparative cohorts can support efficacy claims.',
          },
        ],
      },
      {
        id: 'ch32-s4',
        title: 'Endpoints, Sample Size, and Trial Pragmatism',
        blocks: [
          {
            type: 'text',
            content:
              'The **endpoint** is the outcome the trial is designed to detect. In surgical oncology the gold standard is **overall survival (OS)** — unambiguous, patient-centred, and immune to assessor bias — but it demands long follow-up and large samples. **Progression-free survival (PFS)** and **recurrence-free survival (RFS/DFS)** are faster surrogates but assume that delaying progression translates into living longer or better, an assumption that must be justified, not presumed. **Quality of life (QoL)** and patient-reported outcomes capture the burden of aggressive surgery that survival curves conceal.',
          },
          {
            type: 'table',
            title: 'Oncological endpoints — what each measures',
            headers: ['Endpoint', 'Definition', 'Strength / caution'],
            rows: [
              ['OS', 'Time from randomisation to death (any cause)', 'Gold standard, bias-resistant / needs long follow-up, large n'],
              ['PFS', 'Time to progression or death', 'Faster / surrogate; assessment can be biased if unblinded'],
              ['RFS / DFS', 'Time to recurrence or death after curative-intent surgery', 'Relevant to CRS / adjuvant questions / definition-sensitive'],
              ['QoL / PRO', 'Patient-reported functioning and symptoms', 'Captures morbidity of major surgery / missing-data prone'],
              ['Morbidity (Clavien-Dindo)', 'Graded postoperative complications', 'Safety signal / needs standardised, blinded grading'],
            ],
            ref: 'Endpoint conventions per EMA/FDA oncology guidance; Clavien-Dindo Ann Surg 2004.',
          },
          {
            type: 'text',
            content:
              'A **sample-size calculation** ties the endpoint to feasibility. Four quantities are locked together: the **effect size** you want to detect (e.g. an HR of 0.70, or a 10-month OS difference), the **significance level α** (type I error, conventionally 0.05 — a false positive), the **power 1−β** (conventionally 0.80–0.90 — the probability of detecting a true effect; β is the type II / false-negative rate), and the outcome variance or event rate. Increasing power or shrinking the detectable effect inflates the required sample — the central tension of trial design.',
          },
          {
            type: 'list',
            title: 'The four ingredients of a power calculation',
            items: [
              'Effect size — the smallest clinically important difference worth detecting (not the biggest you hope for)',
              'Alpha (α) — type I error, the risk of a false-positive result (usually 0.05, two-sided)',
              'Power (1−β) — the probability of detecting a true effect (usually 0.80 or 0.90)',
              'Variability / event rate — outcome standard deviation, or the number of events (for time-to-event trials, events drive power, not patients)',
            ],
          },
          {
            type: 'pitfall',
            title: 'An underpowered trial is not a small answer — it is often no answer',
            content:
              'A trial powered to detect only an implausibly large effect will return a non-significant result whether or not the treatment truly works. Reporting that as "no difference" confuses absence of evidence with evidence of absence. Worse, small "positive" trials exaggerate effect sizes (the winner\'s curse). For rare diseases like peritoneal malignancy, this is the argument for multicentre collaboration and event-driven, not patient-driven, targets.',
          },
          {
            type: 'text',
            content:
              'Finally, trials sit on a spectrum from **explanatory** to **pragmatic**. An explanatory trial asks whether an intervention *can* work under ideal, tightly controlled conditions (strict eligibility, expert centres, per-protocol delivery) — high internal validity, limited generalisability. A **pragmatic** trial asks whether it *does* work in routine practice (broad eligibility, real-world centres, intention-to-treat) — high external validity at the cost of a diluted, more variable effect. The PRECIS-2 tool grades a design along this continuum.',
          },
          {
            type: 'pearl',
            title: 'Analyse by intention-to-treat, interpret with per-protocol',
            content:
              'Intention-to-treat (analyse patients in the arm to which they were randomised, regardless of what they received) preserves the benefits of randomisation and gives the unbiased, real-world estimate — it is the primary analysis. Per-protocol (only those who completed the assigned treatment) estimates biological efficacy but reintroduces selection bias. Report both; when they diverge, the gap is itself informative about crossovers, dropouts, and deliverability.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 33 ──────────────────────────────────────────────────────────────
  {
    id: 'ch33-biostatistics-foundations',
    number: '33',
    title: 'Biostatistics I — Foundations',
    subtitle: 'Variables, distributions, descriptive statistics, confidence intervals, p-values, and choosing a test',
    icon: 'Sigma',
    reading_time_min: 27,
    level: 'Core',
    track: 'Academic Surgery',
    guidelines_version: 'Altman Practical Statistics for Medical Research · SAMPL guidelines 2013 · ASA Statement on p-values 2016',
    learning_objectives: [
      'Classify variables and match summary statistics to variable type and distribution',
      'Interpret the normal distribution, skew, and the role of the central limit theorem',
      'Read a confidence interval as a statement of precision and clinical relevance',
      'State what a p-value is and is not, and avoid the common misinterpretations',
      'Select an appropriate univariable test using a structured test-selection table',
    ],
    key_references: [
      'Altman DG. Practical Statistics for Medical Research. Chapman & Hall, 1991.',
      'Wasserstein RL, Lazar NA. The ASA Statement on p-values. Am Stat 2016;70:129–133.',
      'Lang TA, Altman DG. Basic statistical reporting (SAMPL guidelines). 2013.',
    ],
    sections: [
      {
        id: 'ch33-s1',
        title: 'Variable Types and Distributions',
        blocks: [
          {
            type: 'text',
            content:
              'Every statistical choice starts with the **type of variable**, because the type dictates both the summary statistic and the test. Variables are broadly **categorical** or **numerical**. Categorical variables are **nominal** (unordered categories — histological subtype, HIPEC drug) or **ordinal** (ordered but non-uniform intervals — Clavien-Dindo grade, ECOG performance status). Numerical variables are **discrete** (counts — number of resected regions) or **continuous** (measured on a scale — PCI, operative time, albumin).',
          },
          {
            type: 'table',
            title: 'Variable types and their natural summaries',
            headers: ['Type', 'Example (peritoneal oncology)', 'Summary statistic'],
            rows: [
              ['Nominal', 'Tumour origin (colorectal/appendiceal/gastric)', 'Counts, proportions'],
              ['Ordinal', 'Clavien-Dindo grade; ECOG', 'Median, range, frequencies'],
              ['Discrete numerical', 'Number of anastomoses', 'Median (IQR) or mean if symmetric'],
              ['Continuous (normal)', 'Serum albumin', 'Mean ± SD'],
              ['Continuous (skewed)', 'PCI; length of stay', 'Median (IQR)'],
            ],
            ref: 'After Altman DG, 1991.',
          },
          {
            type: 'text',
            content:
              'The **normal (Gaussian) distribution** — the symmetric bell curve defined by its mean and standard deviation — underlies much of classical statistics. Many biological variables approximate it, but many surgical variables do not: PCI, length of stay, and operative time are typically **right-skewed** (a long tail of high values). The **central limit theorem** rescues us: the *mean* of a large enough sample is approximately normal even when the underlying data are not, which is why tests on means are robust in large samples but treacherous in small skewed ones.',
          },
          {
            type: 'pitfall',
            title: 'Reporting mean ± SD for skewed data misleads',
            content:
              'Length of stay of "8.4 ± 11 days" implies patients staying negative days — a sign the data are skewed and the mean is the wrong summary. For skewed distributions report the **median and interquartile range**, which are unaffected by the long tail. Always inspect a histogram before choosing between mean and median; do not assume normality from the sample size alone.',
          },
        ],
      },
      {
        id: 'ch33-s2',
        title: 'Confidence Intervals and Effect Size',
        blocks: [
          {
            type: 'text',
            content:
              'A point estimate (a median survival, a hazard ratio, a difference in complication rates) is only half the story; its **precision** matters as much as its value. The **95% confidence interval (CI)** is the range that, over repeated identical studies, would contain the true value 95% of the time. Pragmatically, it is the set of effect sizes compatible with the data. A wide CI signals imprecision — usually a small sample or few events — and should temper any confident conclusion.',
          },
          {
            type: 'text',
            content:
              'The **effect size** — how large the difference is — is distinct from statistical significance, which only tells you how surprising the data would be under the null hypothesis. A trivial difference can be highly significant in a huge sample; a clinically important difference can be non-significant in a small one. Report effect sizes with CIs (mean difference, relative risk, odds ratio, hazard ratio, or standardised differences) and interpret them against a pre-specified **minimal clinically important difference**, not against p = 0.05 alone.',
          },
          {
            type: 'pearl',
            title: 'Read the confidence interval before the p-value',
            content:
              'The CI carries everything the p-value does and more: whether the result is statistically significant (does the interval cross the null value — 0 for differences, 1 for ratios?), how large the effect plausibly is, and how precise the estimate is. A hazard ratio of 0.62 (95% CI 0.40–0.96) and one of 0.62 (95% CI 0.30–1.28) tell very different stories despite the identical point estimate. Train yourself to look at the interval first.',
          },
          {
            type: 'quote',
            content:
              'The p-value was never intended to be a substitute for scientific reasoning. By itself, a p-value does not provide a good measure of evidence regarding a model or hypothesis.',
            ref: 'Wasserstein RL, Lazar NA. ASA Statement, Am Stat 2016.',
          },
        ],
      },
      {
        id: 'ch33-s3',
        title: 'The p-value and Its Misinterpretations',
        blocks: [
          {
            type: 'text',
            content:
              'The **p-value** is the probability of observing data at least as extreme as those seen, *assuming the null hypothesis is true*. It is a statement about data given a hypothesis — not about the hypothesis given the data. This subtlety is the source of nearly every misinterpretation in the clinical literature. A small p-value means the data are surprising under the null; it does not measure the size of an effect, the probability that the null is true, or the probability that a positive result will replicate.',
          },
          {
            type: 'list',
            title: 'What a p-value is NOT',
            items: [
              'NOT the probability that the null hypothesis is true',
              'NOT the probability that the result occurred by chance alone',
              'NOT a measure of the size or clinical importance of an effect',
              'NOT proof of "no difference" when p > 0.05 (that is failure to reject, not acceptance)',
              'NOT independent of sample size — large samples make trivial effects "significant"',
              'NOT a licence to dichotomise the world into "significant" and "not"',
            ],
          },
          {
            type: 'pitfall',
            title: 'p > 0.05 does not mean "no difference"',
            content:
              'A non-significant result means the study did not detect a difference — which, in an underpowered trial, is unsurprising even when a real effect exists. Declaring "the groups were equivalent" from p = 0.20 confuses absence of evidence with evidence of absence. If you want to claim equivalence or non-inferiority, you must design and power an equivalence/non-inferiority trial with a pre-specified margin; you cannot back into it from a failed superiority test.',
          },
          {
            type: 'pitfall',
            title: 'Multiplicity — testing everything guarantees false positives',
            content:
              'At α = 0.05, testing 20 independent subgroups or endpoints yields roughly one "significant" result by chance alone. Fishing through subgroups (does HIPEC help the left-sided, RAS-wildtype, PCI 6–10 subset?) and reporting the winners is p-hacking. Pre-specify primary and secondary endpoints, limit subgroup analyses, and correct for multiple comparisons (Bonferroni, false-discovery rate) when many tests are unavoidable.',
          },
        ],
      },
      {
        id: 'ch33-s4',
        title: 'Choosing the Right Test',
        blocks: [
          {
            type: 'text',
            content:
              'Univariable test selection follows a short decision tree: identify the **outcome type**, the **number of groups**, whether groups are **independent or paired**, and whether **distributional assumptions** (normality, equal variance) hold. Parametric tests (t-test, ANOVA, Pearson correlation) assume approximate normality and are more powerful when their assumptions hold; their non-parametric counterparts (Mann-Whitney, Kruskal-Wallis, Spearman) rank the data and are the safe choice for skewed continuous or ordinal outcomes.',
          },
          {
            type: 'table',
            title: 'Test-selection guide for two-group comparisons',
            headers: ['Outcome type', 'Two independent groups', 'Paired / repeated', 'Notes'],
            rows: [
              ['Continuous, normal', 'Independent t-test', 'Paired t-test', 'Check normality & equal variance'],
              ['Continuous, skewed / ordinal', 'Mann-Whitney U', 'Wilcoxon signed-rank', 'Rank-based, no normality needed'],
              ['Categorical (2×2), large n', 'Chi-square test', 'McNemar test', 'Expected cell count ≥ 5'],
              ['Categorical, small / sparse', 'Fisher exact test', 'McNemar (exact)', 'Use when any expected cell < 5'],
              ['≥ 3 groups, normal', 'One-way ANOVA', 'Repeated-measures ANOVA', 'Follow with post-hoc correction'],
              ['≥ 3 groups, skewed', 'Kruskal-Wallis', 'Friedman test', 'Non-parametric ANOVA analogue'],
              ['Time-to-event', 'Log-rank test', '—', 'See Chapter 34 (survival)'],
            ],
            ref: 'Synthesised from Altman DG 1991; SAMPL guidelines 2013.',
          },
          {
            type: 'pearl',
            title: 'Fisher over chi-square when cells are sparse',
            content:
              'The chi-square approximation degrades when expected cell counts fall below 5 — common in small surgical series and rare complications. Fisher exact test computes the probability directly and is valid regardless of cell size. For paired proportions (e.g. a complication before and after a protocol change in the same patients), neither applies — use McNemar test, which correctly handles the correlation within pairs.',
          },
          {
            type: 'pitfall',
            title: 'Do not apply an unpaired test to paired data',
            content:
              'Comparing the same patients before and after an intervention, or matched case-control pairs, with an independent-samples test ignores the within-pair correlation and misestimates the variance — usually inflating the type I error. Match the test to the design: paired data demand paired tests (paired t, Wilcoxon signed-rank, McNemar). The question "are these observations independent?" must be answered before any test is chosen.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 34 ──────────────────────────────────────────────────────────────
  {
    id: 'ch34-survival-regression',
    number: '34',
    title: 'Biostatistics II — Survival & Regression',
    subtitle: 'Kaplan-Meier, Cox models, hazard ratios, competing risks, logistic regression, and confounding',
    icon: 'TrendingDown',
    reading_time_min: 30,
    level: 'Advanced',
    track: 'Academic Surgery',
    guidelines_version: 'Cox 1972 · Kaplan-Meier 1958 · Fine-Gray 1999 · STROBE 2007 · TRIPOD 2015',
    learning_objectives: [
      'Construct and interpret a Kaplan-Meier curve and understand censoring',
      'Compare survival curves with the log-rank test and state its assumptions',
      'Interpret a Cox proportional-hazards model and the hazard ratio, and check the PH assumption',
      'Recognise competing risks and when Fine-Gray subdistribution methods are required',
      'Build a defensible multivariable model (logistic and Cox) and use propensity scores to reduce confounding',
    ],
    key_references: [
      'Kaplan EL, Meier P. Nonparametric estimation from incomplete observations. J Am Stat Assoc 1958;53:457–481.',
      'Cox DR. Regression models and life-tables. J R Stat Soc B 1972;34:187–220.',
      'Austin PC. An introduction to propensity score methods. Multivariate Behav Res 2011;46:399–424.',
    ],
    sections: [
      {
        id: 'ch34-s1',
        title: 'Kaplan-Meier and Censoring',
        blocks: [
          {
            type: 'text',
            content:
              'Survival analysis handles **time-to-event** outcomes where not everyone has reached the event by the end of follow-up. The defining feature is **censoring**: a patient alive at last contact, lost to follow-up, or still event-free at study closure contributes information up to that point but has an unknown eventual outcome. Ignoring censoring — for example, by computing a simple proportion alive — wastes data and biases the estimate. The **Kaplan-Meier estimator** builds the survival curve as a product of conditional survival probabilities at each event time, correctly incorporating censored observations.',
          },
          {
            type: 'text',
            content:
              'A Kaplan-Meier curve is read as the estimated probability of surviving beyond a given time; the steps fall at each event, and censored patients are marked as ticks. Report the **number at risk** beneath the time axis — as follow-up lengthens, the curve rests on ever-fewer patients and its right-hand tail becomes unreliable. **Median survival** is where the curve crosses 0.5; if the curve never reaches 0.5, median survival is "not reached" and should not be fabricated.',
          },
          {
            type: 'pitfall',
            title: 'Informative censoring breaks Kaplan-Meier',
            content:
              'The method assumes censoring is **non-informative** — that patients censored at any time have the same future risk as those still under observation. This fails if patients are lost precisely because they are deteriorating (or, conversely, because they are cured and stop attending). Differential loss to follow-up between treatment arms is a classic source of bias. Always report follow-up completeness and consider whether dropout is related to prognosis.',
          },
        ],
      },
      {
        id: 'ch34-s2',
        title: 'Log-rank Test and the Hazard Ratio',
        blocks: [
          {
            type: 'text',
            content:
              'To compare two or more survival curves, the **log-rank test** asks whether the observed events in each group differ from what would be expected if the groups shared a common survival experience. It is non-parametric and weights all time points equally, giving it good power when the hazard ratio is constant over time. It returns a p-value but not an effect size — it tells you *whether* curves differ, not by how much.',
          },
          {
            type: 'text',
            content:
              'The effect size for survival data is the **hazard ratio (HR)** — the ratio of the instantaneous event rate in one group to another. An HR of 0.62 means the intervention group experiences events at 62% of the comparator rate at any instant (a 38% relative reduction in hazard). An HR of 1 is no effect; below 1 favours the intervention (for a bad outcome); above 1 indicates harm. Crucially, an HR is a *relative* measure and, being an average over follow-up, can obscure curves that cross or diverge late.',
          },
          {
            type: 'table',
            title: 'Interpreting the hazard ratio',
            headers: ['HR (95% CI)', 'Meaning', 'Statistically significant?'],
            rows: [
              ['0.62 (0.40–0.96)', '38% lower hazard with treatment', 'Yes — CI excludes 1'],
              ['0.62 (0.34–1.13)', 'Point estimate favours treatment', 'No — CI includes 1'],
              ['1.00 (0.80–1.25)', 'No difference in hazard', 'No'],
              ['1.45 (1.10–1.91)', '45% higher hazard — harm', 'Yes — CI excludes 1'],
            ],
            ref: 'Interpretation conventions per Spruance SL, et al. Antimicrob Agents Chemother 2004.',
          },
          {
            type: 'pitfall',
            title: 'The log-rank test fails when curves cross',
            content:
              'If survival curves cross — early harm then late benefit, as sometimes seen when a morbid operation pays off only years later — the log-rank test can return a non-significant result despite a real, time-varying difference, because early and late effects cancel. Inspect the curves; if they cross, the proportional-hazards assumption is violated and neither the log-rank test nor a single HR summarises them honestly. Consider restricted mean survival time or landmark analysis instead.',
          },
        ],
      },
      {
        id: 'ch34-s3',
        title: 'Cox Regression and the Proportional-Hazards Assumption',
        blocks: [
          {
            type: 'text',
            content:
              'The **Cox proportional-hazards model** extends survival comparison to multiple covariates simultaneously, yielding an adjusted hazard ratio for each while accounting for the others. It is "semi-parametric" — it makes no assumption about the shape of the baseline hazard over time, which is why it is the workhorse of oncological survival analysis. In peritoneal disease, a Cox model routinely estimates the independent prognostic weight of PCI, completeness of cytoreduction, histological grade, and nodal status in one framework.',
          },
          {
            type: 'text',
            content:
              'The model rests on the **proportional-hazards assumption**: the hazard ratio between groups is constant over time. This must be checked, not assumed — via log-minus-log survival plots, Schoenfeld residuals, or an interaction of the covariate with time. When a covariate violates PH (its effect grows or shrinks over follow-up), remedies include stratifying on that covariate, adding a time-varying coefficient, or splitting follow-up into intervals. Reporting a single HR from a model with a violated assumption is a common and consequential error.',
          },
          {
            type: 'pearl',
            title: 'Events per variable — the rule of ten',
            content:
              'A Cox or logistic model needs roughly **10 events per candidate covariate** to produce stable, non-overfit estimates. With 40 deaths you can defensibly adjust for about four variables — not the fifteen a rich registry tempts you to include. Overfitting inflates apparent effects and produces coefficients that do not replicate. Pre-specify a parsimonious variable list on clinical grounds; do not let stepwise selection loose on fifty candidates and forty events.',
          },
        ],
      },
      {
        id: 'ch34-s4',
        title: 'Competing Risks, Logistic Regression, and Confounding',
        blocks: [
          {
            type: 'text',
            content:
              '**Competing risks** arise when a patient can experience an event that precludes the event of interest. If the outcome is cancer-specific death, then death from a postoperative complication or another cause is a competing event — it removes the patient from ever experiencing cancer death. Standard Kaplan-Meier treats competing events as ordinary censoring and thereby **overestimates** the cumulative incidence of the event of interest. The **cumulative incidence function** and the **Fine-Gray subdistribution hazard model** handle this correctly; use them whenever non-cancer death is common, as in elderly or high-morbidity CRS+HIPEC cohorts.',
          },
          {
            type: 'text',
            content:
              '**Logistic regression** models a binary outcome (30-day mortality, R0 resection, major complication) and returns **odds ratios**. It is the classification counterpart of Cox regression and follows the same discipline: adequate events per variable, pre-specified covariates, and checks for influential observations and multicollinearity. The odds ratio approximates the relative risk only when the outcome is rare; for common outcomes it exaggerates the association and should not be read as a risk ratio.',
          },
          {
            type: 'text',
            content:
              '**Confounding** is the central threat in every observational comparison: a variable associated with both the exposure and the outcome distorts the crude estimate. Adjustment strategies include **multivariable regression** (condition on the confounders in the model), **stratification**, **matching**, and — increasingly — **propensity-score methods**. The propensity score is each patient\'s modelled probability of receiving the treatment given their covariates; balancing on it (by matching, weighting with inverse-probability weights, or stratification) mimics some of what randomisation achieves for *measured* confounders.',
          },
          {
            type: 'table',
            title: 'Confounding-adjustment strategies compared',
            headers: ['Method', 'How it works', 'Best when'],
            rows: [
              ['Multivariable regression', 'Adjust by including confounders as covariates', 'Few confounders, enough events per variable'],
              ['Propensity-score matching', 'Match treated/untreated on probability of treatment', 'Many confounders, common treatment, adequate overlap'],
              ['Inverse-probability weighting', 'Weight patients by inverse of treatment probability', 'Retaining full sample; marginal effect estimates'],
              ['Stratification', 'Analyse within strata of the confounder', 'One or two strong categorical confounders'],
              ['Instrumental variables', 'Exploit a variable affecting treatment not outcome', 'Unmeasured confounding; valid instrument available'],
            ],
            ref: 'Austin PC. Multivariate Behav Res 2011; Brookhart MA, et al. Am J Epidemiol 2006.',
          },
          {
            type: 'pitfall',
            title: 'Propensity scores cannot balance what you did not measure',
            content:
              'A propensity model only balances the covariates you put into it. Unmeasured confounders — the surgeon\'s gestalt of who is "operable," frailty not captured in the chart, tumour biology beyond recorded markers — remain uncorrected. Propensity methods make an observational comparison *look* like a trial but do not confer randomisation\'s protection against unknown confounders. Report the standardised mean differences after matching to show balance was achieved, and never claim causation from a propensity analysis with the confidence appropriate to an RCT.',
          },
          {
            type: 'pitfall',
            title: 'Do not adjust for a mediator or a collider',
            content:
              'Adjustment is not always beneficial. Conditioning on a variable on the causal pathway (a **mediator** — e.g. adjusting for postoperative complications when studying how surgical approach affects survival) removes part of the effect you are trying to measure. Conditioning on a **collider** (a common effect of exposure and outcome) can create spurious associations. Draw a directed acyclic graph before choosing covariates; "adjust for everything available" is not a strategy, it is a source of bias.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 35 ──────────────────────────────────────────────────────────────
  {
    id: 'ch35-systematic-review-meta-analysis',
    number: '35',
    title: 'Systematic Reviews & Meta-Analysis',
    subtitle: 'PRISMA, search strategy, risk of bias, forest and funnel plots, heterogeneity, and GRADE',
    icon: 'Layers',
    reading_time_min: 28,
    level: 'Advanced',
    track: 'Academic Surgery',
    guidelines_version: 'PRISMA 2020 · Cochrane Handbook v6.5 · RoB 2 · ROBINS-I · GRADE',
    learning_objectives: [
      'Distinguish a systematic review from a narrative review and follow the PRISMA 2020 workflow',
      'Construct a reproducible search strategy and document study selection with a PRISMA flow diagram',
      'Appraise risk of bias with RoB 2 (randomised) and ROBINS-I (non-randomised) tools',
      'Read forest and funnel plots and quantify heterogeneity with I² and the choice of effect model',
      'Rate certainty of evidence with GRADE and recognise when meta-analysis is inappropriate',
    ],
    key_references: [
      'Page MJ, et al. The PRISMA 2020 statement. BMJ 2021;372:n71.',
      'Higgins JPT, et al. Cochrane Handbook for Systematic Reviews of Interventions, v6.5. 2024.',
      'Sterne JAC, et al. RoB 2. BMJ 2019;366:l4898; ROBINS-I. BMJ 2016;355:i4919.',
    ],
    sections: [
      {
        id: 'ch35-s1',
        title: 'What Makes a Review Systematic',
        blocks: [
          {
            type: 'text',
            content:
              'A **systematic review** answers a focused question using explicit, pre-specified, reproducible methods to identify, appraise, and synthesise all relevant studies — minimising the selection and confirmation bias that plagues the traditional **narrative review**, where an expert cites the studies they happen to know. A **meta-analysis** is the optional statistical step that combines results quantitatively into a pooled estimate. Every meta-analysis should sit inside a systematic review; not every systematic review can or should end in a meta-analysis.',
          },
          {
            type: 'text',
            content:
              'The process is codified by **PRISMA 2020** (Preferred Reporting Items for Systematic reviews and Meta-Analyses) — a 27-item checklist and a flow diagram — and, for the protocol, by **PRISMA-P**. Registration in **PROSPERO** before starting guards against outcome-switching and duplicate effort. The disciplined sequence — protocol, search, screen, extract, appraise, synthesise, rate certainty — is what separates evidence synthesis from cherry-picking.',
          },
          {
            type: 'list',
            title: 'The systematic-review workflow (PRISMA 2020)',
            items: [
              'Register a protocol (PROSPERO) with a pre-specified PICO, eligibility, and analysis plan',
              'Search ≥ 2 databases (MEDLINE, Embase, Cochrane CENTRAL) plus trial registries and reference lists',
              'Screen titles/abstracts then full texts in duplicate, resolving disagreements by a third reviewer',
              'Extract data on a piloted form; contact authors for missing data where feasible',
              'Assess risk of bias with the appropriate tool (RoB 2 or ROBINS-I)',
              'Synthesise — narratively and, if appropriate, quantitatively — and rate certainty with GRADE',
              'Report against the PRISMA 2020 checklist and flow diagram',
            ],
          },
          {
            type: 'pearl',
            title: 'Register the protocol before you search',
            content:
              'Prospective registration in PROSPERO timestamps your primary outcome, eligibility criteria, and analysis plan before you see any results. It is the single most effective guard against the temptation to redefine the outcome once the data disappoint, and reviewers increasingly demand the registration number. A review without a pre-specified protocol is hard to distinguish from a well-referenced opinion.',
          },
        ],
      },
      {
        id: 'ch35-s2',
        title: 'Search Strategy and Study Selection',
        blocks: [
          {
            type: 'text',
            content:
              'The **search strategy** is the reproducible engine of the review. It combines controlled vocabulary (MeSH in MEDLINE, Emtree in Embase) with free-text synonyms, joined by Boolean operators — OR within concepts, AND across them. For a peritoneal question the concept blocks might be (peritoneal neoplasms OR carcinomatosis OR "peritoneal metastases") AND (cytoreductive surgery OR HIPEC OR "hyperthermic intraperitoneal") AND (the outcome or design filter). A librarian or information specialist should be co-author on any serious review.',
          },
          {
            type: 'text',
            content:
              'Study flow is documented in the **PRISMA flow diagram**: records identified, duplicates removed, titles/abstracts screened, full texts assessed, and studies included — with reasons for every exclusion at the full-text stage. Screening in duplicate with a documented adjudication process, and reporting inter-rater agreement, are marks of rigour. Grey literature (conference abstracts, trial registries, theses) and non-English studies should be sought to limit publication and language bias.',
          },
          {
            type: 'pitfall',
            title: 'Searching one database guarantees you miss trials',
            content:
              'MEDLINE alone captures only a fraction of eligible trials; Embase indexes European and pharmacological literature that MEDLINE omits, and CENTRAL aggregates trial reports. A single-database search is a documented cause of biased, incomplete reviews. Combine at least MEDLINE, Embase, and the Cochrane CENTRAL register, hand-search reference lists of included studies and key reviews, and screen relevant trial registries for unpublished and ongoing studies.',
          },
        ],
      },
      {
        id: 'ch35-s3',
        title: 'Risk of Bias, Heterogeneity, and the Effect Model',
        blocks: [
          {
            type: 'text',
            content:
              'Not all included studies deserve equal trust, so each is appraised for **risk of bias** with a design-appropriate tool. For randomised trials, **RoB 2** assesses five domains (randomisation process, deviations from intended interventions, missing outcome data, measurement of the outcome, selection of the reported result) and yields low / some-concerns / high judgements. For non-randomised studies, **ROBINS-I** adds domains for confounding and selection into the study — reflecting the greater vulnerability of observational designs. Risk-of-bias findings feed directly into GRADE and into sensitivity analyses.',
          },
          {
            type: 'table',
            title: 'Choosing the risk-of-bias tool',
            headers: ['Study design', 'Tool', 'Distinctive domains'],
            rows: [
              ['Randomised trial', 'RoB 2', 'Randomisation; deviations; missing data; measurement; selective reporting'],
              ['Non-randomised intervention study', 'ROBINS-I', 'Confounding; selection into study; classification of intervention'],
              ['Diagnostic accuracy study', 'QUADAS-2', 'Patient selection; index test; reference standard; flow & timing'],
              ['Prognostic study', 'QUIPS', 'Study participation; attrition; prognostic factor measurement'],
            ],
            ref: 'Sterne JAC, et al. RoB 2 (BMJ 2019) & ROBINS-I (BMJ 2016); Whiting PF, et al. QUADAS-2 2011.',
          },
          {
            type: 'text',
            content:
              'When results are pooled, they are displayed in a **forest plot**: each study is a square (sized by its weight) with a horizontal confidence interval, and the pooled estimate is the diamond at the bottom whose width is its CI. Studies are weighted chiefly by precision (inverse variance) — larger, more precise studies dominate. **Heterogeneity** — genuine variation in the underlying effect across studies — is quantified by **I²**, the percentage of total variation due to between-study differences rather than chance, and tested with Cochran Q.',
          },
          {
            type: 'table',
            title: 'Interpreting I² heterogeneity',
            headers: ['I² value', 'Interpretation', 'Action'],
            rows: [
              ['0–40%', 'Might not be important', 'Fixed or random effects reasonable'],
              ['30–60%', 'Moderate heterogeneity', 'Explore sources; prefer random effects'],
              ['50–90%', 'Substantial heterogeneity', 'Subgroup / meta-regression; question pooling'],
              ['75–100%', 'Considerable heterogeneity', 'Pooling may be inappropriate — synthesise narratively'],
            ],
            ref: 'Thresholds per Cochrane Handbook v6.5, ch. 10.',
          },
          {
            type: 'text',
            content:
              'The **effect model** must match the data. A **fixed-effect** model assumes every study estimates one common true effect and any difference is sampling error — defensible only with low heterogeneity and similar populations. A **random-effects** model assumes the true effect varies across studies and estimates the mean of that distribution, giving smaller studies relatively more weight and a wider, more honest confidence interval. In surgical meta-analyses, where populations, techniques, and eras differ, random-effects is usually the more credible default.',
          },
          {
            type: 'pitfall',
            title: 'Pooling heterogeneous studies produces a precise but meaningless average',
            content:
              'A high I² warns that the studies are answering subtly different questions — different HIPEC drugs, PCI thresholds, or eras. Forcing them into a single diamond yields a number that describes no real population, like averaging the depth of a river to conclude it is safe to wade. When heterogeneity is considerable, resist the pooled estimate: explore its sources with subgroup analysis or meta-regression, or report a structured narrative synthesis instead of a spurious point estimate.',
          },
          {
            type: 'text',
            content:
              'A **funnel plot** — effect size against study precision — screens for **publication bias** and small-study effects. In the absence of bias it is a symmetric inverted funnel; asymmetry (missing small negative studies in the bottom corner) suggests that unimpressive results went unpublished, biasing the pooled estimate. Asymmetry is tested formally (Egger regression), but the plot needs roughly ten studies to interpret and asymmetry has causes other than publication bias, so it is a prompt for caution, not a verdict.',
          },
        ],
      },
      {
        id: 'ch35-s4',
        title: 'GRADE and a Worked Peritoneal Example',
        blocks: [
          {
            type: 'text',
            content:
              '**GRADE** (Grading of Recommendations Assessment, Development and Evaluation) rates the **certainty of evidence** for each outcome — high, moderate, low, or very low — separately from the strength of any recommendation. Randomised evidence starts high and can be rated *down* for risk of bias, inconsistency (heterogeneity), indirectness, imprecision (wide CIs, few events), and publication bias. Observational evidence starts low but can be rated *up* for a large effect, a dose-response gradient, or when plausible confounding would only diminish an observed effect.',
          },
          {
            type: 'list',
            title: 'GRADE — the five reasons to downgrade certainty',
            items: [
              'Risk of bias — serious limitations in study conduct (from RoB 2 / ROBINS-I)',
              'Inconsistency — unexplained heterogeneity across studies (high I²)',
              'Indirectness — population, intervention, comparator, or outcome differs from the question',
              'Imprecision — wide confidence intervals or too few events to be conclusive',
              'Publication bias — evidence that unfavourable studies are missing (funnel asymmetry)',
            ],
          },
          {
            type: 'trial',
            title: 'Worked example — HIPEC for colorectal peritoneal metastases',
            content:
              'Suppose you synthesise the randomised evidence on adding HIPEC to complete cytoreduction. PRODIGE 7 (oxaliplatin, no OS benefit) and prophylactic-setting trials (COLOPEC, PROPHYLOCHIP — negative) differ from Verwaal-era mitomycin data in drug, era, and setting. Pooling them naively yields high heterogeneity (I² likely > 60%) because they are not answering one question. A defensible review reports them in subgroups (therapeutic vs prophylactic; oxaliplatin vs mitomycin), applies RoB 2 per trial, and GRADEs the OS certainty as, at best, moderate — downgraded for inconsistency and imprecision. The honest conclusion is nuanced, not a single pooled HR.',
            ref: 'Quenet F, et al. Lancet Oncol 2021 (PRODIGE 7); Klaver CEL, et al. Lancet Gastroenterol Hepatol 2019 (COLOPEC).',
          },
          {
            type: 'pearl',
            title: 'Certainty of evidence is not the same as strength of recommendation',
            content:
              'GRADE deliberately separates the two. Low-certainty evidence can still support a strong recommendation (e.g. when the alternative is clearly worse or values are near-universal), and high-certainty evidence can support a weak, conditional recommendation when benefits and harms are finely balanced or values vary. Conflating "the evidence is weak" with "do not do it" is a common misreading of any guideline built on GRADE.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 36 ──────────────────────────────────────────────────────────────
  {
    id: 'ch36-data-registries-reproducibility',
    number: '36',
    title: 'Data Management, Registries & Reproducibility',
    subtitle: 'REDCap, data dictionaries, missing data, registries, open science, and reporting guidelines',
    icon: 'Database',
    reading_time_min: 23,
    level: 'Core',
    track: 'Academic Surgery',
    guidelines_version: 'FAIR Principles 2016 · STROBE 2007 · CONSORT 2010 · PRISMA 2020 · GDPR/HIPAA',
    learning_objectives: [
      'Design a relational database and a data dictionary that make a dataset analysable and auditable',
      'Distinguish missing-data mechanisms (MCAR/MAR/MNAR) and choose an appropriate handling strategy',
      'Describe the role of surgical registries (BIG-RENAPE, PSOGI) and their strengths and limits',
      'Apply FAIR and open-science principles to make an analysis reproducible',
      'Match a study design to its reporting guideline (STROBE, CONSORT, PRISMA and the wider EQUATOR set)',
    ],
    key_references: [
      'Harris PA, et al. REDCap: research electronic data capture. J Biomed Inform 2009;42:377–381.',
      'Wilkinson MD, et al. The FAIR Guiding Principles. Sci Data 2016;3:160018.',
      'von Elm E, et al. STROBE Statement. Lancet 2007; EQUATOR Network reporting guidelines.',
    ],
    sections: [
      {
        id: 'ch36-s1',
        title: 'Databases and Data Dictionaries',
        blocks: [
          {
            type: 'text',
            content:
              'The quality of every analysis is capped by the quality of the data structure it runs on, and that structure is decided long before the first patient is entered. Spreadsheets tolerate free-text chaos — "MMC," "mitomycin," "Mito-C" in one column — that silently corrupts analysis. Purpose-built systems such as **REDCap** (Research Electronic Data Capture) enforce field types, validation ranges, and controlled vocabularies at the point of entry, provide a full audit trail, and support secure multicentre access with role-based permissions and de-identification.',
          },
          {
            type: 'text',
            content:
              'A **data dictionary** is the contract that makes a dataset intelligible to anyone — including your future self. For every variable it records the exact name, type (categorical/continuous/date), permitted values or units, the coding scheme, and the definition of the concept measured. Without it, "grade = 3" is ambiguous (Clavien-Dindo? tumour grade? PCI region score?), and a dataset becomes uninterpretable the moment its author leaves. Building the dictionary *before* data entry forces the definitional decisions that otherwise surface, painfully, at analysis.',
          },
          {
            type: 'list',
            title: 'Minimum contents of a data dictionary entry',
            items: [
              'Variable name (short, machine-friendly, unique) and human-readable label',
              'Data type — categorical (with code list), continuous (with units), date/time',
              'Permitted values / valid range and the code-to-meaning mapping',
              'Precise operational definition (e.g. "major complication = Clavien-Dindo ≥ IIIa within 30 days")',
              'Whether missing is allowed and how missingness is coded (never blank vs. not-applicable)',
            ],
          },
          {
            type: 'pearl',
            title: 'One row per observation, one column per variable — tidy data',
            content:
              'Structure data so that each row is a single observation and each column a single variable, with no merged cells, no colour-coding that carries meaning, and no multiple values crammed into one cell. This "tidy" layout is directly analysable by any statistical package without manual reshaping. Store dates in ISO format (YYYY-MM-DD), keep a separate identifier that links to a securely held key rather than embedding names, and never overwrite raw data — derive analysis variables in code, not by hand.',
          },
        ],
      },
      {
        id: 'ch36-s2',
        title: 'Missing Data',
        blocks: [
          {
            type: 'text',
            content:
              'Missing data are ubiquitous in surgical research and are not statistically neutral — how they arose determines what you may do about them. Three mechanisms are distinguished. **MCAR** (missing completely at random): missingness is unrelated to any variable, observed or not — a dropped sample. **MAR** (missing at random): missingness depends on observed variables — older patients less likely to have a tumour marker recorded, but predictable from recorded age. **MNAR** (missing not at random): missingness depends on the unobserved value itself — a performance status left blank precisely because the patient was too unwell to assess.',
          },
          {
            type: 'table',
            title: 'Missing-data mechanisms and handling',
            headers: ['Mechanism', 'Missingness depends on', 'Reasonable handling'],
            rows: [
              ['MCAR', 'Nothing (purely random)', 'Complete-case analysis unbiased (but less efficient)'],
              ['MAR', 'Observed variables only', 'Multiple imputation; inverse-probability weighting'],
              ['MNAR', 'The unobserved value itself', 'Sensitivity analyses; explicit modelling; caution'],
            ],
            ref: 'Little RJA, Rubin DB. Statistical Analysis with Missing Data, 3rd ed. 2019.',
          },
          {
            type: 'pitfall',
            title: 'Complete-case analysis quietly biases most surgical datasets',
            content:
              'Deleting every patient with any missing value (listwise deletion) is unbiased only under MCAR, which is rarely true — data are usually missing *because* of something (sicker patients, incomplete staging, failed follow-up). It also throws away statistical power. **Multiple imputation**, which generates several plausible completed datasets and pools the results to reflect the uncertainty, is the defensible default under MAR. Report the amount and pattern of missingness; never impute a primary outcome and present it as if observed.',
          },
        ],
      },
      {
        id: 'ch36-s3',
        title: 'Registries and Reproducible, Open Science',
        blocks: [
          {
            type: 'text',
            content:
              'Because peritoneal malignancies are individually rare, **registries** are the backbone of the evidence base. **BIG-RENAPE** and **RENAPE** (France) and the **PSOGI** international collaboration pool cases across centres, enabling analyses of PCI thresholds, histology-specific survival, and rare tumour types no single institution could study. Registries deliver large numbers, real-world generalisability, and long follow-up — but they inherit the weaknesses of observational data: selection bias, variable data quality, confounding by indication, and centre effects that demand careful, adjusted analysis.',
          },
          {
            type: 'table',
            title: 'Registry data — strengths and limitations',
            headers: ['Strength', 'Corresponding limitation'],
            rows: [
              ['Large numbers for rare disease', 'Selection bias in who is entered'],
              ['Real-world, generalisable populations', 'Variable data completeness and quality'],
              ['Long-term follow-up feasible', 'Loss to follow-up varies by centre'],
              ['Enables prognostic modelling', 'Confounding by indication; no randomisation'],
              ['Multicentre, multinational scope', 'Heterogeneous protocols and definitions'],
            ],
            ref: 'BIG-RENAPE / RENAPE (Glehen O, et al.); PSOGI collaborative datasets.',
          },
          {
            type: 'text',
            content:
              '**Reproducibility** — the ability of an independent analyst to obtain the same result from the same data — has become an expectation, not a virtue. The **FAIR principles** state that data and metadata should be **F**indable, **A**ccessible, **I**nteroperable, and **R**eusable. In practice: script every step of the analysis (R, Python, Stata) rather than clicking through menus, place code under version control, deposit de-identified data and code in a repository where policy allows, and pre-register the analysis plan so the reported analysis is demonstrably the planned one.',
          },
          {
            type: 'pearl',
            title: 'If you cannot re-run it, it is not finished',
            content:
              'A reproducible analysis is one where a clean machine, given your raw data file and your script, regenerates every table and figure without manual steps. Analyses assembled by hand-editing spreadsheets and copying numbers into a manuscript cannot be reproduced, audited, or corrected — and errors in exactly this workflow have retracted high-profile papers. Write the analysis as code from the first day; your reviewer, your co-authors, and your future self depend on it.',
          },
        ],
      },
      {
        id: 'ch36-s4',
        title: 'Reporting Guidelines',
        blocks: [
          {
            type: 'text',
            content:
              'Every major study design has a matched **reporting guideline**, curated by the **EQUATOR Network**, specifying the minimum items a manuscript must contain so that readers can appraise and replicate it. These are reporting standards, not conduct standards — following STROBE does not make a cohort study valid, but it ensures the reader has the information to judge validity. Journals increasingly require the completed checklist at submission, and using it while *designing* the study (not just when writing up) prevents the most common omissions.',
          },
          {
            type: 'table',
            title: 'Matching study design to reporting guideline',
            headers: ['Design', 'Guideline', 'Focus'],
            rows: [
              ['Randomised controlled trial', 'CONSORT 2010', 'Flow diagram, randomisation, blinding, ITT'],
              ['Observational (cohort/case-control/cross-sectional)', 'STROBE', 'Bias, confounding, generalisability'],
              ['Systematic review / meta-analysis', 'PRISMA 2020', 'Search, selection, risk of bias, synthesis'],
              ['Study protocol (trial)', 'SPIRIT 2013', 'Pre-specification of design and analysis'],
              ['Diagnostic accuracy study', 'STARD 2015', 'Reference standard, test performance'],
              ['Prediction model', 'TRIPOD', 'Development and validation of the model'],
              ['Case report', 'CARE', 'Structured clinical narrative'],
              ['Quality-improvement study', 'SQUIRE 2.0', 'Context, intervention, iterative change'],
            ],
            ref: 'EQUATOR Network; individual guideline statements.',
          },
          {
            type: 'pearl',
            title: 'Open the checklist before you collect data, not before you submit',
            content:
              'Reading STROBE or CONSORT at the design stage tells you exactly which variables, definitions, and flow counts you must capture — how many patients were assessed, excluded, and why; how missing data will be handled; which confounders will be adjusted for. Discovering at write-up that you never recorded a required denominator is a preventable disaster. The checklist is a study-design tool masquerading as a writing tool.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 37 ──────────────────────────────────────────────────────────────
  {
    id: 'ch37-ethics-irb-integrity',
    number: '37',
    title: 'Research Ethics, IRB & Integrity',
    subtitle: 'Helsinki, informed consent, IRB approval, equipoise, conflicts, authorship, and misconduct',
    icon: 'Scale',
    reading_time_min: 24,
    level: 'Core',
    track: 'Academic Surgery',
    guidelines_version: 'Declaration of Helsinki 2013 · Belmont Report 1979 · ICMJE 2024 · ICH-GCP E6(R2) · CIOMS 2016',
    learning_objectives: [
      'Trace the ethical foundations of human research from Nuremberg to the Declaration of Helsinki',
      'Describe the elements of valid informed consent and the role of the IRB / ethics committee',
      'Explain clinical equipoise as the ethical precondition for randomisation',
      'Manage conflicts of interest and apply the ICMJE authorship criteria',
      'Recognise research misconduct — fabrication, falsification, plagiarism — and safeguard participant data',
    ],
    key_references: [
      'World Medical Association. Declaration of Helsinki. JAMA 2013;310:2191–2194.',
      'ICMJE. Recommendations for the Conduct, Reporting, Editing and Publication of Scholarly Work. 2024.',
      'National Commission. The Belmont Report. 1979.',
    ],
    sections: [
      {
        id: 'ch37-s1',
        title: 'The Ethical Foundations',
        blocks: [
          {
            type: 'text',
            content:
              'Modern research ethics were forged from abuse. The **Nuremberg Code** (1947) arose from the trials of Nazi physicians and established the absolute requirement of voluntary informed consent. The **Declaration of Helsinki** (World Medical Association, 1964; last revised 2013) is the profession\'s own governing document, asserting that the well-being of the individual research subject takes precedence over the interests of science and society. The **Belmont Report** (1979), prompted by the Tuskegee syphilis study, distilled three principles that still structure ethics review.',
          },
          {
            type: 'table',
            title: 'The three Belmont principles',
            headers: ['Principle', 'Meaning', 'Operational expression'],
            rows: [
              ['Respect for persons', 'Autonomy; protection of the vulnerable', 'Informed consent; safeguards for those unable to consent'],
              ['Beneficence', 'Maximise benefit, minimise harm', 'Favourable risk-benefit ratio; competent conduct'],
              ['Justice', 'Fair distribution of benefits and burdens', 'Equitable participant selection; access to results'],
            ],
            ref: 'The Belmont Report, 1979.',
          },
          {
            type: 'quote',
            content:
              'While the primary purpose of medical research is to generate new knowledge, this goal can never take precedence over the rights and interests of individual research subjects.',
            ref: 'Declaration of Helsinki, 2013 revision, paragraph 8.',
          },
        ],
      },
      {
        id: 'ch37-s2',
        title: 'Informed Consent and Ethics Review',
        blocks: [
          {
            type: 'text',
            content:
              'Valid **informed consent** is a process, not a signature. It requires **disclosure** of the study\'s purpose, procedures, risks, benefits, and alternatives; **comprehension** by the participant; and **voluntariness** — freedom from coercion or undue inducement. The surgeon-investigator relationship carries a particular hazard: patients may agree to research out of gratitude or fear of jeopardising their care, and may confuse the experimental study with their treatment (the **therapeutic misconception**). Consent for surgical trials must make unambiguous which elements are research and which are standard care.',
          },
          {
            type: 'list',
            title: 'Core elements of valid informed consent',
            items: [
              'Purpose of the research and that participation is voluntary',
              'Procedures, including which are experimental and which are routine care',
              'Reasonably foreseeable risks, discomforts, and burdens',
              'Potential benefits — to the participant and to others — without overstatement',
              'Alternatives to participation, including standard treatment outside the study',
              'Confidentiality protections and how data will be used and stored',
              'The right to withdraw at any time without penalty to their care',
            ],
          },
          {
            type: 'text',
            content:
              'No human study may begin until an **Institutional Review Board (IRB)** or **Research Ethics Committee** has reviewed and approved the protocol, consent documents, and data-safety plan. The committee weighs the risk-benefit balance, the adequacy of consent, the fairness of participant selection, and the protection of vulnerable groups, and it continues oversight through amendments, adverse-event reporting, and periodic review. For trials, an independent **Data Safety Monitoring Board (DSMB)** may review accumulating data and can stop a trial early for harm, for overwhelming benefit, or for futility.',
          },
          {
            type: 'pitfall',
            title: 'Retrospective does not mean exempt',
            content:
              'Trainees routinely assume a retrospective chart review needs no ethics approval. It almost always does — even anonymised secondary data use requires review or a formal exemption determination made by the committee, not by the investigator. Analysing identifiable patient data without approval, or beginning enrolment before written approval is in hand, is a governance breach that can invalidate the study and block publication (ICMJE and journals require a statement of ethics approval). When in doubt, submit for a determination.',
          },
        ],
      },
      {
        id: 'ch37-s3',
        title: 'Equipoise and Conflicts of Interest',
        blocks: [
          {
            type: 'text',
            content:
              '**Clinical equipoise** is the ethical precondition for a randomised trial: genuine, honest uncertainty within the expert medical community about which arm is superior. Only under equipoise is it acceptable to let chance decide a patient\'s treatment, because no participant is knowingly assigned to an inferior option. In surgery equipoise is fragile — surgeons develop strong convictions about their own technique, and a trial can become unethical to continue (or to have started) if compelling evidence of benefit or harm emerges, which is why interim monitoring and stopping rules exist.',
          },
          {
            type: 'text',
            content:
              'A **conflict of interest** exists whenever a secondary interest — financial (industry funding, device royalties, equity), academic (a cherished hypothesis, the pressure to publish), or personal — could bias, or appear to bias, the conduct or reporting of research. The remedy is not always to eliminate the interest but to **disclose** it fully and manage it transparently. Undisclosed conflicts corrode trust and are themselves a form of misconduct; journals and the ICMJE require a signed disclosure from every author on every submission.',
          },
          {
            type: 'pearl',
            title: 'Disclose more than you think necessary',
            content:
              'The test for disclosure is not "did this actually bias me?" but "could a reasonable reader wonder whether it might have?" Industry funding for the device you studied, an honorarium from the drug\'s manufacturer, a patent on the technique — all must be declared even if you are certain they had no influence. Over-disclosure costs nothing; a conflict surfaced after publication, when it should have been declared, can retract a paper and end a reputation.',
          },
        ],
      },
      {
        id: 'ch37-s4',
        title: 'Authorship, Misconduct, and Data Safety',
        blocks: [
          {
            type: 'text',
            content:
              'Authorship confers credit and accountability, and its abuse is endemic. The **ICMJE** defines an author by four criteria, **all** of which must be met: (1) substantial contribution to conception/design or data acquisition/analysis/interpretation; (2) drafting or critically revising the work; (3) final approval of the version to be published; and (4) agreement to be accountable for all aspects of the work. Contributors who do not meet all four should be acknowledged, not listed as authors.',
          },
          {
            type: 'table',
            title: 'Authorship problems the ICMJE criteria are meant to prevent',
            headers: ['Practice', 'What it means', 'Why it is wrong'],
            rows: [
              ['Gift / honorary authorship', 'Listing a senior who did not contribute', 'Credit without accountability; dilutes real authors'],
              ['Guest authorship', 'Adding a prestigious name to aid acceptance', 'Deceptive; violates accountability criterion'],
              ['Ghost authorship', 'A real contributor (often industry) left off', 'Hides conflicts; misleads readers'],
              ['Coercion authorship', 'A supervisor demanding a slot by power', 'Exploitative; breaches all four criteria'],
            ],
            ref: 'ICMJE Recommendations, 2024.',
          },
          {
            type: 'text',
            content:
              '**Research misconduct** is conventionally defined as **fabrication** (inventing data), **falsification** (manipulating data, images, or results), or **plagiarism** (appropriating others\' ideas or words) — "FFP." It excludes honest error and differences of interpretation, but it includes image manipulation, selective reporting of favourable outcomes, and self-plagiarism/duplicate publication. The consequences range from retraction to loss of licence. Softer but corrosive practices — p-hacking, HARKing (hypothesising after results are known), salami-slicing one study into many papers — sit on the same continuum and erode the literature\'s trustworthiness.',
          },
          {
            type: 'pitfall',
            title: 'Beautifying a figure can be falsification',
            content:
              'Adjusting the brightness of an entire image is acceptable; selectively enhancing, cloning, or erasing features — or splicing lanes from different gels or overlaying "representative" operative photographs — is falsification, even when the underlying conclusion is believed true. The same applies to trimming outliers without disclosure or re-running an analysis until it crosses p = 0.05. Keep every raw file, document every processing step, and assume that image-forensic and statistical-integrity screening will examine your work — because increasingly it does.',
          },
          {
            type: 'text',
            content:
              'Finally, **data safety and confidentiality** are ethical obligations, not IT afterthoughts. Participant data must be de-identified where possible, stored securely with access controls and a separately held linkage key, and handled in compliance with data-protection law (GDPR in Europe, HIPAA in the United States). A data-management plan should specify who can access identifiable data, how long it is retained, and how it will be destroyed. A breach of participant confidentiality can harm the very people who volunteered to advance the field, and undoes the trust on which all clinical research depends.',
          },
          {
            type: 'pearl',
            title: 'Integrity is a system, not a virtue',
            content:
              'Honest researchers still produce irreproducible work when the workflow permits it. Build integrity into the process: pre-register the protocol and analysis plan, script the analysis, keep raw data untouched, log every decision, declare conflicts, and agree authorship in writing at the outset. These structural safeguards protect the well-intentioned from unconscious bias far more reliably than good character alone — and they are what distinguishes an academic surgeon from an enthusiast with a database.',
          },
        ],
      },
    ],
  },
]
