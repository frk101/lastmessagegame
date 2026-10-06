# BÖLÜM 3 — KAYIP GECE

Bölüm amacı: Hafızadaki üç saatlik boşluğu ortaya çıkarmak.

Oyuncunun hissi: Şüphe. İlk kez Emir'in kendi hafızasının güvenilmez olduğunu düşünme.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-40 (tarihe atla)`, `A-45`, `A-54`, `A-56`, `A-41 (zoom seviyesi şartı)`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `FOTO_B03_1408_KAHVE/_BULUT/_FIS`
- [ ] `FOTO_B03_2248_LAMBA`
- [ ] `FOTO_B03_0132_KANEPE`
- [ ] `SES_B03_047`
- [ ] `VID_2317_FINAL (yalnızca açılamayan dosya olarak)`
- [ ] `KN_B03`

**Ink değişkenleri:** `gizli_p1 (+GZ_A3, +GZ_A4)`

- [ ] **B03.0.1** `[INK]` `Assets/Story/bolum03.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b03_s1` → `b03_s2` → `b03_s3` → `b03_son`
- [ ] **B03.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B03.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b03_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — FOTOĞRAF GALERİSİ

**Knot:** `b03_s1`

**Görevler**

- [ ] **B03.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B03.S1.2** `[INK]` (B02 Kendime Not'ta polis seçildiyse) Emir: "Ne diyeceğim? Galerimde bir fotoğraf var mı?"
- [ ] **B03.S1.3** `[UI]` Galeride 14 Ağustos 2026 grubu; 22:48 ile 01:32 arasında görsel bir **boşluk** göstergesi (ince çizgi + "2 sa 44 dk").
- [ ] **B03.S1.4** `[VERİ]` `HS_ONCAM` (22:48): "Emir'in arabası yoktur" yorumu.
- [ ] **B03.S1.5** `[VERİ]` `HS_PARMAK` (01:32): yalnızca 3x yakınlaştırmada aktif → `GZ_A3`.
- [ ] **B03.S1.6** `[INK]` `# adim_bekle:hotspot_tek(FOTO_B03_0132_KANEPE,HS_UYKU)` → iki iç ses.
- [ ] **B03.S1.7** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Boşluk görsel olarak bariz; 22:48'in araba içinden çekildiği sezilebiliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir galeride 14 Ağustos 2026'ya gider. O günün fotoğrafları sıradandır: sabah bir kahve, öğlen ofis penceresinden bulut, akşam bir market fişi. Sonra:

- 22:48 — Buğulu bir ön camın ardında bulanık bir sokak lambası.
- (boşluk)
- 15 Ağustos, 01:32 — Emir kendi evindeki kanepede uyuyor, üzerinde bir battaniye.
Arada yaklaşık üç saatlik boşluk bulunur.

> **Emir:** Ben o üç saatte neredeydim?

> **Emir:** Ve 01:32'deki fotoğrafı kim çekti? Ben uyuyorum.

22:48 fotoğrafına bakan Emir bir ayrıntıya takılır: ön cam bir arabanın ön camıdır. Emir'in arabası yoktur.

> _Not: Yazar notu: Bu iki fotoğrafın cevabı İkinci Perde'de gelir: 22:48'i Emir Deniz'in arabasından çekmiştir, 01:32'yi Deniz çekmiştir. Birinci Perde'de ikisi de yalnızca "yanlış" hissettirmelidir._


</details>


### SAHNE 2 — SES KAYDI

**Knot:** `b03_s2`

**Görevler**

- [ ] **B03.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B03.S2.2** `[INK]` `# app_goster:ses` `# ses_ekle:SES_B03_047` → `# adim_bekle:ses_bitti(SES_B03_047)`.
- [ ] **B03.S2.3** `[VARLIK]` 20 sn sessizlik bilinçli; oynatıcı ilerlemeye devam etsin ki oyuncu bitmediğini görsün.
- [ ] **B03.S2.4** `[SİSTEM]` Son saniyeyi 3 kez dinleme sayacı → `GZ_A4` (→ A-56).
- [ ] **B03.S2.5** `[INK]` Emir: "…Kararlı gibi."
- [ ] **B03.S2.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu kaydın 20 sn sessizliğinde bekliyor; ikinci cümle ürpertici geliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Ses Kayıtları uygulamasında daha önce görmediği bir kayıt vardır. Adsızdır. Süre: 00:47. Eklenme: Dün 23:17.

Kayıt Emir'in kendi sesidir. Arka planda araba motoru değil, sessiz bir oda; ara sıra bir saat tıkırtısı.

> **Emir'in Kayıttaki Sesi:** Eğer bunu dinliyorsam...

Uzun sessizlik. Yaklaşık yirmi saniye. Oyuncu kaydın bittiğini sanabilir.

> **Emir'in Kayıttaki Sesi:** Demek ki işe yaramadı.

Kayıt biter. Oyuncu ses kaydını tekrar oynatabilir. Başka bilgi yoktur. Ama kaydın sonundaki son saniyede, çok hafif, bir "tık" sesi duyulur.

> **Emir:** Neyin işe yaramadığını bilmiyorum. Ama sesim... Korkmuş gibi değil. Kararlı gibi.


</details>


### SAHNE 3 — SİLİNMİŞ DOSYA

**Knot:** `b03_s3`

**Görevler**

- [ ] **B03.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B03.S3.2** `[UI]` Son silinenler: `2317_FINAL.mp4`, açılamıyor, "Kaynak cihaz: Bilinmiyor / Orijinal bu cihazda değil".
- [ ] **B03.S3.3** `[INK]` `# adim_bekle:dosya_acik(2317_FINAL)` → Emir "…başka bir telefonda çekilmiş." → `# ipucu:IPUCU_IKINCI_TEL`.
- [ ] **B03.S3.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** "İkinci telefon" kartı panoya ekleniyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Telefonun "Son silinenler" klasöründe silinmiş bir video kaydı görülür.

**`2317_FINAL.mp4`**

Video açılamaz. Dosyanın bilgi ekranında iki satır vardır:

- Kaynak cihaz: Bilinmiyor
- Durum: Orijinal bu cihazda değil
> **Emir:** Bu video başka bir telefonda çekilmiş. Benim adımla.

Bölüm sonunda ipucu panosunda yeni bir kart oluşur: "İkinci telefon."


</details>


### BÖLÜM SONU

**Knot:** `b03_son`

**Görevler**

- [ ] **B03.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B03.SON.2** `[INK]` ipuçları, `# kendime_not:KN_B03`, `# bolum_sonu:3`.
- [ ] **B03.SON.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Üç saatlik boşluk", "Ses kaydı", "2317_FINAL.mp4", "İkinci telefon".
- Gizli ipucu 3: 01:32 fotoğrafının sağ alt kenarında çok küçük, pembe bulanık bir şekil: fotoğrafı çekenin parmağı. Oyuncu yakınlaştırırsa Emir: "Bunu ben çekmedim. Biri yanımdaydı."
- Gizli ipucu 4: Ses kaydının sonundaki "tık". Oyuncu kaydın son saniyesini üç kez dinlerse panoya eklenir. Aynı sesi Bölüm 2'deki merdiven ışığından hatırlayan oyuncu bağlantıyı kendisi kurar.
- Kendime Not: "Hayatımdan üç saat eksik." Son cümle seçimi: "O gece içmiş olmalıyım." veya "O üç saati biri benden aldı."
**`BÖLÜM 3 TAMAMLANDI — KAYIP GECE`**


</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| — | Doğrusal bölüm | — |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
