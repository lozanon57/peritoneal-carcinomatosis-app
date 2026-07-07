import { useNavigate } from 'react-router-dom'
import { Search, GitBranch, BookOpen, GraduationCap, ChevronRight, Zap, AlertCircle } from 'lucide-react'
import { useAppI18n } from '../App'
import { useQuiz } from '../hooks/useQuiz'
import { PC_DISEASES } from '../data/diseases'
import { LANDMARK_TRIALS } from '../data/landmark_trials'

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
      <div className="text-2xl font-bold text-primary-600">{value}</div>
      <div className="text-xs text-gray-500 font-medium">{label}</div>
      {sub && <div className="text-[10px] text-gray-400 mt-0.5">{sub}</div>}
    </div>
  )
}

function DailyQuestion() {
  const { dailyQuestion } = useQuiz()
  const navigate = useNavigate()
  if (!dailyQuestion) return null
  return (
    <button
      onClick={() => navigate('/quiz')}
      className="w-full text-left bg-primary-50 border border-primary-200 rounded-xl p-4"
    >
      <div className="flex items-center gap-2 mb-2">
        <Zap size={14} className="text-primary-600" />
        <span className="text-xs font-semibold text-primary-700 uppercase tracking-wide">Daily Question</span>
      </div>
      <p className="text-sm font-medium text-gray-800 line-clamp-2">{dailyQuestion.stem}</p>
      <div className="flex items-center gap-1 mt-2 text-primary-600">
        <span className="text-xs font-medium">Tap to answer</span>
        <ChevronRight size={12} />
      </div>
    </button>
  )
}

function PearlOfDay() {
  const idx = Math.floor(Date.now() / 86_400_000) % PC_DISEASES.length
  const disease = PC_DISEASES[idx]
  if (!disease || !disease.clinical_pearls?.length) return null
  const pearl = disease.clinical_pearls[0]
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <AlertCircle size={14} className="text-amber-600" />
        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Clinical Pearl · {disease.name_short}</span>
      </div>
      <p className="text-sm text-gray-800">{pearl}</p>
    </div>
  )
}

const QUICK_LINKS = [
  { to: '/search',     Icon: Search,       label: 'Disease Search',  color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { to: '/algorithms', Icon: GitBranch,    label: 'Algorithms',      color: 'bg-green-50 text-green-600 border-green-100' },
  { to: '/trials',     Icon: BookOpen,     label: 'Landmark Trials', color: 'bg-purple-50 text-purple-600 border-purple-100' },
  { to: '/quiz',       Icon: GraduationCap, label: 'E-Learning Quiz', color: 'bg-primary-50 text-primary-600 border-primary-100' },
]

export default function PageHome() {
  const { t } = useAppI18n()
  const navigate = useNavigate()

  return (
    <div className="px-4 pt-6 pb-4 max-w-lg mx-auto space-y-5">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 bg-primary-100 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
          <span>HGUGM · UCM</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Peritoneal Carcinomatosis
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Clinical decision support · CRS+HIPEC · PIPAC
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="PC Entities" value={String(PC_DISEASES.length)} sub="Covered" />
        <StatCard label="Algorithms" value="5" sub="Decision trees" />
        <StatCard label="Trials" value={String(LANDMARK_TRIALS.length)} sub="Landmark" />
      </div>

      {/* Daily widgets */}
      <DailyQuestion />
      <PearlOfDay />

      {/* Quick links */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Access</h2>
        <div className="grid grid-cols-2 gap-3">
          {QUICK_LINKS.map(({ to, Icon, label, color }) => (
            <button
              key={to}
              onClick={() => navigate(to)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border ${color} transition-opacity active:opacity-70`}
            >
              <Icon size={22} />
              <span className="text-xs font-semibold text-center leading-tight">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-[10px] text-gray-400 text-center pb-2">
        Educational tool only · Content validated against NCCN/ESMO/PSOGI 2024–2025
      </p>
    </div>
  )
}
