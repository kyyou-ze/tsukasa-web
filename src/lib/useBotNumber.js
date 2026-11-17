import { useSyncExternalStore } from 'react';
import { getBotNumber, subscribeBotNumber } from './botInfo.js';

/** Hook nomor bot; komponen ikut render ulang saat nomor terdeteksi. */
export function useBotNumber() {
  return useSyncExternalStore(subscribeBotNumber, getBotNumber, getBotNumber);
}
