# 01 — ALTYAPI GÖREVLERİ

Bütün bölümlerin üzerinde çalıştığı sistemler. Faz 0 ve Faz 1 bitmeden bölüm içeriğine geçme; Faz 2 ve 3'teki uygulamaları ise ilk kullanıldıkları bölüme göre sırayla yap (her görevin yanında "İlk kullanım" yazıyor).

---

## FAZ 0 — PROJE KURULUMU

- [ ] **A-01** `[SİSTEM]` Unity LTS sürümüyle yeni 2D proje aç. Hedef: Android + iOS, **dikey (portrait)**, referans çözünürlük 1080×2340.
- [ ] **A-02** `[SİSTEM]` Git deposu + `.gitignore` (Unity şablonu). Büyük dosyalar (ses, video) için Git LFS.
- [ ] **A-03** `[SİSTEM]` TextMeshPro'yu kur. Türkçe karakterleri (ç ğ ı İ ö ş ü Ç Ğ Ö Ş Ü) içeren bir font atlası oluştur. İki font: arayüz fontu (telefon sistemi gibi sade) ve monospace (sistem yazıları, saat, "BÖLÜM TAMAMLANDI").
- [ ] **A-04** `[SİSTEM]` inkle'ın **ink-unity-integration** paketini kur. Test: `test.ink` → derlenip Unity'de bir satır okunabiliyor.
- [ ] **A-05** `[SİSTEM]` Klasör yapısını kur:
  ```
  Assets/Story  Assets/Data/{Photos,Clues,Notes,Audio,Videos,Contacts,Rooms}
  Assets/Scripts/{Core,Apps,UI,Data}  Assets/UI/Prefabs  Assets/Art  Assets/Audio
  ```
- [ ] **A-06** `[SİSTEM]` Tek sahne mimarisi: `Main.unity` içinde `Telefon` kök objesi, uygulamalar bunun altında panel olarak açılıp kapanır. Sahne geçişi yok.

**Faz 0 kabul kriteri:** Boş proje telefona yüklenir, Türkçe bir cümle doğru görünür, Ink'ten bir satır ekrana basılır.

---

## FAZ 1 — ÇEKİRDEK

