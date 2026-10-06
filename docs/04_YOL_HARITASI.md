# 04 — YOL HARİTASI

Her kilometre taşının sonunda **oynanabilir** bir şey olmalı. Bir taşı bitirmeden bir sonrakine geçme; özellikle M2 (dikey kesit) atlanmamalı, çünkü oyunun geri kalanı onun üzerine kurulur.

## M0 — Kurulum
**Görevler:** A-01 … A-06
**Çıktı:** Telefonda açılan boş proje, Türkçe metin, Ink'ten okunan bir satır.

## M1 — Çekirdek ve telefon kabuğu
**Görevler:** A-10 … A-17, A-20 … A-26, A-29
**Çıktı:** Sahte kilit ekranı → bildirim → boş bir konuşma. `test.ink` ile mesaj, seçim, bekleme, kayıt/devam çalışıyor. Hata ayıklama paneli var.

## M2 — Dikey kesit: Bölüm 1–2
**Görevler:** A-27, A-30 … A-35, A-39 … A-43, A-50, A-51, A-62, A-64, A-66, A-80, A-81 + `bolum_01.md`, `bolum_02.md` tamamı.
**Varlıklar:** B01–B02'nin bütün fotoğrafları gerçek; ambiyans ve `tik_merdiven` sesi hazır.
**Çıktı:** İlk iki bölüm baştan sona, gerçek görsel ve seslerle oynanıyor.
**Test:** En az 5 kişiye oynat. Sor: (1) 23:17 anında gerildin mi? (2) Fotoğrafta ayrıntıları bulmak zor muydu? (3) Bölüm 3'ü oynamak ister misin? Üçüncü sorunun cevabı "evet" değilse devam etmeden önce düzelt.

## M3 — Birinci Perde içeriği: Bölüm 3–8
Sırayla, her bölümün "Gerekli altyapı" listesini o bölüme başlarken tamamla:
- B03: A-45, A-54, A-56
- B04: A-36, A-46, A-47, A-90
- B05: A-37, A-70, A-71, A-72, A-73
- B06: A-58 … A-61
- B07: (oda keşfinin daire 17 hâli)
- B08: A-83, A-84, A-85, A-91, A-92

**Çıktı:** Birinci Perde, üç finaliyle tam.

## M4 — Cila ve yayın: Birinci Perde
**Görevler:** A-93 … A-96, A-100 … A-106
**İçerik:** Bütün seslendirmeler, müzik, son görseller. Gizli ipucu tam turu.
**Çıktı:** Mağazada Birinci Perde (Bölüm 1–8). İkinci Perde "yakında" olarak duyurulur.

## M5 — İkinci Perde: Bölüm 9–16
- B09: A-28, A-38, A-48, A-53
- B10: A-44, A-55, A-67, A-68
- B11: A-49, A-71 (kapı tuş takımı)
- B12: A-69
- B13: A-57, A-82
- B14: (41 sn sessizlik, arama şeridi)
- B15: A-52, A-75
- B16: A-63, A-65, A-74

**Çıktı:** İkinci Perde güncelleme olarak yayında.

## M6 — Üçüncü Perde hazırlığı
Güven Terazisi verisinden 3 açılış mesajı, B11 hastane fotoğrafı, B14'teki kelime, "yedi dakika" tohumu.

---

## Haftalık çalışma önerisi

Tek kişi, akşamları ve hafta sonları çalışıyorsan kabaca şöyle bir tempo gerçekçi olur (kendi hızına göre esnet):

| Aşama | Tahmini süre |
|---|---|
| M0 | 2–3 gün |
| M1 | 2–3 hafta |
| M2 | 3–4 hafta (fotoğraf çekimi dahil) |
| M3 | Bölüm başına 1–2 hafta |
| M4 | 3–4 hafta |
| M5 | Bölüm başına 1–2 hafta |

## Her çalışma gününün başında

1. Bu dosyadan hangi kilometre taşında olduğuna bak.
2. İlgili `bolum_XX.md` dosyasında ilk işaretsiz görevi bul.
3. O görevin `(→ A-xx)` bağlantısı varsa ve altyapı görevi bitmemişse, önce onu yap.
4. Gün sonunda bitirdiğin kutuları işaretle, commit at.
