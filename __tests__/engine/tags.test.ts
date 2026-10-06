import fs from 'node:fs';
import path from 'node:path';
import { KNOWN_TAGS, parseCall, parseTag, parseTags } from '../../src/engine/tags';

describe('parseTag', () => {
  it('saat etiketinde ":" işaretini argümanın içinde tutar', () => {
    expect(parseTag('saat:23:16')).toEqual({ raw: 'saat:23:16', name: 'saat', args: ['23:16'] });
  });

  it('iki argümanlı etiketleri ayırır', () => {
    expect(parseTag('yaziyor:m:2').args).toEqual(['m', '2']);
    expect(parseTag('foto_gonder:bilinmeyen:FOTO_B01_SOKAK_2317').args).toEqual([
      'bilinmeyen',
      'FOTO_B01_SOKAK_2317',
    ]);
  });

  it('argümansız etiketleri tanır', () => {
    expect(parseTag(' titresim ')).toEqual({ raw: 'titresim', name: 'titresim', args: [] });
  });

  it('kişi adındaki noktayı korur', () => {
    expect(parseTag('ad_degistir:bilinmeyen:M.').args).toEqual(['bilinmeyen', 'M.']);
  });

  it('boş etiketleri atar', () => {
    expect(parseTags(['', 'bekle:2'])).toHaveLength(1);
  });
});

describe('parseCall', () => {
  it('koşul ifadesini ayrıştırır', () => {
    expect(parseCall('hotspot(FOTO_B02_SOKAK_2317, 4)')).toEqual({
      type: 'hotspot',
      args: ['FOTO_B02_SOKAK_2317', '4'],
    });
    expect(parseCall('app_acik(galeri)')).toEqual({ type: 'app_acik', args: ['galeri'] });
  });
});

describe('etiket sözlüğü ile kod uyumu', () => {
  it('docs/02_ETIKET_SOZLUGU.md içindeki her etiket KNOWN_TAGS listesinde', () => {
    const md = fs.readFileSync(path.join(__dirname, '../../docs/02_ETIKET_SOZLUGU.md'), 'utf8');
    const names = new Set<string>();
    for (const line of md.split('\n')) {
      if (!line.startsWith('| `')) continue;
      const firstCell = line.split('|')[1] ?? '';
      for (const m of firstCell.matchAll(/`([^`]+)`/g)) {
        const name = (m[1] ?? '').split(':')[0]?.trim();
        if (name) names.add(name);
      }
    }
    const missing = [...names].filter((n) => !(KNOWN_TAGS as readonly string[]).includes(n));
    expect(missing).toEqual([]);
  });
});
