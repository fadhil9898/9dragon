import { Wallet, Zap, ChefHat } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from './ui/Reveal'

const PILLARS = [
  {
    icon: Wallet,
    title: 'Ramah di kantong',
    text: 'Harga dirancang untuk uang saku mahasiswa. Porsi kenyang, rasa tidak dikompromikan.',
  },
  {
    icon: Zap,
    title: 'Cepat, sesuai jadwal',
    text: 'Pesan dari ponsel, ambil atau minta antar. Siap dalam hitungan menit di sela dua kelas.',
  },
  {
    icon: ChefHat,
    title: 'Dimasak dengan serius',
    text: 'Bahan segar setiap hari, resep konsisten, dapur bersih. Praktis bukan berarti asal-asalan.',
  },
]

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-24 px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">Tentang Kami</p>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
              Lapar tidak
              <br />
              mengenal jadwal.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed text-ink/60">
              9 Dragon lahir dari pengalaman sederhana: kelas padat, waktu istirahat singkat, dan isi dompet
              yang harus bertahan sampai akhir bulan. Kami percaya makanan enak tidak harus mahal dan tidak
              harus menunggu lama.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 rounded-3xl bg-snow p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">Visi</p>
              <p className="mt-2 text-xl font-medium leading-snug tracking-tight">
                Menjadi teman makan nomor satu bagi setiap mahasiswa di Indonesia.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="space-y-5 lg:col-span-7 lg:pt-24">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group flex gap-6 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_20px_60px_rgba(0,113,227,0.12)]"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-snow text-ink transition-colors group-hover:bg-brand group-hover:text-white">
                  <p.icon size={24} strokeWidth={1.7} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink/40">0{i + 1}</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/60">{p.text}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
