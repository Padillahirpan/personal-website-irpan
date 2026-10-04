---
title: 'Memilih Astro untuk website personal saya'
description: 'Kenapa website ini dibangun dengan Astro dan Tailwind, bukan React SPA atau Flutter Web — dari sudut pandang engineer mobile yang peduli performa.'
date: 2026-09-18
category: 'Teknologi'
tags: ['astro', 'web', 'performa']
cover: ../../assets/images/writing/astro.jpg
---

Latar belakang saya Android. Delapan tahun di Kotlin, Java, sedikit Flutter dan React Native. Jadi saat memutuskan bikin website personal, saya menilai pilihan itu seperti menilai arsitektur aplikasi: apa kebutuhannya, apa biayanya.

## Kebutuhannya sederhana

Website personal itu konten statis: tulisan, proyek, info kebun. Yang penting cepat dimuat, mudah ditemukan Google, dan gampang di-update. Tidak ada state kompleks, tidak ada real-time, tidak ada login.

Artinya: yang saya butuhkan bukan aplikasi, melainkan **dokumen yang bagus**.

## Kenapa bukan SPA

Single Page Application (React/Vue penuh) membayar biaya di depan: bundle JavaScript besar sebelum satu kalimat pun terbaca. Untuk dashboard itu wajar. Untuk halaman yang tujuannya *dibaca dan ditemukan*, itu biaya yang tidak perlu.

Flutter Web pun saya pertimbangkan sekilas — familier bagi saya, tapi ukuran CanvasKit-nya dan renderabilitas teks oleh mesin pencari membuatnya kurang cocok untuk konten.

## Apa yang ditawarkan Astro

Astro memaksa satu ide bagus: **kirim HTML, kirim JavaScript hanya kalau perlu.**

- Zero JavaScript secara default. Theme toggle dan menu adalah satu-satunya skrip kecil di website ini.
- Content Collections: blog, proyek, dan jurnal kebun cukup ditulis sebagai file Markdown dengan skema tervalidasi. Mirip compile-time safety yang saya sukai di Kotlin.
- Sintaks komponen terasa familier, dan kalau butuh React di satu titik, bisa dimasukkan secara bertahap.

```ts
// Schema koleksi "writing" — konten tervalidasi saat build, bukan saat production
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Jurnal', 'Teknologi', 'Kebun']),
    draft: z.boolean().default(false),
  }),
});
```

Kalau front-matter salah, build gagal. Sebagai orang yang pernah dikejutkan crash produksi karena data tidak tervalidasi, saya suka error yang datang lebih awal.

## Hasilnya

Halaman beranda jadi dokumen HTML murni dengan font self-hosted — laporan Lighthouse mobile di angka 95+ untuk keempat kategori, dan itu tanpa optimasi aneh-aneh.

Bukan sihir, cuma memilih alat yang sesuai kebutuhan. Prinsip yang sama seperti memilih NFT daripada DFT untuk selada: tergantung konteksnya, bukan trennya.
