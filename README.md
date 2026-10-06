# LAST MESSAGE

> *Bunu okuyorsan eve dönme.*

Tamamı bir telefon arayüzünün içinde geçen, Türkçe, hikâye odaklı bir psikolojik gerilim oyunu. Oyuncu Emir'in telefonunu kullanır: mesajlar gelir, fotoğraflar incelenir, ses kayıtları dinlenir. Ve her şey **14 Ağustos 2026, saat 23:17**'ye çıkar.

**Teknoloji:** Expo (React Native) · TypeScript · inkjs (Ink hikâye motoru) · zustand
**Platform:** Android (önce), iOS

---

## Hızlı başlangıç

İlk kez kuruyorsan **[docs/KURULUM.md](docs/KURULUM.md)** dosyasını adım adım takip et.

```bash
npm install        # bağımlılıkları kur (bir kez)
npm start          # Ink'i derler ve geliştirme sunucusunu açar
```

Telefonuna **Expo Go** uygulamasını kur, terminaldeki QR kodu okut. Oyun telefonunda açılır; kodu kaydettikçe telefonda güncellenir.

## Komutlar

| Komut | Ne yapar |
|---|---|
| `npm start` | Geliştirme sunucusu (önce Ink'i derler) |
| `npm run check` | Ink derleme + tip kontrolü + lint + testler |
| `npm run ink:watch` | `story/` klasörünü izler, Ink'i otomatik derler |
| `npm test` | Testler |

## Klasörler

```
story/          Ink hikâye dosyaları (bölüm bölüm)
src/engine/     Oyun motoru (Director, etiketler, saat) — arayüzden bağımsız
src/state/      Oyun durumu (zustand)
src/phone/      Sahte telefon kabuğu
src/apps/       Telefonun içindeki uygulamalar (Mesajlar, Galeri, Notlar…)
src/data/       İçerik kayıtları (kişiler, fotoğraflar, ipuçları)
assets/         Fotoğraf, ses, video, derlenmiş hikâye
docs/           Senaryo, görevler, teknik rehber
.claude/        Claude Code ajanları, komutları ve ayarları
```

## Claude Code ile çalışmak

Bu repo Claude Code için hazırlandı. Proje klasöründe `claude` komutunu çalıştır; Claude `CLAUDE.md` dosyasını otomatik okur.

| Kısayol | Ne yapar |
|---|---|
| `/siradaki` | Sıradaki görevi alır, uygular, test eder, açıklar |
| `/sahne B01.S3` | Bir sahneyi uçtan uca oynanabilir yapar |
| `/kontrol` | Sağlık kontrolü (kod + hikâye tutarlılığı) |
| `/telefon-testi` | Son değişiklik için telefonda test adımları |
| `/kaydet` | Kontrol edip commit eder |
| `/durum` | Proje nerede, sırada ne var |
| `/ogret <konu>` | Bir kavramı bu projeden örneklerle öğretir |

Uzman ajanlar: `ink-writer`, `story-guardian`, `code-reviewer`, `test-runner`, `asset-scout` (`.claude/agents/`).

## Belgeler

| Dosya | İçerik |
|---|---|
| [docs/SENARYO.md](docs/SENARYO.md) | Hikâyenin tamamı (Bölüm 1–16) |
| [docs/05_REACT_NATIVE_TEKNIK_REHBER.md](docs/05_REACT_NATIVE_TEKNIK_REHBER.md) | Mimari ve kurallar |
| [docs/04_YOL_HARITASI.md](docs/04_YOL_HARITASI.md) | Kilometre taşları |
| [TASKS.md](TASKS.md) | Görev takibi |
| [docs/bolum_01.md](docs/bolum_01.md) … | Sahne sahne görevler |
# lastmessagegame
