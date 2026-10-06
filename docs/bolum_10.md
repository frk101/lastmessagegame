# BÖLÜM 10 — M.

Bölüm amacı: M.'nin gerçek kimliğine yaklaşmak ve Emir'in bu ilişkide pasif değil, başlatıcı olduğunu göstermek.

Oyuncunun hissi: Yaklaşma. Tehdit gibi görünen bir sesin arkasında bir insan belirmeye başlar.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-67`, `A-68`, `A-44`, `A-55`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `SES_B10_ARAMA`
- [ ] `FOTO_B10_GRUP_2019`
- [ ] Arama geçmişi verisi (3 satır)
- [ ] Silinmiş kişi "Mert (Yankı)"
- [ ] `KN_B10`

**Ink değişkenleri:** `guven`, `gizli_p2 (+GZ_B2)`

- [ ] **B10.0.1** `[INK]` `Assets/Story/bolum10.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b10_s1` → `b10_s2` → `b10_s3` → `b10_s4` → `b10_s5` → `b10_son`
- [ ] **B10.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B10.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b10_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — NUMARA

**Knot:** `b10_s1`

**Görevler**

- [ ] **B10.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B10.S1.2** `[UI]` Kişilerde arama sonuçsuz; tarayıcı araması "sonuç yok" (basit sahte arama ekranı).
- [ ] **B10.S1.3** `[INK]` İkinci telefon → Telefon → arama geçmişi: 11.08 21:03 giden 18:42 / 13.08 02:40 cevapsız / 14.08 23:17 gelen gizli ("Ayrıntı yok").
- [ ] **B10.S1.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu aramayı Emir'in başlattığını görüyor; 23:17 satırı cevapsız bir soru olarak kalıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu M.'nin numarasını kişilerde arar. Numara kayıtlı değildir. İnternet araması yapıldığında numara hiçbir sonuç vermez; sanki numara hiç var olmamış gibi.

Emir ikinci telefonun arama geçmişini açar. Liste neredeyse boştur. Yalnızca tek bir numara, birkaç kez tekrar eder. Aynı numara.

- 11 Ağustos 2026 — 21:03 — Giden arama — 18 dakika 42 saniye
- 13 Ağustos 2026 — 02:40 — Cevapsız arama
- 14 Ağustos 2026 — 23:17 — Gelen arama — Numara gizli
Oyuncu ilk satıra takılır: arama giden aramadır. Emir aramıştır. Üçüncü satır ise farklıdır: 23:17'deki arama M.'nin numarasından değil, gizli bir numaradan gelmiştir. Emir bu satıra dokunduğunda sistem yalnızca "Ayrıntı yok." der.

> **Emir:** Mert'i ben aramışım. Deniz haklıymış.

> _Not: Yazar notu: Üçüncü satır, bu bölümde bir soru işareti olarak kalır. Oyuncu ona geri dönemez. Karşılığı Bölüm 13'teki Deniz'in son cümlesi ve Bölüm 14'teki 41 saniyelik sessizliktir._


</details>


### SAHNE 2 — SES

**Knot:** `b10_s2`

**Görevler**

- [ ] **B10.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B10.S2.2** `[SİSTEM]` Bozuk kayıt (→ A-55): 5 gürültü segmenti, atlandıkça netleşen 6 parça.
- [ ] **B10.S2.3** `[VARLIK]` Arka planda çaydanlık ve kedi (M.'nin evi).
- [ ] **B10.S2.4** `[INK]` `# adim_bekle:ses_bitti(SES_B10_ARAMA)` → Emir'in cevabından yalnızca "…ikisi…".
- [ ] **B10.S2.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Kayıt yavaş yavaş açılıyor; oyuncu bir bulmaca çözüyor gibi hissediyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

11 Ağustos aramasına bağlı bir ses dosyası vardır. Dosya bozuktur; oyuncu dalga formu üzerinde gürültülü bölümleri atlayarak dinler. Her atlamada konuşmanın bir parçası netleşir. Arka planda bir çaydanlığın ötüşü ve bir kedinin sesi duyulur; M.'nin evinin küçük izleri.

> **M.:** Bunu yaptığında geri dönüş olmayacak.

> **Emir:** Zaten geri dönüşü olmayan yerdeyiz.

> **M.:** YANKI'yı kapatacağımızı söylemiştik. Yıllar önce.

> **Emir:** Kapatmadık. Sadece bakmayı bıraktık.

> **M.:** Deniz bilmiyor.

> **Emir:** Bilmemesi gerekiyor.

Kayıt burada bir süre cızırdar. Sonra M.'nin sesi, daha alçak:

> **M.:** Sana bir şey sorayım. Bunu kendini korumak için mi yapıyorsun, yoksa başkalarını mı?

Emir'in cevabı gürültünün içinde kaybolur. Oyuncu o bölümü kaç kez dinlerse dinlesin, yalnızca tek bir kelime seçilebilir: "...ikisi..."

Oyuncu şaşırır. Bu konuşmada planı M.'ye anlatan kişi Emir'dir. M. ise onu vazgeçirmeye çalışır gibidir.


</details>


### SAHNE 3 — İPUCU

**Knot:** `b10_s3`

**Görevler**

