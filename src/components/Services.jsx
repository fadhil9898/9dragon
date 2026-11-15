import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Wallet, Bike, CalendarCheck, Users, ArrowUpRight } from 'lucide-react'
import { EASE } from '../lib/data'
import Reveal from './ui/Reveal'

function BentoCard({ className = '', delay = 0, children }) {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const border = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, rgba(0,113,227,0.75), transparent 70%)`
  const glow = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(0,113,227,0.10), transparent 70%)`

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      whileHover={{ y: -4 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - r.left)
        y.set(e.clientY - r.top)
      }}
      className={`group relative rounded-[2rem] bg-black/[0.06] ${className}`}
    >
      <motion.div
        style={{ background: border }}
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative m-px h-[calc(100%-2px)] overflow-hidden rounded-[calc(2rem-1px)] bg-white p-8">
        <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0" />
        <div className="relative flex h-full flex-col">{children}</div>
      </div>
    </motion.div>
  )
}

function Icon({ icon: I }) {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-snow text-ink transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
      <I size={22} strokeWidth={1.7} />
    </span>
  )
}

export default function Services() {
  return (
    <section id="layanan" className="scroll-mt-24 bg-snow/60 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">Layanan Utama</p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-6xl">
            Satu dapur,
            <br />
            empat cara makan tenang.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-6">
          <BentoCard className="md:col-span-4 md:min-h-[320px]">
            <Icon icon={Wallet} />
            <h3 className="mt-6 text-3xl font-semibold tracking-tight">Paket Hemat Mahasiswa</h3>
            <p className="mt-3 max-w-md leading-relaxed text-ink/60">
              Nasi, lauk, dan minum dalam satu paket dengan harga bersahabat. Pilih menu favorit,
              porsi tetap kenyang untuk menemani tiga SKS berikutnya.
            </p>
            <div className="mt-auto flex items-end justify-between pt-8">
              <div>
                <p className="text-xs text-ink/40">Mulai dari</p>
                <p className="text-4xl font-bold tracking-tight">Rp 12<span className="text-xl text-ink/40"> rb</span></p>
              </div>
              <ArrowUpRight className="text-ink/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand" />
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-2" delay={0.1}>
            <Icon icon={Bike} />
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">Antar ke Kelas</h3>
            <p className="mt-3 leading-relaxed text-ink/60">
              Pesan dari bangku kuliah, kami antar ke titik temu di kampus. Tanpa antre, tanpa telat masuk.
            </p>
            <p className="mt-auto pt-8 text-sm font-medium text-brand">Gratis ongkir area kampus</p>
          </BentoCard>

          <BentoCard className="md:col-span-2" delay={0.1}>
            <Icon icon={CalendarCheck} />
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">Langganan Mingguan</h3>
            <p className="mt-3 leading-relaxed text-ink/60">
              Menu berganti setiap hari, harga lebih hemat, dan Anda tidak perlu lagi bingung mau makan apa.
            </p>
            <p className="mt-auto pt-8 text-sm font-medium text-brand">Hemat hingga 20%</p>
          </BentoCard>

          <BentoCard className="md:col-span-4 md:min-h-[260px]" delay={0.2}>
            <Icon icon={Users} />
            <h3 className="mt-6 text-3xl font-semibold tracking-tight">Katering Organisasi</h3>
            <p className="mt-3 max-w-md leading-relaxed text-ink/60">
              Rapat himpunan, seminar, hingga makrab. Kami siapkan konsumsi dalam jumlah besar,
              tepat waktu, dengan anggaran yang tetap masuk akal.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-8">
              {['Min. 20 porsi', 'Faktur tersedia', 'Pre-order H-1'].map((t) => (
                <span key={t} className="rounded-full bg-snow px-3 py-1 text-xs font-medium text-ink/70">{t}</span>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
