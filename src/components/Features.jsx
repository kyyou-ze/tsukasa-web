import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { features } from '../data.js';

export default function Features() {
  return (
    <section className="section" id="fitur">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Fitur</span>
          <h2 className="section__title">Yang paling sering dipakai</h2>
          <p className="section__lead">
            Enam di bawah ini yang paling ramai. Daftar lengkapnya ada di{' '}
            <code>.menu</code>: 75 kategori, 2.327 perintah, dari sticker sampai RPG.
          </p>
        </Reveal>

        <div className="features">
          {features.map((f, i) => (
            <Reveal className="feature" delay={i * 45} key={f.title}>
              <span className="feature__icon">
                <Icon name={f.icon} size={20} />
              </span>
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__desc">{f.desc}</p>
              <div className="chips">
                {f.commands.map((c) => (
                  <code className="chip" key={c}>
                    {c}
                  </code>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
