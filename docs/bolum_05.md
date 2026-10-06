# BÖLÜM 5 — İKİNCİ TELEFON

Bölüm amacı: Hikâyenin ana nesnesini ortaya çıkarmak.

Oyuncunun hissi: Şok. Evinin içinde, yıllardır yaşadığı yerde, bilmediği bir şeyin durduğunu öğrenmek.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-71 (telefon kilidi)`, `A-72`, `A-73`, `A-37 (zamanlanmış)`, `A-70`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `FOTO_B05_CEKMECE`
- [ ] `ODA_EV_SALON, ODA_EV_YATAK, ODA_EV_CEKMECE_IC`
- [ ] İkinci telefon arayüz görselleri (siyah duvar kâğıdı, 3 ikon)
- [ ] `SES_B05_TARTISMA`
- [ ] SFX: cekmece_sikisik, kapi_kilit
- [ ] Ambiyans: ev_bos
- [ ] `KN_B05`

**Ink değişkenleri:** `eve_gitti_b1 (okunur)`, `gizli_p1 (+GZ_A6)`

- [ ] **B05.0.1** `[INK]` `Assets/Story/bolum05.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b05_s1` → `b05_s2` → `b05_s3` → `b05_s4` → `b05_s5` → `b05_son`
- [ ] **B05.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B05.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b05_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — İZİN

**Knot:** `b05_s1`

**Görevler**

- [ ] **B05.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B05.S1.2** `[INK]` `# saat:22:30` "Artık eve dönebilirsin." üç satırlık konuşma.
- [ ] **B05.S1.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir iki gecedir eve dönmemiştir. Üçüncü gecenin başında M.'den mesaj gelir.

> **M.:** Artık eve dönebilirsin.

> **Emir:** Neden şimdi?

> **M.:** Çünkü artık neye bakacağını biliyorsun.


</details>


### SAHNE 2 — EV

**Knot:** `b05_s2`

**Görevler**

- [ ] **B05.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B05.S2.2** `[SİSTEM]` Oda keşfi ilk kullanım (→ A-73): salon → yatak odası. Obje dokununca kısa Emir yorumu (fincan: "İki gün önceki kahve.").
- [ ] **B05.S2.3** `[INK]` `# galeri_ekle:FOTO_B05_CEKMECE` + bildirim (Eklenme: dün 23:17).
- [ ] **B05.S2.4** `[SİSTEM]` Çekmece sıkışık: 2 dokunuş/çekiş, `# sfx:cekmece_sikisik`. `# adim_bekle:oda_obje(EV_YATAK,CEKMECE)`.
- [ ] **B05.S2.5** `[INK]` (eve_gitti_b1) "Sıra önemli, demişti. Bu çekmeceden bahsediyormuş."
- [ ] **B05.S2.6** `[UI]` Çekmece içi yakın plan, telefona dokununca %11 şarjlı telefon.
- [ ] **B05.S2.7** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu fotoğrafla odayı eşleştirerek çekmeceyi kendisi buluyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir evine döner. Oyuncu ev içi etkileşim ekranına ilk kez girer: telefonun kamerasından görülen, tanıdık ama iki gün sonra biraz yabancı bir ev. Buzdolabında son kalan süt, masada iki gün önceki kahve fincanı.

Galeride yeni bir fotoğraf belirmiştir: küçük, ahşap bir masa ve alt çekmecesi. Eklenme: Dün 23:17. Fotoğraf Emir'in yatak odasında çekilmiştir, gündüz.

Oyuncu ev içi etkileşim ekranında aynı masayı bulur. Emir bu masayı her gün görmüştür; alt çekmeceyi hiç açmadığını fark eder.

Çekmece sıkışıktır. Açıldığında içinde eski kablolar, bir el feneri ve en arkada, bir kumaşa sarılı eski bir telefon vardır. Telefonun şarjı %11'dir.

> _Not: Yazar notu: Bölüm 1'de "Eve git" yolunu seçen oyuncu için Emir burada ek bir satır söyler: "Sıra önemli, demişti. Bu çekmeceden bahsediyormuş."_


</details>


### SAHNE 3 — ŞİFRE

**Knot:** `b05_s3`

**Görevler**

