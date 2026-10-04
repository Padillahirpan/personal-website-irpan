# PROMPT: Personal Website — Irpan
---

## 1. Peran & Tujuan

Kamu adalah senior frontend engineer + desainer yang peduli pada kesederhanaan. Bangun **website personal** untuk **Irpan**, seorang Software Engineer (±8 tahun, Android/mobile → Flutter, React Native, web) yang sejak 2026 juga **bertani selada hidroponik** dan **mulai rutin menulis/jurnaling**.

**Tujuan website:** membantu orang menemukan dan memahami Irpan secara utuh, dalam satu tempat.

**Dua audiens utama:**
1. **Rekruter / klien / sesama engineer** → ingin tahu pengalaman, keahlian, dan proyek.
2. **Calon pembeli selada (restoran, toko sayur) & orang yang tertarik hidroponik** → ingin tahu kebunnya nyata, proses di baliknya, dan cara memesan.

Satu orang, dua dunia, satu cerita: *engineer yang membangun sistemnya sendiri, termasuk untuk kebunnya.*

**Prinsip utama:** website ini adalah alat, bukan arena pamer teknis. Sederhana, cepat, jelas, mudah di-update. Kalau ragu menambah sesuatu, jangan ditambah.

---

## 2. Struktur Informasi

Navigasi utama (maksimal 5 item): **About · Projects · Kebun · Writing · Contact**

| Halaman | Route | Isi |
|---|---|---|
| Home | `/` | Hero, 3 kartu ringkas (Engineering / Kebun / Tulisan), 3 tulisan terbaru, ajakan kontak |
| About | `/about` | Cerita singkat + **Experience (timeline karier)** + Skills + Pendidikan (opsional) |
| Projects | `/projects` | Proyek **coding** (kartu), halaman detail per proyek `/projects/[slug]` |
| Kebun | `/kebun` | Hidroponik: cerita, sistem, siklus tanam, jurnal panen, galeri, tombol pesan |
| Writing | `/writing` | Daftar blog + `/writing/[slug]` |
| Contact | di footer + `/contact` | Email, LinkedIn, GitHub, Instagram, WhatsApp |

**Keputusan struktur (jangan diubah tanpa alasan kuat):**
- **Experience ditaruh di dalam About**, bukan halaman terpisah. About = siapa saya + perjalanan karier saya.
- **Kebun adalah section tersendiri, bukan bagian dari Projects.** Alasannya: Projects berisi karya coding; Kebun punya identitas, audiens, dan tujuan komersial sendiri (menjual selada). Jembatannya: di Projects dan di Kebun ada link silang ke **Selada Ops** (aplikasi monitoring kebun yang saya bangun sendiri).
- Blog punya kategori: `Jurnal`, `Teknologi`, `Kebun`.

---

## 3. Tech Stack (sudah diputuskan)

- **Astro** (static site, output HTML cepat, SEO bagus — penting karena tujuannya "ditemukan orang")
- **Tailwind CSS v4** + CSS variables untuk design tokens
- **MDX / Markdown via Astro Content Collections** untuk blog, proyek, dan jurnal kebun (konten = file, tanpa CMS, tanpa database)
- **TypeScript**, `@fontsource` untuk self-host font, **Shiki** untuk code highlight (dual theme light/dark)
- **Deploy:** Cloudflare Pages atau Vercel (pilih salah satu, sertakan instruksi singkat)
- Tanpa framework UI berat. JavaScript client hanya untuk: theme toggle, menu mobile, (opsional) filter blog.

> Catatan: jangan pakai Flutter Web untuk situs ini — SEO dan waktu muat awal kurang cocok untuk kebutuhan "mudah ditemukan".

---

## 4. Design System

### Karakter
Tenang, hangat, rapi, banyak ruang kosong. Terinspirasi nuansa antarmuka Claude: latar off-white hangat, tipografi serif yang nyaman dibaca, satu warna aksen terracotta. **Tanpa gradient, tanpa shadow tebal, tanpa glassmorphism, tanpa ilustrasi 3D.**

