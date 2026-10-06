# BÖLÜM 7 — GERÇEK

Bölüm amacı: Ana olayın parçalarını bir araya getirmek.

Oyuncunun hissi: Gerçeğe yaklaşma. Kapının ardında cevap olduğunu sanmak.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-73 (daire 17)`, `A-11 (saat atlatma)`, `A-61`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `ODA_17_GUNDUZ`
- [ ] `PROP_ZARF, PROP_NOT_IKI_KEZ`
- [ ] `SES_B07_KAYIT`
- [ ] `VID_2317_KESIT`
- [ ] SFX: anahtar_don, kapi_kilit
- [ ] Ambiyans: oda_17_bos
- [ ] `KN_B07`

**Ink değişkenleri:** `zarf_erken_b7`, `gizli_p1 (+GZ_A8)`

- [ ] **B07.0.1** `[INK]` `Assets/Story/bolum07.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b07_s1` → `b07_s2` → `b07_s3` → `b07_s4` → `b07_s5` → `b07_son`
- [ ] **B07.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B07.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b07_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — 17 NUMARA

**Knot:** `b07_s1`

**Görevler**

- [ ] **B07.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B07.S1.2** `[INK]` Gündüz, `# saat:15:40`. Pano: `NOT_B02_17YI_BUL` + `IPUCU_ANAHTAR17` + `IPUCU_BINA17` üçlü birleşimi → Emir yorumu.
- [ ] **B07.S1.3** `[INK]` `# adim_bekle:pano(...)` → merdiven → `# sfx:anahtar_don` → kapı açılır.
- [ ] **B07.S1.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Üç kanıtın birleşmesi "kapıyı açan şey" olarak hissediliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir, anahtarla birlikte Çınarlı Sokak'a döner. Bu kez 23:17'yi beklemez; gündüz gelir. Gün ışığında bina daha sıradan, daha küçük görünür.

Oyuncu önceki bölümlerdeki fotoğraf, not ve anahtar ipuçlarını panoda birleştirir: "17'yi bul. Ama kapıyı çalma." notu, anahtarın 17'si ve binanın numarası.

> **Emir:** Kapıyı çalma, demiş. Çünkü anahtarım olacağını biliyormuş.

Emir üçüncü kata çıkar. Daire 17'nin kapısı. Anahtar döner. Kapı açılır.


</details>


### SAHNE 2 — ODA

**Knot:** `b07_s2`

**Görevler**

- [ ] **B07.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B07.S2.2** `[UI]` `ODA_17_GUNDUZ` keşfi: perde aralanabilir (gündüz sokak), 3 obje.
- [ ] **B07.S2.3** `[INK]` Zarf yazısı → seçim `Şimdi aç` / `23:17'yi bekle` → `zarf_erken_b7`.
- [ ] **B07.S2.4** `[INK]` Erken kol: boş kâğıt + M.: "Sabırsızsın. Hep öyleydin." → zorunlu bekleme.
- [ ] **B07.S2.5** `[UI]` "23:17'ye kadar bekle" butonu: saat hızlı akar, pencere ışığı gündüzden geceye döner (tek geçiş animasyonu).
- [ ] **B07.S2.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** İki kol da 23:17'de zarfın açılmasıyla birleşiyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Daire boş değildir; terk edilmiş bir çalışma odası vardır. Mobilyaların üzerinde örtüler, duvara dayalı büyük bir dolap, pencerede kalın bir perde. Havada hafif bir toz ve eski kâğıt kokusu.

Oyuncu perdeyi aralayabilir. Aşağıda Çınarlı Sokak görünür. Gündüz olduğu için oyuncu bu açıyı henüz Bölüm 1'deki fotoğrafla bağdaştırmaz; bağ İkinci Perde'de gece kurulur.

Masada üç nesne bulunur:

- Eski bir telefon (kapalı, şarjsız)
- Kayıt cihazı
- Zarf
Zarfın üzerinde, Emir'in el yazısıyla:

> **Zarf:** 23:17'den sonra aç.

Saat henüz öğleden sonradır. Oyuncuya seçim sunulur.

**▸ SEÇİM** — A) Zarfı şimdi aç. · B) 23:17'yi bekle.

> _Not: "Zarfı şimdi aç" seçilirse zarf açılır ama içindeki kâğıt boştur. Emir kâğıdı ışığa tutar, hiçbir şey yoktur. Tam o sırada M. yazar: "Sabırsızsın. Hep öyleydin." Oyuncu 23:17'yi beklemek zorunda kalır. Saat 23:17'de kâğıdın üzerinde, ısı ya da ışıkla değil, oyunun kendisiyle, yazı belirir. "23:17'yi bekle" seçilirse oyuncu sahneyi gece saatine atlatır ve zarfı zamanında açar._


</details>


### SAHNE 3 — ZARF

**Knot:** `b07_s3`

**Görevler**

- [ ] **B07.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B07.S3.2** `[INK]` `# saat_bekle:23:17` `# stinger_2317` → not → Emir cevabı → `# ipucu:IPUCU_IKI_KEZ`.
- [ ] **B07.S3.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Not panoda B13'e kadar kalıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Saat 23:17. Zarfın içinde tek bir kâğıt vardır. Üzerinde tek bir cümle:

