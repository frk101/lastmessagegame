# BÖLÜM 1 — İLK MESAJ

Bölüm amacı: Oyuncuyu dünyaya sokmak, 23:17 gizemini oluşturmak ve M.'yi tanıtmak.

Oyuncunun hissi: Merak. Sıradan bir gecenin içinde açılan küçük bir çatlak.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-11`, `A-12`, `A-20`, `A-21`, `A-22`, `A-23`, `A-24`, `A-26`, `A-27`, `A-30`, `A-31`, `A-32`, `A-33`, `A-34`, `A-35`, `A-39`, `A-40`, `A-41`, `A-42`, `A-43`, `A-51`, `A-66`, `A-73 (basit: iki yol seçimi için gerek yok)`, `A-80`, `A-29`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `ART_DUVAR_SAHIL`
- [ ] `FOTO_B01_SOKAK_2317`
- [ ] SFX: ayak_sesi, otobus_fren, titresim, bildirim, glitch_mesaj
- [ ] Ambiyans: sokak_gece_ruzgar, ofis_gece
- [ ] `KN_B01`

**Ink değişkenleri:** `eve_gitti_b1`, `gizli_p1 (+1 GZ_A1)`

- [ ] **B01.0.1** `[INK]` `Assets/Story/bolum01.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b01_s0` → `b01_s1` → `b01_s2` → `b01_sa` → `b01_sb` → `b01_s3` → `b01_s4` → `b01_son`
- [ ] **B01.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B01.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b01_s0` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 0 — SIRADAN BİR GECE

**Knot:** `b01_s0`

**Görevler**

- [ ] **B01.S0.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B01.S0.2** `[INK]` Bildirimleri sırayla yaz: iş sohbeti 22:47, Deniz 22:58, takvim. Saat 23:05'ten akar.
- [ ] **B01.S0.3** `[UI]` Kilit ekranı bildirim yığını (→ A-21, A-23). Ekran kısa açılıp kapanır.
- [ ] **B01.S0.4** `[INK]` Deniz'e cevap: tek seçenek "Yoldayım." → Deniz kalp emojisi.
- [ ] **B01.S0.5** `[VERİ]` Kişi kartları: `deniz` (küçük harf, noktalamasız stil), `is` (grup sohbeti), `bilinmeyen`.
- [ ] **B01.S0.6** `[SES]` Ayak sesi + rüzgâr ambiyansı; ekran karartıldığında ses devam etmeli.
- [ ] **B01.S0.7** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu 20 saniyeden kısa sürede Emir'in sıradan bir hayatı olduğunu anlıyor; Deniz'in mesajı sıcak hissettiriyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Şubat 2027. Gece. Ekran tamamen siyah. Uzakta bir otobüsün fren sesi, rüzgâr, ayak sesleri. Emir ofisten eve yürüyor.

Telefon ekranı kısa bir anlığına açılır; oyuncu Emir'in hayatını birkaç bildirimle tanır.

- İş sohbeti — 22:47: "Deploy tamam. Emir sen de git artık, yarın görüşürüz."
- Deniz — 22:58: "eve vardın mı yine ofiste kaldın değil mi"
- Takvim — Yarın 09:30: "Sprint toplantısı"
Oyuncu Deniz'e hızlıca cevap yazabilir: "Yoldayım." Deniz bir kalp gönderir. Bu, oyundaki son sıradan mesajlaşmadır.

> _Not: Yazar notu: Bu kısa açılış, oyuncuya kaybedilecek bir "normal" verir. Deniz'in sıcak, noktalamasız mesajı ileride ciddileştiğinde kontrastı güçlendirir._


</details>


### SAHNE 1 — 23:16

**Knot:** `b01_s1`

**Görevler**

- [ ] **B01.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B01.S1.2** `[INK]` `# saat:23:16` `# karart` `# titresim` `# bildirim:bilinmeyen` → ilk mesaj.
- [ ] **B01.S1.3** `[SES]` Titreşimle birlikte ayak sesi **durur**. Bu küçük detay önemli.
- [ ] **B01.S1.4** `[UI]` Bildirim kapanmaz: oyuncu kilit ekranında başka bir şey yapamaz, yalnızca bildirime dokunabilir.
- [ ] **B01.S1.5** `[TEST]` Sessiz modda titreşim + ekran sarsıntısı hissediliyor.
- [ ] **B01.S1.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Siyah ekrandan ilk bildirime kadar geçen süre 4–6 sn; mesaj okunaklı, tek dokunuşla açılıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Ekran tekrar kararır. Birkaç saniye sessizlik. Sonra telefon titreşim sesi.

Telefon ekranı açılır. Saat 23:16. Oyuncu kilit ekranını görür. Duvar kâğıdı Emir'in çektiği, sisli bir sahil fotoğrafıdır.

Bir bildirim gelir.

> **Bilinmeyen Numara:** Bunu okuyorsan eve dönme.

