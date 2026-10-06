---
name: siradaki
description: TASKS.md'deki sıradaki görevi alır, bağımlılıklarını kontrol eder, uygular, doğrular ve kullanıcıya açıklar.
argument-hint: "[görev-id]"
disable-model-invocation: true
---

# /siradaki — sıradaki görevi yap

Argüman verildiyse ($ARGUMENTS) o görevi al; verilmediyse `TASKS.md`'de **ilk işaretlenmemiş** görevi al.

1. **Anla:** Görevin tanımını `TASKS.md`'den, ayrıntısını `docs/01_ALTYAPI.md` (A-görevleri) veya ilgili `docs/bolum_XX.md` dosyasından oku. React Native karşılığı için `docs/05_REACT_NATIVE_TEKNIK_REHBER.md` §9 tablosuna bak.
2. **Bağımlılık:** Görevde `→ A-xx` varsa ve o görev bitmemişse dur, kullanıcıya söyle ve önce onu öner.
3. **Planla:** Kullanıcıya 3–5 maddelik kısa bir plan göster (hangi dosyalar, ne yapılacak). Yeni paket gerekiyorsa **burada onay iste** ve dur.
4. **Uygula.** Ink gerekiyorsa `ink-writer` ajanını kullan.
5. **Doğrula:** `test-runner` ajanını kullan. Motor değişikliği yaptıysan test ekle.
6. **Gözden geçir:** `code-reviewer` ajanını kullan; kritik bulguları düzelt.
7. **Bitir:**
   - `TASKS.md`'de kutuyu işaretle (bölüm görevi ise `docs/bolum_XX.md`'de de).
   - Kullanıcıya 2–4 cümleyle, sade Türkçeyle **ne yaptığını ve neden** anlat. Yeni bir kavram kullandıysan bir cümleyle tanıt.
   - Telefonda neye bakması gerektiğini tek cümleyle söyle.
   - `/kaydet` ile commit'i öner.
