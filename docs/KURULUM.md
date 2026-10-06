# KURULUM — Adım Adım

Bu rehber, projeyi bilgisayarına kurup telefonunda ilk kez çalıştırman ve GitHub'a yüklemen için. Her adımın sonunda **"Kontrol"** satırı var; o satırdaki şeyi görmeden bir sonrakine geçme.

> Takıldığın her yerde: terminaldeki hata metninin **tamamını** kopyala ve Claude'a yapıştır. Ekran görüntüsü de işe yarar.

---

## 1. Gerekli programlar

### 1.1 Node.js (LTS)
JavaScript'i bilgisayarında çalıştıran program. https://nodejs.org adresinden **LTS** sürümünü indirip kur.

**Kontrol:** Yeni bir terminal aç (Windows: PowerShell, Mac: Terminal) ve yaz:
```bash
node -v
npm -v
```
İki satırda sürüm numarası görmelisin.

### 1.2 Git
Kodun geçmişini tutan program. https://git-scm.com adresinden indir ve kur (Windows'ta varsayılan seçenekler uygun; **Git Bash** da kurulur, Claude Code onu kullanabilir).

**Kontrol:** `git --version`

İlk kez kullanıyorsan adını ve e-postanı tanıt:
```bash
git config --global user.name "Adın Soyadın"
git config --global user.email "github-epostan@ornek.com"
```

### 1.3 Kod editörü (önerilir)
**Visual Studio Code**: https://code.visualstudio.com — dosyaları rahatça görmek için.

### 1.4 Telefonuna Expo Go
Play Store'dan (ya da App Store'dan) **Expo Go** uygulamasını kur.

### 1.5 Claude Code
Claude Code için ücretli bir Claude planı gerekir. Kurulum için güncel resmî talimat: https://code.claude.com/docs/en/setup

Kısaca:
- **Windows (PowerShell):** `irm https://claude.ai/install.ps1 | iex`
- **Mac / Linux:** `curl -fsSL https://claude.ai/install.sh | bash`
- Alternatif: **Claude masaüstü uygulaması** (https://claude.com/download) — içindeki Code sekmesi aynı işi görsel bir arayüzle yapar.

**Kontrol:** `claude --version`

---

## 2. Projeyi aç

1. İndirdiğin `last-message.zip` dosyasını, kolay bulacağın bir yere çıkar. Örnek: `Belgeler/oyunlar/last-message`
   - ⚠️ Yolda Türkçe karakter ve boşluk **olmasın** (`Oyunlarım` değil `oyunlar`). Bazı araçlar bunlarla sorun çıkarabilir.
2. Terminalde o klasöre git:
   ```bash
   cd Belgeler/oyunlar/last-message
   ```
3. Bağımlılıkları kur (birkaç dakika sürebilir):
   ```bash
   npm install
   ```
4. Her şeyin sağlam olduğunu kontrol et:
   ```bash
   npm run check
   ```

**Kontrol:** En sonda `Tests: 12 passed` gibi bir satır ve hiç kırmızı hata yok.

---

## 3. Telefonunda çalıştır

1. Bilgisayar ve telefon **aynı Wi-Fi ağında** olsun.
2. Terminalde:
   ```bash
   npm start
   ```
3. Terminalde bir **QR kod** çıkar. Telefonda Expo Go'yu aç → "Scan QR code" → kodu okut.
   - Bağlanamazsa: terminali kapat (Ctrl+C) ve `npm start -- --tunnel` dene.

**Kontrol (M0'ın bitiş şartı):**
- Koyu bir ekranda üstte **23:16** saati,
- "Bunu okuyorsan eve dönme." balonu, ardından iki mesaj daha,
- Altta **Kimsin?** ve **Mesajı sil** butonları,
- Birine dokununca senin balonun ve cevaplar geliyor,
- Türkçe karakterler (ğ, ş, ı, İ, ö, ü, ç) düzgün görünüyor.

Bunu gördüysen tebrikler, oyunun ilk karesi telefonunda. 🎉

> İpucu: Kodda bir şey değiştirip kaydettiğinde telefon kendiliğinden yenilenir. Yenilenmezse telefonu salla → **Reload**.

---

## 4. GitHub'a yükle

1. https://github.com adresinde hesap aç (yoksa).
2. Sağ üstte **+** → **New repository**
   - Repository name: `last-message`
   - **Private** seç (hikâyen gizli kalsın)
   - "Add a README" vb. hiçbir kutuyu **işaretleme** (projede zaten var)
   - **Create repository**
3. Proje klasöründe terminalde (GitHub'ın verdiği adresi kullan):
   ```bash
   git init
   git add -A
   git commit -m "M0: proje kurulumu, Ink motoru iskeleti, ilk mesaj ekranı"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADIN/last-message.git
   git push -u origin main
   ```
   İlk `push`'ta GitHub giriş penceresi açılabilir; tarayıcıdan onayla.

**Kontrol:** GitHub sayfasını yenile; dosyaların orada.

> Bundan sonra her gün: Claude'la çalış → `/kaydet` → `git push`.

---

## 5. Claude Code ile ilk oturum

Proje klasöründe:
```bash
claude
```

İlk açılışta klasöre güvenip güvenmediğini sorar → **evet** (proje ayarlarındaki otomatik kontroller bunun için gerekli).

İlk mesajın şöyle olabilir:

> Merhaba! CLAUDE.md ve TASKS.md'yi oku. M0'ı telefonumda doğruladım, balonlar ve seçimler çalışıyor. M0'ı kapat ve /durum ile nerede olduğumuzu göster.

Sonra her çalışma oturumunda:
1. `/durum` — nerede kaldık
2. `/siradaki` — sıradaki görev (Claude plan gösterir, onaylarsın, uygular, test eder, anlatır)
3. Telefonda dene (`/telefon-testi` adımları verir)
4. `/kaydet` → `git push`

Anlamadığın bir şey olursa: `/ogret <konu>` (ör. `/ogret zustand`, `/ogret src/engine/Director.ts`).

### Verimli çalışma ipuçları
- **Bir oturum = bir kilometre taşı parçası.** Konuşma çok uzarsa `/clear` ile temizle ve `/durum` ile devam et; Claude her şeyi dosyalardan yeniden okur.
- **Önce plan, sonra kod.** Büyük işlerde Claude'dan önce plan iste ("önce planla, onaylamadan kod yazma").
- **Hata çıkınca** terminaldeki kırmızı metnin tamamını yapıştır. "Çalışmıyor" demek yetmez.
- **Hikâyeyi değiştirmek istersen** önce `docs/SENARYO.md`'yi değiştir (ya da Claude'a değiştirt), sonra Ink'i.
- Claude'un yaptığı her şeyi anlamak zorunda değilsin, ama **her kilometre taşında bir kez** `/ogret` ile o aşamanın ana fikrini öğren. Oyun bittiğinde React Native biliyor olacaksın.
