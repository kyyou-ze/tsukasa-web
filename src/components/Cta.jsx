import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { waLink } from '../lib/bot.js';
import { useBotNumber } from '../lib/useBotNumber.js';

export default function Cta() {
  useBotNumber();
  return (
    <section className="section cta">
      <div className="container">
        <Reveal className="cta__inner">
          <span className="eyebrow">Mulai sekarang</span>
          <h2 className="cta__title">Mulai dari satu perintah.</h2>
          <p className="cta__lead">
            Simpan nomornya, kirim <code>.menu</code>. Kalau bingung,{' '}
            <code>.help &lt;perintah&gt;</code> menjelaskan cara pakainya.
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
