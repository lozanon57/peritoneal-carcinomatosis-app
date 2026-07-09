import type { LearnChapter } from '../../types/learn'

// ─────────────────────────────────────────────────────────────────────────────
// ACADEMIC SURGERY — Scientific writing, abstracts, presentations, publishing
// The "how to become a published academic surgeon" block (Chapters 38–45).
// Template-driven, worked surgical-oncology examples, residency-course format.
// Sources: ICMJE Recommendations 2024 · EQUATOR Network (STROBE/CONSORT/PRISMA) ·
//          Gopen & Swan, "The Science of Scientific Writing" (Am Sci 1990) ·
//          CONSORT-Abstracts (Hopewell, Lancet 2008) · SANRA · COPE guidance.
// ─────────────────────────────────────────────────────────────────────────────

export const ACADEMIC_WRITING_CHAPTERS: LearnChapter[] = [
  // ── CHAPTER 38 ──────────────────────────────────────────────────────────────
  {
    id: 'ch38-imrad-anatomy',
    number: '38',
    title: 'Anatomy of a Scientific Paper — IMRAD',
    subtitle: 'What each section does, the order you should actually write in, and how paragraphs carry an argument',
    icon: 'FileText',
    reading_time_min: 26,
    level: 'Core',
    track: 'Academic Surgery',
    guidelines_version: 'ICMJE Recommendations 2024 · EQUATOR Network · Gopen & Swan 1990',
    learning_objectives: [
      'Explain the function of each IMRAD section and why the structure became the scientific standard',
      'Write in the efficient order (Methods → Results → Introduction → Discussion → Abstract → Title) rather than front-to-back',
      'Build paragraphs with a topic sentence, evidence, and a link, following reader-expectation principles',
      'Apply correct tense and voice conventions across sections',
      'Recognise how a reporting guideline (STROBE/CONSORT) maps onto the IMRAD skeleton',
    ],
    key_references: [
      'International Committee of Medical Journal Editors (ICMJE). Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals. Updated 2024.',
      'Gopen GD, Swan JA. The Science of Scientific Writing. American Scientist 1990;78:550–558.',
      'Sollaci LB, Pereira MG. The introduction, methods, results, and discussion (IMRAD) structure: a fifty-year survey. J Med Libr Assoc 2004;92(3):364–367.',
    ],
    sections: [
      {
        id: 'ch38-s1',
        title: 'Why IMRAD, and What Each Section Promises the Reader',
        blocks: [
          {
            type: 'text',
            content:
              'Almost every original research article in surgery follows the **IMRAD** skeleton — **I**ntroduction, **M**ethods, **R**esults, **a**nd **D**iscussion — bracketed by a Title, Abstract, and References. IMRAD is not a bureaucratic ritual; it is a contract with the reader. Each section answers one question and only that question. The Introduction answers *why did you do this?*, the Methods *what did you do?*, the Results *what did you find?*, and the Discussion *what does it mean?*. A reader — or a peer reviewer — who knows the contract can navigate any paper in any journal, which is exactly why the format became universal in the biomedical literature after the mid-twentieth century.',
          },
          {
            type: 'text',
            content:
              'The single most common structural error in trainee manuscripts is **leakage** between sections: interpretation smuggled into the Results, results previewed in the Methods, methods re-explained in the Discussion. Discipline about section boundaries is the fastest way to make a manuscript read like it was written by an experienced author. Before you write a sentence, ask which of the four questions it answers, and put it there.',
          },
          {
            type: 'table',
            title: 'IMRAD section-by-section — function, content, tense, and voice',
            headers: ['Section', 'Question it answers', 'What belongs here', 'Tense', 'Typical length'],
            rows: [
              ['Introduction', 'Why did you do this?', 'Known background → gap → aim/hypothesis. No results, no methods detail.', 'Present (established facts) + past (prior studies)', '3–4 paragraphs'],
              ['Methods', 'What did you do?', 'Design, setting, participants, variables, interventions, statistics, ethics. Enough to reproduce.', 'Past tense', '25–30% of paper'],
              ['Results', 'What did you find?', 'Findings only — text + tables/figures. No interpretation, no citations.', 'Past tense', '25–30% of paper'],
              ['Discussion', 'What does it mean?', 'Summary → interpretation → comparison → limitations → implications.', 'Present (your claims) + past (what you did)', '30% of paper'],
              ['Abstract', 'The whole paper in miniature', 'Structured summary of all four sections; often written last.', 'Past (methods/results), present (conclusion)', '≤250–300 words'],
              ['Title', 'What is this about?', 'Population + exposure/intervention + outcome + design.', 'n/a', '≤15 words'],
            ],
          },
          {
            type: 'pearl',
            title: 'One section, one job',
            content:
              'If a sentence would fit equally well in two sections, it is probably interpretation and belongs in the Discussion. The Results state that mortality was 4% versus 11%; the Discussion argues that this difference is clinically meaningful. Keep the *number* and the *meaning* in different postcodes.',
          },
        ],
      },
      {
        id: 'ch38-s2',
        title: 'The Writing Order — Not the Reading Order',
        blocks: [
          {
            type: 'text',
            content:
              'Experienced authors almost never write a paper front-to-back. The reading order (Intro → Methods → Results → Discussion) is the hardest possible writing order, because the Introduction is the most rhetorical and hardest-to-calibrate section, and you cannot calibrate it until you know exactly what your results are and what you will claim. Write in the order that flows from what is already fixed to what depends on it.',
          },
          {
            type: 'list',
            title: 'Recommended writing sequence',
            items: [
              '1. Tables and figures first — decide what data actually answer your question, and lock the "results skeleton" before prose.',
              '2. Methods — the most factual section; you did the work, so describe it. Write it in the past tense as you would a recipe.',
              '3. Results — narrate the tables and figures in a logical order (primary outcome first), adding nothing not shown.',
              '4. Introduction — now that the finding is fixed, build the funnel that makes that specific question feel necessary.',
              '5. Discussion — interpret, compare, bound with limitations, and state implications.',
              '6. Abstract — distil the finished paper into a structured summary.',
              '7. Title and keywords — last, once the message is crisp.',
            ],
          },
          {
            type: 'pitfall',
            title: 'Writing the Introduction first and then bending the paper to fit it',
            content:
              'Trainees who draft a grand Introduction before the analysis is final often end up over-promising — the Introduction sets up a question the data cannot fully answer, and the mismatch is glaring to reviewers. Fix the results first; then write an Introduction that asks exactly the question you actually answered.',
          },
          {
            type: 'key',
            title: 'Reusable manuscript build checklist',
            content:
              'BEFORE PROSE:\n☐ Final tables/figures chosen; primary outcome table is Table 2 (Table 1 = baseline characteristics)\n☐ One-sentence "take-home message" written and pinned to the top of the file\n☐ Target journal + reporting guideline chosen (STROBE for observational, CONSORT for RCT)\n\nDRAFT ORDER:\n☐ Methods (past tense, reproducible)\n☐ Results (findings only, mirror the table order)\n☐ Introduction (funnel → gap → aim)\n☐ Discussion (summary → interpretation → comparison → limitations → implications)\n☐ Abstract (structured, ≤ word limit)\n☐ Title + 3–6 keywords/MeSH terms\n\nBEFORE SUBMISSION:\n☐ Each sentence sits in the correct section (no leakage)\n☐ Every table/figure is cited in the text, in order\n☐ Reporting-guideline checklist completed and page-referenced',
          },
        ],
      },
      {
        id: 'ch38-s3',
        title: 'Paragraph Architecture and the Reader-Expectation Principle',
        blocks: [
          {
            type: 'text',
            content:
              'Gopen and Swan\'s classic essay reframed scientific writing around a simple insight: **readers do not just absorb information, they interpret structure**. Meaning is created less by what the writer puts in than by where the reader expects to find it. Two structural expectations do most of the work: readers expect the **topic** of a sentence to appear in the grammatical subject position (early), and they expect the **most important, new information** to arrive at the end of the sentence — the "stress position". Sentences that honour these expectations feel effortless; sentences that violate them feel dense even when every word is correct.',
          },
          {
            type: 'text',
            content:
              'At the paragraph level, the same logic gives a reliable three-part structure. Open with a **topic sentence** that states the paragraph\'s claim. Follow with **evidence** — data, citations, reasoning — that supports it. Close with a **link** that connects to the next paragraph or draws the consequence. A Discussion built from such paragraphs reads as an argument; one built from a heap of facts reads as a list.',
          },
          {
            type: 'quote',
            content:
              'Readers expect a unit of discourse — a sentence, a paragraph, a section — to be a story about whoever shows up first. Give them the character you want them to follow, and put the news at the end.',
            ref: 'After Gopen & Swan, American Scientist 1990',
          },
          {
            type: 'table',
            title: 'Tense and voice conventions in surgical writing',
            headers: ['Context', 'Convention', 'Example'],
            rows: [
              ['Established knowledge', 'Present tense', '"Complete cytoreduction is the strongest predictor of survival."'],
              ['What you did / found', 'Past tense', '"We performed CRS+HIPEC in 82 patients." / "Median PCI was 14."'],
              ['A prior specific study', 'Past tense', '"Verwaal et al. reported a survival benefit."'],
              ['Your interpretation/claim', 'Present tense', '"These data suggest HIPEC adds no benefit in this subgroup."'],
              ['Voice', 'Active where it aids clarity', '"We excluded 12 patients" is clearer than "12 patients were excluded" — but passive is fine when the actor is irrelevant.'],
            ],
          },
          {
            type: 'pearl',
            title: 'The stress position is prime real estate',
            content:
              'Whatever word ends a sentence is what the reader remembers. End clauses on the idea you want emphasised, not on a throwaway qualifier. "Cytoreduction was complete in 78% of patients" lands the message; "In 78% of patients, cytoreduction that was attempted turned out complete, in this series" buries it.',
          },
          {
            type: 'text',
            content:
              'The ICMJE Recommendations sit above all of this as the governing document for biomedical publishing: they define what counts as authorship, how to report conflicts of interest and funding, trial registration expectations, and overlapping-publication rules. Reading a manuscript through the IMRAD lens tells you whether it is well *built*; reading it through ICMJE tells you whether it is ethically *publishable*. A competent academic surgeon internalises both.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 39 ──────────────────────────────────────────────────────────────
  {
    id: 'ch39-intro-discussion',
    number: '39',
    title: 'Writing the Introduction & Discussion',
    subtitle: 'The funnel, the gap statement, and a Discussion that interprets without overclaiming',
    icon: 'PenLine',
    reading_time_min: 26,
    level: 'Core',
    track: 'Academic Surgery',
    guidelines_version: 'ICMJE 2024 · STROBE Explanation & Elaboration · Gopen & Swan 1990',
    learning_objectives: [
      'Construct a funnel-shaped Introduction that ends in an explicit gap and aim',
      'Write a defensible gap statement without disparaging prior work',
      'Structure a Discussion in the canonical five moves',
      'Calibrate claims to the study design and avoid causal overreach',
      'Frame limitations honestly while preserving the value of the study',
    ],
    key_references: [
      'von Elm E, et al. STROBE Statement: guidelines for reporting observational studies. Lancet 2007;370:1453–1457 (and the Explanation & Elaboration paper).',
      'ICMJE. Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals. Updated 2024.',
      'Docherty M, Smith R. The case for structuring the discussion of scientific papers. BMJ 1999;318:1224–1225.',
    ],
    sections: [
      {
        id: 'ch39-s1',
        title: 'The Introduction as a Funnel',
        blocks: [
          {
            type: 'text',
            content:
              'A strong Introduction is a **funnel**: it moves from the broad clinical problem, through the specific state of knowledge, to the narrow crack in that knowledge your study fills, and lands on your aim. Three or four paragraphs is usually enough. Paragraph one establishes the disease and its importance; paragraph two summarises what is known and what the current standard is; paragraph three identifies the **gap** — the unanswered question, the conflicting evidence, the untested population; and a final short paragraph states the **aim and hypothesis**. The reader should reach your aim and feel it was inevitable.',
          },
          {
            type: 'text',
            content:
              'The Introduction is not a mini-review. Cite only what is needed to build the funnel — typically 10–15 references, the most current and authoritative available. Resist the urge to demonstrate everything you read. The Introduction earns its keep by making one specific question feel necessary, not by surveying a field.',
          },
          {
            type: 'key',
            title: 'Reusable Introduction template (fill in the blanks)',
            content:
              'PARA 1 — CONTEXT: "[Condition] affects [scale/burden] and carries [prognosis/consequence]. [Current standard of care] is [treatment]."\n\nPARA 2 — WHAT IS KNOWN: "[Landmark evidence] established that [finding]. Subsequent work has shown [refinement]. Guidelines currently recommend [X]."\n\nPARA 3 — THE GAP: "However, it remains unknown whether [gap]. / Evidence in [specific population] is limited to [small/retrospective/conflicting data]. / No study has directly compared [A vs B]."\n\nPARA 4 — AIM: "We therefore aimed to [primary objective] in [population]. We hypothesised that [directional hypothesis]."',
          },
          {
            type: 'quote',
            content:
              'A worked gap statement: "Complete cytoreduction predicts survival in colorectal peritoneal metastases, but whether the addition of HIPEC confers benefit after optimal cytoreduction remains contested, and no trial has stratified by peritoneal cancer index. We therefore compared oncological outcomes in patients undergoing cytoreductive surgery with and without HIPEC, stratified by tumour burden."',
          },
          {
            type: 'pearl',
            title: 'Name the gap in one sentence',
            content:
              'If you cannot state the gap your study fills in a single sentence beginning "It remains unknown whether…", you do not yet have a paper — you have data looking for a question. Write that sentence first; the rest of the Introduction is scaffolding around it.',
          },
        ],
      },
      {
        id: 'ch39-s2',
        title: 'The Discussion in Five Moves',
        blocks: [
          {
            type: 'text',
            content:
              'A Discussion that wanders is the commonest reason reviewers ask for major revision. The antidote is a fixed five-move structure. **Move 1 — Summary:** open with a single paragraph restating your principal findings in plain language, without numbers-dumping. **Move 2 — Interpretation:** explain what the findings mean and the mechanism or reasoning behind them. **Move 3 — Comparison:** place your results against the existing literature, explaining agreements and, more importantly, disagreements. **Move 4 — Limitations:** state the weaknesses candidly and their likely direction of bias. **Move 5 — Implications:** conclude with what should change in practice or research, and a crisp take-home sentence.',
          },
          {
            type: 'table',
            title: 'The five-move Discussion — purpose and opening phrase',
            headers: ['Move', 'Purpose', 'Signature opening'],
            rows: [
              ['1. Summary', 'Restate the key finding, no data dump', '"In this cohort of… we found that…"'],
              ['2. Interpretation', 'Explain meaning / mechanism', '"This finding is biologically plausible because…"'],
              ['3. Comparison', 'Situate vs prior work', '"Our results are consistent with… but differ from… in that…"'],
              ['4. Limitations', 'Honest weaknesses + direction of bias', '"Several limitations should be considered. First,…"'],
              ['5. Implications', 'So what? + take-home', '"These data suggest that… Future trials should…"'],
            ],
          },
          {
            type: 'text',
            content:
              'The first sentence of the Discussion should never be "In this study we…" repeated verbatim from the aim. It should be a confident, plain-language statement of the answer: *We found that HIPEC did not improve overall survival after complete cytoreduction, regardless of peritoneal burden.* Reviewers and busy readers frequently read the first line of the Discussion right after the Abstract; make it count.',
          },
          {
            type: 'pitfall',
            title: 'Turning limitations into a confession or a shield',
            content:
              'Two failure modes: burying a fatal flaw in a long list of trivial ones, or writing a defensive wall of caveats that undermines your own paper. Report the two or three limitations that genuinely matter, state which way each biases the result, and explain why the conclusion survives despite them. A single-centre retrospective design is a limitation; it is not an apology.',
          },
        ],
      },
      {
        id: 'ch39-s3',
        title: 'Calibrating Claims — The Overclaiming Trap',
        blocks: [
          {
            type: 'text',
            content:
              'The gravest sin in a Discussion is **overclaiming** — asserting more than the design supports. Observational data show association, not causation; a retrospective single-centre series generates hypotheses, it does not establish standards. Match your verbs to your design. Reserve "caused", "proves", and "demonstrates efficacy" for randomised evidence. For observational work use "was associated with", "may reflect", "suggests". This is not timidity — it is precision, and reviewers read verb choice as a proxy for scientific maturity.',
          },
          {
            type: 'table',
            title: 'Claim strength by study design',
            headers: ['Design', 'Strongest defensible claim', 'Forbidden verbs'],
            rows: [
              ['Case report / series', 'Illustrates / raises the possibility of', 'proves, causes, is effective'],
              ['Retrospective cohort', 'Was associated with (adjusted)', 'causes, demonstrates efficacy'],
              ['Prospective cohort', 'Predicts / is independently associated with', 'causes, proves'],
              ['RCT', 'Improves / reduces (causal)', 'proves definitively (single trial)'],
              ['Meta-analysis of RCTs', 'Provides high-certainty evidence that', '—'],
            ],
          },
          {
            type: 'pearl',
            title: 'One study never "proves"',
            content:
              'Even a well-powered RCT shows an effect under specific conditions; it does not "prove" a universal truth. Write "our trial showed" not "our trial proved". Editors at high-impact surgical journals routinely strike the word "prove" from Discussions.',
          },
          {
            type: 'text',
            content:
              'End the Discussion — and therefore the body of the paper — on a forward-looking, single-sentence take-home that a reader could quote in a tumour board. It should mirror the aim stated in the Introduction, now answered. The symmetry of "we aimed to determine whether…" and "these data indicate that…" closes the argumentative loop the funnel opened.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 40 ──────────────────────────────────────────────────────────────
  {
    id: 'ch40-methods-results',
    number: '40',
    title: 'Methods & Results that Survive Peer Review',
    subtitle: 'Reproducible methods, guideline alignment, honest statistics, and figures that earn their space',
    icon: 'FlaskConical',
    reading_time_min: 28,
    level: 'Advanced',
    track: 'Academic Surgery',
    guidelines_version: 'STROBE 2007 · CONSORT 2010 · EQUATOR Network · SAMPL guidelines',
    learning_objectives: [
      'Write a Methods section reproducible enough that another team could repeat the study',
      'Map a manuscript onto STROBE (observational) or CONSORT (trial) item by item',
      'Report statistics correctly — effect sizes with confidence intervals, not p-values alone',
      'Decide when data belong in a table versus a figure, and design both well',
      'Recognise and avoid data dredging, p-hacking, and selective outcome reporting',
    ],
    key_references: [
      'von Elm E, et al. The STROBE Statement. Lancet 2007;370:1453–1457.',
      'Schulz KF, Altman DG, Moher D; CONSORT Group. CONSORT 2010 Statement. BMJ 2010;340:c332.',
      'Lang TA, Altman DG. Basic statistical reporting for articles published in biomedical journals: the SAMPL guidelines. Int J Nurs Stud 2015.',
      'EQUATOR Network. Enhancing the QUAlity and Transparency Of health Research. www.equator-network.org.',
    ],
    sections: [
      {
        id: 'ch40-s1',
        title: 'Reproducible Methods and Guideline Alignment',
        blocks: [
          {
            type: 'text',
            content:
              'The test of a Methods section is reproducibility: could a competent team at another centre repeat your study from the text alone? Organise it in a fixed order — **design, setting and dates, participants (eligibility), variables and definitions, data sources/measurement, bias mitigation, sample size, statistical methods, and ethics/registration**. Define every clinical variable operationally. "Complete cytoreduction" is ambiguous; "CC-0 (no visible residual disease) by the Sugarbaker Completeness of Cytoreduction score" is reproducible. Specify software with version, and pre-specify the primary outcome.',
          },
          {
            type: 'text',
            content:
              'The **EQUATOR Network** hosts the reporting guideline for essentially every study type, and journals increasingly require the completed checklist at submission. Use **STROBE** for observational studies (cohort, case-control, cross-sectional), **CONSORT** for randomised trials, **PRISMA** for systematic reviews, **CARE** for case reports, and **TRIPOD** for prediction models. These are not hoops; each checklist item marks a place where studies commonly fail, so writing to the guideline pre-empts the reviewer.',
          },
          {
            type: 'table',
            title: 'Reporting guideline by study design (EQUATOR)',
            headers: ['Study type', 'Guideline', 'Signature required element'],
            rows: [
              ['Cohort / case-control / cross-sectional', 'STROBE', 'Flow of participants; how confounding was addressed'],
              ['Randomised controlled trial', 'CONSORT', 'CONSORT flow diagram; randomisation & allocation concealment'],
              ['Systematic review / meta-analysis', 'PRISMA 2020', 'PRISMA flow diagram; search strategy; risk of bias'],
              ['Diagnostic accuracy', 'STARD', '2×2 table; reference standard'],
              ['Prediction model', 'TRIPOD', 'Model development/validation; calibration'],
              ['Case report', 'CARE', 'Timeline; patient perspective'],
              ['Quality improvement', 'SQUIRE', 'Context; iterative PDSA detail'],
            ],
          },
          {
            type: 'pearl',
            title: 'Register and pre-specify before you look',
            content:
              'For trials, prospective registration (e.g. ClinicalTrials.gov) is an ICMJE condition of publication. For any study, writing the statistical analysis plan — and naming the single primary outcome — before you see the data is the strongest defence against the accusation of p-hacking. A pre-registered analysis plan turns "we found" into "we confirmed".',
          },
        ],
      },
      {
        id: 'ch40-s2',
        title: 'Reporting Statistics Honestly',
        blocks: [
          {
            type: 'text',
            content:
              'The dominant statistical error in surgical papers is worshipping the **p-value**. A p-value is the probability of the data (or more extreme) under the null hypothesis; it is not the probability that the null is true, nor a measure of effect size or clinical importance. Report the **effect size with a 95% confidence interval** as the primary result — a hazard ratio of 0.62 (95% CI 0.44–0.87) tells a clinician far more than "p < 0.05". The confidence interval carries both the magnitude and the precision; the p-value carries neither.',
          },
          {
            type: 'list',
            title: 'Statistical reporting checklist (SAMPL-aligned)',
            items: [
              'Report the primary outcome effect size with a 95% confidence interval, not a bare p-value.',
              'Give exact p-values (p = 0.03), not "p < 0.05"; use "p < 0.001" only below that threshold.',
              'State the statistical test for every comparison and why it was appropriate (distribution, paired/unpaired).',
              'Report continuous data as mean (SD) if normal, median (IQR) if skewed — and say which.',
              'Distinguish pre-specified analyses from post-hoc/exploratory ones explicitly.',
              'For survival data, report median follow-up, the method (Kaplan–Meier/Cox), and numbers at risk.',
              'Correct for multiple comparisons, or flag the inflated type-I error if you do not.',
            ],
          },
          {
            type: 'pitfall',
            title: 'Data dredging and p-hacking',
            content:
              'Running twenty subgroup comparisons and reporting the one that reached p < 0.05 is p-hacking: at that threshold, one in twenty null comparisons is "significant" by chance alone. Selective outcome reporting — switching the primary endpoint after seeing the data — is the same sin in a different costume. Both are detectable (registered protocol vs published outcomes) and both can trigger retraction. Pre-specify, report everything you tested, and label exploratory findings as hypothesis-generating.',
          },
          {
            type: 'quote',
            content:
              'A p-value near 0.05 does not mean "true versus false"; it means "the data are somewhat surprising under the null". Statistical significance is not clinical significance, and the absence of significance is not the presence of no effect.',
          },
        ],
      },
      {
        id: 'ch40-s3',
        title: 'Tables, Figures, and What Earns Its Space',
        blocks: [
          {
            type: 'text',
            content:
              'Every table and figure competes for a finite budget — most journals allow four to six display items — and each must earn its place by conveying something the text cannot. Use a **table** for precise values a reader may want to extract (baseline characteristics, adjusted regression estimates). Use a **figure** for patterns, trends, and relationships the eye grasps faster than a column of numbers (Kaplan–Meier curves, forest plots, flow diagrams). Never present the same data as both a table and a figure, and never build a figure whose entire content is three numbers a sentence would carry better.',
          },
          {
            type: 'table',
            title: 'Table vs figure — choosing the right display',
            headers: ['Use a TABLE when…', 'Use a FIGURE when…'],
            rows: [
              ['Exact values matter (readers extract numbers)', 'The message is a trend, shape, or comparison'],
              ['Showing baseline characteristics (Table 1)', 'Showing survival over time (Kaplan–Meier)'],
              ['Reporting many variables with CIs', 'Showing subgroup effects (forest plot)'],
              ['Structured, categorical detail', 'Showing participant flow (CONSORT/PRISMA diagram)'],
              ['Precision > pattern', 'Pattern > precision'],
            ],
          },
          {
            type: 'text',
            content:
              'Good figure design follows Tufte\'s **data-ink** principle: maximise the ink that represents data, minimise everything else. Delete gridlines, 3-D effects, chartjunk, and redundant legends. Label axes with units, start count axes at zero when the baseline is meaningful, and choose colourblind-safe palettes (viridis, or the Okabe–Ito set) so the figure survives greyscale printing and the ~8% of male readers with colour-vision deficiency. For Kaplan–Meier plots, always include the **numbers-at-risk table** beneath the x-axis; a survival curve without it is uninterpretable at the tail.',
          },
          {
            type: 'key',
            title: 'Reusable figure/table submission checklist',
            content:
              'EACH DISPLAY ITEM:\n☐ Stands alone — legend explains it without the main text\n☐ Cited in the text, in numerical order\n☐ Adds something prose/other items do not (no duplication)\n☐ Units on every axis/column; abbreviations defined in a footnote\n☐ Colourblind-safe palette; legible in greyscale\n☐ ≥ 300 DPI raster or vector (PDF/EPS/SVG) for line art\n\nSTATISTICS IN DISPLAY:\n☐ Effect size + 95% CI shown, not just p\n☐ Kaplan–Meier: numbers-at-risk row + median follow-up\n☐ Forest plot: point estimate, CI, and reference line at 1.0\n☐ Sample size (n) stated for every group/cell',
          },
          {
            type: 'pearl',
            title: 'The self-contained figure test',
            content:
              'A reviewer should understand any figure from its legend alone, with the article closed. If understanding the figure requires hunting through the Methods for a definition, move that definition into the legend. Editors judge polish partly by whether display items are self-contained.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 41 ──────────────────────────────────────────────────────────────
  {
    id: 'ch41-abstract',
    number: '41',
    title: 'The Abstract — Structured & Conference',
    subtitle: 'Word economy, the 250-word discipline, title craft, and a fill-in template',
    icon: 'AlignLeft',
    reading_time_min: 24,
    level: 'Core',
    track: 'Academic Surgery',
    guidelines_version: 'CONSORT for Abstracts (Hopewell 2008) · PRISMA for Abstracts · ICMJE 2024',
    learning_objectives: [
      'Write a structured abstract with balanced Background/Methods/Results/Conclusions',
      'Achieve word economy within a strict 250–300-word limit',
      'Adapt an abstract for a conference (blind review) versus a journal',
      'Craft an informative, searchable title and select effective keywords/MeSH terms',
      'Apply CONSORT-for-Abstracts reporting items to a trial abstract',
    ],
    key_references: [
      'Hopewell S, Clarke M, Moher D, et al. CONSORT for reporting randomised trials in journal and conference abstracts. Lancet 2008;371:281–283.',
      'Beller EM, et al. PRISMA for Abstracts. PLoS Med 2013;10(4):e1001419.',
      'ICMJE. Recommendations… Preparing for Submission — Abstract. Updated 2024.',
    ],
    sections: [
      {
        id: 'ch41-s1',
        title: 'The Structured Abstract and the 250-Word Discipline',
        blocks: [
          {
            type: 'text',
            content:
              'The abstract is the most-read and least-carefully-written part of most papers. It is what appears in PubMed, what a programme committee scores, and what a busy clinician reads instead of the full text. It is also frequently drafted last and in haste — a mistake, because for every reader who reaches your Discussion, a hundred stop at the abstract. Treat it as a self-contained miniature of the whole paper, structured into **Background, Methods, Results, and Conclusions**, and obeying a hard word limit — usually 250 to 300 words.',
          },
          {
            type: 'text',
            content:
              'Word economy is the whole game. Within ~250 words the **Results** deserve the largest share — this is where numbers earn their place — and the Background the smallest, often a single sentence of context plus one sentence of aim. Every phrase must carry information: cut "It is well known that", "In order to", "A total of", and "the present study". Include the actual numbers (n, primary outcome effect size with CI, key p-value); an abstract that says "outcomes were better" without the figures is worthless to the reader deciding whether to read on.',
          },
          {
            type: 'table',
            title: 'Structured abstract — budget within 250 words',
            headers: ['Element', 'Content', 'Approx. words'],
            rows: [
              ['Background/Objective', '1 sentence context + 1 sentence aim/hypothesis', '35–45'],
              ['Methods', 'Design, setting, participants, primary outcome, analysis', '55–70'],
              ['Results', 'n, baseline, PRIMARY outcome with effect size + 95% CI, key secondary', '90–110'],
              ['Conclusions', 'Direct answer to the aim + one implication (no new data)', '30–40'],
            ],
          },
          {
            type: 'key',
            title: 'Fill-in structured abstract template',
            content:
              'BACKGROUND: [Condition] carries [burden/prognosis]. It is uncertain whether [gap]. We aimed to [primary objective] in [population].\n\nMETHODS: We conducted a [design] at [setting] between [dates]. [N] patients undergoing [intervention] were included. The primary outcome was [outcome], analysed by [method]. [Key adjustment / stratification].\n\nRESULTS: Of [N] patients (median age __, __% male), [baseline]. The primary outcome occurred in __% vs __% ([effect size], 95% CI __ to __; p = __). [One key secondary result with numbers.] [One safety/complication figure.]\n\nCONCLUSIONS: Among [population], [intervention] [did/did not] [effect on outcome]. These findings [implication for practice or the next study]. [Trial registration: NCT________ if applicable.]',
          },
          {
            type: 'pitfall',
            title: 'The abstract that does not match the paper',
            content:
              'Reviewers cross-check the abstract against the Results. Numbers that differ between abstract and text, a "conclusion" that the data do not support, or a primary outcome in the abstract that differs from the registered one are red flags that trigger rejection. Update the abstract last, after the final analysis, and verify every figure against Table 2.',
          },
        ],
      },
      {
        id: 'ch41-s2',
        title: 'Conference vs Journal Abstracts',
        blocks: [
          {
            type: 'text',
            content:
              'A conference abstract is not just a shorter journal abstract — it is written for a different audience under different rules. It is usually reviewed **blind** by a programme committee scoring dozens of submissions in one sitting, often against a tighter limit (250 words) and a fixed template. Its job is to win a podium or poster slot, so the **novelty and the headline result must be unmistakable in the first two sentences**. Late-breaking data may be presented as preliminary; journal abstracts must report final, complete results.',
          },
          {
            type: 'table',
            title: 'Conference vs journal abstract',
            headers: ['Feature', 'Conference abstract', 'Journal abstract'],
            rows: [
              ['Reviewer', 'Blind programme committee, scoring many', 'Editor + peer reviewers with full text'],
              ['Goal', 'Win a presentation slot', 'Summarise the published paper'],
              ['Data maturity', 'May be preliminary / interim', 'Final, complete'],
              ['Length', 'Often ≤250 words, fixed fields', '250–300 words, journal template'],
              ['Emphasis', 'Novelty in first 2 sentences', 'Balanced, faithful summary'],
              ['Anonymity', 'Usually author-blinded', 'Named authorship'],
            ],
          },
          {
            type: 'pearl',
            title: 'For blind review, lead with the result',
            content:
              'A programme committee member may read only the first and last sentences of 200 abstracts. Put your single most important finding — with the number — in the opening lines, and restate it as the conclusion. Do not save the punchline; a committee cannot reward a result it did not notice.',
          },
          {
            type: 'text',
            content:
              'For randomised trials, the **CONSORT extension for abstracts** (Hopewell et al., 2008) specifies the minimum items even a space-limited abstract must contain: trial design, participants, interventions, primary outcome, randomisation, numbers analysed, the primary outcome result with effect size and precision, harms, and registration. PRISMA has an equivalent abstract checklist for systematic reviews. Conference organisers increasingly require adherence, and journals reject trial abstracts that omit the registered primary outcome or its confidence interval.',
          },
        ],
      },
      {
        id: 'ch41-s3',
        title: 'Titles and Keywords',
        blocks: [
          {
            type: 'text',
            content:
              'The title is read by orders of magnitude more people than the abstract, and search engines index it most heavily. An informative surgical title names the **population, the intervention/exposure, the outcome, and often the design** — for example, "Cytoreductive surgery with versus without HIPEC for colorectal peritoneal metastases: a multicentre randomised trial." Avoid declarative titles that state the result as universal truth ("HIPEC improves survival"), question titles for original research, and cute wordplay that defeats indexing. Keep it under ~15 words.',
          },
          {
            type: 'list',
            title: 'Title do and do-not',
            items: [
              'DO name population + intervention + outcome (+ design for trials/reviews).',
              'DO front-load the most searchable terms; readers scan the first words.',
              'DO match the study type — "a systematic review", "a cohort study".',
              'DO NOT overstate — a single study title should not read as established fact.',
              'DO NOT use undefined abbreviations or clever puns that harm discoverability.',
              'DO NOT pose a yes/no question as the title of an original study.',
            ],
          },
          {
            type: 'text',
            content:
              'Keywords and **MeSH terms** determine whether the right readers ever find the paper. Choose 3–6 terms that are *not* already in the title (to widen retrieval), draw them from the MeSH controlled vocabulary where possible, and include both the specific concept (e.g. "Hyperthermic Intraperitoneal Chemotherapy") and the broader field (e.g. "Peritoneal Neoplasms"). Discoverability is part of impact: an unfindable paper cannot be cited.',
          },
          {
            type: 'pitfall',
            title: 'The clever title nobody can find',
            content:
              'A pun or literary allusion may delight the author and bury the paper. "To cook or not to cook: the HIPEC dilemma" contains no searchable clinical terms. If you must be witty, put the wit before a colon and the informative, indexable subtitle after it.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 42 ──────────────────────────────────────────────────────────────
  {
    id: 'ch42-presentations',
    number: '42',
    title: 'Scientific Presentations & Slide Design',
    subtitle: 'The oral arc, one-idea-per-slide, assertion-evidence design, rehearsal, and Q&A',
    icon: 'Presentation',
    reading_time_min: 26,
    level: 'Core',
    track: 'Academic Surgery',
    guidelines_version: 'Assertion-Evidence model (Alley) · Tufte data-ink · SSO/ESSO podium conventions',
    learning_objectives: [
      'Structure a 10-minute podium talk with a clear narrative arc',
      'Design slides on the one-idea-per-slide and assertion-evidence principles',
      'Apply data-ink and visual-hierarchy rules to clinical slides',
      'Rehearse to time and deliver without reading slides',
      'Handle Q&A — including hostile or unanswerable questions — with composure',
    ],
    key_references: [
      'Alley M. The Craft of Scientific Presentations. 2nd ed. Springer, 2013 (assertion-evidence model).',
      'Tufte ER. The Visual Display of Quantitative Information. 2nd ed. Graphics Press, 2001.',
      'Reynolds G. Presentation Zen. New Riders, 2011.',
    ],
    sections: [
      {
        id: 'ch42-s1',
        title: 'The 10-Minute Podium Talk — Narrative Arc',
        blocks: [
          {
            type: 'text',
            content:
              'The standard oncology podium slot is eight to ten minutes plus two for questions — roughly one slide per minute, so **10–12 content slides**, no more. That constraint forces a story, not a data dump. The arc mirrors IMRAD but compresses it: a **hook** (why this matters, in one clinical sentence), the **gap and question**, a lean **methods** slide, the **results** built one finding at a time with the primary outcome given a slide of its own, and a **conclusion** slide carrying a single take-home the audience will remember at coffee. Spend the first thirty seconds making the audience care; spend the last thirty repeating your one message.',
          },
          {
            type: 'table',
            title: 'A 10-slide podium storyboard',
            headers: ['Slide', 'Content', 'Time'],
            rows: [
              ['1', 'Title + disclosures', '15 s'],
              ['2', 'Clinical hook — why this matters', '45 s'],
              ['3', 'Gap + specific question/aim', '45 s'],
              ['4', 'Methods — design/population (one slide)', '75 s'],
              ['5', 'Baseline / flow diagram', '45 s'],
              ['6', 'PRIMARY result (own slide, big)', '90 s'],
              ['7–8', 'Key secondary / subgroup results', '120 s'],
              ['9', 'Limitations (brief, honest)', '30 s'],
              ['10', 'Take-home message (one sentence)', '45 s'],
            ],
          },
          {
            type: 'pearl',
            title: 'Tell them what to remember',
            content:
              'An audience retains one idea from a ten-minute talk. Decide in advance what that idea is, state it on the conclusion slide verbatim, and say it out loud twice — once when you reach it and once as your final sentence. If your talk had a subtitle, that is the sentence.',
          },
        ],
      },
      {
        id: 'ch42-s2',
        title: 'Slide Design — One Idea, Assertion-Evidence',
        blocks: [
          {
            type: 'text',
            content:
              'The dominant slide-design error in surgical meetings is the **bullet-list slide** read aloud by the speaker. It splits attention (the audience reads ahead), it is dull, and it hides the message. The **assertion-evidence** model (Michael Alley) replaces it: the slide headline is a full **assertion sentence** stating the point — "HIPEC did not improve overall survival after complete cytoreduction" — and the body is **visual evidence** (a graph, an image, a small table) rather than a list of phrases. One idea per slide; if a slide needs two headlines, it is two slides.',
          },
          {
            type: 'list',
            title: 'Slide design rules',
            items: [
              'One idea per slide; the headline is a complete sentence stating that idea.',
              'Evidence, not text: a figure/image supports the headline instead of bullet fragments.',
              'Maximise data-ink — delete gridlines, logos on every slide, 3-D charts, drop shadows.',
              'Large sans-serif type (≥24 pt body, ≥28 pt headline); readable from the back row.',
              'High contrast; colourblind-safe palette; never rely on red/green to carry meaning.',
              'Build complex figures progressively (appear one element at a time) to guide the eye.',
              'Number slides; keep a consistent template; no distracting transitions/animations.',
            ],
          },
          {
            type: 'table',
            title: 'Bullet slide vs assertion-evidence slide',
            headers: ['Traditional bullet slide', 'Assertion-evidence slide'],
            rows: [
              ['Topic-phrase title ("Results")', 'Full-sentence assertion ("HIPEC did not improve OS")'],
              ['5–7 bullet fragments', 'One supporting figure/image'],
              ['Speaker reads the slide', 'Speaker interprets the visual'],
              ['Audience reads ahead', 'Audience listens, eyes on the evidence'],
              ['Message hidden in the list', 'Message is the headline'],
            ],
          },
          {
            type: 'pitfall',
            title: 'Reading your slides to the audience',
            content:
              'If every word you say is on the screen, the audience does not need you — and they will read faster than you speak, then disengage. Slides are evidence for your spoken argument, not a teleprompter. Put the sentence on the slide, then say something that adds to it: the mechanism, the caveat, the clinical so-what.',
          },
        ],
      },
      {
        id: 'ch42-s3',
        title: 'Rehearsal and Handling Q&A',
        blocks: [
          {
            type: 'text',
            content:
              'Rehearsal separates the polished from the painful. Practise aloud, standing, to time, at least three times — the first pass reveals that you are two minutes over, the third fixes it. Rehearse the **opening and closing sentences to the word**; a confident first and last line frames everything between. Time yourself against the podium limit, because chairs cut off overrunning speakers and nothing damages a talk like being stopped mid-result. Know your transitions cold so you never turn to read your own slide.',
          },
          {
            type: 'key',
            title: 'Reusable Q&A response framework',
            content:
              'STRUCTURE FOR EVERY ANSWER:\n1. THANK / acknowledge: "Thank you, that\'s an important point."\n2. RESTATE briefly (buys thinking time + ensures the room heard it).\n3. ANSWER directly and concisely — lead with your actual answer.\n4. BOUND it to your data: "In our cohort we saw X; beyond that would be speculation."\n\nIF YOU DO NOT KNOW:\n"That\'s a great question and we did not measure that — it would be an important next study." (Never bluff.)\n\nIF THE QUESTION IS HOSTILE:\nStay calm, concede any valid point ("You\'re right that the design is retrospective"), defend the core finding, do not get defensive or argue. The room is watching your composure as much as your data.',
          },
          {
            type: 'pearl',
            title: '"I don\'t know" is a strong answer',
            content:
              'Bluffing an answer you do not have is the fastest way to lose a room of experts — someone always knows. Honestly saying "we did not study that; it is a good next question" signals scientific integrity and often earns more respect than a confident wrong answer.',
          },
          {
            type: 'pitfall',
            title: 'Arguing with the questioner',
            content:
              'A hostile or mistaken question is not a duel. Getting defensive, talking over the questioner, or dismissing the point makes you — not them — look bad to the audience. Acknowledge the valid kernel, restate your evidence once, and move on. You are performing for the whole room, not just the person at the microphone.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 43 ──────────────────────────────────────────────────────────────
  {
    id: 'ch43-posters-visual-abstracts',
    number: '43',
    title: 'Poster Design & Visual Abstracts',
    subtitle: 'Column layout, figure-first thinking, the elevator pitch, and visual abstracts for social media',
    icon: 'LayoutPanelLeft',
    reading_time_min: 24,
    level: 'Core',
    track: 'Academic Surgery',
    guidelines_version: 'Tufte data-ink · #betterposter principles · journal visual-abstract standards',
    learning_objectives: [
      'Lay out a scientific poster with logical column flow and generous whitespace',
      'Apply figure-first design so the poster communicates at a glance and from a distance',
      'Choose readable typography and colour for print at poster scale',
      'Deliver a 60-second elevator pitch at the poster',
      'Build a visual abstract that spreads a study on social media, with QR handouts',
    ],
    key_references: [
      'Tufte ER. The Visual Display of Quantitative Information. Graphics Press, 2001.',
      'Ibrahim AM, et al. Visual abstracts to disseminate research on social media. Ann Surg 2017 (the Annals of Surgery visual-abstract program).',
      'Morrison M. How to create a better research poster in less time (#betterposter). 2019.',
    ],
    sections: [
      {
        id: 'ch43-s1',
        title: 'Poster Layout, Flow, and Whitespace',
        blocks: [
          {
            type: 'text',
            content:
              'A poster is read standing, in a crowded hall, in under a minute, from a metre away. It is not a paper pasted to a board. The traditional layout is **two to four vertical columns** read top-to-bottom then left-to-right, following the IMRAD order but radically condensed. The single most common failure is **too much text**: aim for under ~800 words on the whole poster. Ruthless whitespace is a feature, not wasted space — it guides the eye and signals confidence. Give the title, one headline finding, and one central figure the majority of the visual weight.',
          },
          {
            type: 'table',
            title: 'Poster section budget (typical 3-column A0)',
            headers: ['Zone', 'Content', 'Visual weight'],
            rows: [
              ['Header band', 'Title, authors, affiliations, logo, QR code', 'High — largest type on the poster'],
              ['Column 1', 'Background (2–3 sentences) + Aim + Methods (brief)', 'Low text, supportive'],
              ['Centre / column 2', 'THE key figure or result — the hero element', 'Highest — draws the eye first'],
              ['Column 3', 'Key results (bulleted numbers) + Conclusion', 'Medium; conclusion boxed'],
              ['Footer', 'References (small), funding, contact/QR', 'Low'],
            ],
          },
          {
            type: 'text',
            content:
              'The modern **#betterposter** movement pushes this further: place a single plain-language headline finding — the "so what" — in giant type down the centre, with the conventional detail relegated to a narrow side column and a QR code linking to the full paper. Whether or not you adopt the full format, its lesson holds: a passer-by should grasp your main result from three metres without reading a paragraph.',
          },
          {
            type: 'pearl',
            title: 'The three-metre test',
            content:
              'Print your poster at thumbnail size, or step three metres back on screen. If you cannot read the title and identify the main finding from there, the type is too small and the message too buried. The best posters are legible before they are read.',
          },
        ],
      },
      {
        id: 'ch43-s2',
        title: 'Typography, Figure-First Design, and the Elevator Pitch',
        blocks: [
          {
            type: 'text',
            content:
              'Poster typography is governed by viewing distance. Titles should be roughly **72–120 pt**, section headings **36–48 pt**, and body text no smaller than **24 pt** — anything smaller vanishes at reading distance. Use a clean sans-serif, left-align body text (never justify, which creates rivers of white), and keep to two typefaces at most. Colour should be restrained: a single accent colour, high contrast against the background, and colourblind-safe. Dark text on a light background reads best in bright convention-hall lighting.',
          },
          {
            type: 'text',
            content:
              '**Figure-first** design means the poster is built around its images, not its text. Choose one hero figure — the Kaplan–Meier curve, the forest plot, the before/after image — enlarge it, and let it anchor the centre. Text exists to caption and frame the figures, not the reverse. A poster that is mostly prose has failed at the one thing the format is good for: rapid visual communication.',
          },
          {
            type: 'key',
            title: 'Reusable 60-second poster elevator pitch',
            content:
              '(0–10 s) HOOK: "We looked at whether [intervention] helps in [population] — a group where the evidence is thin."\n\n(10–25 s) METHODS: "We studied [N] patients [design] and measured [primary outcome]."\n\n(25–45 s) RESULT: "The headline is this: [primary finding with the number], shown in this figure here." (point to hero figure)\n\n(45–55 s) SO WHAT: "So for practice, [implication] — though [one honest limitation]."\n\n(55–60 s) OPEN: "Happy to go into any part in more detail — and the full paper is on this QR code."',
          },
          {
            type: 'pitfall',
            title: 'The poster that is a shrunken manuscript',
            content:
              'Copy-pasting Methods paragraphs and full reference lists onto a poster guarantees that no one reads it. Walkers-by scan; they do not settle in to read a wall of 14-pt text. Cut to numbers, figures, and headline sentences, and let the QR code carry the detail for the few who want it.',
          },
        ],
      },
      {
        id: 'ch43-s3',
        title: 'Visual Abstracts and Digital Dissemination',
        blocks: [
          {
            type: 'text',
            content:
              'A **visual abstract** is a single graphic that summarises a study\'s design and headline result for social media — pioneered by *Annals of Surgery* (Ibrahim et al., 2017), which showed that tweets carrying a visual abstract achieved several-fold more impressions and article visits than text-only tweets. It typically has three panels: the **question/population**, the **study design/intervention** (with icons and the n), and the **primary result** (one number or one small chart). It is not a poster and not an abstract; it is a shareable, self-explanatory image built to stop a scroll.',
          },
          {
            type: 'table',
            title: 'Poster vs visual abstract',
            headers: ['Feature', 'Poster', 'Visual abstract'],
            rows: [
              ['Venue', 'Conference hall, in person', 'Social media / journal feed'],
              ['Size', 'A0 print, columns', 'Single square/landscape image'],
              ['Reading time', '~60 seconds', '~5 seconds (a scroll-stopper)'],
              ['Content', 'Whole study, condensed', 'Question → design → one result'],
              ['Interaction', 'Author present, elevator pitch', 'None — must be fully self-explanatory'],
              ['Goal', 'Discussion at the board', 'Reach, clicks, citation potential'],
            ],
          },
          {
            type: 'pearl',
            title: 'Design for the phone screen',
            content:
              'Most people will see your visual abstract on a phone, thumbnail-sized, without clicking. Use big icons, three or fewer panels, minimal text, and one dominant number. If the main result is not legible at thumbnail size, redesign it. Add your handle and the article DOI/QR so the graphic carries its own citation when it is reshared.',
          },
          {
            type: 'pitfall',
            title: 'Overloading the visual abstract with data',
            content:
              'The temptation is to cram the whole Results table into the graphic. A visual abstract with five sub-results and dense captions communicates nothing at scroll speed. Pick the one finding that matters, show it once, large, and let the linked paper carry the rest.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 44 ──────────────────────────────────────────────────────────────
  {
    id: 'ch44-getting-published',
    number: '44',
    title: 'Getting Published — Journals, Submission & Peer Review',
    subtitle: 'Journal selection, authorship ethics, the cover letter, responding to reviewers, and rejection',
    icon: 'Send',
    reading_time_min: 28,
    level: 'Advanced',
    track: 'Academic Surgery',
    guidelines_version: 'ICMJE Recommendations 2024 · COPE guidance · DOAJ / Think-Check-Submit',
    learning_objectives: [
      'Select an appropriate journal by scope, audience, and impact metrics — and their limits',
      'Apply ICMJE authorship criteria and avoid gift/ghost authorship',
      'Write an effective cover letter and navigate the submission workflow',
      'Respond to reviewers point-by-point with the right tone',
      'Handle rejection constructively and recognise predatory journals and the role of preprints',
    ],
    key_references: [
      'ICMJE. Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals — Defining the Role of Authors and Contributors. Updated 2024.',
      'Committee on Publication Ethics (COPE). Core Practices and flowcharts. publicationethics.org.',
      'Think. Check. Submit. (thinkchecksubmit.org) and the Directory of Open Access Journals (DOAJ).',
    ],
    sections: [
      {
        id: 'ch44-s1',
        title: 'Choosing a Journal and Reading Impact Metrics Critically',
        blocks: [
          {
            type: 'text',
            content:
              'Journal selection is a strategic decision made *before* the final draft, because scope and format shape the paper. Match on three axes: **scope** (does the journal publish your topic and design?), **audience** (who do you want to read this — general surgeons, surgical oncologists, or a peritoneal-surface subspecialty readership?), and **level** (is this a landmark trial for a top-tier journal or a solid cohort for a specialty journal?). Aim honestly but not timidly; a well-matched specialty journal beats a rejected reach for a general one, but under-selling a strong study wastes its reach.',
          },
          {
            type: 'text',
            content:
              'Impact metrics inform this but must be read critically. The **Journal Impact Factor** is the mean citations in one year to the prior two years\' articles — a journal-level, skewed, discipline-dependent number that says nothing about an individual paper\'s quality. Surgical journals have structurally lower impact factors than basic-science journals because clinical literature cites more slowly and sparsely. Use the impact factor as one input among audience fit, indexing (PubMed/MEDLINE), open-access policy, time-to-decision, and acceptance rate — not as a target in itself.',
          },
          {
            type: 'table',
            title: 'Journal metrics — what they mean and their limits',
            headers: ['Metric', 'What it measures', 'Key limitation'],
            rows: [
              ['Impact Factor (JIF)', 'Mean citations/2 yr, journal level', 'Skewed by a few papers; field-dependent; not article quality'],
              ['CiteScore', 'Scopus citations over 4 yr', 'Similar caveats; broader window'],
              ['SJR / SNIP', 'Prestige- and field-normalised citation', 'Complex; less intuitive'],
              ['h-index (journal/author)', 'Productivity + impact combined', 'Grows with career length; field-dependent'],
              ['Acceptance rate / time-to-decision', 'Selectivity / speed', 'Not published by all journals'],
              ['Altmetric', 'Online attention/sharing', 'Attention ≠ quality'],
            ],
          },
          {
            type: 'pearl',
            title: 'Scope beats impact factor',
            content:
              'Editors desk-reject on scope mismatch more than on quality. Read the journal\'s aims and a few recent issues before submitting: a peritoneal-surface study lands better in a surgical-oncology journal that regularly publishes CRS/HIPEC work than in a higher-impact general journal that rarely touches the topic and will bounce it in a week.',
          },
        ],
      },
      {
        id: 'ch44-s2',
        title: 'Authorship Ethics and the Submission Workflow',
        blocks: [
          {
            type: 'text',
            content:
              'The **ICMJE four criteria** define who may be listed as an author. All four must be met: (1) substantial contribution to conception/design or acquisition/analysis/interpretation of data; (2) drafting or critically revising the work; (3) final approval of the version to be published; and (4) agreement to be accountable for the work\'s integrity. The head of department who did none of these is a **gift author**; the medical writer who drafted the paper but is not listed is a **ghost author**. Both violate publication ethics. Everyone who contributed but does not meet all four criteria belongs in the Acknowledgements, not the byline.',
          },
          {
            type: 'table',
            title: 'ICMJE authorship — the four criteria (all required)',
            headers: ['#', 'Criterion'],
            rows: [
              ['1', 'Substantial contributions to conception/design OR acquisition/analysis/interpretation of data'],
              ['2', 'Drafting the work OR revising it critically for important intellectual content'],
              ['3', 'Final approval of the version to be published'],
              ['4', 'Accountability for all aspects — agreeing to investigate/resolve questions of integrity'],
            ],
          },
          {
            type: 'list',
            title: 'Submission workflow — what most journals require',
            items: [
              'Cover letter to the editor',
              'Title page (authors, affiliations, corresponding author, word counts)',
              'Blinded main manuscript (IMRAD) with tables/figures',
              'Completed reporting-guideline checklist (STROBE/CONSORT/PRISMA) with page numbers',
              'ICMJE conflict-of-interest disclosure for every author',
              'Ethics/IRB approval statement and, for trials, the registration number',
              'Data-sharing statement and author-contribution (CRediT) statement',
              'Suggested (and optionally opposed) reviewers',
            ],
          },
          {
            type: 'key',
            title: 'Reusable cover letter template',
            content:
              'Dear Dr [Editor],\n\nPlease consider our manuscript, "[Title]", for publication as an [article type] in [Journal].\n\n[1 sentence: the question]. [1–2 sentences: what we did and the single most important finding, with the headline number].\n\nThis work matters to your readership because [fit to journal scope + why it advances the field / changes practice]. To our knowledge it is the first to [novelty claim].\n\nThe manuscript is original, is not under consideration elsewhere, and all authors meet ICMJE criteria and approve submission. [Trial registration NCT______ / We report no / the following conflicts of interest]. We suggest the following reviewers: [names + reasons].\n\nThank you for considering our work.\n\nSincerely, [Corresponding author, on behalf of all authors]',
          },
          {
            type: 'pitfall',
            title: 'Gift and ghost authorship',
            content:
              'Adding your chief "out of respect" when they never saw the data, or omitting the statistician/writer who did substantial intellectual work, are both misconduct under ICMJE and COPE. Authorship disputes are among the most common and most damaging problems in academic surgery. Agree the author list and order in writing at the start of the project, using the four criteria, and revisit it if contributions change.',
          },
        ],
      },
      {
        id: 'ch44-s3',
        title: 'Peer Review, Rejection, and the Predatory Landscape',
        blocks: [
          {
            type: 'text',
            content:
              'Most decisions are "major revision" — which is good news, an invitation to improve and resubmit, not a rejection. The response is a **point-by-point letter**: reproduce every reviewer comment verbatim, respond to each individually, and show exactly what you changed and where (page and line). Tone is decisive: be **courteous, thorough, and non-defensive**, thank the reviewers, and concede valid points gracefully. When you disagree, do so respectfully and with evidence — the editor arbitrates, and a gracious, well-argued rebuttal often wins. Address every single comment; a skipped comment reads as evasion.',
          },
          {
            type: 'key',
            title: 'Reusable point-by-point response format',
            content:
              'We thank the reviewers for their careful and constructive appraisal. We have revised the manuscript accordingly; changes are marked in the revised file. Our point-by-point responses follow.\n\nReviewer 1\n\nComment 1.1: [paste the reviewer\'s exact comment]\nResponse: We thank the reviewer for this point. We agree/We have clarified… We have [specific change] (page __, lines __). [If disagreeing:] We respectfully note that… because [evidence]; we have added a sentence acknowledging this (page __).\n\nComment 1.2: […]\nResponse: […]\n\n(Repeat for every comment from every reviewer. Never skip one.)',
          },
          {
            type: 'text',
            content:
              'Rejection is routine — even excellent papers are rejected, often on scope or fit rather than merit. Read the reviews for any usable feedback, improve the manuscript, and resubmit to the next appropriate journal promptly; do not let a rejected paper languish. What you must avoid is the **predatory journal**: a fake open-access outlet that takes an author fee, provides no genuine peer review, and can taint your record permanently. Use **Think-Check-Submit** and the **DOAJ** to vet any unfamiliar journal, and be suspicious of unsolicited invitations, spurious impact-factor claims, and promises of publication in days.',
          },
          {
            type: 'table',
            title: 'Red flags of a predatory journal',
            headers: ['Warning sign', 'Legitimate journals instead…'],
            rows: [
              ['Aggressive email solicitation for submissions', 'Rarely cold-email individual authors'],
              ['Promise of acceptance/publication in days', 'Peer review takes weeks to months'],
              ['Fake or non-standard "impact factor"', 'List a real, verifiable JIF or none'],
              ['No clear peer-review process or editorial board', 'Named, verifiable board; described review'],
              ['Not indexed in PubMed/MEDLINE/DOAJ', 'Indexed in recognised databases'],
              ['Hidden or surprise article fees', 'Transparent APCs stated upfront'],
            ],
          },
          {
            type: 'pearl',
            title: 'Preprints are legitimate — predatory journals are not',
            content:
              'Posting a preprint (e.g. on a recognised server) before or during peer review is increasingly accepted and speeds dissemination; ICMJE and most surgical journals permit it — check the specific journal\'s policy. That is entirely different from paying a predatory journal. A preprint establishes priority openly and for free; a predatory journal buys a worthless imprimatur and can damage your reputation.',
          },
          {
            type: 'pitfall',
            title: 'The defensive rebuttal',
            content:
              'Arguing with reviewers, dismissing their comments, or answering "we disagree" without evidence is the surest way to convert a major revision into a rejection. Even when a reviewer is wrong, the editor is watching how you handle criticism. Thank them, engage the substance, and let the data — not your indignation — carry the disagreement.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 45 ──────────────────────────────────────────────────────────────
  {
    id: 'ch45-academic-career',
    number: '45',
    title: "The Academic Surgeon's Career & Portfolio",
    subtitle: 'Building a research line, mentorship, consortia, identifiers, grants, and the path to independence',
    icon: 'GraduationCap',
    reading_time_min: 23,
    level: 'Core',
    track: 'Academic Surgery',
    guidelines_version: 'ICMJE 2024 · ORCID · PSOGI / BIG-RENAPE consortia · ESSO/SSO academic tracks',
    learning_objectives: [
      'Build a coherent, cumulative research line rather than scattered one-off papers',
      'Use mentorship and collaboration (consortia, registries) to multiply output',
      'Establish a professional academic identity (ORCID, Google Scholar) and track impact',
      'Understand the grant landscape and the logic of a fundable proposal',
      'Map the transition from resident to independent investigator',
    ],
    key_references: [
      'ICMJE. Recommendations… Roles and Responsibilities. Updated 2024.',
      'ORCID (orcid.org) — persistent researcher identifier; ORCID Inc.',
      'PSOGI (Peritoneal Surface Oncology Group International) and BIG-RENAPE / RENAPE peritoneal registries.',
    ],
    sections: [
      {
        id: 'ch45-s1',
        title: 'Building a Research Line and Using Mentorship',
        blocks: [
          {
            type: 'text',
            content:
              'The difference between a surgeon with twenty scattered papers and an academic surgeon with twenty papers is **coherence**. A research line is a sustained programme around a defined question — for example, "optimising patient selection for CRS+HIPEC in colorectal peritoneal metastases" — where each paper builds on the last: a single-centre cohort, then a multicentre registry analysis, then a prediction model, then a trial. Reviewers, promotion committees, and grant panels recognise and reward a *trajectory*. Choose a niche narrow enough to own and broad enough to sustain a decade of questions.',
          },
          {
            type: 'text',
            content:
              '**Mentorship** is the highest-leverage accelerant in an academic career, in both directions. Early on, a good mentor supplies the question, the method, the network, and the honest critique that a textbook cannot. Later, mentoring residents and fellows multiplies your output — supervised trainees drive registry analyses, systematic reviews, and audits under your research line — while building the succession that a durable programme needs. Deliberately seek mentors outside your own institution too; the best collaborations often begin at meetings, not in the corridor.',
          },
          {
            type: 'key',
            title: 'Reusable 3-year academic development plan',
            content:
              'RESEARCH LINE\n☐ One-sentence programmatic question I will own: ______________________\n☐ 3 linked projects that build on each other (cohort → registry → model/trial)\n\nOUTPUT TARGETS (annual)\n☐ __ first/senior-author papers · __ collaborative papers · __ abstracts (ESSO/SSO/PSOGI)\n☐ 1 systematic review or meta-analysis in the niche\n\nSKILLS / TRAINING\n☐ Statistics / clinical epidemiology course · GCP certification · a methods skill (e.g. survival analysis)\n\nNETWORK\n☐ 1 external mentor · join 1 consortium/registry · present at 1 international meeting\n\nINFRASTRUCTURE\n☐ ORCID linked to all outputs · Google Scholar profile · reference manager · data-management plan',
          },
          {
            type: 'pearl',
            title: 'Own a question, not a technique',
            content:
              'Careers built on "I do this operation" plateau; careers built on "I answer this question" compound. Frame your programme around a clinical uncertainty you can attack from many angles over years — that is what turns a stack of papers into a body of work and a body of work into a reputation.',
          },
        ],
      },
      {
        id: 'ch45-s2',
        title: 'Collaboration, Consortia, and Academic Identity',
        blocks: [
          {
            type: 'text',
            content:
              'Peritoneal-surface malignancy is rare, so single centres accrue too few cases to answer hard questions — which is exactly why **consortia and registries** built the field. Groups such as **PSOGI** (Peritoneal Surface Oncology Group International) and national registries like **RENAPE/BIG-RENAPE** in France pool thousands of cases, enabling adequately powered analyses no single unit could produce. For an early-career surgeon, joining a consortium is the fastest route to meaningful data, co-authorship, and a network. Contribute cases and effort, and the collaborative papers — and eventually trial participation — follow.',
          },
          {
            type: 'text',
            content:
              'A professional academic identity makes your work findable and correctly attributed. **ORCID** is a free, persistent digital identifier that disambiguates you from every other surgeon with your surname and links to all your outputs; most journals and funders now require it at submission. A **Google Scholar** profile aggregates citations and computes your h-index automatically, and a **Scopus/Web of Science** author ID does the same in curated databases. Set these up once, keep them current, and every paper, review, and dataset accrues to a single, verifiable record.',
          },
          {
            type: 'table',
            title: 'Academic identity and impact tools',
            headers: ['Tool', 'What it does', 'Why it matters'],
            rows: [
              ['ORCID', 'Persistent unique researcher ID', 'Disambiguates authorship; required by journals/funders'],
              ['Google Scholar profile', 'Aggregates citations, h-index, i10-index', 'Free, broad coverage, public visibility'],
              ['Scopus / Web of Science ID', 'Curated citation record', 'Used in formal metrics and promotion'],
              ['Consortium / registry membership', 'Pooled multicentre data + network', 'Powers rare-disease research; co-authorship'],
              ['CRediT taxonomy', 'Structured contribution statement', 'Transparent, granular credit per author'],
            ],
          },
          {
            type: 'pitfall',
            title: 'Staying a permanent data-provider',
            content:
              'Contributing cases to a consortium without ever leading an analysis leaves you a middle-of-the-alphabet co-author forever. Use the access a consortium gives you to propose and drive a specific sub-study — that is how collaborators become first and senior authors, and how a registry becomes your research line rather than someone else\'s.',
          },
        ],
      },
      {
        id: 'ch45-s3',
        title: 'Grants and the Path to Independence',
        blocks: [
          {
            type: 'text',
            content:
              'Funding converts ideas into protected time and infrastructure, and learning to write grants is a career skill in its own right. Start small and local — institutional seed grants, society awards (ESSO, SSO, national surgical or oncology societies), and industry-independent foundation grants — and build a track record of delivering on modest funding before pursuing large national or European programmes. A fundable proposal is not just a good idea: it is a **specific aim, feasibility (preliminary data), a rigorous method, a realistic budget and timeline, and a team** that panels believe can deliver. The same clarity that makes a good paper makes a good grant.',
          },
          {
            type: 'table',
            title: 'From resident to independent investigator',
            headers: ['Stage', 'Research role', 'Typical outputs'],
            rows: [
              ['Resident', 'Contributor under a mentor', 'Case reports, audits, abstracts, co-authorships'],
              ['Fellow', 'Driving projects; learning methods', 'First-author cohort studies, systematic reviews, seed grants'],
              ['Junior attending', 'Leading a research line; supervising trainees', 'Senior-author papers, consortium sub-studies, society grants'],
              ['Independent investigator', 'Owning a programme; securing major funding', 'Multicentre studies, trials, national/EU grants, mentoring'],
            ],
          },
          {
            type: 'text',
            content:
              'Presenting at the field\'s meetings — **ESSO**, **SSO**, and the biennial **PSOGI** congress — is where the transition to independence becomes visible. A podium talk at PSOGI puts your work in front of the people who define the field, seeds collaborations, and builds the reputation that grant panels and search committees weigh. Combine consistent output within a coherent research line, a visible international presence, a funding track record, and a cohort of trainees you have mentored, and you have assembled the portfolio of an independent academic surgeon.',
          },
          {
            type: 'pearl',
            title: 'Feasibility sells a grant more than novelty',
            content:
              'Panels fund what they believe will actually be delivered. Preliminary data showing you can recruit the patients, run the assay, or access the registry does more to fund a proposal than an ambitious but unproven idea. Pilot small, publish the pilot, then cite it as the feasibility evidence in the larger application.',
          },
          {
            type: 'pitfall',
            title: 'Scattering effort across unrelated projects',
            content:
              'Saying yes to every project that crosses your desk produces a long, incoherent CV and no research line. Promotion and grant committees reward depth and trajectory over sheer count. Protect your programmatic question, and decline or delegate work that does not build it.',
          },
        ],
      },
    ],
  },
]
