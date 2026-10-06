# BÖLÜM 14 — 23:17'DE KİM VARDI?

Bölüm amacı: Ana olayın fiziksel olarak ne olduğunu göstermek, ama merkezindeki iki şeyi, dosyanın içeriğini ve telefondaki sesi, gizli tutmak.

Oyuncunun hissi: Tanıklık. Her şeyi görmek ama en önemli iki şeyi ne görmek ne duymak.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-59 (41 sn sessiz)`, `A-61`, `A-67 (arama sürüyor şeridi)`, `A-20`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `VID_B14_HAM`
- [ ] SFX: zil_gizli, kamera_flas
- [ ] `KN_B14`

**Ink değişkenleri:** `deniz_aradi_b14`, `gizli_p2 (+GZ_B6)`

- [ ] **B14.0.1** `[INK]` `Assets/Story/bolum14.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b14_s1` → `b14_s2` → `b14_s3` → `b14_s4` → `b14_s5` → `b14_son`
- [ ] **B14.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B14.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b14_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — HAM KAYIT

**Knot:** `b14_s1`

**Görevler**

- [ ] **B14.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B14.S1.2** `[INK]` Seçim `Deniz'i ara` / `Tek başına izle` → `deniz_aradi_b14`.
- [ ] **B14.S1.3** `[UI]` Arama kolu: yeşil "Deniz — arama sürüyor" şeridi; kayıt boyunca ara ara nefes sesi (ayrı ses katmanı).
- [ ] **B14.S1.4** `[UI]` Kayıt cihazında yeni dosya `HAM_140826.rec`; B07'de yoktu.
- [ ] **B14.S1.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Gece. Emir evdedir. Deniz'in "tek başına izleme" uyarısına rağmen tek başınadır. Oyuncuya kısa bir seçim sunulur.

**▸ SEÇİM** — A) Deniz'i ara. · B) Tek başına izle.

> _Not: İki seçim de aynı kayda çıkar. Deniz aranırsa Deniz telefonu açar ama konuşmaz; hat açık kalır ve kayıt boyunca ekranın köşesinde "Deniz — arama sürüyor" yazar. Bazı anlarda Deniz'in nefesi duyulur. Tek başına izlenirse ekran köşesi boştur ve sessizlik daha ağırdır._

Oyuncu Bölüm 7'de bulduğu kayıt cihazını açar. Bu kez dosya listesinin altında, daha önce görünmeyen bir dosya vardır: "HAM_140826.rec". Bölüm 7'de izlenen görüntü bu kaydın kesilmiş, kısa bir parçasıydı.

**`14 Ağustos 2026 — 23:12`**

Kamera 17 numaralı dairenin dış odasında, masanın üzerindedir. Açı sabittir. Pencere kadrajın sağ kenarında kalır; pervazda ikinci telefon durmaktadır, ekranı karanlık.


</details>


### SAHNE 2 — M.

**Knot:** `b14_s2`

**Görevler**

- [ ] **B14.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B14.S2.2** `[SİSTEM]` Bileklik kareleri: GZ_B1 + B10 grup fotoğrafı bulunduysa üç görüntü yan yana → `IPUCU_M_MERT`.
- [ ] **B14.S2.3** `[VARLIK]` Deniz nefes nefese girişi.
- [ ] **B14.S2.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu M.'nin Mert olduğundan artık emin.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

M. ilk defa kameranın karşısına geçer. Yüzü görünmez; kamera onun göğsünden aşağısını görür. Sol bileğinde siyah ip bileklik.

İpucu panosunda "Bileklik" kartı yanıp söner. Oyuncu bu bilekliği Bölüm 9 fotoğrafında ve Bölüm 10'daki grup fotoğrafında görmüşse, üç görüntü otomatik olarak yan yana gelir. M., Mert'tir. Oyuncu bunu artık bilir.

> **M.:** Bunu gerçekten yapmak istediğine emin misin?

> **Emir:** Evet.

> **M.:** Son kez soruyorum.

> **Emir:** Evet.

> **M.:** Yedi yıl önce de "evet" demiştin.

Emir cevap vermez. Kapı açılır. Deniz içeri girer; nefes nefesedir, merdivenleri koşarak çıkmıştır.

> **Deniz:** Hâlâ vazgeçebilirsin.

> **Emir:** Vazgeçersem daha kötü olacak.

> **Deniz:** Kimin için?

> **Emir:** Herkes için.


</details>


### SAHNE 3 — 23:17

**Knot:** `b14_s3`

**Görevler**

- [ ] **B14.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B14.S3.2** `[UI]` Saat göstergesi saniye saniye (23:16:58, :59).
- [ ] **B14.S3.3** `[VARLIK]` 23:17:00'da üç eşzamanlı olay (flaş, zil, M.'nin eli).
- [ ] **B14.S3.4** `[SİSTEM]` "SES YOK — 00:41" etiketi, 37. saniyede dudak hareketi (yakınlaştırılabilir, çözülemez).
- [ ] **B14.S3.5** `[SES]` 41 saniye boyunca **oyunun kendi ambiyansı da kesilir**; yalnızca Deniz'in nefesi (arama kolu) ya da tam sessizlik.
- [ ] **B14.S3.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** 41 saniye oyuncuya uzun ve rahatsız edici geliyor. (Kritik test.)

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Kaydın saat göstergesi 23:16:58, 23:16:59'u gösterir. Oyuncu bu saniyeleri tek tek görür.

**`23:17:00`**

