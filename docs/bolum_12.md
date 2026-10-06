# BÖLÜM 12 — PLAN B

Bölüm amacı: Emir'in geçmişte kendisi için bir yol haritası hazırladığını açıklamak ve oyunun açılışını bu planın ilk adımı olarak yeniden okutmak.

Oyuncunun hissi: Baş dönmesi. Oyunun ilk dakikasına geri dönüp her şeyi yeniden anlama.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-69`, `A-42 (cihaz/mod satırları)`, `A-58 (duraklat-yakınlaş)`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `SES_B12_01MESAJ`
- [ ] `VID_B12_HAFIZA`
- [ ] `NOT_B12_HAFIZA, NOT_B12_FOTO`
- [ ] Plan B dosya ikonları
- [ ] `KN_B12`

**Ink değişkenleri:** `guven`, `gizli_p2 (+GZ_B4)`

- [ ] **B12.0.1** `[INK]` `Assets/Story/bolum12.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b12_s1` → `b12_s2` → `b12_s3` → `b12_s4` → `b12_s5` → `b12_s6` → `b12_s7` → `b12_son`
- [ ] **B12.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B12.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b12_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — DENİZ'E CEVAP

**Knot:** `b12_s1`

**Görevler**

- [ ] **B12.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B12.S1.2** `[INK]` Seçim `Evet. Neredesin?` / `Hayır, evdeyim.`; kol B: Deniz'in aşağıdan pencereye çektiği foto + "Yalan söylemeyi benden öğrendin…" `# guven:-1`.
- [ ] **B12.S1.3** `[INK]` İki kol: Emir inmez, Deniz "Tamam. Yarın konuşacağız."
- [ ] **B12.S1.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Bölüm, Deniz'in mesajına verilecek cevapla başlar.

**▸ SEÇİM** — A) Evet. Neredesin? · B) Hayır, evdeyim.

> **Emir:** Evet. Neredesin?

> **Deniz:** Arabadayım. Aşağıdayım.

> **Deniz:** İnme. Lütfen. Sadece konuşalım.

> _Not: Alternatif seçim: "Hayır, evdeyim." yazılırsa Deniz tek bir fotoğraf gönderir: binanın girişinden, yukarıya, 17 numaranın penceresine doğru çekilmiş. Işık yanıyor. Altında: "Yalan söylemeyi benden öğrendin, farkında mısın?" İki yol da aynı sonuca bağlanır: Emir inmez ve ikinci telefonu açar. Deniz bir süre sonra "Tamam. Yarın konuşacağız." yazar ve çekip gider._


</details>


### SAHNE 2 — GİZLİ KLASÖR

**Knot:** `b12_s2`

**Görevler**

- [ ] **B12.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B12.S2.2** `[UI]` İkinci telefon Dosyalar → "Gizli klasörleri göster" (→ A-69) → PLAN B, 4 dosya, 04 kilitli "23:17'de açılır".
- [ ] **B12.S2.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Dosyalar herhangi bir sırayla açılabiliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir ikinci telefonun dosyalarına bakar. Bölüm 5'te fark etmediği bir şey görür: dosya yöneticisinde gizli klasörleri gösteren bir seçenek. Seçenek açıldığında tek bir klasör belirir.

**`PLAN B`**

Klasör dört dosyadan oluşur. Dosyaların oluşturma tarihi aynıdır: 14 Ağustos 2026, 23:00 ile 23:30 arası.

- 01 — MESAJ
- 02 — FOTOĞRAF
- 03 — HAFIZA
- 04 — SON MESAJ (kilitli)
> _Not: Yazar notu: Oyuncu dosyaları istediği sırayla açabilir, ama 04 kilitlidir. Dosya simgesinin altında küçük bir yazı vardır: "23:17'de açılır." Bu, Bölüm 16'da geri ödenir._


</details>


### SAHNE 3 — 01: MESAJ

**Knot:** `b12_s3`

**Görevler**

