/**
 * Timeline karier — sumber: work.json (disusun dari terbaru ke terlama).
 * Teks bilingual { id, en }; [CONTOH] poin dampak perlu diverifikasi/dilengkapi.
 * Catatan: work.json menulis NTT mulai "2065" (typo, dibaca 2026) dan Argapro
 * "Present" (bertabrakan dengan Cakap 2022–2025, dibaca s.d. 2022). Verifikasi dengan Irpan.
 */
export interface Localized {
  id: string;
  en: string;
}

export interface ExperienceEntry {
  role: Localized;
  company: string;
  start: string;
  end: string;
  summary?: Localized;
  impact: Localized[];
}

export const experience: ExperienceEntry[] = [
  {
    role: { id: 'Software Developer (Kontrak)', en: 'Software Developer (Contract)' },
    company: 'NTT Global Indo',
    start: '2026',
    end: 'Kini',
    summary: {
      id: 'Menyediakan jasa pengembangan perangkat lunak untuk NTT Global Indo.',
      en: 'Providing software development services to NTT Global Indo.',
    },
    impact: [{ id: '{{poin dampak — verifikasi}}', en: '{{impact points — verify}}' }],
  },
  {
    role: { id: 'Career Break', en: 'Career Break' },
    company: 'Istirahat & reset arah',
    start: '2025',
    end: '2026',
    summary: {
      id: 'Istirahat setelah bertahun-tahun sprint, lalu sengaja meluangkan waktu untuk keluarga, kebun, dan menulis lagi.',
      en: 'Rest after years of sprinting, then deliberately making time for family, the garden, and writing again.',
    },
    impact: [
      {
        id: 'Membangun kebun selada hidroponik dari nol dan menjalankannya hingga panen rutin',
        en: 'Built a hydroponic lettuce garden from scratch and ran it to regular harvests',
      },
      {
        id: 'Membangun Selada Ops, aplikasi monitoring kebun buatan sendiri',
        en: 'Built Selada Ops, a garden monitoring app of my own',
      },
      {
        id: 'Mulai rutin menulis jurnal dan catatan teknis',
        en: 'Started writing a journal and technical notes regularly',
      },
    ],
  },
  {
    role: { id: 'Android Engineer', en: 'Android Engineer' },
    company: 'Cakap',
    start: '2022',
    end: '2025',
    summary: {
      id: 'EdTech terkemuka di Indonesia untuk pembelajaran bahasa online.',
      en: 'A leading Indonesian EdTech company for online language learning.',
    },
    impact: [
      {
        id: 'Meningkatkan stabilitas kelas 1:1 berbasis video sehingga rating aplikasi naik ke 4,6 di Play Store',
        en: 'Improved 1:1 video class stability, lifting the Play Store rating to 4.6',
      },
      {
        id: 'Memangkas waktu rilis dari dua minggu menjadi tiga hari lewat CI/CD GitLab dan Fastlane',
        en: 'Cut release time from two weeks to three days with GitLab CI/CD and Fastlane',
      },
      {
        id: 'Menurunkan crash rate dari 1,8% ke 0,4% melalui migrasi bertahap RxJava ke Coroutines',
        en: 'Reduced the crash rate from 1.8% to 0.4% by gradually migrating RxJava to Coroutines',
      },
      {
        id: 'Mengganti UI legacy XML ke Jetpack Compose modul demi modul tanpa mengganggu rilis',
        en: 'Migrated legacy XML UI to Jetpack Compose module by module without disrupting releases',
      },
    ],
  },
  {
    role: { id: 'Android Developer', en: 'Android Developer' },
    company: 'Argapro',
    start: '2021',
    end: '2022',
    summary: {
      id: 'Perusahaan teknologi untuk sektor pertanian.',
      en: 'A technology company focused on the agricultural sector.',
    },
    impact: [
      {
        id: 'Membangun aplikasi Android untuk petani dari nol hingga dipakai ribuan pengguna',
        en: 'Built the Android app for farmers from zero to thousands of users',
      },
      {
        id: 'Memangkas ukuran APK sekitar 35% sehingga lebih mudah diunduh di jaringan lambat',
        en: 'Cut APK size by about 35%, making it easier to download on slow networks',
      },
      {
        id: 'Menyederhanakan arsitektur dengan Koin dan Coroutines',
        en: 'Simplified the architecture with Koin and Coroutines',
      },
    ],
  },
  {
    role: { id: 'Android Developer', en: 'Android Developer' },
    company: 'Rolling Glory',
    start: '2019',
    end: '2021',
    summary: {
      id: 'Digital agency yang berfokus pada pengembangan dan desain aplikasi mobile.',
      en: 'A digital agency specializing in mobile app development and design.',
    },
    impact: [
      {
        id: 'Mengirimkan 8+ aplikasi klien dari berbagai industri tepat waktu',
        en: 'Shipped 8+ client apps across industries on time',
      },
      {
        id: 'Menjadi bagian tim yang mempertahankan kualitas lewat code review dan SonarQube',
        en: 'Helped the team keep quality high through code review and SonarQube',
      },
    ],
  },
  {
    role: { id: 'Mobile Developer', en: 'Mobile Developer' },
    company: 'Bigio.id',
    start: '2018',
    end: '2019',
    summary: {
      id: 'Startup solusi digital untuk usaha kecil dan menengah.',
      en: 'A startup building digital solutions for small and medium businesses.',
    },
    impact: [
      {
        id: 'Merilis aplikasi Android dan iOS dari satu codebase React Native',
        en: 'Released Android and iOS apps from a single React Native codebase',
      },
      {
        id: 'Menerapkan build otomatis dengan Expo sehingga rilis lebih cepat dan konsisten',
        en: 'Set up automated builds with Expo for faster, consistent releases',
      },
    ],
  },
];
