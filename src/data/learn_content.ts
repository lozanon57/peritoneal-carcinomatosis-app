import type { LearnChapter } from '../types/learn'
import { TECHNIQUE_CHAPTERS } from './learn/technique_regional_periop'
import { DISEASE_CHAPTERS } from './learn/disease_deep'
import { EVIDENCE_CHAPTERS } from './learn/evidence_trials'
import { ACADEMIC_RESEARCH_CHAPTERS } from './learn/academic_research'
import { ACADEMIC_WRITING_CHAPTERS } from './learn/academic_writing'

// ─────────────────────────────────────────────────────────────────────────────
// LEARN CURRICULUM — Peritoneal Surface Oncology
// Board-quality, evidence-based teaching content in residency-course format.
// Sources: PSOGI Consensus 2022 · Chicago Consensus 2020 · NCCN 2024–2025 ·
//          ESMO 2023–2024 · JPGA (Japanese Gastric Cancer) Guidelines
// ─────────────────────────────────────────────────────────────────────────────

const FOUNDATION_CHAPTERS: LearnChapter[] = [
  // ── CHAPTER 01 ────────────────────────────────────────────────────────────
  {
    id: 'ch1-foundations',
    number: '01',
    title: 'Foundations of Peritoneal Surface Oncology',
    subtitle: 'Anatomy, redistribution, PCI, and the biology of peritoneal metastasis',
    icon: 'Layers',
    reading_time_min: 16,
    level: 'Foundation',
    guidelines_version: 'PSOGI Consensus 2022 · Chicago Consensus 2020 · Sugarbaker Peritoneal Carcinomatosis 3rd ed.',
    learning_objectives: [
      'Describe peritoneal anatomy and the routes of intraperitoneal tumour spread',
      'Explain the redistribution phenomenon and its surgical implications',
      'Calculate the Peritoneal Cancer Index (PCI) across 13 regions with 0–3 lesion-size scoring',
      'Define the Completeness of Cytoreduction (CC) score and its prognostic weight',
      'Outline the seed-and-soil biology of peritoneal metastasis and mesothelial adhesion',
    ],
    key_references: [
      'Sugarbaker PH. Peritoneal carcinomatosis: principles of management. 3rd ed.',
      'Jacquet P, Sugarbaker PH. Clinical research methodologies in diagnosis and staging of peritoneal carcinomatosis. Cancer Treat Res 1996.',
      'Chicago Consensus Working Group. Ann Surg Oncol 2020.',
    ],
    sections: [
      {
        id: 'ch1-s1',
        title: 'Peritoneal Anatomy & Routes of Spread',
        blocks: [
          {
            type: 'text',
            content:
              'The peritoneum is the largest serous membrane in the body, with a surface area (~1.8 m²) approaching that of the skin. It is a single layer of **mesothelial cells** resting on a basement membrane and a submesothelial stroma rich in lymphatics and blood vessels. The **visceral peritoneum** covers the abdominal organs; the **parietal peritoneum** lines the abdominal wall, diaphragm, and pelvis. Between them lies the peritoneal cavity — a potential space containing 50–100 mL of serous fluid that circulates continuously.',
          },
          {
            type: 'text',
            content:
              'Tumour reaches the peritoneal surface by four principal routes: (1) **transcoelomic (transperitoneal) spread** — the dominant route — where cells shed from a serosa-invading primary and disseminate via peritoneal fluid; (2) **direct extension** from a T4 primary; (3) **lymphatic spread** through diaphragmatic and omental lymphatics; and (4) **iatrogenic seeding** at the time of surgery. Serosal (T4a) penetration is the key permissive event: once tumour cells access the free peritoneal cavity they follow physiological fluid currents rather than random distribution.',
          },
          {
            type: 'key',
            title: 'Physiological fluid circulation drives deposition',
            content:
              'Peritoneal fluid moves cephalad along the paracolic gutters (right > left) toward the subphrenic spaces, drawn by the negative pressure and pumping action of the diaphragm, then drains through **diaphragmatic stomata** into subdiaphragmatic lymphatics. This directional flow explains why the right hemidiaphragm, greater omentum, and pelvis are the most heavily involved sites.',
          },
          {
            type: 'list',
            title: 'Anatomical watersheds of preferential deposition',
            items: [
              'Right subphrenic space and right hemidiaphragm (terminal point of paracolic flow and stomatal absorption)',
              'Greater omentum — the "policeman of the abdomen" — omental caking',
              'Pelvis (pouch of Douglas / rectovesical pouch) — most dependent point when upright',
              'Right paracolic gutter and ileocecal region (relative stasis at the pelvic brim)',
              'Ligament of Treitz and the antimesenteric border of the small bowel',
            ],
          },
          {
            type: 'pitfall',
            title: 'The small bowel is not "protected"',
            content:
              'A common error is to assume the peristaltic small bowel resists implantation. In reality **small-bowel and its mesentery involvement is the single most important determinant of unresectability** — extensive serosal disease on the jejuno-ileum precludes CC-0/1 without inducing short-bowel syndrome. The mobile bowel is spared *surface* caking but the mesenteric root and antimesenteric border are frequent, resectability-limiting sites.',
          },
        ],
      },
      {
        id: 'ch1-s2',
        title: 'The Redistribution Phenomenon',
        blocks: [
          {
            type: 'text',
            content:
              'Sugarbaker\'s **redistribution phenomenon** is the conceptual keystone of peritoneal surface oncology. Tumour cells that lack the ability to invade — classically the mucinous cells of pseudomyxoma peritonei — are carried passively by peritoneal fluid and redeposited at sites of fluid absorption and relative stasis. The result is a highly **predictable, non-random distribution**: heavy disease at the omentum, subphrenic spaces, and pelvis, with sparing of the mobile small-bowel surfaces that are constantly in motion.',
          },
          {
            type: 'quote',
            content:
              'Peritoneal dissemination is not chaos — it is fluid dynamics. Where the fluid pools and is absorbed, the tumour grows.',
          },
          {
            type: 'text',
            content:
              'The clinical corollary is profound: because distribution is anatomically predictable, complete surgical clearance is *feasible* even at very high tumour volume in non-invasive disease. This is why a pseudomyxoma patient with a PCI of 35 may still achieve CC-0, whereas an invasive adenocarcinoma with a PCI of 20 and small-bowel infiltration may be unresectable. **Distribution pattern and invasiveness — not tumour volume alone — govern resectability.**',
          },
          {
            type: 'pearl',
            title: 'Redistribution predicts the operative plan',
            content:
              'Anticipate disease at the "watershed" sites and plan the six peritonectomy procedures around them. In mucinous disease, greater omentectomy, pelvic peritonectomy, and right diaphragmatic stripping address the bulk of tumour; the mobile small bowel is often macroscopically clean and can be preserved — the anatomical basis for durable cures in low-grade PMP.',
          },
          {
            type: 'trial',
            title: 'Sugarbaker appendiceal series — redistribution enables cure',
            content:
              'In 385 patients with appendiceal peritoneal spread, low-grade disease treated with CRS+HIPEC achieved **5-year OS 86% and 10-year OS 68%**, versus 20% at 5 years for high-grade disease. The predictable, non-invasive redistribution of mucinous tumour is precisely what makes complete cytoreduction — and long-term cure — attainable despite very high PCI.',
            ref: 'Sugarbaker PH, Chang D. Ann Surg Oncol 1999;6(8):727–731.',
          },
        ],
      },
      {
        id: 'ch1-s3',
        title: 'Quantifying Disease — The Peritoneal Cancer Index',
        blocks: [
          {
            type: 'text',
            content:
              'The **Peritoneal Cancer Index (PCI)**, described by Jacquet and Sugarbaker (1996), is the standard quantitative measure of peritoneal tumour burden. The abdomen and pelvis are divided into **13 regions**: nine abdominopelvic regions (0–8, clockwise from the central umbilical region) plus four small-bowel regions (9–12: upper and lower jejunum, upper and lower ileum). Each region is assigned a **Lesion Size (LS) score of 0–3**, and the scores are summed to give a PCI ranging from 0 to a **maximum of 39**.',
          },
          {
            type: 'table',
            title: 'PCI — Lesion Size (LS) scoring',
            headers: ['LS score', 'Definition'],
            rows: [
              ['LS-0', 'No visible tumour'],
              ['LS-1', 'Tumour nodule ≤ 0.5 cm'],
              ['LS-2', 'Tumour nodule 0.5–5.0 cm'],
              ['LS-3', 'Tumour nodule > 5.0 cm, or confluence of tumour'],
            ],
            ref: 'Jacquet P, Sugarbaker PH. Cancer Treat Res 1996.',
          },
          {
            type: 'list',
            title: 'The 13 PCI regions',
            items: [
              'Regions 0–8: central, right upper, epigastrium, left upper, left flank, left lower, pelvis, right lower, right flank',
              'Region 9: upper jejunum · Region 10: lower jejunum',
              'Region 11: upper ileum · Region 12: lower ileum',
              'Sum of 13 regional LS scores = PCI (0–39)',
            ],
          },
          {
            type: 'text',
            content:
              'PCI is **prognostic and selective**: higher PCI correlates with lower likelihood of complete cytoreduction and worse survival, but the threshold is **histology-specific**. For colorectal PM a PCI ≤ 15–20 is generally required; for gastric PM the accepted ceiling is ≤ 6; for low-grade PMP there is effectively no upper limit provided CC-0/1 is achievable. Crucially, the definitive PCI is the **surgical PCI recorded at laparotomy/laparoscopy** — cross-sectional imaging systematically underestimates it.',
          },
          {
            type: 'pearl',
            title: 'Surgical PCI beats radiological PCI every time',
            content:
              'Record PCI after complete lysis of adhesions and full exploration of all 13 regions, including the small-bowel loops and mesentery. A PCI documented before adhesiolysis, or estimated from CT alone, is unreliable and will mis-select patients. Diagnostic laparoscopy exists precisely to obtain an accurate PCI before committing to open CRS.',
          },
        ],
      },
      {
        id: 'ch1-s4',
        title: 'Completeness of Cytoreduction & Tumour Biology',
        blocks: [
          {
            type: 'text',
            content:
              'The **Completeness of Cytoreduction (CC) score** grades residual disease at the end of surgery and is the **single most powerful modifiable prognostic factor** in peritoneal surface oncology. Only a **complete cytoreduction (CC-0 or CC-1)** is associated with a survival benefit; leaving CC-2/3 disease adds the morbidity of a major operation without oncological gain.',
          },
          {
            type: 'table',
            title: 'Completeness of Cytoreduction (CC) score',
            headers: ['Score', 'Largest residual nodule', 'Interpretation'],
            rows: [
              ['CC-0', 'No visible residual disease', 'Complete — curative intent'],
              ['CC-1', '≤ 2.5 mm', 'Complete — penetrable by HIPEC'],
              ['CC-2', '2.5 mm – 2.5 cm', 'Incomplete'],
              ['CC-3', '> 2.5 cm', 'Incomplete / futile'],
            ],
            ref: 'Sugarbaker PH. Peritoneal carcinomatosis, 3rd ed.',
          },
          {
            type: 'trial',
            title: 'Glehen Multicentre Study — CC drives survival',
            content:
              'In 506 patients with colorectal PM treated across European expert centres, median OS was **32.4 months for CC-0 vs 18.8 months for CC-1 vs 8.4 months for CC-2/3**. PCI and completeness of cytoreduction were the independent predictors of survival — establishing the CC score as the primary surgical quality metric.',
            ref: 'Glehen O, et al. J Clin Oncol 2004;22(16):3284–3292.',
          },
          {
            type: 'text',
            content:
              'The biological rationale rests on **Paget\'s seed-and-soil hypothesis**. Peritoneal metastasis is a multistep cascade: detachment of tumour cells from the primary; survival as free-floating cells/spheroids resisting anoikis; adhesion to mesothelium (mediated by **CD44–hyaluronan**, integrins, and **milky-spot** homing in the omentum); mesothelial retraction and invasion of the submesothelial matrix; and angiogenesis-supported proliferation. The peritoneal-plasma barrier and this surface-confined biology together create the **therapeutic window** exploited by CRS and intraperitoneal chemotherapy.',
          },
          {
            type: 'pearl',
            title: 'Why HIPEC targets ≤ 2.5 mm',
            content:
              'Intraperitoneal chemotherapy penetrates only 3–5 mm of tissue. HIPEC is therefore a treatment for **microscopic residual disease after complete cytoreduction**, not a substitute for it. The CC-1 threshold (≤ 2.5 mm) is chosen precisely because it lies within the penetration depth of the drug — beyond it, cytotoxic exposure is inadequate.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 02 ────────────────────────────────────────────────────────────
  {
    id: 'ch2-selection',
    number: '02',
    title: 'Patient Selection & Preoperative Workup',
    subtitle: 'Imaging, laparoscopy, histology-specific thresholds, and MDT decision-making',
    icon: 'ClipboardCheck',
    reading_time_min: 18,
    level: 'Core',
    guidelines_version: 'PSOGI Consensus 2022 · Chicago Consensus 2020 · NCCN 2024–2025 · ESMO 2023',
    learning_objectives: [
      'Recognise the limitations of CT and the complementary roles of PET and MRI in PCI estimation',
      'State the indications for diagnostic laparoscopy before open CRS',
      'Apply histology-specific PCI thresholds to candidate selection',
      'Integrate performance status, prehabilitation, and MDT review into the decision pathway',
      'Order the correct molecular workup by tumour origin',
    ],
    key_references: [
      'PSOGI Consensus. Ann Surg Oncol 2022.',
      'Chicago Consensus Working Group. Ann Surg Oncol 2020.',
      'NCCN Guidelines, Colon/Ovarian/Gastric 2024–2025.',
    ],
    sections: [
      {
        id: 'ch2-s1',
        title: 'Imaging — Strengths and Blind Spots',
        blocks: [
          {
            type: 'text',
            content:
              'Contrast-enhanced **CT of the thorax, abdomen and pelvis** is the first-line staging modality: it excludes extra-abdominal disease, characterises the primary, and maps gross peritoneal deposits. Its fundamental weakness is **systematic underestimation of PCI** — sub-centimetre implants, small-bowel serosal disease, and mesenteric involvement are frequently occult. CT sensitivity falls below 25–50% for nodules < 5 mm, and its concordance with surgical PCI is poor, particularly in the small bowel.',
          },
          {
            type: 'table',
            title: 'Imaging modalities in peritoneal staging',
            headers: ['Modality', 'Primary strength', 'Key limitation'],
            rows: [
              ['CT TAP (contrast)', 'Rapid whole-body staging; excludes extra-abdominal disease', 'Underestimates PCI; misses < 5 mm and small-bowel disease'],
              ['MRI (DWI)', 'Best soft-tissue contrast; superior for small-bowel & mesenteric implants', 'Longer, operator-dependent, less available'],
              ['PET/CT (FDG)', 'Detects extra-peritoneal & nodal disease; useful for non-mucinous tumours', 'Poor for mucinous/low-grade disease (low FDG avidity); misses small implants'],
            ],
          },
          {
            type: 'pitfall',
            title: 'PET is nearly blind to mucinous and low-grade disease',
            content:
              'Do not rely on FDG-PET to stage pseudomyxoma peritonei or low-grade mucinous tumours — they are **FDG-non-avid**, and a "negative" PET falsely reassures. PET adds most value in ruling out extra-peritoneal spread in high-grade, non-mucinous histologies, not in quantifying peritoneal burden.',
          },
          {
            type: 'text',
            content:
              '**Diffusion-weighted MRI** is the most accurate non-invasive tool for peritoneal mapping, outperforming CT for small-bowel and mesenteric deposits, and is increasingly used at expert centres to refine selection. Nonetheless, no imaging modality replaces surgical assessment: the definitive resectability decision is made in the operating room.',
          },
        ],
      },
      {
        id: 'ch2-s2',
        title: 'Diagnostic Laparoscopy',
        blocks: [
          {
            type: 'text',
            content:
              'Diagnostic (staging) laparoscopy is the reference standard for peritoneal assessment. It provides a **direct surgical PCI**, enables biopsy for histology and grading, evaluates small-bowel and mesenteric-root involvement, and **spares 15–20% of radiologically resectable patients** a futile laparotomy. PSOGI and Chicago Consensus both endorse it prior to open CRS in most scenarios.',
          },
          {
            type: 'key',
            title: 'What laparoscopy must answer',
            content:
              'Three questions: (1) What is the true PCI? (2) Is the small bowel / mesenteric root involved to a degree that precludes CC-0/1? (3) Is there disease at critical sites (hepatic hilum, root of mesentery, extensive retroperitoneum) that makes complete cytoreduction impossible? A "yes" to unresectable small-bowel disease overrides a favourable overall PCI.',
          },
          {
            type: 'list',
            title: 'Technical caveats',
            items: [
              'Place ports away from the planned midline incision and consider resecting prior port sites (seeding risk)',
              'Adhesions from prior surgery may limit access — a normal-appearing accessible quadrant does not exclude disease elsewhere',
              'Assess all 13 regions where feasible; document small-bowel regions 9–12 explicitly',
              'Biopsy to confirm histology and grade before committing to CRS+HIPEC',
            ],
          },
          {
            type: 'pearl',
            title: 'Laparoscopy is mandatory, not optional',
            content:
              'The 15–20% futile-laparotomy avoidance rate — driven mainly by occult small-bowel mesentery disease invisible on CT — makes staging laparoscopy a standard-of-care step, not a discretionary add-on, before open CRS in colorectal and most other histologies.',
          },
        ],
      },
      {
        id: 'ch2-s3',
        title: 'PCI Thresholds by Histology',
        blocks: [
          {
            type: 'text',
            content:
              'There is **no universal PCI cut-off**. The threshold that predicts benefit depends on tumour biology and the feasibility of complete cytoreduction. Applying a colorectal threshold to pseudomyxoma — or vice versa — is a classic selection error.',
          },
          {
            type: 'table',
            title: 'Accepted PCI thresholds for CRS+HIPEC by histology',
            headers: ['Histology', 'PCI ceiling', 'Comment'],
            rows: [
              ['Colorectal PM (CPM)', '≤ 15 (up to 20 in fit patients)', 'Small-bowel PCI ≤ 6 is a key sub-criterion'],
              ['Gastric PM', '≤ 6', 'Very selective; signet-ring histology a relative contraindication'],
              ['Pseudomyxoma (LGMCP)', 'No absolute limit', 'Any PCI if CC-0/1 achievable'],
              ['Peritoneal mesothelioma', '< 20 (selected up to 30)', 'Epithelioid only; sarcomatoid contraindicated'],
              ['Ovarian PM', 'CC-0/1 feasibility, not a fixed PCI', 'HIPEC evidence strongest at interval debulking'],
            ],
            ref: 'PSOGI Consensus 2022; Chicago Consensus 2020.',
          },
          {
            type: 'trial',
            title: 'Elias French Registry — PCI as a threshold',
            content:
              'In 523 colorectal PM patients, PCI and CC score were the dominant independent predictors of survival; **PCI > 20 was associated with a median OS below 20 months**, while CC-0 patients reached a median OS of ~42 months. This registry underpins the PCI ≤ 15–20 selection criteria used across European programmes.',
            ref: 'Elias D, et al. Ann Surg 2010;251(5):896–901.',
          },
          {
            type: 'pitfall',
            title: 'Signet-ring cell histology is a red flag',
            content:
              'Diffuse-type / signet-ring cell tumours (gastric, colorectal) behave aggressively and undermine the survival benefit of CRS+HIPEC even at low PCI and CC-0. Recognise signet-ring histology on biopsy as a signal to intensify systemic therapy and reconsider — not automatically proceed with — aggressive cytoreduction.',
          },
        ],
      },
      {
        id: 'ch2-s4',
        title: 'Fitness, Prehabilitation & the MDT',
        blocks: [
          {
            type: 'text',
            content:
              'CRS+HIPEC is a 6–10 hour operation with major fluid shifts; **cardiorespiratory reserve and performance status** are decisive. Candidates are typically **ECOG 0–1** (selected ECOG 2), with adequate cardiac, pulmonary, renal, and nutritional status. Structured **prehabilitation** — aerobic and resistance exercise, nutritional optimisation (correcting sarcopenia and hypoalbuminaemia), smoking cessation, and anaemia correction — reduces complications and accelerates functional recovery.',
          },
          {
            type: 'list',
            title: 'Core selection criteria (composite)',
            items: [
              'No unresectable extra-peritoneal disease (limited, resectable liver metastases acceptable in selected cases)',
              'Technically achievable CC-0/1 (small-bowel and mesenteric root not prohibitively involved)',
              'ECOG 0–1; adequate cardiopulmonary reserve for prolonged surgery',
              'Response or stability on systemic therapy — progression is a relative contraindication',
              'Appropriate histology-specific PCI, confirmed at laparoscopy',
              'Decision ratified by a dedicated peritoneal-surface-malignancy MDT',
            ],
          },
          {
            type: 'key',
            title: 'The MDT is where selection is finalised',
            content:
              'Every candidate should be reviewed by a peritoneal-surface-malignancy multidisciplinary team integrating surgery, medical oncology, radiology, pathology, and anaesthesia/critical care. The MDT reconciles imaging, laparoscopic findings, molecular data, and fitness into a single, documented plan — and identifies patients better served by systemic therapy or PIPAC.',
          },
          {
            type: 'text',
            content:
              '**Molecular workup is origin-specific** and increasingly gates both surgery and systemic sequencing: colorectal PM requires **RAS, BRAF, and MMR/MSI** testing; ovarian PM requires **germline and somatic BRCA1/2** (and homologous-recombination status) for PARP-inhibitor maintenance; peritoneal mesothelioma requires **BAP1** (with germline counselling) and the full mesothelial IHC panel. Ordering these before treatment prevents wrong-sequence errors — for example, offering surgery before immunotherapy in an MSI-H colorectal patient.',
          },
          {
            type: 'pearl',
            title: 'Test before you cut',
            content:
              'MSI-H/dMMR colorectal PM should be offered pembrolizumab first (KEYNOTE-177), not upfront CRS; BRCA-mutated ovarian cancer changes maintenance strategy; BAP1 loss confirms mesothelioma and triggers genetic counselling. Molecular results routinely reorder the treatment plan — obtain them during, not after, the selection workup.',
          },
          {
            type: 'trial',
            title: 'KEYNOTE-177 — molecular status reorders selection',
            content:
              'First-line **pembrolizumab** in MSI-H/dMMR metastatic colorectal cancer doubled PFS versus chemotherapy (16.5 vs 8.2 months; HR 0.60) with less toxicity. Because MSI-H disease is over-represented in peritoneal-predominant CRC, MMR/MSI testing during selection can redirect a patient from upfront surgery to immunotherapy — a decision made in the workup, not the operating room.',
            ref: 'André T, et al. N Engl J Med 2020;383(23):2207–2218.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 03 ────────────────────────────────────────────────────────────
  {
    id: 'ch3-crs',
    number: '03',
    title: 'Cytoreductive Surgery — Peritonectomy Technique',
    subtitle: 'The six Sugarbaker procedures, electrosurgery, anastomotic strategy, and morbidity',
    icon: 'Scissors',
    reading_time_min: 20,
    level: 'Advanced',
    guidelines_version: 'Sugarbaker peritonectomy procedures · Chicago Consensus 2020 · PSOGI 2022',
    learning_objectives: [
      'Enumerate and describe the six Sugarbaker peritonectomy procedures',
      'Explain the electrosurgical high-voltage technique and its rationale',
      'Justify the strategy and timing of anastomoses relative to HIPEC',
      'Anticipate the morbidity profile of extensive CRS and mitigate it',
      'Describe the coliseum concept for open intraperitoneal chemotherapy delivery',
    ],
    key_references: [
      'Sugarbaker PH. Peritonectomy procedures. Ann Surg 1995;221(1):29–42.',
      'Chicago Consensus Working Group. Ann Surg Oncol 2020.',
    ],
    sections: [
      {
        id: 'ch3-s1',
        title: 'The Six Peritonectomy Procedures',
        blocks: [
          {
            type: 'text',
            content:
              'Cytoreductive surgery removes **all macroscopic disease** by stripping involved peritoneum and resecting involved organs. Sugarbaker codified the operation into **six peritonectomy procedures**, selected à la carte according to the map of disease. Uninvolved peritoneum is preserved — CRS is disease-directed, not a routine total peritonectomy.',
          },
          {
            type: 'list',
            title: 'The six Sugarbaker peritonectomy procedures',
            items: [
              '1. Greater omentectomy ± splenectomy — with stripping of the left subphrenic peritoneum',
              '2. Left upper quadrant peritonectomy — left hemidiaphragm and splenic fossa',
              '3. Right upper quadrant peritonectomy — right hemidiaphragm, Glisson\'s capsule stripping',
              '4. Lesser omentectomy + cholecystectomy — stripping the omental bursa and hepatoduodenal ligament',
              '5. Pelvic peritonectomy — often with rectosigmoid resection and hysterectomy/BSO in women',
              '6. Antrectomy / other visceral resections as dictated by disease',
            ],
            ref: 'Sugarbaker PH. Ann Surg 1995;221(1):29–42.',
          },
          {
            type: 'text',
            content:
              'The complete exposure is achieved through a **xiphoid-to-pubis midline incision**, and dissection proceeds systematically from the abdominal wall inward. The goal at every surface is to develop the correct plane between the peritoneum (with its tumour) and the underlying structures, removing the diseased membrane en bloc while sparing viable organs wherever oncologically safe.',
          },
          {
            type: 'pearl',
            title: 'Strip what is diseased, spare what is clean',
            content:
              'Peritonectomy is not obligatory total peritonectomy. Only involved surfaces are stripped; normal peritoneum is left intact to reduce raw-surface morbidity and preserve function. Matching the procedures to the redistribution map from Chapter 1 keeps the operation as conservative as oncologically permissible.',
          },
          {
            type: 'trial',
            title: 'Verwaal RCT — cytoreduction converts an incurable disease',
            content:
              'The first randomised trial of CRS+HIPEC versus systemic 5-FU/LV with palliative surgery in colorectal PM showed median OS **22.4 vs 12.6 months (HR 0.55)** and 5-year OS 45% in CC-0 patients. It is the evidentiary foundation for the peritonectomy operation — establishing that complete surgical clearance transforms outcomes in selected patients.',
            ref: 'Verwaal VJ, et al. J Clin Oncol 2003;21(20):3737–3743.',
          },
        ],
      },
      {
        id: 'ch3-s2',
        title: 'Electrosurgical Technique & Diaphragm Stripping',
        blocks: [
          {
            type: 'text',
            content:
              'Sugarbaker advocates **high-voltage electrosurgery** (ball-tip or needle-tip on a high-power coagulation setting) rather than sharp scalpel dissection. The electrosurgical approach cauterises small vessels and lymphatics as it advances, reducing blood loss, and generates local heat that may **destroy tumour cells at the dissection margin**. The smoke plume necessitates effective evacuation.',
          },
          {
            type: 'text',
            content:
              '**Diaphragmatic stripping** addresses the right hemidiaphragm, the terminal point of paracolic fluid flow and a near-universal site of disease. Full-thickness diaphragmatic resection is performed when muscle is invaded, followed by primary repair; a chest drain or careful evacuation of the induced pneumothorax is standard. **Splenectomy** is frequently required to clear the splenic hilum and left subphrenic space during the left upper quadrant procedure.',
          },
          {
            type: 'table',
            title: 'High-morbidity dissection sites and their hazards',
            headers: ['Site', 'Procedure', 'Principal risk'],
            rows: [
              ['Right hemidiaphragm', 'RUQ peritonectomy / full-thickness resection', 'Pneumothorax, pleural effusion, sympathetic effusion'],
              ['Splenic hilum', 'Splenectomy', 'Haemorrhage, pancreatic tail injury, post-splenectomy sepsis'],
              ['Hepatoduodenal ligament', 'Lesser omentectomy', 'Biliary / portal injury'],
              ['Pelvis', 'Pelvic peritonectomy', 'Ureteric injury, presacral bleeding, anastomotic leak'],
            ],
          },
          {
            type: 'pitfall',
            title: 'Post-operative left pleural effusion is expected — but exclude the pancreas',
            content:
              'Left-sided pleural effusions are common after left upper quadrant peritonectomy and splenectomy. A persistent or high-amylase effusion, however, signals **pancreatic tail injury / fistula** from the splenectomy — do not dismiss every left effusion as sympathetic. Check drain amylase.',
          },
        ],
      },
      {
        id: 'ch3-s3',
        title: 'Anastomotic Strategy & the Coliseum',
        blocks: [
          {
            type: 'text',
            content:
              'A recurring technical debate is whether bowel **anastomoses should be constructed before or after HIPEC**. The dominant approach performs cytoreduction, then delivers HIPEC with the bowel ends still open or with anastomoses deferred, constructing the anastomoses **after** the chemotherapy perfusion. The rationale: HIPEC bathes the anastomotic line in cytotoxic drug and may impair healing, and constructing anastomoses afterward exposes fresh suture lines to less drug. Practice varies between centres, and evidence is not definitive.',
          },
          {
            type: 'text',
            content:
              'The **coliseum (open) technique** is the classic method of HIPEC delivery. After cytoreduction, the skin edges of the laparotomy are suspended from a self-retaining retractor to form a tent — the "coliseum" — over the open abdomen. The perfusate circulates while the surgeon\'s gloved hand continuously manipulates the viscera to ensure **uniform heat and drug distribution** to every surface. A plastic sheet with an access aperture contains the vapour.',
          },
          {
            type: 'key',
            title: 'Open vs closed HIPEC — the trade-off',
            content:
              'The open coliseum technique maximises distribution uniformity and thermal homogeneity through manual agitation, at the cost of heat loss and greater occupational drug exposure. The closed technique (abdomen temporarily closed, perfusate circulated within) achieves higher intra-abdominal pressure and better drug penetration with less staff exposure, but risks uneven distribution. Both are accepted; distribution homogeneity is the shared goal.',
          },
          {
            type: 'pearl',
            title: 'Time the anastomoses around the perfusion',
            content:
              'Many centres complete cytoreduction, run HIPEC over open or stapled bowel ends, and only then fashion anastomoses — sparing fresh suture lines from direct cytotoxic exposure. Combine this with a low threshold for a protective diverting stoma in irradiated or low pelvic anastomoses.',
          },
        ],
      },
      {
        id: 'ch3-s4',
        title: 'Morbidity of Extensive Cytoreduction',
        blocks: [
          {
            type: 'text',
            content:
              'CRS+HIPEC carries **major morbidity of roughly 25–35%** (grade III–IV) and **mortality of 1–4%** at expert centres, rising with PCI, the number of anastomoses, and the extent of peritonectomy. Complications cluster into surgical (anastomotic leak, haemorrhage, fistula, abscess), haematological (HIPEC-drug-induced neutropenia — classically mitomycin C), and physiological (prolonged ileus, renal injury from cisplatin, respiratory complications after diaphragmatic work).',
          },
          {
            type: 'list',
            title: 'Drivers of increased morbidity',
            items: [
              'High PCI and long operative time',
              'Multiple bowel anastomoses (leak risk compounds)',
              'Diaphragmatic full-thickness resection (pleural complications)',
              'Splenectomy (haemorrhage, pancreatic fistula, sepsis risk)',
              'HIPEC agent toxicity — mitomycin C myelosuppression; cisplatin nephrotoxicity',
            ],
          },
          {
            type: 'trial',
            title: 'PRODIGE 7 — HIPEC adds morbidity without OS gain in CPM',
            content:
              'In colorectal PM, adding oxaliplatin HIPEC to complete CRS did not improve overall survival (median OS 41.2 vs 41.7 months; HR 1.00) but **increased grade III–IV morbidity at 60 days (24.1% vs 13.6%)**. The trial reframed the field: the survival-determining intervention is the quality of cytoreduction, and added HIPEC morbidity must be justified by benefit.',
            ref: 'Quenet F, et al. JAMA Surg 2021;156(6):e211373.',
          },
          {
            type: 'pearl',
            title: 'Volume is a safety variable',
            content:
              'Outcomes of CRS+HIPEC are strongly volume-dependent. Concentrating these operations in high-volume peritoneal-surface-malignancy centres — with dedicated anaesthesia, critical care, and a mature MDT — is itself a morbidity- and mortality-reduction strategy.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 04 ────────────────────────────────────────────────────────────
  {
    id: 'ch4-hipec',
    number: '04',
    title: 'HIPEC — Pharmacology & Delivery',
    subtitle: 'Dose intensity, heat synergy, drug regimens, technique, and the PRODIGE 7 debate',
    icon: 'Thermometer',
    reading_time_min: 17,
    level: 'Core',
    guidelines_version: 'PSOGI HIPEC Consensus 2022 · Chicago Consensus 2020 · ESMO 2023',
    learning_objectives: [
      'Explain the pharmacological rationale for HIPEC: dose intensity, heat synergy, and the peritoneal-plasma barrier',
      'Select the appropriate HIPEC drug, dose, temperature, and duration by indication',
      'Contrast open (coliseum) and closed delivery techniques',
      'Interpret the PRODIGE 7 controversy and its effect on colorectal practice',
      'Distinguish HIPEC from EPIC and early post-operative intraperitoneal chemotherapy',
    ],
    key_references: [
      'PSOGI HIPEC Consensus. Ann Surg Oncol 2022.',
      'Quenet F, et al. PRODIGE 7. JAMA Surg 2021.',
      'van Driel WJ, et al. OVHIPEC-1. N Engl J Med 2018.',
    ],
    sections: [
      {
        id: 'ch4-s1',
        title: 'Why Heat and Why Intraperitoneal',
        blocks: [
          {
            type: 'text',
            content:
              'HIPEC exploits three synergistic principles. **(1) Dose intensity via the peritoneal-plasma barrier**: large hydrophilic drugs (mitomycin C, oxaliplatin, cisplatin) cleared slowly across the peritoneum achieve intraperitoneal concentrations **20–400× higher than plasma**, delivering intense local exposure while limiting systemic toxicity. **(2) Hyperthermia** (41–43°C) is directly cytotoxic, impairs DNA repair, increases cell-membrane permeability, and enhances drug penetration. **(3) Thermal chemosensitisation** — heat and drug act synergistically, potentiating cytotoxicity beyond either alone.',
          },
          {
            type: 'key',
            title: 'The peritoneal-plasma barrier',
            content:
              'The barrier is a pharmacokinetic advantage, not an anatomical membrane: slow transperitoneal clearance of high-molecular-weight, hydrophilic agents maintains a steep intraperitoneal-to-plasma concentration gradient. This is what makes regional dose escalation possible with acceptable systemic exposure.',
          },
          {
            type: 'text',
            content:
              'The therapeutic limitation is **penetration depth**: even under heat and pressure, drug reaches only **3–5 mm** into tissue. HIPEC is therefore effective only against microscopic residual disease — reinforcing that **complete cytoreduction (CC-0/1) is the prerequisite** for any HIPEC benefit.',
          },
          {
            type: 'pearl',
            title: 'Timing matters — HIPEC after complete CRS, not instead of it',
            content:
              'Because the drug penetrates only a few millimetres, HIPEC cannot rescue an incomplete cytoreduction. Its role is to sterilise the microscopic disease left on peritoneal surfaces after CC-0/1 has already been achieved surgically.',
          },
        ],
      },
      {
        id: 'ch4-s2',
        title: 'Drugs by Indication',
        blocks: [
          {
            type: 'text',
            content:
              'HIPEC regimen is **indication-specific** in drug, dose, temperature, and duration. There is no single "HIPEC recipe" — the agent is matched to tumour chemosensitivity and to the historical evidence base for that histology.',
          },
          {
            type: 'table',
            title: 'Representative HIPEC regimens by indication',
            headers: ['Indication', 'Drug(s)', 'Dose', 'Temp / time'],
            rows: [
              ['Colorectal PM', 'Oxaliplatin', '460 mg/m²', '43°C / 30 min'],
              ['Colorectal PM / PMP', 'Mitomycin C', '30–35 mg/m²', '42°C / 90 min'],
              ['Ovarian (interval)', 'Cisplatin', '100 mg/m²', '40°C / 90 min'],
              ['Peritoneal mesothelioma', 'Cisplatin + doxorubicin', 'e.g. cisplatin 200 mg/m² + doxorubicin 15 mg/m²', '42°C / 90 min'],
              ['Gastric PM (investigational)', 'Cisplatin ± mitomycin C', 'cisplatin 75–100 mg/m²', '42°C / 60–90 min'],
            ],
            ref: 'PSOGI HIPEC Consensus 2022; Chicago Consensus 2020.',
          },
          {
            type: 'text',
            content:
              'Two agents dominate historical colorectal practice. **Oxaliplatin** (460 mg/m², 30 min, 43°C) is rapid but requires simultaneous IV 5-FU/leucovorin for synergy and is delivered in a hypotonic carrier that risks hyponatraemia and post-operative bleeding. **Mitomycin C** (30–35 mg/m², 90 min, 42°C) has a longer contact time and is the agent of the positive Verwaal RCT; its dose-limiting toxicity is myelosuppression. Following PRODIGE 7, many centres favour mitomycin C for colorectal disease.',
          },
          {
            type: 'trial',
            title: 'OVHIPEC-1 — cisplatin HIPEC benefits ovarian cancer',
            content:
              'In stage III ovarian cancer, adding **cisplatin HIPEC (100 mg/m², 40°C, 90 min)** at interval debulking after neoadjuvant chemotherapy improved median OS from 33.9 to 45.7 months (HR 0.67; p=0.02) and PFS from 10.7 to 14.2 months, without a significant increase in grade ≥3 toxicity. This remains the strongest RCT evidence for HIPEC in any single histology.',
            ref: 'van Driel WJ, et al. N Engl J Med 2018;378(3):230–240.',
          },
          {
            type: 'pitfall',
            title: 'Cisplatin nephrotoxicity is preventable',
            content:
              'Cisplatin HIPEC (ovarian, mesothelioma) risks acute kidney injury. Aggressive intra-operative hydration, forced diuresis, and — where protocolised — **sodium thiosulfate nephroprotection** materially reduce nephrotoxicity. Omitting renal protection is a recurring, avoidable error.',
          },
        ],
      },
      {
        id: 'ch4-s3',
        title: 'Delivery Technique — Open vs Closed',
        blocks: [
          {
            type: 'text',
            content:
              'The perfusate (typically 2–4 L of carrier) is heated by an extracorporeal circuit and circulated through inflow and outflow catheters with continuous temperature monitoring at multiple intra-abdominal sites. Two techniques predominate.',
          },
          {
            type: 'table',
            title: 'Open (coliseum) vs closed HIPEC',
            headers: ['Feature', 'Open / coliseum', 'Closed'],
            rows: [
              ['Distribution', 'Uniform (manual agitation)', 'Can be uneven'],
              ['Intra-abdominal pressure', 'Low (open cavity)', 'Higher → better penetration'],
              ['Heat homogeneity', 'Good (surgeon mixes)', 'Depends on flow'],
              ['Staff drug exposure', 'Higher', 'Lower (contained)'],
              ['Heat loss', 'Greater', 'Less'],
            ],
          },
          {
            type: 'text',
            content:
              'In the **open coliseum** technique the abdomen is tented open and the surgeon manually agitates the viscera to distribute heat and drug. In the **closed** technique the abdomen is temporarily closed and the perfusate circulated within a sealed cavity, generating higher pressure and better penetration with less occupational exposure but relying on flow dynamics for even distribution. Neither is proven superior; **distribution homogeneity** is the shared objective.',
          },
          {
            type: 'pearl',
            title: 'Protect the theatre team',
            content:
              'Whichever technique is used, cytotoxic-safe handling — smoke evacuation, double gloving, splash protection, and closed-circuit connections — protects the operating team from chemotherapy exposure. The closed technique inherently reduces this exposure.',
          },
        ],
      },
      {
        id: 'ch4-s4',
        title: 'The PRODIGE 7 Controversy & EPIC',
        blocks: [
          {
            type: 'text',
            content:
              '**PRODIGE 7** tested whether oxaliplatin HIPEC added value to complete CRS in colorectal PM and found **no overall-survival benefit** (median OS 41.2 vs 41.7 months; HR 1.00), with **higher morbidity** in the HIPEC arm. The result triggered intense debate but must be read carefully: it evaluated **oxaliplatin specifically**, with a very short **30-minute** contact time, in patients who all received modern perioperative systemic chemotherapy that may have equalised the arms.',
          },
          {
            type: 'trial',
            title: 'Verwaal RCT — the positive HIPEC trial (mitomycin C)',
            content:
              'The earlier Verwaal RCT randomised colorectal PM to **CRS + mitomycin C HIPEC** vs systemic 5-FU/LV with palliative surgery, and showed a decisive survival benefit (median OS 22.4 vs 12.6 months; HR 0.55) with 5-year OS 45% in CC-0 patients. PRODIGE 7 did **not** invalidate this mitomycin C evidence — it challenged oxaliplatin HIPEC specifically.',
            ref: 'Verwaal VJ, et al. J Clin Oncol 2003; 8-year follow-up Ann Surg Oncol 2008.',
          },
          {
            type: 'text',
            content:
              'The practical synthesis: complete cytoreduction remains standard of care for selected colorectal PM; the **HIPEC drug and duration matter**; and many centres shifted to mitomycin C or, in some, CRS alone. Guidance diverges — **ESMO** is most restrictive (CRS+HIPEC "within trials"), while **PSOGI** and many national bodies conditionally support CRS+HIPEC with mitomycin C for well-selected patients.',
          },
          {
            type: 'text',
            content:
              '**EPIC (Early Postoperative Intraperitoneal Chemotherapy)** delivers normothermic intraperitoneal drug (classically 5-FU) on post-operative days 1–5 through indwelling catheters, adding peritoneal exposure during the early healing phase when residual cells are proliferating. Historically combined with HIPEC as "bidirectional/trimodal" therapy, EPIC has largely been abandoned by most centres because of fistula and adhesion-related morbidity, though the concept underpins modern bidirectional and PIPAC strategies.',
          },
          {
            type: 'pitfall',
            title: 'Do not over-generalise a single negative trial',
            content:
              'The most common teaching error is to conclude "HIPEC does not work" from PRODIGE 7. The trial addressed one drug (oxaliplatin), one short schedule (30 min), and one histology (colorectal) — it says nothing about mitomycin C in colorectal, nor about cisplatin HIPEC in ovarian cancer (OVHIPEC-1, positive) or mesothelioma. Read trials by drug, dose, schedule, and histology.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 05 ────────────────────────────────────────────────────────────
  {
    id: 'ch5-pipac',
    number: '05',
    title: 'PIPAC & Regional Therapies',
    subtitle: 'Aerosol pharmacology, palliative indications, PRGS response grading, and the trial landscape',
    icon: 'Wind',
    reading_time_min: 15,
    level: 'Advanced',
    guidelines_version: 'PSOGI PIPAC recommendations · ISSPP · ESMO 2023',
    learning_objectives: [
      'Explain the physical principle of PIPAC — aerosolisation, 12 mmHg capnoperitoneum, 3–5 mm penetration',
      'State the palliative indications for PIPAC across histologies',
      'Describe the repeat-cycle schedule and the concept of bidirectional therapy',
      'Grade histological response using the Peritoneal Regression Grading Score (PRGS)',
      'Summarise the current PIPAC evidence base and its limitations',
    ],
    key_references: [
      'Solass W, et al. Theranostics 2014.',
      'Alyami M, et al. Lancet Oncol 2019 (PIPAC review).',
      'Rovers KP, et al. PIPAC gastric phase II. Surg Endosc 2020.',
    ],
    sections: [
      {
        id: 'ch5-s1',
        title: 'The PIPAC Principle',
        blocks: [
          {
            type: 'text',
            content:
              '**PIPAC (Pressurised IntraPeritoneal Aerosol Chemotherapy)** is a minimally invasive, laparoscopic method of delivering chemotherapy as an **aerosol** into a **12 mmHg CO₂ capnoperitoneum**. A micro-injection nebuliser converts a low-dose liquid chemotherapy into a fine spray; the raised intra-abdominal pressure drives the aerosol into peritoneal tissue, producing a more **homogeneous distribution** and **deeper penetration (up to ~3–5 mm)** than conventional liquid intraperitoneal instillation — at a fraction of the systemic dose.',
          },
          {
            type: 'text',
            content:
              'Because it is laparoscopic and uses roughly one-tenth of a systemic chemotherapy dose, PIPAC is **repeatable**, low in systemic toxicity, and allows **sequential biopsies** of the same peritoneal sites to track histological response over cycles. It is delivered under the same occupational-safety precautions as any aerosolised cytotoxic.',
          },
          {
            type: 'trial',
            title: 'Solass first-in-human — the pharmacological proof of concept',
            content:
              'The founding work demonstrated that pressurised aerosol delivery achieves roughly **5-fold higher peritoneal tissue drug concentration** than conventional intraperitoneal lavage at the same dose, with pressure-driven penetration under 12 mmHg capnoperitoneum. Safety was established in the first clinical cohort, launching the PIPAC field.',
            ref: 'Solass W, et al. Theranostics 2014;4(6):576–592.',
          },
          {
            type: 'pearl',
            title: 'PIPAC turns the peritoneum into a serial-biopsy laboratory',
            content:
              'A unique advantage is the ability to re-laparoscope the same quadrants at each cycle and biopsy identical sites, enabling objective histological response tracking (PRGS) that liquid HIPEC — a one-shot intra-operative treatment — cannot provide.',
          },
        ],
      },
      {
        id: 'ch5-s2',
        title: 'Indications, Scheduling & Bidirectional Therapy',
        blocks: [
          {
            type: 'text',
            content:
              'PIPAC is a **palliative** modality for patients with **unresectable peritoneal metastases** who are not candidates for CRS+HIPEC — because of excessive PCI, extensive small-bowel disease, poor performance status, or recurrence after prior CRS. It is applied across **gastric, colorectal, ovarian, and mesothelioma** peritoneal disease, chiefly to control symptoms (ascites, pain) and stabilise or regress peritoneal tumour.',
          },
          {
            type: 'list',
            title: 'Typical PIPAC drug pairings',
            items: [
              'Gastric / ovarian: cisplatin + doxorubicin aerosol',
              'Colorectal / appendiceal: oxaliplatin aerosol',
              'Delivered laparoscopically at 12 mmHg, ~30 min steady-state, room to 37°C',
              'Repeated every 4–6 weeks for ≥ 3 cycles to assess and build response',
            ],
          },
          {
            type: 'text',
            content:
              'PIPAC is designed for **repeat cycles every 4–6 weeks**, and is frequently combined with concurrent **systemic chemotherapy** — the **bidirectional therapy** concept — attacking peritoneal disease from the cavity (PIPAC) and the bloodstream (systemic agents) simultaneously. In highly selected responders, sustained regression can occasionally convert initially unresectable disease toward a cytoreductive operation, though this is not the primary goal.',
          },
          {
            type: 'key',
            title: 'Bidirectional therapy',
            content:
              'Simultaneous intraperitoneal (PIPAC) and intravenous (systemic) chemotherapy targets both the surface microenvironment and any systemic/deeper tumour compartment. The peritoneal aerosol reaches the outer 3–5 mm; systemic therapy addresses vascularised and extra-peritoneal disease — the rationale for combining them.',
          },
          {
            type: 'pearl',
            title: 'Low dose, repeatable, tolerable',
            content:
              'PIPAC uses roughly one-tenth of a systemic chemotherapy dose, so systemic toxicity is minimal and cycles can be repeated every 4–6 weeks alongside systemic therapy. This tolerability — not tumour eradication — is what makes PIPAC valuable in frail, unresectable patients who could not withstand CRS+HIPEC.',
          },
        ],
      },
      {
        id: 'ch5-s3',
        title: 'Response Grading & the Trial Landscape',
        blocks: [
          {
            type: 'text',
            content:
              'Histological response to PIPAC is quantified with the **Peritoneal Regression Grading Score (PRGS)**, a four-tier pathological score applied to sequential biopsies. Because the same sites are re-sampled at each cycle, PRGS provides an objective, tissue-based endpoint that imaging cannot match in mucinous or low-volume peritoneal disease.',
          },
          {
            type: 'table',
            title: 'Peritoneal Regression Grading Score (PRGS)',
            headers: ['PRGS', 'Histological finding', 'Response'],
            rows: [
              ['1', 'Complete response — no viable tumour cells', 'Best response'],
              ['2', 'Major response — mostly regression, few tumour cells', 'Good'],
              ['3', 'Minor response — predominance of viable tumour', 'Limited'],
              ['4', 'No response — no regressive features', 'None'],
            ],
            ref: 'Solass W, et al. PRGS definition; applied in PIPAC series.',
          },
          {
            type: 'trial',
            title: 'PIPAC in gastric PM — the most mature histology',
            content:
              'A phase II experience of repeated cisplatin + doxorubicin PIPAC in gastric peritoneal metastases reported histological response (PRGS 1–2) in roughly **60%** of patients, meaningful ascites control, and high feasibility of completing planned cycles — establishing PIPAC as an effective palliative strategy and validating PRGS as a response endpoint.',
            ref: 'Rovers KP, et al. Surg Endosc 2020; and related PIPAC gastric series.',
          },
          {
            type: 'text',
            content:
              'The evidence base is maturing but remains largely **phase I–II**; robust phase III data are still awaited, and PIPAC should be offered within **structured protocols at experienced centres**. Its established value today is symptom palliation and peritoneal disease control in patients who have exhausted or are unsuitable for curative options.',
          },
          {
            type: 'pitfall',
            title: 'PIPAC is palliative — do not sell it as a cure',
            content:
              'PIPAC controls peritoneal disease and symptoms; it is **not a curative-intent treatment** and does not replace CRS+HIPEC in resectable patients. Counsel patients accordingly, and reserve it for the unresectable/palliative setting or protocolised conversion strategies — offering PIPAC to a resectable CRS candidate is an error of intent.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 06 ────────────────────────────────────────────────────────────
  {
    id: 'ch6-playbooks',
    number: '06',
    title: 'Disease-Specific Playbooks',
    subtitle: 'Colorectal, pseudomyxoma, mesothelioma, ovarian, and gastric peritoneal disease',
    icon: 'BookMarked',
    reading_time_min: 22,
    level: 'Core',
    guidelines_version: 'PSOGI 2016/2022 · Chicago Consensus 2020 · NCCN 2024–2025 · ESMO 2023–2024 · JPGA',
    learning_objectives: [
      'Apply the evidence (PRODIGE 7, Verwaal, CYTO-CHIP, KEYNOTE-177) to colorectal peritoneal metastases',
      'Classify pseudomyxoma peritonei by the Murphy/PSOGI 2016 system and manage by grade',
      'Diagnose peritoneal mesothelioma with the correct IHC/BAP1 workup and avoid the MARS2 pitfall',
      'Position HIPEC and surgery within ovarian cancer (OVHIPEC-1, SOLO-1, DESKTOP III)',
      'Summarise the investigational status and emerging targets in gastric peritoneal metastases',
    ],
    key_references: [
      'Carr NJ, et al. PSOGI classification. Am J Surg Pathol 2016.',
      'Quenet F (PRODIGE 7) 2021; van Driel (OVHIPEC-1) 2018; Harter (DESKTOP III) 2021; André (KEYNOTE-177) 2020.',
      'Al-Batran SE, et al. FLOT4. Lancet 2019.',
    ],
    sections: [
      {
        id: 'ch6-s1',
        title: 'Colorectal Peritoneal Metastases',
        blocks: [
          {
            type: 'text',
            content:
              'Colorectal PM (CPM) affects 10–15% of colorectal cancer patients and is the archetypal CRS+HIPEC indication. Selection centres on **PCI ≤ 15 (up to 20 in fit patients)**, small-bowel PCI ≤ 6, achievable CC-0/1, response to systemic therapy, and mandatory **RAS/BRAF/MMR** testing. Mitomycin C is now the preferred HIPEC agent at most centres following PRODIGE 7.',
          },
          {
            type: 'trial',
            title: 'Verwaal & PRODIGE 7 — the two poles of the debate',
            content:
              'Verwaal (mitomycin C) established the survival benefit of CRS+HIPEC over systemic therapy (median OS 22.4 vs 12.6 months). PRODIGE 7 (oxaliplatin, 30 min) then showed **no OS benefit from adding HIPEC to complete CRS** (41.2 vs 41.7 months) with higher morbidity — refocusing the field on the quality of cytoreduction and the choice of HIPEC drug.',
            ref: 'Verwaal JCO 2003; Quenet PRODIGE 7 JAMA Surg 2021.',
          },
          {
            type: 'text',
            content:
              '**Prophylactic HIPEC** in high-risk (T4/perforated) colorectal cancer is not standard: **COLOPEC** and **PROPHYLOCHIP** were negative, whereas **CYTO-CHIP** signalled a disease-free-survival benefit (3-yr DFS 53.7% vs 43.8%; HR 0.62) — a discordance that keeps prophylactic HIPEC investigational pending confirmation.',
          },
          {
            type: 'trial',
            title: 'KEYNOTE-177 — the MSI-H pathway',
            content:
              'In MSI-H/dMMR metastatic colorectal cancer, first-line **pembrolizumab** doubled PFS versus chemotherapy (16.5 vs 8.2 months; HR 0.60) with less toxicity. MSI/MMR status is therefore mandatory at diagnosis and reorders management: MSI-H peritoneal disease should generally receive immunotherapy before any CRS+HIPEC consideration.',
            ref: 'André T, et al. N Engl J Med 2020;383(23):2207–2218.',
          },
          {
            type: 'pearl',
            title: 'CC score is the master variable in CPM',
            content:
              'Across every colorectal series, completeness of cytoreduction (CC-0/1) is the dominant prognostic factor. Never proceed to a CC-2/3 result expecting benefit — and never extrapolate PRODIGE 7 (oxaliplatin) to conclude mitomycin C HIPEC is futile.',
          },
        ],
      },
      {
        id: 'ch6-s2',
        title: 'Pseudomyxoma Peritonei',
        blocks: [
          {
            type: 'text',
            content:
              'Pseudomyxoma peritonei (PMP) is a clinical syndrome of mucinous ascites and peritoneal implants, **>95% of appendiceal origin**, arising from a ruptured appendiceal mucinous neoplasm. It is the purest example of the redistribution phenomenon — high PCI with sparing of the mobile small bowel — and CRS+HIPEC (typically mitomycin C ± cisplatin) is the curative-intent standard of care.',
          },
          {
            type: 'table',
            title: 'Murphy / PSOGI 2016 classification of PMP',
            headers: ['Category', 'Grade', 'Prognosis (10-yr OS)'],
            rows: [
              ['Acellular mucin (AM)', 'No tumour cells', '~90%'],
              ['Low-grade mucinous carcinoma peritonei (LGMCP)', 'Low grade', '~63%'],
              ['High-grade mucinous carcinoma peritonei (HGMCP)', 'High grade', '~20%'],
              ['HGMCP with signet ring cells (HGMCP-SRC)', 'High grade + SRC', '< 10%'],
            ],
            ref: 'Carr NJ, et al. PSOGI. Am J Surg Pathol 2016;40(1):14–26.',
          },
          {
            type: 'trial',
            title: 'Moran / Basingstoke PMP series — durable cures in low-grade disease',
            content:
              'The largest single-centre PMP experience reported **5-year OS ~87% (LGMCP)**, 53% (HGMCP without SRC), and 28% (HGMCP-SRC), with redo CRS feasible and beneficial for LGMCP recurrence. Completeness of cytoreduction was again the strongest survival predictor, validating aggressive surgery even at very high PCI in low-grade disease.',
            ref: 'Moran BJ, et al. Br J Surg 2015; and long-term registry data.',
          },
          {
            type: 'pearl',
            title: 'High PCI does not preclude cure in LGMCP',
            content:
              'Unlike colorectal disease, a PCI of 30+ in low-grade PMP is not a contraindication — mucinous material strips readily and CC-0 remains achievable, with excellent long-term survival. The PCI ceiling is a histology-specific rule, and PMP is the classic exception.',
          },
          {
            type: 'text',
            content:
              'When peritoneal mucinous disease is found, the **appendix must always be examined**, and bilateral mucinous ovarian deposits in PMP represent secondary involvement — not an ovarian primary. Grade (Murphy/PSOGI) drives prognosis and counselling far more than tumour volume.',
          },
        ],
      },
      {
        id: 'ch6-s3',
        title: 'Peritoneal Mesothelioma',
        blocks: [
          {
            type: 'text',
            content:
              'Malignant peritoneal mesothelioma (MPeM) is a rare, aggressive tumour of the mesothelial lining, distinct from pleural disease. **Epithelioid** histology carries the best prognosis; **sarcomatoid** is a contraindication to CRS+HIPEC. Diagnosis is IHC-dependent, and **BAP1** loss is both a diagnostic aid and — paradoxically — a favourable prognostic marker warranting germline counselling.',
          },
          {
            type: 'table',
            title: 'IHC panel — mesothelioma vs adenocarcinoma',
            headers: ['Marker', 'Mesothelioma', 'Adenocarcinoma'],
            rows: [
              ['Calretinin', 'Positive', 'Negative'],
              ['WT1', 'Positive', 'Negative (except ovarian)'],
              ['D2-40 (podoplanin)', 'Positive', 'Negative'],
              ['CK5/6', 'Positive', 'Usually negative'],
              ['CEA', 'Negative', 'Positive'],
              ['MOC-31 / Ber-EP4', 'Negative', 'Positive'],
              ['BAP1 (nuclear)', 'Loss in ~60%', 'Retained'],
            ],
            ref: 'PSOGI MPeM Consensus 2022.',
          },
          {
            type: 'trial',
            title: 'CRS+HIPEC transforms epithelioid MPeM survival',
            content:
              'A multi-institutional meta-analysis of CRS + cisplatin-based HIPEC for diffuse malignant peritoneal mesothelioma reported a **median OS of 53 months and 5-year OS ~47%** — versus a historical ~12 months with systemic therapy alone — with epithelioid histology, CC-0/1, and lower PCI as independent favourable predictors.',
            ref: 'Yan TD, et al. J Clin Oncol 2009;27(36):6237–6242.',
          },
          {
            type: 'pitfall',
            title: 'MARS2 does NOT apply to peritoneal mesothelioma',
            content:
              'MARS2 (extended pleurectomy/decortication vs no surgery) is a **pleural** mesothelioma trial that showed no surgical benefit. It must **not** be extrapolated to peritoneal disease: CRS+HIPEC for epithelioid MPeM has consistently shown survival benefit. Conflating the two is a classic examination trap.',
          },
          {
            type: 'pearl',
            title: 'BAP1 loss — a good-prognosis clue with a genetic tail',
            content:
              'In peritoneal (unlike some pleural) mesothelioma, BAP1 loss associates with better survival and more epithelioid histology. BAP1 nuclear loss on IHC both supports the diagnosis and flags possible **germline BAP1 mutation** — trigger genetic counselling.',
          },
        ],
      },
      {
        id: 'ch6-s4',
        title: 'Ovarian Peritoneal Metastases',
        blocks: [
          {
            type: 'text',
            content:
              'Ovarian cancer is intrinsically a peritoneal-cavity disease; **complete cytoreduction (CC-0/R0)** at primary or interval debulking is the central surgical goal, and HIPEC has the strongest single-histology RCT support. Management is increasingly biomarker-driven through **BRCA1/2 and homologous-recombination** status.',
          },
          {
            type: 'trial',
            title: 'OVHIPEC-1 — cisplatin HIPEC at interval debulking',
            content:
              'Adding cisplatin HIPEC (100 mg/m²) at interval debulking after neoadjuvant chemotherapy improved median OS from 33.9 to 45.7 months (HR 0.67) and PFS from 10.7 to 14.2 months, with durable benefit at 5-year follow-up and no significant excess grade ≥3 toxicity — establishing IDS+HIPEC as a standard option at expert centres.',
            ref: 'van Driel WJ, et al. N Engl J Med 2018; 5-yr follow-up NEJM Evid 2023.',
          },
          {
            type: 'trial',
            title: 'SOLO-1 & DESKTOP III — maintenance and relapse surgery',
            content:
              '**SOLO-1**: olaparib maintenance in newly diagnosed BRCA-mutated ovarian cancer produced a profound PFS benefit (HR 0.30), making germline BRCA testing mandatory. **DESKTOP III**: secondary cytoreduction at first platinum-sensitive relapse improved OS (53.7 vs 46.2 months; HR 0.75) — but **only in AGO-score-positive patients achieving CC-0**, reaffirming that complete resection is non-negotiable.',
            ref: 'Moore K (SOLO-1) NEJM 2018; Harter P (DESKTOP III) NEJM 2021.',
          },
          {
            type: 'key',
            title: 'Complete resection is the throughline',
            content:
              'Whether primary, interval, or relapse surgery, the OS benefit in ovarian cancer is confined to patients achieving **CC-0/R0**. Residual disease abolishes the benefit — surgery must be planned to reach complete cytoreduction or not undertaken for survival intent.',
          },
          {
            type: 'pearl',
            title: 'HIPEC evidence is strongest at interval debulking',
            content:
              'OVHIPEC-1 supports cisplatin HIPEC specifically at **interval** debulking (post-neoadjuvant). Extrapolation to the primary-surgery setting awaits mature OVHIPEC-2 data — cite the evidence for the setting you are treating.',
          },
        ],
      },
      {
        id: 'ch6-s5',
        title: 'Gastric Peritoneal Metastases',
        blocks: [
          {
            type: 'text',
            content:
              'Gastric peritoneal metastasis is the most common metastatic pattern of gastric cancer and carries a dismal prognosis (median OS 3–6 months with systemic therapy alone). CRS+HIPEC remains **investigational**: patient selection is stringent (**PCI ≤ 6**, no signet-ring/diffuse contraindication, mandatory response to perioperative chemotherapy), and it should be offered largely within trials.',
          },
          {
            type: 'trial',
            title: 'GASTRICHIP — a negative RCT',
            content:
              'In gastric cancer with limited peritoneal disease, adding cisplatin-based HIPEC to complete CRS did **not** improve overall survival (5-year OS 18.8% vs 15.8%; HR 0.87, NS). GASTRICHIP dampened enthusiasm for routine CRS+HIPEC in gastric PM and reinforced its investigational status outside trials.',
            ref: 'Bonnot PE, et al. JAMA Surg 2021;156(9):e212384.',
          },
          {
            type: 'text',
            content:
              'Systemic therapy is the backbone. **FLOT4** established perioperative **FLOT** (docetaxel + oxaliplatin + 5-FU/LV) as standard for resectable gastric/GEJ adenocarcinoma (median OS 50 vs 35 months vs ECF/ECX). Emerging targets refine metastatic care: **CLDN18.2**-positive tumours benefit from **zolbetuximab** added to chemotherapy, alongside HER2-directed and immunotherapy strategies.',
          },
          {
            type: 'table',
            title: 'Gastric PM — where each modality stands',
            headers: ['Modality', 'Status', 'Note'],
            rows: [
              ['Perioperative FLOT', 'Standard (resectable)', 'FLOT4 — OS 50 vs 35 mo'],
              ['CRS+HIPEC', 'Investigational', 'PCI ≤ 6; GASTRICHIP negative'],
              ['PIPAC', 'Palliative / trials', 'Most mature PIPAC histology'],
              ['Zolbetuximab (anti-CLDN18.2)', 'Emerging', 'Added to chemo in CLDN18.2+ disease'],
            ],
            ref: 'FLOT4 Lancet 2019; SPOTLIGHT/GLOW zolbetuximab; GASTRICHIP 2021.',
          },
          {
            type: 'pitfall',
            title: 'Do not offer gastric CRS+HIPEC off-protocol',
            content:
              'Given a negative RCT (GASTRICHIP), 10–15% grade III–IV morbidity, and unproven survival benefit, offering CRS+HIPEC to gastric PM **outside a structured trial** is inappropriate. Signet-ring histology, PCI > 6, or progression on chemotherapy are red flags mandating MDT review before any surgery beyond palliative intent.',
          },
        ],
      },
    ],
  },
]

// ── Aggregated curriculum ─────────────────────────────────────────────────────
// Foundations (01–06) + Technique/Regional/Perioperative (07–16) +
// Disease-Specific (17–26) + Evidence & Trials (27–30) + Academic Surgery (31–45)
export const LEARN_CHAPTERS: LearnChapter[] = [
  ...FOUNDATION_CHAPTERS.map((c): LearnChapter => ({ track: 'Foundations', ...c })),
  ...TECHNIQUE_CHAPTERS,
  ...DISEASE_CHAPTERS,
  ...EVIDENCE_CHAPTERS,
  ...ACADEMIC_RESEARCH_CHAPTERS,
  ...ACADEMIC_WRITING_CHAPTERS,
]
