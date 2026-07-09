// Curated bibliography of CHINESE peritoneal surface oncology literature.
// China-based / Chinese-authored studies indexed in PubMed, plus Chinese national
// consensus statements. Compiled for the educational app associated with Tsinghua
// University & Beijing Tsinghua Changgung Hospital (Prof. Yan Li).
//
// Every citation was verified against PubMed metadata (authors, journal, year, PMID, DOI).
// Source: PubMed (https://pubmed.ncbi.nlm.nih.gov). Each reference carries a one-sentence
// clinical takeaway for educational use.

import type { ReferenceTopic } from './references_bank'

export const CHINA_REFERENCES: ReferenceTopic[] = [
  {
    id: 'cn-landmark',
    topic: 'Chinese Landmark Trials',
    references: [
      {
        authors: 'Yang XJ, Huang CQ, Suo T, Mei LJ, Yang GL, Cheng FL, Zhou YF, Xiong B, Yonemura Y, Li Y.',
        title:
          'Cytoreductive surgery and hyperthermic intraperitoneal chemotherapy improves survival of patients with peritoneal carcinomatosis from gastric cancer: final results of a phase III randomized clinical trial.',
        journal: 'Ann Surg Oncol. 2011;18(6):1575-1581.',
        year: 2011,
        pmid: '21431408',
        doi: '10.1245/s10434-011-1631-5',
        takeaway:
          'The pivotal Chinese phase III RCT: adding HIPEC (cisplatin + mitomycin C) to cytoreductive surgery nearly doubled median survival in gastric peritoneal carcinomatosis (11.0 vs 6.5 months) without added serious morbidity.',
      },
      {
        authors: 'Huang CQ, Yang XJ, Yu Y, Wu HT, Liu Y, Yonemura Y, Li Y.',
        title:
          'Cytoreductive surgery plus hyperthermic intraperitoneal chemotherapy improves survival for patients with peritoneal carcinomatosis from colorectal cancer: a phase II study from a Chinese center.',
        journal: 'PLoS One. 2014;9(9):e108509.',
        year: 2014,
        pmid: '25259574',
        doi: '10.1371/journal.pone.0108509',
        takeaway:
          'Prospective phase II Chinese single-center study showing CRS+HIPEC yields a median OS of 16 months in colorectal peritoneal carcinomatosis, with complete cytoreduction and >=6 adjuvant chemotherapy cycles as independent survival factors.',
      },
      {
        authors: 'Wu HT, Yang XJ, Huang CQ, Sun JH, Ji ZH, Peng KW, Zhang Q, Li Y.',
        title:
          'Cytoreductive surgery plus hyperthermic intraperitoneal chemotherapy with lobaplatin and docetaxel improves survival for patients with peritoneal carcinomatosis from abdominal and pelvic malignancies.',
        journal: 'World J Surg Oncol. 2016;14(1):246.',
        year: 2016,
        pmid: '27633880',
        doi: '10.1186/s12957-016-1004-4',
        takeaway:
          'Chinese phase II trial (NCT00454519) establishing a lobaplatin + docetaxel HIPEC regimen as feasible and safe, with a median OS of 24.2 months across mixed abdominopelvic peritoneal carcinomatosis.',
      },
      {
        authors: 'Fan B, Bu Z, Zhang J, Zong X, Ji X, Fu T, Jia Z, Zhang Y, Wu X.',
        title:
          'Phase II trial of prophylactic hyperthermic intraperitoneal chemotherapy in patients with locally advanced gastric cancer after curative surgery.',
        journal: 'BMC Cancer. 2021;21(1):216.',
        year: 2021,
        pmid: '33653317',
        doi: '10.1186/s12885-021-07925-2',
        takeaway:
          'Chinese prophylactic (adjuvant) HIPEC phase II study suggesting improved peritoneal recurrence control after curative resection of locally advanced gastric cancer, supporting HIPEC as risk-adapted adjuvant therapy.',
      },
      {
        authors: 'Huang CQ, Min Y, Wang SY, Yang XJ, Liu Y, Xiong B, Yonemura Y, Li Y.',
        title:
          'Cytoreductive surgery plus hyperthermic intraperitoneal chemotherapy improves survival for peritoneal carcinomatosis from colorectal cancer: a systematic review and meta-analysis of current evidence.',
        journal: 'Oncotarget. 2017;8(33):55657-55683.',
        year: 2017,
        pmid: '28903452',
        doi: '10.18632/oncotarget.17497',
        takeaway:
          'Chinese-led meta-analysis of 76 studies showing a pooled survival hazard ratio of 2.67 favouring CRS+HIPEC in colorectal peritoneal carcinomatosis, independent of the HIPEC drug regimen used.',
      },
    ],
  },
  {
    id: 'cn-consensus',
    topic: 'Chinese Expert Consensus & Guidelines',
    references: [
      {
        authors: 'Li Y, Zhou YF, Liang H, Wang HQ, Hao JH, Zhu ZG, Wan DS, Qin LX, Cui SZ, Ji JF, Xu HM, Wei SZ, Xu HB, Suo T, Yang SJ, Xie CH, Yang XJ, Yonemura Y.',
        title:
          'Chinese expert consensus on cytoreductive surgery and hyperthermic intraperitoneal chemotherapy for peritoneal malignancies.',
        journal: 'World J Gastroenterol. 2016;22(30):6906-6916.',
        year: 2016,
        pmid: '27570426',
        doi: '10.3748/wjg.v22.i30.6906',
        takeaway:
          'The foundational Chinese national consensus standardizing patient selection, technique, drug regimens and perioperative management for CRS+HIPEC in peritoneal malignancies.',
      },
      {
        authors: 'Professional Committee of Integrated Rehabilitation for Peritoneal Tumors, Chinese Anti-Cancer Association.',
        title:
          'Expert consensus on the comprehensive management of peritoneal metastasis from appendiceal epithelial neoplasms (2025 version).',
        journal: 'Zhonghua Wei Chang Wai Ke Za Zhi (Chin J Gastrointest Surg). 2025;28(11):1223-1231.',
        year: 2025,
        pmid: '41290232',
        doi: '10.3760/cma.j.cn441530-20250718-00271',
        takeaway:
          'Chinese Anti-Cancer Association multidisciplinary consensus standardizing staging, extended resection indications, and CRS+HIPEC perioperative management for peritoneal metastasis from appendiceal epithelial tumours.',
      },
      {
        authors: 'Li XB, Ji ZH, Li Y.',
        title: 'Peritoneal Carcinomatosis Diagnosis and Treatment in China: Focusing on Training and Collaboration.',
        journal: 'Indian J Surg Oncol. 2019;10(Suppl 1):12-18.',
        year: 2019,
        pmid: '30886487',
        doi: '10.1007/s13193-019-00890-0',
        takeaway:
          'Overview of the Beijing Shijitan pioneering program (>1000 CRS+HIPEC cases) describing how a nationwide professional training network standardized peritoneal carcinomatosis care across China.',
      },
      {
        authors: 'Lin YL, Xu DZ, Li XB, Yan FC, Xu HB, Peng Z, Li Y.',
        title:
          'Consensuses and controversies on pseudomyxoma peritonei: a review of the published consensus statements and guidelines.',
        journal: 'Orphanet J Rare Dis. 2021;16(1):85.',
        year: 2021,
        pmid: '33581733',
        doi: '10.1186/s13023-021-01723-6',
        takeaway:
          'Chinese-authored synthesis of international consensus statements on pseudomyxoma peritonei, clarifying agreements and remaining controversies in terminology, staging and CRS+HIPEC management.',
      },
    ],
  },
  {
    id: 'cn-gastric',
    topic: 'Gastric PM — Chinese Series & Bidirectional Therapy',
    references: [
      {
        authors: 'Yu P, Ye Z, Dai G, Zhang Y, Huang L, Du Y, Cheng X.',
        title:
          'Neoadjuvant systemic and hyperthermic intraperitoneal chemotherapy combined with cytoreductive surgery for gastric cancer patients with limited peritoneal metastasis: a prospective cohort study.',
        journal: 'BMC Cancer. 2020;20(1):1108.',
        year: 2020,
        pmid: '33198674',
        doi: '10.1186/s12885-020-07601-x',
        takeaway:
          'Chinese prospective cohort applying a bidirectional strategy (neoadjuvant systemic + HIPEC then CRS) to convert and resect limited gastric peritoneal metastasis with encouraging survival.',
      },
      {
        authors: 'Lv CB, Tong LY, Zeng WM, Liu YX, Li XL, Cai YQ, Chen QY.',
        title:
          'Efficacy of neoadjuvant chemotherapy combined with prophylactic intraperitoneal hyperthermic chemotherapy for locally advanced gastric cancer.',
        journal: 'World J Surg Oncol. 2024;22(1):240.',
        year: 2024,
        pmid: '39256787',
        doi: '10.1186/s12957-024-03526-y',
        takeaway:
          'Chinese series combining neoadjuvant chemotherapy with prophylactic HIPEC in locally advanced gastric cancer, aiming to reduce peritoneal recurrence in high-risk patients.',
      },
      {
        authors: 'Wu HT, Peng KW, Ji ZH, Sun JH, Zhang Q, Yang XJ, Huang CQ, Li Y.',
        title:
          'Cytoreductive surgery plus hyperthermic intraperitoneal chemotherapy with lobaplatin and docetaxel to treat synchronous peritoneal carcinomatosis from gastric cancer: Results from a Chinese center.',
        journal: 'Eur J Surg Oncol. 2016;42(7):1024-1034.',
        year: 2016,
        pmid: '27179924',
        doi: '10.1016/j.ejso.2016.04.053',
        takeaway:
          'Fifty-patient Chinese CRS+HIPEC series with lobaplatin + docetaxel for synchronous gastric peritoneal carcinomatosis, with completeness of cytoreduction and >=6 adjuvant cycles predicting better survival.',
      },
      {
        authors: 'Ba MC, Cui SZ, Lin SQ, Tang YQ, Wu YB, Wang B, Zhang XL.',
        title:
          'Chemotherapy with laparoscope-assisted continuous circulatory hyperthermic intraperitoneal perfusion for malignant ascites.',
        journal: 'World J Gastroenterol. 2010;16(15):1901-1907.',
        year: 2010,
        pmid: '20397270',
        doi: '10.3748/wjg.v16.i15.1901',
        takeaway:
          'Chinese description of laparoscope-assisted continuous circulatory HIPEC that controls malignant ascites, including ascites from unresectable gastric cancer.',
      },
      {
        authors: 'Wang Z, Chen JQ, Liu JL, Tian L.',
        title:
          'Application of laparoscopic exploration combined with abdominal exfoliative cytology in the diagnosis and treatment of locally advanced gastric cancer.',
        journal: 'Zhonghua Wei Chang Wai Ke Za Zhi (Chin J Gastrointest Surg). 2020;23(2):180-185.',
        year: 2020,
        pmid: '32074798',
        doi: '10.3760/cma.j.issn.1671-0274.2020.02.013',
        takeaway:
          'Chinese report on staging laparoscopy plus peritoneal exfoliative cytology to detect occult peritoneal disease and guide treatment in locally advanced gastric cancer.',
      },
    ],
  },
  {
    id: 'cn-crs-series',
    topic: 'Chinese CRS+HIPEC Clinical Series',
    references: [
      {
        authors: 'Yu Y, Li Y, Lin YL, Ma R, Ji ZH, Zhang YB, An SL, Liu G, Yang R, Li XB.',
        title:
          'Efficacy of 1384 cases of peritoneal carcinomatosis underwent cytoreductive surgery plus hyperthermic intraperitoneal chemotherapy.',
        journal: 'Zhonghua Wei Chang Wai Ke Za Zhi (Chin J Gastrointest Surg). 2021;24(3):218-227.',
        year: 2021,
        pmid: '34645167',
        doi: '10.3760/cma.j.cn.441530-20201110-00603',
        takeaway:
          "One of China's largest single-program CRS+HIPEC experiences (1384 procedures), documenting safety and survival across multiple primary tumour origins.",
      },
      {
        authors: 'Liu G, Ji ZH, Li XB, An SL, Zhang YB, Li Y, Yu Y, Zhao J, Yang R, Li XB.',
        title:
          'Outcomes Following Cytoreductive Surgery and Hyperthermic Intraoperative Thoraco-Abdominal Chemotherapy with Diaphragm Resection for Peritoneal Carcinomatosis: A Retrospective Cohort Study.',
        journal: 'Ann Surg Oncol. 2023.',
        year: 2023,
        pmid: '37865941',
        doi: '10.1245/s10434-023-14470-8',
        takeaway:
          'Chinese cohort extending regional chemotherapy to hyperthermic intraoperative thoraco-abdominal perfusion (HITAC) after diaphragm resection to address extensive upper-abdominal disease.',
      },
      {
        authors: 'Liang H, Su YD, Fu F, Li XB, Ma R, Yang R, Wu HL, Li Y.',
        title:
          'Effect of postoperative normothermic intraperitoneal chemotherapy on the prognosis of MPM patients receiving CRS+HIPEC: A single-center case-control study.',
        journal: 'Eur J Surg Oncol. 2024;50(12):108692.',
        year: 2024,
        pmid: '39298871',
        doi: '10.1016/j.ejso.2024.108692',
        takeaway:
          'Chinese case-control study in malignant peritoneal mesothelioma showing that adding postoperative normothermic intraperitoneal chemotherapy after CRS+HIPEC may further improve prognosis.',
      },
      {
        authors: 'Zhang J, Mei L, Wang F, Bai C, Yang R, Li XB, Li Y.',
        title:
          'Ten years disease-free survival of advanced epithelial ovarian cancer treated by cytoreductive surgery plus hyperthermic intraperitoneal chemotherapy.',
        journal: 'Medicine (Baltimore). 2020;99(49):e23404.',
        year: 2020,
        pmid: '33285729',
        doi: '10.1097/MD.0000000000023404',
        takeaway:
          'Chinese report documenting durable ten-year disease-free survival with CRS+HIPEC in selected advanced epithelial ovarian cancer with peritoneal spread.',
      },
      {
        authors: 'Gao S, Zhang X, Yu Z, Shi G, Ma R, Li Y.',
        title:
          'Long-term outcomes of pseudomyxoma peritonei after cytoreductive surgery and hyperthermic intraperitoneal chemotherapy.',
        journal: 'Front Surg. 2026;12:1692847.',
        year: 2026,
        pmid: '41694806',
        doi: '10.3389/fsurg.2026.1692847',
        takeaway:
          'Chinese long-term outcome analysis confirming CRS+HIPEC as the curative-intent standard for pseudomyxoma peritonei of appendiceal origin.',
      },
      {
        authors: 'Wang B, Ma R, Shi G, Li XB, Yang R, Li Y.',
        title:
          'Hyperthermic intraperitoneal chemotherapy in patients with incomplete cytoreduction for appendiceal pseudomyxoma peritonei.',
        journal: 'Orphanet J Rare Dis. 2024;19(1):1.',
        year: 2024,
        pmid: '38178189',
        doi: '10.1186/s13023-023-02995-w',
        takeaway:
          'Chinese analysis showing HIPEC still confers a survival benefit even when complete cytoreduction cannot be achieved in appendiceal pseudomyxoma peritonei.',
      },
      {
        authors: 'Jiao J, Li F, Liu Q, Li C, Wang W.',
        title:
          'Development of a prognostic model for postoperative survival in appendiceal pseudomyxoma peritonei based on clinicopathological features.',
        journal: 'World J Surg Oncol. 2026;24(1):20.',
        year: 2026,
        pmid: '42277799',
        doi: '10.1186/s12957-026-04363-x',
        takeaway:
          'Chinese single-center study proposing a clinicopathological prognostic model to individualize follow-up and treatment intensity after CRS+HIPEC for pseudomyxoma peritonei.',
      },
    ],
  },
  {
    id: 'cn-hipec-tech',
    topic: 'HIPEC Technique, Pharmacology & Malignant Ascites',
    references: [
      {
        authors: 'Ba MC, Cui SZ, Lin SQ, Tang YQ, Wu YB, Wang B, Zhang XL.',
        title:
          'Multivariate comparison of B-ultrasound guided and laparoscopic continuous circulatory hyperthermic intraperitoneal perfusion chemotherapy for malignant ascites.',
        journal: 'Surg Endosc. 2013;27(8):2735-2743.',
        year: 2013,
        pmid: '23392978',
        doi: '10.1007/s00464-013-2800-3',
        takeaway:
          'Chinese comparison finding B-ultrasound-guided HIPEC a less invasive alternative to laparoscopic HIPEC for palliating malignant ascites with comparable ascites control.',
      },
      {
        authors: 'Cui SZ, Ba MC, Tang YQ, Liu JW, Wu YB, Wang B, Zhang XL.',
        title:
          'Laparoscopic Hyperthermic Intraperitoneal Perfusion Chemotherapy for Patients with Malignant Ascites Secondary to Unresectable Gastric Cancer.',
        journal: 'J Laparoendosc Adv Surg Tech A. 2016;26(2):81-86.',
        year: 2016,
        pmid: '26779722',
        doi: '10.1089/lap.2015.0266',
        takeaway:
          'Chinese series showing laparoscopic HIPEC effectively controls malignant ascites and improves quality of life in unresectable gastric cancer.',
      },
      {
        authors: 'Ba M, Cui S, Wang B, Long H, Yan Z, Wang S, Wu Y, Gao Y.',
        title:
          'Port-Site Metastases and Chimney Effect of B-Ultrasound-Guided and Laparoscopically-Assisted Hyperthermic Intraperitoneal Perfusion Chemotherapy.',
        journal: 'Yonsei Med J. 2017;58(3):497-504.',
        year: 2017,
        pmid: '28332353',
        doi: '10.3349/ymj.2017.58.3.497',
        takeaway:
          'Chinese analysis of port-site metastasis and the chimney effect, informing safer trocar/drain management during minimally invasive HIPEC.',
      },
      {
        authors: 'Fu YB, Yang R, Su YD, Ma R, Wei T, Yu Y, Li B, Li Y.',
        title:
          'Cisplatin + docetaxel improves survival over cisplatin + mitomycin C in hyperthermic intraperitoneal chemotherapy for pseudomyxoma peritonei: a retrospective study based on propensity score matching.',
        journal: 'Int J Hyperthermia. 2025;42(1):2467296.',
        year: 2025,
        pmid: '40289248',
        doi: '10.1080/02656736.2025.2467296',
        takeaway:
          'Propensity-matched study from the Beijing Tsinghua Changgung / Shijitan group showing a cisplatin + docetaxel HIPEC regimen outperforms cisplatin + mitomycin C in pseudomyxoma peritonei, supporting personalized drug selection.',
      },
      {
        authors: 'Liu G, Ji ZH, Yu Y, Li XB, Zhang YB, Peng Z, Li Y.',
        title:
          'Treatment of hypermyoglobinemia after CRS + HIPEC for patients with peritoneal carcinomatosis: A retrospective comparative study.',
        journal: 'Medicine (Baltimore). 2017;96(46):e8573.',
        year: 2017,
        pmid: '29137079',
        doi: '10.1097/MD.0000000000008573',
        takeaway:
          'Chinese study characterizing post-CRS+HIPEC hypermyoglobinemia and its management, addressing an under-recognized perioperative safety concern.',
      },
      {
        authors: 'Ma R, Lu D, Xue S, Su Y, Yang R, Li X, Li Y.',
        title: 'Preoperative systemic chemotherapy does not benefit for appendiceal pseudomyxoma peritonei.',
        journal: 'ANZ J Surg. 2022;92(11):2932-2938.',
        year: 2022,
        pmid: '36136728',
        doi: '10.1111/ans.18041',
        takeaway:
          'Chinese analysis indicating routine preoperative systemic chemotherapy adds no survival benefit in appendiceal pseudomyxoma peritonei, reinforcing upfront CRS+HIPEC.',
      },
    ],
  },
  {
    id: 'cn-pipac',
    topic: 'PIPAC & Emerging Regional Therapy in China',
    references: [
      {
        authors: 'Chen R, Yang Z, Li R, Yang Y, Zheng J, Wang J, Li Y.',
        title:
          'Pressurized intraperitoneal aerosol chemotherapy in advanced gastric cancer with peritoneal metastases: a comprehensive meta-analysis of feasibility, efficacy, and safety.',
        journal: 'Gastroenterol Rep (Oxf). 2025;13:goaf040.',
        year: 2025,
        pmid: '40520131',
        doi: '10.1093/gastro/goaf040',
        takeaway:
          'Chinese-led meta-analysis (671 patients, 1357 procedures) reporting a 66% histological response and 11.7-month median OS with PIPAC in gastric peritoneal metastases, best when combined with systemic chemotherapy over >=3 sessions.',
      },
      {
        authors: 'Li RJ, Chen RJ, Wu DQ, Wang JJ, Yang ZF, Li Y.',
        title:
          'Feasibility and safety of pressurized intraperitoneal aerosol chemotherapy (PIPAC) in patients with peritoneal metastatic gastrointestinal cancer: a preliminary report.',
        journal: 'Zhonghua Wei Chang Wai Ke Za Zhi (Chin J Gastrointest Surg). 2025;28(5):551-556.',
        year: 2025,
        pmid: '40404375',
        doi: '10.3760/cma.j.cn441530-20250311-00097',
        takeaway:
          'First Chinese case series using a domestically deployed PIPAC device, demonstrating the procedure is safe and technically feasible with low pain scores and short hospital stays.',
      },
      {
        authors: 'Yang ZF, Chen RJ, Li RJ, Li Y.',
        title:
          'Pressurized intraperitoneal aerosol chemotherapy in the treatment of peritoneal metastases from gastrointestinal cancers.',
        journal: 'Zhonghua Wei Chang Wai Ke Za Zhi (Chin J Gastrointest Surg). 2025;28(5):497-507.',
        year: 2025,
        pmid: '40404368',
        doi: '10.3760/cma.j.cn441530-20250311-00096',
        takeaway:
          'Chinese review of PIPAC principles, drugs and protocols, calling for large multicenter trials and standardized operating specifications before broad adoption.',
      },
      {
        authors: 'Zhang P, Ma K, Zhang WJ, Ni PF, Wu CQ, Tao KX.',
        title: 'Progress in local therapy for gastrointestinal peritoneal metastatic tumors.',
        journal: 'Zhonghua Wei Chang Wai Ke Za Zhi (Chin J Gastrointest Surg). 2026;29(4):536-544.',
        year: 2026,
        pmid: '42045720',
        doi: '10.3760/cma.j.cn441530-20260124-00056',
        takeaway:
          'Chinese review framing the shift to systemic-plus-local therapy for GI peritoneal metastases, positioning CRS+HIPEC as core and PIPAC/NIPEC as options for patients unfit for major surgery.',
      },
      {
        authors: 'Min T, Zhang B, Ren K, Ma Y, Ma R, Peng Y, Dang C, Sun T, Zhang H.',
        title:
          'Pressurized intraperitoneal cold atmospheric plasma as a novel therapeutic strategy for peritoneal metastatic carcinoma.',
        journal: 'J Adv Res. 2025;83:991-1004.',
        year: 2025,
        pmid: '40865633',
        doi: '10.1016/j.jare.2025.08.047',
        takeaway:
          'Xi\'an Jiaotong University preclinical study introducing pressurized intraperitoneal cold atmospheric plasma (PICAP), which achieved deeper, more uniform peritoneal penetration than PIPAC or HIPEC in metastasis models.',
      },
    ],
  },
]
