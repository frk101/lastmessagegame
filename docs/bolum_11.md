# BÖLÜM 11 — 17 NUMARA

Bölüm amacı: 17 numaralı binanın takip merkezi değil, bir hazırlık odası olduğunu ortaya çıkarmak ve oyunun ilk karesini yerine oturtmak.

Oyuncunun hissi: Önce paranoya, sonra ağır bir anlama. "İzlenmiyordum. Hazırlanıyordum."


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-71 (tuş takımı)`, `A-73 (sürükle, obje altı)`, `A-49`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `ODA_17_GECE`
- [ ] `ODA_17_KAPI2`
- [ ] `ODA_17_IC`
- [ ] `FOTO_DUVAR_01…05 (+arka yüzler)`
- [ ] `PENCERE_B11_GECE`
- [ ] `PROP_OTOPARK_FIS`
- [ ] `VID_B11_PLANB`
- [ ] SFX: tik_merdiven, tus_takimi_bip/hata
- [ ] Ambiyans: oda_17_bos, oda_17_ic
- [ ] `KN_B11`

**Ink değişkenleri:** `gizli_p2 (+GZ_B3)`

- [ ] **B11.0.1** `[INK]` `Assets/Story/bolum11.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b11_s1` → `b11_s2` → `b11_s3` → `b11_s4` → `b11_s5` → `b11_s6` → `b11_son`
- [ ] **B11.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B11.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b11_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — DAİRE

**Knot:** `b11_s1`

**Görevler**

- [ ] **B11.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B11.S1.2** `[UI]` Harita yolculuğu (sinyal düşer), merdiven `tik_merdiven`.
- [ ] **B11.S1.3** `[UI]` `ODA_17_GECE`: B07'den 4 fark (masa temiz, perde çekili, dolap kaymış, ıslak fincan).
- [ ] **B11.S1.4** `[SİSTEM]` Fincanı kaldır → altında otopark fişi → `GZ_B3`.
- [ ] **B11.S1.5** `[SİSTEM]` Dolabı sürükle → `ODA_17_KAPI2`.
- [ ] **B11.S1.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** B07'yi oynamış oyuncu farkları hissediyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Gece. Saat 22:30 civarı. Emir tekrar 17 numaralı binaya gider. Harita uygulamasında konuma yaklaştıkça sinyal çubukları azalır.

Merdiven boşluğunun ışığı otomatik yanar ve sönmeden önce kısa bir tık sesi çıkarır. Oyuncu bu sesi Bölüm 2'deki karanlık sokak sahnesinden hatırlayabilir.

Kapı Bölüm 7'deki anahtarla açılır. Ancak içerisi o zamankinden farklıdır.

- Bölüm 7'deki masa temizlenmiştir. Üzerinde hiçbir şey yoktur.
- Pencerenin önündeki perde çekilmiştir.
- Duvara dayalı büyük dolap birkaç santim kaymıştır; zeminde sürtünme izi vardır.
- Tezgâhta bir kahve fincanı durur. Dibi henüz kurumamıştır.
> **Emir:** Biri buradaydı. Az önce.

Oyuncu dolabı iter. Arkasında, kilitli ikinci bir kapı çıkar. Kapıda dört haneli şifreli bir kilit ve eski bir güvenlik sistemi paneli vardır.


</details>


### SAHNE 2 — ŞİFRE

**Knot:** `b11_s2`

**Görevler**

- [ ] **B11.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B11.S2.2** `[SİSTEM]` Tuş takımı 1108 (→ A-71). 3. yanlışta M. mesajı "Başladığı gün. Bitiş gününü değil."
- [ ] **B11.S2.3** `[TEST]` GZ_B2 bulunmuşsa oyuncu kodu biliyor; bulunmamışsa ipucu mesajından çözülebiliyor.
- [ ] **B11.S2.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Şifre 1108'dir: Emir'in Mert'i ilk aradığı gün, 11 Ağustos. Oyuncu bunu ipucu panosundan çıkarabilir. Yanlış girişlerde panel kısa bir uyarı sesi çıkarır; üçüncü yanlış denemede telefon titreşir.

> **M.:** Başladığı gün. Bitiş gününü değil.

> _Not: Yazar notu: M. burada yardım eder ama cevabı söylemez. Bu, M.'nin bütün İkinci Perde boyunca uyguladığı kuralın ilk görünür örneğidir: yön gösterir, cevap vermez. Çünkü Emir ondan bunu istemiştir. Oyuncu bunun sebebini Bölüm 12'de öğrenir._


</details>


### SAHNE 3 — DUVAR

**Knot:** `b11_s3`

**Görevler**

- [ ] **B11.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B11.S3.2** `[UI]` Lamba yakılınca duvar görünür; 5 fotoğraf titiz dizilim.
- [ ] **B11.S3.3** `[INK]` Seçim `Fotoğrafları indir` / `Hastane fotoğrafına yaklaş` (hastane kolu: bulanık tabela, iç ses).
- [ ] **B11.S3.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

İç oda küçük ve penceresizdir. Tek bir masa lambası vardır. Oyuncu lambayı yaktığında duvar görünür.

Duvarda onlarca fotoğraf asılıdır. Fotoğrafların tamamında Emir vardır. Bazılarında kameraya bakmaktadır; yani fotoğrafın çekildiğini biliyordur.

- 03 Mayıs 2026 — Emir bir kafede, dizüstü bilgisayarının başında.
- 21 Haziran 2026 — Emir gece bir köprüde, telefonla konuşuyor.
- 02 Temmuz 2026 — Emir bir hastane koridorunda oturuyor.
- 11 Ağustos 2026 — Emir evinde, pencerenin önünde, telefonu kulağında.
- 14 Ağustos 2026 — Emir bu binanın önünde, 23:09.
Fotoğraflar kırmızı iplerle birbirine bağlanmış değildir; düzgün, neredeyse titiz bir sırayla dizilmiştir. Bir takip panosu gibi değil, bir arşiv gibi.

> **Emir:** Beni aylardır izliyorlarmış.

**▸ SEÇİM** — A) Fotoğrafları duvardan indir. · B) Hastane fotoğrafına yaklaş.

> _Not: Alternatif seçim: Oyuncu hastane fotoğrafına yaklaşırsa, arka plandaki koridor tabelasında bir bölüm adı okunur ama tabela bulanıktır. Emir: "Ben hiç hastaneye gitmedim. Gittim mi?" Bu ipucu İkinci Perde'de çözülmez; Üçüncü Perde'ye bırakılır._


</details>


### SAHNE 4 — FOTOĞRAFLARIN ARKASI

**Knot:** `b11_s4`

**Görevler**

- [ ] **B11.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B11.S4.2** `[UI]` Her fotoğrafın arka yüzü (el yazısı görsel).
- [ ] **B11.S4.3** `[SİSTEM]` Pano: arka yüz yazısı + `PROP_NOT_IKI_KEZ` (B07 zarfındaki el yazısı kâğıt) → "Aynı el yazısı. Benim yazım." **Süreklilik notu:** B02 notu Notlar uygulamasında dijital olduğu için el yazısı karşılaştırması B07 zarfıyla yapılır (senaryo dokümanı güncellendi).
- [ ] **B11.S4.4** `[INK]` 4 not okunduktan sonra (`# adim_bekle:...`) Emir'in iki satırı.
- [ ] **B11.S4.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu "beni izlemiyorlarmış, ben kendimi hazırlamışım" anını yaşıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu fotoğrafları tek tek duvardan indirir. Her birinin arkasında el yazısı vardır. El yazısı Emir'e aittir. Oyuncu bunu, Bölüm 7'deki zarftan çıkan "Deniz'e iki kez sor." kâğıdındaki yazıyla karşılaştırarak fark eder.

