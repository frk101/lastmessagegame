/**
 * Ink satırını konuşmacı + metin olarak ayırır.
 *
 *   "Deniz: eve vardın mı"        → gelen mesaj (deniz)
 *   "Emir: Kimsin?"               → giden mesaj
 *   "Emir — Not: ..."             → iç ses
 *   "Emir — Video: ..."           → medya altyazısı
 *   "Sistem: ..."                 → sistem uyarısı
 *   "Eski Not: ..." / "Zarf: ..." → not/kâğıt görünümü
 *   konuşmacısız satır            → sahne yönergesi (oyuncuya gösterilmez)
 *
 * Kurallar: docs/05_REACT_NATIVE_TEKNIK_REHBER.md §4.4
 */
import { CONTACT_BY_SPEAKER, type ContactId } from '../data/contacts';

export type LineKind =
  'incoming' | 'outgoing' | 'inner' | 'caption' | 'system' | 'note' | 'direction';

export interface ParsedLine {
  kind: LineKind;
  speaker?: string;
  contactId?: ContactId;
  text: string;
}

// Konuşmacı adı: harf, boşluk, nokta, tire ve uzun tire. En fazla 40 karakter.
const SPEAKER_RE = /^([\p{L}][\p{L}.\s—–-]{0,39}?):\s+(.+)$/u;
const NOTE_SPEAKERS = new Set(['Eski Not', 'Not', 'Zarf']);

export function parseLine(line: string): ParsedLine {
  const text = line.trim();
  const m = SPEAKER_RE.exec(text);
  if (!m) return { kind: 'direction', text };

  const speaker = (m[1] ?? '').trim();
  const body = (m[2] ?? '').trim();

  if (speaker === 'Emir') return { kind: 'outgoing', speaker, text: body };
  if (speaker === 'Emir — Not') return { kind: 'inner', speaker, text: body };
  if (/— (Video|Kayıt|Videodaki)$/.test(speaker)) return { kind: 'caption', speaker, text: body };
  if (speaker === 'Sistem') return { kind: 'system', speaker, text: body };
  if (NOTE_SPEAKERS.has(speaker)) return { kind: 'note', speaker, text: body };

  const contactId = CONTACT_BY_SPEAKER[speaker];
  return { kind: 'incoming', speaker, contactId, text: body };
}
