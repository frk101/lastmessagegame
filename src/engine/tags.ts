/**
 * Ink etiket ayrıştırıcı.
 *
 * Ink'te "# saat:23:16" yazınca inkjs bize "saat:23:16" metnini verir.
 * Bu dosya o metni { name: 'saat', args: ['23:16'] } biçimine çevirir.
 *
 * Etiketlerin tam listesi ve anlamları: docs/02_ETIKET_SOZLUGU.md
 * Yeni etiket eklerken: önce sözlüğe, sonra KNOWN_TAGS listesine, sonra handlers'a ekle.
 */

export interface ParsedTag {
  raw: string;
  name: string;
  args: string[];
}

/**
 * Argüman sayısı sabit olan etiketler.
 * Son argüman kalan her şeyi alır; böylece "saat:23:16" → ['23:16'] olur, ['23','16'] değil.
 * Listede olmayan etiketler bütün ":" işaretlerinden bölünür.
 */
const ARITY: Record<string, number> = {
  saat: 1,
  tarih: 1,
  saat_akis: 1,
  bekle: 1,
  saat_bekle: 1,
  geri_sayim: 1,
  kisi: 1,
  yaziyor: 2,
  yaziyor_kes: 1,
  foto_gonder: 2,
  ad_degistir: 2,
  durum: 2,
  sabitle: 1,
  bildirim: 1,
  karart: 1,
  ac: 1,
  glitch: 1,
  flashback: 1,
  sinyal: 1,
  sarj: 1,
  app_ac: 1,
  app_goster: 1,
  yonlendir: 2,
  ikinci_telefon: 1,
  adim_bekle: 1,
  ambiyans: 1,
  sfx: 1,
  muzik: 1,
  guven: 1,
  kendime_not: 1,
  bolum_sonu: 1,
  final: 1,
};

export function parseTag(raw: string): ParsedTag {
  const text = raw.trim();
  const colon = text.indexOf(':');
  if (colon === -1) return { raw: text, name: text, args: [] };

  const name = text.slice(0, colon).trim();
  const rest = text.slice(colon + 1).trim();
  const arity = ARITY[name];

  if (arity === undefined) return { raw: text, name, args: rest.split(':') };

  const parts = rest.split(':');
  const head = parts.slice(0, arity - 1);
  const tail = parts.slice(arity - 1).join(':');
  return { raw: text, name, args: [...head, tail] };
}

export function parseTags(raw: readonly string[] | null | undefined): ParsedTag[] {
  return (raw ?? []).map(parseTag).filter((t) => t.name.length > 0);
}

/** "hotspot(FOTO_B01,4)" → { type: 'hotspot', args: ['FOTO_B01', '4'] } */
export function parseCall(expr: string): { type: string; args: string[] } {
  const m = /^\s*([a-z_]+)\s*\((.*)\)\s*$/i.exec(expr);
  if (!m) return { type: expr.trim(), args: [] };
  const inner = (m[2] ?? '').trim();
  return {
    type: m[1] ?? '',
    args: inner ? inner.split(',').map((a) => a.trim()) : [],
  };
}

/**
 * docs/02_ETIKET_SOZLUGU.md'deki bütün etiket adları.
 * __tests__/engine/tags.test.ts bu listenin sözlükle aynı olduğunu kontrol eder.
 */
export const KNOWN_TAGS = [
  // zaman
  'saat',
  'tarih',
  'saat_akis',
  'bekle',
  'saat_bekle',
  'geri_sayim',
  // mesajlar
  'kisi',
  'yaziyor',
  'yaziyor_kes',
  'foto_gonder',
  'ad_degistir',
  'durum',
  'sil_glitch',
  'sabitle',
  'emir_ic',
  // ekran
  'titresim',
  'bildirim',
  'kilit_ekrani',
  'ana_ekran',
  'karart',
  'ac',
  'telefon_kapan',
  'telefon_ac',
  'glitch',
  'flashback',
  'sinyal',
  'sarj',
  'app_ac',
  'app_goster',
  'yonlendir',
  'ikinci_telefon',
  // varlık
  'galeri_ekle',
  'not_ekle',
  'ses_ekle',
  'video_ekle',
  'dosya_ekle',
  'arama_ekle',
  'ipucu',
  'ipucu_cevir',
  'gizli',
  'geri_yukle',
  // koşul
  'adim_bekle',
  // ses
  'ambiyans',
  'sfx',
  'muzik',
  'sessizlik',
  'sessizlik_tam',
  // meta
  'guven',
  'kendime_not',
  'bolum_sonu',
  'final',
  'kayit',
] as const;

export type TagName = (typeof KNOWN_TAGS)[number];
