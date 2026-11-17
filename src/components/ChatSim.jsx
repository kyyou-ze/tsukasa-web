import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { waLink } from '../lib/bot.js';

const QUICK = ['.menu', '.s', '.tiktok', '.tagall', '.ai'];

const REPLIES = {
  '.menu': `╭─〔 Tsukasa 〕
│ User: kamu
│ Prefix: .
│ Total Cmd: 2381
╰──────────

╭─〔 STICKER 〕
│ .s  .brat  .ttp
│ .toimg  .spack
╰──────────

╭─〔 DOWNLOAD 〕
│ .tiktok  .ig  .yt
╰──────────

╭─〔 GRUP 〕
│ .tagall  .fitur
│ .antilink  .welcome
╰──────────

Ketik .help <perintah> untuk detail.`,
  '.s': `Kirim gambar atau video dengan caption *.s* (atau reply medianya), nanti langsung jadi sticker.

Contoh:
• Foto → sticker statis
• Video ≤ 10 detik → sticker bergerak
• .brat teks → sticker brat
• .ttp teks → sticker teks`,
  '.tiktok': `Kirim link TikTok, nanti bot unduh video tanpa watermark.

Contoh:
.tiktok https://vt.tiktok.com/xxxx/
.ig https://instagram.com/reel/xxxx/
.yt https://youtu.be/xxxx

Kalau link dikirim tanpa perintah, bot biasanya mendeteksi otomatis.`,
  '.tagall': `Perintah .tagall hanya jalan di grup dan khusus admin.

Contoh:
.tagall Rapat jam 8 ya
.tagall

Semua anggota akan ditandai. Gunakan secukupnya supaya grup tidak spam.`,
  '.ai': `Tentu! Aku bisa bantu menjelaskan perintah, merangkum teks, atau menjawab pertanyaan singkat.

Contoh:
.ai jelaskan fitur .fitur
.rangkum (reply teks panjang)
.info topik yang kamu mau`,
};

function normalize(input) {
  return String(input || '').trim().toLowerCase();
}

function replyFor(input) {
  const text = normalize(input);
  if (!text) return null;
  const cmd = text.split(/\s+/)[0];
  if (REPLIES[cmd]) return REPLIES[cmd];
  if (text.startsWith('.')) {
    return `Perintah *${cmd}* belum ada di simulasi ini.

Coba salah satu: ${QUICK.join('  ')}`;
  }
  return `Aku menerima: "${String(input).trim()}"

Di bot asli, pesan bebas seperti ini dijawab lewat AI kalau fitur AI aktif. Coba ketik .menu untuk lihat perintah, atau .ai untuk contoh balasan AI.`;
}

function TypingDots() {
  return (
    <span className="chat__typing" aria-label="Bot sedang mengetik">
      <i />
      <i />
      <i />
    </span>
  );
}

export default function ChatSim() {
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hai! Aku Tsukasa. Ini simulasi chat, jadi kamu bisa coba perintah tanpa membuka WhatsApp.',
    },
  ]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((id) => clearTimeout(id));
      timers.current = [];
    };
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  const send = (raw) => {
    const text = String(raw || '').trim();
    if (!text) return;
    const reply = replyFor(text);
    setMessages((prev) => [...prev.slice(-30), { from: 'user', text }]);
    setDraft('');
    if (!reply) return;

    setTyping(true);
    const wait = Math.min(1400, 600 + reply.length * 6);
    const id = setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev.slice(-30), { from: 'bot', text: reply }]);
    }, wait);
    timers.current.push(id);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(draft);
  };

  return (
    <section className="section section--alt" id="simulasi">
      <div className="container sim">
        <Reveal className="sim__copy">
          <span className="eyebrow">Simulasi chat</span>
          <h2 className="section__title">Coba perintahnya di sini dulu.</h2>
          <p className="sim__lead">
            Ini tiruan percakapan, bukan bot asli. Klik salah satu contoh atau
            ketik perintah sendiri untuk melihat bentuk balasannya.
          </p>

          <div className="sim__quick" role="group" aria-label="Contoh perintah">
            {QUICK.map((cmd) => (
              <button key={cmd} type="button" className="chip" onClick={() => send(cmd)}>
                {cmd}
              </button>
            ))}
          </div>

          <p className="sim__note">
            <Icon name="shield" size={15} />
            Balasan di sini hanya contoh. Hasil asli tergantung media dan
            pengaturan grup.
          </p>

          <a className="btn btn--primary" href={waLink('.menu')} target="_blank" rel="noreferrer">
            Coba di WhatsApp
            <Icon name="arrow" size={18} />
          </a>
        </Reveal>

        <Reveal className="sim__panel" delay={90}>
          <div className="chat">
            <div className="chat__head">
              <span className="avatar">月</span>
              <span className="chat__who">
                <strong>Tsukasa</strong>
                <small>
                  <span className="dot dot--on" /> bot whatsapp
                </small>
              </span>
              <span className="chat__badge">simulasi</span>
            </div>

            <div className="chat__body" ref={bodyRef} role="log" aria-live="polite">
              {messages.map((m, i) => (
                <div key={`${m.from}-${i}`} className={`chat__bubble chat__bubble--${m.from}`}>
                  {m.text}
                </div>
              ))}
              {typing ? (
                <div className="chat__bubble chat__bubble--bot chat__bubble--typing">
                  <TypingDots />
                </div>
              ) : null}
            </div>

            <form className="chat__form" onSubmit={onSubmit}>
              <input
                className="chat__input"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ketik .menu atau perintah lain…"
                aria-label="Pesan simulasi"
                autoComplete="off"
              />
              <button type="submit" className="chat__send" aria-label="Kirim pesan">
                <Icon name="arrow" size={18} />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
