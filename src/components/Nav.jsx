import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { navLinks } from '../data.js';
import { waLink } from '../lib/bot.js';
import { useBotNumber } from '../lib/useBotNumber.js';

export default function Nav() {
  useBotNumber();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a className="brand" href="#atas" aria-label="Tsukasa, kembali ke atas">
          <span className="brand__mark" aria-hidden="true">
            <span>月</span>
          </span>
          <span className="brand__text">
            Tsukasa
            <span className="brand__sub">bot whatsapp</span>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Navigasi utama">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--sm btn--primary nav__cta" href={waLink('.menu')} target="_blank" rel="noreferrer">
            Chat bot
            <Icon name="arrow" size={16} />
          </a>
        </nav>

        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
    </header>
  );
}