- [ ] **B05.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B05.S3.2** `[UI]` İkinci telefon kilit ekranı: siyah, yalnızca saat (→ A-72).
- [ ] **B05.S3.3** `[SİSTEM]` Şifre 2317 (→ A-71). Yanlışta: "Sen bunu biliyorsun." Sınırsız deneme.
- [ ] **B05.S3.4** `[UI]` Açılınca 3 ikon: Mesajlar, Ses Kayıtları, Video. Ana telefona dönüş butonu.
- [ ] **B05.S3.5** `[VERİ]` Ayarlar ikonu görünmez ama uzun basınca açılır → cihaz adı "E — YANKI 2" → `GZ_A6`.
- [ ] **B05.S3.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Şifre ekranı ipuçlarından çözülüyor; ikinci telefonun başka bir cihaz olduğu görsel olarak belli.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Telefon dört haneli bir şifre ister. Kilit ekranında hiçbir bildirim, hiçbir duvar kâğıdı yoktur; yalnızca siyah bir ekran ve saat.

Oyuncu ipuçlarından hareketle 2317 girer. Yanlış girişte ekranda "Sen bunu biliyorsun." yazar.

Telefon açılır. İçinde yalnızca üç uygulama vardır:

- Mesajlar
- Ses Kayıtları
- Video

</details>


### SAHNE 4 — MESAJLAR

**Knot:** `b05_s4`

**Görevler**

- [ ] **B05.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B05.S4.2** `[INK]` Tek konuşma "M." — iki mesaj. İkincisinin durumu `Zamanlanmış — Tetikleyici bekleniyor` (→ A-37).
- [ ] **B05.S4.3** `[INK]` Emir: "…Neyi bekliyor?"
- [ ] **B05.S4.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** "Zamanlanmış" durumu okunabilir ve tuhaf hissettiriyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Mesajlar uygulamasında tek bir konuşma vardır. Karşı tarafın adı "M."dir. Konuşmanın büyük kısmı silinmiştir; geriye kalanlar, oyuncunun şu ana kadar yaşadıklarını tuhaf biçimde öngörür.

> **M.:** Eğer bunu görüyorsan, beni bulamadın.

Tarih: 15 Ağustos 2026 — 00:12.

> **M.:** Bundan sonra sana kim ne söylerse söylesin, kendi kaydını dinle.

Bu mesajın altında gönderim durumu vardır: "Zamanlanmış — Tetikleyici bekleniyor." Mesaj henüz hiç gönderilmemiştir.

> **Emir:** Bu mesaj bana hiç gelmedi. Bekliyor. Neyi bekliyor?


</details>


### SAHNE 5 — SES KAYITLARI

**Knot:** `b05_s5`

**Görevler**

- [ ] **B05.S5.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B05.S5.2** `[VARLIK]` `SES_B05_TARTISMA`: araba → kapı → merdiven yankısı katmanları.
- [ ] **B05.S5.3** `[INK]` `# adim_bekle:ses_bitti(SES_B05_TARTISMA)` → iç düşünce.
- [ ] **B05.S5.4** `[SES]` Kesilme anı sert: dijital kopma sesi.
- [ ] **B05.S5.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu Emir'in bir şey planladığını ve Deniz'in karşı çıktığını anlıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Ses Kayıtları'nda tek bir dosya vardır. Kayıt bir arabanın içinde başlar, sonra kapı sesi ve merdiven yankısı.

> **Deniz:** Bunu yapamazsın.

> **Emir:** Başka seçeneğimiz yok.

> **Deniz:** Senin var. Benim var. Şu an arabaya binip gidebiliriz.

> **Emir:** Gidersem de hatırlayacağım.

> **Deniz:** Emir, bunu yaparsan geri dönüşü olmayacak.

Kayıt aniden kesilir.

Oyuncu ilk defa Emir'in bir şey planladığını düşünür. Ve Deniz'in "yalnızdın" yalanının yalnızca bir eksik bilgi değil, bir itiraz olduğunu sezer.


</details>


### BÖLÜM SONU

**Knot:** `b05_son`

**Görevler**

- [ ] **B05.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B05.SON.2** `[INK]` `# kendime_not:KN_B05`, `# bolum_sonu:5`.
- [ ] **B05.SON.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "İkinci telefon", "2317", "Zamanlanmış mesaj", "Emir ve Deniz'in tartışması".
- Gizli ipucu 6: İkinci telefonun Ayarlar'ında, uygulama olarak görünmeyen tek bir satır: "Cihaz adı: E — YANKI 2". Oyuncu Ayarlar'a girerse panoya eklenir; Emir kelimeyi tanımaz.
- Kendime Not: "Evimde bir telefon vardı. Şifresini ben biliyordum." Son cümle seçimi: "Bu telefonu ben sakladım." veya "Bu telefonu oraya biri koydu."
**`BÖLÜM 5 TAMAMLANDI — İKİNCİ TELEFON`**


</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| — | Doğrusal | eve_gitti_b1 ek satır |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
