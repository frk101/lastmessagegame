# 02 — ETİKET SÖZLÜĞÜ

Ink metnine yazılan `#` etiketleri, Yönetmen'in (A-12) telefona verdiği komutlardır. Hikâye yazarken yalnızca bu listeyi kullan; yeni bir etiket gerekirse önce buraya ekle, sonra kodla.

Bir satırda birden fazla etiket olabilir. Etiketler satır metninden **önce** uygulanır.

## Zaman ve bekleme

| Etiket | Örnek | Ne yapar |
|---|---|---|
| `saat:HH:MM` | `# saat:23:16` | SahteSaat'i ayarlar. |
| `tarih:GG.AA.YYYY` | `# tarih:14.08.2026` | Tarihi değiştirir (flashback). |
| `saat_akis:gercek/dur` | `# saat_akis:gercek` | Saat gerçek zamanlı akar / durur. |
| `bekle:sn` | `# bekle:3` | Ink ilerlemeden önce bekler. |
| `saat_bekle:HH:MM` | `# saat_bekle:23:17` | SahteSaat o dakikaya gelene kadar bekler. |
| `geri_sayim:sn` | `# geri_sayim:60` | Ortada sayaç başlatır (A-75). |

## Mesajlar

| Etiket | Örnek | Ne yapar |
|---|---|---|
| `kisi:ID` | `# kisi:bilinmeyen` | Sonraki satırlar bu konuşmaya gider (konuşmacı adı yazılmazsa). |
| `yaziyor:ID:sn` | `# yaziyor:m:2` | Karşı tarafın "yazıyor..." göstergesi. |
| `yaziyor_kes:ID` | `# yaziyor_kes:deniz` | Gösterge belirip kaybolur, mesaj gelmez. |
| `foto_gonder:ID:FOTO` | `# foto_gonder:bilinmeyen:FOTO_B01_SOKAK_2317` | Fotoğraf balonu gönderir (ve galeriye ekler). |
| `ad_degistir:ID:YENI_AD` | `# ad_degistir:bilinmeyen:M.` | Kişi adı animasyonla değişir. |
| `durum:ID:DURUM` | `# durum:deniz:iletilemedi` | Son giden mesajın durumu. |
| `sil_glitch` | `# sil_glitch` | Son mesajı silmeye çalışır, glitch, geri gelir. |
| `sabitle:MESAJ_ID` | `# sabitle:B08_EMIR_SON` | Mesajı en üste sabitler. |
| `emir_ic:METIN` | satır olarak `Emir — Not: …` | İç ses balonu (A-53). |

Konuşmacı biçimi: `Deniz: metin`, `M.: metin`, `Emir: metin` (giden), `Sistem: metin` (sistem uyarısı), `Emir — Not: metin` (iç ses), `Emir — Video: …`, `Emir — Kayıt: …` (medya içi altyazı).

## Bildirim, titreşim, ekran

| Etiket | Ne yapar |
|---|---|
| `titresim` | Titreşim + sarsıntı (A-24). |
| `bildirim:ID` | Sonraki mesajı bildirim olarak gösterir. |
| `kilit_ekrani` / `ana_ekran` | İlgili ekrana döner. |
| `karart:sn` / `ac:sn` | Siyaha fade / siyahtan fade. |
| `telefon_kapan` / `telefon_ac` | Kapanma/açılış animasyonu. |
| `glitch:tip` | `mesaj`, `flashback`, `kisa`. |
| `flashback:basla` / `flashback:bitir` | Flashback modu (A-28). |
| `sinyal:0-4` / `sarj:yuzde` | Durum çubuğu. |
| `app_ac:APP` | Uygulamayı açar (`galeri`, `notlar`, `ses`, `video`, `harita`, `dosyalar`, `ayarlar`, `telefon`, `pano`, `kamera`, `oda`). |
| `app_goster:APP` | Ana ekranda ikonu görünür yapar. |
| `yonlendir:APP:ID` | Uygulamayı belirli öğede açar (`# yonlendir:galeri:FOTO_B01_SOKAK_2317`). |
| `ikinci_telefon:ac/kapat` | İkinci telefon modu (A-72). |

## Varlık ekleme

| Etiket | Ne yapar |
|---|---|
| `galeri_ekle:FOTO` | Fotoğrafı galeriye ekler (sessiz). |
| `not_ekle:NOT` | Not ekler. |
| `ses_ekle:SES` / `video_ekle:VID` | Kayıt/video ekler. |
| `dosya_ekle:DOSYA` | Dosyalar'a ekler. |
| `arama_ekle:ARAMA` | Arama geçmişine satır ekler. |
| `ipucu:IPUCU` | Panoya kart ekler. |
| `ipucu_cevir:IPUCU` | Kartı ters çevirir (çözüm yüzü). |
| `gizli:GZ` | Gizli ipucunu işaretler (genelde hotspot/koşul otomatik yapar). |
| `geri_yukle` | Toplu geri yükleme (A-48). |

## Koşul bekleme

`# adim_bekle:KOŞUL` → koşul türleri A-14'te. Örnekler:

```ink
# adim_bekle:hotspot(FOTO_B02_SOKAK_2317,4)
# adim_bekle:pano(IPUCU_TABELA,IPUCU_BINA17)
# adim_bekle:sifre(TEL2_KILIT)
# adim_bekle:oda_obje(EV_YATAK,CEKMECE)
# adim_bekle:video_bitti(VID_2317_FINAL,2)
```

## Ses

| Etiket | Ne yapar |
|---|---|
| `ambiyans:ID` | Ambiyans katmanı (`sehir_gece`, `ofis_gece`, `oda_bos`, `araba_ic`, `deniz_kenari`). |
| `sfx:ID` | Tek efekt (`tik_merdiven`, `titresim`, `zil_gizli`, `kapi_kilit`, `cekmece`). |
| `muzik:ID` / `muzik:dur` | Müzik. |
| `sessizlik` | Müziği keser, yalnızca ambiyans kalır. |
| `sessizlik_tam` | Her şey kesilir. |

## Meta

| Etiket | Ne yapar |
|---|---|
| `guven:+1` / `guven:-1` | Güven Terazisi. |
| `kendime_not:NOT_ID` | Bölüm sonu Kendime Not ekranı (seçimler Ink'te). |
| `bolum_sonu:N` | Bölüm sonu ekranı + kayıt. |
| `final:1/2/3` | Birinci Perde finalini kaydeder. |
| `kayit` | Ara kayıt noktası. |
