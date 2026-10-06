# LAST MESSAGE — Geliştirme Görev Dokümanları

Bu klasör, oyunun baştan sona nasıl yapılacağını adım adım anlatan görev listeleridir. Hikâyenin kaynağı `Last_Message_Senaryo_Bolum_1_16_Genisletilmis.docx` dokümanıdır; bu dosyalar o hikâyeyi **yapılacak işlere** böler. Her bölüm dosyasında sahnenin metni de bulunur, yani bir sahneyi yaparken başka bir yere bakman gerekmez.

## Dosyalar

| Dosya | İçerik |
|---|---|
| `00_README.md` | Bu dosya. Kurallar, sıra, isimlendirme. |
| `01_ALTYAPI.md` | Bütün bölümlerin kullandığı sistemler: telefon kabuğu, uygulamalar, Ink köprüsü, kayıt. |
| `02_ETIKET_SOZLUGU.md` | Ink metnine yazılan `#etiket`lerin tam listesi. Hikâye ile kod arasındaki sözleşme. |
| `03_VARLIK_LISTESI.md` | Bütün fotoğraflar, sesler, videolar, notlar ve ipuçları; ID'leri ve hangi bölümde kullanıldıkları. |
| `04_YOL_HARITASI.md` | Kilometre taşları ve hangi sırayla çalışılacağı. |
| `bolum_01.md` … `bolum_16.md` | Her bölümün sahne sahne görevleri, metni ve kabul kriterleri. |

## Çalışma sırası (özet)

1. `01_ALTYAPI.md` içindeki **Faz 0 ve Faz 1** bitmeden bölüm içeriğine başlama.
2. **Dikey kesit:** Bölüm 1 ve 2'yi bütün varlıklarıyla bitir, test ettir.
3. Bölüm 3–8'i sırayla yap. Her bölüm, ihtiyaç duyduğu yeni altyapı görevlerini başında listeler.
4. Birinci Perde'yi yayınla. Sonra Bölüm 9–16.

## Görev biçimi

Her görev bir onay kutusudur. Başındaki etiket işin türünü söyler:

- `[INK]` Hikâye metni, Ink dosyasına yazılacak.
- `[SİSTEM]` Unity tarafında kod.
- `[UI]` Arayüz, prefab, animasyon.
- `[VERİ]` ScriptableObject / veri kartı doldurma (fotoğraf kartı, hotspot, ipucu).
- `[VARLIK]` Çekilecek fotoğraf, kaydedilecek ses, çekilecek video, çizilecek görsel.
- `[SES]` Ses tasarımı, efekt, müzik, zamanlama.
- `[TEST]` Oynayarak kontrol edilecek şey.

Görev ID'leri `B03.S2.4` biçimindedir: Bölüm 3, Sahne 2, 4. görev. Altyapı görevleri `A-12` biçimindedir. Bir bölüm görevi bir altyapı görevine bağlıysa yanında `(→ A-12)` yazar.

## İsimlendirme kuralları

- Ink dosyaları: `Assets/Story/bolum01.ink`, knot'lar: `b01_s1`, `b01_s2_kimsin`.
- Fotoğraf: `FOTO_B01_SOKAK_2317` → dosya `Assets/Data/Photos/FOTO_B01_SOKAK_2317.asset`
- Ses: `SES_…`, Video: `VID_…`, Not: `NOT_…`, İpucu: `IPUCU_…`, Gizli ipucu: `GZ_A1…GZ_A8` (Birinci Perde), `GZ_B1…GZ_B8` (İkinci Perde).
- Kişiler (mesaj göndericileri): `bilinmeyen`, `m`, `deniz`, `is`, `emir_gecmis`, `sistem`.
- Değişkenler (Ink `VAR`): `guven` (−5…+5, + Deniz / − M.), `eve_gitti_b1`, `ss_alindi_b4` vb. Tam liste `01_ALTYAPI.md` sonunda.

## "Bitti" tanımı

Bir sahne ancak şu dört şey sağlandığında bitmiş sayılır:
1. Ink metni yazıldı ve etiketleri doğru.
2. Kullandığı bütün varlıklar gerçek (yer tutucu değil).
3. Kabul kriterindeki davranış telefonda test edildi.
4. Oyun sahnenin ortasında kapatılıp açıldığında doğru yerden devam ediyor.
