import { Flame, Camera, Music2, MessageCircle, Mail } from 'lucide-react'
import { NAV_LINKS, waLink } from '../lib/data'

const SOCIALS = [
  { icon: Camera, label: 'Instagram', href: 'https://instagram.com/' },
  { icon: Music2, label: 'TikTok', href: 'https://tiktok.com/' },
  { icon: MessageCircle, label: 'WhatsApp', href: waLink() },
  { icon: Mail, label: 'Email', href: 'mailto:halo@9dragon.id' },
]

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-white">
                <Flame size={16} strokeWidth={2.4} />
              </span>
              9 Dragon
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink/50">
              Makan praktis, lezat, dan terjangkau untuk mahasiswa yang jadwalnya tidak pernah longgar.
            </p>
          </div>

          <nav aria-label="Tautan cepat" className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-ink/60 transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full bg-snow text-ink/70 transition-all duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white hover:shadow-[0_10px_30px_rgba(0,113,227,0.35)]"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-black/5 pt-6 text-xs text-ink/40 sm:flex-row">
          <p>© {new Date().getFullYear()} 9 Dragon. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-5">
            <a href="#top" className="hover:text-ink">Kebijakan Privasi</a>
            <a href="#top" className="hover:text-ink">Syarat &amp; Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