Ayak sesleri durur. Emir yürümeyi bırakmıştır. Bildirim kapanmaz. Oyuncu mesaja dokunur.


</details>


### SAHNE 2 — MESAJLAR

**Knot:** `b01_s2`

**Görevler**

- [ ] **B01.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B01.S2.2** `[INK]` İki mesaj, arada `# bekle:2`. `# yaziyor:bilinmeyen:1.5` sonra `# yaziyor_kes`.
- [ ] **B01.S2.3** `[INK]` Seçim: `Kimsin?` → `b01_secim_a`, `Mesajı sil` → `b01_secim_b`.
- [ ] **B01.S2.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Yazıyor göstergesi belirip mesaj gelmeden kayboluyor; iki seçenek butonu görünüyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **Bilinmeyen Numara:** Sana bunu anlatacak zamanım yok.

> **Bilinmeyen Numara:** Ama 23:17'yi hatırlıyorsun.

Emir'in mesaj kutusunda kısa bir süre "yazıyor..." göstergesi belirir. Sonra kaybolur. Emir'in göstergesi değil; karşı tarafın.

**▸ SEÇİM** — A) Kimsin? · B) Mesajı sil


</details>


### SEÇİM A — KİMSİN?

**Knot:** `b01_sa`

**Görevler**

- [ ] **B01.SA.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B01.SA.2** `[INK]` 3 sn bekleme, iki soru-cevap, `# foto_gonder:bilinmeyen:FOTO_B01_SOKAK_2317` → `b01_s3`.
- [ ] **B01.SA.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Soru-cevap ritmi doğal; fotoğraf balonu geliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **Emir:** Kimsin?

Yaklaşık 3 saniye cevap gelmez.

> **Bilinmeyen Numara:** Bunu sormaman gerekiyordu.

> **Emir:** Beni tanıyor musun?

> **Bilinmeyen Numara:** Seni, senin kendini tanıdığından daha iyi tanıyorum.

Ardından fotoğraf gelir.


</details>


### SEÇİM B — MESAJI SİL

**Knot:** `b01_sb`

**Görevler**

- [ ] **B01.SB.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B01.SB.2** `[SİSTEM]` `# sil_glitch` (→ A-35): balon kaybolur, glitch, aynı yerde geri gelir.
- [ ] **B01.SB.3** `[INK]` İki mesaj: "Silmen bir şeyi değiştirmeyecek." + "Sildiğin hiçbir şey gitmez." → fotoğraf → `b01_s3`.
- [ ] **B01.SB.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu silmenin işe yaramadığını açıkça görüyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu "Mesajı sil" seçeneğine basar. Mesaj silinmeye çalışılır. Ekranda kısa süreliğine hata benzeri bir animasyon oluşur: mesaj balonu kaybolur, sonra aynı yerde yeniden belirir.

Telefon tekrar titreşir.

> **Bilinmeyen Numara:** Silmen bir şeyi değiştirmeyecek.

> **Bilinmeyen Numara:** Sildiğin hiçbir şey gitmez.

> _Not: Yazar notu: "Sildiğin hiçbir şey gitmez" cümlesi YANKI'nın ilk, tamamen görünmez tohumudur. Oyuncu bunu tehdit olarak okur; İkinci Perde'de sistemin tanımı olduğunu öğrenir._

Fotoğraf gelir.


</details>


### SAHNE 3 — FOTOĞRAF

**Knot:** `b01_s3`

**Görevler**

- [ ] **B01.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B01.S3.2** `[VERİ]` `FOTO_B01_SOKAK_2317` kartı: çekim/eklenme tarihleri, 5 hotspot (Bölüm 1'de yalnızca `HS_ISIK` aktif, diğerleri B02'de açılır).
- [ ] **B01.S3.3** `[SİSTEM]` Fotoğraf hem mesajda hem **galerinin en üstünde** görünür (`# galeri_ekle`).
- [ ] **B01.S3.4** `[UI]` Bilgi paneli "Çekim / Eklenme" satırlarıyla (→ A-42).
- [ ] **B01.S3.5** `[INK]` `# adim_bekle:app_acik(galeri)` → Emir'in iki iç sesi → yeni mesaj "Yarın gece 23:17'de…" → Emir "Neresi?" → cevap yok.
- [ ] **B01.S3.6** `[UI]` Kişi profili: profil fotoğrafı yok, son görülme yok (→ A-39).
- [ ] **B01.S3.7** `[VERİ]` Gizli `HS_ISIK` → `GZ_A1`, `gizli_p1 += 1`, ipucu kartı "Karşı pencerede ışık".
- [ ] **B01.S3.8** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu fotoğrafı kendi galerisinde buluyor; "Eklenme: Dün 23:17" satırı dikkat çekiyor ama açıklanmıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Fotoğrafta gece çekilmiş sıradan bir sokak vardır: bir sokak lambası, köşede yarısı okunabilen bir tabela, karşı kaldırımda park etmiş bir araba. Fotoğraf hafif yukarıdan çekilmiş gibidir. Köşede saat görünür: 23:17.

