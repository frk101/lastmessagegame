# BÖLÜM 2 — 23:17

Bölüm amacı: Oyuncuya araştırma yaptırmak ve ilk fiziksel konumu ortaya çıkarmak.

Oyuncunun hissi: Tedirginlik. Birinin bir adım önde olduğu hissi.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-43 (tam)`, `A-50`, `A-62`, `A-64`, `A-81`, `A-20 (sinyal)`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `FOTO_B01_SOKAK_2317 (4 hotspot aktif)`
- [ ] `NOT_B02_17YI_BUL`
- [ ] `HARITA_SEHIR`
- [ ] `KAMERA_B02_SOKAK (+ perde varyantı)`
- [ ] `FOTO_B02_EMIR_ARKADAN`
- [ ] SFX: tik_merdiven, kopek_uzak, titresim
- [ ] Ambiyans: ofis_gece, sokak_gece_ruzgar
- [ ] `KN_B02`

**Ink değişkenleri:** `deniz_23_sordu_b2`, `gizli_p1 (+1 GZ_A2)`

- [ ] **B02.0.1** `[INK]` `Assets/Story/bolum02.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b02_s1` → `b02_s2` → `b02_s3` → `b02_s4` → `b02_s5` → `b02_s6` → `b02_s7` → `b02_son`
- [ ] **B02.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B02.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b02_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — GÜN

**Knot:** `b02_s1`

**Görevler**

- [ ] **B02.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B02.S1.2** `[INK]` İş sohbetine 1–2 kısa cevap (seçimli). Deniz öğlen: "dün gece iyi misin sesin tuhaftı".
- [ ] **B02.S1.3** `[INK]` Seçim: `İyiyim, yorgunum.` / `Deniz, 23:17 sana bir şey ifade ediyor mu?` → `deniz_23_sordu_b2`.
- [ ] **B02.S1.4** `[INK]` İkinci kolda Deniz 1 dk gecikmeli (`# bekle` + `# yaziyor_kes` bir kez) "hayır neden" + "akşam uğrayayım mı".
- [ ] **B02.S1.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Deniz'in cevabı kaçamak ama şüphe uyandıracak kadar değil.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir gün boyu işe odaklanamaz. Oyuncu iş sohbetinde bir iki mesaja cevap verebilir; cevaplar kısadır. Deniz öğlen yazar: "dün gece iyi misin sesin tuhaftı". Emir'in "sesi" yoktu, sadece "Yoldayım" yazmıştı. Oyuncu bunu fark ederse Emir Kendime Not'a yazmak üzere küçük bir satır ayırır; fark etmezse geçer.

**▸ SEÇİM** — A) İyiyim, yorgunum. · B) Deniz, 23:17 sana bir şey ifade ediyor mu?

> _Not: İkinci seçenek seçilirse Deniz'in cevabı bir dakika gecikir: "hayır neden" ve hemen ardından "akşam uğrayayım mı". Oyuncu Deniz'in kaçamak cevabını ilk kez hisseder ama henüz şüphelenecek bir sebebi yoktur. Bu soru Bölüm 4'te yeniden, daha sert biçimde sorulur._


</details>


### SAHNE 2 — 22:51

**Knot:** `b02_s2`

**Görevler**

- [ ] **B02.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B02.S2.2** `[INK]` `# saat:22:51` iki mesaj → `# yonlendir:galeri:FOTO_B01_SOKAK_2317`.
- [ ] **B02.S2.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu doğrudan fotoğrafa götürülüyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Ertesi gece. Saat 22:51. Emir ofistedir. Telefon titreşir.

> **Bilinmeyen Numara:** Hâlâ gelmedin.

> **Bilinmeyen Numara:** Fotoğraftaki yere git.

Oyuncu Fotoğraflar uygulamasına yönlendirilir.


</details>


### SAHNE 3 — FOTOĞRAFI İNCELE

**Knot:** `b02_s3`

**Görevler**

