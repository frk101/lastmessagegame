# BÖLÜM 4 — DENİZ

Bölüm amacı: Güven temasını bozmak ve Deniz'in olaydan haberdar olduğunu göstermek.

Oyuncunun hissi: Güvensizlik. En güvendiği kişiye bakarken ilk kez tereddüt etmek.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-36`, `A-46`, `A-47`, `A-90`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `FOTO_BIZ_01…30`
- [ ] `FOTO_B04_2259_KAPUT`
- [ ] `KN_B04`

**Ink değişkenleri:** `deniz_gel_b4`, `ss_alindi_b4`, `guven`, `gizli_p1 (+GZ_A5)`

- [ ] **B04.0.1** `[INK]` `Assets/Story/bolum04.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b04_s1` → `b04_s2` → `b04_s3` → `b04_s4` → `b04_son`
- [ ] **B04.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B04.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b04_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — MESAJ

**Knot:** `b04_s1`

**Görevler**

- [ ] **B04.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B04.S1.2** `[VERİ]` Deniz'in stil değişimi: bu bölümden itibaren ciddi anlarda büyük harf + noktalama (kişi kartında iki stil).
- [ ] **B04.S1.3** `[INK]` "Neden soruyorsun?" öncesi `# yaziyor_kes:deniz` iki kez.
- [ ] **B04.S1.4** `[INK]` (deniz_23_sordu_b2 ise) Deniz "Bunu nereden duydun?" satırını beklemeden, daha hızlı yazar: kaçamak cevabı artık tutamıyor.
- [ ] **B04.S1.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu Deniz'in yazım tarzının değiştiğini fark edebiliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Gece. Emir yine ofistedir. Deniz'in son mesajı ekranın üstündedir: "akşam uğrayayım mı". Cevapsız kalmıştır.

> **Emir:** 14 Ağustos gecesini hatırlıyor musun?

Deniz uzun süre cevap vermez. "Yazıyor..." göstergesi belirir, kaybolur, tekrar belirir.

> **Deniz:** Neden soruyorsun?

Oyuncu bir şeyi fark edebilir: Deniz bu mesajda büyük harf ve soru işareti kullanmıştır. Hiç yapmadığı bir şey.

> **Emir:** 23:17 ne demek?

Cevap gecikir.

> **Deniz:** Bunu nereden duydun?

Emir durur. Deniz "ne demek" diye sormamıştır. "Nereden duydun" diye sormuştur.


</details>


### SAHNE 2 — ÇELİŞKİ

**Knot:** `b04_s2`

**Görevler**

- [ ] **B04.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B04.S2.2** `[INK]` "Ben yalnız mıydım?" → `# bekle:15` (ekran değişmez) → "Evet."
- [ ] **B04.S2.3** `[INK]` Seçim: `Gelme` / `Evet, gel` → `deniz_gel_b4`. Gel kolu: "yarım saate oradayım" → `# bekle:8` → "işim çıktı yarın konuşalım". `# guven:-1`.
- [ ] **B04.S2.4** `[TEST]` 15 sn bekleme metin hızı ayarıyla kısalabiliyor (→ A-95) ama en az 6 sn kalıyor.
- [ ] **B04.S2.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** 15 saniyelik sessizlik oyuncuda "bir şey saklıyor" hissi yaratıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **Emir:** Sen benimle o gece neredeydin?

> **Deniz:** Evindeydin.

> **Emir:** Ben yalnız mıydım?

Uzun sessizlik. Oyuncunun ekranı yaklaşık on beş saniye boyunca değişmez.

> **Deniz:** Evet.

> **Deniz:** Emir ne oluyor? Geleyim mi?

**▸ SEÇİM** — A) Gelme. Sadece merak ettim. · B) Evet, gel.

> _Not: İkinci seçenek seçilirse Deniz "yarım saate oradayım" yazar ama gelmez; bir saat sonra "işim çıktı yarın konuşalım" diye yazar. Oyuncu Deniz'in kaçtığını hisseder. İki yol da aynı sahneye bağlanır. Güven Terazisi ilk kez burada devreye girer._


</details>


### SAHNE 3 — ORTAK ALBÜM

**Knot:** `b04_s3`

**Görevler**

