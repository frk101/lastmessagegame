# LAST MESSAGE — React Native Teknik Rehberi

> **Bu dosya kimin için?** Projede çalışacak yapay zekâ asistanı (ve geliştirici) için. Asistan bu dosyayı okuyup projeyi kurmalı, görevleri oluşturmalı ve kilometre taşı sırasıyla ilerlemelidir.
>
> **Bu repoda:** Kısa çalışma talimatları kökteki `CLAUDE.md`'de; bu dosya ayrıntılı teknik başvuru kaynağıdır. Belge yolları `docs/` klasörüne göredir. Ajanlar `.claude/agents/`, kısayol komutları `.claude/skills/` altında.

---

## 0. YAPAY ZEKÂ ASİSTANI İÇİN TALİMATLAR

Bu bölümü her oturumun başında uygula.

### 0.1 Önce oku (sırayla)

1. **Bu dosya** — teknik mimari ve kurallar. Teknik konularda son söz bu dosyanındır.
2. `00_README.md` — görev biçimi, isimlendirme, "bitti" tanımı.
3. `02_ETIKET_SOZLUGU.md` — Ink etiketleri. **Hikâye ile kod arasındaki sözleşme.**
4. `03_VARLIK_LISTESI.md` — bütün fotoğraf/ses/video ID'leri, hotspot'lar, gizli ipuçları.
5. `04_YOL_HARITASI.md` — kilometre taşları (M0–M6).
6. `bolum_01.md … bolum_16.md` — sahne sahne görevler ve sahne metinleri.
7. Senaryo dokümanı (`Last_Message_Senaryo_Bolum_1_16_Genisletilmis.docx` ya da onun `.md` dönüşümü) — hikâyenin kaynağı.

