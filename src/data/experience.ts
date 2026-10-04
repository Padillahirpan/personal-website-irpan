/**
 * Timeline karier — sumber: work.json (disusun dari terbaru ke terlama).
 * [CONTOH] Poin dampak ditulis dalam format hasil dan perlu diverifikasi/dilengkapi.
 * Catatan: work.json menulis NTT mulai "2065" (typo, dibaca 2026) dan Argapro "Present"
 * (bertabrakan dengan Cakap 2022–2025, dibaca s.d. 2022). Verifikasi dengan Irpan.
 */
export interface ExperienceEntry {
  role: string;
  company: string;
  start: string;
  end: string;
  summary?: string;
  impact: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Developer (Kontrak)',
    company: 'NTT Global Indo',
    start: '2026',
    end: 'Kini',
    summary: 'Menyediakan jasa pengembangan perangkat lunak untuk NTT Global Indo.',
    impact: ['{{poin dampak — verifikasi}}'],
  },
  {
    role: 'Career Break',
    company: 'Istirahat & reset arah',
    start: '2025',
    end: '2026',
    summary:
      'Istirahat setelah bertahun-tahun sprint, lalu sengaja meluangkan waktu untuk keluarga, kebun, dan menulis lagi.',
    impact: [
      'Membangun kebun selada hidroponik dari nol dan menjalankannya hingga panen rutin',
      'Membangun Selada Ops, aplikasi monitoring kebun buatan sendiri',
      'Mulai rutin menulis jurnal dan catatan teknis',
    ],
  },
  {
    role: 'Android Engineer',
    company: 'Cakap',
    start: '2022',
    end: '2025',
    summary: 'EdTech terkemuka di Indonesia untuk pembelajaran bahasa online.',
    impact: [
      'Meningkatkan stabilitas kelas 1:1 berbasis video sehingga rating aplikasi naik ke 4,6 di Play Store',
      'Memangkas waktu rilis dari dua minggu menjadi tiga hari lewat CI/CD GitLab dan Fastlane',
      'Menurunkan crash rate dari 1,8% ke 0,4% melalui migrasi bertahap RxJava ke Coroutines',
      'Mengganti UI legacy XML ke Jetpack Compose modul demi modul tanpa mengganggu rilis',
    ],
  },
  {
    role: 'Android Developer',
    company: 'Argapro',
    start: '2021',
    end: '2022',
    summary: 'Perusahaan teknologi untuk sektor pertanian.',
    impact: [
      'Membangun aplikasi Android untuk petani dari nol hingga dipakai ribuan pengguna',
      'Memangkas ukuran APK sekitar 35% sehingga lebih mudah diunduh di jaringan lambat',
      'Menyederhanakan arsitektur dengan Koin dan Coroutines',
    ],
  },
  {
    role: 'Android Developer',
    company: 'Rolling Glory',
    start: '2019',
    end: '2021',
    summary: 'Digital agency yang berfokus pada pengembangan dan desain aplikasi mobile.',
    impact: [
      'Mengirimkan 8+ aplikasi klien dari berbagai industri tepat waktu',
      'Menjadi bagian tim yang mempertahankan kualitas lewat code review dan SonarQube',
    ],
  },
  {
    role: 'Mobile Developer',
    company: 'Bigio.id',
    start: '2018',
    end: '2019',
    summary: 'Startup solusi digital untuk usaha kecil dan menengah.',
    impact: [
      'Merilis aplikasi Android dan iOS dari satu codebase React Native',
      'Menerapkan build otomatis dengan Expo sehingga rilis lebih cepat dan konsisten',
    ],
  },
];
