import Reveal from './Reveal.jsx';
import { steps } from '../data.js';

export default function HowItWorks() {
  return (
    <section className="section" id="cara">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Cara pakai</span>
          <h2 className="section__title">Tiga langkah, langsung jalan</h2>
        </Reveal>

        <div className="steps">
          {steps.map((s, i) => (
            <Reveal className="step" delay={i * 80} key={s.n}>
              <span className="step__n">{s.n}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