### Warna (hanya 1 aksen)
Definisikan sebagai CSS variables. Verifikasi kontras WCAG AA (≥4.5:1 untuk teks) dan sesuaikan angka jika perlu.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#FAF9F5` | `#1F1E1D` |
| `--surface` | `#F0EEE6` | `#262624` |
| `--text` | `#141413` | `#F3F2EC` |
| `--muted` | `#5E5D59` | `#A8A69E` |
| `--border` | `#E3E0D5` | `#3A3936` |
| `--accent` | `#B85633` | `#D97757` |
| `--accent-fg` (teks di atas aksen) | `#FFFFFF` | `#1F1E1D` |

### Mode terang/gelap
- Default mengikuti `prefers-color-scheme`, ada **toggle** (ikon matahari/bulan) di header, pilihan disimpan di `localStorage`.
- **Tidak boleh ada flash of wrong theme:** set atribut `data-theme` lewat inline script kecil di `<head>` sebelum render.
- Semua komponen (termasuk code block dan gambar) harus enak dilihat di kedua mode.

### Tipografi
Font Claude bersifat proprietary, jadi gunakan padanan gratis dengan karakter serupa:
- **Heading & teks panjang (blog, cerita About/Kebun):** `Newsreader` (serif) — fallback `Georgia, serif`
- **UI, navigasi, label, metadata, body halaman non-blog:** `Inter` — fallback `system-ui, sans-serif`
- **Kode:** `JetBrains Mono`
- Skala: H1 `clamp(2.25rem, 5vw, 3.5rem)` weight 400–500, letter-spacing sedikit negatif; body 17–18px, `line-height: 1.7`
- Lebar baca: prose maksimal **68ch**; grid maksimal **1040px**; sisanya dipusatkan.

### Komponen & layout
- Radius 12px, border 1px `--border`, tanpa shadow (atau shadow sangat halus pada hover).
- Header minimal: nama di kiri, nav + toggle di kanan; di mobile, menu sederhana (bukan hamburger berlebihan).
- Spasi vertikal antar section lega (±96px desktop, ±64px mobile).
- Gerak: hanya transisi warna/opacity 150–200ms. Hormati `prefers-reduced-motion`.
- Fokus keyboard terlihat jelas (outline aksen).

---

## 5. Spesifikasi Per Halaman

### 5.1 Home `/`
1. **Hero:** nama, satu kalimat positioning, satu paragraf pendek, 2 tombol: **"Lihat proyek"** (utama) dan **"Pesan selada"** (sekunder, ke `/kebun#pesan`).
   - Positioning default (boleh saya ganti): *"Software engineer yang juga menanam selada."*
   - Foto profil: bulat/rounded, ukuran sedang, `{{foto-profil}}`.
2. **Tiga kartu:** Engineering (→ About/Projects), Kebun (→ Kebun), Tulisan (→ Writing). Masing-masing 1–2 kalimat.
3. **Tulisan terbaru:** 3 post terbaru (judul, tanggal, kategori, ringkasan 1 baris).
4. **Ajakan kontak** singkat di atas footer.

### 5.2 About `/about`
- **Cerita singkat** (3–4 paragraf, orang pertama, jujur dan tidak berlebihan): perjalanan dari Android → Flutter/React Native → web, lalu mulai bertani dan menulis.
- **Experience (timeline vertikal):** tiap entri = `peran · perusahaan · periode`, 2–4 poin dampak. Gunakan format **hasil**, bukan sekadar tugas ("Memangkas waktu build 40%", bukan "Mengerjakan build").
  - Entri contoh/placeholder: kontrak frontend developer terkait NTT Indonesia Technology `{{verifikasi nama, periode, dan poin dampak}}`; `{{entri lain}}`.
- **Skills:** dikelompokkan (Mobile · Web · Tools), tampil sebagai teks/tag sederhana, **bukan bar persentase**.
- Tombol unduh CV (PDF) `{{cv.pdf}}`.

