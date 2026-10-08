/**
 * Data kebun hidroponik — semua angka [CONTOH], ganti dengan data asli.
 * Teks bilingual: { id, en }.
 */
export interface Localized {
  id: string;
  en: string;
}

export const kebunFacts: { value: Localized; label: Localized }[] = [
  { value: { id: '2', en: '2' }, label: { id: 'Greenhouse', en: 'Greenhouses' } },
  { value: { id: '2 × 1.000 L', en: '2 × 1,000 L' }, label: { id: 'Tandon nutrisi', en: 'Nutrient tanks' } },
  { value: { id: '±1.800', en: '±1,800' }, label: { id: 'Lubang tanam', en: 'Planting holes' } },
  { value: { id: 'NFT', en: 'NFT' }, label: { id: 'Sistem', en: 'System' } },
  { value: { id: '30–35 hari', en: '30–35 days' }, label: { id: 'Siklus tanam', en: 'Growing cycle' } },
  { value: { id: '150–200 g', en: '150–200 g' }, label: { id: 'Target bobot/pongan', en: 'Target weight/head' } },
];

export const kebunVarieties = ['Batavia Lettuce'];

/** [CONTOH] Ganti area pengiriman asli */
export const kebunDeliveryArea: Localized = {
  id: 'Tasikmalaya, Sumedang, Cicalengka dan sekitarnya',
  en: 'Tasikmalaya, Sumedang, Cicalengka and nearby areas',
};

export const kebunCycle: { title: Localized; description: Localized }[] = [
  {
    title: { id: 'Semai', en: 'Sowing' },
    description: {
      id: 'Benih dikecambahkan di rockwool, 7–10 hari di area semai.',
      en: 'Seeds germinated in rockwool, 7–10 days in the nursery.',
    },
  },
  {
    title: { id: 'Pindah tanam', en: 'Transplanting' },
    description: {
      id: 'Bibit kuat dipindah ke net pot di talang NFT.',
      en: 'Strong seedlings move to net pots on the NFT channels.',
    },
  },
  {
    title: { id: 'Perawatan', en: 'Care' },
    description: {
      id: 'Cek harian: EC & pH nutrisi, suhu, aliran air, dan hama.',
      en: 'Daily checks: nutrient EC & pH, temperature, water flow, and pests.',
    },
  },
  {
    title: { id: 'Panen', en: 'Harvest' },
    description: {
      id: 'Umur 30–35 hari, bobot target 150–200 g per pongan.',
      en: 'Day 30–35, target weight 150–200 g per head.',
    },
  },
  {
    title: { id: 'Sanitasi', en: 'Sanitation' },
    description: {
      id: 'Talang dan tandon dibersihkan sebelum siklus berikutnya.',
      en: 'Channels and tanks cleaned before the next cycle.',
    },
  },
];
