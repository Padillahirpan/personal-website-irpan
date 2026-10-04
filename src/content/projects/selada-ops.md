---
# [CONTOH] Detail (angka dampak, keputusan teknis) perlu dilengkapi Irpan.
title: 'Selada Ops'
summary: 'Aplikasi manajemen dan monitoring kebun hidroponik — dari jadwal tanam otomatis sampai log panen dan penjualan.'
status: 'Aktif'
stack: ['TypeScript', 'React', 'Tailwind CSS', 'SQLite']
cover: ../../assets/images/projects/selada-ops.jpg
order: 1
---

## Masalah

Ketika kebun mulai berjalan, semua catatan saya tersebar: jadwal tanam di kepala, log panen di aplikasi catatan, penjualan di chat WhatsApp. Saat daun selada menguning, saya tidak bisa menjawab pertanyaan sederhana: *apa yang berbeda minggu ini dibanding minggu lalu?*

Data yang ada, tapi tidak bisa dibaca — itu masalah klasik.

## Pendekatan

Saya perlakukan kebun seperti sistem produksi software:

1. **Semua adalah event.** Semai, pindah tanam, panen, penjualan, koreksi nutrisi — semua dicatat sebagai kejadian dengan tanggal.
2. **Jadwal turun otomatis.** Dari tanggal semai, aplikasi menghitung kapan harus pindah tanam dan kapan estimasi panen.
3. **Dashboard sederhana.** EC, pH, panen per minggu, dan sisa stok — dalam satu layar yang bisa saya lihat sambil minum kopi pagi.

## Hasil

- Waktu pencatatan harian turun dari ±15 menit jadi ±3 menit. [CONTOH]
- Estimasi panen kini akurat dalam rentang ±3 hari, cukup untuk janji ke pelanggan.
- Laporan mingguan untuk pembeli (restoran/toko) dibuat otomatis dari log penjualan.

## Stack

TypeScript, React, Tailwind CSS, dan SQLite — sengaja dipilih yang bisa jalan di perangkat seadanya di greenhouse tanpa layanan berbayar.

## Pelajaran

Masalah paling sulit bukan teknisnya, tapi disiplin input datanya. Aplikasi paling canggih tidak berguna kalau mencatatnya melelahkan — jadi antarmuka pencatatan saya desain paling dulu, paling sederhana.

Lihat juga: [kebun seladanya sendiri](/kebun).
