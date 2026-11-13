import Icon from './Icon.jsx';
import { BOT_DISPLAY, waLink } from '../lib/bot.js';

function ChatMock() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone__bar">
        <span className="phone__time">09:41</span>
        <span className="phone__dots">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="phone__head">
        <span className="avatar">月</span>
        <span className="phone__who">
          <strong>Tsukasa</strong>
          <small>
            <span className="dot dot--on" /> online
          </small>
        </span>
        <Icon name="chat" size={18} className="phone__icon" />
      </div>
      <div className="phone__body">
        <div className="bubble bubble--in">
          Ketik <b>.menu</b> buat lihat semua perintah.
        </div>
        <div className="bubble bubble--out">.menu</div>
        <div className="bubble bubble--in bubble--mono">
          <span className="menu-title">╭─〔 Tsukasa 〕</span>
          <span>│ User: kamu</span>
          <span>│ Runtime: 3h 12m</span>
          <span>│ Prefix: .</span>
          <span>│ Total Cmd: 2327</span>
          <span className="menu-title">╰──────────</span>
          <span className="menu-gap" />
          <span className="menu-title">╭─〔 STICKER 〕</span>
          <span>│ .s</span>
          <span>│ .brat</span>
          <span>│ .toimg</span>
          <span>│ .ttp</span>
          <span className="menu-title">╰──────────</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="atas">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="pill">
            <Icon name="chat" size={14} />
            Nomor bot · {BOT_DISPLAY}
          </span>
          <h1 className="hero__title">
            Bikin sticker,
            <br />
            unduh video,
            <br />
            atur grup.
          </h1>
          <p className="hero__lead">
            Tsukasa jalan di nomor WhatsApp biasa, bukan aplikasi baru. Ketik{' '}
            <code>.menu</code> untuk lihat 75 kategori perintah, lalu{' '}
            <code>.help &lt;perintah&gt;</code> kalau bingung cara pakainya.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={waLink('.menu')} target="_blank" rel="noreferrer">
              Chat bot
              <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn--ghost" href="#command">
              Lihat perintah
            </a>
          </div>
          <p className="hero__note">Tanpa instal aplikasi, tanpa daftar akun.</p>

          <div className="hero__try">
            <span className="hero__try-label">Coba dulu</span>
            <ul>
              <li>
                <code>.s</code>
                <span>gambar atau video jadi sticker</span>
              </li>
              <li>
                <code>.tiktok</code>
                <span>unduh video tanpa watermark</span>
              </li>
              <li>
                <code>.tagall</code>
                <span>tag semua anggota grup</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero__visual">
          <span className="hero__ring" aria-hidden="true" />
          <ChatMock />
          <span className="float-card float-card--a">
            <Icon name="sticker" size={15} />
            44 command sticker
          </span>
          <span className="float-card float-card--b">
            <Icon name="dice" size={15} />
            RPG &amp; game grup
          </span>
        </div>
      </div>
    </section>
  );
}
