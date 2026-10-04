/**
 * Data situs yang sering berubah — edit di sini, bukan di komponen.
 * Semua nilai bertanda [CONTOH] perlu diganti dengan data asli.
 */
export const SITE = {
  name: 'Irpan',
  // [CONTOH] Ganti positioning jika perlu
  tagline: 'Software engineer yang juga menanam selada.',
  title: 'Irpan — Software engineer yang juga menanam selada',
  description:
    'Website personal Irpan: proyek software engineering, kebun selada hidroponik, dan tulisan tentang teknologi serta kebun.',
  locale: 'id-ID',
  // [CONTOH] Harus sama dengan `site` di astro.config.mjs (atau env PUBLIC_SITE_URL)
  url: 'https://irpan.example.com',

  email: 'halo@irpan.example.com', // [CONTOH] ganti email asli

  socials: {
    github: 'https://github.com/irpan', // [CONTOH] ganti handle
    linkedin: 'https://www.linkedin.com/in/irpan', // [CONTOH] ganti handle
    instagram: 'https://www.instagram.com/irpan', // [CONTOH] ganti handle
  },

  // Khusus pemesanan selada — [CONTOH] ganti nomor asli (format internasional tanpa +)
  whatsapp: {
    number: '6281234567890',
    message:
      'Halo Irpan! Saya ingin memesan selada hidroponik. Boleh info varian, harga, dan area pengiriman terbaru?',
  },
} as const;

export const waLink = `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(
  SITE.whatsapp.message,
)}`;
