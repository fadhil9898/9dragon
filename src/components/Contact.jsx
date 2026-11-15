import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react'
import { waLink } from '../lib/data'
import Reveal from './ui/Reveal'
import MagneticButton from './ui/MagneticButton'

// Alamat dan jam operasional bersifat contoh — sesuaikan.
const INFO = [
  { icon: MapPin, label: 'Alamat', value: 'Jl. Kampus Raya No. 9, dekat Gerbang Utama' },
  { icon: Clock, label: 'Jam Operasional', value: 'Senin–Sabtu · 07.00–21.00 WIB' },
]

export default function Contact() {
  return (
    <section id="kontak" className="scroll-mt-24 px-4 pb-4 pt-28 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-white sm:px-16 sm:py-28">
        <motion.div
          aria-hidden
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand/40 blur-[120px]"
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-violet-500/30 blur-[120px]"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-7xl">
              Lapar?
              <br />
              Chat kami sekarang.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              Satu pesan WhatsApp dan makan siang Anda beres. Tanpa aplikasi tambahan, tanpa ribet.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex justify-center">
              <MagneticButton href={waLink()} variant="light" className="!px-9 !py-4 text-base">
                <MessageCircle size={19} />
                Pesan via WhatsApp
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-2">
          {INFO.map((it, i) => (
            <Reveal key={it.label} delay={0.2 + i * 0.1}>
              <div className="flex h-full items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl transition-colors hover:bg-white/10">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                  <it.icon size={20} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40">{it.label}</p>
                  <p className="mt-1 font-medium leading-snug">{it.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
