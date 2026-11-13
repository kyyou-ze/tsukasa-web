import { useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { faqs } from '../data.js';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section__title">Pertanyaan yang sering muncul</h2>
        </Reveal>

        <div className="faq">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal className={`faq__item ${isOpen ? 'is-open' : ''}`} delay={i * 40} key={item.q}>
                <button
                  type="button"
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <Icon name="chevron" size={18} className="faq__chevron" />
                </button>
                <div className="faq__a" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
