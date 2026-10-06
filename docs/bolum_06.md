# BÖLÜM 6 — VİDEO

Bölüm amacı: Oyuncuya Emir'in kendi hafızasını bilinçli şekilde manipüle etmiş olabileceğini düşündürmek.

Oyuncunun hissi: Paranoya. Artık kendi sesinin bile bir talimat olabileceğini hissetmek.


---

## HAZIRLIK

**Gerekli altyapı** (önce bunlar bitmiş olmalı, bkz. `01_ALTYAPI.md`): `A-58`, `A-59`, `A-60`, `A-61`

**Varlıklar** (bkz. `03_VARLIK_LISTESI.md`):

- [ ] `VID_2317_FINAL`
- [ ] `KN_B06`

**Ink değişkenleri:** `guven`, `gizli_p1 (+GZ_A7)`

- [ ] **B06.0.1** `[INK]` `Assets/Story/bolum06.ink` dosyasını oluştur, `INCLUDE ortak.ink`, knot iskeletini kur: `b06_s1` → `b06_s2` → `b06_son`
- [ ] **B06.0.2** `[VERİ]` Bu bölümde eklenen ipucu kartlarını (`IPUCU_…`) ve gizli ipuçlarını veri olarak oluştur.
- [ ] **B06.0.3** `[TEST]` Hata ayıklama panelinden doğrudan `b06_s1` knot'una atlanabiliyor (→ A-17).

---

## SAHNELER

### SAHNE 1 — VİDEO

**Knot:** `b06_s1`

**Görevler**

- [ ] **B06.S1.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B06.S1.2** `[UI]` İkinci telefon → Video → `2317_FINAL`. B03'teki silinmiş dosyanın "orijinali" olduğunu gösteren küçük eşleşme animasyonu (panoda `IPUCU_IKINCI_TEL` ters döner).
- [ ] **B06.S1.3** `[VARLIK]` Video: dudak ısırma hareketi (Emir oyuncusunun tik'i, ileride de kullanılabilir).
- [ ] **B06.S1.4** `[SİSTEM]` Sessiz son saniyeler + yavaşlatınca parça parça altyazı → `GZ_A7`.
- [ ] **B06.S1.5** `[INK]` `# adim_bekle:video_bitti(VID_2317_FINAL,1)` → Emir "Deniz mi?…"
- [ ] **B06.S1.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Video bitmiş gibi görünüyor ama oynatma çubuğu birkaç saniye daha ilerliyor.

<details><summary><b>Sahne metni (senaryodan)</b></summary>

İkinci telefonun Video uygulamasında tek bir dosya vardır. Adı: 2317_FINAL. Oyuncu Bölüm 3'teki silinmiş dosyanın orijinalini bulmuştur.

Video açılır. Kamera karşısında Emir vardır. Görüntü kötü ışıklı bir odada çekilmiştir; arkada boş bir duvar ve bir masa lambası.

> **Emir — Videodaki:** Bunu izliyorsan muhtemelen hiçbir şey hatırlamıyorsun.

> **Emir — Videodaki:** Bunu özellikle yaptım.

Kamera yaklaşır.

> **Emir — Videodaki:** Sana bir şey söylemem gerekiyor.

Sessizlik. Videodaki Emir dudağını ısırır; bugünkü Emir'in sinirlenince yaptığı aynı hareket.

> **Emir — Videodaki:** Deniz'e güvenme.

Video biter. Ya da öyle görünür.

> **Emir:** Deniz mi? Deniz ne yaptı?

> _Not: Yazar notu: Videonun asıl hâli burada bitmez. "Deniz'e güvenme" cümlesinden sonra görüntü birkaç saniye daha sürer ama ses yoktur. Bu kısım gizli ipucu 7'dir. Devamı olan cümle, "...çünkü ikinci kez sorarsan sana gerçeği söyler," İkinci Perde'deki "söz" itirafıyla birleşince anlam kazanır: Geçmişteki Emir, Deniz'in kötü olduğunu değil, planı bozabileceğini söylemektedir._


</details>


### SAHNE 2 — M.'NİN MESAJI

**Knot:** `b06_s2`

**Görevler**

- [ ] **B06.S2.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B06.S2.2** `[INK]` M. üç mesaj + aynı anda Deniz bildirimi (üst üste iki bildirim, → A-23).
- [ ] **B06.S2.3** `[INK]` Seçim `Tamam` / `Cevap verme`. Tamam kolu: sabah iptal mesajı "özür dilerim yapamayacağım daha değil".
- [ ] **B06.S2.4** `[UI]` "Videoyu tekrar izle" butonu → `# adim_bekle:video_bitti(VID_2317_FINAL,2)`.
- [ ] **B06.S2.5** `[SİSTEM]` 2. izlemede anahtar anında video içi hotspot (→ A-61) → `IPUCU_ANAHTAR17`.
- [ ] **B06.S2.6** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** Anahtar ikinci izlemede yakalanabiliyor; kaçırılırsa 3. izlemede anahtar anı kısa yavaşlatılıyor (yardım).

<details><summary><b>Sahne metni (senaryodan)</b></summary>

> **M.:** Videoyu izledin.

> **M.:** Şimdi sana yalan söyleyecekler.

> **M.:** Ama bu sefer karar senin.

Aynı anda Deniz'den mesaj gelir. Oyuncu, iki bildirimi üst üste görür.

> **Deniz:** Emir yarın sabah kahve içelim mi. Sana anlatmam gereken bir şey var.

**▸ SEÇİM** — A) Deniz'e "Tamam" yaz. · B) Deniz'e cevap verme.

