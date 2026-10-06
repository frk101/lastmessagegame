# BÖLÜM 8 — SON MESAJ

Bölüm amacı: Birinci Perde'nin gizemini kapatmak ve oyuncuya seçimli final sunmak.

Oyuncunun hissi: Karar. İlk kez kendi karakterinin geçmişi hakkında bir seçim yapmak.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-83`, `A-84`, `A-85`, `A-91`, `A-92`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] Yeni görsel yok; mevcut kanıtlar zaman çizelgesinde
- [ ] `KN yok (final)`

**Ink değişkenleri:** `ss_alindi_b4 (okunur)`, `gizli_p1 (okunur)`, `final_p1`

- [ ] **B08.0.1** `[INK]` `Assets/Story/bolum08.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b08_s1` → `b08_s2` → `b08_sa` → `b08_sb` → `b08_gf`
- [ ] **B08.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B08.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b08_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — GERÇEK

**Knot:** `b08_s1`

**Görevler**

- [ ] **B08.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B08.S1.2** `[SİSTEM]` Pano otomatik bağlanma animasyonu (→ A-83); Emir'in 5 satırı kartlar birleştikçe gelir.
- [ ] **B08.S1.3** `[INK]` (ss_alindi_b4) ek satır.
- [ ] **B08.S1.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu Birinci Perde'yi kendi topladığı kanıtlarla özetlenmiş görüyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir dairede, masanın başında oturur. Oyuncu ipucu panosunu açar. Kartlar bir araya gelir ve Emir, oyuncunun topladıklarını yüksek sesle, kendi kendine düşünür gibi birleştirir.

> **Emir:** O gece buradaydım. Deniz benimleydi. Biri daha vardı.

> **Emir:** Bir belge gördüm. Kapağında benim adım vardı.

> **Emir:** Sonra her şeyi unutmaya karar verdim. Ve unutmak için bir plan yaptım.

> **Emir:** M. bu plana yardım etti. Deniz beni durdurmaya çalıştı.

> **Emir:** Ve ben, en yakın arkadaşıma, ona güvenmemem gerektiğini söyledim.

Oyuncu Bölüm 4'te 22:59 fotoğrafının ekran görüntüsünü aldıysa Emir bir satır ekler: "Ve o, bu gece hâlâ o fotoğrafı benden saklamaya çalışıyordu. Bunca zaman sonra."


</details>


### SAHNE 2 — 23:17

**Knot:** `b08_s2`

**Görevler**

- [ ] **B08.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B08.S2.2** `[INK]` `# saat:23:17` M. + Emir karşılıklı 4 satır.
- [ ] **B08.S2.3** `[INK]` Seçim: `Gerçeği hatırla` / `Her şeyi unut` / (gizli_p1 == 8) `Kendi kaydını dinle` (soluk renk).
- [ ] **B08.S2.4** `[TEST]` Sayaç yok; oyuncu dilediği kadar bekleyebiliyor.
- [ ] **B08.S2.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Üçüncü seçenek yalnızca 8/8 ile görünüyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Telefon saati tekrar 23:17'yi gösterir. Pencerenin perdesi açıktır; aşağıda sokak lambası yanar.

M. son mesajı gönderir.

> **M.:** Şimdi hatırlıyorsun.

> **Emir:** Hayır. Sadece ne yaptığımı biliyorum. Neden yaptığımı bilmiyorum.

> **M.:** Bu ikisi aynı şey değil. Biliyorum.

> **M.:** Karar senin.

Ekranda iki ana seçim çıkar. Oyuncu ne kadar beklerse beklesin sayaç yoktur; seçim tamamen oyuncuya bırakılır.

**▸ SEÇİM** — A) Gerçeği hatırla · B) Her şeyi unut


</details>


### SEÇİM A — GERÇEĞİ HATIRLA

**Knot:** `b08_sa`

**Görevler**

