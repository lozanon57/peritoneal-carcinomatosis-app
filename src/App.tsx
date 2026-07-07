import React, { createContext, useContext, useState } from 'react'
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { Home, Search, GitBranch, BookOpen, GraduationCap, Info } from 'lucide-react'
import { TRANSLATIONS } from './data/i18n'
import type { Language } from './types'
import PageHome from './pages/PageHome'
import PageSearch from './pages/PageSearch'
import PageAlgorithms from './pages/PageAlgorithms'
import PageTrials from './pages/PageTrials'
import PageQuiz from './pages/PageQuiz'
import PageAbout from './pages/PageAbout'

// ─── i18n context ─────────────────────────────────────────────────────────────
interface I18nCtx { lang: Language; t: (key: string) => string; toggleLang: () => void }

const I18nContext = createContext<I18nCtx>({
  lang: 'en',
  t: k => k,
  toggleLang: () => {},
})

export function useAppI18n() { return useContext(I18nContext) }

function resolve(obj: Record<string, unknown>, path: string): string {
  return path.split('.').reduce<unknown>((acc, k) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[k]
    return undefined
  }, obj) as string ?? path
}

// ─── Bottom nav ───────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { to: '/',           icon: Home,           label: 'nav.home' },
  { to: '/search',     icon: Search,         label: 'nav.search' },
  { to: '/algorithms', icon: GitBranch,      label: 'nav.algorithms' },
  { to: '/trials',     icon: BookOpen,       label: 'nav.trials' },
  { to: '/quiz',       icon: GraduationCap,  label: 'nav.quiz' },
  { to: '/about',      icon: Info,           label: 'nav.about' },
]

function BottomNav() {
  const { t } = useAppI18n()
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 pb-safe">
      <div className="flex">
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors ${
                isActive ? 'text-primary-700' : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            <item.icon size={20} strokeWidth={1.75} />
            <span className="text-[10px] font-medium leading-none">{t(item.label)}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

function ScrollTop() {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// ─── App shell ────────────────────────────────────────────────────────────────
function AppShell() {
  return (
    <>
      <ScrollTop />
      <main className="min-h-screen pb-20">
        <Routes>
          <Route path="/"           element={<PageHome />} />
          <Route path="/search"     element={<PageSearch />} />
          <Route path="/algorithms" element={<PageAlgorithms />} />
          <Route path="/trials"     element={<PageTrials />} />
          <Route path="/quiz"       element={<PageQuiz />} />
          <Route path="/about"      element={<PageAbout />} />
        </Routes>
      </main>
      <BottomNav />
    </>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Language>('en')

  const t = (key: string): string =>
    resolve(TRANSLATIONS[lang] as Record<string, unknown>, key)

  const toggleLang = () => setLang(l => (l === 'en' ? 'es' : 'en'))

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </I18nContext.Provider>
  )
}