> _Not: "Tamam" yazılırsa Deniz sabah buluşmayı son dakikada iptal eder: "özür dilerim yapamayacağım daha değil". Cevap verilmezse Deniz bir daha yazmaz. İki yolda da oyuncu, Deniz'in bir şeyi söylemeye çok yaklaşıp vazgeçtiğini hisseder. Bu, Bölüm 13'teki "ikinci kez sordun" anına duygusal bir hazırlıktır._

Bir seçenek belirir: "Videoyu tekrar izle."

Tekrar izlendiğinde yeni bir ayrıntı fark edilir: Emir videonun sonunda masanın üzerine bir anahtar bırakmaktadır. Anahtar kısa bir an kadraja girer.

Anahtar üzerinde küçük bir işaret: 17.


</details>


### BÖLÜM SONU

**Knot:** `b06_son`

**Görevler**

- [ ] **B06.SON.1** `[INK]` Knot'u aşağıdaki sahne metnine göre yaz; bütün mesaj ve beklemeleri `02_ETIKET_SOZLUGU.md` etiketleriyle işaretle.
- [ ] **B06.SON.2** `[INK]` `# kendime_not:KN_B06`, `# bolum_sonu:6`.
- [ ] **B06.SON.3** `[TEST]` Sahnenin ortasında uygulamayı kapat-aç → doğru yerden devam ediyor.

**Kabul kriteri:** —

<details><summary><b>Sahne metni (senaryodan)</b></summary>

- Yeni ipuçları: "Deniz'e güvenme", "Anahtar — 17".
- Gizli ipucu 7: Videonun sessiz son saniyeleri. Oyuncu videoyu yavaşlatırsa otomatik altyazı parça parça belirir: "...çünkü ... ikinci ... gerçeği ..." Tam cümle okunamaz.
- Kendime Not: "Geçmişteki ben, en yakın arkadaşıma güvenmememi söylüyor." Son cümle seçimi: "Kendime inanıyorum." veya "Kendime inanmak zorunda mıyım?"
**`BÖLÜM 6 TAMAMLANDI — VİDEO`**


</details>


---

## DAL TABLOSU

| Seçim | Nerede birleşir | Etkisi |
|---|---|---|
| Tamam / Cevap verme | Sahne 2'de birleşir | Tonal |

## BÖLÜM KAPANIŞ KONTROLÜ

- [ ] Bütün knot'lar yazıldı, Ink derleniyor, uyarı yok.
- [ ] Dal tablosundaki her kol en az bir kez oynandı.
- [ ] Bütün varlıklar gerçek (yer tutucu kalmadı).
- [ ] Bu bölümün gizli ipucu bulunarak ve bulunmadan iki kez oynandı.
- [ ] Kendime Not ekranı ve bölüm sonu ekranı doğru.
- [ ] Bölüm sonunda kayıt alınıyor; bölüm seçiminden tekrar oynanabiliyor.
- [ ] Birine oynatıldı; bölümün "Oyuncunun hissi" hedefi tuttu mu? Notu buraya yaz: ______
