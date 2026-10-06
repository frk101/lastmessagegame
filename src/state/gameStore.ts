/**
 * Kalıcı oyun durumu (zustand).
 *
 * M0: mesajlar ve saat. M1'de (A-10, A-15) docs/05 §4.7'deki tam GameState'e
 * genişletilecek ve AsyncStorage ile kalıcı hâle getirilecek.
 */
import { create } from 'zustand';
import type { ContactId } from '../data/contacts';

export interface Message {
  id: string;
  contactId: ContactId;
  from: 'them' | 'me' | 'system';
  text: string;
  time: string;
}

interface GameState {
  clock: string;
  activeContact: ContactId;
  conversations: Partial<Record<ContactId, Message[]>>;
  setClock: (hhmm: string) => void;
  setActiveContact: (id: ContactId) => void;
  addMessage: (msg: Omit<Message, 'id' | 'time'>) => void;
  reset: () => void;
}

let counter = 0;
const nextId = () => `m${Date.now().toString(36)}_${(counter++).toString(36)}`;

const initial = {
  clock: '23:05',
  activeContact: 'bilinmeyen' as ContactId,
  conversations: {},
};

export const useGameStore = create<GameState>((set, get) => ({
  ...initial,
  setClock: (clock) => set({ clock }),
  setActiveContact: (activeContact) => set({ activeContact }),
  addMessage: (msg) => {
    const list = get().conversations[msg.contactId] ?? [];
    const full: Message = { ...msg, id: nextId(), time: get().clock };
    set({ conversations: { ...get().conversations, [msg.contactId]: [...list, full] } });
  },
  reset: () => set(initial),
}));