> **Önemli:** `01_ALTYAPI.md` Unity düşünülerek yazıldı. **Görev listesi olarak geçerlidir** (A-01 … A-106 ID'leri korunur), ama Unity'ye özgü ifadeler (TextMeshPro, ScriptableObject, prefab, Inspector, `Handheld.Vibrate`) yerine bu dosyadaki **Bölüm 9: A-görevleri eşleme tablosu**nu uygula.

### 0.2 Çalışma döngüsü

1. `TASKS.md` dosyası yoksa oluştur: `04_YOL_HARITASI.md`'deki mevcut kilometre taşına ait A-görevlerini ve bölüm görevlerini, bu dosyadaki eşleme tablosuyla React Native'e çevirerek listele. Her görev `- [ ] A-31 — Konuşma ekranı balonları` biçiminde olsun.
2. **Bir seferde tek görev** al. Başlamadan önce görevin bağımlılıklarını (`→ A-xx`) kontrol et; bitmemiş bağımlılık varsa önce onu yap.
3. Görevi uygula. Ardından:
   - `npx tsc --noEmit` hatasız geçmeli.
   - `npm run lint` hatasız geçmeli.
   - Görev bir davranışsa, `__tests__` altında en az bir birim testi ekle (motor, etiket ayrıştırıcı, koşullar ve kayıt sistemi için zorunlu).
   - Kullanıcıdan Expo Go ile telefonda denemesini iste ve neye bakması gerektiğini **tek cümleyle** söyle.
4. `TASKS.md` içinde kutuyu işaretle, commit mesajı öner: `A-31: mesaj balonu ve otomatik kaydırma`.
5. Kilometre taşı bitince `04_YOL_HARITASI.md`'deki test sorularını kullanıcıya hatırlat.

### 0.3 Kurallar

- **Hikâye metnini değiştirme.** Senaryodaki bir cümleyi, sahneyi ya da seçimi değiştirmek gerekiyorsa önce kullanıcıya sor. Yazım hatası düzeltmek bile sorulmalı.
- **Etiket sözlüğünün dışına çıkma.** Yeni bir etiket gerekiyorsa önce `02_ETIKET_SOZLUGU.md`'ye ekle, sonra kodla, kullanıcıya bildir.
- **Varlık ID'lerini birebir kullan.** `03_VARLIK_LISTESI.md`'deki ID'ler hem Ink'te hem kodda aynı olmalı.
- **Gerçek varlık yoksa yer tutucu üret** (Bölüm 7.3). Oyun her zaman çalışır durumda olmalı.
- **Yeni kütüphane eklemeden önce sor.** Bölüm 2'deki liste dışındaki her paket için kullanıcıdan onay al ve nedenini açıkla.
- **Kullanıcı Unity/React Native bilmiyor, öğreniyor.** Her görevin sonunda neyi neden yaptığını 2–4 cümleyle, sade Türkçe açıkla. Kullanıcı isterse daha derine in.
- **Arayüz metinleri Türkçe.** Kod, değişken ve dosya adları İngilizce (Bölüm 10).

---

## 1. PROJE ÖZETİ

**Last Message**, tamamı bir telefon arayüzünün içinde geçen, Türkçe, hikâye odaklı bir psikolojik gerilim/gizem oyunudur. Oyuncu Emir'in telefonunu kullanır: mesajlar gelir, fotoğraflar incelenir, notlar okunur, ses kayıtları dinlenir, videolar izlenir. Hikâye 16 bölüm, iki perdeden oluşur; seçimler, gizli ipuçları ve üç final vardır. Ana motif saat **23:17**'dir.

**Temel tasarım ilkesi: Telefon, dünyanın kendisidir.** Oyun cihazın tam ekranını kaplar; cihazın kendi durum çubuğu gizlenir ve yerine oyunun kendi **sahte telefon arayüzü** (saat, sinyal, şarj) çizilir. Oyuncu, gerçek telefonunda Emir'in telefonunu tutuyormuş gibi hissetmelidir.

**Hedef platform:** Önce Android, sonra iOS. Dikey ekran. Çevrimdışı çalışır.

---

## 2. TEKNOLOJİ YIĞINI

> Sürüm numaraları bilinçli olarak sabitlenmedi. Kurulumda **güncel kararlı sürümleri** kullan ve `package.json`'a yazılan sürümleri kullanıcıya bildir. Expo SDK ile uyumlu paket sürümleri için her zaman `npx expo install <paket>` kullan (`npm install` değil).

| Amaç | Paket | Not |
|---|---|---|
| Çatı | **Expo** (managed workflow) + **TypeScript** | `npx create-expo-app` |
| Hikâye motoru | **inkjs** | Ink'in resmî JS sürümü. Derleyicisi de içinde (`inkjs/compiler`). |
| Durum yönetimi | **zustand** | Basit, az kod; kalıcı durum için `persist` ara katmanı. |
| Kalıcı kayıt | **@react-native-async-storage/async-storage** | JSON kayıt. |
| Animasyon | **react-native-reanimated** | Balon belirme, geçişler, sarsıntı. |
| Jestler | **react-native-gesture-handler** | Yakınlaştırma, kaydırma, sürükle-bırak (pano, dolap). |
| Görsel efekt | **@shopify/react-native-skia** | Glitch, flashback filtresi, gren, güvenlik kamerası efekti. **M3'e kadar gerekmez**; ilk efektler Reanimated ile yapılabilir. |
| Liste | **@shopify/flash-list** | Mesaj listesi, galeri ızgarası (binlerce öğe — B16 geri yükleme). |
| Görsel | **expo-image** | Önbellekli, hızlı görsel. |
| Video | **expo-video** | Oynat/durdur, `playbackRate` (yavaşlatma), konum sorgulama. |
| Ses | **expo-audio** | Kayıtlar, ambiyans katmanları, efektler. |
| Titreşim | **expo-haptics** | |
| Font | **expo-font** | Türkçe karakter desteği olan bir arayüz fontu + bir monospace font. |
| Güvenli alan | **react-native-safe-area-context** | Çentikli ekranlar. |
| Durum çubuğu | **expo-status-bar** | Cihaz çubuğunu gizlemek için. |
| Ekran görüntüsü algılama | **expo-screen-capture** | B04: gerçek ekran görüntüsünü algılamak (Bölüm 8.6). |
| Ekranı uyanık tutma | **expo-keep-awake** | Uzun bekleme ve videolarda ekran kapanmasın. |
| Test | **jest** + **@testing-library/react-native** | Motor ve mantık testleri. |
| Derleme/yayın | **EAS Build** | Mağaza derlemeleri. |

**Geliştirme sırasında test:** Telefonda **Expo Go** uygulaması. Skia, Reanimated ve listedeki bütün Expo paketleri Expo Go'da çalışır. Listeye özel yerel modül gerektiren bir paket eklenirse **development build** (EAS) gerekir; bu yüzden yeni paket eklemeden önce sor.

---

## 3. PROJE YAPISI

```
last-message/
├── CLAUDE.md                     # Claude Code çalışma talimatları (kısa)
├── App.tsx                       # kök: fontlar, sağlayıcılar, <Phone/>
├── TASKS.md                      # asistanın tuttuğu görev listesi
├── docs/                         # 00–05 md dosyaları, bolum_XX.md, senaryo
├── story/                        # Ink kaynakları (oyuna doğrudan girmez)
│   ├── ortak.ink                 # VAR'lar, ortak fonksiyonlar
│   ├── main.ink                  # INCLUDE'lar + bölüm yönlendirme
│   └── bolum01.ink … bolum16.ink
├── scripts/
│   ├── compile-ink.ts            # story/*.ink → assets/story/story.json
│   └── make-placeholders.ts      # eksik varlıklara yer tutucu üretir
├── assets/
│   ├── story/story.json          # derlenmiş Ink (otomatik üretilir, elle düzenleme)
│   ├── photos/                   # FOTO_*.jpg, ODA_*.jpg, ART_*.jpg …
│   ├── video/                    # VID_*.mp4
│   ├── audio/{voice,sfx,amb,music}/
│   └── fonts/
├── src/
│   ├── engine/                   # oyun motoru — arayüzden bağımsız, test edilebilir
│   │   ├── Director.ts           # Ink döngüsü
│   │   ├── tags.ts               # etiket ayrıştırıcı + komut kayıt defteri
│   │   ├── speakers.ts           # "Deniz: metin" ayrıştırma
│   │   ├── conditions.ts         # adim_bekle koşulları
│   │   ├── clock.ts              # SahteSaat
│   │   ├── events.ts             # olay veriyolu (hotspot bulundu, video bitti…)
│   │   ├── save.ts               # kayıt/yükleme
│   │   └── audio.ts              # ses yöneticisi (ambiyans katmanları, sfx, müzik)
│   ├── state/
│   │   ├── gameStore.ts          # kalıcı oyun durumu (zustand + persist)
│   │   └── uiStore.ts            # geçici arayüz durumu (açık uygulama, overlay'ler)
│   ├── data/                     # içerik kayıt defterleri (tipli)
│   │   ├── types.ts
│   │   ├── contacts.ts  photos.ts  clues.ts  notes.ts
│   │   ├── audio.ts     videos.ts  rooms.ts  files.ts  calls.ts
│   │   └── assetMap.ts           # ID → require(...) eşlemesi
│   ├── phone/                    # telefon kabuğu
│   │   ├── Phone.tsx             # kök çerçeve, uygulama yönlendirme
│   │   ├── StatusBar.tsx  LockScreen.tsx  HomeScreen.tsx
│   │   ├── NotificationLayer.tsx
│   │   └── overlays/             # Blackout, Glitch, Flashback, Countdown, Shake, ChapterEnd
│   ├── apps/
│   │   ├── messages/  gallery/  notes/  voice/  video/
│   │   ├── map/  camera/  files/  settings/  phone/  contacts/
│   │   ├── board/                # ipucu panosu
│   │   ├── room/                 # oda keşfi
│   │   ├── keypad/               # şifre ekranları
│   │   └── work/                 # iş sohbeti
│   ├── components/               # ortak küçük bileşenler (Bubble, ZoomableImage, Hotspot…)
│   ├── theme/                    # renkler, tipografi, boşluklar
│   ├── i18n/tr.ts                # arayüz metinleri (Ink dışı)
│   └── debug/DebugPanel.tsx      # yalnızca __DEV__
└── __tests__/
```

**Katman kuralı:** `engine/` hiçbir React bileşeni import etmez. Arayüzle yalnızca `state/` ve `events.ts` üzerinden konuşur. Bu sayede motor birim testleriyle, telefon olmadan test edilebilir.

---

## 4. MİMARİ

### 4.1 Genel akış

```
 story.json (Ink)
      │
      ▼
 Director ──► tags.ts ──► komutlar ──► gameStore / uiStore / audio / clock
      │                                   │
      │ satır ("Deniz: metin")            ▼
      ├──► speakers.ts ──► gameStore.messages ──► Messages uygulaması (React)
      │
      │ seçim                     oyuncu dokunur
      ├──► uiStore.choices ──► ChoiceBar ──► Director.choose(i)
      │
      │ # adim_bekle:KOŞUL        oyuncu araştırır (galeri, pano, oda…)
      └──► conditions.ts ◄──── events.ts ◄──── uygulamalar olay yayınlar
```

### 4.2 Director (yönetmen)

Tek bir sınıf; tek bir döngü. Ink'i satır satır ilerletir, her satırın etiketlerini **önce** uygular, sonra metni ilgili yere gönderir.

```ts
// src/engine/Director.ts — iskelet
class Director {
  private story: Story;
  private running = false;

  async run() {
    if (this.running) return;
    this.running = true;
    while (this.story.canContinue) {
      const text = this.story.Continue()!.trim();
      const tags = parseTags(this.story.currentTags ?? []);
      for (const tag of tags) await executeTag(tag, this.ctx);   // bekle, adim_bekle burada "await" edilir
      if (text) await deliverLine(text, this.ctx);               // konuşmacıya göre mesaj/iç ses/sistem
      await save.checkpoint(this.story, this.ctx);               // her satırdan sonra hafif kayıt
    }
    if (this.story.currentChoices.length) {
      uiStore.getState().showChoices(this.story.currentChoices.map(c => c.text));
    }
    this.running = false;
  }

  choose(index: number) {
    const choiceText = this.story.currentChoices[index].text;
    gameStore.getState().addOutgoingMessage(choiceText);         // seçim, giden balon olur
    uiStore.getState().clearChoices();
    this.story.ChooseChoiceIndex(index);
    this.run();
  }
}
```

Kurallar:
- **Bekleme süreleri** (`bekle`, `yaziyor`) metin hızı ayarıyla çarpılır (A-95) ve uygulama arka plandayken **durur**.
- `adim_bekle` bir `Promise` döndürür; koşul `events.ts` üzerinden sağlandığında çözülür. Koşul **zaten sağlanmışsa** (ör. oyuncu fotoğrafı önceden incelemiş) anında çözülür.
- Director asla doğrudan bir bileşeni çağırmaz; yalnızca store'ları günceller.

### 4.3 Etiket ayrıştırma ve komut kayıt defteri

Etiket biçimi: `ad:arg1:arg2` ya da `adim_bekle:tur(arg1,arg2)`. **Dikkat:** `saat:23:16` gibi etiketlerde argüman `:` içerir; ayrıştırıcı bunun için **etikete özel** argüman sayısı kullanmalı (`saat` → tek argüman, kalan her şey).

```ts
// src/engine/tags.ts — iskelet
type TagHandler = (args: string[], ctx: Ctx) => void | Promise<void>;

const ARITY: Record<string, number> = { saat: 1, tarih: 1, yaziyor: 2, foto_gonder: 2, ad_degistir: 2, durum: 2 /* … */ };

export const handlers: Record<string, TagHandler> = {
  saat:        ([hhmm]) => clock.set(hhmm),
  bekle:       ([sn], ctx) => ctx.wait(Number(sn) * 1000),
  titresim:    () => fx.vibrate(),
  foto_gonder: ([who, photoId]) => game.sendPhoto(who, photoId),
  galeri_ekle: ([photoId]) => game.addPhoto(photoId),
  ipucu:       ([clueId]) => game.addClue(clueId),
  adim_bekle:  ([expr], ctx) => conditions.wait(parseCondition(expr), ctx),
  // … 02_ETIKET_SOZLUGU.md'deki her etiket burada bir satır
};

export async function executeTag(tag: ParsedTag, ctx: Ctx) {
  const h = handlers[tag.name];
  if (!h) { if (__DEV__) console.warn(`Bilinmeyen etiket: #${tag.raw}`); return; }
  await h(tag.args, ctx);
}
```

**Zorunlu test:** `02_ETIKET_SOZLUGU.md`'deki her etiket için `handlers` içinde karşılık olduğunu kontrol eden bir birim testi (sözlükteki tabloları okuyup karşılaştırabilir ya da elle tutulan bir listeyle).

**Idempotans:** Her komut iki kez çalıştırılsa da aynı sonucu vermeli (ör. `galeri_ekle` fotoğraf zaten varsa tekrar eklemez). Kayıttan dönüşte bir satırın etiketleri yeniden çalışabilir; bu kural hataları önler.

### 4.4 Konuşmacı ayrıştırma

Ink satırı `Konuşmacı: metin` biçimindedir. Eşleme:

| Ink'teki konuşmacı | Nereye gider |
|---|---|
| `Bilinmeyen Numara`, `M.`, `Deniz`, `Bilinmeyen` | O kişinin konuşmasına **gelen** balon |
| `Emir` | Aktif konuşmaya **giden** balon |
| `Emir — Not` | İç ses balonu (A-53) |
| `Emir — Video`, `Emir — Kayıt`, `Deniz — Kayıt` | Medya altyazısı (oynatıcı açıksa) |
| `Sistem` | Sistem uyarı satırı |
| `Eski Not`, `Not`, `Zarf` | Not/kâğıt görünümü |
| Konuşmacısız satır | Yalnızca geliştirici günlüğüne (sahne yönergesi; oyuncuya gösterilmez) |

Konuşmacı adları `data/contacts.ts`'te kişi ID'lerine eşlenir (`bilinmeyen`, `m`, `deniz`, `is`, `emir_gecmis`, `sistem`). Kişi adı oyun içinde değişebilir (`ad_degistir`), bu yüzden mesajlar **ID** ile saklanır, görünen ad ise kişi kartından okunur.

### 4.5 Koşullar (adim_bekle)

```ts
// src/engine/conditions.ts — tipler
type Condition =
  | { type: 'hotspot'; photoId: string; count: number }
  | { type: 'hotspot_tek'; photoId: string; hotspotId: string }
  | { type: 'pano'; a: string; b: string }
  | { type: 'sifre'; lockId: string }
  | { type: 'app_acik'; app: AppId }
  | { type: 'dosya_acik'; fileId: string }
  | { type: 'video_bitti'; videoId: string; times: number }
  | { type: 'ses_bitti'; audioId: string }
  | { type: 'oda_obje'; roomId: string; objectId: string }
  | { type: 'sure'; seconds: number }
  | { type: 'saat'; hhmm: string };
