---
name: sahne
description: Bir sahneyi (ör. B01.S3) uçtan uca oynanabilir hâle getirir — Ink, gereken sistemler, veri ve test.
argument-hint: "<B01.S3>"
disable-model-invocation: true
---

# /sahne — bir sahneyi bitir

Hedef sahne: **$ARGUMENTS** (biçim: `B01.S3`, `B01.SA`, `B08.GF`, `B09.AC` …).

1. `docs/bolum_XX.md` içinde sahneyi bul: knot adı, görevler, kabul kriteri, sahne metni.
2. Görev listesindeki `(→ A-xx)` bağımlılıklarını `TASKS.md`'de kontrol et. Eksik altyapı varsa listele ve kullanıcıya "önce bunları mı yapalım?" diye sor.
3. **Ink:** `ink-writer` ajanına sahneyi yazdır.
4. **Veri:** Sahnenin kullandığı varlıkları `src/data/` kayıt defterlerine ekle. Gerçek dosya yoksa yer tutucu kullan (docs/05 §7.3).
5. **Etiketler:** Ink'te kullanılan ama motorda "henüz uygulanmadı" olan etiketleri listele; sahne için zorunlu olanları uygula.
6. `story-guardian` ve `test-runner` ajanlarını çalıştır.
7. `docs/bolum_XX.md`'de sahnenin görev kutularını işaretle.
8. Kullanıcıya **kabul kriterini** hatırlat ve telefonda nasıl test edeceğini adım adım yaz (hata ayıklama panelinden knot'a atlama dahil, varsa).
