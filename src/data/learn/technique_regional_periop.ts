import type { LearnChapter } from '../../types/learn'

// ─────────────────────────────────────────────────────────────────────────────
// TECHNIQUE · REGIONAL THERAPY · PERIOPERATIVE — Chapters 07–16
// Residency-course teaching format for peritoneal surface oncology.
// Sugarbaker peritonectomy technique · HIPEC/PIPAC pharmacology · ERAS-CRS.
// Sources: Sugarbaker Peritonectomy Procedures (Ann Surg 1995) · PRODIGE 7
//          (Quénet, Lancet Oncol 2021) · Verwaal RCT · Elias series ·
//          Solass PIPAC · Chicago Consensus 2020 · PSOGI 2022 · ERAS Society.
// ─────────────────────────────────────────────────────────────────────────────

export const TECHNIQUE_CHAPTERS: LearnChapter[] = [
  // ── CHAPTER 07 ──────────────────────────────────────────────────────────────
  {
    id: 'ch07-peritonectomy-upper',
    number: '07',
    title: 'Peritonectomy Atlas I — Upper Abdomen',
    subtitle: 'Subphrenic peritonectomy, diaphragm stripping, glissonian capsule, lesser omentum and splenectomy',
    icon: 'Scissors',
    reading_time_min: 30,
    level: 'Advanced',
    track: 'Surgical Technique',
    guidelines_version: 'Sugarbaker Peritonectomy Procedures (Ann Surg 1995) · PSOGI 2022 · Chicago Consensus 2020',
    learning_objectives: [
      'Perform right and left upper-quadrant peritonectomy following Sugarbaker traction–countertraction principles',
      'Distinguish diaphragmatic peritoneal stripping from full-thickness muscle resection and manage the resulting pleural defect',
      'Strip tumour from the glissonian capsule of the liver and clear the hepatic hilum and falciform/ligamentum teres region',
      'Resect the lesser omentum and clear the omental bursa while protecting the left gastric pedicle and caudate lobe',
      'State the indications for and technical steps of splenectomy during cytoreduction of the left upper quadrant',
    ],
    key_references: [
      'Sugarbaker PH. Peritonectomy procedures. Ann Surg 1995;221(1):29–42.',
      'Sugarbaker PH. Peritoneal carcinomatosis: principles of management. 3rd ed. Woodbury, CT: Cine-Med.',
      'Deraco M, Baratti D, Kusamura S, et al. Surgical technique of parietal and visceral peritonectomy. J Surg Oncol 2009;100(4):321–328.',
      'Chicago Consensus Working Group. Cytoreductive surgery technical standards. Ann Surg Oncol 2020;27:1783–1793.',
      'González-Moreno S, González-Bayón L, Ortega-Pérez G. Peritoneal surface oncology: technical aspects. World J Gastrointest Oncol 2010;2(2):68–75.',
    ],
    sections: [
      {
        id: 'ch07-s1',
        title: 'Principles, Exposure and Sequence',
        blocks: [
          {
            type: 'text',
            content:
              'The **six peritonectomy procedures** codified by Sugarbaker are not obligatory in every patient — they are performed *selectively* only where tumour is present, guided by the principle that **normal peritoneum is left in situ**. Cytoreduction proceeds region by region, and the aim of every stroke is to clear all macroscopic disease to a **Completeness of Cytoreduction score of CC-0 (no visible residual) or CC-1 (nodules ≤ 2.5 mm)**, the threshold below which regional chemotherapy can penetrate residual disease.',
          },
          {
            type: 'text',
            content:
              'Exposure begins with a **xiphopubic midline incision**, excision of the umbilicus (a frequent site of disease — Sister Mary Joseph nodule), and placement of a **self-retaining retractor (Thompson or Omni-Tract)** that lifts the costal margins cephalad and laterally. Adequate cephalad retraction of the costal arch is the single most important manoeuvre for safe upper-abdominal peritonectomy; without it the subphrenic spaces cannot be reached.',
          },
          {
            type: 'key',
            title: 'Traction–countertraction and the ball-tip electrode',
            content:
              'Peritonectomy is performed with **high-voltage electrosurgery through a 3 mm ball-tip electrode** (coagulation mode, 100+ W). The assistant places the peritoneum on tension; the surgeon dissects in the areolar plane immediately beneath the peritoneum. Working under tension delivers a bloodless plane, minimises smoke, and leaves the underlying muscle/fascia intact. Sharp/scissor dissection is reserved for dense tumour or vascular structures.',
          },
          {
            type: 'list',
            title: 'The six peritonectomy procedures',
            items: [
              'Greater omentectomy with splenectomy (left upper quadrant)',
              'Left upper-quadrant peritonectomy (left hemidiaphragm)',
              'Right upper-quadrant peritonectomy (right hemidiaphragm, glissonian capsule)',
              'Lesser omentectomy with stripping of the omental bursa (± cholecystectomy)',
              'Pelvic peritonectomy (Chapter 08)',
              'Antrectomy/other visceral resections as dictated by disease',
            ],
          },
          {
            type: 'pearl',
            title: 'Strip before you perfuse, decide before you strip',
            content:
              'Complete the tumour-burden assessment (PCI) and the small-bowel survey *first*. There is no value in a heroic diaphragmatic resection if unresectable small-bowel/mesenteric disease will preclude CC-0/1 — that determination should be made before committing to the destructive upper-quadrant work.',
          },
          {
            type: 'trial',
            title: 'Completeness of cytoreduction is the dominant surgical variable',
            content:
              'Across Sugarbaker\'s and multi-institutional series, **CC-0/1 versus CC-2/3 is the strongest independent predictor of survival**, typically doubling to tripling median OS. In the appendiceal/colorectal literature, complete cytoreduction is a prerequisite for any long-term benefit from HIPEC — incomplete cytoreduction converts the operation into high-morbidity palliation.',
            ref: 'Sugarbaker PH. Ann Surg 1995;221:29–42; Glehen O, et al. J Clin Oncol 2004;22:3284–3292.',
          },
        ],
      },
      {
        id: 'ch07-s2',
        title: 'Right Subphrenic Peritonectomy & Diaphragm',
        blocks: [
          {
            type: 'text',
            content:
              'Right upper-quadrant peritonectomy begins by dividing the peritoneum along the costal margin and stripping it, with the tumour, off the right hemidiaphragm from lateral to medial. The **traction is applied to the specimen**, which is rolled medially; the ball-tip electrode develops the plane between diaphragmatic peritoneum and the diaphragmatic muscle. Small bleeding vessels within the muscle are coagulated as they appear.',
          },
          {
            type: 'text',
            content:
              'Where tumour has invaded the muscle itself, **full-thickness diaphragm resection** is required. The involved muscle is excised, entering the pleural space. The defect is closed primarily with a running non-absorbable suture (e.g. 2-0 polypropylene) after the anaesthetist delivers a sustained inspiration to evacuate air, or a **red rubber catheter** is placed across the closure and removed under positive pressure to avoid a residual pneumothorax. A formal chest drain is often unnecessary if closure is airtight.',
          },
          {
            type: 'key',
            title: 'Diaphragmatic stomata and HIPEC pleural spread',
            content:
              'The right hemidiaphragm bears the highest density of **lymphatic stomata**, making it the terminal drainage point of peritoneal fluid and a near-universal site of disease. Opening the pleura connects the two cavities; if HIPEC is subsequently delivered, chemotherapy can reach the pleural space. Some groups therefore deliberately deliver perfusate to a communicating pleural cavity, but a large uncontrolled defect risks systemic drug shifts and haemodynamic instability.',
          },
          {
            type: 'text',
            content:
              'Stripping continues medially over the **bare area of the liver** and around the right and middle hepatic vein confluence and the suprahepatic inferior vena cava. This is the most hazardous zone of the entire operation: the hepatic veins are thin-walled and injury here produces catastrophic haemorrhage or air embolism. Dissect deliberately, keep the ball-tip tangential, and have vascular control (Rummel around the IVC) planned in advance for bulky disease.',
          },
          {
            type: 'pitfall',
            title: 'Do not mistake a phrenic nerve branch or the pericardium',
            content:
              'Central tendon dissection can approach the **pericardium**; aggressive coagulation here risks arrhythmia or pericardial injury. Full-thickness resection near the central tendon should preserve as much phrenic innervation as possible — bilateral extensive diaphragm resection can produce postoperative respiratory failure and prolonged ventilation.',
          },
          {
            type: 'pearl',
            title: 'Anticipate the right pleural effusion',
            content:
              'Even with an intact-appearing closure, a **sympathetic/transudative right pleural effusion is common** after right diaphragm peritonectomy and after right-sided HIPEC. Warn the ICU team, obtain an early post-op chest film, and have a low threshold for a pigtail drain if the patient desaturates or the effusion is large.',
          },
        ],
      },
      {
        id: 'ch07-s3',
        title: 'Glissonian Capsule, Falciform & Hepatic Hilum',
        blocks: [
          {
            type: 'text',
            content:
              'Tumour on the liver surface is almost always **capsular, not parenchymal**, because the glissonian capsule resists invasion. Disease is stripped from the liver by developing the plane between tumour and the **glissonian capsule**; the ball-tip electrode or a scalpel peels the diseased peritoneum/capsule while preserving underlying hepatocytes. Broad areas of capsule may be electroevaporated where a stripping plane cannot be developed.',
          },
          {
            type: 'text',
            content:
              'The **falciform ligament, ligamentum teres and the umbilical fissure** are resected as they are frequent disease reservoirs; the round ligament is divided and any recanalised paraumbilical vein is controlled. Disease is then cleared from **segment 4b and the porta hepatis**, where tumour can encase the gallbladder and hilar plate.',
          },
          {
            type: 'key',
            title: 'Hepatic hilum clearance and cholecystectomy',
            content:
              'A **cholecystectomy** is routinely performed when clearing right-upper-quadrant disease — it exposes the plate to allow tumour removal from the hepatoduodenal ligament and eliminates the risk of post-HIPEC chemical/ischaemic cholecystitis. Dissection over the porta must protect the **hepatic artery, portal vein and common bile duct**; tumour on the hepatoduodenal ligament is often the last barrier to CC-0 and may require sharp, meticulous peeling.',
          },
          {
            type: 'text',
            content:
              'The **Morison pouch (hepatorenal recess)** and the retrohepatic space are inspected and cleared. Full mobilisation of the right lobe — dividing the right triangular and coronary ligaments — is often necessary to roll the liver medially and reach the bare area and retrohepatic IVC.',
          },
          {
            type: 'pearl',
            title: 'Electroevaporate a thin film rather than fracture the capsule',
            content:
              'When disease is a thin confluent film over the dome, **electroevaporation of the surface** achieves CC-0 with far less bleeding than attempting to raise a stripping plane over the whole lobe. Reserve capsular stripping for discrete plaques with a clear cleavage plane.',
          },
          {
            type: 'trial',
            title: 'Liver-surface disease does not preclude complete cytoreduction',
            content:
              'In large PMP and colorectal series, glissonian capsule involvement is common yet compatible with CC-0 because true parenchymal invasion is rare. Baratti and colleagues showed that patients with capsular disease cleared to CC-0/1 have survival comparable to those without hepatic surface involvement — reinforcing that surface disease should not be read as unresectable.',
            ref: 'Baratti D, Kusamura S, Deraco M. Ann Surg Oncol 2010; Deraco M. J Surg Oncol 2009;100:321–328.',
          },
        ],
      },
      {
        id: 'ch07-s4',
        title: 'Lesser Omentum, Omental Bursa & Splenectomy',
        blocks: [
          {
            type: 'text',
            content:
              'Access to the **omental bursa (lesser sac)** requires resecting the lesser omentum. The hepatogastric ligament is divided close to the liver, taking care to identify and preserve (or deliberately sacrifice, if replaced) an **aberrant/replaced left hepatic artery** running in the ligament. The peritoneum over the **caudate lobe** and the anterior surface of the pancreas is stripped, and tumour is cleared from the crus of the diaphragm and around the coeliac axis.',
          },
          {
            type: 'text',
            content:
              'Disease frequently accumulates on the **anterior surface of the stomach and the lesser curve**; extensive lesser-curve tumour may compel a partial gastrectomy or, rarely, total gastrectomy. Stripping of the omental bursa also addresses tumour over the **left gastric pedicle** and splenic hilum, which leads directly into the left upper quadrant.',
          },
          {
            type: 'key',
            title: 'When splenectomy is required',
            content:
              'The **greater omentum is resected en bloc off the transverse colon and detached from the greater curve of the stomach** by dividing the short gastric vessels. Because tumour cakes into the splenic hilum and the omentum is often fused to the spleen, **splenectomy is frequently unavoidable** in left-upper-quadrant cytoreduction. It is performed by dividing the splenorenal and splenophrenic ligaments, the short gastrics, and the splenic artery and vein at the hilum.',
          },
          {
            type: 'text',
            content:
              'After splenectomy, the **tail of the pancreas** is inspected — it is at risk of injury during hilar division and is a source of postoperative pancreatic leak. The left hemidiaphragm peritoneum is stripped in continuity, and the left subphrenic space (splenic bed) is cleared, completing the left upper quadrant.',
          },
          {
            type: 'pitfall',
            title: 'Pancreatic tail injury and post-HIPEC pancreatitis',
            content:
              'Aggressive dissection at the splenic hilum, plus the thermal insult of HIPEC over the exposed pancreatic tail, makes **pancreatic leak/fistula and pancreatitis a recognised LUQ complication**. Avoid electrosurgery directly on the pancreas, drain the splenic bed, and check drain amylase in the early postoperative period.',
          },
          {
            type: 'pearl',
            title: 'Vaccinate the splenectomised patient',
            content:
              'When splenectomy is anticipated or performed, give **post-splenectomy vaccination** (pneumococcal, meningococcal, Haemophilus influenzae type b) — typically 2 weeks post-op when immune recovery is optimal — and counsel the patient on OPSI (overwhelming post-splenectomy infection) risk and antibiotic standby.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 08 ──────────────────────────────────────────────────────────────
  {
    id: 'ch08-peritonectomy-pelvis',
    number: '08',
    title: 'Peritonectomy Atlas II — Pelvis & Viscera',
    subtitle: 'Pelvic peritonectomy, rectosigmoid resection, en bloc hysterectomy/BSO, bladder peritoneum and ureteric protection',
    icon: 'Scissors',
    reading_time_min: 30,
    level: 'Advanced',
    track: 'Surgical Technique',
    guidelines_version: 'Sugarbaker Peritonectomy Procedures (Ann Surg 1995) · PSOGI 2022 · Chicago Consensus 2020',
    learning_objectives: [
      'Execute complete pelvic peritonectomy using the retroperitoneal approach and traction on the specimen',
      'Perform en bloc rectosigmoid resection with low anastomosis when the cul-de-sac is involved',
      'Incorporate hysterectomy and bilateral salpingo-oophorectomy en bloc with the pelvic peritoneum',
      'Strip the bladder peritoneum and manage the vesicouterine/rectovesical pouch',
      'Identify, mobilise and protect both ureters throughout pelvic cytoreduction',
    ],
    key_references: [
      'Sugarbaker PH. Peritonectomy procedures. Ann Surg 1995;221(1):29–42.',
      'Sugarbaker PH. Complete parietal and visceral peritonectomy of the pelvis. World J Surg Oncol 2013;11:2.',
      'Deraco M, Baratti D, Kusamura S. Surgical technique of parietal and visceral peritonectomy. J Surg Oncol 2009;100:321–328.',
      'PSOGI/EURACAN consensus on cytoreductive surgery. Eur J Surg Oncol 2022.',
      'Villeneuve L, Passot G, Glehen O, et al. The RENAPE network. Eur J Surg Oncol 2017.',
    ],
    sections: [
      {
        id: 'ch08-s1',
        title: 'The En Bloc Pelvic Peritonectomy',
        blocks: [
          {
            type: 'text',
            content:
              'The pelvis is the most dependent compartment and, with the omentum and right diaphragm, one of the three watershed sites of disease. Pelvic peritonectomy is a **single en bloc dissection** that strips the parietal peritoneum from the pelvic sidewalls, the peritoneum of the cul-de-sac (pouch of Douglas), and — when involved — carries the rectosigmoid, the internal genitalia and the bladder peritoneum in continuity with the specimen.',
          },
          {
            type: 'text',
            content:
              'Dissection begins by incising the peritoneum at the pelvic brim and entering the **avascular retroperitoneal planes** lateral to the medial umbilical ligaments and along the sidewalls. Traction is on the peritoneal specimen, which is rolled centrally and caudally; the ball-tip electrode develops the plane, sweeping the ureters and iliac vessels posterolaterally away from the specimen.',
          },
          {
            type: 'key',
            title: 'Work from normal into abnormal',
            content:
              'Always start the peritonectomy in a **plane of normal tissue** at the pelvic brim and dissect toward the tumour-laden cul-de-sac. Entering directly onto bulky Douglas-pouch disease risks rectal or vaginal entry and ureteric injury; the retroperitoneal approach lets you define the ureters and vessels before reaching the tumour.',
          },
          {
            type: 'text',
            content:
              'The **bladder peritoneum** is stripped by developing the plane between the peritoneum and the detrusor muscle, dropping the bladder posteriorly. The medial umbilical ligaments and urachus are divided. In men the dissection carries down to the seminal vesicles and the rectovesical pouch; in women it joins the vesicouterine fold.',
          },
          {
            type: 'pearl',
            title: 'Fill the bladder to find the plane',
            content:
              'Retrograde filling the bladder with saline via the catheter **defines the bladder dome** and helps develop the correct plane between peritoneum and detrusor, reducing the risk of an inadvertent cystotomy during the anterior sweep.',
          },
          {
            type: 'pitfall',
            title: 'The cul-de-sac is where CC-0 is won or lost',
            content:
              'Confluent tumour in the pouch of Douglas fused to the anterior rectum is the commonest reason a pelvis cannot be cleared without bowel resection. Attempting to shave bulky disease off the rectal wall risks a full-thickness injury and leak — if the tumour is not separable, **resect the rectosigmoid en bloc** rather than compromise completeness.',
          },
        ],
      },
      {
        id: 'ch08-s2',
        title: 'En Bloc Rectosigmoid Resection & Anastomosis',
        blocks: [
          {
            type: 'text',
            content:
              'When the cul-de-sac tumour is inseparable from the rectosigmoid, the bowel is taken en bloc with the pelvic peritoneum. The **inferior mesenteric vessels** are divided, the sigmoid mesocolon is mobilised, and the rectum is transected below the level of disease — typically at the level of the peritoneal reflection or lower — using a linear stapler. The specimen (peritoneum + rectosigmoid ± uterus/adnexa) is delivered as one block.',
          },
          {
            type: 'text',
            content:
              'Reconstruction is by a **stapled colorectal anastomosis** (end-to-end EEA / circular stapler) after ensuring a well-perfused, tension-free proximal colon. The anastomosis is tested by air insufflation under saline (leak test) and inspected for the completeness of the tissue doughnuts.',
          },
          {
            type: 'key',
            title: 'Anastomosis timing relative to HIPEC',
            content:
              'Practice varies: many high-volume centres **construct anastomoses after HIPEC**, reasoning that the fresh suture/staple line is not bathed in cytotoxic, hyperthermic perfusate and that bowel ends can be re-assessed for perfusion after the thermal insult. Others anastomose before HIPEC. What is consistent is that the **number of anastomoses and bowel resections is an independent risk factor for leak** — this is covered further in Chapter 09.',
          },
          {
            type: 'text',
            content:
              'A **diverting loop ileostomy** is considered for low anastomoses, after neoadjuvant therapy, in malnourished or heavily pretreated patients, or when perfusion is uncertain. The decision balances leak risk against the morbidity and dehydration risk of a high-output stoma in an already fluid-labile CRS patient.',
          },
          {
            type: 'pearl',
            title: 'A low colorectal anastomosis + extensive peritonectomy = protect it',
            content:
              'Two independent leak drivers — a low anastomosis and a raw, devascularised pelvic sidewall from peritonectomy — coexist here. Favour **proximal diversion** when both are present, especially with a pelvic anastomosis below the peritoneal reflection or after pelvic radiotherapy.',
          },
          {
            type: 'trial',
            title: 'Cytoreduction plus HIPEC in colorectal PM — the Verwaal RCT',
            content:
              'The Dutch RCT randomised colorectal peritoneal metastasis to systemic 5-FU/leucovorin ± palliative surgery versus CRS + mitomycin C HIPEC. Median survival improved from **12.6 to 22.3 months**, and long-term follow-up showed durable benefit confined to patients achieving complete cytoreduction — establishing complete pelvic and abdominal clearance as the therapeutic target.',
            ref: 'Verwaal VJ, et al. J Clin Oncol 2003;21:3737–3743; Verwaal VJ, et al. Ann Surg Oncol 2008;15:2426–2432.',
          },
        ],
      },
      {
        id: 'ch08-s3',
        title: 'En Bloc Hysterectomy, BSO & Bladder',
        blocks: [
          {
            type: 'text',
            content:
              'In women, the **uterus, tubes and ovaries** are almost always resected en bloc with the pelvic peritoneum because the cul-de-sac peritoneum is confluent with the posterior uterus and the ovaries are frequent implantation sites (and a source of Krukenberg-type disease). The round ligaments are divided, the broad ligaments opened, the **infundibulopelvic (ovarian) vessels** ligated after identifying the ureter beneath them, and the uterine vessels secured at the cervix.',
          },
          {
            type: 'text',
            content:
              'The vagina is entered at the fornix and the specimen delivered; the **vaginal cuff is closed** with a running absorbable suture. This en bloc approach — peritoneum, cul-de-sac tumour, rectosigmoid and internal genitalia removed as one — is the technical signature of complete pelvic peritonectomy in women.',
          },
          {
            type: 'key',
            title: 'The infundibulopelvic ligament and the ureter',
            content:
              'The ureter crosses the pelvic brim **just medial and deep to the ovarian vessels**. Before clamping the IP ligament, positively identify the ureter and sweep it laterally; this is one of the two commonest sites of iatrogenic ureteric injury in pelvic cytoreduction (the other being the ureterovesical junction during bladder-peritoneum stripping).',
          },
          {
            type: 'text',
            content:
              'Anteriorly, the **bladder peritoneum** is stripped in continuity down to the vesicouterine (or rectovesical) pouch. If tumour invades the detrusor a partial cystectomy is performed and closed in two layers over a catheter; involvement of the trigone or ureteric orifices may require reimplantation but is usually a marker of unresectable local disease.',
          },
          {
            type: 'pitfall',
            title: 'Do not devascularise a low rectal stump and a vaginal cuff together',
            content:
              'A low colorectal anastomosis lying against a fresh vaginal cuff suture line risks a **rectovaginal fistula**, particularly after HIPEC. Consider interposing well-vascularised tissue (omentum if available, though it is often already resected) and have a low threshold for diversion.',
          },
          {
            type: 'pearl',
            title: 'Send the ovaries even if macroscopically normal in mucinous disease',
            content:
              'In appendiceal/mucinous peritoneal disease, **bilateral oophorectomy is standard** even with normal-appearing ovaries, because occult ovarian involvement is common and metachronous ovarian recurrence is a well-recognised failure pattern.',
          },
        ],
      },
      {
        id: 'ch08-s4',
        title: 'Ureteric Identification & Protection',
        blocks: [
          {
            type: 'text',
            content:
              'Ureteric protection is a thread running through the entire pelvic dissection. Each ureter is identified at the **pelvic brim as it crosses the common/external iliac bifurcation**, traced along the sidewall, beneath the ovarian vessels, through the ureteric tunnel at the uterine artery ("water under the bridge"), to its insertion at the bladder. Keeping the ureter on the sidewall — away from the medially-retracted specimen — is the essence of safe peritonectomy.',
          },
          {
            type: 'list',
            title: 'Strategies to protect the ureters',
            items: [
              'Preoperative or intraoperative **ureteric stents** in reoperative pelvises, bulky pelvic disease, or distorted anatomy',
              'Early identification at the pelvic brim before any deep pelvic dissection',
              'Retroperitoneal approach: develop the plane lateral to the ureter and sweep it posterolaterally with the sidewall',
              'Positive ID of the ureter before clamping the IP ligament and before dividing the uterine pedicle',
              'Direct inspection of ureteric peristalsis and, if in doubt, IV indigo carmine / methylene blue or ICG to confirm integrity',
            ],
          },
          {
            type: 'key',
            title: 'Recognise and repair injury at the table',
            content:
              'A missed ureteric injury presents postoperatively as a **urinoma, urine ascites, or obstruction**. Injuries recognised intraoperatively are managed by primary repair over a stent (partial injury), spatulated ureteroureterostomy, or ureteric reimplantation (± psoas hitch / Boari flap) for distal injuries. The threshold to place a stent and repair immediately is far preferable to a delayed leak in a HIPEC field.',
          },
          {
            type: 'text',
            content:
              'The thermal environment of HIPEC compounds ureteric risk: heat can devitalise a marginally perfused or partially dissected ureter, producing **delayed necrosis and stricture** weeks later. Handle the ureter gently, preserve its adventitial blood supply, and avoid electrosurgery in its immediate vicinity.',
          },
          {
            type: 'trial',
            title: 'Ureteric and urinary morbidity in large CRS series',
            content:
              'Multi-institutional CRS+HIPEC morbidity analyses report **urinary tract injury / fistula in roughly 2–5% of cases**, with higher rates in reoperative and bulky pelvic disease. Prophylactic stenting in selected high-risk pelvises reduces the rate of unrecognised injury and facilitates intraoperative identification.',
            ref: 'Chua TC, et al. J Clin Oncol 2009;27:6237–6242; Glehen O, et al. Ann Surg Oncol 2010 (multi-institutional morbidity).',
          },
          {
            type: 'pearl',
            title: 'Stent the reoperative pelvis',
            content:
              'In a patient with prior pelvic surgery or radiotherapy, place **bilateral ureteric stents at induction**. The few minutes of cystoscopy save an intraoperative crisis when the retroperitoneal planes are obliterated and the ureter is fixed to tumour.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 09 ──────────────────────────────────────────────────────────────
  {
    id: 'ch09-bowel-mesentery',
    number: '09',
    title: 'Bowel, Mesentery & Anastomoses in CRS',
    subtitle: 'Small-bowel stripping limits, mesenteric disease, anastomotic timing vs HIPEC, stoma decisions and short-bowel avoidance',
    icon: 'GitMerge',
    reading_time_min: 28,
    level: 'Advanced',
    track: 'Surgical Technique',
    guidelines_version: 'PSOGI 2022 · Chicago Consensus 2020 · Sugarbaker technique',
    learning_objectives: [
      'Assess small-bowel and mesenteric tumour burden and judge when it precludes complete cytoreduction',
      'Strip serosal disease from small bowel within safe limits and preserve adequate functional length',
      'Weigh the arguments for anastomosis before versus after HIPEC and the impact of resection number on leak risk',
      'Make rational stoma/diversion decisions in the fluid-labile CRS patient',
      'Recognise and prevent short-bowel syndrome as an iatrogenic complication of over-aggressive cytoreduction',
    ],
    key_references: [
      'Sugarbaker PH. Peritonectomy procedures. Ann Surg 1995;221:29–42.',
      'Elias D, Gilly F, Boutitie F, et al. Peritoneal colorectal carcinomatosis treated with surgery and HIPEC. J Clin Oncol 2010;28:63–68.',
      'Chua TC, Yan TD, Saxena A, Morris DL. Should the treatment of peritoneal carcinomatosis be regionalised? Ann Surg 2009;249:900–907.',
      'Chicago Consensus Working Group. Ann Surg Oncol 2020;27:1783–1793.',
      'Baratti D, Kusamura S, Deraco M. Postoperative complications after CRS+HIPEC. Ann Surg Oncol 2010.',
    ],
    sections: [
      {
        id: 'ch09-s1',
        title: 'Small Bowel & Mesentery as the Limit of Resectability',
        blocks: [
          {
            type: 'text',
            content:
              'The small bowel and its mesentery are the **anatomical limit of cytoreductive surgery**. Surface disease on the mobile jejuno-ileum can be stripped or electroevaporated, but **confluent mesenteric root involvement cannot be resected** without sacrificing the superior mesenteric vessels and the entire midgut. Assessment of small-bowel and mesenteric disease is therefore the pivotal go/no-go decision of the operation.',
          },
          {
            type: 'text',
            content:
              'Disease is graded by the **PCI small-bowel regions (9–12: upper and lower jejunum, upper and lower ileum)**. High lesion-size scores across multiple small-bowel regions, retraction/tethering of the mesentery, and tumour at the root near the SMA/SMV are the features that convert an operation from feasible to non-curative.',
          },
          {
            type: 'key',
            title: 'The three patterns of unresectable small-bowel disease',
            content:
              'CC-0/1 is generally not achievable when there is: (1) **massive mesenteric root involvement** encasing the SMA/SMV; (2) **diffuse small-bowel serosal disease** so extensive that clearance would leave < ~100 cm of viable bowel; or (3) **tethered, foreshortened mesentery** producing multiple areas of segmental ischaemia after resection. Recognising these early avoids a destructive, non-therapeutic dissection.',
          },
          {
            type: 'pitfall',
            title: 'Tumour volume is not the same as resectability',
            content:
              'A patient with a PCI of 35 from mucinous disease sparing the mobile bowel may be fully resectable, while a PCI of 18 with dense small-bowel-mesentery infiltration may be inoperable for cure. **Never equate high PCI with unresectability, or low PCI with resectability** — the distribution and invasiveness of small-bowel disease decide it.',
          },
          {
            type: 'pearl',
            title: 'Run the whole bowel before committing to peritonectomy',
            content:
              'Before any destructive upper-abdominal or pelvic work, **run the small bowel from the ligament of Treitz to the ileocaecal valve**, quantify the small-bowel PCI, and estimate residual functional length after all planned resections. The go/no-go decision belongs at the start of the case, not after four hours of committed dissection.',
          },
          {
            type: 'trial',
            title: 'Small-bowel disease independently degrades outcome',
            content:
              'Elias\'s French multicentre colorectal series (523 patients) confirmed that **incomplete cytoreduction and extensive small-bowel involvement predict poor survival**; complete cytoreduction achieved a median OS of ~30–47 months, whereas patients requiring incomplete cytoreduction — most often because of small-bowel/mesenteric disease — derived little benefit.',
            ref: 'Elias D, et al. J Clin Oncol 2010;28:63–68.',
          },
        ],
      },
      {
        id: 'ch09-s2',
        title: 'Stripping Limits & Short-Bowel Avoidance',
        blocks: [
          {
            type: 'text',
            content:
              'Serosal implants on the antimesenteric surface of the bowel can be removed by **sharp/electrosurgical stripping** or focal electroevaporation. The technical limit is the bowel wall itself: full-thickness injury from over-aggressive stripping or thermal spread produces a delayed perforation in a HIPEC field. Where implants are confluent and deep, a **segmental small-bowel resection** is preferable to repeated risky shaving.',
          },
          {
            type: 'key',
            title: 'Preserve functional length — the ~100 cm rule',
            content:
              'The pragmatic threshold to avoid **short-bowel syndrome** is preservation of roughly **100 cm of small bowel with an intact ileocaecal valve, or ~150–200 cm without it**. Below this, patients face permanent parenteral nutrition. Every segmental resection must be counted against this budget; multiple short resections can be as costly as one long one.',
          },
          {
            type: 'text',
            content:
              'The **ileocaecal valve and terminal ileum** are disproportionately valuable — the valve slows transit and the terminal ileum absorbs bile salts and vitamin B12. Preserve them when oncologically safe; their loss markedly worsens the functional consequence of any given resected length.',
          },
          {
            type: 'pitfall',
            title: 'Death by a thousand enterotomies',
            content:
              'Repeated stripping of confluent small-bowel implants produces **multiple serosal/muscular defects** that must each be repaired; the cumulative devascularisation and thermal insult from HIPEC can then cause several to break down. Consolidating to a single planned segmental resection is often safer than clearing dozens of implants off a compromised loop.',
          },
          {
            type: 'pearl',
            title: 'Count centimetres out loud',
            content:
              'Have the team **measure and record the length of every small-bowel segment resected** and the estimated remaining length. A running tally forces the intraoperative conversation about whether the next resection tips the patient into short-bowel territory — a decision that must be explicit, not accidental.',
          },
          {
            type: 'text',
            content:
              'When residual length is marginal, consider whether the goals of care justify proceeding: an operation that renders a patient TPN-dependent for life may not represent a net benefit even if it clears the abdomen. This is a shared decision that should be anticipated in preoperative counselling for high-burden small-bowel disease.',
          },
        ],
      },
      {
        id: 'ch09-s3',
        title: 'Anastomotic Timing, Number & HIPEC',
        blocks: [
          {
            type: 'text',
            content:
              'Two schools exist on **anastomotic timing relative to HIPEC**. The "anastomose after HIPEC" approach avoids exposing a fresh suture line to hyperthermic cytotoxic perfusate and allows re-inspection of bowel-end perfusion after the thermal insult. The "anastomose before HIPEC" approach argues that hyperthermia may reduce anastomotic tumour seeding and that the perfusate reaches all raw surfaces uniformly. No RCT resolves this; both are practised in high-volume centres.',
          },
          {
            type: 'table',
            title: 'Anastomosis timing relative to HIPEC — arguments',
            headers: ['Approach', 'Rationale', 'Concern'],
            rows: [
              ['After HIPEC', 'Fresh suture line not bathed in hot cytotoxic perfusate; reassess perfusion post-thermal insult', 'Longer total operative/ischaemia time; anastomosis on oedematous bowel'],
              ['Before HIPEC', 'Perfusate treats all raw surfaces incl. staple lines; possible reduction in suture-line seeding', 'Cytotoxic + hyperthermic exposure of new anastomosis may impair healing'],
            ],
            ref: 'No RCT; institutional practice varies. Chicago Consensus 2020 acknowledges both.',
          },
          {
            type: 'key',
            title: 'Number of anastomoses drives leak risk',
            content:
              'Independent of timing, the **number of bowel anastomoses and resections is a consistent risk factor for anastomotic leak** after CRS+HIPEC. Each additional suture line adds risk in a field that is already devascularised by peritonectomy, thermally injured by HIPEC, and often operated on after neoadjuvant chemotherapy. Minimise the number of anastomoses where oncologically possible.',
          },
          {
            type: 'text',
            content:
              'Technical factors compound the biological insult: **tension, poor perfusion, hypothermia during reconstruction, and vasopressor use** all impair anastomotic healing. Confirm well-vascularised, tension-free bowel ends (ICG angiography is increasingly used), keep the patient warm and euvolaemic during reconstruction, and test every anastomosis.',
          },
          {
            type: 'trial',
            title: 'Leak and morbidity rates in CRS+HIPEC',
            content:
              'High-volume series report **grade III–IV morbidity of roughly 25–40% and anastomotic leak in ~5–15%**, with leak strongly associated with the number of resections/anastomoses and completeness/extent of cytoreduction. Failure-to-rescue after leak is a principal driver of the 2–5% perioperative mortality (see Chapter 16).',
            ref: 'Chua TC, et al. Ann Surg 2009;249:900–907; Baratti D, et al. Ann Surg Oncol 2010.',
          },
        ],
      },
      {
        id: 'ch09-s4',
        title: 'Stoma Decisions in the CRS Patient',
        blocks: [
          {
            type: 'text',
            content:
              'Diversion decisions in CRS are more nuanced than in elective colorectal surgery because the patient is **fluid-labile, often hypoalbuminaemic, and prone to high-output stoma dehydration** after an operation with large third-space losses. A protective stoma reduces the clinical consequence of a leak but introduces its own morbidity — dehydration, electrolyte derangement, readmission, and a second operation for reversal.',
          },
          {
            type: 'list',
            title: 'Favour diversion when',
            items: [
              'Low colorectal anastomosis (below the peritoneal reflection) after extensive pelvic peritonectomy',
              'Multiple anastomoses in a single operation',
              'Marginal perfusion, tension, or a positive/uncertain leak test',
              'Prior pelvic radiotherapy or heavy neoadjuvant chemotherapy',
              'Malnutrition, immunosuppression, or intraoperative instability',
              'A coexisting vaginal cuff or bladder suture line adjacent to the anastomosis',
            ],
          },
          {
            type: 'key',
            title: 'Loop ileostomy vs colostomy vs Hartmann',
            content:
              'A **diverting loop ileostomy** is the usual choice to protect a distal colorectal anastomosis. In the highest-risk situations — grossly compromised tissue, instability, or a non-viable rectal stump — an **end colostomy (Hartmann)** avoids an anastomosis entirely. The decision is a real-time judgement balancing leak consequence against stoma morbidity in a physiologically depleted patient.',
          },
          {
            type: 'pitfall',
            title: 'The high-output ileostomy is not a benign fallback',
            content:
              'A diverting loop ileostomy in a CRS patient can produce **litres of daily output**, precipitating dehydration, acute kidney injury and repeated readmission — occasionally more morbidity than the leak it was meant to prevent. Diversion is protection, not a free pass; select it deliberately and manage output aggressively.',
          },
          {
            type: 'pearl',
            title: 'Site and counsel the stoma before incision',
            content:
              'Whenever diversion is a realistic possibility, have the **stoma site marked and the patient counselled preoperatively**. Intraoperative decisions to divert are common in CRS; a pre-marked site and an informed patient prevent a poorly placed stoma and an unprepared recovery.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 10 ──────────────────────────────────────────────────────────────
  {
    id: 'ch10-electrosurgery',
    number: '10',
    title: 'Electrosurgery, Energy Devices & Hemostasis',
    subtitle: 'Ball-tip electrosurgery, surgical plume, thermal spread, vessel sealing and blood-loss control in CRS',
    icon: 'Zap',
    reading_time_min: 24,
    level: 'Core',
    track: 'Surgical Technique',
    guidelines_version: 'Sugarbaker technique · AORN electrosurgical safety · Chicago Consensus 2020',
    learning_objectives: [
      'Explain the physics of high-voltage ball-tip electrosurgery and why it is the workhorse of peritonectomy',
      'Describe surgical plume hazards and the engineering/PPE controls that mitigate occupational exposure',
      'Predict and limit lateral thermal spread on bowel, ureter and vascular structures',
      'Select vessel-sealing and energy devices appropriately for mesenteric and hilar division',
      'Implement a systematic strategy for blood-loss control and understand its prognostic weight',
    ],
    key_references: [
      'Sugarbaker PH. Peritonectomy procedures. Ann Surg 1995;221:29–42.',
      'Massarweh NN, Cosgriff N, Slakey DP. Electrosurgery: history, principles, and current and future uses. J Am Coll Surg 2006;202:520–530.',
      'AORN Guideline for surgical smoke safety. AORN J 2021.',
      'Saxena A, Yan TD, Morris DL. Critical assessment of risk factors for complications after CRS+HIPEC. Ann Surg Oncol 2010.',
      'Sugarbaker PH. Management of the surgical smoke plume during peritonectomy. Eur J Surg Oncol.',
    ],
    sections: [
      {
        id: 'ch10-s1',
        title: 'Physics of Ball-Tip Electrosurgery',
        blocks: [
          {
            type: 'text',
            content:
              'Peritonectomy is performed almost entirely with **monopolar electrosurgery delivered through a 3 mm ball-tip electrode** on a hand-switch pencil, run at high power (typically 100–150 W) in coagulation (interrupted, high-voltage) mode. The ball tip spreads current over a larger surface than a needle, producing **tissue desiccation and division with a haemostatic margin** rather than a fine cut — ideal for stripping peritoneum off muscle and evaporating surface tumour.',
          },
          {
            type: 'text',
            content:
              'Electrosurgical effect depends on **current density (power ÷ contact area), waveform, and dwell time**. Cutting mode uses a continuous low-voltage waveform that vaporises cells with minimal coagulation; coagulation mode uses a high-voltage interrupted waveform that produces deeper thermal desiccation. Peritonectomy exploits the coagulation waveform to achieve a nearly bloodless plane.',
          },
          {
            type: 'key',
            title: 'Why the ball tip, not the blade',
            content:
              'The ball-tip electrode delivers **electroevaporation of tumour on non-resectable surfaces** (liver capsule, bowel serosa, mesentery) and a haemostatic stripping plane on parietal surfaces. It concentrates enough energy to divide tissue while sealing small vessels, which is why Sugarbaker made it the defining instrument of the peritonectomy technique.',
          },
          {
            type: 'text',
            content:
              'Return-electrode safety matters at these power settings: use a **split (dual-foil) dispersive pad with return-electrode monitoring (REM/CQM)** to prevent pad-site burns, and keep the active electrode clear of other instruments to avoid capacitive coupling and direct coupling injuries.',
          },
          {
            type: 'pearl',
            title: 'Keep the tip clean and tangential',
            content:
              'Eschar build-up on the ball tip **raises impedance and forces higher power** for the same effect, increasing thermal spread and plume. Wipe the tip frequently and keep it moving tangentially across the plane rather than pausing — this gives a cleaner cut, less char, and less collateral heat.',
          },
        ],
      },
      {
        id: 'ch10-s2',
        title: 'Surgical Plume & Occupational Safety',
        blocks: [
          {
            type: 'text',
            content:
              'Prolonged electroevaporation generates a large volume of **surgical plume (smoke)** containing ultrafine particulates, toxic gases (benzene, hydrogen cyanide, formaldehyde), viable cells and, in principle, aerosolised tumour and viral DNA. Peritonectomy produces more plume than almost any other operation because of the sustained high-power evaporation of broad surfaces.',
          },
          {
            type: 'list',
            title: 'Plume-control hierarchy',
            items: [
              'Local exhaust ventilation — a **smoke evacuator** capturing plume within ~2 cm of the electrode tip is the primary engineering control',
              'High-efficiency (ULPA-grade) filtration on the evacuator, changed per manufacturer schedule',
              'General OR ventilation with adequate air-exchange rates as a secondary control',
              'Respiratory PPE — fit-tested N95/FFP respirators (surgical masks alone do not filter ultrafine particulates)',
              'Minimise unnecessary evaporation time and power to reduce plume volume at source',
            ],
          },
          {
            type: 'key',
            title: 'A masked surgeon is not a protected surgeon',
            content:
              'Standard surgical masks filter down to ~5 µm; the **majority of plume particulate is < 1 µm** and passes straight through. Effective protection requires **active smoke evacuation at the tip plus a fit-tested respirator**, a point emphasised in AORN surgical-smoke guidance and increasingly enforced by legislation.',
          },
          {
            type: 'pitfall',
            title: 'Plume exposure is a chronic, cumulative hazard',
            content:
              'The risk to the CRS surgeon and team is not a single dramatic event but **years of cumulative exposure** to a mutagenic aerosol. Treating smoke evacuation as optional — or running the evacuator too far from the tip — normalises a preventable occupational-health hazard for the whole team.',
          },
          {
            type: 'trial',
            title: 'Plume is mutagenic and cell-viable',
            content:
              'Laboratory studies show surgical plume contains **viable cells, intact DNA and mutagenic combustion products**; the mutagenicity of electrocautery smoke has been likened to cigarette smoke on a per-gram basis. These data underpin the shift of professional bodies (AORN, ACS) toward mandatory smoke evacuation.',
            ref: 'AORN Guideline for surgical smoke safety, AORN J 2021; Massarweh NN, et al. J Am Coll Surg 2006.',
          },
        ],
      },
      {
        id: 'ch10-s3',
        title: 'Thermal Spread & Collateral Injury',
        blocks: [
          {
            type: 'text',
            content:
              'Every electrosurgical application produces **lateral thermal spread** beyond the visible effect. Adjacent to bowel, ureter and major vessels this spread can cause a **delayed injury** — a coagulated segment that necroses and perforates days later, a devastating event in a HIPEC field. Thermal spread increases with power, dwell time, char build-up, and coagulation (vs cut) waveform.',
          },
          {
            type: 'key',
            title: 'Structures that punish thermal carelessness',
            content:
              'The **ureter, bile duct, hepatic veins, and bowel wall** tolerate collateral heat poorly. Near these, drop the power, use brief pulsed applications, keep the electrode moving, and switch to sharp dissection or bipolar/vessel-sealing devices where feasible. A bowel serosa "just touched" by high-power coagulation can break down after HIPEC.',
          },
          {
            type: 'text',
            content:
              'Device choice modulates spread: **bipolar** energy confines current between two jaws and produces far less lateral spread than monopolar; modern **advanced bipolar vessel sealers** use feedback-controlled energy to seal with a defined thermal margin (typically 1–3 mm). Ultrasonic devices cut by mechanical vibration with lower temperatures but still generate a measurable thermal zone.',
          },
          {
            type: 'pearl',
            title: 'Two millimetres of margin from the ureter',
            content:
              'Keep monopolar energy **at least a few millimetres from the ureter and bile duct**, and prefer cold scissors or bipolar in their immediate vicinity. The ureteric adventitial blood supply is easily cooked; combined with HIPEC hyperthermia, a marginal thermal injury becomes a delayed stricture or fistula.',
          },
          {
            type: 'pitfall',
            title: 'Char, high power and a stationary tip',
            content:
              'The three multipliers of thermal spread — **a charred tip, excessive power, and a stationary electrode** — often occur together during tedious dissection. Recognise the pattern: if you are leaning on the pedal on a fixed spot, you are maximising collateral heat exactly where precision is needed.',
          },
        ],
      },
      {
        id: 'ch10-s4',
        title: 'Vessel Sealing & Blood-Loss Control',
        blocks: [
          {
            type: 'text',
            content:
              'CRS involves division of extensive vascular pedicles — greater omentum/short gastrics, mesocolon, IMA/IMV, splenic hilum, ovarian vessels. **Advanced bipolar vessel-sealing devices** reliably seal vessels up to ~7 mm and are the workhorse for mesenteric and omental division, reducing the number of ties and the operative time. Larger named vessels (splenic artery, IMA at origin) are best controlled with suture ligation or clips.',
          },
          {
            type: 'text',
            content:
              'Diffuse ooze from raw peritonectomised surfaces is the other major source of blood loss. It is controlled by **broad electrocoagulation of the raw sidewall/diaphragm, argon-beam coagulation over large capsular surfaces, and topical haemostatic agents** where coagulation is unsafe (near ureter, bile duct, hilum).',
          },
          {
            type: 'key',
            title: 'Blood loss is a prognostic and safety variable',
            content:
              'Intraoperative blood loss and transfusion are **independent predictors of major morbidity and worse oncologic outcome** in CRS+HIPEC series. Meticulous, sequential haemostasis is not just a comfort measure — it reduces transfusion-related immunomodulation, coagulopathy, and postoperative complications. Achieve a dry field before HIPEC, which itself impairs coagulation.',
          },
          {
            type: 'table',
            title: 'Energy/hemostasis device selection in CRS',
            headers: ['Task', 'Preferred tool', 'Note'],
            rows: [
              ['Peritoneal stripping / tumour evaporation', 'Monopolar ball-tip (coag)', 'Workhorse; high power, tangential, clean tip'],
              ['Omental / mesenteric pedicle division', 'Advanced bipolar vessel sealer', 'Seals ≤ ~7 mm; fewer ties, less spread than monopolar'],
              ['Named artery (splenic, IMA origin)', 'Suture ligation / clips', 'Do not rely on energy alone for large named vessels'],
              ['Broad capsular/diaphragm ooze', 'Argon-beam / broad coag', 'Fast surface haemostasis over large areas'],
              ['Near ureter / bile duct', 'Cold scissors or bipolar', 'Minimise monopolar thermal spread'],
            ],
          },
          {
            type: 'trial',
            title: 'Transfusion and blood loss track with morbidity',
            content:
              'Risk-factor analyses of large CRS+HIPEC cohorts identify **operative blood loss, transfusion requirement, extent of peritonectomy and number of anastomoses** as consistent predictors of grade III–IV complications. Programs that emphasise stepwise haemostasis and blood conservation report lower transfusion rates and morbidity.',
            ref: 'Saxena A, Yan TD, Morris DL. Ann Surg Oncol 2010; Baratti D, et al. Ann Surg Oncol 2010.',
          },
          {
            type: 'pearl',
            title: 'Dry the field before the perfusate goes in',
            content:
              'HIPEC hyperthermia and haemodilution **worsen coagulation**, and bleeding that starts during or after perfusion is hard to find in a distended, fluid-filled abdomen. Achieve scrupulous haemostasis on every raw surface *before* starting HIPEC — re-inspect the diaphragm, splenic bed and pelvis specifically.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 11 ──────────────────────────────────────────────────────────────
  {
    id: 'ch11-hipec-delivery',
    number: '11',
    title: 'HIPEC Delivery Systems & Technique',
    subtitle: 'Open (coliseum) vs closed vs semi-open, perfusion circuit, inflow/outflow, thermometry and occupational safety',
    icon: 'Thermometer',
    reading_time_min: 31,
    level: 'Core',
    track: 'Regional Therapy',
    guidelines_version: 'Chicago Consensus 2020 · PSOGI 2022 · Sugarbaker HIPEC technique',
    learning_objectives: [
      'Compare open (coliseum), closed and semi-open HIPEC techniques and their trade-offs',
      'Describe the perfusion circuit: reservoir, roller pump, heat exchanger, inflow/outflow catheters and thermometry',
      'Explain how flow rate, perfusate volume and abdominal manipulation achieve uniform heat and drug distribution',
      'State target intraperitoneal temperatures and how inflow/outflow temperatures are monitored and controlled',
      'Implement occupational-exposure safeguards for cytotoxic-drug and heat handling in the operating room',
    ],
    key_references: [
      'Sugarbaker PH, Van der Speeten K. Surgical technology and pharmacology of HIPEC. J Gastrointest Oncol 2016;7(1):29–44.',
      'González-Moreno S, González-Bayón LA, Ortega-Pérez G. HIPEC: rationale and technique. World J Gastrointest Oncol 2010;2:68–75.',
      'Chicago Consensus Working Group. HIPEC technique and standards. Ann Surg Oncol 2020;27:1794–1804.',
      'Van der Speeten K, Stuart OA, Sugarbaker PH. Pharmacokinetics and pharmacodynamics of perioperative cancer chemotherapy. Cancer J 2009;15:216–224.',
      'PSOGI/EURACAN HIPEC technical consensus. Eur J Surg Oncol 2022.',
      'Ba MC, Cui SZ, Lin SQ, Tang YQ, Wu YB, Wang B, Zhang XL. Surg Endosc. 2013;27(8):2735-2743. PMID: 23392978.',
      'Cui SZ, Ba MC, Tang YQ, Liu JW, Wu YB, Wang B, Zhang XL. J Laparoendosc Adv Surg Tech A. 2016;26(2):81-86. PMID: 26779722.',
      'Ba M, Cui S, Wang B, Long H, Yan Z, Wang S, Wu Y, Gao Y. Yonsei Med J. 2017;58(3):497-504. PMID: 28332353.',
    ],
    sections: [
      {
        id: 'ch11-s1',
        title: 'Rationale & the Three Delivery Techniques',
        blocks: [
          {
            type: 'text',
            content:
              'HIPEC exploits two synergistic effects delivered directly to the peritoneal surface after complete cytoreduction: **high local drug concentration** (the peritoneal–plasma barrier keeps large hydrophilic drugs in the cavity) and **hyperthermia** (41–43 °C), which is directly cytotoxic, enhances drug penetration and potentiates several agents. It targets the **microscopic residual disease** that remains after even a CC-0 resection.',
          },
          {
            type: 'text',
            content:
              'Three delivery techniques exist: **open ("coliseum")**, **closed**, and **semi-open (semi-closed / peritoneal-cavity-expander)**. All circulate heated cytotoxic perfusate through the abdomen via a roller-pump circuit with a heat exchanger, inflow and outflow catheters, and multiple temperature probes. They differ in whether the abdomen is open to air during perfusion.',
          },
          {
            type: 'table',
            title: 'Open vs closed vs semi-open HIPEC',
            headers: ['Feature', 'Open (coliseum)', 'Closed', 'Semi-open'],
            rows: [
              ['Abdomen during perfusion', 'Open, suspended skin edges', 'Skin temporarily closed', 'Partially open (expander/device)'],
              ['Distribution', 'Manual stirring — most uniform', 'Relies on flow; risk of dead spaces', 'Intermediate'],
              ['Intra-abdominal pressure', 'Atmospheric', 'Raised (may aid penetration)', 'Low/controlled'],
              ['Heat loss', 'Higher; needs higher inflow temp', 'Lower; easier to hold target', 'Intermediate'],
              ['Occupational exposure', 'Highest (aerosol/spill)', 'Lowest (closed circuit)', 'Intermediate'],
            ],
            ref: 'Sugarbaker PH, Van der Speeten K. J Gastrointest Oncol 2016;7:29–44.',
          },
          {
            type: 'key',
            title: 'The coliseum technique',
            content:
              'In the **open coliseum technique**, the skin edges are suspended from a self-retaining retractor with a running suture and a plastic sheet, creating an open "coliseum". The surgeon\'s gloved hand continuously **stirs the viscera and perfusate** to ensure uniform heat and drug contact with every surface, eliminating dead spaces — its principal advantage.',
          },
          {
            type: 'pearl',
            title: 'Match technique to the drug and the priority',
            content:
              'Choose **open** when uniform distribution over a large, irregular cavity is paramount (bulky prior disease, PMP), and **closed** when raised intra-abdominal pressure to drive penetration and minimal occupational exposure are the priorities. Neither has proven superior for survival; institutional expertise and safety culture should drive the choice.',
          },
          {
            type: 'trial',
            title: 'Chinese evidence — minimally invasive HIPEC for malignant ascites',
            content:
              'Chinese groups pioneered laparoscope-assisted and B-ultrasound-guided **continuous circulatory HIPEC** as a less invasive route for palliating malignant ascites, including ascites from unresectable gastric cancer. A multivariate comparison found B-ultrasound-guided delivery achieved ascites control comparable to the laparoscopic approach with lower invasiveness, while a dedicated analysis characterised the port-site metastasis "chimney effect" to inform safer trocar and drain management during minimally invasive perfusion.',
            ref: 'Ba MC, et al. Surg Endosc. 2013;27(8):2735-2743. PMID: 23392978; Cui SZ, et al. J Laparoendosc Adv Surg Tech A. 2016;26(2):81-86. PMID: 26779722.',
          },
        ],
      },
      {
        id: 'ch11-s2',
        title: 'The Perfusion Circuit',
        blocks: [
          {
            type: 'text',
            content:
              'The HIPEC circuit consists of a **reservoir** holding the perfusate (carrier solution + drug), a **roller pump** that circulates it, a **heat exchanger** that raises and maintains temperature, **inflow and outflow catheters** placed in the abdomen, and **multiple thermometry probes**. Perfusate volume is typically **~2 L/m² (around 3–6 L total)** to fill the cavity and bathe all surfaces.',
          },
          {
            type: 'text',
            content:
              'Flow rates of **~1–1.5 L/min** are used to maintain temperature and distribution; the surgeon and perfusionist adjust flow, inflow temperature and catheter position to hold the target intra-abdominal temperature. Typically **one or two inflow catheters** deliver heated perfusate to central/deep locations, and **two or more outflow drains** in the subphrenic spaces and pelvis return it to the reservoir.',
          },
          {
            type: 'list',
            title: 'Components and their function',
            items: [
              'Reservoir — holds perfusate; drug is added here at the start of the stable circuit',
              'Roller pump — provides continuous circulation at a set flow rate',
              'Heat exchanger — heats perfusate so intra-abdominal target is reached despite heat loss',
              'Inflow catheter(s) — deliver hot perfusate; positioned deep/central',
              'Outflow drains — placed in subphrenic spaces and pelvis to return perfusate',
              'Thermometry probes — inflow, outflow and multiple intra-abdominal sites',
              'In-line filter/bubble trap — safety against particulate and air',
            ],
          },
          {
            type: 'key',
            title: 'Inflow vs intra-abdominal temperature',
            content:
              'Because of continuous heat loss (especially in the open technique), the **inflow temperature (~44–48 °C) runs above the target intra-abdominal temperature (41–43 °C)**. The perfusionist titrates inflow temperature and flow to keep the measured intra-abdominal temperature within the therapeutic window without overheating tissue at the inflow catheter.',
          },
          {
            type: 'pitfall',
            title: 'Dead spaces and thermal cold spots',
            content:
              'Poorly positioned catheters or an unstirred closed abdomen create **regions that never reach therapeutic temperature or drug concentration** — precisely where residual disease may sit. Uneven distribution undermines the entire rationale of HIPEC; manual stirring (open) or adequate flow with repositioning (closed) is essential to eliminate cold/dead spaces.',
          },
        ],
      },
      {
        id: 'ch11-s3',
        title: 'Thermometry, Distribution & Duration',
        blocks: [
          {
            type: 'text',
            content:
              'Temperature is monitored continuously at **inflow, outflow and multiple intra-abdominal sites** (subphrenic spaces, pelvis, centrally). The therapeutic target is an intra-abdominal temperature of **41–43 °C**; below ~41 °C the hyperthermic potentiation is lost, and above ~43 °C the risk of thermal injury to bowel and other tissue rises steeply.',
          },
          {
            type: 'text',
            content:
              'Perfusion duration is **drug-specific (see Chapter 12)**: oxaliplatin regimens run **30 minutes**, mitomycin C **60–90 minutes**, cisplatin-based ovarian regimens **60–90 minutes**. Timing starts when the target temperature is reached and the drug is circulating. Throughout, the perfusate is kept moving and, in the open technique, manually agitated to maintain uniform contact.',
          },
          {
            type: 'key',
            title: 'Core temperature and patient hyperthermia',
            content:
              'HIPEC raises the **patient\'s core temperature**, often to 38.5–39.5 °C, producing tachycardia, vasodilation, increased cardiac output and fluid requirement. Anaesthesia counters this with **active cooling (cooling blanket, reduced warming, cold IV fluids)** so systemic hyperthermia does not become dangerous. Core temperature is monitored continuously alongside intra-abdominal probes.',
          },
          {
            type: 'text',
            content:
              'Physiological effects during perfusion include a **hyperdynamic circulation, increased oxygen consumption, and significant fluid shifts**; the anaesthetist anticipates increased fluid, vasoactive and monitoring demands during this phase (detailed in Chapter 15). The abdomen is then drained, and in some protocols rinsed, before reconstruction/closure.',
          },
          {
            type: 'pearl',
            title: 'Start the clock at target temperature, not at drug-in',
            content:
              'Distribution and heating take several minutes. Begin timing the perfusion **when the intra-abdominal target temperature is achieved and the drug is uniformly circulating**, not the moment the drug is added — otherwise the effective therapeutic exposure is shorter than the protocol intends.',
          },
        ],
      },
      {
        id: 'ch11-s4',
        title: 'Occupational Safety & Cytotoxic Handling',
        blocks: [
          {
            type: 'text',
            content:
              'HIPEC exposes the OR team to **cytotoxic drugs (aerosol, splash, contact)** and to heat. Exposure risk is highest in the **open technique** (open cavity, manual stirring, aerosolisation) and lowest in the **closed** technique (sealed circuit). A structured safety programme is mandatory: engineering controls, PPE, safe drug handling and spill protocols.',
          },
          {
            type: 'list',
            title: 'Occupational-exposure safeguards',
            items: [
              'Double gloving with frequent changes; chemotherapy-rated gloves and impermeable gowns',
              'Face/eye protection and, for open technique, a smoke/aerosol evacuator over the field',
              'Closed-system drug-transfer devices for adding drug to the reservoir',
              'Dedicated cytotoxic spill kit and a rehearsed spill/exposure protocol in the room',
              'Restricted personnel and clear signage during the perfusion phase',
              'Cytotoxic waste segregation for perfusate, drains, drapes and disposables',
            ],
          },
          {
            type: 'key',
            title: 'The closed technique minimises exposure',
            content:
              'Because the abdomen is temporarily closed and perfusate never contacts open air, the **closed technique offers the lowest measured cytotoxic exposure** to staff. This is a genuine advantage for programs prioritising occupational safety, offset against the loss of manual stirring and the reliance on flow for uniform distribution.',
          },
          {
            type: 'text',
            content:
              'Beyond drug exposure, staff must manage **heat and prolonged operative time**; the perfusionist controls the heat exchanger, and the team monitors for perfusate leaks onto the field or floor. Pregnant staff are typically excluded from the perfusion phase per institutional cytotoxic-safety policy.',
          },
          {
            type: 'trial',
            title: 'Detectable but generally low staff exposure with proper controls',
            content:
              'Occupational-monitoring studies (air and surface sampling for platinum/mitomycin) find **detectable but generally low cytotoxic exposure when engineering controls and PPE are used**, with higher levels in open technique and with spills. The data support mandatory closed-system transfer, PPE and evacuation rather than reliance on technique alone.',
            ref: 'González-Bayón L, et al. Ann Surg Oncol 2006 (safety of HIPEC for personnel); Chicago Consensus 2020.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 12 ──────────────────────────────────────────────────────────────
  {
    id: 'ch12-hipec-pharmacology',
    number: '12',
    title: 'HIPEC Pharmacology in Depth',
    subtitle: 'Oxaliplatin, mitomycin C, cisplatin and doxorubicin regimens, hyperthermia biology, the peritoneal–plasma barrier and renal protection',
    icon: 'FlaskConical',
    reading_time_min: 32,
    level: 'Core',
    track: 'Regional Therapy',
    guidelines_version: 'PRODIGE 7 (Quénet, Lancet Oncol 2021) · PSOGI 2022 · Chicago Consensus 2020',
    learning_objectives: [
      'Recall the standard HIPEC drug/dose/temperature/time regimens by indication',
      'Explain the pharmacologic advantage conferred by the peritoneal–plasma barrier and hyperthermia',
      'Understand the oxaliplatin glucose-carrier caveat and its systemic metabolic consequence',
      'Apply cisplatin-based regimens for ovarian and mesothelioma disease and their renal-protection needs',
      'Interpret PRODIGE 7 and its impact on the role of oxaliplatin HIPEC in colorectal disease',
    ],
    key_references: [
      'Quénet F, Elias D, Roca L, et al. CRS with or without HIPEC in colorectal PM (PRODIGE 7). Lancet Oncol 2021;22:256–266.',
      'Van der Speeten K, Stuart OA, Sugarbaker PH. Pharmacology of perioperative intraperitoneal chemotherapy. Cancer J 2009;15:216–224.',
      'Sugarbaker PH, Van der Speeten K. Surgical technology and pharmacology of HIPEC. J Gastrointest Oncol 2016;7:29–44.',
      'Elias D, Bonnay M, Puizillou JM, et al. Heated intraoperative IP oxaliplatin with high-dose carrier. Ann Oncol 2002;13:267–272.',
      'van Driel WJ, Koole SN, Sikorska K, et al. HIPEC in ovarian cancer (OVHIPEC-1). N Engl J Med 2018;378:230–240.',
    ],
    sections: [
      {
        id: 'ch12-s1',
        title: 'The Pharmacologic Rationale',
        blocks: [
          {
            type: 'text',
            content:
              'Intraperitoneal chemotherapy exploits the **peritoneal–plasma barrier**: large, hydrophilic drugs (mitomycin C, cisplatin, oxaliplatin, doxorubicin) clear slowly from the peritoneal cavity into the plasma, so a very high intraperitoneal concentration can be maintained while systemic exposure — and toxicity — remains comparatively low. This is quantified by the **area-under-the-curve (AUC) ratio of peritoneal to plasma concentration**, which favours the cavity by roughly one to two orders of magnitude for these agents.',
          },
          {
            type: 'text',
            content:
              'The therapeutic limitation is **penetration depth**: intraperitoneal drug diffuses only **1–3 mm into tissue**. This is why HIPEC treats *microscopic* residual disease only and why **complete cytoreduction (CC-0/1) is mandatory** — no perfusate can eradicate macroscopic nodules. Hyperthermia partly offsets this by modestly increasing penetration and potentiating cytotoxicity.',
          },
          {
            type: 'key',
            title: 'Dosing basis: body surface area vs concentration',
            content:
              'Two dosing philosophies exist: **BSA-based** (mg/m², assuming BSA proxies peritoneal surface area) and **concentration-based** (fixed mg/L of perfusate). BSA dosing risks under/over-dosing when body habitus and peritoneal surface diverge, and women may be relatively overdosed; concentration-based dosing standardises intraperitoneal exposure. Most colorectal/appendiceal protocols remain BSA-based.',
          },
          {
            type: 'text',
            content:
              '**Bidirectional chemotherapy** — giving intravenous 5-FU/leucovorin (and sometimes systemic agents) concurrently with intraperitoneal oxaliplatin — attacks residual tumour from both the peritoneal and vascular sides, and is used with oxaliplatin HIPEC to exploit 5-FU radiosensitisation-like synergy during the perfusion.',
          },
          {
            type: 'pearl',
            title: 'HIPEC cannot rescue an incomplete cytoreduction',
            content:
              'Because effective penetration is only 1–3 mm, **HIPEC after a CC-2/3 resection is not therapeutic** — it adds toxicity without controlling macroscopic disease. If complete cytoreduction is not achievable, the pharmacology says the perfusion will not compensate.',
          },
        ],
      },
      {
        id: 'ch12-s2',
        title: 'Hyperthermia Biology',
        blocks: [
          {
            type: 'text',
            content:
              'Hyperthermia at **41–43 °C** is directly and selectively cytotoxic to tumour cells and synergises with several drugs. Mechanisms include **protein denaturation and impaired repair enzymes, increased cell-membrane permeability, inhibition of DNA repair (enhancing platinum/alkylator damage), impaired tumour microvascular perfusion, and induction of apoptosis and heat-shock responses**. Tumour tissue, with its disordered vasculature, dissipates heat poorly and is preferentially damaged.',
          },
          {
            type: 'key',
            title: 'Thermal enhancement is drug-dependent',
            content:
              'Hyperthermia meaningfully **potentiates mitomycin C, cisplatin, oxaliplatin and doxorubicin**, increasing cytotoxicity and, for platinums, tissue penetration. The enhancement is greatest within the **41–43 °C window**; the same drugs given at normothermia (as in EPIC) rely on prolonged dwell time rather than thermal synergy.',
          },
          {
            type: 'text',
            content:
              'Hyperthermia also increases drug **penetration depth** modestly — a clinically relevant gain given the 1–3 mm baseline — and may improve delivery to the outer rim of residual micro-nodules. Above ~43 °C, however, the therapeutic ratio inverts as normal bowel, ureter and other tissues sustain thermal injury; hence the tight temperature control described in Chapter 11.',
          },
          {
            type: 'pitfall',
            title: 'Too hot is not better',
            content:
              'Pushing intra-abdominal temperature above ~43 °C to "maximise" the effect produces **bowel thermal injury, increased anastomotic breakdown, and systemic hyperthermia** without proportional oncologic gain. The window is narrow and deliberate — 41–43 °C, not "as hot as tolerated".',
          },
          {
            type: 'trial',
            title: 'Hyperthermia adds to intraperitoneal drug effect',
            content:
              'Preclinical and pharmacodynamic work underpinning HIPEC shows **enhanced tumour cytotoxicity and penetration when cytotoxic drugs are combined with 41–43 °C hyperthermia** compared with normothermic intraperitoneal delivery, providing the biological rationale that distinguishes HIPEC from EPIC/normothermic IP chemotherapy.',
            ref: 'Van der Speeten K, Stuart OA, Sugarbaker PH. Cancer J 2009;15:216–224.',
          },
        ],
      },
      {
        id: 'ch12-s3',
        title: 'Regimens by Indication',
        blocks: [
          {
            type: 'text',
            content:
              'HIPEC regimens are indication-specific. The best-established are **mitomycin C for appendiceal/colorectal disease** and **oxaliplatin for colorectal disease**, with **cisplatin-based regimens for ovarian and mesothelioma disease**. Dose, carrier, temperature and duration are matched to each drug\'s pharmacology.',
          },
          {
            type: 'table',
            title: 'Common HIPEC regimens (representative)',
            headers: ['Indication', 'Drug & dose', 'Temp', 'Time', 'Carrier / notes'],
            rows: [
              ['Colorectal / appendiceal', 'Oxaliplatin 460 mg/m² (± IV 5-FU/LV)', '43 °C', '30 min', 'Dextrose 5% carrier — causes hyperglycaemia'],
              ['Colorectal / appendiceal / PMP', 'Mitomycin C 30–35 mg/m²', '42 °C', '90 min', 'Often split dosing; peritoneal-fluid based'],
              ['Ovarian (interval, OVHIPEC-1)', 'Cisplatin 100 mg/m²', '~41–43 °C', '90 min', 'Sodium thiosulfate renal protection'],
              ['Peritoneal mesothelioma', 'Cisplatin + doxorubicin (e.g. cisplatin ~50–100 mg/m² + doxorubicin ~15 mg/m²)', '~42 °C', '60–90 min', 'Platinum-based; nephro/cardiotoxicity watch'],
            ],
            ref: 'Quénet F, Lancet Oncol 2021; van Driel WJ, NEJM 2018; Sugarbaker & Van der Speeten 2016.',
          },
          {
            type: 'key',
            title: 'The oxaliplatin glucose-carrier caveat',
            content:
              'Oxaliplatin is **unstable in chloride-containing solutions** and must be delivered in a **dextrose (5% glucose) carrier**. This causes marked **intraoperative hyperglycaemia** (glucose absorbed across the peritoneum) and, after drainage, **rebound hypoglycaemia**, plus a risk of **hyponatraemia** from the electrolyte-free carrier. Glucose and sodium must be monitored and managed throughout and after the perfusion (see Chapter 15).',
          },
          {
            type: 'text',
            content:
              'Mitomycin C, historically the first HIPEC agent, is given at **30–35 mg/m² over 90 minutes at ~42 °C**, frequently as split dosing (e.g. two-thirds at start, one-third at 60 minutes) to maintain concentration; its dose-limiting toxicity is **myelosuppression (leukopenia/thrombocytopenia)**, typically nadiring in the second postoperative week.',
          },
          {
            type: 'pearl',
            title: 'Know your program\'s exact protocol number',
            content:
              'Regimens vary by center and evolve; **verify the precise drug, dose, carrier, temperature and time for your institution\'s protocol** before every case. The commonly quoted "oxaliplatin 460 mg/m², 43 °C, 30 min, glucose carrier" and "MMC 30–35 mg/m², 42 °C, 90 min" are anchors, not universal constants.',
          },
        ],
      },
      {
        id: 'ch12-s4',
        title: 'Renal Protection & Systemic Toxicity',
        blocks: [
          {
            type: 'text',
            content:
              'Cisplatin HIPEC — used for ovarian and mesothelioma disease — carries a real risk of **nephrotoxicity** from platinum reaching the systemic circulation. **Intravenous sodium thiosulfate**, given before and during cisplatin perfusion, chelates platinum in the renal tubules and markedly reduces nephrotoxicity; it was integral to the OVHIPEC-1 protocol. Adequate hydration and forced diuresis further protect the kidneys.',
          },
          {
            type: 'key',
            title: 'Sodium thiosulfate for cisplatin HIPEC',
            content:
              'For high-dose cisplatin HIPEC, **IV sodium thiosulfate** (a bolus before perfusion followed by an infusion) is the standard renal-protective adjunct, allowing the intraperitoneal cisplatin dose used in OVHIPEC-1 (100 mg/m²) to be delivered with acceptable renal safety. Do not run high-dose cisplatin HIPEC without a renal-protection strategy.',
          },
          {
            type: 'list',
            title: 'Agent-specific systemic toxicities to anticipate',
            items: [
              'Cisplatin — nephrotoxicity (mitigate with sodium thiosulfate + hydration), electrolyte wasting, ototoxicity',
              'Oxaliplatin — hyperglycaemia/hyponatraemia from glucose carrier, peripheral neuropathy, rare intraperitoneal bleeding',
              'Mitomycin C — myelosuppression (2nd-week nadir), rare haemolytic-uraemic syndrome',
              'Doxorubicin — myelosuppression, cardiotoxicity (cumulative-dose aware), tissue irritation',
            ],
          },
          {
            type: 'trial',
            title: 'OVHIPEC-1 — cisplatin HIPEC benefit in ovarian cancer',
            content:
              'In stage III epithelial ovarian cancer treated with interval cytoreduction, adding **HIPEC with cisplatin 100 mg/m² (with sodium thiosulfate) improved median recurrence-free survival (14.2 vs 10.7 months) and overall survival (45.7 vs 33.9 months)** without increasing grade 3–4 toxicity — the pivotal positive HIPEC RCT and the model for renal-protected cisplatin perfusion.',
            ref: 'van Driel WJ, et al. N Engl J Med 2018;378:230–240.',
          },
          {
            type: 'trial',
            title: 'PRODIGE 7 — oxaliplatin HIPEC did not add survival in colorectal PM',
            content:
              'PRODIGE 7 randomised 265 patients with colorectal peritoneal metastasis undergoing complete cytoreduction to **oxaliplatin HIPEC (460 mg/m², 43 °C, 30 min) versus no HIPEC**. Median OS was **41.7 vs 41.2 months (no significant difference)**, while 30-day grade ≥3 morbidity was higher with HIPEC and late (60-day) morbidity increased. The trial established that **the survival benefit in colorectal PM is driven by complete cytoreduction**, and cast doubt on short-course oxaliplatin HIPEC specifically — without disproving other drugs/regimens.',
            ref: 'Quénet F, Elias D, Roca L, et al. Lancet Oncol 2021;22:256–266.',
          },
          {
            type: 'pitfall',
            title: 'Do not over-read PRODIGE 7 as "HIPEC is dead"',
            content:
              'PRODIGE 7 tested **one drug, one dose, one 30-minute schedule** in colorectal disease. It does not invalidate mitomycin C regimens, ovarian cisplatin HIPEC (positive in OVHIPEC-1), mesothelioma platinum/doxorubicin regimens, or PMP practice. The correct lesson is the primacy of complete cytoreduction and equipoise about the incremental value of short oxaliplatin HIPEC — not blanket abandonment of regional therapy.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 13 ──────────────────────────────────────────────────────────────
  {
    id: 'ch13-pipac',
    number: '13',
    title: 'PIPAC & Aerosol Regional Therapy',
    subtitle: 'Nebuliser physics, capnoperitoneum, aerosol penetration, low-dose regimens, PRGS regression grading and repeat cycles',
    icon: 'Wind',
    reading_time_min: 29,
    level: 'Advanced',
    track: 'Regional Therapy',
    guidelines_version: 'Solass et al. 2014 · PSOGI PIPAC consensus · ISSPP recommendations',
    learning_objectives: [
      'Explain the physical principle of pressurised intraperitoneal aerosol chemotherapy and why aerosol improves distribution and penetration',
      'Describe the laparoscopic PIPAC setup, the 12 mmHg capnoperitoneum and the nebuliser',
      'Recall standard low-dose PIPAC drug regimens and how they compare with HIPEC dosing',
      'Grade treatment response using the Peritoneal Regression Grading Score (PRGS) on repeat biopsies',
      'Position PIPAC within palliative, bidirectional and repeat-cycle treatment strategies and apply its safety measures',
    ],
    key_references: [
      'Solass W, Kerb R, Mürdter T, et al. Intraperitoneal chemotherapy of peritoneal carcinomatosis using PIPAC. Ann Surg Oncol 2014;21:553–559.',
      'Nowacki M, Alyami M, Villeneuve L, et al. Multicenter comprehensive methodological and technical analysis of PIPAC. Eur J Surg Oncol 2018;44:991–996.',
      'Alyami M, Hübner M, Grass F, et al. Pressurised intraperitoneal aerosol chemotherapy: rationale, evidence, and potential. Lancet Oncol 2019;20:e368–e377.',
      'Solass W, Sempoux C, Detlefsen S, et al. Peritoneal Regression Grading Score (PRGS). Pleura Peritoneum 2016;1:99–107.',
      'Grass F, Vuagniaux A, Teixeira-Farinha H, et al. Systematic review of PIPAC for peritoneal carcinomatosis. Br J Surg 2017;104:669–678.',
      'Chen R, Yang Z, Li R, Yang Y, Zheng J, Wang J, Li Y. Gastroenterol Rep (Oxf). 2025;13:goaf040. PMID: 40520131.',
      'Li RJ, Chen RJ, Wu DQ, Wang JJ, Yang ZF, Li Y. Chin J Gastrointest Surg. 2025;28(5):551-556. PMID: 40404375.',
      'Yang ZF, Chen RJ, Li RJ, Li Y. Chin J Gastrointest Surg. 2025;28(5):497-507. PMID: 40404368.',
    ],
    sections: [
      {
        id: 'ch13-s1',
        title: 'Principle & Physics of Aerosol Delivery',
        blocks: [
          {
            type: 'text',
            content:
              '**Pressurised intraperitoneal aerosol chemotherapy (PIPAC)** delivers cytotoxic drug as an **aerosol under pressure** into the closed, insufflated abdomen during laparoscopy. Two physical principles drive its advantage over liquid intraperitoneal chemotherapy: **aerosolisation distributes drug more uniformly** across the peritoneal surface, and the **positive intra-abdominal pressure (capnoperitoneum) drives drug deeper into tissue**, overcoming the elevated interstitial fluid pressure of tumour.',
          },
          {
            type: 'text',
            content:
              'Liquid intraperitoneal chemotherapy pools by gravity and penetrates only 1–3 mm. The aerosol\'s fine droplet spray plus the ~12 mmHg pressure gradient achieve **more homogeneous coverage and reported penetration in the multi-millimetre range**, with a much lower total drug dose than HIPEC — typically **~10% of the systemic/HIPEC dose**.',
          },
          {
            type: 'key',
            title: 'The nebuliser and the aerosol',
            content:
              'A **micropump-driven nebuliser (CADD-type high-pressure injector connected to a nebuliser lance)** is introduced through a trocar and generates a **polydisperse aerosol of ~1–40 µm droplets** at a defined flow and pressure. The drug solution is injected at high pressure (~200 psi / ~7–7.5 mL/min) and aerosolised into the capnoperitoneum, then allowed to act for a defined **application time (~30 minutes)** before evacuation.',
          },
          {
            type: 'text',
            content:
              'Because PIPAC is **laparoscopic and low-dose**, it is repeatable and comparatively low-morbidity, making it suitable for patients who are **not candidates for CRS+HIPEC** — those with unresectable disease, poor performance status, or a need for palliation or disease control.',
          },
          {
            type: 'pearl',
            title: 'Distribution and pressure, not brute-force dose',
            content:
              'PIPAC\'s therapeutic gain comes from **physics (aerosol distribution + pressure-driven penetration)**, not from high drug concentration. That is why a fraction of the HIPEC dose can be effective — and why nebuliser function, tight capnoperitoneum and correct pressure are as important as the drug itself.',
          },
          {
            type: 'trial',
            title: 'Chinese evidence — PIPAC in gastric peritoneal metastases',
            content:
              'A Chinese-led meta-analysis (671 patients, 1357 procedures) reported a **66% histological response rate and 11.7-month median OS** with PIPAC in gastric peritoneal metastases, best achieved when combined with systemic chemotherapy over ≥3 sessions. A first Chinese case series using a domestically deployed PIPAC device confirmed the procedure is safe and technically feasible, with low pain scores and short hospital stays — reflecting rapid uptake of aerosol regional therapy in China.',
            ref: 'Chen R, et al. Gastroenterol Rep (Oxf). 2025;13:goaf040. PMID: 40520131; Li RJ, et al. Chin J Gastrointest Surg. 2025;28(5):551-556. PMID: 40404375.',
          },
        ],
      },
      {
        id: 'ch13-s2',
        title: 'Technique, Capnoperitoneum & Setup',
        blocks: [
          {
            type: 'text',
            content:
              'PIPAC is performed **laparoscopically**. Two balloon trocars are placed; a **12 mmHg CO₂ capnoperitoneum** at 37 °C is established. A staging laparoscopy documents the PCI and **peritoneal biopsies are taken** (for PRGS on repeat cycles). The nebuliser lance is inserted, positioned centrally, and connected to the high-pressure injector.',
          },
          {
            type: 'list',
            title: 'PIPAC procedure sequence',
            items: [
              'Laparoscopic access with two balloon trocars; establish 12 mmHg CO₂ capnoperitoneum',
              'Staging laparoscopy: document PCI, ascites, and take mapping peritoneal biopsies',
              'Insert and centre the nebuliser; connect to high-pressure injector (~200 psi)',
              'Aerosolise the drug solution into the closed abdomen',
              'Application phase: ~30 minutes of steady-state 12 mmHg with the team outside the room (remote monitoring)',
              'Evacuate aerosol via a closed suction system through a microparticle filter to hospital exhaust',
              'Desufflate, remove trocars, close — day-case or short-stay recovery',
            ],
          },
          {
            type: 'key',
            title: 'Remote monitoring during the application phase',
            content:
              'During the ~30-minute aerosol application, **all staff leave the operating room** and the patient is monitored remotely, because the sealed capnoperitoneum contains aerosolised cytotoxic drug. The closed, insufflated abdomen is the key safety feature — provided it stays sealed and the evacuation runs through a proper filter, occupational exposure is very low.',
          },
          {
            type: 'text',
            content:
              'The **closed, sealed system with filtered evacuation to the hospital exhaust** is the principal occupational-safety advantage of PIPAC over open HIPEC. Environmental monitoring in centres following the protocol has found platinum exposure below detection thresholds, provided the capnoperitoneum remains tight.',
          },
          {
            type: 'pitfall',
            title: 'A leaking capnoperitoneum is a safety and efficacy failure',
            content:
              'If trocar seals leak, the capnoperitoneum drops, **aerosol escapes into the room (occupational exposure)** and the pressure gradient that drives penetration is lost (reduced efficacy). Verify airtight trocars and stable 12 mmHg before starting nebulisation, and abort/re-seal if the pressure cannot be held.',
          },
        ],
      },
      {
        id: 'ch13-s3',
        title: 'Regimens, PRGS & Repeat Cycles',
        blocks: [
          {
            type: 'text',
            content:
              'Standard PIPAC regimens are **low-dose**: for gastrointestinal/ovarian disease, **cisplatin ~7.5 mg/m² plus doxorubicin ~1.5 mg/m²** ("PIPAC C/D"); for colorectal/appendiceal disease, **oxaliplatin ~92 mg/m²** ("PIPAC Ox"). Doses are a fraction of HIPEC doses, exploiting aerosol distribution and pressure rather than concentration.',
          },
          {
            type: 'table',
            title: 'Representative PIPAC regimens',
            headers: ['Indication', 'Drug(s)', 'Typical dose', 'Application'],
            rows: [
              ['Gastric / ovarian / mesothelioma', 'Cisplatin + doxorubicin', 'Cisplatin ~7.5 mg/m² + doxorubicin ~1.5 mg/m²', '12 mmHg, ~30 min, laparoscopic'],
              ['Colorectal / appendiceal', 'Oxaliplatin', '~92 mg/m² (± IV 5-FU/LV bidirectional)', '12 mmHg, ~30 min, laparoscopic'],
            ],
            ref: 'Solass W, et al. Ann Surg Oncol 2014; Alyami M, et al. Lancet Oncol 2019.',
          },
          {
            type: 'key',
            title: 'PRGS — the Peritoneal Regression Grading Score',
            content:
              'Because PIPAC is repeated, response is assessed histologically on **serial peritoneal biopsies** using the **Peritoneal Regression Grading Score (PRGS)**, a 4-point scale: **PRGS 1 = complete response (no tumour, regression only); 2 = major response (few tumour cells); 3 = minor response; 4 = no response (predominant tumour)**. A falling PRGS across cycles indicates treatment response, independent of the (often unreliable) radiologic assessment of peritoneal disease.',
          },
          {
            type: 'text',
            content:
              'PIPAC is delivered as **repeat cycles, typically every ~6 weeks**, with response tracked by PRGS and PCI at each laparoscopy. It is frequently combined with **systemic chemotherapy between cycles ("bidirectional therapy")**, attacking peritoneal disease locally and systemic/deep disease intravenously.',
          },
          {
            type: 'trial',
            title: 'PIPAC produces objective histologic regression',
            content:
              'Early and multicentre PIPAC series report **objective histologic response by PRGS in a substantial proportion of heavily pretreated patients** with gastric, colorectal and ovarian peritoneal metastasis, with low grade III–IV morbidity and preserved quality of life. Solass\'s original series established feasibility and the histologic-regression endpoint that PRGS now formalises.',
            ref: 'Solass W, et al. Ann Surg Oncol 2014;21:553–559; Grass F, et al. Br J Surg 2017;104:669–678.',
          },
          {
            type: 'pearl',
            title: 'Judge PIPAC by the biopsy, not the CT',
            content:
              'CT poorly quantifies peritoneal disease, so **PRGS on repeat biopsies is the more reliable response measure** in PIPAC. Take mapping biopsies from the same regions each cycle so the pathologist can track true histologic regression over time.',
          },
        ],
      },
      {
        id: 'ch13-s4',
        title: 'Indications, Bidirectional Strategy & Safety',
        blocks: [
          {
            type: 'text',
            content:
              'PIPAC occupies a distinct niche from CRS+HIPEC. It is used for **unresectable peritoneal metastasis** for palliation and disease control, for **downstaging** in a bidirectional strategy that may render selected patients resectable, and as a **repeatable, low-morbidity** option for patients unfit for major cytoreduction. It is explicitly **not a substitute for CRS+HIPEC in resectable disease**.',
          },
          {
            type: 'list',
            title: 'Where PIPAC fits',
            items: [
              'Palliative control of symptomatic peritoneal disease and malignant ascites',
              'Unresectable peritoneal metastasis (gastric, colorectal, ovarian, mesothelioma, others)',
              'Bidirectional therapy: PIPAC + systemic chemotherapy to control/downstage disease',
              'Bridge to possible cytoreduction in selected responders (still investigational)',
              'Patients unfit for the physiologic insult of CRS+HIPEC',
            ],
          },
          {
            type: 'key',
            title: 'Bidirectional therapy',
            content:
              '**Bidirectional therapy** combines local PIPAC with systemic chemotherapy in the interval between cycles, targeting residual tumour from both the peritoneal surface (aerosol) and the vasculature (IV). It is the dominant framework for using PIPAC in gastric and colorectal peritoneal disease and the basis of ongoing trials evaluating conversion to resectability.',
          },
          {
            type: 'text',
            content:
              'Contraindications and cautions include **bowel obstruction, extensive adhesions preventing safe pneumoperitoneum, and inability to tolerate laparoscopy**. Reported morbidity is generally low (predominantly Clavien I–II — abdominal pain, transient ileus), but access injury and, rarely, bowel injury during trocar placement in a hostile abdomen must be respected.',
          },
          {
            type: 'trial',
            title: 'PIPAC safety and occupational profile',
            content:
              'Methodological analyses (Nowacki et al., multicentre) confirm that with the standardised **closed system, remote monitoring and filtered evacuation**, occupational exposure is minimal and procedural morbidity is low, supporting PIPAC as a repeatable outpatient-type regional therapy. The evidence base is maturing but remains predominantly phase I/II — randomised efficacy data are still emerging.',
            ref: 'Nowacki M, et al. Eur J Surg Oncol 2018;44:991–996; Alyami M, et al. Lancet Oncol 2019;20:e368–e377.',
          },
          {
            type: 'pitfall',
            title: 'PIPAC is not validated as curative-intent monotherapy',
            content:
              'Presenting PIPAC as an equivalent alternative to CRS+HIPEC for a resectable patient is a serious error. Its evidence base is largely **phase I/II with histologic and palliative endpoints**; in resectable disease, complete cytoreduction remains the standard of curative-intent care.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 14 ──────────────────────────────────────────────────────────────
  {
    id: 'ch14-epic-nips',
    number: '14',
    title: 'EPIC, NIPS & Emerging Regional Modalities',
    subtitle: 'Early postoperative IP chemotherapy, neoadjuvant IP/systemic therapy, normothermic IP chemo and intraperitoneal immunotherapy horizons',
    icon: 'Sparkles',
    reading_time_min: 26,
    level: 'Advanced',
    track: 'Regional Therapy',
    guidelines_version: 'PSOGI 2022 · Chicago Consensus 2020 · Yonemura NIPS protocols',
    learning_objectives: [
      'Describe early postoperative intraperitoneal chemotherapy (EPIC), its rationale, agents and toxicity trade-offs versus HIPEC',
      'Explain neoadjuvant intraperitoneal and systemic chemotherapy (NIPS) and its role in gastric peritoneal disease',
      'Understand normothermic intraperitoneal chemotherapy and long-course IP delivery',
      'Survey the horizon of intraperitoneal immunotherapy, catumaxomab and novel regional agents',
      'Integrate these modalities into a stage-of-disease framework alongside CRS+HIPEC and PIPAC',
    ],
    key_references: [
      'Sugarbaker PH. Early postoperative intraperitoneal chemotherapy as an adjuvant therapy. Dis Colon Rectum 1996.',
      'Yonemura Y, Canbay E, Ishibashi H. Neoadjuvant intraperitoneal/systemic chemotherapy (NIPS) for gastric peritoneal metastasis. World J Surg 2010.',
      'Elias D, Benizri E, Di Pietrantonio D, et al. Comparison of two kinds of intraperitoneal chemotherapy following complete cytoreduction. Ann Surg Oncol 2007.',
      'Heiss MM, Murawa P, Koralewski P, et al. Catumaxomab in malignant ascites (EPCAM). Int J Cancer 2010;127:2209–2221.',
      'Chicago Consensus Working Group. Ann Surg Oncol 2020;27:1794–1804.',
    ],
    sections: [
      {
        id: 'ch14-s1',
        title: 'Early Postoperative Intraperitoneal Chemotherapy (EPIC)',
        blocks: [
          {
            type: 'text',
            content:
              '**Early postoperative intraperitoneal chemotherapy (EPIC)** delivers **normothermic** cytotoxic drug into the abdomen through indwelling catheters on **postoperative days 1–5**, before adhesions seal off compartments. Its rationale is to treat residual microscopic disease during the critical early window and to attack tumour cells trapped in fresh fibrin before they are protected within scar. It can be used **instead of, or in addition to, HIPEC**.',
          },
          {
            type: 'text',
            content:
              'EPIC substitutes **prolonged dwell time and repeated cycles for hyperthermia**. Common agents are **5-fluorouracil (with or without a second drug such as mitomycin C or paclitaxel)** instilled daily, dwelled for a set period, then drained. Because there is no thermal synergy, EPIC relies on cell-cycle timing (5-FU is S-phase specific) and multiple postoperative days of exposure.',
          },
          {
            type: 'key',
            title: 'EPIC vs HIPEC — the trade-off',
            content:
              'HIPEC gives a single intraoperative, hyperthermic, uniformly distributed dose under direct vision; EPIC gives multiple normothermic doses postoperatively but with **less uniform distribution (adhesions/dependency) and higher rates of postoperative ileus, abdominal sepsis and neutropenia**. Some centres combine HIPEC + EPIC for additive early treatment, accepting higher morbidity.',
          },
          {
            type: 'pitfall',
            title: 'EPIC magnifies anastomotic and infectious risk',
            content:
              'Running cytotoxic 5-FU through the abdomen on postoperative days 1–5 while **fresh anastomoses are healing** raises concern for impaired healing, leak and intra-abdominal infection, and neutropenia compounds sepsis risk. EPIC is not "free" additional therapy — it carries a real morbidity cost that must be weighed against its adjuvant benefit.',
          },
          {
            type: 'trial',
            title: 'HIPEC vs EPIC after complete cytoreduction',
            content:
              'Elias and colleagues compared the two regional strategies after complete cytoreduction and found **greater morbidity with EPIC** (particularly septic and haematologic) for at best comparable oncologic control, contributing to the field\'s general preference for a single intraoperative HIPEC over multi-day EPIC in most indications — though EPIC retains selected use.',
            ref: 'Elias D, et al. Ann Surg Oncol 2007; Sugarbaker PH. Dis Colon Rectum 1996.',
          },
        ],
      },
      {
        id: 'ch14-s2',
        title: 'Neoadjuvant IP/Systemic Chemotherapy (NIPS)',
        blocks: [
          {
            type: 'text',
            content:
              '**Neoadjuvant intraperitoneal/systemic chemotherapy (NIPS)**, developed principally by Yonemura for **gastric peritoneal metastasis**, combines **intraperitoneal drug (e.g. taxanes — paclitaxel/docetaxel — via a subcutaneous port) with systemic chemotherapy (e.g. S-1)** before cytoreduction. The goal is to **reduce peritoneal tumour burden, sterilise peritoneal cytology, and convert marginal candidates to resectability**.',
          },
          {
            type: 'text',
            content:
              'Intraperitoneal **taxanes are particularly suited to NIPS** because of their high molecular weight and slow peritoneal clearance, giving a very favourable peritoneal-to-plasma AUC ratio and prolonged local exposure. NIPS is delivered as **repeated cycles through an implanted intraperitoneal port**, alternating with systemic therapy.',
          },
          {
            type: 'key',
            title: 'Cytology conversion as an endpoint',
            content:
              'A central NIPS objective is **conversion of positive to negative peritoneal cytology**, a strong prognostic marker in gastric cancer. Patients who convert to negative cytology and show radiologic/laparoscopic response are then selected for **cytoreduction ± HIPEC**, while non-responders are spared a futile major operation.',
          },
          {
            type: 'text',
            content:
              'NIPS embodies the **bidirectional principle** (IP + systemic) applied neoadjuvantly, and overlaps conceptually with PIPAC-based conversion strategies. Its strongest evidence base is in **gastric peritoneal disease**, where Japanese groups report meaningful conversion-to-resection rates in selected patients.',
          },
          {
            type: 'pearl',
            title: 'Use NIPS response to select who gets the big operation',
            content:
              'NIPS is as much a **selection tool as a treatment**: response (cytology conversion, falling PCI at re-laparoscopy) identifies the biology that will benefit from cytoreduction, while progression on NIPS reliably flags patients for whom CRS+HIPEC would be futile.',
          },
        ],
      },
      {
        id: 'ch14-s3',
        title: 'Normothermic & Long-Course IP Chemotherapy',
        blocks: [
          {
            type: 'text',
            content:
              'Beyond the intraoperative setting, **normothermic intraperitoneal chemotherapy** delivered through an indwelling port over weeks-to-months has an established role, most notably the **IP cisplatin/paclitaxel regimen for optimally debulked ovarian cancer (GOG-172)**, which demonstrated a survival advantage over IV therapy at the cost of significant catheter and toxicity morbidity. This is regional therapy without hyperthermia, relying on repeated long-dwell exposure.',
          },
          {
            type: 'text',
            content:
              'The **peritoneal port** enables outpatient IP delivery but introduces its own problems — **catheter blockage, infection, and inhomogeneous distribution** from adhesions — which limited the uptake of GOG-172-style regimens despite the survival signal and drove interest in the single-shot HIPEC and repeatable PIPAC alternatives.',
          },
          {
            type: 'key',
            title: 'Why hyperthermia is not always required',
            content:
              'Normothermic IP regimens show that **regional pharmacology (the peritoneal–plasma barrier) delivers benefit even without heat**, provided dwell time and repetition compensate. Hyperthermia adds penetration and drug potentiation but is one lever among several — dose, dwell time, repetition and distribution are the others.',
          },
          {
            type: 'trial',
            title: 'GOG-172 — IP chemotherapy improves survival in ovarian cancer',
            content:
              'In optimally debulked stage III ovarian cancer, **intraperitoneal cisplatin/paclitaxel improved median overall survival to ~65.6 months versus 49.7 months for IV therapy** — one of the largest survival gains reported in the disease — but with substantially more catheter-related and systemic toxicity, limiting adoption and motivating heated/aerosolised alternatives.',
            ref: 'Armstrong DK, et al. N Engl J Med 2006;354:34–43 (GOG-172).',
          },
          {
            type: 'pitfall',
            title: 'Catheter morbidity can erase the pharmacologic advantage',
            content:
              'Long-course IP delivery only works if the catheter works: **blockage, infection and adhesion-related maldistribution** cause many patients to discontinue therapy prematurely. The regional pharmacologic benefit is real, but the delivery platform is the practical bottleneck — a lesson that shaped the move toward single-shot HIPEC and repeatable PIPAC.',
          },
        ],
      },
      {
        id: 'ch14-s4',
        title: 'Immunotherapy IP & the Emerging Horizon',
        blocks: [
          {
            type: 'text',
            content:
              'The peritoneal cavity is an attractive compartment for **regional immunotherapy** because agents can be concentrated locally. The furthest-developed example is **catumaxomab**, a trifunctional anti-EpCAM/anti-CD3 bispecific antibody given intraperitoneally for **malignant ascites**, which reduced the need for paracentesis and improved puncture-free survival in EpCAM-positive tumours.',
          },
          {
            type: 'list',
            title: 'Emerging intraperitoneal modalities',
            items: [
              'Intraperitoneal bispecific/trifunctional antibodies (catumaxomab and successors) for EpCAM+ ascites',
              'Intraperitoneal immune-checkpoint inhibitors and cytokines (regional delivery to boost local immunity)',
              'Intraperitoneal CAR-T and cellular therapies targeting peritoneal antigens (early phase)',
              'Oncolytic viruses and gene-therapy vectors delivered regionally',
              'Aerosolised nanoparticle and targeted-drug formulations building on the PIPAC platform',
              'Pressurised aerosol immunotherapy combining PIPAC physics with immuno-oncology agents',
            ],
          },
          {
            type: 'key',
            title: 'The compartment advantage for immunotherapy',
            content:
              'Delivering immunotherapy **intraperitoneally concentrates the agent at the tumour–immune interface** and may achieve local immune activation at doses that would be systemically toxic. This regional-immunotherapy rationale is the same peritoneal–plasma-barrier logic that underpins cytotoxic IP therapy, now applied to biologics and cellular products.',
          },
          {
            type: 'trial',
            title: 'Catumaxomab in malignant ascites',
            content:
              'A pivotal randomised trial of **intraperitoneal catumaxomab versus paracentesis alone** in EpCAM-positive malignant ascites showed a significant increase in **puncture-free survival and time to next paracentesis**, leading to its regulatory approval — a proof of concept that regional immunotherapy can produce clinically meaningful control of peritoneal disease.',
            ref: 'Heiss MM, et al. Int J Cancer 2010;127:2209–2221.',
          },
          {
            type: 'pearl',
            title: 'Think in a stage-of-disease framework',
            content:
              'These modalities are complementary, not competing: **NIPS/systemic + PIPAC** for downstaging and unresectable disease, **CRS + HIPEC** for resectable disease, **EPIC/normothermic IP** as adjuvant options, and **regional immunotherapy** for ascites control and future integration. Match the modality to the disease stage, resectability and treatment intent rather than defending a single technique.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 15 ──────────────────────────────────────────────────────────────
  {
    id: 'ch15-eras-periop',
    number: '15',
    title: 'Perioperative Management & ERAS in CRS+HIPEC',
    subtitle: 'Prehabilitation, intraoperative fluid and haemodynamics, coagulopathy, glycaemia, analgesia, nutrition and thromboprophylaxis',
    icon: 'HeartPulse',
    reading_time_min: 26,
    level: 'Core',
    track: 'Perioperative Care',
    guidelines_version: 'ERAS Society CRS+HIPEC guidelines 2020 · PSOGI 2022 · Chicago Consensus 2020',
    learning_objectives: [
      'Design a prehabilitation and preoperative optimisation pathway for the CRS+HIPEC patient',
      'Manage intraoperative fluid balance and haemodynamics through the distinct phases of cytoreduction and HIPEC',
      'Recognise and correct the coagulopathy and metabolic derangements induced by CRS and HIPEC',
      'Manage oxaliplatin-carrier hyperglycaemia and the risk of rebound hypoglycaemia and hyponatraemia',
      'Apply ERAS principles — analgesia, early nutrition, thromboprophylaxis — adapted to the physiology of CRS+HIPEC',
    ],
    key_references: [
      'Hübner M, Kusamura S, Villeneuve L, et al. Guidelines for perioperative care in CRS+HIPEC: ERAS Society recommendations. Eur J Surg Oncol 2020;46:2292–2310.',
      'Raspé C, Flöther L, Schneider R, et al. Best practice for perioperative management of patients with CRS and HIPEC. Eur J Surg Oncol 2017;43:1013–1027.',
      'Colantonio L, Claroni C, Fabrizi L, et al. A randomized trial of goal-directed fluid therapy in CRS+HIPEC. J Gastrointest Surg 2015.',
      'Chicago Consensus Working Group. Perioperative management. Ann Surg Oncol 2020;27:1794–1804.',
      'Gustafsson UO, Scott MJ, Hubner M, et al. ERAS Society guidelines (colorectal). World J Surg 2019;43:659–695.',
    ],
    sections: [
      {
        id: 'ch15-s1',
        title: 'Prehabilitation & Preoperative Optimisation',
        blocks: [
          {
            type: 'text',
            content:
              'CRS+HIPEC is a **prolonged, high-physiologic-stress operation** (often 6–12+ hours with major fluid shifts), and patient resilience going in strongly predicts recovery. **Prehabilitation** — structured exercise, nutritional optimisation, and psychological preparation over the weeks before surgery — aims to raise the patient\'s physiologic reserve to withstand the insult.',
          },
          {
            type: 'list',
            title: 'Preoperative optimisation targets',
            items: [
              'Nutritional assessment and repletion — correct hypoalbuminaemia and address sarcopenia/malnutrition',
              'Exercise-based prehabilitation to raise functional/aerobic capacity',
              'Correction of anaemia (iron ± ESA where appropriate) to reduce transfusion need',
              'Smoking and alcohol cessation',
              'Optimisation of comorbidities (cardiac, pulmonary, renal, glycaemic control)',
              'Multidisciplinary review confirming resectability and goals of care',
            ],
          },
          {
            type: 'key',
            title: 'Sarcopenia and hypoalbuminaemia predict poor outcome',
            content:
              'Low muscle mass (**sarcopenia**) and **hypoalbuminaemia** are consistent predictors of major morbidity, prolonged stay and mortality after CRS+HIPEC. Identifying and correcting them preoperatively — and factoring them into the risk-benefit discussion — is a core part of patient selection, not an afterthought.',
          },
          {
            type: 'text',
            content:
              'ERAS-CRS pathways also include **carbohydrate loading and avoidance of prolonged fasting**, patient education setting recovery expectations, and — because these operations frequently need a stoma — **preoperative stoma siting and counselling**. Mechanical bowel preparation with oral antibiotics is used per colorectal ERAS practice when colonic resection is anticipated.',
          },
          {
            type: 'pearl',
            title: 'Prehabilitation buys reserve for a marathon operation',
            content:
              'Treat the weeks before CRS+HIPEC as an **intervention window**, not dead time: even short-course prehabilitation and anaemia/nutrition correction measurably improve the reserve a patient brings to a 6–12 hour operation with litres of third-space loss.',
          },
        ],
      },
      {
        id: 'ch15-s2',
        title: 'Intraoperative Fluid & Haemodynamics',
        blocks: [
          {
            type: 'text',
            content:
              'The operation has **distinct physiologic phases**: the **cytoreduction phase** (large evaporative and third-space losses, blood loss from raw surfaces), the **HIPEC phase** (systemic hyperthermia, hyperdynamic circulation, further fluid demand), and the **post-perfusion/reconstruction phase**. Fluid and haemodynamic management must be tailored to each rather than run at a fixed rate.',
          },
          {
            type: 'key',
            title: 'Goal-directed fluid therapy',
            content:
              '**Goal-directed fluid therapy (GDFT)** — titrating fluid and vasoactive drugs to dynamic measures (stroke-volume variation, cardiac output) rather than fixed volume or CVP — reduces both under-resuscitation (AKI, hypoperfusion) and over-resuscitation (bowel oedema, anastomotic risk, pulmonary complications). It is the ERAS-recommended approach and particularly valuable given the huge, variable losses of CRS.',
          },
          {
            type: 'text',
            content:
              'During the **HIPEC phase**, systemic hyperthermia produces vasodilation, tachycardia and increased cardiac output and oxygen consumption; fluid requirement rises, and active cooling (cooling blanket, cold fluids, reduced warming) prevents dangerous core hyperthermia. Vasopressors are used judiciously — excessive vasoconstriction imperils fresh anastomoses and bowel perfusion.',
          },
          {
            type: 'pitfall',
            title: 'Over-resuscitation is as harmful as under-resuscitation',
            content:
              'The reflex to pour in crystalloid against big losses causes **bowel wall oedema, impaired anastomotic healing, prolonged ileus and pulmonary complications**. GDFT exists precisely to avoid both extremes; a positive balance of many litres of crystalloid is a red flag, not a badge of diligence.',
          },
          {
            type: 'text',
            content:
              'Standard intraoperative care includes **invasive arterial and often central monitoring, active core-temperature management, lung-protective ventilation, and maintenance of normothermia outside the HIPEC phase** (the patient is at risk of hypothermia during the long cytoreduction and again after perfusate drainage).',
          },
        ],
      },
      {
        id: 'ch15-s3',
        title: 'Coagulopathy, Glycaemia & Electrolytes',
        blocks: [
          {
            type: 'text',
            content:
              'CRS+HIPEC induces a **multifactorial coagulopathy**: consumption and dilution from blood loss and resuscitation, hyperthermia-related platelet dysfunction, and — with **oxaliplatin specifically — a described intra/postoperative coagulopathy and thrombocytopenia**. Coagulation is monitored (conventional coags ± viscoelastic testing/TEG/ROTEM) and corrected with targeted product (platelets, fibrinogen, FFP) rather than blind transfusion.',
          },
          {
            type: 'key',
            title: 'The oxaliplatin glucose-carrier metabolic cascade',
            content:
              'Because oxaliplatin HIPEC uses a **5% dextrose carrier**, glucose is absorbed across the peritoneum, causing **severe intraoperative hyperglycaemia**; after the perfusate is drained, a **rebound hypoglycaemia** can follow. The electrolyte-free carrier also causes **hyponatraemia**. Anaesthesia must monitor glucose and sodium frequently throughout and after oxaliplatin HIPEC and treat proactively.',
          },
          {
            type: 'list',
            title: 'Metabolic monitoring during/after oxaliplatin HIPEC',
            items: [
              'Frequent point-of-care glucose — treat hyperglycaemia with insulin during perfusion',
              'Anticipate rebound hypoglycaemia after perfusate drainage — continue glucose monitoring into recovery',
              'Monitor and correct hyponatraemia from the glucose (electrolyte-free) carrier',
              'Watch potassium and other electrolytes shifted by fluid flux and insulin therapy',
              'Serial lactate/acid-base and coagulation profiles',
            ],
          },
          {
            type: 'text',
            content:
              'Mitomycin C regimens avoid the glucose-carrier problem but carry **delayed myelosuppression** (second-week leukopenia/thrombocytopenia) that is a postoperative rather than intraoperative concern. Cisplatin regimens demand attention to **renal function and electrolytes (magnesium, potassium wasting)** in addition to the sodium-thiosulfate renal protection covered in Chapter 12.',
          },
          {
            type: 'pearl',
            title: 'Keep checking glucose after the abdomen is drained',
            content:
              'The classic oxaliplatin trap is treating intraoperative hyperglycaemia aggressively, then **missing the rebound hypoglycaemia** once the glucose source (the drained perfusate) is gone. Continue frequent glucose checks into the early recovery period, not just during perfusion.',
          },
        ],
      },
      {
        id: 'ch15-s4',
        title: 'Analgesia, Nutrition & Thromboprophylaxis',
        blocks: [
          {
            type: 'text',
            content:
              'ERAS-CRS analgesia is **multimodal and opioid-sparing**: paracetamol, judicious NSAIDs (balanced against renal risk in a fluid-labile patient), and regional techniques. **Thoracic epidural analgesia** is commonly used for the large midline incision and improves early mobilisation and pulmonary function, though it must be balanced against intraoperative coagulopathy and haemodynamic instability (epidural-induced vasodilation on top of HIPEC vasodilation).',
          },
          {
            type: 'key',
            title: 'Epidural — benefit vs the coagulopathy caveat',
            content:
              'A thoracic epidural aids the post-CRS recovery (pain control, mobilisation, reduced ileus), but the **HIPEC-associated coagulopathy raises the stakes of catheter placement and removal**. Timing insertion before the coagulopathic phase and confirming corrected coagulation before removal are essential to avoid epidural haematoma.',
          },
          {
            type: 'text',
            content:
              'Nutrition follows ERAS principles adapted to the operation: **early oral/enteral intake when feasible**, but a **lower threshold for nutritional support (enteral or parenteral)** than in routine colorectal surgery, because prolonged ileus, multiple anastomoses, high-output stomas and short-bowel physiology are common. Malnutrition is both a preoperative risk factor and a postoperative reality to be managed actively.',
          },
          {
            type: 'key',
            title: 'Extended thromboprophylaxis',
            content:
              'CRS+HIPEC patients are at **high VTE risk** — cancer, a long operation, prolonged immobility. Standard practice is **mechanical prophylaxis plus pharmacologic prophylaxis** (once bleeding risk permits), and **extended (up to ~4 weeks) post-discharge LMWH prophylaxis** as recommended for major cancer surgery. Balance against the early coagulopathy and bleeding risk when timing the first pharmacologic dose.',
          },
          {
            type: 'trial',
            title: 'ERAS pathways in CRS+HIPEC improve recovery',
            content:
              'The **ERAS Society CRS+HIPEC guidelines (Hübner et al. 2020)** synthesise evidence that structured perioperative pathways — prehabilitation, GDFT, multimodal analgesia, early nutrition and extended thromboprophylaxis — reduce complications and length of stay without compromising safety, and should be adapted (not applied verbatim) to the unique physiology of HIPEC.',
            ref: 'Hübner M, Kusamura S, Villeneuve L, et al. Eur J Surg Oncol 2020;46:2292–2310.',
          },
          {
            type: 'pitfall',
            title: 'Do not apply generic colorectal ERAS uncritically',
            content:
              'CRS+HIPEC is not a standard colectomy: **fixed low-volume fluid targets, routine early full feeding, and reflexive NSAID use** can harm a patient with multiple anastomoses, huge third-space losses and renal/coagulation stress. ERAS principles apply, but each element must be adapted to the operation\'s physiology.',
          },
        ],
      },
    ],
  },

  // ── CHAPTER 16 ──────────────────────────────────────────────────────────────
  {
    id: 'ch16-complications',
    number: '16',
    title: 'Complications, Critical Care & Reoperation',
    subtitle: 'Anastomotic leak, fistula, pancreatic leak, haemorrhage, sepsis, Clavien-Dindo/CDC grading, 90-day mortality drivers and failure-to-rescue',
    icon: 'AlertTriangle',
    reading_time_min: 26,
    level: 'Core',
    track: 'Perioperative Care',
    guidelines_version: 'CTCAE/Clavien-Dindo · Chicago Consensus 2020 · PSOGI 2022',
    learning_objectives: [
      'Recognise, grade and manage the major complications of CRS+HIPEC — leak, fistula, pancreatic leak, haemorrhage and sepsis',
      'Apply the Clavien-Dindo classification and CDC/CTCAE grading to CRS+HIPEC morbidity',
      'Identify the drivers of 90-day mortality and why 90-day (not 30-day) reporting is the standard',
      'Set rational thresholds for reoperation and image-guided intervention',
      'Understand failure-to-rescue and the role of case volume and structured programmes in reducing it',
    ],
    key_references: [
      'Dindo D, Demartines N, Clavien PA. Classification of surgical complications. Ann Surg 2004;240:205–213.',
      'Chua TC, Yan TD, Saxena A, Morris DL. Should CRS+HIPEC be regionalised? Ann Surg 2009;249:900–907.',
      'Baratti D, Kusamura S, Deraco M. Postoperative complications after CRS+HIPEC. Ann Surg Oncol 2010.',
      'Ghabra S, Chang C, Sugarbaker PH. Morbidity and mortality of CRS+HIPEC — a systematic review. J Surg Oncol.',
      'Kusamura S, Baratti D, Deraco M. Learning curve and surgical outcome for CRS+HIPEC. J Surg Oncol 2013.',
    ],
    sections: [
      {
        id: 'ch16-s1',
        title: 'The Spectrum of Major Complications',
        blocks: [
          {
            type: 'text',
            content:
              'CRS+HIPEC carries **grade III–IV morbidity of roughly 25–40% and perioperative mortality of 2–5%** in experienced hands — comparable to other major upper-GI/HPB operations but concentrated in a small number of high-consequence complications. The dominant events are **anastomotic leak, enterocutaneous fistula, pancreatic leak, postoperative haemorrhage, intra-abdominal sepsis, and drug-related myelosuppression/AKI**.',
          },
          {
            type: 'table',
            title: 'Major CRS+HIPEC complications (approximate frequency)',
            headers: ['Complication', 'Approx. rate', 'Key drivers'],
            rows: [
              ['Grade III–IV morbidity (overall)', '~25–40%', 'PCI/extent, number of anastomoses, blood loss, comorbidity'],
              ['Anastomotic leak', '~5–15%', 'Number of anastomoses, low pelvic anastomosis, HIPEC, malnutrition'],
              ['Enterocutaneous / entero-atmospheric fistula', '~3–15%', 'Bowel stripping, repeated enterotomies, sepsis'],
              ['Pancreatic leak/fistula', '~2–8%', 'LUQ dissection, splenectomy, pancreatic-tail thermal injury'],
              ['Postoperative haemorrhage', '~2–7%', 'Raw peritonectomised surfaces, HIPEC coagulopathy'],
              ['Haematologic (neutropenia) — mitomycin C', 'up to ~10–30%', '2nd-week nadir; dose/drug dependent'],
              ['Perioperative mortality (90-day)', '~2–5%', 'Failure-to-rescue after leak/sepsis, comorbidity'],
            ],
            ref: 'Chua TC, et al. Ann Surg 2009; Baratti D, et al. Ann Surg Oncol 2010.',
          },
          {
            type: 'key',
            title: 'Extent of surgery predicts morbidity',
            content:
              'The consistent independent predictors of major complications are **high PCI/extent of peritonectomy, number of bowel resections and anastomoses, operative blood loss/transfusion, and patient factors (age, nutrition, comorbidity)**. Morbidity is, to a large degree, a dose-response function of how much surgery the disease demanded.',
          },
          {
            type: 'pearl',
            title: 'Most deaths follow a treatable index complication',
            content:
              'Perioperative deaths in CRS+HIPEC rarely come from an untreatable catastrophe; they usually follow a **recognisable, initially survivable complication (leak, bleed, sepsis) that was detected or rescued too late**. The lever for lowering mortality is early recognition and decisive rescue — not avoiding the complication alone.',
          },
        ],
      },
      {
        id: 'ch16-s2',
        title: 'Leak, Fistula, Pancreatic Leak & Haemorrhage',
        blocks: [
          {
            type: 'text',
            content:
              '**Anastomotic leak** typically presents in the first postoperative week with fever, tachycardia, ileus, rising inflammatory markers, or feculent/enteric drain output. Management ranges from antibiotics and image-guided drainage (contained leak, stable patient) to **reoperation with washout, defunctioning stoma or takedown** for generalised peritonitis or instability. In a HIPEC field, tissue is more friable and the threshold to divert rather than re-anastomose is lower.',
          },
          {
            type: 'text',
            content:
              '**Enterocutaneous and entero-atmospheric fistulae** arise from bowel stripping, repeated enterotomies and sepsis. They are managed by **sepsis source control, nutritional support (often parenteral), skin/effluent protection, and delayed definitive repair** once inflammation settles — an entero-atmospheric fistula in an open abdomen is one of the most difficult problems in the field.',
          },
          {
            type: 'key',
            title: 'Pancreatic leak — the LUQ price',
            content:
              '**Pancreatic leak/fistula** follows left-upper-quadrant dissection, splenectomy and thermal injury to the pancreatic tail. It presents as **high drain amylase, LUQ collection, or sepsis**. Most are managed conservatively with **continued drainage, octreotide and nutrition**; check drain amylase routinely after LUQ cytoreduction so a leak is caught before it becomes an infected collection.',
          },
          {
            type: 'text',
            content:
              '**Postoperative haemorrhage** stems from raw peritonectomised surfaces (diaphragm, splenic bed, pelvis) compounded by HIPEC-induced coagulopathy. Management is **resuscitation, correction of coagulopathy, and reoperation for ongoing/large-volume bleeding**; a dry field achieved *before* HIPEC (Chapter 10) is the best prevention.',
          },
          {
            type: 'pitfall',
            title: 'Tachycardia after CRS is a leak until proven otherwise',
            content:
              'Unexplained **persistent tachycardia, a rising white cell count/CRP, new atrial fibrillation, or failure to progress** in the first postoperative week must trigger prompt evaluation (CT with contrast, drain amylase/character) for a leak or collection. Attributing it to "post-op physiology" and waiting is the classic path to failure-to-rescue.',
          },
          {
            type: 'trial',
            title: 'Complication rates and their drivers',
            content:
              'Baratti and colleagues\' analysis of CRS+HIPEC morbidity identified **extent of cytoreduction, number of anastomoses and drug regimen** as principal determinants of grade III–IV complications, and demonstrated that structured management protocols and experience reduce the clinical impact of complications when they occur.',
            ref: 'Baratti D, Kusamura S, Deraco M. Ann Surg Oncol 2010.',
          },
        ],
      },
      {
        id: 'ch16-s3',
        title: 'Grading: Clavien-Dindo, CDC & CTCAE',
        blocks: [
          {
            type: 'text',
            content:
              'Consistent complication grading is essential for auditing and comparing CRS+HIPEC programmes. The **Clavien-Dindo classification** grades a complication by the **therapy required to treat it**, which removes much of the subjectivity of "minor/major" labels and is the standard for surgical morbidity reporting.',
          },
          {
            type: 'table',
            title: 'Clavien-Dindo classification',
            headers: ['Grade', 'Definition'],
            rows: [
              ['I', 'Any deviation from normal course; no pharmacologic (beyond permitted), surgical, endoscopic or radiologic intervention'],
              ['II', 'Requires pharmacologic treatment beyond grade I (incl. transfusion, TPN)'],
              ['IIIa', 'Requires intervention — not under general anaesthesia'],
              ['IIIb', 'Requires intervention — under general anaesthesia'],
              ['IVa', 'Life-threatening; single-organ dysfunction (incl. dialysis)'],
              ['IVb', 'Life-threatening; multi-organ dysfunction'],
              ['V', 'Death of the patient'],
            ],
            ref: 'Dindo D, Demartines N, Clavien PA. Ann Surg 2004;240:205–213.',
          },
          {
            type: 'key',
            title: 'CTCAE for drug/adverse-event toxicity',
            content:
              'While Clavien-Dindo grades **surgical** complications, the **NCI CTCAE (Common Terminology Criteria for Adverse Events)** grades **chemotherapy toxicity** (myelosuppression, nephrotoxicity, neuropathy) on a 1–5 scale. Reporting CRS+HIPEC morbidity well requires **both systems** — surgical events by Clavien-Dindo, drug toxicity by CTCAE — because the operation combines a major resection with regional chemotherapy.',
          },
          {
            type: 'text',
            content:
              'The **Comprehensive Complication Index (CCI)** aggregates *all* of a patient\'s complications into a single 0–100 score, capturing the burden of multiple lower-grade events that the highest-single-grade approach misses — increasingly used in CRS+HIPEC series where patients often accrue several complications.',
          },
          {
            type: 'pearl',
            title: 'Report both surgical grade and drug toxicity',
            content:
              'A program that only reports Clavien-Dindo **undercounts the harm of HIPEC drug toxicity** (e.g. mitomycin neutropenia, cisplatin AKI). Auditing outcomes and comparing regimens (as PRODIGE 7 did) requires CTCAE alongside surgical grading — otherwise the toxicity cost of the perfusion is invisible.',
          },
        ],
      },
      {
        id: 'ch16-s4',
        title: '90-Day Mortality, Reoperation & Failure-to-Rescue',
        blocks: [
          {
            type: 'text',
            content:
              'CRS+HIPEC outcomes should be reported at **90 days, not 30 days**, because a meaningful share of deaths — from delayed leaks, fistula-associated sepsis, and drug toxicity — occur beyond the traditional 30-day window. Using 30-day mortality **systematically underestimates** the true risk of the operation.',
          },
          {
            type: 'key',
            title: 'Drivers of 90-day mortality',
            content:
              'The principal drivers are **anastomotic leak and intra-abdominal sepsis, postoperative haemorrhage, and drug-related organ toxicity (renal, haematologic)**, amplified by patient factors (age, sarcopenia, hypoalbuminaemia, comorbidity) and by the extent of surgery. Death is usually the end of a chain that began with an initially survivable complication.',
          },
          {
            type: 'text',
            content:
              '**Reoperation thresholds** must be lower and more decisive than in routine surgery. Indications include **generalised peritonitis, haemodynamic instability from bleeding or sepsis, and a leak not controllable by drainage**. In an unstable patient, a **damage-control** approach — washout, control of the source, defunctioning stoma, temporary closure — is preferable to a definitive repair on friable, HIPEC-treated tissue. Contained, stable problems are managed by **image-guided drainage** first.',
          },
          {
            type: 'key',
            title: 'Failure-to-rescue',
            content:
              '**Failure-to-rescue** — death following a complication that could have been survived — is the metric that best distinguishes high- from low-performing programmes. Two centres may have similar *complication* rates but very different *mortality*, and the difference is the ability to **detect early and rescue decisively**. This is the strongest argument for concentrating CRS+HIPEC in experienced, resourced, high-volume centres with ready access to interventional radiology, critical care and reoperation.',
          },
          {
            type: 'trial',
            title: 'Volume, learning curve and rescue',
            content:
              'Kusamura and colleagues documented a **learning curve of roughly 100–140 procedures** to stabilise morbidity and completeness of cytoreduction, and multi-institutional data (Chua et al.) support **regionalisation** of CRS+HIPEC to high-volume centres, where lower failure-to-rescue drives better survival despite similar complication rates.',
            ref: 'Kusamura S, et al. J Surg Oncol 2013; Chua TC, et al. Ann Surg 2009;249:900–907.',
          },
          {
            type: 'pitfall',
            title: 'Waiting for certainty is how patients die',
            content:
              'The commonest error in the deteriorating CRS patient is **serial observation and repeated "let\'s recheck in the morning"** while a leak or bleed evolves. Given the friable HIPEC field and limited physiologic reserve, the bias must be toward **early imaging, early drainage, and early return to theatre** — decisive rescue, not watchful waiting.',
          },
        ],
      },
    ],
  },
]