- [ ] **B04.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B04.S3.2** `[UI]` Ortak albüm "biz": yüzlerce dolgu, tarihe atla.
- [ ] **B04.S3.3** `[SİSTEM]` 22:59 fotoğrafı açılınca üstte "Deniz albümü düzenliyor." + 5 sn silinme göstergesi (→ A-46).
- [ ] **B04.S3.4** `[SİSTEM]` Ekran görüntüsü (→ A-47) → `ss_alindi_b4 = true`, `GZ_A5`, kalıcı ipucu kartı.
- [ ] **B04.S3.5** `[INK]` Alınamazsa: "Gördüm. Silse de gördüm." + kart görselsiz eklenir.
- [ ] **B04.S3.6** `[TEST]` Ekran görüntüsü hareketi oyuncuya B01'de ya da ayarlarda bir kez öğretilmiş olmalı (ipucu: B02 harita ekranında "ekran görüntüsü al" küçük öğretici).
- [ ] **B04.S3.7** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Silinme anı paniğe sokuyor; iki durumda da hikâye ilerliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir, Deniz'le paylaştığı eski ortak albümü açar. Albümün adı "biz" dir; üniversiteden beri ikisinin de yüklediği yüzlerce fotoğraf vardır. Emir kendi fotoğraflarını silebilir ama Deniz'in yüklediklerini silemez.

14 Ağustos'a gidildiğinde tek bir fotoğraf vardır. Deniz'in telefonundan otomatik yüklenmiş.

- Tarih: 14 Ağustos 2026 — 22:59
- İçerik: Gece, bir sokak. Ön planda Deniz'in arabasının kaputu ve üzerindeki bilinen çıkartma. Arka planda, bulanık ama tanınır bir tabela: "...NARLI SK."
Emir fotoğrafa bakarken ekranın üstünde küçük bir bildirim belirir: "Deniz albümü düzenliyor." Fotoğrafın köşesinde bir silinme göstergesi dolmaya başlar.

> _Not: Yazar notu: Oyuncunun ekran görüntüsü almak için yaklaşık beş saniyesi vardır. Ekran görüntüsü alınırsa kanıt kalıcı olarak panoya eklenir. Alınamazsa fotoğraf silinir ama Emir'in bir satırı kalır: "Gördüm. Silse de gördüm." Hikâye iki durumda da ilerler; yalnızca ekran görüntüsünü alan oyuncu Bölüm 8'de ek bir satır duyar._

Fotoğraf kaybolur. Albümde "Bu öğe artık mevcut değil" yazar.

> **Emir:** Deniz o gece o sokaktaydı. Ve beni yalnız olduğuma inandırmaya çalışıyor.


</details>


### SAHNE 4 — İLK BÜYÜK GERÇEK

**Knot:** `b04_s4`

**Görevler**

- [ ] **B04.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B04.S4.2** `[SİSTEM]` `# ad_degistir:bilinmeyen:M.` animasyonu (→ A-36).
- [ ] **B04.S4.3** `[INK]` Üç mesaj + "Hepimiz kim?" / "Sen. O. Ben."
- [ ] **B04.S4.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Kişi adının değiştiği an net görülüyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Yeni mesaj gelir. Gönderen adı artık "Bilinmeyen Numara" değildir; kişi kendi adını ilk kez "M." olarak göstermiştir.

> **M.:** Sana yalan söyledi.

> **M.:** Ama onu suçlama.

> **M.:** O gece hepiniz korktunuz.

> **Emir:** Hepimiz kim?

> **M.:** Sen. O. Ben.

Bölüm biter.


</details>


### BÖLÜM SONU

**Knot:** `b04_son`

**Görevler**

- [ ] **B04.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B04.SON.2** `[INK]` `# kendime_not:KN_B04` → seçim `Bir sebebi olmalı.` (+1 guven) / `Ona bir daha güvenmeyeceğim.` (−1).
- [ ] **B04.SON.3** `[INK]` `# bolum_sonu:4`.
- [ ] **B04.SON.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Güven Terazisi ilk kez değişiyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Deniz'in yalanı", "22:59 fotoğrafı", "M.", "Üç kişi".
- Gizli ipucu 5: 22:59 fotoğrafının ekran görüntüsü.
- Kendime Not: "Deniz bana yalan söyledi. On yıldır ilk kez." Son cümle seçimi: "Bir sebebi olmalı." veya "Ona bir daha güvenmeyeceğim."
**`BÖLÜM 4 TAMAMLANDI — DENİZ`**


</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Gelme / Gel | Sahne 2 sonunda birleşir | guven |
| Ekran görüntüsü alındı / alınmadı | Sahne 3 sonunda birleşir | ss_alindi_b4 → B08 ek satır, GZ_A5 |
| Kendime Not | — | guven ±1 |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
