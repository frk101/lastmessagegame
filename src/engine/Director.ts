/**
 * Director (Yönetmen) — Ink hikâyesini satır satır oynatır.
 *
 *   1. story.Continue() ile bir satır al
 *   2. Satırın etiketlerini sırayla uygula (bekle, saat, yaziyor …)
 *   3. Satır metnini konuşmacısına göre ilgili yere gönder
 *   4. Hikâye seçime gelince seçimleri arayüze ver ve dur
 *
 * Mimari: docs/05_REACT_NATIVE_TEKNIK_REHBER.md §4.2
 * Bu dosya React import ETMEZ. Arayüzle yalnızca store'lar üzerinden konuşur.
 *
 * M0 durumu: saat, kisi, bekle, yaziyor, yaziyor_kes uygulandı.
 * Diğer etiketler tanınıyor ama "henüz uygulanmadı" uyarısı veriyor (A-12'de tamamlanacak).
 */
import { Story } from 'inkjs';
import { parseLine } from './speakers';
import { parseTags, type ParsedTag } from './tags';
import { clock } from './clock';
import { useGameStore } from '../state/gameStore';
import { useUiStore } from '../state/uiStore';
import type { ContactId } from '../data/contacts';
import { CONTACTS } from '../data/contacts';

export interface DirectorOptions {
  /** Bekleme sürelerinin çarpanı. Testlerde 0, oyunda ayarlardan (A-95). */
  timeScale?: number;
  /** Bilinmeyen etiket / konuşmacı uyarıları için. */
  warn?: (msg: string) => void;
}

type Handler = (tag: ParsedTag) => void | Promise<void>;

export class Director {
  private story: Story;
  private running = false;
  private readonly timeScale: number;
  private readonly warn: (msg: string) => void;
  private warned = new Set<string>();

  constructor(storyJson: string | object, options: DirectorOptions = {}) {
    this.story = new Story(typeof storyJson === 'string' ? storyJson : JSON.stringify(storyJson));
    this.timeScale = options.timeScale ?? 1;
    this.warn = options.warn ?? ((m) => __DEV__ && console.warn(m));
  }

  private wait(seconds: number): Promise<void> {
    const ms = Math.max(0, seconds * 1000 * this.timeScale);
    return ms === 0 ? Promise.resolve() : new Promise((r) => setTimeout(r, ms));
  }

  private get activeContact(): ContactId {
    return useGameStore.getState().activeContact;
  }

  private readonly handlers: Partial<Record<string, Handler>> = {
    saat: ({ args }) => clock.set(args[0] ?? ''),
    kisi: ({ args }) => {
      const id = args[0] as ContactId;
      if (id in CONTACTS) useGameStore.getState().setActiveContact(id);
      else this.warn(`[kisi] bilinmeyen kişi: ${args[0]}`);
    },
    bekle: ({ args }) => this.wait(Number(args[0] ?? 0)),
    yaziyor: async ({ args }) => {
      const id = (args[0] ?? this.activeContact) as ContactId;
      useUiStore.getState().setTyping(id, true);
      await this.wait(Number(args[1] ?? 1.5));
      useUiStore.getState().setTyping(id, false);
    },
    yaziyor_kes: async ({ args }) => {
      const id = (args[0] ?? this.activeContact) as ContactId;
      useUiStore.getState().setTyping(id, true);
      await this.wait(1.2);
      useUiStore.getState().setTyping(id, false);
      await this.wait(0.6);
    },
  };

  private async applyTag(tag: ParsedTag) {
    const h = this.handlers[tag.name];
    if (h) return h(tag);
    if (!this.warned.has(tag.name)) {
      this.warned.add(tag.name);
      this.warn(`[etiket] #${tag.name} henüz uygulanmadı (bkz. docs/02_ETIKET_SOZLUGU.md)`);
    }
  }

  private deliver(text: string) {
    const line = parseLine(text);
    const game = useGameStore.getState();
    switch (line.kind) {
      case 'incoming': {
        const id = line.contactId ?? this.activeContact;
        if (!line.contactId) this.warn(`[konuşmacı] tanınmayan: "${line.speaker}"`);
        game.addMessage({ contactId: id, from: 'them', text: line.text });
        return;
      }
      case 'outgoing':
        game.addMessage({ contactId: this.activeContact, from: 'me', text: line.text });
        return;
      case 'system':
        game.addMessage({ contactId: this.activeContact, from: 'system', text: line.text });
        return;
      case 'direction':
        return; // sahne yönergesi, oyuncuya gösterilmez
      default:
        // inner / caption / note: M1'de ilgili arayüzlere bağlanacak (A-53, A-59, A-50)
        this.warn(`[satır] ${line.kind} türü henüz gösterilmiyor: ${line.text}`);
    }
  }

  async run(): Promise<void> {
    if (this.running) return;
    this.running = true;
    try {
      while (this.story.canContinue) {
        const text = (this.story.Continue() ?? '').trim();
        for (const tag of parseTags(this.story.currentTags)) await this.applyTag(tag);
        if (text) this.deliver(text);
      }
      const choices = this.story.currentChoices.map((c) => c.text);
      if (choices.length) useUiStore.getState().showChoices(choices);
    } finally {
      this.running = false;
    }
  }

  /** Oyuncu bir seçime dokundu. Seçim metni giden balon olur (">" ile başlayanlar hariç). */
  choose(index: number): Promise<void> {
    const choice = this.story.currentChoices[index];
    if (!choice) return Promise.resolve();
    useUiStore.getState().clearChoices();
    if (!choice.text.startsWith('>')) {
      useGameStore
        .getState()
        .addMessage({ contactId: this.activeContact, from: 'me', text: choice.text });
    }
    this.story.ChooseChoiceIndex(index);
    return this.run();
  }

  get isRunning() {
    return this.running;
  }
}
