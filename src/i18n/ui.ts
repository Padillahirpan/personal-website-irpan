/**
 * i18n — dua bahasa: `id` (default, tanpa prefix) dan `en` (prefix /en).
 * Semua teks UI terpusat di sini. Struktur `id` dan `en` HARUS identik
 * (divalidasi TypeScript lewat `typeof id` pada `en`).
 */
export const languages = { id: 'id', en: 'en' } as const;
export type Lang = (typeof languages)[keyof typeof languages];
export const defaultLang: Lang = 'id';

/** Tambahkan prefix bahasa pada path internal. */
export function withLang(path: string, lang: Lang): string {
  if (lang === 'id') return path;
  return path === '/' ? '/en' : `/en${path}`;
}

/** Path padanan ID & EN dari sebuah pathname (untuk hreflang + toggle). */
export function langAlternates(pathname: string): { id: string; en: string } {
  let p = pathname;
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  if (p === '') p = '/';
  const id = p === '/en' ? '/' : p.startsWith('/en/') ? p.slice(3) : p;
  const en = p === '/' ? '/en' : p.startsWith('/en') ? p : `/en${p}`;
  return { id: id || '/', en };
}

const id = {
  ogLocale: 'id-ID',
  skipToContent: 'Lewati ke konten',
  navAria: 'Navigasi utama',
  themeToggleLabel: 'Ganti tema terang/gelap',
  langToggleLabel: 'Ganti bahasa',
  minutesRead: (n: number) => `${n} menit baca`,
  footer: {
    navAria: 'Navigasi footer',
    socialsAria: 'Tautan sosial',
    tagline: 'Software engineer yang juga menanam selada.',
    builtWith: 'Dibangun dengan',
  },
  home: {
    title: 'Irpan — Software engineer yang juga menanam selada',
    description:
      'Website personal Irpan: proyek software engineering, kebun selada hidroponik, dan tulisan tentang teknologi serta kebun.',
    tagline: 'Saya Software engineer yang juga menanam selada.',
    heroParagraph:
      'Delapan tahun membangun aplikasi Android dan web. Sejak 2026 saya juga menanam selada hidroponik — dan membangun sistem untuk mengelolanya. Di sini kamu bisa menjelajahi keduanya.',
    ctaPrimary: 'Lihat proyek',
    ctaSecondary: 'Pesan selada segar',
    profileAlt: 'Foto profil Irpan',
    doorsTitle: 'Satu tempat, tiga pintu',
    cards: [
      {
        href: '/projects',
        title: 'Engineering',
        text: 'Delapan tahun membangun aplikasi mobile dan web — dari kelas bahasa online sampai sistem inventori toko furnitur.',
      },
      {
        href: '/kebun',
        title: 'Kebun',
        text: 'Selada hidroponik yang ditanam serius, dipanen rutin, dan bisa dipesan langsung oleh restoran dan toko sayur.',
      },
      {
        href: '/writing',
        title: 'Tulisan',
        text: 'Jurnal, catatan teknis, dan pelajaran dari kebun. Ditulis pelan-pelan dan rutin.',
      },
    ],
    enter: 'Masuk →',
    latestTitle: 'Tulisan terbaru',
    latestAll: 'Semua tulisan →',
    contactTitle: 'Mari terhubung',
    contactText:
      'Punya proyek, lowongan, atau sekadar ingin bicara soal selada? Saya senang ditemui di keduanya.',
    contactButton: 'Hubungi saya',
    waButton: 'WhatsApp (pesan selada)',
  },
  about: {
    title: 'About',
    metaDescription:
      'Perjalanan Irpan: dari Android ke Flutter, React Native, dan web — lalu bertani selada hidroponik dan menulis lagi.',
    story: [
      'Saya Irpan dari Bandung, software engineer yang sudah delapan tahun lebih menulis kode. Mulai dari Android dengan Java, pindah ke Kotlin, lalu Flutter dan React Native, dan sekarang juga membangun untuk web. Hal yang paling saya sukai dari kerja ini tetap sama dari dulu: melihat sesuatu yang saya bangun dipakai orang sungguhan.',
      'Tahun 2025 saya mengambil jeda karier. Setelah bertahun-tahun sprint dari satu rilis ke rilis lain, saya butuh waktu untuk berhenti — dan tanpa rencana, mulai menanam selada hidroponik dalam skala kecil. Ternyata ketagihan. Awal 2026 kebun itu jadi serius, dan sekarang menjadi bagian tetap dari hari-hari saya.',
      'Menariknya, kebun mengajarkan hal yang sama dengan software: sistem, siklus, observasi, dan iterasi.',
    ],
    experience: 'Experience',
    download: 'Unduh CV (PDF)',
    skills: 'Skills',
  },
  projects: {
    title: 'Projects',
    metaDescription:
      'Proyek software pilihan Irpan: Selada Ops, TokoKu, Hika no Gakusei, dan lainnya — masalah, pendekatan, dan hasilnya.',
    intro: 'Kualitas, bukan kuantitas: proyek yang benar-benar saya bangun, dirawat, dan dipakai.',
    clientTitle: 'Proyek Klien',
    clientIntro:
      'Aplikasi yang saya kerjakan bersama tim dan klien selama karier — sebagian masih dipakai sampai sekarang.',
    back: '← Semua proyek',
    visit: 'Kunjungi situs ↗',
    stackLabel: 'Teknologi',
    navAria: 'Navigasi proyek',
    screenshotAlt: (title: string) => `Tangkapan layar proyek ${title}`,
  },
  kebun: {
    title: 'Kebun',
    metaDescription:
      'Kebun selada hidroponik Irpan: sistem NFT, siklus tanam 30–35 hari, jurnal kebun, dan cara memesan selada untuk restoran dan toko sayur.',
    story: [
      '2026 saya mulai bertani selada hidroponik. Bukan karena sudah jago — justru karena belum. Saya ingin memahami makanan dari sisi produksinya, dan hidroponik terasa seperti cabang dari pekerjaan saya: sistem yang bisa diukur, diatur, dan diperbaiki.',
      'Ini kebun yang dikelola dengan cara belajar sambil berjalan. Beberapa siklus gagal karena saya telat memperhatikan suhu; beberapa berhasil karena rutinitas pagi tidak pernah ditinggal. Semua dicatat jujur di jurnal di bawah — termasuk yang tidak beres.',
      'Kalau Anda restoran atau toko sayur yang mencari selada segar dengan rantai pasok pendek, <a href="{pesan}">cara memesannya ada di sini</a>.',
    ],
    system: 'Sistem kebun',
    cycle: 'Siklus tanam',
    journal: 'Jurnal kebun',
    journalIntro: 'Catatan pendek langsung dari kebun. Entri terbaru di atas.',
    journalAlt: (title: string) => `Foto jurnal kebun: ${title}`,
    storyPhotoAlt: 'Kepala selada segar yang baru dipanen dari kebun',
    gallery: 'Galeri',
    opsTitle: 'Sistemnya saya bangun sendiri',
    opsText:
      'Jadwal tanam, log panen, sampai rekap penjualan kebun dikelola lewat Selada Ops — aplikasi monitoring yang saya kembangkan dari nol.',
    opsButton: 'Lihat detail proyek',
    orderTitle: 'Pesan selada langsung dari kebun',
    orderIntro:
      'Untuk restoran, toko sayur, dan dapur di area {area}. Panen rutin, dipanen hari yang sama dengan pengiriman.',
    varieties: 'Varian',
    capacity: 'Kapasitas',
    capacityText: 'Panen rutin tiap siklus (±1.000 lubang tanam)',
    delivery: 'Area kirim',
    deliveryDetail: '',
    orderButton: 'Pesan via WhatsApp',
    orderNote: 'Tombol ini membuka WhatsApp dengan pesan yang sudah terisi otomatis.',
  },
  writing: {
    title: 'Writing',
    metaDescription: 'Tulisan Irpan: jurnal pribadi, catatan teknis, dan pelajaran dari kebun hidroponik.',
    intro: 'Jurnal, catatan teknis, dan pelajaran dari kebun. Ditulis pelan-pelan, rutin.',
    filterAria: 'Filter kategori',
    filters: { semua: 'Semua', jurnal: 'Jurnal', teknologi: 'Teknologi', kebun: 'Kebun' },
    toc: 'Daftar isi',
    copyLink: 'Salin tautan artikel',
    copied: 'Tautan disalin',
    navAria: 'Navigasi tulisan',
    coverAlt: (title: string) => `Ilustrasi artikel: ${title}`,
  },
  contact: {
    title: 'Contact',
    metaDescription:
      'Hubungi Irpan: email, LinkedIn, GitHub, Instagram, dan WhatsApp khusus pemesanan selada hidroponik.',
    intro: 'Cara paling cepat menghubungi saya lewat email. Untuk pemesanan selada, WhatsApp lebih cepat dibalas.',
    emailNote: 'Proyek, kolaborasi, atau sekadar menyapa.',
    linkedinNote: 'Profil profesional dan riwayat kerja.',
    githubNote: 'Kode dan proyek terbuka.',
    instagramNote: 'Keseharian kebun, kadang kode.',
    whatsappNote: 'Khusus untuk restoran dan toko yang ingin memesan selada.',
    whatsappValue: 'Pemesanan selada',
  },
  status: { Aktif: 'Aktif', Live: 'Live', Selesai: 'Selesai', Arsip: 'Arsip' },
  category: { Jurnal: 'Jurnal', Teknologi: 'Teknologi', Kebun: 'Kebun' },
};

