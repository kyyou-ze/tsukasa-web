// Sumber tunggal nomor WhatsApp bot. Nilai awalnya dari env Vite (opsional),
// lalu diperbarui otomatis dari field `botNumber` pada GET /status. Dengan
// begitu semua tautan wa.me ikut berubah tanpa perlu mengisi nomor manual.

const FALLBACK_NUMBER = '6283117176441';

let current =
  String(import.meta.env.VITE_BOT_NUMBER || '').replace(/\D+/g, '') || FALLBACK_NUMBER;

const listeners = new Set();

export function getBotNumber() {
  return current;
}

export function setBotNumber(raw) {
  const next = String(raw || '').replace(/\D+/g, '');
  if (!next || next === current) return;
  current = next;
  for (const listener of listeners) {
    try {
      listener();
    } catch {
      /* listener rusak tidak boleh menghentikan yang lain */
    }
  }
}

export function subscribeBotNumber(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Format nomor jadi teks yang enak dibaca, mis. +62 831-1717-6441. */
export function formatBotNumber(raw) {
  const n = String(raw || '').replace(/\D+/g, '');
  if (!n) return '';
  if (n.length >= 12) return `+${n.slice(0, 2)} ${n.slice(2, 5)}-${n.slice(5, 9)}-${n.slice(9)}`;
  return `+${n}`;
}
