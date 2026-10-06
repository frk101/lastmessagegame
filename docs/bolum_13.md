# BÖLÜM 13 — DENİZ'İN GERÇEĞİ

Bölüm amacı: Deniz'in neden yalan söylediğini açıklamak ve yalanın bir sevgi biçimi olabileceğini göstermek.

Oyuncunun hissi: Kırgınlık, sonra şefkat. Deniz'e kızmak istemek ama kızamamak.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-57`, `A-82`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `SES_B13_BULUSMA (canlı kayıt olarak oynar)`
- [ ] Ambiyans: deniz_kenari (martı, bardak, çocuk, vapur)
- [ ] SFX: bardak_masa, anahtarlik_metal, sandalye
- [ ] `FOTO_B03_0132_KANEPE (tekrar)`
- [ ] `KN_B13`

**Ink değişkenleri:** `guven`, `gizli_p2 (+GZ_B5, okunur GZ_B4)`

- [ ] **B13.0.1** `[INK]` `Assets/Story/bolum13.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b13_s1` → `b13_s2` → `b13_s3` → `b13_s4` → `b13_s5` → `b13_son`
- [ ] **B13.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B13.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b13_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — BULUŞMA

**Knot:** `b13_s1`

**Görevler**

- [ ] **B13.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B13.S1.2** `[UI]` Canlı kayıt modu (→ A-57): dalga formu + eşzamanlı metin; oyuncu yalnızca seçim anlarında dokunur.
- [ ] **B13.S1.3** `[INK]` Seçim `Kaydediyor musun? → Evet / Hayır` (Hayır kolu: `# guven:-1`, Deniz'in "Kayıt ışığı yanıyor" satırı).
- [ ] **B13.S1.4** `[INK]` "İkinci kez sordun." satırından önce `# bekle:2`, sonra `# ipucu_cevir:IPUCU_IKI_KEZ`.
- [ ] **B13.S1.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Oyuncu B07'deki notun anlamını bu satırla birlikte kavrıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Ertesi gün. Akşamüstü. Emir, Deniz'i yüz yüze görüşmeye çağırır. Buluşma yeri, üniversite yıllarında sık gittikleri deniz kenarındaki çay bahçesidir. Deniz yeri kendisi seçer.

Oyun telefon arayüzünden çıkmaz. Emir cebindeki telefonun ses kaydını açar ve buluşma, Ses Kayıtları uygulamasında canlı bir dalga formu ve eşzamanlı yazıya dökülen metin olarak oynanır. Oyuncu Deniz'i görmez; yalnızca sesini duyar ve sözlerini okur. Arka planda martılar, bardak sesleri, uzakta bir vapur düdüğü.

> _Not: Yazar notu: Bu çözüm, oyunun "telefon dünyanın kendisidir" kuralını bozmadan yüz yüze bir sahne kurar. Ayrıca Emir'in artık her şeyi kayda aldığını, yani Plan B'nin ona kendini kaydetmeyi yeniden öğrettiğini gösterir._

> **Deniz:** Kaydediyor musun?

**▸ SEÇİM** — A) Evet. · B) Hayır.

> **Emir:** Evet.

> **Deniz:** İyi. Bu sefer unutma diye.

> _Not: Alternatif seçim: "Hayır." seçilirse Deniz kısa bir sessizlikten sonra güler: "Kaydediyorsun. Kayıt ışığı yanıyor. Ama sorun değil. Yalan söylemenin nasıl bir şey olduğunu bil istedim." Güven Terazisi Deniz'den bir adım uzaklaşır._

> **Emir:** 14 Ağustos gecesi ne oldu?

> **Deniz:** Bunu bilmek istemezsin.

> **Emir:** Bunu söylemek için çok geç kaldın.

> **Deniz:** Hayır. Tam zamanında.

> **Emir:** Ne demek bu?

> **Deniz:** İkinci kez sordun.


</details>


### SAHNE 2 — SÖZ

**Knot:** `b13_s2`

**Görevler**

- [ ] **B13.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B13.S2.2** `[INK]` Söz itirafı. `# sfx:bardak_masa`.
- [ ] **B13.S2.3** `[INK]` (GZ_B4 bulunduysa) Emir: "Listede yazıyordu…"
- [ ] **B13.S2.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

