import { motion } from 'framer-motion'
import { ArrowRight, Clock, Star, Wallet, UtensilsCrossed, MessageCircle } from 'lucide-react'
import { waLink, EASE } from '../lib/data'
import MagneticButton from './ui/MagneticButton'

const LINES = [['Makan', 'enak.'], ['Kuliah', 'tenang.'], ['Dompet', 'aman.']]

const wordVariant = {
  hidden: { y: '110%' },
  show: (i) => ({ y: 0, transition: { duration: 1, delay: 0.25 + i * 0.09, ease: EASE } }),
}

function FloatCard({ className, delay = 0, amp = 10, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: EASE }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -amp, 0] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.05, rotate: -1 }}
        className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  let idx = 0
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-36 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-sky-300/40 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 top-0 h-[460px] w-[460px] rounded-full bg-violet-300/35 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/3 top-64 h-[360px] w-[360px] rounded-full bg-amber-200/40 blur-[110px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-1.5 text-sm text-ink/70 backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Buka hari ini · Pesan sebelum jam kuliah
        </motion.div>

        <h1 className="text-[clamp(2.9rem,9vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.045em]">
          {LINES.map((line, li) => (
            <span key={li} className="block">
              {line.map((w) => {
                const i = idx++
                return (
                  <span key={w} className="mr-[0.22em] inline-block overflow-hidden pb-[0.12em] align-bottom last:mr-0">
                    <motion.span
                      custom={i}
                      variants={wordVariant}
                      initial="hidden"
                      animate="show"
                      className={`inline-block ${li === 2 ? 'bg-gradient-to-r from-brand to-sky-400 bg-clip-text text-transparent' : ''}`}
                    >
                      {w}
                    </motion.span>
                  </span>
                )
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed tracking-tight text-ink/60 sm:text-xl"
        >
          Solusi makan praktis dan lezat di sela jadwal kuliah padat — tanpa perlu menguras isi dompet.
          Dari dapur kami langsung ke tangan Anda, secepat jeda antar kelas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <MagneticButton href={waLink()} className="!px-8 !py-4 text-base">
            Pesan via WhatsApp
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton href="#layanan" variant="secondary" className="!px-8 !py-4 text-base">
            Lihat Layanan
          </MagneticButton>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-20 h-[340px] max-w-4xl sm:h-[380px]">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: EASE }}
          className="absolute inset-x-4 inset-y-0 overflow-hidden rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-snow via-white to-sky-50 shadow-[0_40px_100px_rgba(0,0,0,0.08)] sm:inset-x-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,113,227,0.12),transparent_60%)]" />
          <div className="grid h-full place-items-center">
            <motion.div
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="grid h-28 w-28 place-items-center rounded-[2rem] bg-ink text-white shadow-2xl sm:h-36 sm:w-36"
            >
              <UtensilsCrossed className="h-12 w-12 sm:h-16 sm:w-16" strokeWidth={1.4} />
            </motion.div>
          </div>
        </motion.div>

        <FloatCard className="left-0 top-10 sm:left-2" delay={1.5}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600"><Wallet size={18} /></span>
          <div className="text-left"><p className="text-xs text-ink/50">Paket hemat mulai</p><p className="text-sm font-semibold">Rp 12.000</p></div>
        </FloatCard>

        <FloatCard className="right-0 top-2 sm:right-2" delay={1.7} amp={14}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/10 text-amber-600"><Star size={18} fill="currentColor" /></span>
          <div className="text-left"><p className="text-xs text-ink/50">Rating mahasiswa</p><p className="text-sm font-semibold">4,9 / 5,0</p></div>
        </FloatCard>

        <FloatCard className="bottom-6 left-4 sm:left-20" delay={1.9} amp={8}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand"><Clock size={18} /></span>
          <div className="text-left"><p className="text-xs text-ink/50">Waktu siap saji</p><p className="text-sm font-semibold">&lt; 7 menit</p></div>
        </FloatCard>

        <FloatCard className="bottom-16 right-2 sm:right-16" delay={2.1} amp={12}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/10 text-violet-600"><MessageCircle size={18} /></span>
          <div className="text-left"><p className="text-xs text-ink/50">Pesan lewat</p><p className="text-sm font-semibold">WhatsApp</p></div>
        </FloatCard>
      </div>
    </section>
  )
}