- [ ] **B02.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B02.S3.2** `[VERİ]` 4 hotspot: `HS_TABELA` ("...NARLI SK."), `HS_BINA17`, `HS_ARAC` (otopark kartı), `HS_SAAT`. Her birine Emir yorumu.
- [ ] **B02.S3.3** `[INK]` `# adim_bekle:hotspot(FOTO_B01_SOKAK_2317,4)` → `# ipucu:IPUCU_BINA17`.
- [ ] **B02.S3.4** `[SİSTEM]` Pano birleşimi `IPUCU_TABELA + IPUCU_BINA17` → Emir: "Çınarlı Sokak?…" → `IPUCU_CINARLI` (→ A-81). Bu birleşim zorunlu değil; yapılmazsa harita yine açılır ama Emir yorumu kaçar.
- [ ] **B02.S3.5** `[TEST]` Küçük ekranda 4 hotspot rahat bulunuyor; bulunmuş olanlar hafif işaretleniyor.
- [ ] **B02.S3.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Dört ayrıntı bulunmadan ilerlenmiyor; ortalama oyuncu 1 dakikada buluyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu fotoğrafın farklı bölgelerine dokunarak dört ayrıntı keşfeder.

- Sokak tabelası: Yarısı okunur: "...NARLI SK."
- Bina numarası: Kapının üzerindeki pirinç rakam: 17.
- Arka plandaki araç: Plakası görünmez ama ön camında bir otopark kartı asılıdır.
- Fotoğraf köşesindeki saat: 23:17.
İpucu listesine "Bina No. 17" eklenir. Oyuncu "...NARLI SK." ile "17"yi panoda birleştirirse Emir tahmin yürütür: "Çınarlı Sokak? Şehirde bir tane var. Buraya yirmi dakika."


</details>


### SAHNE 4 — NOTLAR

**Knot:** `b02_s4`

**Görevler**

- [ ] **B02.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B02.S4.2** `[INK]` `# not_ekle:NOT_B02_17YI_BUL` → `# adim_bekle:app_acik(notlar)`. Not listenin en altında.
- [ ] **B02.S4.3** `[UI]` Not bilgisinde Oluşturma 12.08.2026 / Eklenme dün 23:17.
- [ ] **B02.S4.4** `[INK]` Emir: "Bu benim yazım. Ama ben bunu yazmadım."
- [ ] **B02.S4.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Not bulunuyor, tarihleri okunabiliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Notlar uygulamasında, listenin en altında eski bir not görünür. Notun bilgisi: "Oluşturma: 12 Ağustos 2026. Eklenme: Dün 23:17."

> **Eski Not:** 17'yi bul. Ama kapıyı çalma.

> **Emir:** Bu benim yazım. Ama ben bunu yazmadım.

Oyuncu notun neden yazıldığını bilmiyor. Yalnızca notun bir talimat gibi yazıldığını fark ediyor: birine değil, sanki kendine.


</details>


### SAHNE 5 — HARİTA

**Knot:** `b02_s5`

**Görevler**

- [ ] **B02.S5.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B02.S5.2** `[UI]` Harita: Çınarlı Sokak No. 17, yıldız, adı boş, yalnızca 🔑 emojisi (→ A-62).
- [ ] **B02.S5.3** `[INK]` `Sistem: Bu konum 6 ay önce kaydedildi.` + Emir sorusu.
- [ ] **B02.S5.4** `[UI]` "Konuma git" butonu → mavi nokta ilerler, sinyal 4→1 düşer (→ A-20).
- [ ] **B02.S5.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Yolculuk 5–8 sn sürüyor, sinyal düşüşü fark ediliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Haritada Çınarlı Sokak No. 17'de eski, dört katlı bir apartman görünür. Konuma dokunulduğunda bir yıldız işareti belirir.

> **Sistem:** Bu konum 6 ay önce kaydedildi.

> **Emir:** Ben mi kaydettim bunu?

Kayıtlı konumun adı boştur. Yalnızca bir emoji vardır: bir anahtar.

Oyuncu konuma gider. Yol boyunca ekranda harita görünür; Emir'in mavi noktası kayıtlı yıldıza yaklaşır. Yaklaştıkça sinyal çubukları birer birer azalır.


</details>


### SAHNE 6 — 23:16

**Knot:** `b02_s6`

**Görevler**

