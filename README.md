# tsukasa-web

Landing page untuk bot WhatsApp **Tsukasa**. Dibuat dengan React + Vite, tema
pastel ungu, dan panel status live yang membaca HTTP API bot.

## Menjalankan lokal

```bash
npm install
cp .env.example .env
npm run dev
```

Buka `http://localhost:5173`.

## Environment

| Variabel | Wajib | Keterangan |
| --- | --- | --- |
| `VITE_BOT_API_URL` | tidak | URL publik HTTP API bot, tanpa garis miring di akhir. Kalau kosong, dipakai `https://bot.goyomi.my.id`. |
| `VITE_BOT_NUMBER` | tidak | Override manual nomor WhatsApp bot. Normalnya nomor dideteksi otomatis dari `GET /status` (`botNumber`). |
| `VITE_CHANNEL_URL` | tidak | Link channel WhatsApp yang ditampilkan di footer. |

Semua variabel dibaca saat build. Di Vercel, isi lewat **Project → Settings →
Environment Variables**, lalu redeploy.

## Menghubungkan ke bot

Landing page memanggil:

```
GET {VITE_BOT_API_URL}/status
```

Endpoint ini harus mengembalikan JSON publik (tanpa API key) dalam bentuk:

```json
{
  "ok": true,
  "bot": "Tsukasa",
  "version": "1.0.0",
  "botNumber": "6285600575853",
  "uptimeSec": 12345,
  "waReady": true,
  "categories": 72,
  "commands": 2327,
  "features": 15,
  "counters": { "messages": 1200, "commands": 340, "errors": 0 }
}
```

Bot juga perlu mengizinkan CORS dari domain landing page. Lihat
`HTTP_CORS_ORIGIN` di repo bot. Kalau `VITE_BOT_API_URL` kosong, situs memakai
`https://bot.goyomi.my.id`, jadi panel status tetap berjalan.

Nomor WhatsApp bot dideteksi otomatis dari field `botNumber` pada
`GET /status`. Semua tombol **Chat bot** dan tautan `wa.me` memakai nomor hasil
deteksi itu, tanpa perlu mengisi `VITE_BOT_NUMBER`.

## Build & deploy

```bash
npm run build
npm run preview
```

Deploy ke Vercel:

1. Import repo `tsukasa-web` di Vercel.
2. Framework terdeteksi otomatis sebagai **Vite**.
3. Isi environment variables di atas.
4. Deploy.

`vercel.json` sudah menyetel `outputDirectory` ke `dist` dan rewrite SPA.

## Struktur

```
src/
  App.jsx              susunan section
  data.js              konten fitur, command, FAQ
  lib/bot.js           akses API + helper format
  lib/useReveal.js     animasi muncul saat scroll
  components/          Nav, Hero, Features, Commands, Status, Faq, Cta, Footer
  styles.css           seluruh styling (tanpa framework CSS)
```

## Lisensi

MIT.
