import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Flame, ArrowUpRight } from 'lucide-react'
import { NAV_LINKS, waLink, EASE } from '../lib/data'
import MagneticButton from './ui/MagneticButton'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-black/5 bg-white/70 py-2 pl-5 pr-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-2xl backdrop-saturate-150">
        <a href="#top" className="flex items-center gap-2 text-[17px] font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-white">
            <Flame size={15} strokeWidth={2.4} />
          </span>
          9 Dragon
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-ink/70 transition-colors hover:bg-black/5 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <MagneticButton href={waLink()} className="hidden !px-5 !py-2 text-sm sm:inline-flex">
            Pesan Sekarang
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </MagneticButton>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-black/5 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mx-auto mt-2 max-w-5xl rounded-3xl border border-black/5 bg-white/80 p-3 shadow-xl backdrop-blur-2xl md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium hover:bg-black/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block rounded-2xl bg-brand px-4 py-3 text-center font-medium text-white"
            >
              Pesan via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
