/**
 * Data kebun hidroponik — semua angka [CONTOH], ganti dengan data asli.
 */
export const kebunFacts: { value: string; label: string }[] = [
  { value: '2', label: 'Greenhouse' },
  { value: '2 × 1.000 L', label: 'Tandon nutrisi' },
  { value: '±1.800', label: 'Lubang tanam' },
  { value: 'NFT', label: 'Sistem' },
  { value: '30–35 hari', label: 'Siklus tanam' },
  { value: '150–200 g', label: 'Target bobot/pongan' },
];

export const kebunVarieties = ['Green Oak', 'Red Oak', 'Green Butterhead', 'Romi'];

/** [CONTOH] Ganti area pengiriman asli */
export const kebunDeliveryArea = 'Bandung dan sekitarnya';

export const kebunCycle: { title: string; description: string }[] = [
  {
    title: 'Semai',
    description: 'Benih dikecambahkan di rockwool, 7–10 hari di area semai.',
  },
  {
    title: 'Pindah tanam',
    description: 'Bibit kuat dipindah ke net pot di talang NFT.',
  },
  {
    title: 'Perawatan',
    description: 'Cek harian: EC & pH nutrisi, suhu, aliran air, dan hama.',
  },
  {
    title: 'Panen',
    description: 'Umur 30–35 hari, bobot target 150–200 g per pongan.',
  },
  {
    title: 'Sanitasi',
    description: 'Talang dan tandon dibersihkan sebelum siklus berikutnya.',
  },
];
