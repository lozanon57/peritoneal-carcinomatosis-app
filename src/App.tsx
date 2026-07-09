import React, { createContext, useContext, useState } from 'react'
import { HashRouter, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Home, Search, Stethoscope, BookOpen, GraduationCap, Info, Layers, Languages, Moon, Sun, BookText } from 'lucide-react'
import { TRANSLATIONS } from './data/i18n'
import type { Language } from './types'
import PageHome from './pages/PageHome'
import PageSearch from './pages/PageSearch'
import PageCases from './pages/PageCases'
import PageTrials from './pages/PageTrials'
import PageQuiz from './pages/PageQuiz'
import PageAbout from './pages/PageAbout'
import PageLearn from './pages/PageLearn'
import PageLibrary from './pages/PageLibrary'
import { InstitutionFooter } from './components/Institutions'

// ─── i18n context ─────────────────────────────────────────────────────────────
interface I18nCtx { lang: Language; t: (key: string) => string; toggleLang: () => void; dark: boolean; toggleTheme: () => void }

const I18nContext = createContext<I18nCtx>({
  lang: 'en',
  t: k => k,
  toggleLang: () => {},
  dark: false,
  toggleTheme: () => {},
})

export function useAppI18n() { return useContext(I18nContext) }

function resolve(obj: Record<string, unknown>, path: string): string {
  return path.split('.').reduce<unknown>((acc, k) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[k]
    return undefined
  }, obj) as string ?? path
}

// ─── Brandmark ────────────────────────────────────────────────────────────────
function Brandmark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="40" height="40" rx="11" fill="url(#bm-grad)" />
      {/* peritoneal / HIPEC ring motif */}
      <circle cx="20" cy="20" r="10.5" stroke="#dda92b" strokeWidth="2.2" fill="none" opacity="0.95" />
      <circle cx="20" cy="20" r="5" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.9" />
      <circle cx="20" cy="20" r="1.6" fill="#dda92b" />
      <defs>
        <linearGradient id="bm-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3d0b52" />
          <stop offset="0.55" stopColor="#6a0f8e" />
          <stop offset="1" stopColor="#8a1eb0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// ─── Navigation items ─────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { to: '/',           icon: Home,          key: 'home' },
  { to: '/learn',      icon: Layers,        key: 'learn' },
  { to: '/cases',      icon: Stethoscope,   key: 'cases' },
  { to: '/search',     icon: Search,        key: 'atlas' },
  { to: '/trials',     icon: BookOpen,      key: 'trials' },
  { to: '/quiz',       icon: GraduationCap, key: 'quiz' },
]
// Library is shown on the desktop top-nav (no room on the mobile bottom bar)
const DESKTOP_NAV = [...NAV_ITEMS, { to: '/library', icon: BookText, key: 'library' }]

// ─── Top brand header + desktop nav ────────────────────────────────────────────
function TopHeader() {
  const { lang, toggleLang, dark, toggleTheme, t } = useAppI18n()
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 z-40 bg-surface/85 backdrop-blur-lg border-b border-line pt-safe">
      <div className="max-w-lg lg:max-w-7xl mx-auto px-4 lg:px-8 h-14 lg:h-16 flex items-center justify-between gap-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-2.5 active:opacity-70 transition-opacity flex-shrink-0">
          <Brandmark />
          <div className="leading-none text-left">
            <div className="font-display font-bold text-[15px] lg:text-[17px] text-ink tracking-tight">PSM Academy</div>
            <div className="text-[9.5px] font-semibold uppercase tracking-[0.13em] text-primary-700/80">CRS · HIPEC · PIPAC</div>
          </div>
        </button>

        {/* Desktop horizontal nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {DESKTOP_NAV.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'text-primary-700 bg-primary-50' : 'text-ink-soft hover:text-primary-700 hover:bg-primary-50/60'
                }`
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 text-ink-muted hover:text-primary-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-xs font-semibold text-ink-soft bg-primary-50 px-2.5 py-1.5 rounded-full active:scale-95 transition-transform"
            aria-label="Toggle language"
          >
            <Languages size={13} className="text-primary-700" />
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button
            onClick={() => navigate('/about')}
            className="p-2 text-ink-muted hover:text-primary-700 transition-colors"
            aria-label="About"
          >
            <Info size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

// ─── Bottom nav (mobile only) ───────────────────────────────────────────────────
function BottomNav() {
  const { t } = useAppI18n()
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-lg border-t border-line pb-safe">
      <div className="max-w-lg mx-auto flex">
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors relative ${
                isActive ? 'text-primary-700' : 'text-ink-muted hover:text-ink-soft'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="absolute top-0 h-0.5 w-8 rounded-full bg-gold-sheen" />}
                <item.icon size={20} strokeWidth={isActive ? 2.2 : 1.75} />
                <span className="text-[10px] font-semibold leading-none">{t(`nav.${item.key}`)}</span>
              </>
            )}
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
      <TopHeader />
      <main className="min-h-screen pb-24 lg:pb-16">
        <Routes>
          <Route path="/"           element={<PageHome />} />
          <Route path="/learn"      element={<PageLearn />} />
          <Route path="/cases"      element={<PageCases />} />
          <Route path="/search"     element={<PageSearch />} />
          <Route path="/trials"     element={<PageTrials />} />
          <Route path="/quiz"       element={<PageQuiz />} />
          <Route path="/library"    element={<PageLibrary />} />
          <Route path="/about"      element={<PageAbout />} />
        </Routes>
        <InstitutionFooter />
      </main>
      <BottomNav />
    </>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
function initialDark(): boolean {
  try {
    const saved = localStorage.getItem('psm-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  } catch {
    return false
  }
}

export default function App() {
  const [lang, setLang] = useState<Language>('en')
  const [dark, setDark] = useState<boolean>(initialDark)

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('psm-theme', dark ? 'dark' : 'light') } catch { /* ignore */ }
  }, [dark])

  const t = (key: string): string =>
    resolve(TRANSLATIONS[lang] as Record<string, unknown>, key)

  const toggleLang = () => setLang(l => (l === 'en' ? 'zh' : 'en'))
  const toggleTheme = () => setDark(d => !d)

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang, dark, toggleTheme }}>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </I18nContext.Provider>
  )
}