```

Her koşul iki şey sağlar: `isMet(state)` (şu an sağlanıyor mu?) ve hangi olaylarda yeniden kontrol edileceği. Uygulamalar olay yayınlar: `events.emit('hotspot_found', { photoId, hotspotId })`. Koşul sağlanınca Director devam eder.

**Bekleme sırasında oyuncu serbesttir:** bütün uygulamalar açılabilir, ama yeni hikâye satırı gelmez. Uzun süre (90 sn) ilerleme olmazsa, bölüm dosyasında tanımlıysa küçük bir yardım (Emir iç sesi) gösterilebilir — bu A-görevlerinde yoktur, **M2 testlerinden sonra** gerekirse ekle.

### 4.6 SahteSaat

Oyunun saati gerçek saatten bağımsızdır. Durum çubuğu, kilit ekranı, mesaj zaman damgaları ve geri sayım bunu kullanır.

```ts
interface FakeClock {
  set(hhmm: string): void;              // # saat
  setDate(ddmmyyyy: string): void;      // # tarih (flashback)
  flow(mode: 'real' | 'stopped'): void; // # saat_akis
  waitUntil(hhmm: string): Promise<void>;
  now(): { h: number; m: number; s: number; date: string };
}
```

- Varsayılan tarih: **Şubat 2027** (oyunun şimdiki zamanı). Flashback'te **14.08.2026**.
- B15–B16 geri sayımı **23:16:00'da başlar, 23:17:00'da sıfırlanır**; sayaç saatle kilitlidir (ayrı bir zamanlayıcı değil).

### 4.7 Durum (state)

İki store vardır:

**`gameStore` (kalıcı, AsyncStorage'a yazılır)** — oyunun kendisi:
```ts
interface GameState {
  inkState: string | null;                  // story.state.toJson()
  chapter: number;
  clock: { hhmm: string; date: string };
  conversations: Record<ContactId, Message[]>;
  contactNames: Record<ContactId, string>;  // ad_degistir sonrası
  gallery: string[];                        // FOTO ID'leri (sıralı)
  deletedGallery: string[];
  sharedAlbum: string[];
  notes: string[];  voice: string[];  videos: string[];  files: string[];  calls: string[];
  visibleApps: AppId[];
  clues: string[];  flippedClues: string[];
  hotspotsFound: Record<string, string[]>;  // photoId → hotspotId[]
  secretsFound: string[];                   // GZ_A1… GZ_B8
  videoPlays: Record<string, number>;
  selfNotes: Record<string, string>;        // KN_B01 → seçilen son cümle
  inkVars: Record<string, unknown>;         // guven, final_p1… (Ink ile eşitlenir)
  completedChapters: number[];
  settings: { textSpeed: number; haptics: boolean; volume: number };
}
```

**`uiStore` (geçici)** — o anki görünüm: açık uygulama, açık fotoğraf, aktif seçimler, overlay'ler (karartma, glitch, flashback, geri sayım), bildirim kuyruğu, "yazıyor" göstergeleri.

Ink değişkenleri (`guven`, `final_p1`, `gizli_p1` …) Ink'in kendi state'inde yaşar; `story.variablesState` gözlemcisiyle `gameStore.inkVars`'a yansıtılır (salt okunur kopya; arayüz ve koşullar buradan okur). Değişkenlerin tam listesi `01_ALTYAPI.md` sonunda.

### 4.8 Kayıt sistemi

- **Ne zaman:** Her Ink satırından sonra hafif kayıt; ayrıca uygulama arka plana geçince (`AppState`) ve bölüm sonunda.
- **Ne:** `gameStore`'un tamamı (içinde `inkState` var). Tek kayıt yuvası.
- **Bölüm başı anlık görüntüsü:** Her bölüm başlarken ayrı bir anahtar altında saklanır (`save:chapter:5`). "Bölüm seç"ten tekrar oynamak bunu yükler; **bulunan gizli ipuçları ve tamamlanan bölümler korunur** (bunlar ayrı bir `meta` kaydında tutulur).
- **Sürümleme:** Kayıt nesnesinde `version` alanı olsun; şema değişirse taşıma (migration) fonksiyonu yazılır.
- **Zorunlu test:** Kaydet → store'u sıfırla → yükle → aynı durum.

### 4.9 Ses yöneticisi

- **Katmanlar:** `amb` (ambiyans, döngü, çapraz geçiş), `sfx` (tek sefer), `music`, `voice` (kayıtlar). Her katmanın ses seviyesi ayrı.
- `# sessizlik`: müzik kapanır, ambiyans kalır. `# sessizlik_tam`: her şey kapanır (B14'teki 41 saniye).
- İlk açılışta kulaklık önerisi ekranı (A-94).

