import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const VARIANTS = {
  primary:
    'bg-brand text-white hover:shadow-[0_0_0_6px_rgba(0,113,227,0.14),0_12px_40px_rgba(0,113,227,0.45)]',
  secondary: 'bg-black/5 text-ink hover:bg-black/10',
  light: 'bg-white text-ink hover:shadow-[0_0_0_6px_rgba(255,255,255,0.18),0_12px_40px_rgba(255,255,255,0.25)]',
}

export default function MagneticButton({
  children,
  href = '#',
  variant = 'primary',
  strength = 0.25,
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 })
  const external = href.startsWith('http')

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium tracking-tight transition-[box-shadow,background-color] duration-300 ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </motion.a>
  )
}