### 5.3 Projects `/projects`
- Grid kartu: judul, 1 kalimat masalah, stack (tag), status, link.
- Halaman detail memakai format: **Masalah → Pendekatan → Hasil → Stack → Pelajaran** (+ screenshot).
- Proyek awal (placeholder, saya akan lengkapi):
  - **Selada Ops** — aplikasi manajemen & monitoring kebun hidroponik (jadwal tanam otomatis, log panen, log penjualan, dashboard analitik).
  - **TokoKu** — sistem inventori berbasis web untuk toko furnitur keluarga.
  - **Hika no Gakusei** — platform web belajar kana Jepang.
  - `{{proyek lain}}`
- Pilih kualitas, bukan kuantitas: tampilkan 3–6 proyek terbaik.

### 5.4 Kebun `/kebun`
Tujuan: membuat pengunjung percaya bahwa kebunnya nyata, dikelola serius, dan mudah dipesan.
1. **Cerita singkat:** kenapa mulai bertani hidroponik di 2026, apa yang sedang dipelajari. Nada: **jujur, belajar sambil berjalan, bukan sok ahli.**
2. **Sistem kebun:** ringkasan fakta nyata `{{jumlah greenhouse, tandon, lubang tanam, jenis selada, sistem (mis. NFT/DFT), siklus tanam, target bobot panen}}`. Tampilkan sebagai kartu angka sederhana.
3. **Siklus tanam:** alur visual sederhana Semai → Pindah tanam → Perawatan → Panen → Sanitasi (diagram HTML/SVG minimal, bukan gambar berat).
4. **Jurnal kebun:** daftar entri pendek (tanggal, foto, 2–3 kalimat) dari collection `kebun-log`. Ini sumber konten rutin yang ringan.
5. **Galeri foto:** grid rapi, lazy-load, ada alt text.
6. **Selada Ops:** kartu kecil "Saya membangun sistem monitoringnya sendiri" → link ke detail proyek.
7. **Pesan selada** (`id="pesan"`): info singkat untuk restoran/toko (varian, kapasitas, area pengiriman `{{isi}}`) + tombol **WhatsApp** dengan pesan terisi otomatis (`https://wa.me/{{nomor}}?text=...`).

### 5.5 Writing `/writing`
- Daftar post (terbaru di atas): judul, tanggal, kategori, estimasi waktu baca, ringkasan.
- Filter kategori sederhana (`Semua · Jurnal · Teknologi · Kebun`) — boleh via link query, tanpa JS berat.
- Halaman post: tipografi serif, daftar isi otomatis untuk post panjang, code highlight, gambar dengan caption, tombol bagikan sederhana (salin link), navigasi post sebelumnya/berikutnya.
- Front matter: `title, description, date, category, tags, draft, cover?`. `draft: true` tidak ikut build produksi.
- **RSS feed** di `/rss.xml`.
- Siapkan **3 post contoh** (placeholder): satu Jurnal, satu Teknologi, satu Kebun.
- Tanpa sistem komentar, tanpa newsletter di fase 1.

### 5.6 Contact
- Email, LinkedIn, GitHub, Instagram `{{handle}}`, WhatsApp (khusus pemesanan selada).
- Tanpa form di fase 1 (cukup tautan `mailto:` dan WhatsApp) — lebih sederhana dan tidak perlu backend.

---

## 6. SEO, Performa, Aksesibilitas

- Setiap halaman: `<title>`, meta description, canonical, Open Graph + Twitter card, **OG image** (boleh digenerate otomatis dengan template sederhana).
- **JSON-LD:** `Person` di Home/About; `BlogPosting` di post.
- `sitemap.xml`, `robots.txt`, favicon (mendukung dark mode).
- Gambar: format modern (WebP/AVIF), ukuran responsif, `loading="lazy"`, dimensi eksplisit untuk mencegah layout shift.
- Target Lighthouse **≥ 95** di Performance, Accessibility, Best Practices, SEO (mobile).
- Mobile-first; uji di lebar 360px.
- HTML semantik, urutan heading benar, `alt` pada gambar bermakna, kontras AA, navigasi penuh via keyboard.
- Analytics opsional dan ramah privasi (Plausible atau Umami), **tanpa cookie banner**. Sediakan di belakang environment variable.

