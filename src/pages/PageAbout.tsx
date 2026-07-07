import { ShieldCheck, CheckCircle2, BookOpen, Globe, ClipboardList, History } from 'lucide-react'
import { useAppI18n } from '../App'

export default function PageAbout() {
  const { lang, toggleLang } = useAppI18n()

  return (
    <div className="px-4 pt-6 pb-8 max-w-lg mx-auto space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">About</h1>
          <button
            onClick={toggleLang}
            className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>

      {/* Author */}
      <div className="card">
        <div className="flex items-start gap-3">
          <div className="bg-primary-100 rounded-xl p-3 flex-shrink-0">
            <BookOpen size={22} className="text-primary-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Pablo Lozano Lominchar, MD PhD</h2>
            <p className="text-xs text-gray-500 mt-0.5">General & GI Surgery · HGUGM · UCM</p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5 text-sm text-gray-600">
          <p>Specialist in peritoneal surface oncology with expertise in CRS+HIPEC, PIPAC, and cytoreductive surgery for sarcomas and complex retroperitoneal tumours.</p>
          <p>Clinical fellowship at Memorial Sloan Kettering Cancer Center (MSKCC), New York, USA — peritoneal surface oncology and sarcoma programme.</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {['CRS+HIPEC', 'PIPAC', 'Sarcoma', 'Retroperitoneal', 'MSKCC Fellow'].map(tag => (
            <span key={tag} className="badge badge-blue">{tag}</span>
          ))}
        </div>
      </div>

      {/* Institution */}
      <div className="card">
        <h2 className="font-semibold text-gray-800 text-sm mb-2 flex items-center gap-2">
          <Globe size={15} className="text-primary-600" /> Institution
        </h2>
        <p className="text-sm text-gray-600">
          <strong>Hospital General Universitario Gregorio Marañón (HGUGM)</strong>
          <br />General & GI Surgery Department — Peritoneal Surface Oncology Unit
          <br />Universidad Complutense de Madrid (UCM)
        </p>
      </div>

      {/* Content validation */}
      <div className="card border-l-4 border-l-primary-400">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck size={16} className="text-primary-600" />
          <h2 className="font-semibold text-gray-800 text-sm">Content Validation Methodology</h2>
        </div>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex gap-2">
            <CheckCircle2 size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
            <p>All clinical content reviewed by a board-certified surgical oncologist specialised in peritoneal surface oncology (MD PhD, MSKCC fellowship).</p>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
            <p>Content benchmarked against: <strong>NCCN 2024–2025</strong>, <strong>ESMO Colorectal & Ovarian Guidelines 2023–2024</strong>, <strong>PSOGI Consensus 2022</strong>.</p>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
            <p>Decision algorithms based on published flowcharts and expert consensus (Sugarbaker PH, Glehen O, PSOGI Working Group).</p>
          </div>
          <div className="flex gap-2">
            <CheckCircle2 size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
            <p>Landmark trial data cross-checked against original publications (PubMed PMID verified).</p>
          </div>
        </div>
      </div>

      {/* AI declaration */}
      <div className="card bg-amber-50 border-amber-200">
        <div className="flex items-start gap-2">
          <ClipboardList size={14} className="text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="text-xs text-amber-800">
            <strong>AI-Assisted Development Declaration:</strong> The structure, classification framework, and database architecture of this application were developed with the assistance of AI language models. All clinical data, dosages, thresholds, and medical decisions were authored and verified by a qualified medical specialist. AI was not used to generate clinical content autonomously.
          </div>
        </div>
      </div>

      {/* Version */}
      <div className="card">
        <div className="flex items-center gap-2 mb-2">
          <History size={14} className="text-gray-400" />
          <h3 className="text-sm font-semibold text-gray-700">Version History</h3>
        </div>
        <div className="space-y-2 text-xs text-gray-500">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">v1.0 — July 2025</span>
            <span>Initial release</span>
          </div>
          <p className="text-gray-400">10 PC entities · 5 algorithms · 20 landmark trials · 65 quiz questions · HIPEC/PIPAC protocols</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 rounded-xl p-4">
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          This application is for <strong>educational purposes only</strong>. It does not constitute medical advice and must not replace clinical judgment, individual patient assessment, or institutional guidelines. Always consult current guidelines and discuss cases in a multidisciplinary team.
        </p>
      </div>

      <div className="text-center text-[10px] text-gray-300">
        HGUGM Peritoneal Surface Oncology · 2025
      </div>
    </div>
  )
}
