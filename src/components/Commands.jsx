import { useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { commandGroups } from '../data.js';

export default function Commands() {
  const [active, setActive] = useState(commandGroups[0].id);
  const [copied, setCopied] = useState('');

  const group = commandGroups.find((g) => g.id === active) || commandGroups[0];

  const copy = async (cmd) => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(cmd);
      setTimeout(() => setCopied((v) => (v === cmd ? '' : v)), 1400);
    } catch {
      /* clipboard tidak tersedia */
    }
  };

  return (
    <section className="section section--alt" id="command">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Command</span>
          <h2 className="section__title">Perintah yang bisa langsung dicoba</h2>
          <p className="section__lead">
            Salin, kirim ke bot. Prefix <code>.</code> <code>!</code> <code>/</code>{' '}
            semuanya jalan; contoh di bawah pakai titik.
          </p>
        </Reveal>

        <Reveal className="commands">
          <div className="commands__tabs" role="tablist" aria-label="Kategori command">
            {commandGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={g.id === active}
                className={`tab ${g.id === active ? 'is-active' : ''}`}
                onClick={() => setActive(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>

          <div className="terminal" key={group.id}>
            <div className="terminal__bar">
              <span className="terminal__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="terminal__title">tsukasa / {group.label.toLowerCase()}</span>
            </div>
            <ul className="terminal__list">
              {group.items.map((item) => (
                <li className="cmd-row" key={item.cmd}>
                  <code className="cmd-row__code">{item.cmd}</code>
                  <span className="cmd-row__desc">{item.desc}</span>
                  <button
                    type="button"
                    className={`copy ${copied === item.cmd ? 'is-copied' : ''}`}
                    onClick={() => copy(item.cmd)}
                    aria-label={`Salin ${item.cmd}`}
                  >
                    <Icon name={copied === item.cmd ? 'check' : 'copy'} size={15} />
                    <span>{copied === item.cmd ? 'Tersalin' : 'Salin'}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