- [ ] **B12.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B12.S3.2** `[UI]` 01 — MESAJ: zamanlanmış mesaj kartı (Alıcı: Emir, Durum: Gönderildi, Tetik: YANKI dış erişim).
- [ ] **B12.S3.3** `[SİSTEM]` Oyunun ilk mesajıyla eşleşme animasyonu (Mesajlar'daki ilk balon yanıp söner).
- [ ] **B12.S3.4** `[INK]` `SES_B12_01MESAJ` + Emir satırı.
- [ ] **B12.S3.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu oyunun ilk cümlesini Emir'in yazdığını anlıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Dosya açıldığında içinde zamanlanmış bir mesaj taslağı ve bir ses kaydı vardır.

**`Alıcı: Emir — Durum: Gönderildi`**

**`"Bunu okuyorsan eve dönme."`**

Oyuncu bu cümleyi tanır. Oyunun ilk cümlesi. Bölüm 1'in ilk bildirimi. Gönderim koşulu olarak tek bir satır yazar: "Tetik: YANKI dış erişim."

> **Emir — Kayıt:** Eğer her şeyi unutursam, bana doğrudan gerçeği söyleme.

> **Emir — Kayıt:** Beni kanıtlarla götür.

> **Emir — Kayıt:** Çünkü doğrudan söylersen sana inanmayacağım. Ben kimseye inanmam. Ben sadece gördüğüme inanırım.

> **Emir — Kayıt:** Ve eve dönmeyeyim. Eve dönersem çekmeceyi açarım. Sıra önemli.

> **Emir:** İlk mesajı ben yazmışım. Kendime. Korkutmak için değil. Yol göstermek için.


</details>


### SAHNE 4 — 02: FOTOĞRAF

**Knot:** `b12_s4`

**Görevler**

- [ ] **B12.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B12.S4.2** `[VERİ]` `FOTO_B01_SOKAK_2317` bilgi paneline yeni satırlar açılır: Cihaz İkinci telefon, Mod Zamanlayıcı 23:17:00, Konum 17 pencere.
- [ ] **B12.S4.3** `[INK]` Not + oyuncuya B02 hotspot anılarını hatırlatan satır.
- [ ] **B12.S4.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Dosyada Bölüm 1'deki sokak fotoğrafı vardır. Bu kez fotoğrafın ham bilgileri de görünür.

- Cihaz: İkinci telefon
- Çekim: Zamanlayıcı — 23:17:00
- Konum: 17 numara, pencere
Fotoğrafın altına Emir'in bir notu iliştirilmiştir.

> **Emir — Not:** Bu fotoğrafa bakınca hiçbir şey hatırlamayacağım. Ama bir yeri tanıyacağım. Tanımak, hatırlamanın ilk adımıdır.

Oyuncu Bölüm 2'yi hatırlar: fotoğrafa dokunarak sokak tabelasını, bina numarasını, arabayı bulmuştu. O dokunuşların her biri, bu notun öngördüğü şeydi.


</details>


### SAHNE 5 — 03: HAFIZA

**Knot:** `b12_s5`

**Görevler**

- [ ] **B12.S5.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B12.S5.2** `[INK]` Not üç satır → video.
- [ ] **B12.S5.3** `[VARLIK]` `VID_B12_HAFIZA`: liste kâğıdı; atlanan madde duraklat-yakınlaş ile okunur → `GZ_B4`.
- [ ] **B12.S5.4** `[TEST]` Liste maddelerinde ilaç adı/dozu görünmüyor ("uyku ilacı, iki tane" yeterli).
- [ ] **B12.S5.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Bu dosya bir not ve kısa bir videodan oluşur. Önce not okunur.

> **Emir — Not:** Ben hatırlamam. Telefon hatırlar. Telefonu susturursam ben de susarım.

> **Emir — Not:** İnsan korktuğu şeyi unutabilir. Ama kendi seçtiği şeyi unutamaz.

> **Emir — Not:** 23:17'de karar ver.

Sonra video açılır. Videoda Emir, 17 numaranın iç odasında, masada oturmaktadır. Önünde bir liste vardır ve listeyi yüksek sesle okur.

> **Emir — Video:** Binaya girdikten sonraki bütün fotoğrafları sil. Konum geçmişini sil. Deniz'le olan mesajları sil. Mert'in numarasını sil.

> **Emir — Video:** Uyku ilacını iç. İki tane. Sabah kalktığında bir hikâye uydur ve ona inan. Bunda iyiyim.

> **Emir — Video:** Birkaç hafta sonra bu gece, hiç yaşanmamış bir gece gibi gelecek.

Videodaki Emir kameraya bakar ve kısa bir sessizlikten sonra ekler:

> **Emir — Video:** Bunu duyduğunda kendini aptal gibi hissedeceksin. Hissetme. Bu, yapabileceğim en akıllıca şeydi. Ya da en korkakça. Artık hangisi olduğuna sen karar vereceksin.

> _Not: Yazar notu: Bu sahne hafıza kaybını bilimkurgudan uzaklaştırır ve psikolojik bir zemine oturtur. Emir hafızasını silmemiştir; hatırlatıcılarını silmiştir ve geri kalanını kendi zihni yapmıştır. Bu, oyunun ana temasıyla birebir örtüşür: "Gerçeği hatırlamamak için kendine bir yol bırakır."_


</details>


### SAHNE 6 — 04: SON MESAJ

**Knot:** `b12_s6`

**Görevler**

- [ ] **B12.S6.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B12.S6.2** `[UI]` Kilitli dosya: geri sayım (bugünden 23:17'ye birkaç gün; oyun içi saatle, gerçek günle değil).
- [ ] **B12.S6.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu kilitli dosyaya dokunur. Şifre istemez. Yalnızca bir geri sayım gösterir: bugünün tarihinde 23:17'ye kalan süre. Birkaç gün.

> **Emir:** Bu dosyayı bana gelecekteki bir gecede açılsın diye mi kilitledim?


</details>


### SAHNE 7 — M.'NİN GERÇEK ROLÜ

**Knot:** `b12_s7`

**Görevler**

- [ ] **B12.S7.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B12.S7.2** `[INK]` M. ile konuşma; seçim `Neden sana güvendim?` (`# guven:-1`) / `Plan A neydi?` ("Biri dosyayı açtı. Ben değil.").
- [ ] **B12.S7.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir, M.'ye yazar.

> **Emir:** Plan B'yi buldum.

> **M.:** Biliyorum.

> **Emir:** Beni bunca zaman kendi yazdığım bir senaryoda mı yürüttün?

> **M.:** Senin yazdığın senaryoda. Evet.

> **M.:** Bana güvenmek zorunda değilsin.

> **M.:** Sadece geçmişteki Emir'in neden bana güvendiğini anlaman gerekiyor.

**▸ SEÇİM** — A) Neden sana güvendim? · B) Plan A neydi?