---

## 7. Yang TIDAK Boleh Dibuat (batasan)

- Tanpa animasi kompleks, parallax, kursor kustom, 3D, easter egg, partikel.
- Tanpa CMS, database, login, atau backend.
- Tanpa bar persentase skill, tanpa counter "years of experience" yang berlebihan.
- Tanpa teks lorem ipsum di hasil akhir: gunakan placeholder `{{...}}` yang jelas atau teks contoh yang ditandai `[CONTOH]`.
- Jangan menambah halaman/fitur di luar spesifikasi ini tanpa bertanya.

---

## 8. Struktur Folder yang Diharapkan

```
/
├─ src/
│  ├─ components/        # Header, Footer, ThemeToggle, Card, Timeline, PostList, ...
│  ├─ layouts/           # BaseLayout, PostLayout
│  ├─ pages/             # index, about, projects/, kebun, writing/, contact, rss.xml
│  ├─ content/
│  │  ├─ writing/        # *.md(x)
│  │  ├─ projects/       # *.md(x)
│  │  ├─ kebun-log/      # *.md (jurnal kebun)
│  │  └─ config.ts       # schema koleksi
│  ├─ data/              # experience.ts, skills.ts, site.ts (nama, tagline, link sosial)
│  └─ styles/            # global.css (design tokens light/dark)
├─ public/               # favicon, og-default, cv.pdf, foto
├─ astro.config.mjs
└─ README.md             # cara edit konten, tambah post, deploy
```

Semua teks yang sering berubah (tagline, link sosial, nomor WA, experience, skills) harus **terpusat di `src/data/`** agar mudah diedit tanpa menyentuh komponen.

---

## 9. Urutan Pengerjaan

1. Inisialisasi Astro + Tailwind, design tokens light/dark, font, `BaseLayout`, Header/Footer, theme toggle (tanpa flash).
2. Content collections + schema, 3 post contoh, 3 proyek contoh, 3 entri jurnal kebun contoh.
3. Halaman Home, About (+ timeline), Projects.
4. Halaman Kebun dan Writing (+ RSS).
5. SEO (meta, OG, JSON-LD, sitemap), optimasi gambar, audit Lighthouse + aksesibilitas.
6. README dan instruksi deploy.

Di tiap tahap, jalankan build dan pastikan tanpa error sebelum lanjut.

---

## 10. Kriteria Selesai (Acceptance Checklist)

- [ ] Light dan dark mode berfungsi, tanpa flash saat load, pilihan tersimpan.
- [ ] Hanya satu warna aksen; kontras teks lolos AA di kedua mode.
- [ ] Font: Newsreader (serif) + Inter (sans) + JetBrains Mono, self-hosted.
- [ ] Semua halaman di bagian 2 tersedia dan terhubung dari navigasi.
- [ ] Menambah post baru cukup dengan membuat satu file `.md` di `content/writing/`.
- [ ] Menambah entri jurnal kebun cukup dengan satu file `.md` di `content/kebun-log/`.
- [ ] Tombol WhatsApp "Pesan selada" menghasilkan pesan terisi otomatis.
- [ ] Lighthouse mobile ≥ 95 untuk keempat kategori.
- [ ] Tampilan rapi di 360px, 768px, dan 1280px.
- [ ] Tidak ada placeholder yang tersisa selain yang bertanda `{{...}}` / `[CONTOH]`.
- [ ] README menjelaskan cara edit konten dan deploy.

---

## 11. Input yang Akan Saya Siapkan

- `{{foto-profil}}`, `{{cv.pdf}}`
- Bio singkat (±150 kata) dan positioning final
- Data experience (peran, perusahaan, periode, 2–4 poin dampak)
- Daftar skills
- Detail proyek (screenshot, link, hasil)
- Data kebun (angka sistem, foto, area pengiriman, varian selada)
- Nomor WhatsApp, email, handle LinkedIn / GitHub / Instagram
- Domain yang akan dipakai
