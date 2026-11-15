// GANTI nomor WhatsApp (format internasional tanpa +, contoh: 62812xxxxxxx)
export const WA_NUMBER = '62895397341865'

export const waLink = (
  msg = 'Halo 9 Dragon! Saya mau pesan paket hemat kuliah. Boleh minta menu hari ini?',
) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

export const NAV_LINKS = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Favorit', href: '#favorit' },
  { label: 'Ulasan', href: '#testimoni' },
  { label: 'Kontak', href: '#kontak' },
]

// Angka bersifat contoh — sesuaikan dengan data asli bisnis Anda.
export const STATS = [
  '12.000+ porsi tersaji',
  'Mulai dari Rp 12 rb',
  'Siap dalam < 7 menit',
  'Rating 4,9 dari mahasiswa',
  'Dekat 5 kampus',
  'Bahan segar setiap hari',
  'Antar ke depan kelas',
  'Paket langganan mingguan',
]

export const EASE = [0.22, 1, 0.36, 1]