- [ ] **B08.SA.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B08.SA.2** `[UI]` Zaman çizelgesi görünümü (→ A-85): 22:41, 22:48, 22:59, [boş 23:17], 01:32.
- [ ] **B08.SA.3** `[INK]` `# final:1` → `# bolum_sonu:8` (FINAL 1 — HATIRLA).
- [ ] **B08.SA.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Boş kare 23:17'de duruyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Emir tüm kayıtları açar. Fotoğraflar, videolar ve ses kayıtları ekranda yan yana dizilir ve tek bir zaman çizelgesine dönüşür: 22:41, 22:48, 22:59, 23:17, 01:32. Ortada, 23:17'nin olduğu yerde, hâlâ boş bir kare vardır.

> **Emir:** Bunca zamandır kendimden sakladığım şey buydu.

> **Emir:** Ama hepsi değil.

Son mesaj:

> **M.:** Şimdi ne yapacağını biliyorsun.

Ekran kararır.

**`FINAL 1 — HATIRLA`**


</details>


### SEÇİM B — HER ŞEYİ UNUT

**Knot:** `b08_sb`

**Görevler**

- [ ] **B08.SB.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B08.SB.2** `[UI]` Onay diyalogu → fotoğraflar griye dönerek silinir, kartlar ters dönüp boşalır (→ A-84).
- [ ] **B08.SB.3** `[INK]` Duvar kâğıdı değişmez. `# titresim` iki mesaj. `# final:2`.
- [ ] **B08.SB.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Silme animasyonu yavaş ve acı verici hissettiriyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu tüm kayıtları silmeyi seçer. Ekranda:

> **Sistem:** Tüm veriler silinecek. Emin misin?

Oyuncu onaylar. Fotoğraflar silinir, birer birer, kareler griye dönerek. Mesajlar silinir. Ses kayıtları silinir. İpucu panosundaki kartlar birer birer ters döner ve boşalır.

Telefon ana ekranına döner. Duvar kâğıdı hâlâ sisli sahil fotoğrafıdır.

Sessizlik.

Telefon tekrar titreşir.

> **Bilinmeyen Numara:** Bunu gerçekten unutabileceğini mi sandın?

> **Bilinmeyen Numara:** Sildiğin hiçbir şey gitmez.

**`FINAL 2 — UNUT`**


</details>


### GİZLİ FİNAL — SON MESAJ

**Knot:** `b08_gf`

**Görevler**

- [ ] **B08.GF.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B08.GF.2** `[SİSTEM]` `# ad_degistir:m:Emir` yavaş animasyon, tarih 14.08.2026 23:17.
- [ ] **B08.GF.3** `[INK]` İki mesaj arası `# bekle:4`. `# final:3` `# karart`.
- [ ] **B08.GF.4** `[TEST]` Gizli final, 8 gizli ipucu tekrar oynanan bölümlerde tamamlanınca da açılabiliyor.
- [ ] **B08.GF.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Oyuncu Birinci Perde'deki sekiz gizli ipucunun tamamını topladıysa, iki seçimin yanında üçüncü, soluk bir seçenek belirir: "Kendi kaydını dinle." Bu, M.'nin Bölüm 5'teki zamanlanmış mesajına bir göndermedir.

Oyuncu bu seçeneği seçtiğinde, M.'nin son mesajı açılır. Sonra gönderen adı yavaşça değişir.

Gönderen:

**`Emir`**

Tarih:

**`14 Ağustos 2026 — 23:17`**

> **Emir:** Eğer bunu okuyorsan, plan işe yaradı.

Oyuncu birkaç saniye bekler.

> **Emir:** Bana güvenme.

Ekran tamamen kararır.

**`FINAL 3 — SON MESAJ`**

> _Not: Yazar notu: Üç finalin hiçbiri İkinci Perde'ye geçişi engellemez. İkinci Perde'nin ilk sahnesi her final için farklı bir açılış ekranıyla başlar (bkz. Bölüm 9, Açılış). Böylece oyuncunun seçimi saygı görür ama hikâye aynı ana gizeme bağlanır._


</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Hatırla / Unut / Gizli | Üç final | final_p1 → B09 açılışı |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