Aynı anda üç şey olur. Pervazdaki ikinci telefonun ekranı kısa bir flaşla yanar: sokak fotoğrafı çekilmiştir. Masadaki ikinci bir telefon, Emir'in kendi telefonu, çalmaya başlar. Ve M. elini kayıt cihazına uzatır.

Kayıttaki ses kesilir.

**`SES YOK — 00:41`**

Görüntü devam eder. Emir telefonu açar ve kulağına götürür. Konuşmuyor, yalnızca dinliyor. Deniz bir adım atar; M. kolunu uzatıp onu durdurur. Emir'in yüzü yavaşça değişir: önce kaşları çatılır, sonra yüzü bütün ifadesini kaybeder.

Otuz yedinci saniyede Emir tek bir kelime söyler. Ses yoktur. Oyuncu yalnızca dudak hareketini görür.

> _Not: Yazar notu: Oyuncu bu kareyi durdurup yakınlaştırabilir, ama dudak hareketi kesin bir kelimeye çevrilemez. Oyuncunun kendi tahminini yapması istenir. Topluluk tartışması için bilinçli bırakılmış bir boşluktur. Yazarın kendi bildiği kelime Üçüncü Perde'de açıklanacaktır._

Kırk birinci saniyede ses geri gelir. Emir telefonu masaya kapatır.

> **M.:** Kimdi?

> **Emir:** Önemli değil.

> **M.:** Emir.

> **Emir:** Dosyayı ver.

> _Not: Yazar notu: M. arayanın kim olduğunu bilmiyor. Kaydı kapattı, çünkü Emir ondan önceden bunu istemişti: "23:17'de telefonum çalarsa kaydı kapat." M.'nin sakladığı şey arayanın kimliği değil, bu talimatın varlığıdır. Bu ayrım Üçüncü Perde için önemlidir._


</details>


### SAHNE 4 — DOSYA

**Knot:** `b14_s4`

**Görevler**

- [ ] **B14.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B14.S4.2** `[VARLIK]` Dosya, boğuşma, çizik anı.
- [ ] **B14.S4.3** `[SİSTEM]` Boğuşmada duraklat + pencereye yakınlaş → yansıma "2019" + "YAN…" → `GZ_B6`.
- [ ] **B14.S4.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

M. masaya kalın, gri bir dosya bırakır. Dosyanın üzerinde yalnızca bir etiket vardır ve etiket kameraya ters durur.

> **M.:** İçinde her şey var. YANKI'nın sakladığı her şey.

> **Emir:** Bunu gördüğümde ne yapacağımı biliyorum.

> **Deniz:** Hayır. Bilmiyorsun.

Emir dosyayı açar. Kamera dosyanın içini görmez; yalnızca Emir'in yüzünü görür. Emir sayfaları çevirir. Bir sayfada durur. Uzun süre durur.

Deniz aniden atılır ve dosyayı Emir'in elinden çekmeye çalışır. Kısa bir boğuşma olur. Dosyanın metal kıskacı Deniz'in kolunu çizer. Deniz geri çekilir, koluna bakar. Kimse konuşmaz.

Gizli ipucu: Oyuncu boğuşma anında kaydı durdurur ve pencereye yakınlaşırsa, cam yüzeyde dosyanın açık sayfasının bulanık bir yansıması görülür. Okunabilen yalnızca iki şey vardır: bir yıl, "2019", ve büyük harflerle bir kelimenin yarısı: "YAN..."


</details>


### SAHNE 5 — KARAR

**Knot:** `b14_s5`

**Görevler**

- [ ] **B14.S5.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B14.S5.2** `[VARLIK]` Emir kameraya bakar — oyuncuya bakıyormuş gibi.
- [ ] **B14.S5.3** `[INK]` (deniz_aradi_b14) hat kapanır + Deniz mesajı.
- [ ] **B14.S5.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **Emir:** Bunu kimse bilmemeli.

> **M.:** O zaman plan başlıyor.

> **Deniz:** Emir, bunu yaptıktan sonra seni geri getiremeyebiliriz.

> **Emir:** Beni geri getirmeyin.

> **Deniz:** Ya kendin dönmek istersen?

Emir kameraya doğru döner. İlk kez doğrudan kameraya bakar. Oyuncuya, yani bugünkü kendisine bakıyormuş gibi.

> **Emir:** O zaman yolu bulurum. Kendime bırakacağım.

Emir elini kameraya uzatır. Kayıt burada kesilir.

Eğer oyuncu Deniz'i aradıysa, kayıt bittiği anda hat öbür uçtan kapanır. Birkaç saniye sonra tek bir mesaj gelir: "Özür dilerim. Bunu izlerken yanında olmalıydım."


</details>


### BÖLÜM SONU

**Knot:** `b14_son`

**Görevler**

- [ ] **B14.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B14.SON.2** `[INK]` `# kendime_not:KN_B14`, `# bolum_sonu:14`.
- [ ] **B14.SON.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "M. = Mert", "41 saniye", "Arayan", "Deniz'in çiziği — çözüldü".
- Gizli ipucu: Pencerede yansıyan "2019" ve "YAN...".
- Kendime Not: "O gece bir telefon açtım ve her şey değişti. Kimin aradığını bilmiyorum." Son cümle seçimi: "Ama o an ne duyduğumu biliyordum." veya "Belki de hiç bilmemeliyim."
**`BÖLÜM 14 TAMAMLANDI — 23:17'DE KİM VARDI?`**



</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Deniz'i ara / Tek başına | Aynı kayıt | Ses katmanı + son mesaj |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
