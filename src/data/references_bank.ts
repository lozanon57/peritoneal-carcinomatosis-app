// Curated bibliography for peritoneal surface oncology.
// All citations were verified against PubMed metadata (authors, journal, year, PMID, DOI).
// Each reference carries a one-sentence clinical takeaway for educational use.

export interface Reference {
  authors: string // e.g. "Quénet F, et al."
  title: string
  journal: string // e.g. "Lancet Oncol. 2021;22(2):256-266."
  year: number
  pmid?: string
  doi?: string
  takeaway: string // one-sentence clinical bottom line
}

export interface ReferenceTopic {
  id: string
  topic: string // human-readable topic name
  references: Reference[]
}

export const REFERENCE_BANK: ReferenceTopic[] = [
  {
    id: 'crc-crs-hipec',
    topic: 'CRS + HIPEC for colorectal peritoneal metastases',
    references: [
      {
        authors: 'Quénet F, et al.',
        title:
          'Cytoreductive surgery plus hyperthermic intraperitoneal chemotherapy versus cytoreductive surgery alone for colorectal peritoneal metastases (PRODIGE 7): a multicentre, randomised, open-label, phase 3 trial.',
        journal: 'Lancet Oncol. 2021;22(2):256-266.',
        year: 2021,
        pmid: '33476595',
        doi: '10.1016/S1470-2045(20)30599-4',
        takeaway:
          'Adding oxaliplatin-based HIPEC to complete cytoreduction did not improve overall survival, redefining HIPEC as non-obligatory for colorectal peritoneal metastases.',
      },
      {
        authors: 'Klaver CEL, et al.',
        title:
          'Adjuvant hyperthermic intraperitoneal chemotherapy in patients with locally advanced colon cancer (COLOPEC): a multicentre, open-label, randomised trial.',
        journal: 'Lancet Gastroenterol Hepatol. 2019;4(10):761-770.',
        year: 2019,
        pmid: '31371228',
        doi: '10.1016/S2468-1253(19)30239-0',
        takeaway:
          'Prophylactic adjuvant oxaliplatin-HIPEC after resection of T4 or perforated colon cancer did not improve peritoneal metastasis-free survival.',
      },
      {
        authors: 'Goéré D, et al.',
        title:
          'Second-look surgery plus hyperthermic intraperitoneal chemotherapy versus surveillance in patients at high risk of developing colorectal peritoneal metastases (PROPHYLOCHIP-PRODIGE 15): a randomised, phase 3 study.',
        journal: 'Lancet Oncol. 2020;21(9):1147-1154.',
        year: 2020,
        pmid: '32717180',
        doi: '10.1016/S1470-2045(20)30322-3',
        takeaway:
          'Systematic second-look surgery with HIPEC in high-risk patients did not improve disease-free survival over standard surveillance.',
      },
      {
        authors: 'Cashin PH, Sugarbaker PH.',
        title:
          'Hyperthermic intraperitoneal chemotherapy (HIPEC) for colorectal and appendiceal peritoneal metastases: lessons learned from PRODIGE 7.',
        journal: 'J Gastrointest Oncol. 2021;12(Suppl 1):S120-S128.',
        year: 2021,
        pmid: '33968432',
        doi: '10.21037/jgo-2020-05',
        takeaway:
          'PRODIGE 7 questions the oxaliplatin 30-minute regimen rather than the concept of HIPEC itself, keeping complete cytoreduction central.',
      },
      {
        authors: 'Parikh MS, et al.',
        title:
          'Cytoreductive Surgery and Hyperthermic Intraperitoneal Chemotherapy for Colorectal Peritoneal Metastases: A Systematic Review.',
        journal: 'Dis Colon Rectum. 2022;65(1):16-26.',
        year: 2022,
        pmid: '34636780',
        doi: '10.1097/DCR.0000000000002315',
        takeaway:
          'In selected patients CRS with HIPEC yields median survival substantially longer than systemic therapy alone, driven by completeness of cytoreduction.',
      },
      {
        authors: 'Gurusamy K, et al.',
        title:
          'Cytoreductive surgery plus hyperthermic intraoperative peritoneal chemotherapy for people with peritoneal metastases from colorectal, ovarian or gastric origin: A systematic review of randomized controlled trials.',
        journal: 'World J Surg. 2024;48(6):1385-1400.',
        year: 2024,
        pmid: '38658171',
        doi: '10.1002/wjs.12186',
        takeaway:
          'Randomized evidence remains limited and heterogeneous, underscoring the need for standardized HIPEC regimens and further trials.',
      },
    ],
  },
  {
    id: 'ovarian-hipec',
    topic: 'HIPEC in epithelial ovarian cancer',
    references: [
      {
        authors: 'van Driel WJ, et al.',
        title: 'Hyperthermic Intraperitoneal Chemotherapy in Ovarian Cancer.',
        journal: 'N Engl J Med. 2018;378(3):230-240.',
        year: 2018,
        pmid: '29342393',
        doi: '10.1056/NEJMoa1708618',
        takeaway:
          'OVHIPEC-1 showed that adding cisplatin HIPEC to interval cytoreduction improved recurrence-free and overall survival in stage III ovarian cancer.',
      },
      {
        authors: 'Aronson SL, et al.',
        title:
          'Cytoreductive surgery with or without hyperthermic intraperitoneal chemotherapy in patients with advanced ovarian cancer (OVHIPEC-1): final survival analysis of a randomised, controlled, phase 3 trial.',
        journal: 'Lancet Oncol. 2023;24(10):1109-1118.',
        year: 2023,
        pmid: '37708912',
        doi: '10.1016/S1470-2045(23)00396-0',
        takeaway:
          'The final analysis confirmed a durable overall survival benefit of interval HIPEC at 10-year follow-up.',
      },
      {
        authors: 'Koole SN, et al.',
        title:
          'Primary cytoreductive surgery with or without hyperthermic intraperitoneal chemotherapy (HIPEC) for FIGO stage III epithelial ovarian cancer: OVHIPEC-2, a phase III randomized clinical trial.',
        journal: 'Int J Gynecol Cancer. 2020;30(6):888-892.',
        year: 2020,
        pmid: '32205449',
        doi: '10.1136/ijgc-2020-001231',
        takeaway:
          'OVHIPEC-2 extends the question of HIPEC benefit to the primary (upfront) cytoreduction setting.',
      },
      {
        authors: 'Koole SN, et al.',
        title:
          'Health-related quality of life after interval cytoreductive surgery with or without hyperthermic intraperitoneal chemotherapy (HIPEC) in patients with stage III ovarian cancer.',
        journal: 'Eur J Surg Oncol. 2019;45(9):1595-1602.',
        year: 2019,
        pmid: '31128948',
        doi: '10.1016/j.ejso.2019.05.006',
        takeaway:
          'Adding HIPEC did not compromise health-related quality of life compared with surgery alone.',
      },
      {
        authors: 'Koole SN, et al.',
        title:
          'Central radiology assessment of the randomized phase III open-label OVHIPEC-1 trial in ovarian cancer.',
        journal: 'Int J Gynecol Cancer. 2020;30(11):1748-1753.',
        year: 2020,
        pmid: '33046576',
        doi: '10.1136/ijgc-2020-001825',
        takeaway:
          'Blinded central radiology review corroborated the progression-free survival benefit seen in OVHIPEC-1.',
      },
    ],
  },
  {
    id: 'gastric-crs-hipec-pipac',
    topic: 'Gastric peritoneal metastases: CRS/HIPEC and PIPAC',
    references: [
      {
        authors: 'Rau B, et al.',
        title:
          'Effect of Hyperthermic Intraperitoneal Chemotherapy on Cytoreductive Surgery in Gastric Cancer With Synchronous Peritoneal Metastases: The Phase III GASTRIPEC-I Trial.',
        journal: 'J Clin Oncol. 2024;42(2):146-156.',
        year: 2024,
        pmid: '37906724',
        doi: '10.1200/JCO.22.02867',
        takeaway:
          'GASTRIPEC-I improved progression-free and metastatic progression-free survival but not overall survival for synchronous gastric peritoneal metastases.',
      },
      {
        authors: 'Bonnot PE, et al.',
        title:
          'Cytoreductive Surgery With or Without Hyperthermic Intraperitoneal Chemotherapy for Gastric Cancer With Peritoneal Metastases (CYTO-CHIP study): A Propensity Score Analysis.',
        journal: 'J Clin Oncol. 2019;37(23):2028-2040.',
        year: 2019,
        pmid: '31084544',
        doi: '10.1200/JCO.18.01688',
        takeaway:
          'Propensity-matched data suggest CRS plus HIPEC improves survival over CRS alone in selected low-volume gastric peritoneal disease.',
      },
      {
        authors: 'Glehen O, et al.',
        title:
          'GASTRICHIP: D2 resection and hyperthermic intraperitoneal chemotherapy in locally advanced gastric carcinoma: a randomized and multicenter phase III study.',
        journal: 'BMC Cancer. 2014;14:183.',
        year: 2014,
        pmid: '24628950',
        doi: '10.1186/1471-2407-14-183',
        takeaway:
          'GASTRICHIP is the pivotal RCT testing prophylactic HIPEC after D2 gastrectomy in serosa-positive or node-positive gastric cancer.',
      },
      {
        authors: 'Guchelaar NAD, et al.',
        title:
          'Intraperitoneal chemotherapy for peritoneal metastases of gastric origin: a systematic review and meta-analysis.',
        journal: 'Br J Surg. 2024;111(5):znae116.',
        year: 2024,
        pmid: '38722803',
        doi: '10.1093/bjs/znae116',
        takeaway:
          'Intraperitoneal chemotherapy strategies show promising disease control in gastric peritoneal metastases but require confirmatory trials.',
      },
      {
        authors: 'Alyami M, et al.',
        title:
          'Pressurized intraperitoneal aerosol chemotherapy (PIPAC) for unresectable peritoneal metastasis from gastric cancer.',
        journal: 'Eur J Surg Oncol. 2021;47(1):123-127.',
        year: 2021,
        pmid: '32561204',
        doi: '10.1016/j.ejso.2020.05.021',
        takeaway:
          'PIPAC is feasible and can achieve peritoneal regression in unresectable gastric peritoneal metastases as a palliative bidirectional approach.',
      },
      {
        authors: 'Ruff SM, et al.',
        title:
          'Cytoreductive Surgery and Hyperthermic Intraperitoneal Chemotherapy for Gastric Cancer Peritoneal Metastases.',
        journal: 'Surg Oncol Clin N Am. 2025;34(2):233-251.',
        year: 2025,
        pmid: '40015802',
        doi: '10.1016/j.soc.2024.12.009',
        takeaway:
          'Careful patient selection with low peritoneal burden and response to systemic therapy is key to benefit from CRS/HIPEC in gastric cancer.',
      },
    ],
  },
  {
    id: 'pmp-appendiceal',
    topic: 'Pseudomyxoma peritonei and appendiceal neoplasms',
    references: [
      {
        authors: 'Carr NJ, et al.',
        title:
          'A Consensus for Classification and Pathologic Reporting of Pseudomyxoma Peritonei and Associated Appendiceal Neoplasia: The Results of the Peritoneal Surface Oncology Group International (PSOGI) Modified Delphi Process.',
        journal: 'Am J Surg Pathol. 2016;40(1):14-26.',
        year: 2016,
        pmid: '26492181',
        doi: '10.1097/PAS.0000000000000535',
        takeaway:
          'The PSOGI Delphi consensus standardized the terminology and grading of pseudomyxoma peritonei and appendiceal mucinous neoplasms.',
      },
      {
        authors: 'Carr NJ, et al.',
        title:
          'The histopathological classification, diagnosis and differential diagnosis of mucinous appendiceal neoplasms, appendiceal adenocarcinomas and pseudomyxoma peritonei.',
        journal: 'Histopathology. 2017;71(6):847-858.',
        year: 2017,
        pmid: '28746986',
        doi: '10.1111/his.13324',
        takeaway:
          'Provides the practical diagnostic framework distinguishing LAMN, HAMN, and appendiceal adenocarcinoma underlying PMP.',
      },
      {
        authors: 'Rauwerdink P, et al.',
        title:
          'Reclassification of Appendiceal Mucinous Neoplasms and Associated Pseudomyxoma Peritonei According to the Peritoneal Surface Oncology Group International Consensus: Clinicopathological Reflections of a Two-Center Cohort Study.',
        journal: 'Ann Surg Oncol. 2024;31(13):8572-8584.',
        year: 2024,
        pmid: '39327362',
        doi: '10.1245/s10434-024-16254-0',
        takeaway:
          'Applying the PSOGI classification refines prognostic stratification in appendiceal neoplasms and PMP.',
      },
      {
        authors: 'Martín-Román L, et al.',
        title:
          'Correlation between PSOGI pathological classification and survival outcomes of patients with pseudomyxoma peritonei treated using cytoreductive surgery and HIPEC.',
        journal: 'Pleura Peritoneum. 2023;8(2):65-74.',
        year: 2023,
        pmid: '37304162',
        doi: '10.1515/pp-2023-0001',
        takeaway:
          'Tumor grade under the PSOGI system strongly predicts survival after CRS/HIPEC for pseudomyxoma peritonei.',
      },
      {
        authors: 'Sugarbaker PH.',
        title: 'Epithelial appendiceal neoplasms.',
        journal: 'Cancer J. 2009;15(3):225-235.',
        year: 2009,
        pmid: '19556909',
        doi: '10.1097/PPO.0b013e3181a9c781',
        takeaway:
          'A foundational overview of appendiceal epithelial tumors and the rationale for peritonectomy with intraperitoneal chemotherapy.',
      },
      {
        authors: 'Carr NJ.',
        title: 'New insights in the pathology of peritoneal surface malignancy.',
        journal: 'J Gastrointest Oncol. 2021;12(Suppl 1):S216-S229.',
        year: 2021,
        pmid: '33968439',
        doi: '10.21037/jgo-2020-01',
        takeaway:
          'Summarizes evolving pathological concepts and molecular insights across peritoneal surface malignancies.',
      },
    ],
  },
  {
    id: 'peritoneal-mesothelioma',
    topic: 'Malignant peritoneal mesothelioma',
    references: [
      {
        authors: 'Malpica A, et al.',
        title:
          'Malignant Mesothelioma of the Peritoneum in Women: A Clinicopathologic Study of 164 Cases.',
        journal: 'Am J Surg Pathol. 2021;45(1):45-58.',
        year: 2021,
        pmid: '32769428',
        doi: '10.1097/PAS.0000000000001545',
        takeaway:
          'Large clinicopathologic series characterizing histologic subtypes and prognostic features of peritoneal mesothelioma.',
      },
      {
        authors: 'Kusamura S, et al.',
        title:
          'Diagnostic and Therapeutic Pathway in Diffuse Malignant Peritoneal Mesothelioma.',
        journal: 'Cancers (Basel). 2023;15(3):662.',
        year: 2023,
        pmid: '36765620',
        doi: '10.3390/cancers15030662',
        takeaway:
          'CRS plus HIPEC with cisplatin-doxorubicin is the cornerstone of curative-intent treatment for epithelioid peritoneal mesothelioma.',
      },
      {
        authors: 'Broeckx G, Pauwels P.',
        title: 'Malignant peritoneal mesothelioma: a review.',
        journal: 'Transl Lung Cancer Res. 2018;7(5):537-542.',
        year: 2018,
        pmid: '30450291',
        doi: '10.21037/tlcr.2018.10.04',
        takeaway:
          'Reviews epidemiology, diagnosis, and the role of BAP1 loss in the biology of peritoneal mesothelioma.',
      },
      {
        authors: 'Boussios S, et al.',
        title:
          'Malignant peritoneal mesothelioma: clinical aspects, and therapeutic perspectives.',
        journal: 'Ann Gastroenterol. 2018;31(6):659-669.',
        year: 2018,
        pmid: '30386115',
        doi: '10.20524/aog.2018.0305',
        takeaway:
          'Outlines the clinical presentation and emerging systemic and locoregional therapeutic options.',
      },
      {
        authors: 'Nunez-Rocha RE, et al.',
        title: 'Systemic Therapy and Surgical Management of Peritoneal Mesothelioma.',
        journal: 'Surg Oncol Clin N Am. 2025;34(2):253-263.',
        year: 2025,
        pmid: '40015803',
        doi: '10.1016/j.soc.2024.12.002',
        takeaway:
          'Integrates modern systemic agents, including immunotherapy, with cytoreductive surgery for peritoneal mesothelioma.',
      },
      {
        authors: 'Sun L, et al.',
        title: 'Diffuse malignant peritoneal mesothelioma: A review.',
        journal: 'Front Surg. 2022;9:1015884.',
        year: 2022,
        pmid: '36684194',
        doi: '10.3389/fsurg.2022.1015884',
        takeaway:
          'A concise contemporary synthesis of diagnosis, staging, and multimodal management of the disease.',
      },
    ],
  },
  {
    id: 'pci-ccr-prognosis',
    topic: 'Peritoneal Cancer Index and Completeness of Cytoreduction',
    references: [
      {
        authors: 'Yang H, et al.',
        title:
          'Prognostic role of the peritoneal cancer index in ovarian cancer patients who undergo cytoreductive surgery: a meta-analysis.',
        journal: 'Curr Probl Cancer. 2023;47(6):101014.',
        year: 2023,
        pmid: '37718231',
        doi: '10.1016/j.currproblcancer.2023.101014',
        takeaway:
          'Higher PCI independently predicts worse survival in ovarian cancer patients undergoing cytoreduction.',
      },
      {
        authors: 'Asp M, et al.',
        title:
          'Prognostic Value of Peritoneal Cancer Index After Complete Cytoreductive Surgery in Advanced Ovarian Cancer.',
        journal: 'Anticancer Res. 2022;42(5):2541-2551.',
        year: 2022,
        pmid: '35489749',
        doi: '10.21873/anticanres.15732',
        takeaway:
          'Even after complete cytoreduction, PCI retains prognostic value for survival in advanced ovarian cancer.',
      },
      {
        authors: 'Sanson A, et al.',
        title:
          'Correlation between peritoneal cancer index and survival in advanced epithelial ovarian cancer with complete resection.',
        journal: 'Int J Gynecol Cancer. 2024;34(5):730-737.',
        year: 2024,
        pmid: '38485223',
        doi: '10.1136/ijgc-2023-005158',
        takeaway:
          'Disease burden measured by PCI correlates with outcome despite achieving complete macroscopic resection.',
      },
      {
        authors: 'Blaj S, et al.',
        title:
          'Prognostic Factors in Pseudomyxoma Peritonei with Emphasis on the Predictive Role of Peritoneal Cancer Index and Tumor Markers.',
        journal: 'Cancers (Basel). 2023;15(4):1326.',
        year: 2023,
        pmid: '36831667',
        doi: '10.3390/cancers15041326',
        takeaway:
          'Combining PCI with tumor markers improves prognostic prediction in pseudomyxoma peritonei.',
      },
      {
        authors: 'Yildirim M, et al.',
        title:
          'Prognostic significance of the immuno-peritoneal cancer index in peritoneal metastatic patients treated with cytoreductive surgery and hyperthermic intraperitoneal chemotherapy.',
        journal: 'Langenbecks Arch Surg. 2023;408(1):182.',
        year: 2023,
        pmid: '37148400',
        doi: '10.1007/s00423-023-02912-6',
        takeaway:
          'Incorporating systemic inflammatory markers into the PCI enhances prognostic stratification after CRS/HIPEC.',
      },
    ],
  },
  {
    id: 'pipac',
    topic: 'Pressurized Intraperitoneal Aerosol Chemotherapy (PIPAC)',
    references: [
      {
        authors: 'Lurvink RJ, et al.',
        title:
          'Pressurized intraperitoneal aerosol chemotherapy with oxaliplatin (PIPAC-OX) in patients with colorectal peritoneal metastases-a systematic review.',
        journal: 'J Gastrointest Oncol. 2021;12(Suppl 1):S242-S258.',
        year: 2021,
        pmid: '33968441',
        doi: '10.21037/jgo-20-257',
        takeaway:
          'PIPAC-OX is technically safe and can induce histologic regression in colorectal peritoneal metastases.',
      },
      {
        authors: 'Tabchouri N, et al.',
        title: 'Pressurized Intraperitoneal Aerosol Chemotherapy for Colorectal Peritoneal Metastases.',
        journal: 'Ann Surg Oncol. 2021;28(9):5275-5286.',
        year: 2021,
        pmid: '33471267',
        doi: '10.1245/s10434-020-09508-0',
        takeaway:
          'Repeated PIPAC is feasible with acceptable morbidity and may convert selected patients toward cytoreduction.',
      },
      {
        authors: 'Casella F, et al.',
        title:
          'Pressurized intraperitoneal aerosol chemotherapy (PIPAC) in multimodal therapy for patients with oligometastatic peritoneal gastric cancer: a randomized multicenter phase III trial PIPAC VEROne.',
        journal: 'Pleura Peritoneum. 2022;7(3):135-141.',
        year: 2022,
        pmid: '36159218',
        doi: '10.1515/pp-2022-0111',
        takeaway:
          'PIPAC VEROne is a randomized phase III trial testing PIPAC added to systemic therapy in oligometastatic gastric peritoneal disease.',
      },
      {
        authors: 'Ukegjini K, et al.',
        title:
          'Pressurized Intraperitoneal Aerosol Chemotherapy-Related Clinical Trials in the Treatment of Peritoneal Metastases.',
        journal: 'Oncology. 2021;99(9):601-610.',
        year: 2021,
        pmid: '34265774',
        doi: '10.1159/000516959',
        takeaway:
          'Maps the growing landscape of PIPAC trials and highlights the need for randomized efficacy data.',
      },
      {
        authors: 'Robella M, et al.',
        title:
          'Advances in Bidirectional Therapy for Peritoneal Metastases: A Systematic Review of Pressurized Intraperitoneal Aerosol Chemotherapy (PIPAC) Combined with Systemic Chemotherapy.',
        journal: 'Cancers (Basel). 2025;17(15):2580.',
        year: 2025,
        pmid: '40805276',
        doi: '10.3390/cancers17152580',
        takeaway:
          'Combining PIPAC with systemic chemotherapy (bidirectional therapy) shows encouraging response and conversion rates.',
      },
    ],
  },
  {
    id: 'hipec-pharmacology',
    topic: 'HIPEC pharmacology and drug selection',
    references: [
      {
        authors: 'González-Moreno S, et al.',
        title: 'Hyperthermic intraperitoneal chemotherapy: Rationale and technique.',
        journal: 'World J Gastrointest Oncol. 2010;2(2):68-75.',
        year: 2010,
        pmid: '21160924',
        doi: '10.4251/wjgo.v2.i2.68',
        takeaway:
          'Explains the pharmacokinetic advantage of intraperitoneal delivery and the synergistic cytotoxic role of hyperthermia.',
      },
      {
        authors: 'Mistry P, et al.',
        title:
          'Cytoreductive surgery with intraperitoneal chemotherapy in the management of peritoneal surface malignancy: a pharmacist\'s perspective.',
        journal: 'Eur J Hosp Pharm. 2016;23(4):233-238.',
        year: 2016,
        pmid: '31156855',
        doi: '10.1136/ejhpharm-2016-000877',
        takeaway:
          'Hydrophilic high-molecular-weight drugs at 41-43°C maximize local exposure with minimal systemic toxicity.',
      },
      {
        authors: 'Wisselink DD, et al.',
        title:
          'Systematic review of published literature on oxaliplatin and mitomycin C as chemotherapeutic agents for hyperthermic intraperitoneal chemotherapy in patients with peritoneal metastases from colorectal cancer.',
        journal: 'Crit Rev Oncol Hematol. 2019;142:119-129.',
        year: 2019,
        pmid: '31400583',
        doi: '10.1016/j.critrevonc.2019.06.014',
        takeaway:
          'Oxaliplatin and mitomycin C regimens differ substantially in exposure time and morbidity, complicating direct comparison.',
      },
      {
        authors: 'Delhorme JB, et al.',
        title:
          'Peritoneal Metastases of Colorectal Origin Treated with Complete Cytoreduction and Hyperthermic Intraperitoneal Chemotherapy: The Efficiency of Mitomycin C.',
        journal: 'Ann Surg Oncol. 2022;29(12):7568-7576.',
        year: 2022,
        pmid: '35882692',
        doi: '10.1245/s10434-022-12221-9',
        takeaway:
          'Mitomycin C-based HIPEC showed superior disease-free and peritoneal disease-free survival versus oxaliplatin in colorectal peritoneal metastases.',
      },
      {
        authors: 'Tamura K, et al.',
        title:
          'Combined Intraperitoneal and Systemic Chemotherapy for Peritoneal Metastases: Drug Delivery Concepts, Pharmacokinetics, and Clinical Applications: A Narrative Review.',
        journal: 'Pharmaceutics. 2026;18(2):179.',
        year: 2026,
        pmid: '41754921',
        doi: '10.3390/pharmaceutics18020179',
        takeaway:
          'The peritoneum-plasma barrier underlies the pharmacologic rationale for combining intraperitoneal and systemic chemotherapy.',
      },
    ],
  },
  {
    id: 'crs-morbidity-eras',
    topic: 'CRS/HIPEC morbidity, ERAS and perioperative outcomes',
    references: [
      {
        authors: 'Robella M, et al.',
        title:
          'Enhanced Recovery after Surgery (ERAS) Program for Patients with Peritoneal Surface Malignancies Undergoing Cytoreductive Surgery with or without HIPEC: A Systematic Review and a Meta-Analysis.',
        journal: 'Cancers (Basel). 2023;15(3):570.',
        year: 2023,
        pmid: '36765534',
        doi: '10.3390/cancers15030570',
        takeaway:
          'ERAS protocols reduce length of stay without increasing complications after CRS/HIPEC.',
      },
      {
        authors: 'Lu PW, et al.',
        title:
          'Cytoreductive Surgery and HIPEC in an Enhanced Recovery After Surgery Program: A Feasibility Study.',
        journal: 'J Surg Res. 2020;247:59-65.',
        year: 2020,
        pmid: '31767280',
        doi: '10.1016/j.jss.2019.10.042',
        takeaway:
          'ERAS is feasible and safe even in the complex, high-morbidity setting of CRS/HIPEC.',
      },
      {
        authors: 'Yue L, et al.',
        title:
          'Improved Postoperative Pain Management Outcomes After Implementation of Enhanced Recovery After Surgery (ERAS) Protocol for Cytoreductive Surgery and Hyperthermic Intraperitoneal Chemotherapy (CRS-HIPEC).',
        journal: 'Ann Surg Oncol. 2024;31(6):3769-3777.',
        year: 2024,
        pmid: '38466484',
        doi: '10.1245/s10434-024-15120-3',
        takeaway:
          'ERAS implementation improved postoperative analgesia and reduced opioid use after CRS/HIPEC.',
      },
      {
        authors: 'Nampoolsuksan C, et al.',
        title:
          'Enhanced recovery after surgery protocols in gastrectomy with cytoreductive surgery and hyperthermic intraperitoneal chemotherapy for gastric cancer.',
        journal: 'World J Clin Oncol. 2025;16(8):107533.',
        year: 2025,
        pmid: '40901314',
        doi: '10.5306/wjco.v16.i8.107533',
        takeaway:
          'ERAS pathways can be adapted to gastrectomy combined with CRS/HIPEC to accelerate recovery.',
      },
    ],
  },
  {
    id: 'molecular-markers',
    topic: 'Molecular markers in peritoneal metastases',
    references: [
      {
        authors: 'Zucchini N, et al.',
        title:
          'Impact of RAS, BRAF mutations and microsatellite status in peritoneal metastases from colorectal cancer treated with cytoreduction + HIPEC: scoping review.',
        journal: 'Int J Hyperthermia. 2025;42(1):2479527.',
        year: 2025,
        pmid: '40101749',
        doi: '10.1080/02656736.2025.2479527',
        takeaway:
          'RAS/BRAF mutation and microsatellite status carry prognostic weight and should inform selection for CRS/HIPEC.',
      },
      {
        authors: 'Gao P, et al.',
        title:
          'Effect of RAS and BRAF mutations on peritoneal metastasis risk and cytoreductive surgery/hyperthermic intraperitoneal chemotherapy efficacy in colorectal cancer: A systematic review and meta-analysis.',
        journal: 'Eur J Surg Oncol. 2024;50(9):108474.',
        year: 2024,
        pmid: '38870874',
        doi: '10.1016/j.ejso.2024.108474',
        takeaway:
          'BRAF and RAS mutations are associated with higher peritoneal recurrence and poorer survival after CRS/HIPEC.',
      },
      {
        authors: 'Tonello M, et al.',
        title:
          'Microsatellite and RAS/RAF Mutational Status as Prognostic Factors in Colorectal Peritoneal Metastases Treated with Cytoreductive Surgery and Hyperthermic Intraperitoneal Chemotherapy (HIPEC).',
        journal: 'Ann Surg Oncol. 2022;29(6):3405-3417.',
        year: 2022,
        pmid: '34783946',
        doi: '10.1245/s10434-021-11045-3',
        takeaway:
          'BRAF mutation and microsatellite instability define a subgroup with markedly worse prognosis after CRS/HIPEC.',
      },
      {
        authors: 'Graf W, et al.',
        title:
          'Prognostic Impact of BRAF and KRAS Mutation in Patients with Colorectal and Appendiceal Peritoneal Metastases Scheduled for CRS and HIPEC.',
        journal: 'Ann Surg Oncol. 2020;27(1):293-300.',
        year: 2020,
        pmid: '31571052',
        doi: '10.1245/s10434-019-07452-2',
        takeaway:
          'BRAF mutation independently predicts shorter survival and can help refine surgical candidacy.',
      },
      {
        authors: 'Larsen SG, et al.',
        title:
          'Impact of KRAS, BRAF and microsatellite instability status after cytoreductive surgery and HIPEC in a national cohort of colorectal peritoneal metastasis patients.',
        journal: 'Br J Cancer. 2022;126(5):726-735.',
        year: 2022,
        pmid: '34887523',
        doi: '10.1038/s41416-021-01620-6',
        takeaway:
          'A national cohort confirms the adverse prognostic effect of BRAF mutation on survival after CRS/HIPEC.',
      },
      {
        authors: 'Angerilli V, et al.',
        title:
          'Heterogeneity of predictive biomarker expression in gastric and esophago-gastric junction carcinoma with peritoneal dissemination.',
        journal: 'Gastric Cancer. 2025;28(4):569-578.',
        year: 2025,
        pmid: '40205072',
        doi: '10.1007/s10120-025-01609-7',
        takeaway:
          'HER2, CLDN18.2, and other biomarkers show spatial heterogeneity between primary and peritoneal gastric tumors, affecting targeted therapy.',
      },
      {
        authors: 'Pellino A, et al.',
        title:
          'Association of CLDN18 Protein Expression with Clinicopathological Features and Prognosis in Advanced Gastric and Gastroesophageal Junction Adenocarcinomas.',
        journal: 'J Pers Med. 2021;11(11):1095.',
        year: 2021,
        pmid: '34834447',
        doi: '10.3390/jpm11111095',
        takeaway:
          'CLDN18.2 expression is frequent in gastric adenocarcinoma, supporting its role as a therapeutic target.',
      },
    ],
  },
  {
    id: 'patient-selection',
    topic: 'Patient selection: imaging and laparoscopy',
    references: [
      {
        authors: 'Hentzen JEKR, et al.',
        title:
          'Role of diagnostic laparoscopy in patients with suspicion of colorectal peritoneal metastases to evaluate suitability for cytoreductive surgery with hyperthermic intraperitoneal chemotherapy.',
        journal: 'BJS Open. 2019;3(6):812-821.',
        year: 2019,
        pmid: '31832588',
        doi: '10.1002/bjs5.50193',
        takeaway:
          'Diagnostic laparoscopy accurately assesses peritoneal extent and prevents non-therapeutic laparotomies.',
      },
      {
        authors: 'de Boer NL, et al.',
        title:
          'The importance of integrating diagnostic modalities in patient selection for CRS-HIPEC in colorectal peritoneal metastases.',
        journal: 'Acta Radiol. 2024;65(6):525-534.',
        year: 2024,
        pmid: '38439639',
        doi: '10.1177/02841851241229154',
        takeaway:
          'Combining CT, MRI, and laparoscopy improves accuracy of PCI estimation and resectability assessment.',
      },
      {
        authors: 'Leimkühler M, et al.',
        title:
          'Adding diagnostic laparoscopy to computed tomography for the evaluation of peritoneal metastases in patients with colorectal cancer: A retrospective cohort study.',
        journal: 'Surg Oncol. 2020;33:135-140.',
        year: 2020,
        pmid: '32561078',
        doi: '10.1016/j.suronc.2020.02.010',
        takeaway:
          'CT alone underestimates peritoneal disease; adding laparoscopy refines treatment decisions.',
      },
      {
        authors: 'van \'t Sant I, et al.',
        title:
          'Diffusion-weighted MRI assessment of the peritoneal cancer index before cytoreductive surgery.',
        journal: 'Br J Surg. 2019;106(4):491-498.',
        year: 2019,
        pmid: '30353920',
        doi: '10.1002/bjs.10989',
        takeaway:
          'Diffusion-weighted MRI improves preoperative PCI estimation compared with conventional imaging.',
      },
    ],
  },
  {
    id: 'consensus-guidelines',
    topic: 'Peritoneal surface oncology consensus and guidelines',
    references: [
      {
        authors: 'Chicago Consensus Working Group.',
        title:
          'The Chicago Consensus on peritoneal surface malignancies: Management of colorectal metastases.',
        journal: 'Cancer. 2020;126(11):2534-2540.',
        year: 2020,
        pmid: '32282070',
        doi: '10.1002/cncr.32874',
        takeaway:
          'Provides multidisciplinary US consensus recommendations for managing colorectal peritoneal metastases.',
      },
      {
        authors: 'Chicago Consensus Working Group.',
        title:
          'The Chicago Consensus on peritoneal surface malignancies: Management of appendiceal neoplasms.',
        journal: 'Cancer. 2020;126(11):2525-2533.',
        year: 2020,
        pmid: '32282073',
        doi: '10.1002/cncr.32881',
        takeaway:
          'Defines consensus pathways for appendiceal neoplasms and pseudomyxoma peritonei.',
      },
      {
        authors: 'Chicago Consensus Working Group.',
        title:
          'The Chicago Consensus on peritoneal surface malignancies: Management of gastric metastases.',
        journal: 'Cancer. 2020;126(11):2541-2546.',
        year: 2020,
        pmid: '32282074',
        doi: '10.1002/cncr.32868',
        takeaway:
          'Frames the appropriate, still largely investigational, role of CRS/HIPEC in gastric peritoneal disease.',
      },
      {
        authors: 'Chicago Consensus Working Group.',
        title:
          'The Chicago Consensus on peritoneal surface malignancies: Management of ovarian neoplasms.',
        journal: 'Cancer. 2020;126(11):2553-2560.',
        year: 2020,
        pmid: '32282068',
        doi: '10.1002/cncr.32867',
        takeaway:
          'Consensus guidance integrating HIPEC into the multidisciplinary management of ovarian peritoneal disease.',
      },
      {
        authors: 'Tonello M, et al.',
        title:
          'National Guidelines for Cytoreductive Surgery and Hyperthermic Intraperitoneal Chemotherapy (HIPEC) in Peritoneal Malignancies: A Worldwide Systematic Review and Recommendations of Strength Analysis.',
        journal: 'Ann Surg Oncol. 2025;32(8):5567-5580.',
        year: 2025,
        pmid: '40413333',
        doi: '10.1245/s10434-025-17518-z',
        takeaway:
          'Systematically compares national guidelines worldwide, revealing convergence and gaps in CRS/HIPEC recommendations.',
      },
      {
        authors: 'Kepenekian V, Glehen O.',
        title: 'Peritoneal metastases management: Towards the era of prospective randomized trials?',
        journal: 'Eur J Surg Oncol. 2020;46(12):2160-2162.',
        year: 2020,
        pmid: '32576480',
        doi: '10.1016/j.ejso.2020.05.011',
        takeaway:
          'Calls for high-quality randomized evidence to consolidate the role of locoregional therapies in peritoneal metastases.',
      },
    ],
  },
]
