import Icon from './Icon.jsx';
import { waLink } from '../lib/bot.js';

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
          Hai! Aku Tsukasa. Ketik <b>.menu</b> untuk lihat semua fitur.
        </div>
        <div className="bubble bubble--out">.menu</div>
        <div className="bubble bubble--in bubble--mono">
          <span className="menu-title">╭─〔 Tsukasa 〕</span>
          <span>│ Total Cmd : 2.3rb</span>
          <span>│ Kategori : 72</span>
          <span className="menu-title">╰──────────</span>
          <span className="menu-gap" />
          <span className="menu-title">╭─〔 AI &amp; VISION 〕</span>
          <span>│ .gambar</span>
          <span>│ .rangkum</span>
          <span>│ .tts</span>
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
            <span className="dot dot--on" />
            Bot WhatsApp aktif 24/7
          </span>
          <h1 className="hero__title">
            Satu bot untuk
            <br />
            <span className="grad">seluruh grup kamu.</span>
          </h1>
          <p className="hero__lead">
            Anime, sticker, downloader, game grup, AI, sampai moderasi. Tsukasa
            mengumpulkan semuanya dalam satu nomor WhatsApp — cukup panggil{' '}
            <code>.menu</code>.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={waLink('.menu')} target="_blank" rel="noreferrer">
              Coba sekarang
              <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn--ghost" href="#fitur">
              Lihat fitur
            </a>
          </div>
          <p className="hero__note">
            Gratis dipakai. Tanpa instal aplikasi — langsung dari WhatsApp.
          </p>

          <dl className="hero__stats">
            <div>
              <dt>2.300+</dt>
              <dd>command</dd>
            </div>
            <div>
              <dt>72</dt>
              <dd>kategori</dd>
            </div>
            <div>
              <dt>24/7</dt>
              <dd>online</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__ring" aria-hidden="true" />
          <ChatMock />
          <div className="float-card float-card--a">
            <Icon name="bolt" size={18} />
            <span>Respon cepat</span>
          </div>
          <div className="float-card float-card--b">
            <Icon name="shield" size={18} />
            <span>Moderasi grup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