Oyuncu fotoğrafın bilgisine baktığında iki şey görür.

- Çekim: 14 Ağustos 2026 — 23:17
- Eklenme: Dün — 23:17
Fotoğraf yalnızca mesajda değil, Emir'in kendi galerisinde de vardır. En üstte, en yeni fotoğraf olarak.

> **Emir:** Ben bunu ne zaman çektim?

> **Emir:** Bu benim galerim. Neden benim galerimde?

Yeni mesaj.

> **Bilinmeyen Numara:** Yarın gece 23:17'de tekrar orada ol.

> **Emir:** Neresi?

Cevap gelmez. Karşı tarafın profil fotoğrafı yoktur; son görülme bilgisi yoktur. Numara, sanki mesajı gönderdikten sonra var olmayı bırakmıştır.


</details>


### SAHNE 4 — EVE DÖNMEK

**Knot:** `b01_s4`

**Görevler**

- [ ] **B01.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B01.S4.2** `[INK]` Seçim `Eve git` / `Ofise geri dön`. `eve_gitti_b1` değişkeni.
- [ ] **B01.S4.3** `[INK]` Eve git kolu: `# sfx:tik_merdiven` + "Bu gece değil." + "Kapıyı açarsan çekmeceyi de açarsın. Sıra önemli."
- [ ] **B01.S4.4** `[VARLIK]` (opsiyonel) Apartman girişi kamera görünümü; yoksa yalnızca ses + siyah ekran yeterli.
- [ ] **B01.S4.5** `[INK]` İki kol birleşir: ofis kanepesi, `# ambiyans:ofis_gece`, fotoğrafa bakılıyor.
- [ ] **B01.S4.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** İki kol da aynı noktada birleşiyor; eve git kolu "çekmece" kelimesini veriyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir'in evi iki sokak ötededir. Oyuncuya seçim sunulur.

**▸ SEÇİM** — A) Eve git. · B) Ofise geri dön.

Oyuncu "Eve git" seçerse Emir apartmanın önüne kadar yürür. Merdiven ışığı yanar. Tam anahtarını çıkarırken telefon titreşir.

> **Bilinmeyen Numara:** Bu gece değil.

> **Bilinmeyen Numara:** Kapıyı açarsan çekmeceyi de açarsın. Sıra önemli.

Emir hangi çekmeceden bahsedildiğini bilmez. Ama bir an, tarif edemediği bir korkuyla, bilmek istemez. Geri döner.

Oyuncu "Ofise geri dön" seçerse bu mesaj gelmez; Emir yalnızca omzunun üzerinden bir kez apartmanına bakar.

İki yol da aynı yerde biter: Emir ofisteki kanepede, karanlıkta, telefonun ışığında fotoğrafa bakarak sabahı bekler.

> _Not: Yazar notu: "Eve git" yolu oyuncuya "çekmece" kelimesini erken verir ama anlamsız bir kelime olarak. Bölüm 5'te çekmece bulunduğunda bu yolu seçmiş oyuncu ürperecek, diğeri ise sonradan duyacaktır. İkisi de adildir._


</details>


### BÖLÜM SONU

**Knot:** `b01_son`

**Görevler**

- [ ] **B01.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B01.SON.2** `[INK]` `# ipucu:IPUCU_2317` `# ipucu:IPUCU_SOKAK_FOTO` `# ipucu:IPUCU_EKLENME`.
- [ ] **B01.SON.3** `[INK]` `# kendime_not:KN_B01` + iki son cümle seçeneği.
- [ ] **B01.SON.4** `[UI]` `# bolum_sonu:1` → "BÖLÜM 1 TAMAMLANDI — İLK MESAJ", son görüntü "23:17".
- [ ] **B01.SON.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Bölüm sonu ekranından sonra ana menü ilk kez erişilebilir oluyor (→ A-93).

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "23:17", "Sokak fotoğrafı", "Eklenme: dün 23:17".
- Gizli ipucu 1: Fotoğrafta sokağın karşısındaki binanın üçüncü katında, karanlık bir pencerenin içinde küçük, mavi beyaz bir ışık noktası vardır. Bir telefon ekranı. Oyuncu o pencereye dokunursa panoya eklenir.
- Kendime Not: "Bugün bilmediğim bir numaradan mesaj aldım. Galerimde hiç çekmediğim bir fotoğraf var." Son cümle seçimi: "Muhtemelen bir şaka." veya "Neden eve dönmedim?"
**`BÖLÜM 1 TAMAMLANDI — İLK MESAJ`**


</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Kimsin? / Mesajı sil | Sahne 3'te birleşir | — |
| Eve git / Ofise dön | Sahne 4 sonunda birleşir | eve_gitti_b1 → B05'te ek satır |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
