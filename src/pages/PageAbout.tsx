import { ShieldCheck, CheckCircle2, Globe, ClipboardList, GraduationCap, Award, Link2, Mail, Copyright } from 'lucide-react'
import { PC_DISEASES } from '../data/diseases'
import { LANDMARK_TRIALS } from '../data/landmark_trials'
import { QUIZ_QUESTIONS } from '../data/quiz_questions'
import { LEARN_CHAPTERS } from '../data/learn_content'
import { useAppI18n } from '../App'
import { CreatorPhoto, InstitutionLogo } from '../components/Institutions'

function FacultyCard({
  file, initials, name, role, meta, bio, tags, accent, objectPosition = 'center',
}: {
  file: string; initials: string; name: string; role: string; meta: string; bio: string[]; tags: string[]; accent: 'gold' | 'purple'; objectPosition?: string
}) {
  return (
    <div className="card p-5">
      <div className="flex items-start gap-3.5">
        <div className="flex-shrink-0">
          <CreatorPhoto file={file} initials={initials} size={56} ring={accent === 'gold' ? 'gold' : 'white'} objectPosition={objectPosition} />
        </div>
        <div className="min-w-0">
          <h2 className="t-h3 leading-tight">{name}</h2>
          <p className="text-xs font-semibold text-primary-700 mt-1">{role}</p>
          <p className="t-small mt-0.5">{meta}</p>
        </div>
      </div>
      <div className="mt-3.5 space-y-2 t-body">
        {bio.map((b, i) => <p key={i}>{b}</p>)}
      </div>
      {tags.length > 0 && (
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {tags.map(tag => <span key={tag} className="badge badge-purple">{tag}</span>)}
        </div>
      )}
    </div>
  )
}

