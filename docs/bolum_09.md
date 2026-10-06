# BÖLÜM 9 — GERİ DÖNÜŞ

Bölüm amacı: Oyuncuyu 14 Ağustos gecesine ilk kez doğrudan götürmek ve geçmiş ile bugün arasındaki bağlantıyı göstermek.

Oyuncunun hissi: Ürperti ve yakınlık. Geçmiş artık bir kanıt değil, yaşanan bir an.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-28`, `A-27 (flashback)`, `A-38`, `A-48`, `A-53`, `A-66`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `FOTO_B09_UCLU_2321`
- [ ] `ARABA_IC_B09`
- [ ] `FOTO_B03_2248_LAMBA (tekrar)`
- [ ] Ambiyans: araba_ic
- [ ] Müzik: muzik_flashback
- [ ] `KN_B09`

**Ink değişkenleri:** `final_p1 (okunur)`, `gizli_p2 (+GZ_B1)`

- [ ] **B09.0.1** `[INK]` `Assets/Story/bolum09.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b09_ac` → `b09_s1` → `b09_s2` → `b09_s3` → `b09_s4` → `b09_son`
- [ ] **B09.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B09.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b09_ac` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### AÇILIŞ — BÖLÜM 8'DEN KÖPRÜ

**Knot:** `b09_ac`

**Görevler**

- [ ] **B09.AC.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B09.AC.2** `[INK]` `final_p1`'e göre 3 kol: (1) şarj %4, galeri dolu; (2) boş galeri → "Sildiklerin hâlâ bende." → `# geri_yukle` (→ A-48); (3) sabitlenmiş, dokunulamayan Emir mesajı (→ A-38).
- [ ] **B09.AC.3** `[TEST]` Üç final kaydıyla da Bölüm 9 açılıyor.
- [ ] **B09.AC.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Her final kendi açılış ekranını alıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

İkinci Perde, Bölüm 8'in hangi finalle bittiğinden bağımsız olarak aynı yerden başlar. Yalnızca ilk ekran farklıdır.

- Final 1 (Hatırla) ile gelindiyse: Galeri doludur. Emir bütün kayıtları gece boyunca açık bırakmıştır. Kilit ekranında şarjı %4'e düşmüş telefon görünür.
- Final 2 (Unut) ile gelindiyse: Galeri boştur. Birkaç saniye sonra tek bir bildirim gelir: "Sildiklerin hâlâ bende." Ardından galeri, fotoğraf fotoğraf geri dolar. Oyuncu silmenin burada işe yaramadığını bir kez daha görür.
- Gizli Final ile gelindiyse: Mesaj kutusunun en üstünde, gönderen adı "Emir" olan mesaj sabitlenmiş olarak durur. Mesaja dokunulamaz.

</details>


### SAHNE 1 — SABAH 08:14

**Knot:** `b09_s1`

**Görevler**

- [ ] **B09.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B09.S1.2** `[INK]` `# saat:08:14` `# sfx` çöp kamyonu, iş sohbetinde 3 okunmamış (cevap verilemez, → A-66).
- [ ] **B09.S1.3** `[INK]` M. mesajı → seçim `Sen kimsin?` / `Kendime mi?…` → iki kol aynı fotoğrafa.
- [ ] **B09.S1.4** `[INK]` `# yaziyor_kes:m` üç kez → `# foto_gonder:m:FOTO_B09_UCLU_2321`.
- [ ] **B09.S1.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Siyah ekran. Uzaktan bir çöp kamyonunun sesi. Şehir uyanıyor, Emir uyuyamamış.

Telefon ekranı açılır. Saat 08:14. Emir'in yazılım işindeki takım sohbetinden okunmamış üç mesaj görünür: bir toplantı hatırlatması, bir kod incelemesi, bir "Emir, iyi misin? Dün toplantıya girmedin." Oyuncu bunları açabilir ama cevap veremez; Emir'in hayatının "normal" kısmı, uzakta kalmış bir dünya gibi durur.

Mesaj kutusunda M.'den yeni bir mesaj vardır.

> **M.:** Geceyi hatırlamak istiyorsan, bu kez eski telefona değil kendine bak.

**▸ SEÇİM** — A) Sen kimsin? · B) Kendime mi? Ne demek bu?

> **Emir:** Sen kimsin?