- [ ] **B02.S6.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B02.S6.2** `[UI]` Kamera görünümü `KAMERA_B02_SOKAK` (→ A-64). Kamera **dönmez**; kaydırma denemelerinde yalnızca hafif sallanma.
- [ ] **B02.S6.3** `[SES]` `# saat:23:16` merdiven ışığı yanar, `# sfx:tik_merdiven` ile söner.
- [ ] **B02.S6.4** `[INK]` "Sakın arkanı dönme." → `# bekle:5` → `# sessizlik` (nefes + uzak köpek).
- [ ] **B02.S6.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu 5 saniye boyunca ekranda hiçbir şey olmadan gerginlik hissediyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Ekran karanlık bir sokak görüntüsüne dönüşür: Emir'in telefon kamerasından görülen Çınarlı Sokak. Sokak lambası, tabela, apartman. Karşı kaldırımda araba yoktur.

Saat 23:16. Apartmanın giriş kapısının üstündeki merdiven ışığı yanar, birkaç saniye sonra sönmeden önce kısa bir "tık" sesi çıkarır. İçeride kimse görünmez.

Telefon titreşir.

> **Bilinmeyen Numara:** Sakın arkanı dönme.

Oyuncuya birkaç saniye hiçbir şey gösterilmez. Yalnızca Emir'in nefesi ve uzakta bir köpek.

> _Not: Yazar notu: Bu anda oyuncunun kamerayı çevirmeye çalışması muhtemeldir. Kamera dönmez. Emir'in eli titrer gibi görüntü hafifçe sallanır ama arkası hiçbir zaman gösterilmez._


</details>


### SAHNE 7 — 23:17

**Knot:** `b02_s7`

**Görevler**

- [ ] **B02.S7.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B02.S7.2** `[INK]` `# saat_bekle:23:17` `# foto_gonder:bilinmeyen:FOTO_B02_EMIR_ARKADAN`.
- [ ] **B02.S7.3** `[INK]` "Artık hatırlamaya başladın." → Emir "Neredesin?" → cevap yok.
- [ ] **B02.S7.4** `[UI]` Kamera yukarı yükselir (görselde yukarı pan), perde kıpırdayan kare.
- [ ] **B02.S7.5** `[SİSTEM]` Pano: `FOTO_B01` + `FOTO_B02_EMIR_ARKADAN` → `GZ_A2`.
- [ ] **B02.S7.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Fotoğraf "az önce, buradan, yukarıdan" çekildiği hissiyle geliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Saat 23:17 olur. Yeni fotoğraf gelir.

Fotoğraf az önce bulunduğu yerde çekilmiştir. Fotoğrafta Emir görünmektedir, arkadan, telefonuna bakarken. Fotoğraf yukarıdan çekilmiştir.

> **Bilinmeyen Numara:** Artık hatırlamaya başladın.

> **Emir:** Neredesin?

Cevap gelmez. Emir başını kaldırır; kamera apartmanın üst katlarına doğru yavaşça yükselir. Bütün pencereler karanlıktır. Üçüncü kattaki pencerenin perdesi, belki rüzgârdan, belki değil, hafifçe kıpırdar.

Bölüm biter.


</details>


### BÖLÜM SONU

**Knot:** `b02_son`

**Görevler**

- [ ] **B02.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B02.SON.2** `[INK]` ipuçları, `# kendime_not:KN_B02` (polis seçeneği B03 başında karşılanır), `# bolum_sonu:2`.
- [ ] **B02.SON.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Kendime Not seçimi B03'ün ilk satırını değiştiriyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Bina No. 17", "Çınarlı Sokak", "17'yi bul notu", "Kayıtlı konum".
- Gizli ipucu 2: Emir'in arkadan çekilmiş fotoğrafının açısı. Oyuncu bu fotoğrafı ilk sokak fotoğrafıyla panoda yan yana getirirse Emir fark eder: "İkisi de aynı yükseklikten çekilmiş."
- Kendime Not: "Biri beni izliyor. Ya da benim bilmediğim bir şeyi biliyor." Son cümle seçimi: "Polise gitmeliyim." veya "Önce ne olduğunu anlamalıyım." (Polis seçeneği bir sonraki bölümün başında Emir'in kendi kendine vazgeçtiği bir satırla karşılanır: "Ne diyeceğim? Galerimde bir fotoğraf var mı?")
**`BÖLÜM 2 TAMAMLANDI — 23:17`**


</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| İyiyim / 23:17 sorusu | Sahne 1 sonunda birleşir | deniz_23_sordu_b2 → B04'te ton |
| Pano birleşimi yapıldı mı | Opsiyonel | Emir yorumu + GZ_A2 |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