const en: typeof id = {
  ogLocale: 'en-US',
  skipToContent: 'Skip to content',
  navAria: 'Main navigation',
  themeToggleLabel: 'Toggle light/dark theme',
  langToggleLabel: 'Switch language',
  minutesRead: (n: number) => `${n} min read`,
  footer: {
    navAria: 'Footer navigation',
    socialsAria: 'Social links',
    tagline: 'A software engineer who also grows lettuce.',
    builtWith: 'Built with',
  },
  home: {
    title: 'Irpan — A software engineer who also grows lettuce',
    description:
      "Irpan's personal website: software engineering projects, a hydroponic lettuce garden, and writing about technology and gardening.",
    tagline: 'Im a software engineer who also grows lettuce.',
    heroParagraph:
      'Eight years building Android and web apps. Since 2026 I also grow hydroponic lettuce — and build the systems to run it. Here you can explore both.',
    ctaPrimary: 'View projects',
    ctaSecondary: 'Order fresh lettuce',
    profileAlt: 'Profile photo of Irpan',
    doorsTitle: 'One place, three doors',
    cards: [
      {
        href: '/projects',
        title: 'Engineering',
        text: 'Eight years of building mobile and web apps — from online language classes to a furniture store inventory system.',
      },
      {
        href: '/kebun',
        title: 'Garden',
        text: 'Hydroponic lettuce grown seriously, harvested regularly, and ready to order directly by restaurants and greengrocers.',
      },
      {
        href: '/writing',
        title: 'Writing',
        text: 'A journal, technical notes, and lessons from the garden. Written slowly and regularly.',
      },
    ],
    enter: 'Enter →',
    latestTitle: 'Latest writing',
    latestAll: 'All writing →',
    contactTitle: "Let's connect",
    contactText:
      'Have a project, a role to fill, or just want to talk lettuce? I am happy to meet on either side.',
    contactButton: 'Get in touch',
    waButton: 'WhatsApp (lettuce orders)',
  },
  about: {
    title: 'About',
    metaDescription:
      "Irpan's journey: from Android to Flutter, React Native, and the web — then hydroponic lettuce farming and writing again.",
    story: [
      "I'm Irpan from Bandung, a software engineer who has been writing code for more than eight years. Starting with Java on Android, moving to Kotlin, then Flutter and React Native, and now building for the web too. What I love most about this craft has never changed: seeing something I built being used by real people.",
      'In 2025 I took a career break. After years of sprinting from one release to the next, I needed to stop — and, unplanned, started growing hydroponic lettuce on a small scale. It turned out to be addictive. In early 2026 the garden got serious, and it is now a permanent part of my days.',
      'Interestingly, the garden teaches the same lessons as software: systems, cycles, observation, and iteration.',
    ],
    experience: 'Experience',
    download: 'Download CV (PDF)',
    skills: 'Skills',
  },
  projects: {
    title: 'Projects',
    metaDescription:
      'Selected software projects by Irpan: Selada Ops, TokoKu, Hika no Gakusei, and more — the problem, the approach, and the results.',
    intro: 'Quality over quantity: projects I genuinely built, maintain, and use.',
    clientTitle: 'Client Work',
    clientIntro:
      'Apps I worked on with teams and clients throughout my career — some still in use today.',
    back: '← All projects',
    visit: 'Visit site ↗',
    stackLabel: 'Stack',
    navAria: 'Project navigation',
    screenshotAlt: (title: string) => `Screenshot of ${title}`,
  },
  kebun: {
    title: 'Kebun',
    metaDescription:
      "Irpan's hydroponic lettuce garden: an NFT system, 30–35 day growing cycles, a garden journal, and how to order lettuce for restaurants and greengrocers.",
    story: [
      'In 2026 I started growing hydroponic lettuce. Not because I am an expert — precisely because I am not. I wanted to understand food from the production side, and hydroponics feels like an extension of my day job: a system that can be measured, tuned, and improved.',
      'This garden is run by learning as I go. Some cycles failed because I was late noticing the heat; others succeeded because the morning routine was never skipped. Everything is recorded honestly in the journal below — including what went wrong.',
      'If you are a restaurant or greengrocer looking for fresh lettuce with a short supply chain, <a href="{pesan}">here is how to order</a>.',
    ],
    system: 'Garden system',
    cycle: 'Growing cycle',
    journal: 'Garden journal',
    journalIntro: 'Short notes straight from the garden. Newest entries first.',
    journalAlt: (title: string) => `Garden journal photo: ${title}`,
    storyPhotoAlt: 'A fresh lettuce head just harvested from the garden',
    gallery: 'Gallery',
    opsTitle: 'I built the system myself',
    opsText:
      'Planting schedules, harvest logs, and sales reports are all managed in Selada Ops — a monitoring app I developed from scratch.',
    opsButton: 'View project details',
    orderTitle: 'Order lettuce straight from the garden',
    orderIntro:
      'For restaurants, greengrocers, and kitchens in {area}. Regular harvests, cut on the same day as delivery.',
    varieties: 'Varieties',
    capacity: 'Capacity',
    capacityText: 'Regular harvest every cycle (±1,000 holes)',
    delivery: 'Delivery area',
    deliveryDetail: '',
    orderButton: 'Order via WhatsApp',
    orderNote: 'This button opens WhatsApp with a pre-filled message.',
  },
  writing: {
    title: 'Writing',
    metaDescription: "Irpan's writing: a personal journal, technical notes, and lessons from the hydroponic garden.",
    intro: 'A journal, technical notes, and lessons from the garden. Written slowly, regularly.',
    filterAria: 'Filter by category',
    filters: { semua: 'All', jurnal: 'Journal', teknologi: 'Technology', kebun: 'Garden' },
    toc: 'Table of contents',
    copyLink: 'Copy article link',
    copied: 'Link copied',
    navAria: 'Post navigation',
    coverAlt: (title: string) => `Article illustration: ${title}`,
  },
  contact: {
    title: 'Contact',
    metaDescription: 'Contact Irpan: email, LinkedIn, GitHub, Instagram, and WhatsApp for hydroponic lettuce orders.',
    intro: 'Email is the fastest way to reach me. For lettuce orders, WhatsApp gets the quickest reply.',
    emailNote: 'Projects, collaborations, or just saying hi.',
    linkedinNote: 'Professional profile and work history.',
    githubNote: 'Code and open projects.',
    instagramNote: 'Everyday garden life, sometimes code.',
    whatsappNote: 'For restaurants and shops that want to order lettuce.',
    whatsappValue: 'Lettuce orders',
  },
  status: { Aktif: 'Active', Live: 'Live', Selesai: 'Completed', Arsip: 'Archived' },
  category: { Jurnal: 'Journal', Teknologi: 'Technology', Kebun: 'Garden' },
};

export type UIDict = typeof id;

export function t(lang: Lang): UIDict {
  return lang === 'en' ? en : id;
}
