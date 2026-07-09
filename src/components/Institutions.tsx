import { useState } from 'react'

const BASE = import.meta.env.BASE_URL

// ── Institution logo with graceful text fallback ──────────────────────────────
export function InstitutionLogo({
  which,
  theme = 'light',
  className = '',
}: {
  which: 'tsinghua' | 'btch'
  theme?: 'light' | 'dark'
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const src = `${BASE}brand/${which}.png`
  const label =
    which === 'tsinghua'
      ? { cn: '清华大学', en: 'Tsinghua University' }
      : { cn: '北京清华长庚医院', en: 'Beijing Tsinghua Changgung Hospital' }
  const color = theme === 'dark' ? 'text-white' : 'text-primary-800'
  const sub = theme === 'dark' ? 'text-white/70' : 'text-ink-muted'

  if (failed) {
    return (
      <div className={`leading-tight ${className}`}>
        <div className={`font-serif font-bold ${color}`}>{label.cn}</div>
        <div className={`text-[10px] font-semibold uppercase tracking-wide ${sub}`}>{label.en}</div>
      </div>
    )
  }
  // Logos ship on a purple background → present as a neat rounded branded tile
  return (
    <span className={`inline-flex items-center rounded-lg overflow-hidden ring-1 ring-white/15 shadow-sm ${className}`}>
      <img src={src} alt={label.en} onError={() => setFailed(true)} className="h-full w-auto object-contain" />
    </span>
  )
}

// ── Institution footer band — shown on every page ─────────────────────────────
export function InstitutionFooter() {
  return (
    <div className="max-w-lg mx-auto px-4 pt-2 pb-6">
      <div className="rounded-2xl border border-[#efe9f3] bg-white/70 px-4 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted text-center mb-3">
          In partnership with
        </p>
        <div className="flex items-center justify-center gap-6">
          <InstitutionLogo which="tsinghua" theme="light" className="h-9 max-w-[46%]" />
          <span className="w-px h-8 bg-[#e6def0]" />
          <InstitutionLogo which="btch" theme="light" className="h-9 max-w-[46%]" />
        </div>
      </div>
    </div>
  )
}

// ── Creator photo with initials fallback ──────────────────────────────────────
export function CreatorPhoto({
  file,
  initials,
  size = 56,
  ring = 'gold',
  objectPosition = 'center',
}: {
  file: string
  initials: string
  size?: number
  ring?: 'gold' | 'white'
  objectPosition?: string
}) {
  const [failed, setFailed] = useState(false)
  const src = `${BASE}team/${file}`
  const ringCls = ring === 'gold' ? 'ring-2 ring-gold-400' : 'ring-2 ring-white/70'
  const style = { width: size, height: size }

  if (failed) {
    return (
      <div
        className={`rounded-full flex items-center justify-center font-display font-bold text-white bg-tsinghua ${ringCls}`}
        style={style}
      >
        {initials}
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={initials}
      onError={() => setFailed(true)}
      className={`rounded-full object-cover ${ringCls}`}
      style={{ ...style, objectPosition }}
    />
  )
}
