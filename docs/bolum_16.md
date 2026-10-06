# BÖLÜM 16 — SON MESAJ

Bölüm amacı: İkinci Perde'yi kapatmak, planın bittiğini göstermek ve Üçüncü Perde'ye açık bir kapı bırakmak.

Oyuncunun hissi: Zemin kayması. Bütün bölüm boyunca kontrol, Emir'den M.'ye, M.'den sisteme ve sistemden bilinmeyen birine geçer.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-74`, `A-48`, `A-63`, `A-65`, `A-83`, `A-36`, `A-37 (iletilemedi)`, `A-90`, `A-91`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `FOTO_YANKI_DOLGU_001…060`
- [ ] `KAMERA_B16_GIRIS`
- [ ] `SES_B16_SAAT`
- [ ] SFX: telefon_kapan, telefon_ac, tik_merdiven, sayac_tik

**Ink değişkenleri:** `b16_dinlenen`, `guven (okunur)`, `gizli_p2 (+GZ_B8, okunur)`

- [ ] **B16.0.1** `[INK]` `Assets/Story/bolum16.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b16_s1` → `b16_s2` → `b16_s3` → `b16_s4` → `b16_s5` → `b16_s6` → `b16_gs` → `b16_son`
- [ ] **B16.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B16.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b16_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — GERİ SAYIM

**Knot:** `b16_s1`

**Görevler**

- [ ] **B16.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B16.S1.2** `[INK]` M. 5 satır; Deniz'den üst üste bildirimler (büyük harf "ŞİMDİ.").
- [ ] **B16.S1.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Bildirim yağmuru panik hissi veriyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Telefon 60 saniyeden geriye saymaktadır. Sayaç her uygulamanın üzerinde durur; oyuncu mesajlara, galeriye, haritaya geçse bile sayaç ekranın ortasında kalır.

Emir ne olduğunu anlamaya çalışır.

> **Emir:** M., ne yaptın?

> **M.:** Hiçbir şey.

> **M.:** Bu senin kurduğun sistem.

> **Emir:** Ben böyle bir şey kurmadım.

> **M.:** Geçmişteki Emir kurdu.

Aynı anda Deniz'den mesajlar gelmeye başlar. Ekranın üst kısmında bildirimler üst üste biner.

> **Deniz:** Telefonu kapat.

> **Deniz:** ŞİMDİ.

> **Deniz:** Geri yüklenirse her şeyi aynı anda görürsün. Kaldıramazsın. O gece kaldıramadın.

> **M.:** Kapatma.

> **M.:** Kapatırsan geri yükleme durmaz. Sadece sen görmezsin. Başkası görür.

> **Emir:** Başkası kim?

> **M.:** Dosyayı açan kişi.


</details>


### SAHNE 2 — SEÇİM: KİMİ DİNLEYECEKSİN?

**Knot:** `b16_s2`

**Görevler**

- [ ] **B16.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B16.S2.2** `[INK]` Sayaç 00:30'da seçim → `b16_dinlenen`.
- [ ] **B16.S2.3** `[SİSTEM]` Deniz kolu: güç tuşu → kaydır → geri döner ×3 → "Bu cihaz şu anda YANKI tarafından kullanılıyor." (→ A-74). `# guven:+1`
- [ ] **B16.S2.4** `[INK]` M. kolu: oyuncunun yapacak hiçbir şeyi yok; `# guven:-1`.
- [ ] **B16.S2.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Sayaç 00:30'a geldiğinde oyuncuya iki seçenek sunulur. Seçim ana olayı değiştirmez; geri yükleme her iki durumda da olur. Değişen, Emir'in o anı nasıl yaşadığı ve Üçüncü Perde'nin ilk mesajıdır.

**▸ SEÇİM** — A) Deniz'i dinle — telefonu kapatmaya çalış. · B) M.'yi dinle — bekle.

**Deniz'i dinlersen**

Oyuncu güç tuşuna basar. Ekranda "Kapatmak için kaydırın" yazar. Oyuncu kaydırır. Telefon kapanmaz; kaydırma çubuğu geri döner. Bir kez daha denenir. Üçüncüsünde ekranda tek satır belirir: "Bu cihaz şu anda YANKI tarafından kullanılıyor."

> **Emir:** Deniz, kapanmıyor.

> **Deniz:** Özür dilerim.

> **Deniz:** Oradayım. Ne görürsen gör, oradayım.

**M.'yi dinlersen**

Emir telefonu masaya bırakır ve bekler. Oyuncunun yapabileceği hiçbir şey yoktur; ekrandaki tek hareketli şey sayaçtır. Deniz'in mesajları gelmeye devam eder, sonra durur.

> **M.:** Doğru olanı yaptın.

> **M.:** Ya da en azından kendi yaptığın şeyi yaptın. Bu sefer.


</details>