> **Emir:** Neden sana güvendim?

> **M.:** Çünkü sana hiç yalan söylemedim. Sadece her şeyi söylemedim.

> **M.:** Deniz ikisini de yaptı. Ama onu senden daha çok seviyor olabilir.

> _Not: Alternatif seçim: "Plan A neydi?" sorulursa M. cevap verir: "Sessizlik. Benden bir daha hiç haber almayacaktın." Emir: "Peki ne değişti?" M.: "Biri dosyayı açtı. Ben değil." Bu cevap, Bölüm 16'nın sonuna doğrudan bağlanır ve oyuncu için İkinci Perde'nin gerçek tehlikesini ilk kez adlandırır._

Bölüm sonu.


</details>


### BÖLÜM SONU

**Knot:** `b12_son`

**Görevler**

- [ ] **B12.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B12.SON.2** `[INK]` `# kendime_not:KN_B12`, `# bolum_sonu:12`.
- [ ] **B12.SON.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Plan B", "Tetik: YANKI dış erişim", "Pencere zamanlayıcısı", "04 — Son Mesaj".
- Gizli ipucu: 03 — HAFIZA videosunda Emir'in okuduğu listede bir madde vardır ama Emir onu okumadan atlar. Oyuncu videoyu duraklatıp kâğıda yakınlaşırsa madde okunur: "Deniz'e söz verdir." Bu, Bölüm 13'ün anahtarıdır.
- Kendime Not: "Bana gelen ilk mesajı ben yazmışım." Son cümle seçimi: "Beni yöneten kişi benim." veya "Belki de o gece başka seçeneğim yoktu."
**`BÖLÜM 12 TAMAMLANDI — PLAN B`**



</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Evet / Hayır evdeyim | Sahne 1 sonunda | guven |
| Neden güvendim / Plan A | Sahne 7'de | guven, bilgi |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