- [ ] **B10.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B10.S3.2** `[UI]` Dosya bilgisinde "Kayıt sahibi: MERT K."
- [ ] **B10.S3.3** `[UI]` Son silinen kişiler: "Mert (Yankı)" (→ A-68).
- [ ] **B10.S3.4** `[SİSTEM]` Galeri araması "Yankı" → `FOTO_B10_GRUP_2019` (→ A-44).
- [ ] **B10.S3.5** `[INK]` (GZ_B1 bulunduysa) "Aynı bileklik. Yedi yıldır aynı bileklik."
- [ ] **B10.S3.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Grup fotoğrafı yalnızca arama yapılınca bulunuyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Ses dosyasının bilgi ekranında kayıt sahibi alanında bir isim görünür:

**`MERT K.`**

Oyuncu bu ismi kişilerde arar. Sonuç yoktur. Ancak "Son silinenler" klasöründe, üç yıl önce silinmiş bir kişi kaydı durur: "Mert (Yankı)". Kaydın fotoğrafı yoktur, numarası bugünkü M. numarasından farklıdır.

Galeride "Yankı" kelimesiyle arama yapıldığında tek bir fotoğraf çıkar: 2019 tarihli, bir üniversite laboratuvarında çekilmiş grup fotoğrafı. Beş kişi. Emir en solda, Deniz ortada, gülüyor. En sağdaki kişinin yüzü, fotoğraf düzenleme aracıyla kaba bir şekilde karalanmıştır. Karalamanın altından yalnızca omuz ve sol bilek görünür.

> **Emir:** Bu fotoğrafı ben karalamışım. Neden?

> _Not: Yazar notu: Bilekteki ip bileklik bu fotoğrafta da vardır, ama çok küçük ve bulanıktır. Bölüm 9'da gizli ipucunu bulan oyuncu bunu fark eder ve Emir ek bir satır söyler: "Aynı bileklik. Yedi yıldır aynı bileklik."_


</details>


### SAHNE 4 — DENİZ'E SORU

**Knot:** `b10_s4`

**Görevler**

- [ ] **B10.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B10.S4.2** `[INK]` Seçim `Mert diye birini tanıyor muyuz?` / `YANKI ne demek?`.
- [ ] **B10.S4.3** `[INK]` Kol A: yazıyor-kes-yazıyor → "Hayır." + "Neredesin? Geleyim mi?"
- [ ] **B10.S4.4** `[INK]` Kol B: cevap yok → `# bekle:120` (hızlandırılabilir) → gelen sesli arama (açılamaz/açılmaz) → "Bu kelimeyi nereden buldun? Lütfen bir şey yapma." `# guven:-1`.
- [ ] **B10.S4.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir, Deniz'e yazar. Bu sahne, Deniz'in ikinci yalanını kurar.

**▸ SEÇİM** — A) Mert diye birini tanıyor muyuz? · B) YANKI ne demek?

> **Emir:** Mert diye birini tanıyor muyuz?

Deniz'in "yazıyor" göstergesi uzun süre açık kalır. Sonra kaybolur. Sonra tekrar belirir.

> **Deniz:** Hayır.

> **Deniz:** Neredesin? Geleyim mi?

> _Not: Alternatif seçim: "YANKI ne demek?" yazılırsa Deniz hiç cevap vermez; iki dakika sonra bir sesli arama gelir. Emir açmazsa arama düşer ve Deniz tek bir mesaj bırakır: "Bu kelimeyi nereden buldun? Lütfen bir şey yapma." Bu yol, Deniz ile güveni biraz daha zedeler._

Oyuncu, grup fotoğrafında gülen Deniz'e bir kez daha bakar. Deniz Mert'i tanıyor. Ve bunu ikinci kez saklıyor.


</details>


### SAHNE 5 — YENİ MESAJ

**Knot:** `b10_s5`

**Görevler**

- [ ] **B10.S5.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B10.S5.2** `[INK]` "Mert misin?" → `# bekle:20` → 4 satır M.
- [ ] **B10.S5.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **Emir:** Mert misin?

Cevap gelmez. Ekranda saat ilerler. Yaklaşık 20 saniye.

> **M.:** O ismi artık kullanmıyorum.

> **M.:** Bana M. de.

> **Emir:** Neden ismini değiştirdin?

> **M.:** Çünkü o isimle bir şey yaptım. Sen de yaptın.

> **M.:** Ama sen unutmayı seçtin. Ben seçemedim.

Bölüm burada sona erer.


</details>


### BÖLÜM SONU

**Knot:** `b10_son`

**Görevler**

- [ ] **B10.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B10.SON.2** `[SİSTEM]` Pano: `IPUCU_1108` + `IPUCU_BINA17` → "1108. Bir tarih mi, bir kod mu?" → `GZ_B2`.
- [ ] **B10.SON.3** `[INK]` `# kendime_not:KN_B10` seçim: Deniz'e sormaya devam (+1) / yalnızca M. (−1). `# bolum_sonu:10`.
- [ ] **B10.SON.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Mert K.", "YANKI", "2019 grup fotoğrafı", "23:17 gizli arama".
- Gizli ipucu: 11 Ağustos aramasının tarihi. Oyuncu ipucu panosunda bu tarihi "Bina No. 17" ipucunun yanına sürüklerse Emir şunu fark eder: "1108. Bir tarih mi, bir kod mu?" Bu, Bölüm 11'deki kilidi kolaylaştırır.
- Kendime Not: "Mert'i ben aradım. Planı ben anlattım. Deniz ise hâlâ yalan söylüyor." Son cümle seçimi: "Deniz'e sormaya devam edeceğim." veya "Bundan sonra yalnızca M.'yi dinleyeceğim." (Güven Terazisi)
**`BÖLÜM 10 TAMAMLANDI — M.`**



</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Mert sorusu / YANKI sorusu | Sahne 5'te birleşir | guven |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