---

## 5. TELEFON KABUĞU (UI)

### 5.1 Tam ekran sahte telefon

- Cihazın durum çubuğu **gizlenir** (`<StatusBar hidden />`); yerine `phone/StatusBar.tsx` çizilir: SahteSaat, sinyal (0–4), şarj (%), gerektiğinde yeşil "arama sürüyor" şeridi.
- Güvenli alanlar (`react-native-safe-area-context`) dikkate alınır; içerik çentiğe girmez.
- **Gerçek telefonun düğmeleri oyuna bağlanmaz.** B16'daki "telefonu kapatmaya çalışma" oyun içi bir arayüzle yapılır (ör. durum çubuğuna uzun basınca açılan sahte "Kapatmak için kaydırın" ekranı). Android geri tuşu, oyun içinde "geri" hareketi gibi davranır; kilit ekranında ve kritik anlarda (geri sayım) etkisizdir.

### 5.2 Ekranlar ve geçiş

- `Phone.tsx` tek kök bileşendir; `uiStore.activeApp` değerine göre kilit ekranı, ana ekran ya da bir uygulama gösterir. **React Navigation / expo-router kullanılmaz** — telefonun içindeki gezinme oyunun kendi kontrolündedir ve hikâye onu değiştirebilmelidir (`# app_ac`, `# yonlendir`).
- Uygulama açılış/kapanış animasyonları Reanimated ile.
- Overlay'ler her şeyin üstünde, sabit sırayla: `Shake < Flashback filtresi < Glitch < Countdown < Notifications < Blackout < ChapterEnd < DebugPanel`.

