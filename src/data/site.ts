/**
 * Data situs yang sering berubah — edit di sini, bukan di komponen.
 * Teks UI dua bahasa ada di src/i18n/ui.ts; file ini untuk fakta (kontak, sosial, WA).
 */
export const SITE = {
  name: 'Irpan Padillah',
  // Deskripsi default (feed RSS)
  description:
    'Website personal Irpan: proyek software engineering, kebun selada hidroponik, dan tulisan tentang teknologi serta kebun.',
  // [CONTOH] Harus sama dengan `site` di astro.config.mjs (atau env PUBLIC_SITE_URL)
  url: 'https://irpan.example.com',

  email: 'padillahirpan@gmail.com',

  socials: {
    github: 'https://github.com/padillahirpan', // [CONTOH] ganti handle
    linkedin: 'https://www.linkedin.com/in/padillahirpan', // [CONTOH] ganti handle
    instagram: '', // [CONTOH] ganti handle
  },

  // Khusus pemesanan selada — [CONTOH] ganti nomor asli (format internasional tanpa +)
  whatsapp: {
    number: '6289661960179',
    message:
      'Halo Kang! Saya ingin memesan selada hidroponik. Boleh info varian, harga, dan area pengiriman terbaru?',
  },
} as const;

export const waLink = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(
  SITE.whatsapp.message,
)}`;
