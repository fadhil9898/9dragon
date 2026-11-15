import { motion } from 'framer-motion'
import { Soup, Sandwich, Coffee, Salad } from 'lucide-react'
import Reveal from './ui/Reveal'

const ITEMS = [
  {
    icon: Soup, tag: 'Best Seller', title: 'Nasi Ayam Naga',
    desc: 'Menu paling banyak dipesan. Ayam bumbu rahasia, nasi hangat, dan sambal yang bikin nambah.',
    impact: '3.200+ porsi per bulan', grad: 'from-amber-100 via-orange-50 to-white', size: 'md:col-span-7',
  },
  {
    icon: Sandwich, tag: 'Cepat Saji', title: 'Roti Bakar Begadang',
    desc: 'Pelipur tugas malam. Siap dalam 5 menit, cukup untuk mengisi tenaga sampai pagi.',
    impact: 'Favorit mahasiswa tingkat akhir', grad: 'from-sky-100 via-blue-50 to-white', size: 'md:col-span-5',
  },
  {
    icon: Coffee, tag: 'Minuman', title: 'Es Kopi Jeda',
    desc: 'Kopi susu segar dengan harga yang tidak bikin dompet kering di tengah bulan.',
    impact: 'Terjual rata-rata 150 gelas/hari', grad: 'from-stone-200 via-stone-100 to-white', size: 'md:col-span-5',
  },
  {
    icon: Salad, tag: 'Sehat', title: 'Salad Bowl Semester',
    desc: 'Pilihan ringan untuk yang menjaga pola makan. Sayur segar, protein cukup, saus buatan sendiri.',
    impact: 'Dipilih 1 dari 5 pelanggan', grad: 'from-emerald-100 via-green-50 to-white', size: 'md:col-span-7',
  },
]

export default function Portfolio() {
  return (
    <section id="favorit" className="scroll-mt-24 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">Menu Favorit</p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
            Dipesan berulang,
            <br />
            bukan sekali coba.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-12">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 2) * 0.1} className={it.size}>
              <motion.article
                whileHover="hover"
                initial="rest"
                className="group cursor-pointer overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.03)] transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.10)]"
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${it.grad}`}>
                  <motion.div
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.12 } }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 grid place-items-center"
                  >
                    <it.icon className="h-24 w-24 text-ink/80" strokeWidth={1} />
                  </motion.div>
                  <span className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                    {it.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-tight">{it.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/60">{it.desc}</p>
                  <p className="mt-4 text-sm font-medium text-brand">{it.impact}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
