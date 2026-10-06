/**
 * SahteSaat — oyunun saati gerçek saatten bağımsızdır.
 * M0: yalnızca ayarlama. M1'de (A-11) akış, waitUntil ve tarih eklenecek.
 */
import { useGameStore } from '../state/gameStore';

const HHMM = /^([01]\d|2[0-3]):([0-5]\d)$/;

export function isValidTime(hhmm: string): boolean {
  return HHMM.test(hhmm);
}

export const clock = {
  set(hhmm: string) {
    if (!isValidTime(hhmm)) {
      if (__DEV__) console.warn(`[saat] geçersiz saat: ${hhmm}`);
      return;
    }
    useGameStore.getState().setClock(hhmm);
  },
  now(): string {
    return useGameStore.getState().clock;
  },
};