> **Not:** Takip etmiyoruz. Hazırlıyoruz.

> **Not:** Kendi kararını kendisi vermeli.

> **Not:** Bu fotoğrafı gösterirken hiçbir şey söyleme. Kendisi bakacak.

> **Not:** Eğer hastane fotoğrafına takılırsa, henüz zamanı değil.

Son notu okuyan oyuncu duraksar. Emir bu notları gelecekteki kendisinin hangi fotoğrafa takılacağını tahmin ederek yazmıştır.

> **Emir:** Bunları ben yazmışım. Kendime. Beni izlemiyorlarmış. Ben kendimi hazırlamışım.

Oyuncu burada M.'nin Emir'i izlemekten çok, Emir'in planını hazırlamasına yardım ettiğini anlamaya başlar.


</details>


### SAHNE 5 — PENCERE

**Knot:** `b11_s5`

**Görevler**

- [ ] **B11.S5.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B11.S5.2** `[UI]` Perde açılır → `PENCERE_B11_GECE`.
- [ ] **B11.S5.3** `[UI]` **Bölünmüş ekran** (→ A-49): `PENCERE_B11_GECE` | `FOTO_B01_SOKAK_2317`. Otomatik değil: oyuncu galeriden B01 fotoğrafını açınca tetiklenir; açmazsa 20 sn sonra Emir'in eli kendiliğinden galeriye gider.
- [ ] **B11.S5.4** `[SES]` `# sessizlik` — müzik tamamen kesilir, yalnızca şehir.
- [ ] **B11.S5.5** `[VERİ]` `HS_PERVAZ`: tozdaki dikdörtgen iz.
- [ ] **B11.S5.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** İki görüntü üst üste oturduğunda oyuncu "aaa" diyor. (Bu, test edilecek en önemli an.)

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu dış odaya döner ve pencerenin perdesini açar. Aşağıda gece sokağı görünür. Sokak lambası, köşedeki tabela, karşı kaldırımda park etmiş araç.

