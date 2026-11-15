import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Reveal from './ui/Reveal'

// Ulasan bersifat contoh. Ganti dengan testimoni pelanggan asli.
const REVIEWS = [
  { name: 'Alya Putri', role: 'Mahasiswa Akuntansi, Semester 5', text: 'Kelas bubar jam 12, kelas berikutnya jam 12.30. Pesan dari kelas, sampai pas keluar. Harganya juga tidak bikin mikir dua kali.' },
  { name: 'Rizky Ramadhan', role: 'Ketua HMTI', text: 'Kami pesan konsumsi untuk 80 orang di acara seminar. Tepat waktu, rapi, dan anggarannya jauh lebih ringan dari katering biasa.' },
  { name: 'Nadia Safitri', role: 'Mahasiswa Kedokteran Gigi', text: 'Langganan mingguannya penyelamat anak kos. Menunya ganti-ganti, jadi tidak bosan dan pengeluaran jadi lebih terkontrol.' },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="scroll-mt-24 bg-snow/60 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">Ulasan</p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
            Kata mereka
            <br />
            yang sudah kenyang.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <motion.figure
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex h-full flex-col rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={22} className="text-ink/10" />
                </div>
                <blockquote className="mt-6 flex-1 text-[17px] leading-relaxed tracking-tight text-ink/80">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand to-sky-300 text-sm font-semibold text-white">
                    {r.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-ink/50">{r.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