export default function PageAbout() {
  const { t } = useAppI18n()
  return (
    <div className="wrap-read pt-6 lg:pt-12 pb-8 space-y-6 lg:space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <div className="eyebrow mb-1"><Award size={13} /> {t('about.the_academy')}</div>
        <h1 className="t-h1">{t('about.page_title')}</h1>
        <div className="rule-gold mt-2" />
      </div>

      {/* Authorship & Copyright statement */}
      <div className="relative overflow-hidden rounded-2xl bg-tsinghua p-5 text-white shadow-lift">
        <div className="eyebrow !text-gold-300 mb-2"><Copyright size={12} /> {t('about.copyright_label')}</div>
        <p className="text-[15px] leading-[1.7] text-white/90">
          Authored and developed by <strong className="text-white">Dr. Pablo Lozano Lominchar</strong> (author),
          in collaboration with <strong className="text-white">Prof. Yan Li</strong> (co-author), in association with
          {' '}<strong className="text-white">Tsinghua University</strong> and
          {' '}<strong className="text-white">Beijing Tsinghua Changgung Hospital (清华长庚医院)</strong>.
        </p>
        <p className="mt-2.5 text-[12.5px] leading-[1.6] text-white/70">
          © 2026 Dr. Pablo Lozano Lominchar &amp; Prof. Yan Li. All rights reserved. Provided for educational use only;
          no part of the content, design or code may be reproduced, redistributed or commercialised without the
          authors' written permission.
        </p>
      </div>

      {/* Faculty */}
      <div className="space-y-3">
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-5">
        <FacultyCard
          accent="gold"
          file="yan-li.jpg"
          initials="YL"
          name="Prof. Yan Li, MD PhD"
          role="Co-Author · Senior Faculty"
          meta="Peritoneal Surface Malignancy · Tsinghua University · BTCH"
          bio={[
            'Internationally recognised authority in cytoreductive surgery and HIPEC, leading one of the largest peritoneal surface malignancy programmes in China at Beijing Tsinghua Changgung Hospital.',
            'Pioneer in bidirectional therapy, gastric peritoneal metastases and the standardisation of CRS+HIPEC across high-volume centres.',
          ]}
          tags={['CRS+HIPEC', 'Gastric PM', 'PIPAC', 'Peritoneal Oncology']}
        />
        <FacultyCard
          accent="purple"
          file="pablo-lozano.jpg"
          initials="PL"
          name="Pablo Lozano Lominchar, MD, PhD, EBPSM"
          role="Author · Consultant Surgeon, Surgical Oncology"
          meta="Peritoneal Surface Malignancies, Sarcoma & Complex Pelvic Surgery"
          bio={[
            'Hospital General Universitario Gregorio Marañón, Madrid, Spain',
            'Associate Professor of Surgery – Complutense University of Madrid',
            'Board Member – Spanish Association of Surgeons (AEC), Section of Sarcoma and Mesenchymal Tumors',
          ]}
          tags={[]}
        />
        </div>
        <div className="flex gap-2">
          <a href="https://orcid.org/0000-0002-5413-8449" target="_blank" rel="noopener noreferrer"
            className="flex-1 btn-secondary text-sm"><Link2 size={14} /> ORCID</a>
          <a href="mailto:lozanon57@hotmail.com"
            className="flex-1 btn-secondary text-sm"><Mail size={14} /> {t('about.contact')}</a>
        </div>
      </div>

      {/* Institutions */}
      <div className="card p-5">
        <h2 className="section-title text-base mb-3.5 flex items-center gap-2">
          <Globe size={16} className="text-primary-700" /> {t('about.institutions')}
        </h2>
        <div className="flex items-center justify-center gap-5 py-2 mb-3 rounded-xl bg-primary-50/50">
          <InstitutionLogo which="tsinghua" theme="light" className="h-10 max-w-[44%]" />
          <span className="w-px h-9 bg-line" />
          <InstitutionLogo which="btch" theme="light" className="h-10 max-w-[50%]" />
        </div>
        <div className="space-y-3.5 text-[15px] leading-[1.6]">
          <div className="flex gap-3">
            <span className="w-1 rounded-full bg-gold-sheen flex-shrink-0" />
            <p className="text-ink-soft"><strong className="text-ink">Tsinghua University (清华大学)</strong><br />
              School of Clinical Medicine — Peritoneal Surface Oncology</p>
          </div>
          <div className="flex gap-3">
            <span className="w-1 rounded-full bg-primary-600 flex-shrink-0" />
            <p className="text-ink-soft"><strong className="text-ink">Beijing Tsinghua Changgung Hospital (清华长庚医院)</strong><br />
              Department of Peritoneal Cancer Surgery</p>
          </div>
        </div>
      </div>

      {/* Pedagogy */}
      <div className="callout-key">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap size={16} className="text-primary-700" />
          <span className="section-title text-base">{t('about.teaching_method')}</span>
        </div>
        <p className="text-ink-soft">
          A structured curriculum with explicit learning objectives, landmark-trial and clinical-pearl callouts,
          and spaced-repetition self-assessment — engineered for board-level mastery of peritoneal surface oncology.
        </p>
      </div>

      {/* Content validation */}
      <div className="card p-5 border-l-4 border-l-primary-600">
        <div className="flex items-center gap-2 mb-3.5">
          <ShieldCheck size={16} className="text-primary-700" />
          <h2 className="section-title text-base">{t('about.content_validation')}</h2>
        </div>
        <div className="space-y-3.5 text-[15px] leading-[1.6] text-ink-soft">
          {[
            'All clinical content authored and reviewed by board-certified surgical oncologists specialised in peritoneal surface oncology.',
            <>Benchmarked against <strong>NCCN 2024–2025</strong>, <strong>ESMO 2023–2024</strong>, <strong>PSOGI Consensus 2022</strong>, <strong>Chicago Consensus 2020</strong> and <strong>JPGA</strong> guidelines.</>,
            'Decision algorithms based on published flowcharts and expert consensus (Sugarbaker, Glehen, Li, PSOGI Working Group).',
            'Landmark-trial data cross-checked against original publications (PubMed PMID verified).',
          ].map((txt, i) => (
            <div key={i} className="flex gap-2.5">
              <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 flex-shrink-0" />
              <p>{txt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI declaration */}
      <div className="callout-pearl">
        <div className="flex items-start gap-2.5">
          <ClipboardList size={15} className="text-gold-700 mt-0.5 flex-shrink-0" />
          <div className="text-[13px] text-ink-soft leading-[1.65]">
            <strong className="text-gold-800">AI-Assisted Development:</strong> The structure, classification framework
            and database architecture were developed with AI assistance. All clinical data, dosages, thresholds and
            medical decisions were authored and verified by qualified specialists. AI was not used to generate clinical
            content autonomously.
          </div>
        </div>
      </div>

      {/* Version */}
      <div className="card p-5">
        <h3 className="section-title text-base mb-3.5">{t('about.version_changelog')}</h3>
        <div className="space-y-3.5">
          <div className="flex gap-3">
            <span className="text-xs font-mono font-semibold bg-primary-700 text-white px-2 py-0.5 rounded h-fit">v2.0</span>
            <div>
              <p className="text-sm font-semibold text-ink">2026 — Tsinghua / BTCH Edition</p>
              <p className="text-[13px] text-ink-muted leading-relaxed mt-0.5">
                Academy design · {LEARN_CHAPTERS.length} teaching chapters · {QUIZ_QUESTIONS.length} board questions ·
                {' '}{LANDMARK_TRIALS.length} landmark trials · {PC_DISEASES.length} PC entities · Prof. Yan Li co-author
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-primary-50/60 rounded-2xl p-5">
        <p className="text-[13px] text-ink-muted text-center leading-[1.7]">
          {t('about.disclaimer_footer')}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] text-ink-muted/70">
        <span>Tsinghua University · Beijing Tsinghua Changgung Hospital</span>
        <span>·</span>
        <span>© 2026</span>
      </div>
    </div>
  )
}