Deniz uzun bir nefes alır. Çay bardağını masaya bırakır; ses kayıtta net duyulur.

> **Deniz:** O gece, her şey bittikten sonra, bana söz verdirdin.

> **Deniz:** "Bir gün gelip bana bu geceyi sorarsam, ilk seferinde yalan söyle" dedin.

> **Deniz:** "İkinci kez sorarsam, karar senin."

> **Emir:** O mesaj. "Evet, yalnızdın." Söz yüzünden miydi?

> **Deniz:** Hayatımda yazdığım en zor iki kelimeydi.

Oyuncu, Bölüm 12'deki gizli ipucunu bulduysa ("Deniz'e söz verdir"), Emir burada bir satır daha söyler: "Listede yazıyordu. Okumadan geçmiştim. Kendimden bile saklamışım."


</details>


### SAHNE 3 — DENİZ'İN ANLATTIĞI

**Knot:** `b13_s3`

**Görevler**

- [ ] **B13.S3.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B13.S3.2** `[INK]` YANKI açıklaması (Deniz'in en uzun konuşması; satırlar 2 sn aralıklarla).
- [ ] **B13.S3.3** `[SİSTEM]` "Kolumdaki iz oradan kaldı." → `# ipucu_cevir:IPUCU_CIZIK` (arka yüz: "Dosyayı almaya çalıştı.") (→ A-82).
- [ ] **B13.S3.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **Deniz:** Sen o gece bir şey buldun.

> **Emir:** Ne?

> **Deniz:** Bir dosya.

> **Emir:** Neyle ilgili?

> **Deniz:** Seninle.

> **Deniz:** YANKI'yı hatırlıyor musun? Hatırlamıyorsun tabii. Üniversitede Mert'le yazdığınız şey. Telefondan silinen her şeyi gizlice başka bir yere kopyalayan program. "Hiçbir şey kaybolmasın" diyordunuz. Çok gurur duyuyordun.

> **Emir:** Ve ne oldu?

> **Deniz:** Kapattınız. Daha doğrusu kapattığınızı söylediniz. Birkaç yıl sonra Mert bırakıp gitti. Sen de bir daha adını anmadın.

> **Deniz:** O gece öğrendim ki YANKI hiç kapanmamış. Yıllardır çalışıyormuş. Ve senin telefonundan silinen bazı şeyler hâlâ orada duruyormuş.

> **Emir:** Dosyada ne vardı Deniz?

> **Deniz:** Görmedim.

Kısa bir sessizlik.

> **Deniz:** Gerçekten görmedim. Görmeye çalıştım. Kolumdaki iz oradan kaldı.

Oyuncu Bölüm 9'daki çiziği hatırlar. İpucu panosunda "Deniz'in çiziği" kartı ters döner: "Dosyayı almaya çalıştı."


</details>


### SAHNE 4 — NEDEN YALAN SÖYLEDİ?

**Knot:** `b13_s4`

**Görevler**

- [ ] **B13.S4.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B13.S4.2** `[SES]` "Kendini susturmayı." sonrası 6–8 sn yalnızca ambiyans.
- [ ] **B13.S4.3** `[INK]` 01:32 itirafı → `# yonlendir:galeri:FOTO_B03_0132_KANEPE` (kayıt arka planda sürer).
- [ ] **B13.S4.4** `[INK]` Seçim `Hakkın yoktu` / `Beni korumaya çalışmışsın` (`# guven:+1`).
- [ ] **B13.S4.5** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Sessizlik oyuncuya uzun geliyor ama sıkmıyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **Deniz:** Sana gerçeği söylersem tekrar aynı şeyi yapacağını düşündüm.

> **Emir:** Neyi?

> **Deniz:** Kendini susturmayı.

Emir cevap veremez. Kayıtta yalnızca martıların sesi ve uzakta bir çocuk kahkahası duyulur. Bu sessizlik oyuncuya uzun gelmelidir.

> **Deniz:** O gece seni eve ben bıraktım. Kanepede uyuyakaldın. Nefes aldığından emin olmak için yanında oturdum.

> **Deniz:** Saat 01:32'de fotoğrafını çektim. Senin telefonunla. Sabah uyandığında bir şeyin normal olduğunu görmen için.

> **Emir:** Boşluktan sonraki ilk fotoğraf...

> **Deniz:** Bendim.

Oyuncu galeriye bakar. 01:32 fotoğrafı ilk kez açıklanır: Emir kanepede uyuyor, üzerine bir battaniye örtülmüş. Fotoğrafın kenarında, çok küçük, çekenin parmağı görünür.

**▸ SEÇİM** — A) Bana yalan söylemeye hakkın yoktu. · B) Beni korumaya çalışmışsın.

