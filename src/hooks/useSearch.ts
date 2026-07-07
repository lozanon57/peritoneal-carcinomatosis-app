import { useState, useMemo } from 'react'
import { PC_DISEASES } from '../data/diseases'
import type { PCOrigin, HIPECEligibility } from '../types'

interface Filters {
  query: string
  origin: PCOrigin | 'all'
  hipec: HIPECEligibility | 'all'
}

const INITIAL: Filters = { query: '', origin: 'all', hipec: 'all' }

export function useSearch() {
  const [filters, setFilters] = useState<Filters>(INITIAL)

  const results = useMemo(() => {
    const q = filters.query.toLowerCase()
    return PC_DISEASES.filter(d => {
      if (filters.origin !== 'all' && d.origin !== filters.origin) return false
      if (filters.hipec !== 'all' && d.hipec_eligibility !== filters.hipec) return false
      if (!q) return true
      return (
        d.name.toLowerCase().includes(q) ||
        d.name_short.toLowerCase().includes(q) ||
        (d.alternative_names ?? []).some(n => n.toLowerCase().includes(q)) ||
        d.tags.some(t => t.toLowerCase().includes(q)) ||
        d.ihc.some(m => m.toLowerCase().includes(q)) ||
        d.molecular_markers.some(m => m.alteration.toLowerCase().includes(q))
      )
    })
  }, [filters])

  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    setFilters(prev => ({ ...prev, [key]: value }))

  const resetFilters = () => setFilters(INITIAL)

  return { filters, results, updateFilter, resetFilters }
}
