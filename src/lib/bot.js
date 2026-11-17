// Akses konfigurasi & API bot. Semua nilai berasal dari environment Vite
// (VITE_*) supaya bisa diubah lewat dashboard Vercel tanpa mengubah kode.
// Fallback domain dipakai kalau env Vercel belum diisi saat build, supaya
// panel status tetap terhubung ke API bot.
const FALLBACK_API = 'https://bot.goyomi.my.id';
const rawApi = String(import.meta.env.VITE_BOT_API_URL || FALLBACK_API).trim();
export const BOT_API_URL = rawApi.replace(/\/+$/, '');

import { formatBotNumber, getBotNumber, setBotNumber } from './botInfo.js';

// Nomor bot dipakai tombol chat. Nilai bisa berubah otomatis setelah
// GET /status mengembalikan `botNumber` (lihat Status.jsx).
export { setBotNumber };

export function botNumber() {
  return getBotNumber();
}

export function botDisplay() {
  return formatBotNumber(getBotNumber());
}

export const CHANNEL_URL = String(import.meta.env.VITE_CHANNEL_URL || '').trim();

export function waLink(text) {
  const number = getBotNumber();
  const base = number ? `https://wa.me/${number}` : 'https://wa.me/';
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function hasApi() {
  return /^https?:\/\//i.test(BOT_API_URL);
}

/**
 * Ambil status publik bot. Mengembalikan objek dengan `online: false` bila
 * API belum dikonfigurasi atau tidak dapat dijangkau, jadi UI tetap aman.
 */
export async function fetchBotStatus(signal) {
  if (!hasApi()) {
    return { online: false, configured: false };
  }
  try {
    const res = await fetch(`${BOT_API_URL}/status`, {
      signal,
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });
    if (!res.ok) return { online: false, configured: true, error: `HTTP ${res.status}` };
    const data = await res.json();
    // Nomor bot dideteksi otomatis dari API, jadi semua tautan wa.me ikut
    // memakai nomor yang benar tanpa mengubah env Vercel.
    if (data && data.botNumber) setBotNumber(data.botNumber);
    return { ...data, online: true, configured: true };
  } catch (err) {
    if (err && err.name === 'AbortError') throw err;
    return { online: false, configured: true, error: 'unreachable' };
  }
}

export function formatUptime(seconds) {
  const s = Math.max(0, Math.floor(Number(seconds) || 0));
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d}h ${h}j`;
  if (h > 0) return `${h}j ${m}m`;
  return `${m}m ${s % 60}d`;
}

export function formatNumber(n) {
  const v = Number(n) || 0;
  if (v >= 1000000) return `${(v / 1000000).toFixed(1)}jt`;
  if (v >= 1000) return `${(v / 1000).toFixed(v >= 10000 ? 0 : 1)}rb`;
  return String(v);
}
