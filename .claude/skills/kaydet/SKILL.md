---
name: kaydet
description: Değişiklikleri kontrol edip uygun mesajla git commit'i oluşturur (push etmez).
argument-hint: "[commit mesajı]"
disable-model-invocation: true
---

# /kaydet

1. `npm run check` çalıştır. Geçmiyorsa commit etme; sorunu söyle.
2. `git status` ve `git diff --stat` ile neyin değiştiğini göster.
3. Commit mesajı: argüman verildiyse ($ARGUMENTS) onu kullan; yoksa biçim `A-31: mesaj balonu ve otomatik kaydırma` veya `B01.S3: sokak fotoğrafı sahnesi`. Birden fazla görevse ilk satırda ana görev, gövdede liste.
4. `git add -A` ve `git commit`.
5. **Push etme.** Kullanıcıya "GitHub'a göndermek için: `git push`" de.
