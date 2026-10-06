# BÖLÜM 15 — HATIRLA

Bölüm amacı: Bugünkü Emir ile geçmişteki Emir'i karşı karşıya getirmek ve planın son aşamasını başlatmak.

Oyuncunun hissi: Kendisiyle yüzleşme. Kendi sesinden, kendine yöneltilmiş bir itirafı dinlemek.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-52`, `A-75`, `A-11 (23:16:00 tetik)`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `VID_B15_2324`
- [ ] `KN_B15 (yazılamayan not)`

**Ink değişkenleri:** `gizli_p2 (+GZ_B7)`

- [ ] **B15.0.1** `[INK]` `Assets/Story/bolum15.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b15_s1` → `b15_s2` → `b15_s3` → `b15_son`
- [ ] **B15.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B15.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b15_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — SON KAYIT

**Knot:** `b15_s1`

**Görevler**

- [ ] **B15.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B15.S1.2** `[UI]` Video ana galerinin **en altında** (hep oradaydı); ilk kez bu bölümde vurgulanır.
- [ ] **B15.S1.3** `[VARLIK]` "Yedi dakika" anısı; Emir oyuncusu için en duygusal çekim.
- [ ] **B15.S1.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu ikinci telefondaki son videoyu açar. Bu video Plan B klasörünün değil, telefonun ana galerisinin en altındadır. Hep oradaydı; oyuncu sadece o kadar aşağı kaydırmamıştı.

**`14 Ağustos 2026 — 23:24`**

Emir kameraya tek başına bakmaktadır. Deniz ve M. odada değildir. Işık daha da azalmıştır. Emir'in gözleri kızarmış ama sesi sakindir; sakinliği korkutucudur.

> **Emir — Video:** Eğer bunu izliyorsam, demek ki kararımı verdim.

> **Emir — Video:** Beni tanıyorsan, bana inanma.

> **Emir — Video:** Çünkü bunu sana söyleyen kişi benim.

Kamera yaklaşır. Aslında Emir telefonu kendine doğru çekmektedir.

> **Emir — Video:** Sana benim olduğumu kanıtlamam gerekiyor, biliyorum. Kimse bilmez: annemin mutfağındaki saat hep yedi dakika ileriydi. Babam her sabah düzeltirdi, annem her akşam geri alırdı. Hiçbir zaman nedenini söylemedi.

> **Emir — Video:** Yedi dakika erken olmanın insanı kurtardığını düşünürdü. Ben de bu gece yedi dakika erken gelmek istedim. Olmadı.

> _Not: Yazar notu: Bu kişisel detay, videonun sahte olmadığını hem Emir'e hem oyuncuya kanıtlar ve Emir'e bir çocukluk, bir aile verir. Ayrıca oyuncuya soğuk bir kanıt zincirinin ortasında sıcak, insani bir an yaşatır. İstenirse "yedi dakika" motifi Üçüncü Perde'de 23:10 gibi yeni bir saatle ilişkilendirilebilir._


</details>


### SAHNE 2 — ANA GERÇEK

**Knot:** `b15_s2`

**Görevler**

- [ ] **B15.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B15.S2.2** `[SİSTEM]` "Olmadı." sonrası uzak zil → yavaşlatınca `zil_gizli` ile eşleşme → `GZ_B7`.
- [ ] **B15.S2.3** `[INK]` Seçim `Tekrar izle` (gri dosya odak dışında) / `Telefonu kapat` (kapanmaz, M. mesajıyla açılır).
- [ ] **B15.S2.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **Emir — Video:** Bir şeyi senden saklamıyorum.

> **Emir — Video:** Bir şeyi benden saklıyorum.

Sessizlik. Emir gözlerini kameradan kaçırır, sonra geri döner.

> **Emir — Video:** Çünkü hatırlarsam tekrar aynı kararı vereceğim.

> **Emir — Video:** Yedi yıl önce bir karar verdim. Bu gece bir tane daha verdim. İkisi de aynı karar. Üçüncüsünü vermek istemiyorum.

> **Emir — Video:** Eğer bir gün buraya kadar geldiysen, artık seçme sırası sende. Ben değilim. Sen.

Video biter. Ekranda videonun son karesi kalır: Emir'in eli, kamerayı kapatmak için uzanmış.

Oyuncu ilk defa anlar: Emir geçmişteki olaydan değil, kendisinden korkmaktadır. Olayın tekrar yaşanmasından değil, kendi vereceği kararın tekrarından.

**▸ SEÇİM** — A) Videoyu tekrar izle. · B) Telefonu kapat.

> _Not: "Videoyu tekrar izle" seçilirse oyuncu yeni bir ayrıntı fark eder: Emir'in arkasında, masada, gri dosya kapalı duruyor. Üzerindeki etiket bu kez kameraya dönük ama odak dışında. "Telefonu kapat" seçilirse telefon kapanmaz; ekran kararır ve M.'nin mesajıyla yeniden aydınlanır. İki yol da aynı sahneye bağlanır._


</details>


### SAHNE 3 — M.'NİN SON AÇIKLAMASI

**Knot:** `b15_s3`

**Görevler**

- [ ] **B15.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B15.S3.2** `[INK]` M. açıklaması; `# saat:23:15` → `# saat_bekle:23:16` → `# geri_sayim:60` (→ A-75).
- [ ] **B15.S3.3** `[TEST]` Sayaç 23:17:00'da sıfıra ulaşacak şekilde saatle kilitli.
- [ ] **B15.S3.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Sayaç her uygulamanın üstünde kalıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **M.:** Ben seni uyandırmadım.

