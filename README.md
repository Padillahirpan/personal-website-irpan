# Personal Website — Irpan

Website personal Irpan: proyek engineering, kebun selada hidroponik, dan tulisan.
Dibangun dengan **Astro 5 + Tailwind CSS v4**, konten berbasis file (Markdown + Content Collections), tanpa CMS dan tanpa database.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil statis di dist/
npm run preview  # pratinjau hasil build
```

## Yang perlu diganti sebelum rilis

Semua data yang sering berubah terpusat di `src/data/` — nilai bertanda `[CONTOH]` wajib diganti:

| File | Isi |
|---|---|
| `src/data/site.ts` | Tagline, email, handle GitHub/LinkedIn/Instagram, **nomor WhatsApp** (pesan selada otomatis terisi dari sini), URL domain |
| `src/data/experience.ts` | Timeline karier **bilingual `{ id, en }`** (sumber awal: `work.json`). **Verifikasi periode NTT ("2065" → 2026) dan Argapro ("Present")** serta semua poin dampak |
| `src/data/skills.ts` | Daftar skill per grup |
| `src/data/kebun.ts` | Angka sistem kebun **bilingual `{ id, en }`** (greenhouse, tandon, lubang tanam, varian, area kirim) |

Lainnya:

- **Domain:** ubah `site` di `astro.config.mjs` (atau set env `PUBLIC_SITE_URL` saat build). Mempengaruhi canonical, OG, RSS, sitemap, robots.
- **Foto & gambar:** semua gambar saat ini ilustrasi placeholder — ganti di `src/assets/images/` (nama file sama, tetap `.jpg`) dan `public/og-default.jpg` dengan foto asli.
- **CV:** ganti `public/cv.pdf` dengan CV asli.
- **Placeholder teks:** cari `{{` untuk menemukan bagian yang menunggu data asli (mis. kapasitas mingguan, area pengiriman detail).

## Dua bahasa (ID / EN)

- **Indonesia (default)** di rute tanpa prefix: `/`, `/about`, `/kebun`, …
- **English** di prefix `/en`: `/en`, `/en/about`, `/en/kebun`, …
- Toggle **ID | EN** ada di header, di sebelah toggle tema — mengarah ke halaman yang sama di bahasa lain.
- Setiap halaman otomatis memancarkan `hreflang` (`id`, `en`, `x-default`) untuk SEO.

**Edit teks UI:** semua string dua bahasa ada di `src/i18n/ui.ts` (objek `id` dan `en` — struktur harus identik, dijaga TypeScript). Data bilingual (`{ id, en }`): `src/data/experience.ts` dan `src/data/kebun.ts`.

**Konten artikel/jurnal kebun** ditulis dalam bahasa aslinya (Indonesia) dan dirender sama di kedua rute — chrome/label di sekitarnya tetap diterjemahkan. Kalau nanti ingin post berbahasa Inggris, cukup tulis post-nya dalam EN (konten tidak diterjemahkan otomatis).

## Menambah konten

**Post blog baru** — buat satu file di `src/content/writing/`:

```md
---
title: 'Judul tulisan'
description: 'Ringkasan satu kalimat.'
date: 2026-10-04
category: 'Jurnal'        # Jurnal | Teknologi | Kebun
tags: ['tag']
draft: false              # true = tidak ikut build produksi (tetap tampil saat dev)
cover: ../../assets/images/writing/nama-gambar.jpg   # opsional
---

Isi tulisan di sini...
```

**Proyek baru** — buat satu file di `src/content/projects/` dengan front matter
(`title, summary, status, stack, link?, cover?, order`) dan isi bagian
`## Masalah / Pendekatan / Hasil / Stack / Pelajaran`.

**Jurnal kebun baru** — buat satu file di `src/content/kebun-log/`:

```md
---
title: 'Judul singkat'
date: 2026-10-04
photo: ../../assets/images/kebun/nama-foto.jpg
---

2–3 kalimat catatan kebun.
```

Skema divalidasi saat build (`src/content.config.ts`) — front matter salah = build gagal, bukan error production.

## Struktur

```
src/
├─ components/
│  ├─ pages/      Isi halaman per bahasa (HomePage, AboutPage, KebunPage, …) — dipakai ID & EN
│  └─ …           Header, Footer, ThemeToggle, LangToggle, BaseHead (SEO), ProjectCard, PostList, Timeline
├─ i18n/ui.ts     Kamus dua bahasa + helper (withLang, langAlternates)
├─ layouts/       BaseLayout, PostLayout
├─ pages/         Rute ID (index, about, …) + rute EN di pages/en/
├─ content/       writing/ · projects/ · kebun-log/ (konten = file)
├─ data/          site, experience, skills, kebun (edit di sini, bukan di komponen)
├─ styles/        global.css — design tokens light/dark (CSS variables)
└─ utils/         helper tanggal, waktu baca, sortir post, getStaticPaths
```

Fitur teknis: dark/light mode tanpa flash (inline script `<head>`, pilihan disimpan di `localStorage`), font self-host (Newsreader + Inter + JetBrains Mono), Shiki dual theme untuk code block, RSS `/rss.xml`, sitemap otomatis, JSON-LD (`Person` & `BlogPosting`), OG + Twitter card, filter kategori blog ringan (vanilla JS).

## Analytics (opsional, tanpa cookie)

Set environment variable `PUBLIC_PLAUSIBLE_DOMAIN=domain-anda.com` saat build untuk mengaktifkan Plausible. Tanpa env = tanpa analytics.

## Deploy

### Cloudflare Pages (disarankan)

1. Push repo ini ke GitHub/GitLab.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build` · Output directory: `dist` · Node version: 18+.
4. (Opsional) Set env `PUBLIC_SITE_URL=https://domain-anda.com` agar canonical/OG/sitemap benar.

### Vercel

1. Import repo di vercel.com → framework terdeteksi **Astro** otomatis.
2. Build `npm run build`, output `dist` (sudah default).
3. Tambahkan domain di Settings → Domains, lalu set `PUBLIC_SITE_URL`.

Setelah live, uji: buka `/rss.xml`, `/sitemap-index.xml`, `/robots.txt`, dan tombol "Pesan selada" (harus membuka WhatsApp dengan pesan terisi).