> **M.:** Bunu hâlâ sormaman gerekiyordu.

> _Not: Alternatif seçim: Oyuncu "Kendime mi? Ne demek bu?" yazarsa M. şöyle cevap verir: "Aynaya değil. Kayıtlarına." İki yol da aynı fotoğrafa çıkar._

Kısa bir sessizlik. "Yazıyor..." göstergesi üç kez belirip kaybolur. Sonra bir fotoğraf gelir.


</details>


### SAHNE 2 — FOTOĞRAFIN DETAYI

**Knot:** `b09_s2`

**Görevler**

- [ ] **B09.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B09.S2.2** `[VERİ]` 5 hotspot (biri gizli `HS_BILEKLIK` → `GZ_B1`, yorum yok, sadece kart).
- [ ] **B09.S2.3** `[INK]` `# adim_bekle:hotspot(FOTO_B09_UCLU_2321,4)` → iç ses taslağı (→ A-53).
- [ ] **B09.S2.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Telefon ekranındaki "Bunu okuyor..." taslağı yakınlaştırınca okunuyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Fotoğraf loş bir iç mekânda çekilmiştir. Kadrajda üç kişi vardır: Emir, Deniz ve yüzü kadraj dışında kalan üçüncü bir kişi. Üçüncü kişinin yalnızca omzu ve sol eli görünür.

Kimse gülümsemiyor. Emir kameraya değil, elindeki telefona bakıyor. Deniz, Emir'e bakıyor.

Fotoğraf bilgisi: 14 Ağustos 2026 — 23:21.

Oyuncu fotoğrafın farklı bölgelerine dokunarak ayrıntıları keşfeder. Her ayrıntıda Emir kısa bir yorum yapar.

- Deniz'in kolu: Taze, ince bir çizik. Emir: "Deniz'in kolunda yara izi yok. Hiç olmadı."
- Emir'in elindeki telefon: Bu, çekmecede bulunan ikinci telefondur. Ekranı yakınlaştırıldığında yarım bir mesaj taslağı okunur: "Bunu okuyor..." Emir: "Bu... bana gelen ilk mesaj."
- Masadaki anahtar: Üzerinde 17 yazan küçük, eski bir anahtar. Emir: "Anahtar o gece de oradaydı."
- Arka plan: Açık bir daire kapısı. Kapının üzerinde pirinç rakamlarla 17 yazar.
- Üçüncü kişinin eli: Bileğinde örgülü, siyah bir ip bileklik. Emir yorum yapmaz; bu ayrıntı yalnızca ipucu panosuna eklenir.
Dört ayrıntı bulunduğunda Emir'in iç sesi, Notlar uygulamasında kendiliğinden açılan bir taslak gibi ekrana düşer.

> **Emir — Not:** İlk mesajı ben mi yazıyordum? O gece? Kendime mi?

> _Not: Yazar notu: Oyuncu burada kesin bir cevap almaz. Ekrandaki taslak başka birine gönderilmiş de olabilir. Asıl cevap Bölüm 12'de gelir. Bu bölümün işi yalnızca şüpheyi ekmektir._


</details>


### SAHNE 3 — GEÇMİŞE DÖNÜŞ

**Knot:** `b09_s3`

**Görevler**

- [ ] **B09.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B09.S3.2** `[SİSTEM]` Fotoğraf 3. kez açılınca ya da 10 sn bakılınca flashback tetiklenir.
- [ ] **B09.S3.3** `[UI]` `# flashback:basla` `# tarih:14.08.2026` `# saat:22:41` — soluk arayüz, `ARABA_IC_B09` arka planda.
- [ ] **B09.S3.4** `[INK]` Diyalog + seçim `Emin değilim` / `Evet` (Evet kolu: Deniz'in sert satırı).
- [ ] **B09.S3.5** `[INK]` Emir fotoğraf çeker → `FOTO_B03_2248_LAMBA` ile eşleşme animasyonu ("son normal fotoğraf").
- [ ] **B09.S3.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu 22:48 fotoğrafının arkasındaki anı yaşıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu fotoğrafa uzun süre bakarsa, ya da fotoğrafı üçüncü kez açarsa, ekran yavaşça kararır. Görüntü bozulur, sanki telefon eski bir kaydı zorla oynatıyormuş gibi.

İlk defa oynanabilir bir geçmiş sahnesi başlar. Arayüz aynı telefon arayüzüdür ama renkleri soluktur, saat köşede yanıp söner.

**`14 Ağustos 2026 — 22:41`**

Emir, Deniz'in arabasında yolcu koltuğundadır. Yağmur yağmıyor ama ön cam buğulu. Radyo kısık sesle açık; Deniz eliyle kapatır.

> **Deniz:** Hâlâ gitmek istediğine emin misin?

**▸ SEÇİM** — A) Emin değilim. · B) Evet.