> **M.:** Sen kendine geri dönmenin yolunu bıraktın.

> **Emir:** Neden şimdi?

> **M.:** Çünkü biri dosyayı açtı. Üç hafta önce. YANKI bana haber verdi.

> **Emir:** Kim?

> **M.:** Bilmiyorum. Ve bu beni korkutuyor.

> **Emir:** Neden bana hemen söylemedin?

> **M.:** Çünkü sen öyle istedin. Kanıtlarla. Kendi adımlarınla.

> **M.:** Ama artık süre doldu.

> **Emir:** Ne süresi?

> **M.:** Planın.

> **M.:** Karar vermezsen YANKI her şeyi geri verecek. Sildiğin her fotoğrafı. Her mesajı. Her kaydı. Bunu da sen istedin.

> **Emir:** Ne zaman?

M. cevap vermez. Ekran saati 23:15'i gösterir. Bir dakika sonra, 23:16:00'da ana ekranın ortasında, hiçbir uygulamaya ait olmayan bir sayaç belirir.

**`00:59 → 00:58 → 00:57`**

> _Not: Yazar notu: Geri sayım tam 23:16:00'da başlar ve 23:17:00'da sıfıra ulaşır. Oyuncu bunu fark etmese bile saat köşede görünür kalmalıdır. 23:17 motifinin İkinci Perde'deki son ve en güçlü kullanımıdır._


</details>


### BÖLÜM SONU

**Knot:** `b15_son`

**Görevler**

- [ ] **B15.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B15.SON.2** `[UI]` Notlar açılır ama klavye çıkmaz (→ A-52). `# bolum_sonu:15` sayaç **durmadan**; bölüm sonu ekranı küçük ve hızlı, sayaç ekranda kalır.
- [ ] **B15.SON.3** `[TEST]` Bölüm 15 sonu ile Bölüm 16 başı arasında oyuncu çıkarsa, geri döndüğünde sayaç 60'tan yeniden başlar (adil).
- [ ] **B15.SON.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Yedi dakika", "Üç hafta önceki erişim", "Geri sayım".
- Gizli ipucu: 23:24 videosunun sesinde, Emir'in "Olmadı." demesinden sonra, çok uzakta bir telefon zili duyulur. Aynı zil sesi Bölüm 14'teki 23:17 aramasının zil sesidir. Birisi 23:24'te tekrar aramıştır.
- Kendime Not: Bu bölümde Kendime Not yazılamaz. Notlar uygulaması açılır ama klavye çıkmaz. Ekranda yalnızca imleç yanıp söner. Geri sayım devam etmektedir.
**`BÖLÜM 15 TAMAMLANDI — HATIRLA`**



</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Tekrar izle / Kapat | Sahne 3'te birleşir | — |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
