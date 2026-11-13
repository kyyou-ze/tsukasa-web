// Ikon garis sederhana (stroke) supaya konsisten dan tidak bergantung paket
// ikon eksternal.
const paths = {
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8',
  play: 'M8 5.5v13l11-6.5z',
  download: 'M12 4v10m0 0l-4-4m4 4l4-4M5 19h14',
  sticker: 'M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6l6-6V5a2 2 0 0 0-2-2zM13 21v-4a2 2 0 0 1 2-2h4',
  dice: 'M5 5h14v14H5zM9 9h.01M15 15h.01M12 12h.01',
  shield: 'M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z',
  check: 'M20 6L9 17l-5-5',
  news: 'M4 5h13v14H4zM17 8h3v9a2 2 0 0 1-3 2M7 9h7M7 12h7M7 15h4',
  wand: 'M15 4V2M15 10V8M11.5 6.5H9.5M20.5 6.5h-2M4 20l9-9M17.8 4.2l2 2M13.2 8.8l2 2',
  copy: 'M9 9h9v9H9zM6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  chat: 'M21 12a8 8 0 0 1-8 8H7l-4 3v-4.5A8 8 0 0 1 13 4a8 8 0 0 1 8 8z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  chevron: 'M6 9l6 6 6-6',
  github: 'M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.3-.3 4.5-1.2 4.5-5A4 4 0 0 0 18 8a3.7 3.7 0 0 0-.1-2.5s-1.2-.4-3.9 1.5a9.3 9.3 0 0 0-5 0C6.3 5.1 5.1 5.5 5.1 5.5A3.7 3.7 0 0 0 5 8a4 4 0 0 0-1 2.5c0 3.8 2.2 4.7 4.5 5-.6.6-.6 1.2-.5 2V21',
  bolt: 'M13 2L4 14h7l-1 8 9-12h-7z',
  users: 'M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20M9 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM22 20v-1.5a4 4 0 0 0-3-3.9M16 3.6a4 4 0 0 1 0 7',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  pulse: 'M3 12h4l2.5-7 4 14L16 12h5',
};

export default function Icon({ name, size = 20, className = '', strokeWidth = 1.7 }) {
  const d = paths[name] || paths.spark;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
