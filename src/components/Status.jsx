import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { fetchBotStatus, formatUptime, formatNumber } from '../lib/bot.js';

const REFRESH_MS = 30000;

function Metric({ icon, label, value, muted }) {
  return (
    <div className="metric">
      <span className="metric__icon">
        <Icon name={icon} size={17} />
      </span>
      <span className="metric__body">
        <span className="metric__label">{label}</span>
        <span className={`metric__value ${muted ? 'is-muted' : ''}`}>{value}</span>
      </span>
    </div>
  );
}

export default function Status() {
  const [data, setData] = useState({ online: false, configured: false });
  const [loading, setLoading] = useState(true);
  const [sync, setSync] = useState(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let alive = true;
    let ctrl = null;

    const run = async () => {
      if (ctrl) ctrl.abort();
      ctrl = new AbortController();
      try {
        const res = await fetchBotStatus(ctrl.signal);
        if (!alive) return;
        setData(res);
        setSync(new Date());
      } catch {
        /* dibatalkan atau gagal; status tetap dari data terakhir */
      } finally {
        if (alive) setLoading(false);
      }
    };

    run();
    const id = setInterval(run, REFRESH_MS);
    return () => {
      alive = false;
      if (ctrl) ctrl.abort();
      clearInterval(id);
    };
  }, [tick]);

  const online = Boolean(data.online);
  const configured = Boolean(data.configured);
  const counters = data.counters || {};
  const statusText = !configured ? 'Belum dikonfigurasi' : online ? 'Online' : 'Tidak terjangkau';
  const statusClass = !configured ? 'is-idle' : online ? 'is-on' : 'is-off';

  return (
    <section className="section section--alt" id="status">
      <div className="container">
        <div className="status">
          <Reveal className="status__copy">
            <span className="eyebrow">Status live</span>
            <h2 className="section__title">Angka dari bot, bukan dari caption.</h2>

            <div className={`status__badge ${statusClass}`}>
              <span className="dot" />
              <span>{loading && !sync ? 'Menghubungkan…' : statusText}</span>
              {online && data.waReady === false ? (
                <span className="status__hint">WA menyambung ulang</span>
              ) : null}
            </div>

            <button type="button" className="btn btn--ghost btn--sm" onClick={() => setTick((v) => v + 1)}>
              <Icon name="pulse" size={16} />
              Perbarui
            </button>
          </Reveal>

          <Reveal className="status__panel" delay={90}>
            <div className="status__row">
              <Metric
                icon="clock"
                label="Uptime"
                value={online ? formatUptime(data.uptimeSec) : '—'}
                muted={!online}
              />
              <Metric
                icon="chat"
                label="Pesan diproses"
                value={online ? formatNumber(counters.messages) : '—'}
                muted={!online}
              />
              <Metric
                icon="bolt"
                label="Command dipakai"
                value={online ? formatNumber(counters.commands) : '—'}
                muted={!online}
              />
              <Metric
                icon="users"
                label="Kategori fitur"
                value={online ? formatNumber(data.categories) : '—'}
                muted={!online}
              />
            </div>

            <div className="status__foot">
              <span>
                <Icon name="shield" size={15} />
                {online ? `Versi ${data.version || '—'}` : 'Menunggu koneksi'}
              </span>
              <span className={`status__dot ${statusClass}`} aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