> **Emir:** Bana yalan söylemeye hakkın yoktu.

> **Deniz:** Biliyorum. Ama bana o hakkı sen verdin. Ve ben almak istemedim.

> _Not: Alternatif seçim: "Beni korumaya çalışmışsın." seçilirse Deniz'in sesi titrer: "Seni korumaya değil. Seni geri getirmeye çalıştım. İkisi aynı şey değil." Güven Terazisi Deniz'e doğru bir adım kayar._


</details>


### SAHNE 5 — DENİZ'İN SON SÖZÜ

**Knot:** `b13_s5`

**Görevler**

- [ ] **B13.S5.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B13.S5.2** `[SES]` "O ben değildim" öncesi anahtarlık sesi → yavaşlatınca 17 plakası → `GZ_B5`.
- [ ] **B13.S5.3** `[INK]` 23:17 araması itirafı, `# sarj:9` uyarısı, sandalye sesi, kayıt biter.
- [ ] **B13.S5.4** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **Deniz:** Dün gece seni 17 numarada nasıl bulduğumu merak ediyorsun.

> **Emir:** Evet.

> **Deniz:** O binanın önünden altı aydır her gece geçiyorum. Bir gün ışığın yanmasını bekliyordum. Dün yandı.

> **Emir:** Dün gece benden önce biri oradaydı. Kahve fincanı hâlâ ıslaktı.

Deniz bir süre konuşmaz.

> **Deniz:** O ben değildim.

> **Deniz:** M. sana yardım etti.

> **Deniz:** Ama sana her şeyi anlatmadı.

> **Emir:** Ne saklıyor?

> **Deniz:** 23:17'de kiminle konuştuğunu.

> **Emir:** Ben... biriyle mi konuştum?

> **Deniz:** Telefonun çaldı. Açtın. Kimseyle konuşmadan önce yüzünde öyle bir ifade görmemiştim. Mert kaydı hemen kapattı.

Kayıt uygulaması bu noktada şarj uyarısı verir. Deniz ayağa kalkar; sandalyenin sesi duyulur.

> **Deniz:** Kayıt cihazına bak. Ham kayda. Ama tek başına izleme.

Kayıt biter. Bölüm biter.


</details>


### BÖLÜM SONU

**Knot:** `b13_son`

**Görevler**

- [ ] **B13.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B13.SON.2** `[INK]` `# kendime_not:KN_B13` (Affediyorum +1 / Henüz affedemiyorum 0), `# bolum_sonu:13`.
- [ ] **B13.SON.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Söz", "YANKI'nın gerçek işlevi", "01:32 fotoğrafı", "23:17'deki arama".
- Gizli ipucu: Buluşmanın ses kaydında, Deniz'in "O ben değildim" demesinden hemen önce masaya bir anahtarlık bırakıldığı duyulur. Oyuncu o anı yavaşlatıp dinlerse, anahtarlığın metal bir 17 plakası olduğu anlaşılır. Deniz'in de bir anahtarı vardır.
- Kendime Not: "Deniz yalan söyledi çünkü ben istedim." Son cümle seçimi: "Onu affediyorum." veya "Henüz affedemiyorum."
**`BÖLÜM 13 TAMAMLANDI — DENİZ'İN GERÇEĞİ`**



</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Evet / Hayır (kayıt) | Sahne 1 | guven |
| Hakkın yoktu / Korumaya çalıştın | Sahne 4 | guven |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