> **Not:** Deniz'e iki kez sor.

> **Emir:** Bir kez sordum. Yalan söyledi.

Emir bu cümlenin ne anlama geldiğini bilmez. Oyuncu da bilmez. Kâğıt ipucu panosuna eklenir ve Bölüm 13'e kadar orada bekler.


</details>


### SAHNE 4 — KAYIT

**Knot:** `b07_s4`

**Görevler**

- [ ] **B07.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B07.S4.2** `[UI]` Kayıt cihazı arayüzü: uzun liste, çoğu "bozuk", tek oynatılabilir kayıt.
- [ ] **B07.S4.3** `[INK]` `# adim_bekle:ses_bitti(SES_B07_KAYIT)`.
- [ ] **B07.S4.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** "Hangi seferinde?" satırı net duyuluyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Kayıt cihazında 14 Ağustos gecesine ait kayıtlar vardır. Liste uzundur ama dosyaların çoğu bozuktur. Oynatılabilen tek bir kayıt vardır.

> **Emir — Kayıt:** Eğer buraya geldiysem planın ilk kısmı işe yaradı.

> **Emir — Kayıt:** Hatırlamıyor olmam gerekiyordu.

> **Deniz — Kayıt:** Peki ya geri dönersen?

> **Emir — Kayıt:** O zaman bana gerçeği söyle.

> **Deniz — Kayıt:** Hangi seferinde?

Kayıt biter.

> _Not: Yazar notu: Deniz'in "Hangi seferinde?" sorusu ilk taslakta yoktu. Zarftaki "iki kez sor" notuyla birlikte, sözün ilk iz düşümüdür. Oyuncu bunu şimdi çözemez; İkinci Perde'de geri dönüp hatırladığında yerine oturur._


</details>


### SAHNE 5 — ASIL AN

**Knot:** `b07_s5`

**Görevler**

- [ ] **B07.S5.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B07.S5.2** `[UI]` Kayıt cihazı → Video → `2317_kesit`.
- [ ] **B07.S5.3** `[VARLIK]` Kesit: köşe damgası 23:17, arkada duvar saati 23:19.
- [ ] **B07.S5.4** `[SİSTEM]` Duraklat + yakınlaş duvar saati → `GZ_A8`.
- [ ] **B07.S5.5** `[INK]` Son satır → `# karart:2`.
- [ ] **B07.S5.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu 23:17'yi izlediğini düşünüyor; dikkatli oyuncu saatin yanlış olduğunu görebiliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Kayıt cihazının video dosyaları arasında tek bir kısa klip açılır. Adı: "2317_kesit". Oyuncu sonunda 23:17'ye ait bir görüntüyü izlediğini düşünür.

Emir ve Deniz 17 numaralı dairededir. Karşılarında yüzü görünmeyen bir kişi vardır; kamera onu belden aşağı görür.

Yüzü görünmeyen kişi Emir'e bir belge verir. Belgenin içeriği gösterilmez; yalnızca kapağında Emir'in tam adının yazılı olduğu görülür.

Bir tartışma çıkar. Ses bozuk ve kesiktir; yalnızca birkaç kelime seçilir: "...yapma...", "...yedi yıl...", "...kimse bilmemeli..."

Emir kayıt cihazına uzanır. Ekranın köşesindeki saat damgası: 23:17.

Emir kameraya bakar.

> **Emir:** Bundan sonra ne olursa olsun, bunu hatırlamayacağım.

Ekran kararır.

> _Not: Yazar notu: Bu klip kurgulanmıştır. Köşedeki saat damgası 23:17 gösterir ama gerçek 23:17 bu değildir. Oyuncu Bölüm 14'te ham kaydı izlediğinde, asıl 23:17'de bir telefonun çaldığını ve bunun bu klipten çıkarıldığını görür. Kurguyu Emir'in kendisi yapmıştır: gelecekteki kendisine gerçeğin yalnızca "hazır olduğu kadarını" göstermek için._


</details>


### BÖLÜM SONU

**Knot:** `b07_son`

**Görevler**

- [ ] **B07.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B07.SON.2** `[INK]` `# kendime_not:KN_B07`, `# bolum_sonu:7`.
- [ ] **B07.SON.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Daire 17", "Deniz'e iki kez sor", "Hangi seferinde?", "Belge", "2317_kesit".
- Gizli ipucu 8: Klipte, Emir'in arkasındaki duvarda asılı küçük bir duvar saati. Oyuncu kareyi durdurup yakınlaştırırsa saat 23:19'u gösterir. Emir: "Saat damgası yanlış. Bu 23:17 değil."
- Kendime Not: "Kendime bir şeyi unutmam için söz verdirmişim." Son cümle seçimi: "Neyi?" veya "Kimin için?"
**`BÖLÜM 7 TAMAMLANDI — GERÇEK`**


</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Zarfı şimdi aç / Bekle | Sahne 3'te birleşir | zarf_erken_b7 (tonal) |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
