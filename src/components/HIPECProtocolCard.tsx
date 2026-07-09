import { Thermometer, Clock, FlaskConical } from 'lucide-react'
import type { HIPECProtocol } from '../types'

interface HIPECProtocolCardProps { protocol: HIPECProtocol; index?: number }

export function HIPECProtocolCard({ protocol, index = 0 }: HIPECProtocolCardProps) {
  return (
    <div className="rounded-xl border border-[#efe9f3] bg-white p-3 space-y-2">
      {index === 0 && (
        <div className="text-[10px] font-semibold text-primary-600 uppercase tracking-wide">
          Standard Protocol
        </div>
      )}
      {index > 0 && (
        <div className="text-[10px] font-semibold text-ink-muted uppercase tracking-wide">
          Alternative Protocol
        </div>
      )}
      <div className="font-semibold text-ink text-sm">{protocol.drug}</div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center gap-1 bg-primary-50 rounded-lg p-2">
          <FlaskConical size={14} className="text-primary-600" />
          <span className="text-[10px] text-ink-muted">Dose</span>
          <span className="text-xs font-semibold text-ink text-center leading-tight">{protocol.dose}</span>
        </div>
        <div className="flex flex-col items-center gap-1 bg-cardinal-50 rounded-lg p-2">
          <Thermometer size={14} className="text-cardinal-500" />
          <span className="text-[10px] text-ink-muted">Temp</span>
          <span className="text-xs font-semibold text-cardinal-700">{protocol.temperature}</span>
        </div>
        <div className="flex flex-col items-center gap-1 bg-primary-50 rounded-lg p-2">
          <Clock size={14} className="text-primary-600" />
          <span className="text-[10px] text-ink-muted">Duration</span>
          <span className="text-xs font-semibold text-primary-700">{protocol.duration}</span>
        </div>
      </div>
      {protocol.notes && (
        <p className="text-xs text-ink-muted leading-relaxed italic">{protocol.notes}</p>
      )}
    </div>
  )
}
