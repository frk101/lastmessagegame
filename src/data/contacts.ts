/**
 * Kişi kartları. Mesajlar kişi ID'si ile saklanır; görünen ad değişebilir (#ad_degistir).
 * Kaynak: docs/03_VARLIK_LISTESI.md, docs/00_README.md (Kişiler)
 */
export type ContactId = 'bilinmeyen' | 'm' | 'deniz' | 'is' | 'emir_gecmis' | 'sistem';

export interface Contact {
  id: ContactId;
  defaultName: string;
  showLastSeen: boolean;
}

export const CONTACTS: Record<ContactId, Contact> = {
  bilinmeyen: { id: 'bilinmeyen', defaultName: 'Bilinmeyen Numara', showLastSeen: false },
  m: { id: 'm', defaultName: 'M.', showLastSeen: false },
  deniz: { id: 'deniz', defaultName: 'Deniz', showLastSeen: true },
  is: { id: 'is', defaultName: 'Ekip', showLastSeen: false },
  emir_gecmis: { id: 'emir_gecmis', defaultName: 'Emir', showLastSeen: false },
  sistem: { id: 'sistem', defaultName: 'Sistem', showLastSeen: false },
};

/** Ink'teki konuşmacı adı → kişi ID'si */
export const CONTACT_BY_SPEAKER: Record<string, ContactId | undefined> = {
  'Bilinmeyen Numara': 'bilinmeyen',
  Bilinmeyen: 'bilinmeyen',
  'M.': 'm',
  Deniz: 'deniz',
  Ekip: 'is',
};