- [ ] **A-10** `[SİSTEM]` **OyunDurumu**: Tüm kalıcı durumu tutan tek sınıf. İçinde: bulunan ipuçları, bulunan gizli ipuçları, açılmış uygulamalar, galerideki fotoğraflar, notlar, ses/video listeleri, mesaj geçmişi (kişi başına), hotspot durumları, Güven değeri, bölüm/adım konumu, final bilgisi. Ink değişkenleriyle çift yönlü eşitlenir.
- [ ] **A-11** `[SİSTEM]` **SahteSaat**: Oyunun saati. Gerçek saatten bağımsız. Özellikler: `Ayarla(23:16)`, `İlerlet(saniye)`, `Durdur/Başlat`, gerçek zamanlı akış (1 sn = 1 sn), hızlandırılmış akış, tarih bilgisi (Şubat 2027 / flashback'te 14 Ağustos 2026). Durum çubuğu ve kilit ekranı bunu gösterir.
- [ ] **A-12** `[SİSTEM]` **Yönetmen (Director)**: Ink hikâyesini adım adım okuyan döngü. Her satırda etiketleri ayrıştırır, ilgili sisteme iletir, satır metnini ilgili uygulamaya gönderir. Seçim geldiğinde Mesajlar'a butonları çizdirir. `# bekle` etiketinde bekler. Etiketlerin tam listesi → `02_ETIKET_SOZLUGU.md`.
- [ ] **A-13** `[SİSTEM]` **Konuşmacı ayrıştırma**: `Deniz: metin` biçimindeki Ink satırlarını kişi + metin olarak ayırır. Kişi ID'si `Contacts` veri kartlarından çözülür (görünen ad, profil fotoğrafı, yazım stili).
- [ ] **A-14** `[SİSTEM]` **Adım ve Koşul sistemi**: Ink `# adim_bekle:KOŞUL` etiketiyle durur; Unity koşul sağlanınca Ink'i devam ettirir. Koşul türleri: `hotspot(FOTO_ID, adet)`, `hotspot_tek(FOTO_ID, HS_ID)`, `pano(IPUCU_A, IPUCU_B)`, `sifre(ID)`, `app_acik(APP)`, `dosya_acik(ID)`, `video_bitti(ID, kac_kez)`, `ses_bitti(ID)`, `oda_obje(ODA, OBJE)`, `sure(saniye)`, `saat(HH:MM)`.
- [ ] **A-15** `[SİSTEM]` **Kayıt sistemi**: JSON. Her adım bitiminde otomatik kayıt + uygulama arka plana düşünce kayıt. Ink state'i (`story.state.ToJson()`) + OyunDurumu birlikte kaydedilir. 3 kayıt yuvası gerekmez; tek yuva + "bölüm başından oyna" yeterli.
- [ ] **A-16** `[SİSTEM]` **Bölüm Yöneticisi**: Bölüm başlatma, bitirme, "BÖLÜM X TAMAMLANDI" ekranı, tamamlanan bölümleri tekrar oynatma (tekrar oynarken ilgili bölüm başı durumunu yükler).
- [ ] **A-17** `[SİSTEM]` **Hata ayıklama paneli** (yalnızca geliştirici derlemesinde): bölüme/knot'a atla, saati ayarla, değişkenleri gör/değiştir, tüm ipuçlarını ver, Güven'i değiştir. İçerik girerken hayat kurtarır.

**Faz 1 kabul kriteri:** `test.ink` içinde 3 mesaj + 1 seçim + 1 bekleme + 1 `adim_bekle:sure(3)` çalışıyor; uygulama kapatılıp açılınca kaldığı yerden devam ediyor.

---

## FAZ 2 — TELEFON KABUĞU

- [ ] **A-20** `[UI]` **Durum çubuğu**: SahteSaat, sinyal çubukları (0–4, hikâye kontrol eder), şarj yüzdesi (hikâye kontrol eder), "Deniz — arama sürüyor" gibi yeşil arama şeridi.
- [ ] **A-21** `[UI]` **Kilit ekranı**: büyük saat + tarih, duvar kâğıdı (sisli sahil `ART_DUVAR_SAHIL`), bildirim kartları yığını, dokununca ilgili uygulamayı açma. *İlk kullanım: B01.*
- [ ] **A-22** `[UI]` **Ana ekran**: uygulama ikonları ızgarası. İkonlar hikâye ilerledikçe görünür olur/kilitlenir (ör. Ses Kayıtları ilk B03'te "keşfedilir"). *İlk kullanım: B01.*
- [ ] **A-23** `[UI]` **Bildirim sistemi**: üstten kayan banner, kilit ekranında kart, üst üste binen çoklu bildirim (B16'da Deniz'den art arda mesaj). Dokununca ilgili yere gider.
- [ ] **A-24** `[SİSTEM]` **Titreşim**: `Handheld.Vibrate` + ekranda hafif sarsıntı animasyonu + titreşim sesi (sessiz modda da hissedilsin diye).
- [ ] **A-25** `[UI]` **Geçiş animasyonları**: uygulama açılış/kapanış, geri hareketi, ana ekrana dönüş.
- [ ] **A-26** `[UI]` **Siyah ekran / karartma**: tam ekran siyah, fade in/out, "telefon kapanıyor/açılıyor" animasyonu (B16).
- [ ] **A-27** `[UI]` **Glitch efektleri**: (a) mesaj silme glitch'i (B01), (b) flashback'e geçiş bozulması (B09), (c) kısa ekran titremesi. Shader ya da basit sprite sarsıntısı yeterli.
- [ ] **A-28** `[UI]` **Flashback modu**: tüm arayüzü soluklaştıran renk filtresi, köşede yanıp sönen saat, tarih 14 Ağustos 2026'ya döner. *İlk kullanım: B09.*
- [ ] **A-29** `[UI]` **Bölüm sonu ekranı**: siyah zemin, monospace "BÖLÜM X TAMAMLANDI — BAŞLIK", altında son görüntü (ör. "23:17"), "Devam et" butonu gecikmeli belirir.

---

## FAZ 3 — UYGULAMALAR

### Mesajlar
- [ ] **A-30** `[UI]` Konuşma listesi: kişi adı, son mesaj önizlemesi, saat, okunmadı noktası. *B01*
- [ ] **A-31** `[UI]` Konuşma ekranı: gelen/giden balonlar, zaman damgası, otomatik kaydırma, balon belirme animasyonu. *B01*
- [ ] **A-32** `[UI]` "Yazıyor..." göstergesi (karşı taraf), belirip kaybolma, tekrar belirme. *B01*
- [ ] **A-33** `[UI]` Seçim butonları (2–3 seçenek, klavye alanında). Seçilen metin giden balon olarak gönderilir. *B01*
- [ ] **A-34** `[UI]` Fotoğraf mesajı balonu; dokununca Galeri detayına gider. *B01*
- [ ] **A-35** `[SİSTEM]` Mesaj silme denemesi + glitch + balonun geri gelmesi. *B01*
- [ ] **A-36** `[SİSTEM]` Kişi adı değişimi animasyonu ("Bilinmeyen Numara" → "M.", "M." → "Emir"). *B04, B08, B16*
- [ ] **A-37** `[UI]` Gönderim durumları: "İletildi", "Görüldü", "Zamanlanmış — Tetikleyici bekleniyor", "İletilemedi". *B05, B16*
- [ ] **A-38** `[UI]` Sabitlenmiş (pinned) ve dokunulamayan mesaj. *B09 açılış*
- [ ] **A-39** `[UI]` Kişi profil ekranı: "son görülme yok", profil fotoğrafı yok. *B01*

### Galeri
- [ ] **A-40** `[UI]` Izgara görünüm, tarihe göre gruplama, tarihe atlama (14 Ağustos 2026'ya git). *B01, B03*
- [ ] **A-41** `[UI]` Fotoğraf detay: yakınlaştır/kaydır (pinch zoom + pan). *B01*
- [ ] **A-42** `[UI]` Bilgi paneli: Çekim tarihi, **Eklenme** tarihi, cihaz, konum, çekim modu (zamanlayıcı). *B01, B12*
- [ ] **A-43** `[SİSTEM]` **Hotspot sistemi**: her fotoğraf kartında normalize dikdörtgen bölgeler; dokununca Emir yorumu + ipucu ekleme + durum. Yakınlaştırma seviyesi şartı (ör. parmak ancak 3x'te görünür). *B01, B02*
- [ ] **A-44** `[UI]` Arama (kelimeyle fotoğraf arama: "Yankı"). *B10*
- [ ] **A-45** `[UI]` "Son silinenler" albümü; açılamayan dosya durumu. *B03*
- [ ] **A-46** `[SİSTEM]` **Ortak albüm** + başkası tarafından **silinme sayacı** (5 sn) + "Bu öğe artık mevcut değil". *B04*
- [ ] **A-47** `[SİSTEM]` **Ekran görüntüsü alma** (iki tuş hareketi ya da kenardan kaydırma; oyuna özel buton da olur) → kanıt olarak kaydedilir. *B04*
- [ ] **A-48** `[SİSTEM]` **Toplu geri yükleme** animasyonu: sayaç 214 → 3.861, kareler akarak dolar. *B09 (Final 2 köprüsü), B16*
- [ ] **A-49** `[UI]` Bölünmüş ekran karşılaştırma (iki görüntü yan yana, sokak ↔ pencere). *B11*

### Notlar
- [ ] **A-50** `[UI]` Not listesi + detay; oluşturma/eklenme tarihi. *B02*
- [ ] **A-51** `[UI]` **Kendime Not** ekranı: not metni yazılıyormuş gibi belirir, son cümle için 2 seçenek, seçilen eklenir, kaydedilir. *Her bölüm sonu*
- [ ] **A-52** `[UI]` Klavyenin çıkmadığı "kilitli not" durumu (imleç yanıp söner). *B15*
- [ ] **A-53** `[UI]` Emir'in anlık iç sesi: ekranın altında beliren kısa not taslağı balonu. *B09*

### Ses Kayıtları
- [ ] **A-54** `[UI]` Kayıt listesi, oynatıcı, dalga formu, ileri/geri sarma. *B03*
- [ ] **A-55** `[SİSTEM]` Bozuk kayıt: gürültülü bölümler + atlanınca netleşen parçalar. *B10*
- [ ] **A-56** `[SİSTEM]` Son saniyeyi tekrar dinleme sayacı (gizli ipucu için "3 kez dinlendi"). *B03*
- [ ] **A-57** `[UI]` **Canlı kayıt modu**: kayıt sürerken dalga formu + eşzamanlı yazıya dökülen metin (buluşma sahnesi). *B13*

### Video
- [ ] **A-58** `[UI]` Video oynatıcı: oynat/durdur, kare kare, yavaşlatma, duraklatıp yakınlaştırma. *B06*
- [ ] **A-59** `[SİSTEM]` Sessiz bölüm + otomatik altyazı (parça parça). *B06, B14*
- [ ] **A-60** `[SİSTEM]` "Video kaç kez izlendi" sayacı + ikinci izlemede yeni hotspot. *B06, B15*
- [ ] **A-61** `[UI]` Video içi hotspot (belirli zaman aralığında dokunulabilir bölge). *B06, B07, B14*

### Harita ve Kamera
- [ ] **A-62** `[UI]` Harita: stilize harita görseli, kayıtlı konum yıldızı, "6 ay önce kaydedildi", mavi nokta hareketi, sinyal azalması. *B02*
- [ ] **A-63** `[UI]` Kişi simgesi pini + yanıp sönme. *B16*
- [ ] **A-64** `[UI]` **Kamera görünümü**: telefon kamerasından bakılan sabit gece sahnesi (fotoğraf/kısa video döngüsü), hafif el titremesi, kamera **dönmez**. *B02*
- [ ] **A-65** `[UI]` **Güvenlik kamerası akışı**: siyah-beyaz, zaman damgalı, gren efektli canlı görüntü. *B16*

### Diğer uygulamalar ve ekranlar
- [ ] **A-66** `[UI]` İş sohbeti (Mesajlar'ın grup sohbeti varyantı; cevap verilemez modu). *B01, B02, B09*
- [ ] **A-67** `[UI]` Telefon: arama geçmişi (giden/gelen/cevapsız, süre), "Ayrıntı yok". Gelen arama ekranı (aç/reddet), arama sırasında ekran. *B10, B14, B16*
- [ ] **A-68** `[UI]` Kişiler + "Son silinen kişiler". *B10*
- [ ] **A-69** `[UI]` Dosyalar: klasör görünümü, "gizli klasörleri göster" ayarı, kilitli dosya (geri sayımla açılır). *B12*
- [ ] **A-70** `[UI]` Ayarlar: cihaz adı, depolama. *B05*
- [ ] **A-71** `[UI]` **Şifre ekranları**: (a) telefon kilidi 4 hane (2317), (b) kapı tuş takımı 4 hane (1108) + yanlış giriş sesleri + 3. yanlışta tetik. *B05, B11*
- [ ] **A-72** `[SİSTEM]` **İkinci telefon modu**: ayrı bir telefon arayüzü (farklı duvar kâğıdı, yalnızca 3 uygulama, sonra gizli dosyalar). Ana telefon ile ikinci telefon arasında geçiş butonu. *B05*
- [ ] **A-73** `[SİSTEM]` **Oda keşfi (ev içi etkileşim)**: sabit fotoğraf/illüstrasyon odalar, dokunulabilir objeler, obje yakın plan, sürükle-it (dolap), obje durumları. *B05 (ev), B07/B11 (daire 17)*
- [ ] **A-74** `[SİSTEM]` Güç tuşu / "Kapatmak için kaydırın" ve kapanmayı reddeden telefon. *B16*
- [ ] **A-75** `[UI]` Ekranın ortasında her uygulamanın üstünde duran geri sayım sayacı. *B15–B16*

### İpucu Panosu
- [ ] **A-80** `[UI]` Kart görünümü (başlık + küçük görsel + kısa açıklama), yeni kart animasyonu. *B01*
- [ ] **A-81** `[SİSTEM]` Kartları sürükleyip birleştirme → tanımlı eşleşmede Emir yorumu + yeni kart. *B02*
- [ ] **A-82** `[SİSTEM]` Kart çevirme (arka yüzde çözüm yazısı, ör. "Dosyayı almaya çalıştı"). *B13*
- [ ] **A-83** `[SİSTEM]` Otomatik bağlanma animasyonu (Bölüm 8 ve 16'da kartların kendiliğinden birbirine bağlanması). *B08, B16*
- [ ] **A-84** `[SİSTEM]` Kartların ters dönüp boşalması (Final 2 "Unut"). *B08*
- [ ] **A-85** `[SİSTEM]` Zaman çizelgesi görünümü (22:41 … 01:32, 23:17'de boş kare). *B08*

---

## FAZ 4 — META SİSTEMLER

- [ ] **A-90** `[SİSTEM]` **Güven Terazisi**: Ink `VAR guven`. Arayüzde görünmez. B16 sonunda Üçüncü Perde açılış mesajını seçer.
- [ ] **A-91** `[SİSTEM]` **Gizli ipucu sayacı**: Perde başına 8. Perde 1 tamamsa B08'de 3. seçenek; Perde 2 tamamsa B16'da "Yedi Dakika" sahnesi. Bölüm tekrar oynanınca bulunanlar korunur.
- [ ] **A-92** `[SİSTEM]` **Final kaydı ve köprü**: B08 finali (1/2/3) kaydedilir; B09 açılışı buna göre dallanır.
- [ ] **A-93** `[UI]` **Ana menü** ("Ayarlar" görünümlü gizli menü): Devam, Bölüm seç, Ses, Titreşim, Metin hızı, Hakkında. İlk bölüm bitene kadar görünmez.
- [ ] **A-94** `[SİSTEM]` **Ses yöneticisi**: ambiyans katmanları (şehir, oda, deniz kenarı), efektler, müzik, "sessizlik" komutu (müziği tamamen kes, sadece ambiyans). Kulaklık önerisi ekranı.
- [ ] **A-95** `[SİSTEM]` **Metin hızı / erişilebilirlik**: bekleme sürelerini çarpanla ölçekleme, "yazıyor" sürelerini kısaltma seçeneği, büyük yazı.
- [ ] **A-96** `[SİSTEM]` Yerelleştirme hazırlığı: bütün arayüz yazıları tablo dosyasında (Ink metni ayrı). İngilizce sonra eklenebilir.

---

## FAZ 5 — TEST VE YAYIN

- [ ] **A-100** `[TEST]` Her bölüm için "bitti" tanımı kontrolü (README).
- [ ] **A-101** `[TEST]` Kesinti testi: her adımda uygulamayı öldür → doğru yerden devam.
- [ ] **A-102** `[TEST]` Bütün dallar: her seçimin her kolu en az bir kez oynanır (bölüm dosyalarındaki "Dal tablosu").
- [ ] **A-103** `[TEST]` Gizli ipucu tam tur: 8/8 ile B08 gizli final, 8/8 ile B16 yedi dakika.
- [ ] **A-104** `[TEST]` Küçük ekran (5.5") ve büyük ekran/tablet düzeni; çentikli ekran güvenli alanları.
- [ ] **A-105** `[TEST]` Performans: galeri geri yükleme animasyonu düşük seviye cihazda takılmıyor.
- [ ] **A-106** `[SİSTEM]` Mağaza hazırlığı: ikon, ekran görüntüleri, fragman (B01 açılışı + B02 23:17 anı idealdir), gizlilik politikası.

---

## INK DEĞİŞKENLERİ (ortak.ink)

```ink
VAR guven = 0                 // + Deniz, - M.
VAR final_p1 = 0              // 1 Hatırla, 2 Unut, 3 Gizli
VAR gizli_p1 = 0              // 0-8
VAR gizli_p2 = 0              // 0-8
VAR eve_gitti_b1 = false
VAR deniz_23_sordu_b2 = false
VAR ss_alindi_b4 = false      // 22:59 ekran görüntüsü
VAR deniz_gel_b4 = false
VAR zarf_erken_b7 = false
VAR deniz_aradi_b14 = false
VAR b16_dinlenen = ""         // "deniz" / "m"
```
