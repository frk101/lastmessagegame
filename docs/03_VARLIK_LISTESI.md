# 03 — VARLIK LİSTESİ

Oyundaki bütün fotoğraf, oda görseli, video, ses ve metin varlıkları. **ID'ler Ink etiketlerinde birebir kullanılır.** Bir varlık çekilip/kaydedilip projeye girdiğinde "Durum" sütununu işaretle.

Genel çekim tavsiyesi: fotoğrafları gerçekten bir telefonla, gece, hafif kusurlu çek (biraz gren, biraz bulanıklık). Oyunun inandırıcılığı "birinin telefonunu karıştırıyorum" hissinden gelir. Yüzü görünmemesi gereken kişiler (M.) için oyuncu kullanabilirsin; yalnızca omuz, göğüs ve sol bilek görünecek.

## Süreklilik notları (çekimden önce oku)

- **Daire 17'nin penceresi binanın köşe cephesindedir.** Böylece pencereden aşağı açılı çekilen `FOTO_B01_SOKAK_2317` kadrajında hem sokak lambası ve tabela hem de binanın kendi giriş kapısı ve üzerindeki **17** plakası görünür. Bölüm 2'de dokunulan "Bina numarası — 17" hotspot'u budur.
- Bölüm 1'deki gizli ipucu 1 ("karşı binanın üçüncü katındaki küçük ışık"), aslında pencere pervazındaki telefonun **karşı binanın karanlık camındaki yansımasıdır.** Çekimde karşı binanın camında küçük bir ışık noktası olsun; açıklama Bölüm 11'de gelir.
- `FOTO_B01_SOKAK_2317`, `FOTO_B02_EMIR_ARKADAN` ve `PENCERE_B11_GECE` **aynı pencereden, aynı yükseklikten** çekilmeli. B11'deki "aynı açı" anı buna dayanır.
- M.'nin **siyah ip bilekliği** sol bilekte; `FOTO_B09_UCLU_2321`, `FOTO_B10_GRUP_2019` ve `VID_B14_HAM` içinde görünür olmalı.
- Deniz'in kolundaki **çizik**: `FOTO_B09_UCLU_2321` içinde var, `VID_B14_HAM` içinde oluştuğu an görülür.
- Duvar kâğıdı `ART_DUVAR_SAHIL` bütün oyun boyunca aynıdır (Final 2'de de).

## Fotoğraflar

| ID | Bölüm | İçerik / çekim notu | Hotspot'lar | Durum |
|---|---|---|---|---|
| `ART_DUVAR_SAHIL` | 1→ | Kilit ekranı: sisli sahil, Emir'in çektiği. | — | [ ] |
| `FOTO_B01_SOKAK_2317` | 1, 2, 11, 12 | Gece, Çınarlı Sokak, daire 17 penceresinden aşağı açılı. Lamba, yarım tabela "...NARLI SK.", giriş kapısı ve 17 plakası, karşı kaldırımda arabanın ön camında otopark kartı, karşı binanın camında küçük ışık yansıması. Köşede 23:17 damgası. Bilgi: Çekim 14.08.2026 23:17, Eklenme dün 23:17, (B12'de) Cihaz: İkinci telefon, Mod: Zamanlayıcı. | `HS_TABELA`, `HS_BINA17`, `HS_ARAC`, `HS_SAAT`, `HS_ISIK (gizli A1)` | [ ] |
| `FOTO_B02_EMIR_ARKADAN` | 2 | Yukarıdan, Emir'in sırtı, telefona bakıyor, sokak lambası altında. | `HS_ACI (gizli A2 — pano birleşimi)` | [ ] |
| `KAMERA_B02_SOKAK` | 2 | Sokaktan bakış (kamera görünümü), 5–10 sn döngü, hafif el titremesi. Merdiven ışığı yanıp söner varyantı. Pencere perdesi kıpırdayan varyant (B02 S7 sonu). | — | [ ] |
| `HARITA_SEHIR` | 2, 16 | Stilize şehir haritası, Çınarlı Sokak, ofis, Emir'in evi, deniz kenarı çay bahçesi. | — | [ ] |
| `FOTO_B03_1408_KAHVE` / `_BULUT` / `_FIS` | 3 | 14 Ağustos'un sıradan fotoğrafları. | — | [ ] |
| `FOTO_B03_2248_LAMBA` | 3, 9 | Buğulu ön camın ardında bulanık sokak lambası (araba içinden). | `HS_ONCAM` | [ ] |
| `FOTO_B03_0132_KANEPE` | 3, 13 | Emir kanepede uyuyor, battaniye. Sağ alt kenarda çok küçük parmak bulanıklığı (3x zoom'da görünür). | `HS_PARMAK (gizli A3)` | [ ] |
| `FOTO_BIZ_01…30` | 4 | "biz" ortak albüm dolgu fotoğrafları (üniversite, yemek, tatil). Deniz ve Emir. | — | [ ] |
| `FOTO_B04_2259_KAPUT` | 4 | Gece, Deniz'in araba kaputu + tanınır çıkartma, arkada bulanık "...NARLI SK." tabelası. | — | [ ] |
| `FOTO_B05_CEKMECE` | 5 | Gündüz, Emir'in yatak odasındaki küçük ahşap masa ve alt çekmece. | — | [ ] |
| `FOTO_B09_UCLU_2321` | 9, 13, 14 | Loş iç mekân (daire 17 dış oda). Emir telefona bakıyor (ekranında yarım "Bunu okuyor..." taslağı), Deniz Emir'e bakıyor, kolunda taze çizik, masada 17 anahtarı, arkada açık kapı ve pirinç 17. Üçüncü kişinin yalnızca omzu ve sol bileği (bileklik). Kimse gülmüyor. | `HS_CIZIK`, `HS_TEL2_EKRAN`, `HS_ANAHTAR`, `HS_KAPI17`, `HS_BILEKLIK (gizli B1)` | [ ] |
| `FOTO_B10_GRUP_2019` | 10 | Üniversite laboratuvarı, 5 kişi. Emir en solda, Deniz ortada gülüyor, en sağdaki yüz dijital olarak kaba karalanmış; sol bilekte küçük bulanık bileklik. | `HS_KARALAMA`, `HS_BILEK2019` | [ ] |
| `FOTO_DUVAR_01…05` | 11 | Duvardaki Emir fotoğrafları: 03.05 kafe, 21.06 köprü, 02.07 hastane koridoru (tabela bulanık), 11.08 ev penceresi, 14.08 23:09 bina önü. Her birinin **arka yüzü** ayrı görsel (el yazısı notlar). | arka yüz notları | [ ] |
| `PENCERE_B11_GECE` | 11 | Daire 17 penceresinden gece görünümü — `FOTO_B01_SOKAK_2317` ile birebir aynı açı. Pervazda tozda dikdörtgen iz. | `HS_PERVAZ` | [ ] |
| `PROP_OTOPARK_FIS` | 11 | Yarısı yırtık otopark fişi, bugünün tarihi, 21:58. | gizli B3 | [ ] |
| `FOTO_YANKI_DOLGU_001…060` | 16 | Geri yükleme akışı için: çeşitli yıllardan sıradan fotoğraflar + seçilebilir 4 kare: laboratuvar, hastane koridoru, doğum günü pastası, gece otoyol. | 4 seçilebilir kare | [ ] |
| `KAMERA_B16_GIRIS` | 16 | Güvenlik kamerası: bina girişi, siyah-beyaz, koyu montlu kişi bekliyor, merdiven ışığı yanıp söner, kişi döner ve ışık söner. 10–15 sn video. | — | [ ] |

## Oda görselleri (A-73)

| ID | Bölüm | İçerik | Etkileşimli objeler |
|---|---|---|---|
| `ODA_EV_SALON` | 5 | Emir'in evi, iki gün sonra: masada eski kahve fincanı. | fincan, buzdolabı |
| `ODA_EV_YATAK` | 5 | Yatak odası, `FOTO_B05_CEKMECE` ile aynı masa. | `CEKMECE` (sıkışık, 2 dokunuş) |
| `ODA_EV_CEKMECE_IC` | 5 | Kablolar, el feneri, kumaşa sarılı telefon. | `TEL2` |
| `ODA_17_GUNDUZ` | 7 | Örtülü mobilyalar, duvara dayalı dolap, kalın perde, masada 3 nesne. | `PERDE`, `TEL_ESKI`, `KAYIT_CIHAZI`, `ZARF` |
| `ODA_17_GECE` | 11 | Masa temiz, perde çekili, dolap kaymış (zeminde iz), tezgâhta ıslak fincan. | `DOLAP` (sürükle), `FINCAN`, `FINCAN_ALTI (gizli B3)`, `PERDE` |
| `ODA_17_KAPI2` | 11 | Dolabın arkasındaki kapı + tuş takımı paneli. | `TUS_TAKIMI` |
| `ODA_17_IC` | 11 | Penceresiz iç oda, masa lambası, fotoğraf duvarı, dizüstü. | `LAMBA`, `DUVAR_01…05`, `LAPTOP` |
| `ARABA_IC_B09` | 9 | Flashback: Deniz'in arabası içi, gece, buğulu ön cam, radyo. | — |

## Videolar

| ID | Bölüm | Süre (tahmini) | İçerik / kritik anlar |
|---|---|---|---|
| `VID_2317_FINAL` | 3 (açılamaz), 6 | 0:50 | Kötü ışıklı oda. "Bunu izliyorsan…" → "Deniz'e güvenme." Sonra ~5 sn **sessiz** devam (dudak: "…çünkü ikinci kez sorarsan sana gerçeği söyler"). Son saniyelerde masaya 17 anahtarını bırakma (tek kare kadar kısa). |
| `VID_2317_KESIT` | 7 | 0:40 | Kurgulanmış klip. Köşe damgası 23:17. Arkadaki duvar saati **23:19**. Belden aşağı M. belge verir, kapakta Emir'in adı. Bozuk ses: "…yapma…", "…yedi yıl…", "…kimse bilmemeli…". Emir kameraya: "Bundan sonra ne olursa olsun…" |
| `VID_B11_PLANB` | 11 | 0:20 | Emir: "Eğer bu kaydı izliyorsam…" → aniden kesilir, son karede "PLAN B". |
| `VID_B12_HAFIZA` | 12 | 1:10 | Emir iç odada, listeyi okur. Kâğıtta okumadan atladığı madde: "Deniz'e söz verdir." (duraklatıp yakınlaşınca okunur). |
| `VID_B14_HAM` | 14 | 4:00 | Sabit kamera, dış oda, 23:12–23:2x. Pervazda ikinci telefon. M. göğüsten aşağı + bileklik. Deniz koşarak girer. 23:17:00'da: pervazda flaş, Emir'in telefonu çalar, M. kayıt sesini kapatır → **41 sn ses yok**, 37. sn Emir tek kelime (dudak). Dosya, boğuşma, Deniz'in kolu çizilir, **camda yansıma** ("2019", "YAN…"). Emir kameraya bakar. |
| `VID_B15_2324` | 15 | 1:30 | Emir tek başına, kızarmış gözler, sakin ses. "Yedi dakika" anısı. "Olmadı." sonrası çok uzaktan zil (gizli B7). Arkada masada kapalı gri dosya (2. izlemede fark edilir). |

## Sesler — diyalog kayıtları

| ID | Bölüm | Kişiler | İçerik |
|---|---|---|---|
| `SES_B03_047` | 3 | Emir | 47 sn. "Eğer bunu dinliyorsam…" ~20 sn sessizlik "…Demek ki işe yaramadı." Arkada saat tıkırtısı. Son saniyede hafif `tik_merdiven`. |
| `SES_B05_TARTISMA` | 5 | Emir, Deniz | Araba içi → kapı → merdiven yankısı. Aniden kesilir. |
| `SES_B07_KAYIT` | 7 | Emir, Deniz | "Eğer buraya geldiysem…" → "Hangi seferinde?" |
| `SES_B10_ARAMA` | 10 | M., Emir | 18:42'lik aramanın bozuk kaydı. Arkada çaydanlık, kedi. Gürültü segmentleri işaretli. Emir'in cevabından yalnızca "…ikisi…" seçilir. |
| `SES_B12_01MESAJ` | 12 | Emir | Plan B talimatları: "Beni kanıtlarla götür…", "Sıra önemli." |
| `SES_B13_BULUSMA` | 13 | Deniz, Emir | Canlı kayıt. Deniz kenarı ambiyansı ayrı katman. Bardak, anahtarlık (17 plakası, gizli B5), sandalye. |
| `SES_B16_SAAT` | 16 | — | Gizli sahne: 7 sn mutfak saati tıkırtısı. |

**Oyuncu seslendirme:** Emir, Deniz, M. (Mert). Satır listeleri her bölüm dosyasında "Seslendirme" başlığı altında.

## Ses efektleri (SFX)

`titresim`, `bildirim`, `mesaj_gelen`, `mesaj_giden`, `glitch_mesaj`, `glitch_flashback`, `tik_merdiven` (**oyunun imza sesi**: merdiven ışığı zamanlayıcısının tık'ı), `kamera_flas`, `kapi_kilit`, `anahtar_don`, `cekmece_sikisik`, `tus_takimi_bip`, `tus_takimi_hata`, `zil_gizli` (23:17 ve 23:24'te aynı melodi), `telefon_kapan`, `telefon_ac`, `bardak_masa`, `anahtarlik_metal`, `sandalye`, `vapur_duduk`, `ayak_sesi`, `otobus_fren`, `kopek_uzak`, `sayac_tik`.

## Ambiyanslar

`sehir_gece`, `sokak_gece_ruzgar`, `ofis_gece` (klima, uzak trafik), `ev_bos`, `oda_17_bos`, `oda_17_ic` (daha boğuk), `araba_ic`, `deniz_kenari` (martı, bardak, çocuk sesi).

## Müzik

Az ve seyrek. `muzik_tema` (tek piyano + drone), `muzik_gerilim` (alçak drone), `stinger_2317` (23:17'ye geçişte kısa vurgu), `muzik_flashback` (tema, filtreli). Önemli anlarda **müzik yok** (B11 pencere, B14 41 sn, B15 video).

## Metin varlıkları

| ID | Bölüm | İçerik |
|---|---|---|
| `NOT_B02_17YI_BUL` | 2 | "17'yi bul. Ama kapıyı çalma." Oluşturma 12.08.2026, Eklenme dün 23:17. El yazısı fontu değil, Notlar metni. |
| `NOT_B07_IKI_KEZ` | 7 | Zarftaki kâğıt: "Deniz'e iki kez sor." (el yazısı görsel `PROP_NOT_IKI_KEZ`) |
| `NOT_B11_ARKA_01…04` | 11 | Duvar fotoğraflarının arkasındaki notlar. |
| `NOT_B12_HAFIZA` | 12 | "Ben hatırlamam. Telefon hatırlar…" |
| `NOT_B12_FOTO` | 12 | "Bu fotoğrafa bakınca hiçbir şey hatırlamayacağım…" |
| `KN_B01…KN_B16` | her bölüm | Kendime Not metinleri + 2 son cümle seçeneği (bölüm dosyalarında). |

## Gizli ipuçları

| ID | Bölüm | Nerede | Koşul |
|---|---|---|---|
| `GZ_A1` | 1 | `FOTO_B01_SOKAK_2317` → `HS_ISIK` | Dokun |
| `GZ_A2` | 2 | Panoda `FOTO_B01` + `FOTO_B02_EMIR_ARKADAN` birleşimi | Pano |
| `GZ_A3` | 3 | `FOTO_B03_0132_KANEPE` → `HS_PARMAK` | 3x zoom + dokun |
| `GZ_A4` | 3 | `SES_B03_047` son saniye | Son saniyeyi 3 kez dinle |
| `GZ_A5` | 4 | `FOTO_B04_2259_KAPUT` ekran görüntüsü | 5 sn içinde |
| `GZ_A6` | 5 | İkinci telefon → Ayarlar → Cihaz adı "E — YANKI 2" | Ayarlar'ı aç |
| `GZ_A7` | 6 | `VID_2317_FINAL` sessiz son saniyeler, yavaşlatınca yarım altyazı | Yavaşlat |
| `GZ_A8` | 7 | `VID_2317_KESIT` duvar saati 23:19 | Duraklat + yakınlaş |
| `GZ_B1` | 9 | `FOTO_B09_UCLU_2321` → `HS_BILEKLIK` | Dokun |
| `GZ_B2` | 10 | Panoda `IPUCU_1108` + `IPUCU_BINA17` | Pano |
| `GZ_B3` | 11 | `ODA_17_GECE` → `FINCAN_ALTI` (otopark fişi) | Fincanı kaldır |
| `GZ_B4` | 12 | `VID_B12_HAFIZA` kâğıttaki atlanan madde | Duraklat + yakınlaş |
| `GZ_B5` | 13 | `SES_B13_BULUSMA` anahtarlık sesi | Yavaşlatıp dinle |
| `GZ_B6` | 14 | `VID_B14_HAM` camdaki yansıma | Boğuşmada duraklat + pencereye yakınlaş |
| `GZ_B7` | 15 | `VID_B15_2324` uzaktan zil | "Olmadı." sonrası yavaşlat |
| `GZ_B8` | 16 | Son mesajdaki "Yazıyor..." göstergesi | Gösterge görünürken dokun |
