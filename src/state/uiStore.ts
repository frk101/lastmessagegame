/**
 * Geçici arayüz durumu: seçim butonları, "yazıyor..." göstergesi.
 * Kayda yazılmaz.
 */
import { create } from 'zustand';
import type { ContactId } from '../data/contacts';

interface UiState {
  choices: string[];
  typing: Partial<Record<ContactId, boolean>>;
  showChoices: (choices: string[]) => void;
  clearChoices: () => void;
  setTyping: (id: ContactId, on: boolean) => void;
}

export const useUiStore = create<UiState>((set, get) => ({
  choices: [],
  typing: {},
  showChoices: (choices) => set({ choices }),
  clearChoices: () => set({ choices: [] }),
  setTyping: (id, on) => set({ typing: { ...get().typing, [id]: on } }),
}));