> **Emir:** Emin değilim.

> **Deniz:** O zaman gitmeyelim.

> **Emir:** Geç kaldık.

> **Deniz:** Neye?

> **Emir:** Bilmiyorum.

Deniz direksiyonu sıkar. Bir süre konuşmazlar.

> **Deniz:** Mert'in seni bu kadar kolay ikna etmesine şaşırdım.

> **Emir:** Beni kimse ikna etmedi.

> **Deniz:** Üç yıldır adını ağzına almadın. Üç gün önce bir telefon açtı ve şimdi gece yarısı onun kapısına gidiyoruz.

> **Emir:** O aramadı. Ben aradım.

Deniz'in yüzü değişir. Oyuncu Deniz'in bunu bilmediğini fark eder.

> _Not: Alternatif seçim: Oyuncu "Evet." seçerse Deniz'in cevabı sertleşir: "Emin olduğun her seferinde bir şey kaybediyoruz, farkında mısın?" Sonrasında sahne aynı yere bağlanır._

Emir telefonunu çıkarır ve ön camdan dışarıdaki sokak lambasının fotoğrafını çeker. Deniz sorar: "Ne yapıyorsun?" Emir: "Alışkanlık. Bir şeyi hatırlamak istiyorsam fotoğrafını çekerim."

Oyuncu bunun, galerideki 22:48 fotoğrafı olduğunu anlar. Bölüm 3'ten beri bildiği "son normal fotoğraf"ın arkasındaki an budur.


</details>


### SAHNE 4 — İLK GERÇEK

**Knot:** `b09_s4`

**Görevler**

- [ ] **B09.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B09.S4.2** `[UI]` Alarm ekranı "23:17 — Kapıyı aç. — Bir kez".
- [ ] **B09.S4.3** `[INK]` `# glitch:flashback` `# flashback:bitir` → iç ses → M. mesajı.
- [ ] **B09.S4.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Geçmiş sahnesinin sonunda Emir telefonunun kilidini açar. Ekranda kurulu bir alarm görünür.

**`23:17 — "Kapıyı aç."`**

Alarmın altında küçük bir tekrar ayarı: "Bir kez." Emir alarmı kapatmaz. Görüntü bozulur ve oyuncu bugüne döner.

> **Emir — Not:** 23:17 bir tesadüf değil. Ben kurmuşum.

Bölüm sonunda M.'den mesaj gelir.

> **M.:** Hatırlamaya başladın. Ama yanlış yerden.


</details>


### BÖLÜM SONU

**Knot:** `b09_son`

**Görevler**

- [ ] **B09.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B09.SON.2** `[INK]` ipuçları (`IPUCU_CIZIK`, `IPUCU_TASLAK`, `IPUCU_MERT`, `IPUCU_ALARM`), `# kendime_not:KN_B09`, `# bolum_sonu:9`.
- [ ] **B09.SON.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Deniz'in çiziği", "İlk mesajın taslağı", "Mert", "23:17 alarmı".
- Gizli ipucu: Fotoğraftaki üçüncü kişinin ip bilekliği. Yalnızca oyuncu ele özellikle dokunursa panoya eklenir.
- Kendime Not: "Deniz o gece benimleydi. Mert diye biri vardı. Ve 23:17'yi ben seçtim." Son cümle seçimi: "Kendime güvenebilir miyim?" veya "Neden hiçbirini hatırlamıyorum?"
**`BÖLÜM 9 TAMAMLANDI — GERİ DÖNÜŞ`**



</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Final köprüsü (3) | Açılışta birleşir | final_p1 |
| Sen kimsin / Kendime mi | Fotoğrafta birleşir | — |
| Emin değilim / Evet | Flashback içinde birleşir | Tonal |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
