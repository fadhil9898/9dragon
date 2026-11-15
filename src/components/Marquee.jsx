import { Sparkles } from 'lucide-react'
import { STATS } from '../lib/data'

export default function Marquee() {
  const items = [...STATS, ...STATS]
  return (
    <section aria-label="Pencapaian 9 Dragon" className="border-y border-black/5 bg-snow/60 py-6">
      <div
        className="marquee relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-12 pr-12">
          {items.map((t, i) => (
            <div key={i} className="flex items-center gap-12 whitespace-nowrap">
              <span className="text-lg font-medium tracking-tight text-ink/70">{t}</span>
              <Sparkles size={14} className="text-brand/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