### 5.3 Görsel kimlik

- Gerçek bir telefon işletim sistemine benzemeli ama **hiçbir markayı taklit etmemeli** (iOS/Android ikonları, Apple/Google arayüzü birebir kopyalanmaz). Kendi sade, koyu tonlu, hafif soğuk bir tasarım dili oluştur.
- Mesaj balonları: gelen gri-koyu, giden soğuk mavi-gri. Deniz'in stil değişimi (küçük harf → büyük harf + noktalama) metinde zaten var; balon stili değişmez.
- Fontlar: arayüz için Türkçe karakterleri tam destekleyen sade bir sans-serif (ör. Inter), sistem yazıları ve saat için bir monospace (ör. JetBrains Mono). Lisansları açık kaynak olmalı.

---

## 6. İÇERİK VERİSİ

Bütün içerik `src/data/` altında **tipli TypeScript nesneleri** olarak tutulur. ID'ler `03_VARLIK_LISTESI.md` ile birebir aynıdır.

```ts
// src/data/types.ts
export interface Hotspot {
  id: string;                          // HS_TABELA
  rect: [x: number, y: number, w: number, h: number]; // 0–1 arası, görsele göre normalize
  minZoom?: number;                    // ör. 3 → yalnızca 3x yakınlaştırmada aktif (HS_PARMAK)
  activeFromChapter?: number;          // ör. HS_TABELA B02'de açılır
  comment?: string;                    // Emir'in yorumu
  addsClue?: string;                   // IPUCU_…
  secret?: string;                     // GZ_…
}

export interface PhotoAsset {
  id: string;                          // FOTO_B01_SOKAK_2317
  takenAt: string;                     // "14.08.2026 23:17"
  addedAt?: string;                    // "Dün 23:17" — Eklenme satırı
  device?: string;                     // B12'de görünür olur
  mode?: string;                       // "Zamanlayıcı — 23:17:00"
  location?: string;
  revealExtraInfoFromChapter?: number; // cihaz/mod satırları B12'de açılır
  hotspots: Hotspot[];
}

export interface Clue {
  id: string;  title: string;  description: string;
  image?: string;                      // küçük görsel ID'si
  back?: string;                       // çevrilince görünen çözüm (ipucu_cevir)
  combinesWith?: { other: string; result?: string; comment: string; secret?: string }[];
}

export interface Contact {
  id: ContactId;  defaultName: string;
  avatar?: string;  showLastSeen: boolean;
}

export interface Message {
  id: string;  from: ContactId | 'me' | 'system';
  kind: 'text' | 'photo' | 'call_log' | 'system';
  text?: string;  photoId?: string;
  time: string;                        // SahteSaat'ten
  status?: 'iletildi' | 'goruldu' | 'zamanlanmis' | 'iletilemedi';
  pinned?: boolean;  locked?: boolean;
}

export interface Room {
  id: string;  image: string;
  objects: { id: string; rect: [number, number, number, number];
             comment?: string; action?: 'open' | 'drag' | 'lift' | 'zoom';
             revealsImage?: string; emits?: string; secret?: string }[];
}
```