### SAHNE 3 — PLANIN AMACI

**Knot:** `b16_s3`

**Görevler**

- [ ] **B16.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B16.S3.2** `[SİSTEM]` Son 10 sn pano otomatik bağlanır (→ A-83), 6 kart-cümle.
- [ ] **B16.S3.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Son on saniyede oyuncu ipucu panosunu açabilir. Pano, İkinci Perde boyunca toplanan bütün kartları bir araya getirir ve kartlar kendiliğinden birbirine bağlanır. Bu, oyuncunun hikâyeyi kendi gözüyle toparladığı andır.

- 14 Ağustos gecesi Emir, YANKI'nın yıllardır sakladığı ve kendisine ait gizli bir dosyayla yüzleşti.
- Dosyanın içeriği açıklanmaz. Ancak dosyanın 2019 yılına ve Emir'in yedi yıl önce verdiği bir kararla bağlantılı olduğu anlaşılır.
- Emir, gerçeği hatırlarsa aynı kararı yeniden vereceğinden korktuğu için bütün hatırlatıcılarını sildi ve gelecekteki kendisine ulaşacak bir yol bıraktı.
- M., yani Mert, bu yolun yürütücüsüdür. Emir'e cevap değil, yön vermiştir.
- Deniz, Emir'e bir söz vermiş, o sözü tutmuş ve bundan en çok kendisi acı çekmiştir.
- Plan B, birisi dosyaya dışarıdan eriştiği için başlamıştır. O kişi hâlâ bilinmemektedir.

</details>


### SAHNE 4 — 00:00

**Knot:** `b16_s4`

**Görevler**

- [ ] **B16.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B16.S4.2** `[INK]` `# geri_sayim` 00:00 = `# saat:23:17` `# telefon_kapan` `# bekle:3` `# telefon_ac`.
- [ ] **B16.S4.3** `[SİSTEM]` `# geri_yukle` sayaç 214→3.861; akıştan 4 kare dokunmayla seçilebilir ama açılmaz.
- [ ] **B16.S4.4** `[TEST]` Düşük cihazda akış 60 fps değilse bile takılmıyor (→ A-105).
- [ ] **B16.S4.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Geri yükleme bir "sel" gibi hissettiriyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Geri sayım 00:01'e gelir.

**`00:00`**

Ekran köşesindeki saat aynı anda değişir.

**`23:17`**

Telefon kapanır. Birkaç saniye tamamen siyah ekran. Ses yok.

Telefon tekrar açılır. Açılış ekranı her zamankinden uzun sürer. Sonra ana ekran gelir ve galeri simgesinin üzerindeki sayı hızla artmaya başlar.

**`214 → 1.206 → 2.940 → 3.861`**

Fotoğraflar, mesajlar, ses kayıtları; Emir'in yıllar içinde sildiği her şey aynı anda geri gelir. Bildirimler ekranı doldurur, telefon titreşmeyi bırakmaz. Oyuncu herhangi birine dokunamaz; akış çok hızlıdır. Arada tek tek kareler seçilebilir: 2019'dan bir laboratuvar, bir hastane koridoru, birinin doğum günü pastası, gece çekilmiş bir otoyol. Hiçbiri açıklanmaz.

Sonra her şey birden durur. Tek bir bildirim kalır.


</details>


### SAHNE 5 — SON MESAJ

**Knot:** `b16_s5`

**Görevler**

- [ ] **B16.S5.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B16.S5.2** `[INK]` `# ad_degistir` gönderen EMİR, tarih 14.08.2026 23:17. İlk mesaj → `# yaziyor:emir_gecmis:2` (çelişki kasıtlı) → iki mesaj.
- [ ] **B16.S5.3** `[SİSTEM]` "Yazıyor..." göstergesine dokunma → `GZ_B8`.
- [ ] **B16.S5.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Plan B klasöründeki kilitli dosyanın kilidi açılmıştır. 04 — SON MESAJ bir mesaj olarak gelir.

Gönderen:

**`EMİR`**

Tarih:

**`14 Ağustos 2026 — 23:17`**

> **Emir:** Eğer bunu okuyorsan, Plan B de bitti.

Birkaç saniye bekleme. "Yazıyor..." göstergesi belirir. Oyuncu bu göstergenin geçmişten gelen, önceden yazılmış bir mesajda olmaması gerektiğini fark edebilir.

> **Emir:** Bundan sonrasını ben planlamadım.

> **Emir:** Şimdi 17 numaraya git.

Oyuncu şaşırır. Çünkü 17 numaralı bina artık boş değildir.

> _Not: Yazar notu: İlk taslaktaki "ilk plan başarısız oldu / ikinci plan başladı" cümleleri Bölüm 11'de zaten kullanıldığı için burada yeniden yazıldı. Yeni cümleler gerilimi bir basamak yükseltir: artık plan yoktur. "Yazıyor..." göstergesi ise kasıtlı bir çelişkidir; önceden zamanlanmış bir mesajın yazılıyor görünmesi, sistemi şu an başka birinin kullanıyor olabileceğini ima eder._


