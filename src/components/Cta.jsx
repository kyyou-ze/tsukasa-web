import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { waLink } from '../lib/bot.js';

export default function Cta() {
  return (
    <section className="section cta">
      <div className="container">
        <Reveal className="cta__inner">
          <span className="eyebrow">Mulai sekarang</span>
          <h2 className="cta__title">Grup kamu butuh Tsukasa.</h2>
          <p className="cta__lead">
            Simpan nomornya, kirim <code>.menu</code>, dan lihat sendiri. Gratis,
            tanpa instal aplikasi.
          </p>
          <a className="btn btn--primary btn--lg" href={waLink('.menu')} target="_blank" rel="noreferrer">
            Chat Tsukasa
            <Icon name="arrow" size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