Ekran bir anlığına bölünür: bir yanda pencereden görünen sokak, diğer yanda Bölüm 1'deki fotoğraf. Aynı açı. Aynı lamba. Aynı tabela.

> **Emir:** İlk fotoğraf buradan çekilmiş. Bu pencereden.

Pencere pervazında, tozun içinde küçük, dikdörtgen bir iz vardır. Bir telefonun uzun süre durduğu yer.

> _Not: Yazar notu: Bu, İkinci Perde'nin en önemli "yerine oturma" anıdır. Oyuncuya kimse söylemez; oyuncu iki görüntüyü yan yana görür ve kendisi anlar. Bu anda müzik tamamen kesilmeli, yalnızca şehir sesi kalmalıdır._


</details>


### SAHNE 6 — KAYIT ODASI

**Knot:** `b11_s6`

**Görevler**

- [ ] **B11.S6.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B11.S6.2** `[UI]` Laptop → `VID_B11_PLANB` → ani kesilme, son kare "PLAN B", oda kararır.
- [ ] **B11.S6.3** `[INK]` `# titresim` Deniz: "Şu an 17 numarada mısın?"
- [ ] **B11.S6.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

İç odadaki masada eski bir dizüstü bilgisayar vardır. Oyuncu açtığında şifre sormaz; masaüstünde tek bir video dosyası durur.

> **Emir — Video:** Eğer bu kaydı izliyorsam, demek ki ilk plan başarısız oldu.

> **Emir — Video:** Birisi dosyaya ulaştı. Ve ben yine buradayım.

> **Emir — Video:** Bunu izleyen kişi ben olduğuma göre ikinci plan başladı.

Videodaki Emir bir şey daha söylemek için ağzını açar. Tam o anda video durur ve bilgisayar kendiliğinden kapanır. Oda karanlığa gömülür.

Kapanmadan önceki son karede ekranda tek bir yazı kalır:

**`PLAN B`**

Aynı anda Emir'in telefonu titreşir. Mesaj M.'den değil, Deniz'dendir.

> **Deniz:** Şu an 17 numarada mısın?

Emir, Deniz'e nerede olduğunu hiç söylememiştir.


</details>


### BÖLÜM SONU

**Knot:** `b11_son`

**Görevler**

- [ ] **B11.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B11.SON.2** `[INK]` ipuçları, `# kendime_not:KN_B11`, `# bolum_sonu:11`.
- [ ] **B11.SON.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Hazırlık odası", "Pencere açısı", "Kahve fincanı", "PLAN B".
- Gizli ipucu: Kahve fincanının tabağının altında, yarısı yırtılmış bir otopark fişi. Tarih bugünün tarihi, saat 21:58. Emir buraya gelmeden bir saat önce biri buradaydı.
- Kendime Not: "Duvardaki her fotoğrafın arkasında benim yazım vardı." Son cümle seçimi: "Demek ki kendime karşı bir plan yapmışım." veya "Demek ki kendimi korumaya çalışmışım."
**`BÖLÜM 11 TAMAMLANDI — 17 NUMARA`**



</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| İndir / Hastane | Sahne 4'te birleşir | Hastane ipucu (Perde 3) |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