</details>


### SAHNE 6 — SON GÖRÜNTÜ

**Knot:** `b16_s6`

**Görevler**

- [ ] **B16.S6.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B16.S6.2** `[UI]` Harita kişi simgesi (→ A-63), güvenlik kamerası akışı (→ A-65).
- [ ] **B16.S6.3** `[INK]` Bilinmeyen: "Bu kez geç kalma." → Emir→M. "Bu sen misin?" → "Hayır." "Emir, oraya gitme."
- [ ] **B16.S6.4** `[INK]` Emir→Deniz mesajı `# durum:deniz:iletilemedi`. `# karart`.
- [ ] **B16.S6.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Harita açılır. 17 numaralı bina işareti yanıp söner. Ancak bu kez işaretin yanında bir kişi simgesi vardır.

Oyuncu konuma yaklaştıkça, yani haritayı yakınlaştırdıkça, ekranda "Güvenlik kamerası — Giriş" adlı bir akış açılır. Bu akışı Emir'e kimin açtığı belli değildir.

Kamera görüntüsünde bir kişi bina kapısının önünde beklemektedir. Üzerinde koyu bir mont, elleri ceplerinde. Başının üstündeki merdiven ışığı yanar ve sönmeden önce o tanıdık tık sesini çıkarır.

Kişi kameraya doğru döner. Işık tam o anda söner. Yüzü görünmez.

Telefon titreşir.

> **Bilinmeyen Numara:** Bu kez geç kalma.

Oyuncu, bu numaranın M.'nin numarası olmadığını fark eder. Emir hemen M.'ye yazar.

> **Emir:** Bu sen misin?

> **M.:** Hayır.

> **M.:** Emir, oraya gitme.

Aynı anda Deniz'e yazılan mesajın altında, ilk kez, "İletildi" yazısı çıkmaz. Mesaj gönderilemez.

Ekran kararır.


</details>


### GİZLİ SAHNE — YEDİ DAKİKA

**Knot:** `b16_gs`

**Görevler**

- [ ] **B16.GS.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B16.GS.2** `[INK]` (gizli_p2 == 8) `# saat:23:10` gelen arama numara gizli → açılırsa `SES_B16_SAAT` 7 sn → kapanır.
- [ ] **B16.GS.3** `[UI]` Monospace "23:10 + 7 = 23:17".
- [ ] **B16.GS.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu İkinci Perde'deki sekiz gizli ipucunun tamamını topladıysa, kararan ekrandan sonra kısa bir sahne daha açılır.

Ekranda yalnızca saat vardır: 23:10.

Telefon çalar. Arayan: Numara gizli.

Oyuncu açabilir. Açarsa yedi saniye boyunca yalnızca bir mutfak saatinin tıkırtısı duyulur. Sonra hat kapanır.

Oyuncu, Bölüm 15'teki cümleyi hatırlar: annesinin saati hep yedi dakika ileriydi.

**`23:10 + 7 = 23:17`**

> _Not: Yazar notu: Bu sahne, 14 Ağustos gecesi 23:17'de Emir'i arayan kişinin kim olduğuna dair İkinci Perde'deki en güçlü ipucudur. Açıkça söylenmez. Oyuncuların tartışacağı, Üçüncü Perde'nin çekirdeğine yerleştirilebilecek bir tohumdur._


</details>


### BÖLÜM SONU

**Knot:** `b16_son`

**Görevler**

- [ ] **B16.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B16.SON.2** `[INK]` `# bolum_sonu:16` "SONRAKİ HİKÂYE: 17 NUMARA".
- [ ] **B16.SON.3** `[SİSTEM]` Güven'e göre Perde 3 açılış mesajını kaydet (guven ≥ +2 Deniz, ≤ −2 M., arası denge).
- [ ] **B16.SON.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

**`BÖLÜM 16 TAMAMLANDI`**

**`SONRAKİ HİKÂYE: 17 NUMARA`**

Güven Terazisi'ne göre Üçüncü Perde'nin açılış mesajı:

- Deniz ağır basıyorsa: "Emir, neredesin? Bana cevap ver." (Deniz'den, üç gün sonra.)
- M. ağır basıyorsa: "Gittiğini biliyorum. Ben de geliyorum." (M.'den.)
- Dengedeyse: "Günaydın, Emir." (Bilinmeyen numaradan, 08:14.)


</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Deniz'i dinle / M.'yi dinle | Sahne 3'te birleşir | guven, b16_dinlenen |
| Gizli sahne | gizli_p2 == 8 | — |
| Perde 3 açılışı | guven | 3 mesaj |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