Benzer biçimde: `VoiceRecording` (segment listesi, bozuk aralıklar, altyazı satırları ve zamanları), `VideoAsset` (altyazı, sessiz aralık, zaman aralıklı hotspot'lar), `FileEntry` (gizli/kilitli/geri sayımlı), `CallEntry`.

**Varlık eşlemesi:** React Native'de görseller `require()` ile statik bağlanmalıdır. `src/data/assetMap.ts` bütün ID'leri dosyalara eşler; bu dosyayı `scripts/make-placeholders.ts` otomatik üretebilir.

---

## 7. INK TARAFI

### 7.1 Derleme

- Kaynaklar `story/` altında. `npm run ink` → `scripts/compile-ink.ts` bütün `.ink` dosyalarını `inkjs/compiler` ile derleyip `assets/story/story.json` üretir. Hatalar ve uyarılar okunur biçimde basılır; hata varsa çıkış kodu 1.
- `npm start` öncesinde otomatik çalışsın (`prestart`). Geliştirme sırasında `story/` klasörünü izleyip değişince yeniden derleyen bir `npm run ink:watch` da olsun.

### 7.2 Yapı ve örnek

```ink
// story/main.ink
INCLUDE ortak.ink
INCLUDE bolum01.ink
INCLUDE bolum02.ink
// …
-> b01_s0
```

```ink
// story/bolum01.ink — örnek (b01_s1 ve b01_s2'nin başı)
=== b01_s1 ===
# saat:23:16 # karart:1 # ac:1
# titresim # bildirim:bilinmeyen
Bilinmeyen Numara: Bunu okuyorsan eve dönme.
# adim_bekle:app_acik(mesajlar)
-> b01_s2

=== b01_s2 ===
# bekle:2
Bilinmeyen Numara: Sana bunu anlatacak zamanım yok.
# bekle:1.5
Bilinmeyen Numara: Ama 23:17'yi hatırlıyorsun.
# yaziyor_kes:bilinmeyen
* [Kimsin?] -> b01_sa
* [Mesajı sil] -> b01_sb
```

- Knot adları her bölüm dosyasında verilmiştir (`b01_s0`, `b01_sa`, `b01_son` …).
- Seçimlerde `[ ]` içindeki metin **giden mesaj balonu** olur. Balona gitmemesi gereken seçimler (ör. "Eve git", "Videoyu tekrar izle") için seçim metninin başına `>` koy: `* [>Eve git]` → Director bunu eylem butonu olarak gösterir, mesaj göndermez.
- Bölüm sonu: `# kendime_not:KN_B01` ardından iki seçim (Kendime Not'un son cümlesi), sonra `# bolum_sonu:1`.

### 7.3 Yer tutucular

Gerçek varlık gelene kadar oyun çalışmalıdır:
- **Fotoğraf/oda:** Koyu zemin üzerinde ID yazan düz görsel; hotspot'lar `__DEV__` modunda yarı saydam kutu olarak görünür.
- **Video:** Siyah ekran + altyazılar + doğru süre.
- **Ses kaydı:** Doğru süre kadar sessizlik + altyazı.
- `scripts/make-placeholders.ts`, `03_VARLIK_LISTESI.md`'deki ID'lerden eksik olanları üretir ve `assetMap.ts`'i günceller.
- Hangi varlıkların hâlâ yer tutucu olduğunu Debug panelinde listele.

---

## 8. ÖZEL MEKANİKLER — UYGULAMA NOTLARI

### 8.1 Mesajlar
- `FlashList`, ters sıralı değil; yeni mesajda en alta kaydır (oyuncu yukarıdaysa kaydırma, "yeni mesaj" rozeti göster).
- "Yazıyor..." göstergesi: karşı taraf için balon içinde üç nokta animasyonu. `yaziyor_kes` belirip kaybolur.
- Silme glitch'i (A-35): balon kaybolur → 300 ms glitch → aynı yerde geri gelir.
- Kişi adı değişimi (A-36): üst başlıkta harf harf "yeniden yazılma" animasyonu.

### 8.2 Galeri ve hotspot'lar
- `ZoomableImage` bileşeni: pinch + pan + çift dokunuşla yakınlaştırma (gesture-handler + Reanimated).
- Dokunma koordinatı, mevcut zoom/kaydırmaya göre **görsele göre normalize** edilip hotspot dikdörtgenleriyle karşılaştırılır. `minZoom` olan hotspot'lar o zoom seviyesinin altında yok sayılır.
- Bulunan hotspot'ta kısa bir halka animasyonu ve Emir yorumu (alt kısımda iç ses balonu).
- Bilgi paneli: yukarı kaydırınca açılır; "Çekim / Eklenme / Cihaz / Mod" satırları.

### 8.3 Ses kayıtları ve video
- Dalga formu: gerçek analiz gerekmez; kayıt verisinde önceden hesaplanmış genlik dizisi (ya da tohumlu rastgele) yeterli.
- Bozuk kayıt (B10): veri dosyasında `noiseSegments`; oyuncu o aralığı atlayınca/bir kez dinleyince netleşen parçalar açılır.
- Video: `expo-video` ile; yavaşlatma `playbackRate`, duraklat-yakınlaştır için durdurulan anın görüntüsü yerine **önceden hazırlanmış yüksek çözünürlüklü kare** (`VID_B14_HAM_FRAME_YANSIMA.jpg` gibi) kullanmak daha güvenilir.
- Sessiz aralık (B14 41 sn): videonun ses izi gerçekten sessiz olsun **ve** oyunun ambiyansı `sessizlik_tam` ile kesilsin.

### 8.4 İpucu panosu
- Kartlar serbestçe sürüklenir; bir kart başka bir kartın üzerine bırakılınca `combinesWith` kontrol edilir.
- Eşleşme yoksa kart hafifçe geri seker, Emir yorum yapmaz (oyuncuyu cezalandırma).
- Otomatik bağlanma (B08, B16): kartlar ekranda dizilir, aralarına çizgiler çizilir (Skia ya da SVG).

### 8.5 Oda keşfi
- Oda tam ekran görsel + nesne dikdörtgenleri. Dokunma: yorum, yakın plan, aç (çekmece: iki dokunuş), sürükle (dolap: yatay sürükleme eşiği), kaldır (fincan).
- Odalar arası geçiş: kenar okları.

### 8.6 Ekran görüntüsü (B04)
- `expo-screen-capture` ile oyuncunun **gerçek** ekran görüntüsü alması algılanır; 22:59 fotoğrafı açıkken 5 sn içinde alınırsa kanıt kaydedilir. Bu, oyunun "gerçek telefon" hissini çok güçlendirir.
- Bazı cihaz/sürümlerde algılama çalışmayabilir; **yedek olarak** fotoğraf ekranında oyun içi bir "ekran görüntüsü" düğmesi de olsun (B02'de küçük bir öğreticiyle tanıtılır).

### 8.7 Geri yükleme seli (B09 Final 2, B16)
- Sayaç 214 → 3.861'e ~4 sn'de yükselir; galeri ızgarası hızla dolar. Binlerce gerçek görsel yüklenmez: 60 dolgu görseli döngüyle tekrar kullanılır, `FlashList` yalnızca görünenleri çizer.
- Akışta 4 "seçilebilir kare" kısa süre parlar; dokunulabilir ama açılmaz.

### 8.8 Flashback ve glitch
- M2–M3'te: Reanimated ile opaklık, renk katmanı (soluk sepya/mavi yarı saydam overlay) ve kısa yatay kaydırma sarsıntısı yeterli.
- M4 cilasında: Skia ile gerçek glitch shader'ı (RGB ayrışma, tarama çizgileri, gren).

### 8.9 İsteğe bağlı fikir: gerçek 23:17
Ayarlarda kapalı varsayılan bir "Gerçek zaman modu": oyuncu izin verirse bir sonraki bölüm, gerçek saatle 23:17'de yerel bildirimle başlar (`expo-notifications`). **Kapsam dışıdır**; Birinci Perde yayınlandıktan sonra kullanıcıyla konuşulacak.

---

## 9. A-GÖREVLERİ EŞLEME TABLOSU (Unity → React Native)

`01_ALTYAPI.md`'deki görev ID'leri aynen kullanılır; yalnızca uygulama biçimi değişir. Tabloda olmayan görevler doğrudan uygulanır.

| ID | Unity'deki ifade | React Native karşılığı |
|---|---|---|
| A-01 | Unity 2D proje | `npx create-expo-app` (TypeScript şablonu), `app.json`'da `orientation: "portrait"` |
| A-02 | Git + LFS | Git; büyük medya için LFS. `.gitignore` Expo şablonu |
| A-03 | TextMeshPro + Türkçe font atlası | `expo-font` ile iki font; "ç ğ ı İ ö ş ü Ç Ğ Ö Ş Ü" test ekranı |
| A-04 | ink-unity-integration | `inkjs` + `scripts/compile-ink.ts` + `npm run ink` |
| A-05 | Unity klasör yapısı | Bu dosyanın Bölüm 3'ü |
| A-06 | Tek sahne, `Telefon` kök objesi | Tek `<Phone/>` kök bileşeni, navigasyon kütüphanesi yok |
| A-10 | OyunDurumu sınıfı | `state/gameStore.ts` (zustand + persist) |
| A-11 | SahteSaat | `engine/clock.ts` |
| A-12 | Yönetmen | `engine/Director.ts` + `engine/tags.ts` |
| A-13 | Konuşmacı ayrıştırma | `engine/speakers.ts` + `data/contacts.ts` |
| A-14 | Adım/Koşul | `engine/conditions.ts` + `engine/events.ts` |
| A-15 | JSON kayıt | `engine/save.ts` + AsyncStorage |
| A-17 | Hata ayıklama paneli | `debug/DebugPanel.tsx` (`__DEV__`), ekranın sağ üst köşesine 3 hızlı dokunuşla açılır |
| A-24 | `Handheld.Vibrate` | `expo-haptics` + Reanimated ekran sarsıntısı |
| A-27, A-28 | Shader/sprite glitch, filtre | Önce Reanimated overlay; M4'te Skia (8.8) |
| A-40, A-48 | Galeri ızgarası, geri yükleme | `FlashList` + `expo-image` (8.7) |
| A-41, A-43 | Zoom/pan, hotspot | gesture-handler + Reanimated `ZoomableImage` (8.2) |
| A-47 | Ekran görüntüsü | `expo-screen-capture` + yedek buton (8.6) |
| A-54–A-57 | Ses kayıtları | `expo-audio` + önceden hesaplı dalga formu (8.3) |
| A-58–A-61 | Video | `expo-video`, `playbackRate`, hazır kareler (8.3) |
| A-62–A-65 | Harita, kamera, güvenlik kamerası | Stilize harita görseli + mutlak konumlu pinler; kamera/güvenlik akışı = döngü video ya da görsel + Reanimated titreme/gren |
| A-72 | İkinci telefon modu | `uiStore.activeDevice: 'main' \| 'second'`; ikinci telefonun kendi teması ve uygulama listesi |
| A-73 | Oda keşfi | `apps/room/` (8.5) |
| A-74 | Güç tuşu / kaydırarak kapat | Oyun içi sahte güç menüsü (5.1) |
| A-80–A-85 | İpucu panosu | gesture-handler sürükle-bırak + Skia/SVG çizgiler (8.4) |
| A-93 | Ana menü | Oyun içi "Ayarlar" görünümlü ekran |
| A-94 | Ses yöneticisi | `engine/audio.ts` (4.9) |
| A-96 | Yerelleştirme | `i18n/tr.ts`; Ink metni ayrı |
| A-104 | Ekran boyutları | Expo Go'da küçük Android + büyük telefon; tablet desteklenmez (`app.json` `supportsTablet: false` iOS için) |
| A-106 | Mağaza | EAS Build + EAS Submit; Android (Play Console) önce |

---

## 10. KOD KURALLARI

- **TypeScript `strict: true`.** `any` yok; gerekiyorsa `unknown` + daraltma.
- **İsimlendirme:** Kod İngilizce (`Director`, `addClue`, `photoId`). Oyun içi ID'ler senaryodaki gibi (`FOTO_B01_SOKAK_2317`, `IPUCU_BINA17`, `GZ_A1`). Arayüz metinleri Türkçe, `i18n/tr.ts`'te.
- **Bileşenler küçük** (yaklaşık 150 satırı geçerse böl). Her uygulama kendi klasöründe: `index.tsx` + alt bileşenler.
- **Motor saf kalır:** `engine/` içinde React yok, `Date.now()` yok (saat `clock.ts`'ten), rastgelelik tohumlu.
- **Biçimlendirme:** Prettier + ESLint (Expo varsayılanı).
- **Testler:** `__tests__/engine/*` zorunlu: etiket ayrıştırma (özellikle `saat:23:16`), her etiketin işleyicisi, koşullar, kayıt/yükleme, konuşmacı ayrıştırma, `>` eylem seçimi.
- **Performans:** Liste öğeleri `memo`; görseller `expo-image` ile; büyük medya yalnızca gerektiğinde yüklenir.

---

## 11. TELEFONDA TEST VE YAYIN

**Geliştirme:**
1. Bilgisayarda `npm start` → terminalde QR kod çıkar.
2. Telefonda **Expo Go** ile QR'ı okut → oyun açılır. Kod kaydedildikçe telefonda güncellenir.
3. Bilgisayar ve telefon aynı Wi-Fi ağında olmalı (olmazsa `npm start -- --tunnel`).

**Yayın (M4):**
1. `eas build --platform android` → Play Store için `.aab`.
2. Önce Play Console'da **dahili test** kanalı; 5–10 kişiye.
3. iOS için Apple geliştirici hesabı gerekir; EAS Mac olmadan da iOS derleyebilir, ama mağaza süreci için hesap şart.

---

## 12. İLK OTURUM İÇİN CHECKLIST (M0)

Asistan, kullanıcıyla ilk oturumda şunları sırayla yapmalı:

- [ ] Kullanıcının bilgisayarında **Node.js LTS** ve **Git** kurulu mu, kontrol et (`node -v`, `git --version`); değilse kurulum adımlarını işletim sistemine göre tarif et.
- [ ] Telefonuna **Expo Go**'yu kurmasını iste.
- [ ] `npx create-expo-app last-message` (TypeScript), Bölüm 2'deki paketleri `npx expo install` ile ekle, kullanıcıya hangi sürümlerin geldiğini bildir.
- [ ] Bölüm 3'teki klasör yapısını oluştur; `docs/` altına bütün md dosyalarını ve senaryoyu koy; bu dosyayı `CLAUDE.md` olarak köke kopyala.
- [ ] `TASKS.md`'yi oluştur (0.2).
- [ ] Fontları ekle, Türkçe karakter test ekranı yap.
- [ ] `story/test.ink` → derle → bir mesaj balonunda **"Bunu okuyorsan eve dönme."** göster.
- [ ] Kullanıcı bunu **kendi telefonunda** gördüğünde M0 tamam. İlk commit.

Ardından M1: `engine/` çekirdeği (A-10 … A-17) ve telefon kabuğu (A-20 … A-26, A-29).
