---
name: telefon-testi
description: Son değişiklik için kullanıcının Expo Go ile telefonunda uygulayacağı kısa test adımlarını yazar.
disable-model-invocation: true
---

# /telefon-testi

Son değişikliklere (`git diff HEAD~1` ya da çalışma alanı) bak ve kullanıcı için en fazla 6 adımlık bir telefon testi yaz:

1. Başlatma: `npm start` → Expo Go ile QR kodu okut (zaten açıksa telefonu salla → Reload).
2. Nereye gidilecek (hata ayıklama paneli varsa hangi knot'a atlanacak).
3. Ne yapılacak (dokun, kaydır, bekle).
4. **Ne görülmeli** — kabul kriterinden.
5. Bilinen sınırlamalar (yer tutucu görseller vb.).
6. "Bir şey ters giderse: ekran görüntüsü + terminaldeki kırmızı hata metnini bana gönder."
