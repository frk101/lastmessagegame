import fs from 'node:fs';
import path from 'node:path';
import { Director } from '../../src/engine/Director';
import { useGameStore } from '../../src/state/gameStore';
import { useUiStore } from '../../src/state/uiStore';

const storyJson = fs.readFileSync(path.join(__dirname, '../../assets/story/story.json'), 'utf8');

beforeEach(() => {
  useGameStore.getState().reset();
  useUiStore.getState().clearChoices();
});

describe('Director (M0 hikâyesi)', () => {
  it('ilk mesajları gönderir, saati ayarlar ve seçimde durur', async () => {
    const d = new Director(storyJson, { timeScale: 0, warn: () => {} });
    await d.run();

    const msgs = useGameStore.getState().conversations.bilinmeyen ?? [];
    expect(msgs.map((m) => m.text)).toEqual([
      'Bunu okuyorsan eve dönme.',
      'Sana bunu anlatacak zamanım yok.',
      "Ama 23:17'yi hatırlıyorsun.",
    ]);
    expect(useGameStore.getState().clock).toBe('23:16');
    expect(useUiStore.getState().choices).toEqual(['Kimsin?', 'Mesajı sil']);
  });

  it('seçim giden balon olur ve hikâye devam eder', async () => {
    const d = new Director(storyJson, { timeScale: 0, warn: () => {} });
    await d.run();
    await d.choose(1);

    const texts = (useGameStore.getState().conversations.bilinmeyen ?? []).map((m) => [
      m.from,
      m.text,
    ]);
    expect(texts.slice(3)).toEqual([
      ['me', 'Mesajı sil'],
      ['them', 'Silmen bir şeyi değiştirmeyecek.'],
      ['them', 'Sildiğin hiçbir şey gitmez.'],
    ]);
    expect(useUiStore.getState().choices).toEqual([]);
  });
});
