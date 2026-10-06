# TASKS — Görev Takibi

> Kaynak: `docs/04_YOL_HARITASI.md` + `docs/01_ALTYAPI.md` (A-görevleri) + `docs/05_REACT_NATIVE_TEKNIK_REHBER.md` §9 (RN karşılıkları).
> Bölüm görevleri ayrıca `docs/bolum_XX.md` dosyalarında işaretlenir.
> Sembol: `[x]` bitti · `[~]` kısmen (iskelet var) · `[ ]` yapılacak
> Bir kilometre taşı bitince bir sonrakinin görevlerini buraya ekle.

## M0 — Kurulum
- [x] A-01 — Expo + TypeScript projesi (Expo SDK 57), dikey ekran, koyu tema, tablet kapalı
- [x] A-02 — `.gitignore` (Expo şablonu + Claude yerel ayarları). *Git deposunu kullanıcı başlatır (docs/KURULUM.md).*
- [x] A-03 — Fontlar: Inter (400/500/600) + JetBrains Mono (400), yalnızca kullanılan ağırlıklar
- [x] A-04 — inkjs + `scripts/compile-ink.ts` + `npm run ink` / `ink:watch` / `prestart`
- [x] A-05 — Klasör yapısı (docs/05 §3)
- [x] A-06 — Tek `<Phone/>` kök bileşeni, navigasyon kütüphanesi yok
- [ ] **M0 doğrulama** — Kullanıcı telefonunda Expo Go ile "Bunu okuyorsan eve dönme." balonunu, iki seçimi ve seçimden sonraki cevapları gördü. *(Türkçe karakterler doğru mu? ğ ş ı İ)*

## M1 — Çekirdek ve telefon kabuğu
### Çekirdek
- [~] A-10 — OyunDurumu: `gameStore` M0 sürümü (saat, mesajlar). docs/05 §4.7'deki tam şemaya genişlet.
- [~] A-11 — SahteSaat: `clock.set` var. Eksik: tarih, gerçek zamanlı akış, `waitUntil`, saniye.
- [~] A-12 — Director: döngü, seçim, `saat`/`kisi`/`bekle`/`yaziyor`/`yaziyor_kes` var. Eksik: diğer etiketler, `>` eylem seçimleri için arayüz, uygulama arka plandayken beklemeyi durdurma, metin hızı ayarı.
- [~] A-13 — Konuşmacı ayrıştırma: `speakers.ts` + testler var. Eksik: inner/caption/note türlerinin arayüze bağlanması.
- [ ] A-14 — Koşullar + olay veriyolu (`conditions.ts`, `events.ts`), `adim_bekle`
- [ ] A-15 — Kayıt sistemi (AsyncStorage, `inkState`, bölüm başı anlık görüntüsü, sürümleme) + test
- [ ] A-16 — Bölüm yöneticisi (başlat/bitir/tekrar oyna)
- [ ] A-17 — Hata ayıklama paneli (`__DEV__`, sağ üst köşeye 3 dokunuş)
### Telefon kabuğu
- [~] A-20 — Durum çubuğu: saat var. Eksik: sinyal 0–4, şarj %, arama şeridi (store'dan)
- [ ] A-21 — Kilit ekranı (büyük saat, tarih, duvar kâğıdı, bildirim kartları)
- [ ] A-22 — Ana ekran (ikon ızgarası, hikâyeyle açılan ikonlar)
- [ ] A-23 — Bildirim sistemi (banner + kilit ekranı kartı + yığın)
- [ ] A-24 — Titreşim (`expo-haptics`) + ekran sarsıntısı
- [ ] A-25 — Uygulama açılış/kapanış geçişleri (Reanimated)
- [ ] A-26 — Karartma / telefon kapan-aç overlay'i
- [ ] A-29 — Bölüm sonu ekranı

**M1 kabul kriteri:** `test.ink` benzeri bir senaryoda mesaj, seçim, bekleme, `adim_bekle:sure(3)` çalışıyor; uygulama kapatılıp açılınca kaldığı yerden devam ediyor; kilit ekranından bildirime dokunarak Mesajlar açılıyor.

## M2 — Dikey kesit: Bölüm 1–2 (bkz. docs/04_YOL_HARITASI.md)
Altyapı: A-27, A-30…A-35, A-39…A-43, A-50, A-51, A-62, A-64, A-66, A-80, A-81
İçerik: `docs/bolum_01.md`, `docs/bolum_02.md` içindeki bütün görevler
*(M1 bitince bu bölümü ayrıntılı görev listesine çevir.)*
