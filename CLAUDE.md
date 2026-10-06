# Last Message — Claude Code proje talimatları

@AGENTS.md

## Proje
Tamamı sahte bir telefon arayüzünde geçen, Türkçe, hikâye odaklı psikolojik gerilim oyunu. 16 bölüm, iki perde, ana motif **23:17**. Expo (React Native) + TypeScript + inkjs. Önce Android.

## Kullanıcı hakkında
- Türkçe konuş. Kod, değişken ve dosya adları İngilizce; arayüz ve hikâye Türkçe.
- Kullanıcı React Native'i **bu projeyle öğreniyor.** Her görevin sonunda ne yaptığını ve neden yaptığını 2–4 cümleyle, sade dille anlat. Kavramları ilk kullandığında tanıt.
- Telefonda test eden kullanıcıdır; sen telefonu göremezsin. Neye bakması gerektiğini net söyle.

## Okuma sırası (gerektiğinde)
1. `docs/05_REACT_NATIVE_TEKNIK_REHBER.md` — mimari ve kurallar. **Teknik konularda son söz.**
2. `docs/02_ETIKET_SOZLUGU.md` — Ink etiketleri (hikâye ↔ kod sözleşmesi)
3. `docs/03_VARLIK_LISTESI.md` — bütün varlık ve ipucu ID'leri
4. `docs/04_YOL_HARITASI.md` — kilometre taşları
5. `docs/bolum_XX.md` — sahne sahne görevler + sahne metinleri
6. `docs/SENARYO.md` — hikâyenin tamamı (kaynak: `docs/*.docx`)
7. `docs/01_ALTYAPI.md` — A-görevleri (Unity diliyle yazıldı; RN karşılığı docs/05 §9)

## Komutlar
| Komut | Ne yapar |
|---|---|
| `npm start` | Ink'i derler, geliştirme sunucusunu açar (telefonda Expo Go ile QR) |
| `npm run check` | Ink + tip kontrolü + lint + testler. **Görev bitmeden geçmeli.** |
| `npm run ink` / `npm run ink:watch` | `story/*.ink` → `assets/story/story.json` |
| `npm test` | Jest testleri |
| `npx expo install <paket>` | Paket ekleme (**önce kullanıcıdan onay**) |

## Kesin kurallar
1. **Hikâye metnini değiştirme.** Senaryodaki bir cümleyi, seçimi ya da sahneyi değiştirmek gerekiyorsa önce sor.
2. **Etiket sözlüğünün dışına çıkma.** Yeni etiket → önce `docs/02_ETIKET_SOZLUGU.md`, sonra `src/engine/tags.ts` (`KNOWN_TAGS`, gerekiyorsa `ARITY`), sonra işleyici, sonra kullanıcıya bildir.
3. **Varlık ID'leri** `docs/03_VARLIK_LISTESI.md` ile birebir. Gerçek dosya yoksa yer tutucu.
4. **Yeni paket eklemeden önce sor.** Expo Go'da çalışmayan yerel modül ekleme.
5. `src/engine/` React import etmez; oyun saati `clock.ts`'ten okunur.
6. Navigasyon kütüphanesi yok (Expo Router dahil). Uygulama geçişleri `uiStore` ile.
7. `git push` yapma; kullanıcı yapar.

## Çalışma düzeni
- Görevler: `TASKS.md` (A-görevleri) + `docs/bolum_XX.md` (bölüm görevleri). Bir seferde **tek görev**.
- Kısayollar: `/siradaki`, `/sahne B01.S3`, `/kontrol`, `/kaydet`, `/telefon-testi`, `/durum`, `/ogret <konu>`.
- Ajanlar (`.claude/agents/`):
  - `ink-writer` — Ink yazımı
  - `story-guardian` — hikâye/ID/etiket tutarlılığı (salt okunur)
  - `code-reviewer` — kural denetimi (salt okunur)
  - `test-runner` — `npm run check` ve küçük düzeltmeler
  - `asset-scout` — lisansı uygun ses/müzik/ikon araştırması
- `.ink` dosyası düzenlenince kanca otomatik derler; hata olursa sana bildirir. `.ts/.tsx` dosyaları otomatik biçimlenir.

## Bitti tanımı (bir görev için)
`npm run check` geçiyor · gerekiyorsa test eklendi · `code-reviewer` kritik bulgu yok · `TASKS.md`/`bolum_XX.md` kutusu işaretli · kullanıcıya açıklama + telefon testi verildi.

## Mevcut durum
M0 kodu yazıldı (kurulum, Ink derleyici, motor iskeleti, ilk mesaj ekranı, testler). **Kullanıcının telefonda doğrulaması bekleniyor.** Ardından M1.
