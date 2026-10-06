---
name: durum
description: Projenin nerede olduğunu özetler — kilometre taşı, biten/kalan görevler, sıradaki adım.
disable-model-invocation: true
---

# /durum

1. `TASKS.md`'deki her kilometre taşı için biten / toplam görev sayısını say.
2. `docs/bolum_*.md` dosyalarındaki işaretli/işaretsiz kutuları bölüm bölüm say.
3. `git log --oneline -10` ile son çalışmaları gör.
4. Kullanıcıya şunu ver:
   - Şu anki kilometre taşı ve ilerleme yüzdesi
   - Son yapılan 3 şey
   - Sıradaki 3 görev
   - Varsa engel (onay bekleyen paket, eksik varlık, telefonda doğrulanmamış iş)
