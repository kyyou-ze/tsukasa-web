import Icon from './Icon.jsx';
import { navLinks } from '../data.js';
import { CHANNEL_URL, waLink } from '../lib/bot.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="brand" href="#atas">
            <span className="brand__mark" aria-hidden="true">
              <span>月</span>
            </span>
            <span className="brand__text">
              Tsukasa
              <span className="brand__sub">bot whatsapp</span>
            </span>
          </a>
          <p className="footer__note">
            Bot WhatsApp untuk grup dan komunitas. Kode dan dokumentasinya terbuka
            di GitHub.
          </p>
        </div>

        <nav className="footer__links" aria-label="Tautan footer">
          <div>
            <h4>Navigasi</h4>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <h4>Lainnya</h4>
            <a href={waLink('.menu')} target="_blank" rel="noreferrer">
              Chat bot
            </a>
            {CHANNEL_URL ? (
              <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                Channel WhatsApp
              </a>
            ) : null}
            <a href="https://github.com/kyyou-ze/Bot-ai-yuzaki-tsukasa" target="_blank" rel="noreferrer">
              <Icon name="github" size={15} />
              Source bot
            </a>
          </div>
        </nav>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Tsukasa. Bukan produk resmi WhatsApp.</span>
        <span>Dibuat dengan React + Vite.</span>
      </div>
    </footer>
  );
}
