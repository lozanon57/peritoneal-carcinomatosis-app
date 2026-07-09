import { ShieldCheck, CheckCircle2, Globe, ClipboardList, GraduationCap, Award, Mail, Link2 } from 'lucide-react'
import { PC_DISEASES } from '../data/diseases'
import { LANDMARK_TRIALS } from '../data/landmark_trials'
import { QUIZ_QUESTIONS } from '../data/quiz_questions'
import { LEARN_CHAPTERS } from '../data/learn_content'

function FacultyCard({
  initials, name, role, meta, bio, tags, accent,
}: {
  initials: string; name: string; role: string; meta: string; bio: string[]; tags: string[]; accent: 'gold' | 'purple'
}) {
  return (
    <div className="card p-4">
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-display font-bold text-sm ${
          accent === 'gold' ? 'bg-gold-sheen text-ink' : 'bg-tsinghua text-white'
        }`}>
          {initials}
        </div>
        <div className="min-w-0">
          <h2 className="font-serif font-bold text-ink leading-tight">{name}</h2>
          <p className="text-[11px] font-semibold text-primary-700 mt-0.5">{role}</p>
          <p className="text-[11px] text-ink-muted">{meta}</p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5 text-sm text-ink-soft leading-relaxed">
        {bio.map((b, i) => <p key={i}>{b}</p>)}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map(tag => <span key={tag} className="badge badge-purple">{tag}</span>)}
      </div>
    </div>
  )
}

export default function PageAbout() {
  return (
    <div className="px-4 pt-6 pb-8 max-w-lg mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <div className="eyebrow mb-1"><Award size={13} /> The Academy</div>
        <h1 className="font-serif text-2xl font-bold text-ink">About & Faculty</h1>
        <div className="rule-gold mt-2" />
      </div>

      {/* Faculty */}
      <div className="space-y-3">
        <FacultyCard
          accent="gold"
          initials="YL"
          name="Prof. Yan Li, MD PhD"
          role="Co-Author · Senior Faculty"
          meta="Peritoneal Surface Malignancy · Beijing Tsinghua Changgung Hospital"
          bio={[
            'Internationally recognised authority in cytoreductive surgery and HIPEC, with one of the largest peritoneal surface malignancy programmes in China.',
            'Leader in bidirectional therapy, gastric peritoneal metastases and the standardisation of CRS+HIPEC across high-volume Asian centres.',
          ]}
          tags={['CRS+HIPEC', 'Gastric PM', 'PIPAC', 'Peritoneal Oncology']}
        />
        <FacultyCard
          accent="purple"
          initials="PL"
          name="Pablo Lozano Lominchar, MD PhD"
          role="Author · Course Director"
          meta="General & GI Surgery · HGUGM · UCM · MSKCC Fellow"
          bio={[
            'Specialist in peritoneal surface oncology — CRS+HIPEC, PIPAC and cytoreductive surgery for sarcoma and complex retroperitoneal tumours.',
            'Clinical fellowship at Memorial Sloan Kettering Cancer Center (MSKCC), New York — peritoneal surface oncology and sarcoma programme.',
          ]}
          tags={['CRS+HIPEC', 'PIPAC', 'Sarcoma', 'MSKCC Fellow']}
        />
        <div className="flex gap-2">
          <a href="https://orcid.org/0000-0003-0614-6329" target="_blank" rel="noopener noreferrer"
            className="flex-1 btn-secondary text-xs"><Link2 size={13} /> ORCID iD</a>
          <a href="mailto:plozano@salud.madrid.org"
            className="flex-1 btn-secondary text-xs"><Mail size={13} /> Contact</a>
        </div>
      </div>

      {/* Institutions */}
      <div className="card p-4">
        <h2 className="section-title text-sm mb-3 flex items-center gap-2">
          <Globe size={15} className="text-primary-700" /> Collaborating Institutions
        </h2>
        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <span className="w-1 rounded-full bg-gold-sheen flex-shrink-0" />
            <p className="text-ink-soft"><strong className="text-ink">Beijing Tsinghua Changgung Hospital (清华长庚医院)</strong><br />
              School of Clinical Medicine, Tsinghua University — Peritoneal Cancer Surgery</p>
          </div>
          <div className="flex gap-3">
            <span className="w-1 rounded-full bg-primary-600 flex-shrink-0" />
            <p className="text-ink-soft"><strong className="text-ink">Hospital G. U. Gregorio Marañón (HGUGM)</strong><br />
              General & GI Surgery — Peritoneal Surface Oncology Unit · UCM, Madrid</p>
          </div>
          <div className="flex gap-3">
            <span className="w-1 rounded-full bg-primary-400 flex-shrink-0" />
            <p className="text-ink-soft"><strong className="text-ink">Memorial Sloan Kettering Cancer Center</strong><br />
              Peritoneal Surface Oncology & Sarcoma Programme · New York</p>
          </div>
        </div>
      </div>

      {/* Pedagogy */}
      <div className="callout-key">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap size={16} className="text-primary-700" />
          <span className="section-title text-sm">Teaching Method</span>
        </div>
        <p className="text-ink-soft">
          Built on the HGUGM surgical residency curriculum: structured chapters with explicit learning
          objectives, landmark-trial and clinical-pearl callouts, and spaced-repetition self-assessment —
          engineered for board-level mastery.
        </p>
      </div>

      {/* Content validation */}
      <div className="card p-4 border-l-4 border-l-primary-600">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck size={16} className="text-primary-700" />
          <h2 className="section-title text-sm">Content Validation</h2>
        </div>
        <div className="space-y-3 text-sm text-ink-soft">
          {[
            'All clinical content reviewed by board-certified surgical oncologists specialised in peritoneal surface oncology.',
            <>Benchmarked against <strong>NCCN 2024–2025</strong>, <strong>ESMO 2023–2024</strong>, <strong>PSOGI Consensus 2022</strong>, <strong>Chicago Consensus 2020</strong> and <strong>JPGA</strong> guidelines.</>,
            'Decision algorithms based on published flowcharts and expert consensus (Sugarbaker, Glehen, Li, PSOGI Working Group).',
            'Landmark-trial data cross-checked against original publications (PubMed PMID verified).',
          ].map((txt, i) => (
            <div key={i} className="flex gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
              <p>{txt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI declaration */}
      <div className="callout-pearl">
        <div className="flex items-start gap-2">
          <ClipboardList size={14} className="text-gold-700 mt-0.5 flex-shrink-0" />
          <div className="text-xs text-ink-soft leading-relaxed">
            <strong className="text-gold-800">AI-Assisted Development:</strong> The structure, classification framework
            and database architecture were developed with AI assistance. All clinical data, dosages, thresholds and
            medical decisions were authored and verified by qualified specialists. AI was not used to generate clinical
            content autonomously.
          </div>
        </div>
      </div>

      {/* Version */}
      <div className="card p-4">
        <h3 className="section-title text-sm mb-3">Version & Changelog</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className="text-xs font-mono font-semibold bg-primary-700 text-white px-2 py-0.5 rounded h-fit">v2.0</span>
            <div>
              <p className="text-xs font-semibold text-ink">2026 — Tsinghua / BTCH Edition</p>
              <p className="text-[11px] text-ink-muted">
                New academy design · {LEARN_CHAPTERS.length} teaching chapters · {QUIZ_QUESTIONS.length} board questions ·
                {' '}{LANDMARK_TRIALS.length} landmark trials · {PC_DISEASES.length} PC entities · Prof. Yan Li co-author
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xs font-mono font-semibold bg-primary-50 text-primary-700 px-2 py-0.5 rounded h-fit">v1.0</span>
            <div>
              <p className="text-xs font-semibold text-ink">2025 — Initial Release</p>
              <p className="text-[11px] text-ink-muted">10 PC entities · 5 algorithms · 20 trials · 65 questions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-primary-50/60 rounded-2xl p-4">
        <p className="text-xs text-ink-muted text-center leading-relaxed">
          For <strong className="text-ink-soft">educational purposes only</strong>. Does not constitute medical advice
          and must not replace clinical judgment, individual patient assessment or institutional guidelines. Always
          consult current guidelines and discuss cases in a multidisciplinary team.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 text-[10px] text-ink-muted/70">
        <span>Beijing Tsinghua Changgung · HGUGM · MSKCC</span>
        <span>·</span>
        <span>© 2026</span>
      </div>
    </div>
  )
}
