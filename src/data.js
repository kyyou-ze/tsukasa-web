// Konten landing page. Dipisah dari komponen supaya mudah diubah tanpa
// menyentuh layout.

export const features = [
  {
    icon: 'spark',
    title: 'AI & Vision',
    desc: 'Tanya jawab, buat gambar, rangkum teks, sampai baca isi gambar langsung dari chat.',
    commands: ['.gambar', '.rangkum', '.tts'],
  },
  {
    icon: 'play',
    title: 'Anime & Jadwal',
    desc: 'Cari anime, lihat jadwal rilis harian, rekomendasi musiman, dan unduh batch.',
    commands: ['.anime', '.animedl', '.animeschedule'],
  },
  {
    icon: 'download',
    title: 'Downloader',
    desc: 'Ambil video, musik, dan gambar dari berbagai platform populer dengan satu perintah.',
    commands: ['.tiktok', '.ytmp3', '.instagram'],
  },
  {
    icon: 'sticker',
    title: 'Sticker & Brat',
    desc: 'Bikin sticker dari gambar, video, atau teks. Lengkap dengan editor dan pack.',
    commands: ['.s', '.brat', '.toimg'],
  },
  {
    icon: 'dice',
    title: 'RPG & Game',
    desc: 'Ratusan game grup: catur, gaple, mafia, UNO, sampai sistem RPG dengan level.',
    commands: ['.rpg', '.ceme', '.mafia'],
  },
  {
    icon: 'shield',
    title: 'Moderasi Grup',
    desc: 'Antilink, antispam, mute, welcome, dan statistik keaktifan anggota.',
    commands: ['.antilink', '.welcome', '.topaktif'],
  },
  {
    icon: 'check',
    title: 'Verif TikTok',
    desc: 'Kelola daftar akun, pantau verifikasi, dan tampilkan profil anggota.',
    commands: ['.verif', '.listakun', '.me'],
  },
  {
    icon: 'news',
    title: 'Berita & Cosplay',
    desc: 'Feed berita anime, manga, gacha, dan post cosplay otomatis ke grup.',
    commands: ['.news', '.cosplay'],
  },
  {
    icon: 'wand',
    title: 'Canvas & Quote',
    desc: 'Quote card, edit gambar, dan efek visual tanpa keluar dari WhatsApp.',
    commands: ['.qc', '.blur', '.crop'],
  },
];

// Contoh command untuk panel interaktif. `group` menentukan tab.
export const commandGroups = [
  {
    id: 'mulai',
    label: 'Mulai',
    items: [
      { cmd: '.menu', desc: 'Buka katalog semua fitur.' },
      { cmd: '.menu <kategori>', desc: 'Lihat command dalam satu kategori.' },
      { cmd: '.menu cari <kata>', desc: 'Cari command berdasarkan nama.' },
      { cmd: '.help <command>', desc: 'Cara pakai sebuah command.' },
    ],
  },
  {
    id: 'media',
    label: 'Media',
    items: [
      { cmd: '.s', desc: 'Ubah gambar atau video jadi sticker.' },
      { cmd: '.brat <teks>', desc: 'Sticker brat dengan teks custom.' },
      { cmd: '.tts <teks>', desc: 'Ubah teks jadi voice note.' },
      { cmd: '.qc', desc: 'Buat quote card dari pesan yang di-reply.' },
    ],
  },
  {
    id: 'unduh',
    label: 'Unduh',
    items: [
      { cmd: '.animedl <judul>', desc: 'Unduh anime dari Kusonime.' },
      { cmd: '.tiktok <link>', desc: 'Ambil video TikTok tanpa watermark.' },
      { cmd: '.ytmp3 <link>', desc: 'Unduh audio dari YouTube.' },
      { cmd: '.instagram <link>', desc: 'Ambil media dari post Instagram.' },
    ],
  },
  {
    id: 'grup',
    label: 'Grup',
    items: [
      { cmd: '.tagall <pesan>', desc: 'Tag semua anggota grup.' },
      { cmd: '.antilink on', desc: 'Hapus pesan berisi tautan.' },
      { cmd: '.welcome on', desc: 'Sambutan otomatis anggota baru.' },
      { cmd: '.topaktif', desc: 'Peringkat anggota paling aktif.' },
    ],
  },
];

export const steps = [
  {
    n: '01',
    title: 'Simpan nomor bot',
    desc: 'Tambahkan nomor WhatsApp Tsukasa ke kontak, lalu kirim pesan apa saja.',
  },
  {
    n: '02',
    title: 'Kirim .menu',
    desc: 'Bot membalas katalog lengkap. Pilih kategori atau cari command langsung.',
  },
  {
    n: '03',
    title: 'Pakai di grup',
    desc: 'Tambah bot ke grup untuk moderasi, game, anime, dan fitur komunitas lainnya.',
  },
];

export const faqs = [
  {
    q: 'Tsukasa ini apa?',
    a: 'Tsukasa adalah bot WhatsApp serba bisa untuk chat pribadi maupun grup. Fokusnya anime, sticker, downloader, game grup, AI, dan moderasi.',
  },
  {
    q: 'Gratis atau berbayar?',
    a: 'Semua fitur dasar gratis dipakai. Tidak ada langganan untuk memakai command harian seperti sticker, downloader, atau game grup.',
  },
  {
    q: 'Bagaimana cara lihat daftar fitur?',
    a: 'Kirim .menu ke bot. Untuk melihat command satu kategori, kirim .menu <kategori>. Untuk mencari, pakai .menu cari <kata>.',
  },
  {
    q: 'Bisa dipakai di grup?',
    a: 'Bisa. Tambahkan nomor bot ke grup. Fitur moderasi dan game grup otomatis tersedia, dan bisa diatur per grup lewat .fitur.',
  },
  {
    q: 'Data grup aman?',
    a: 'Bot hanya menyimpan data yang dibutuhkan untuk fiturnya, seperti pengaturan grup dan statistik keaktifan. Tidak ada data yang dijual atau dibagikan.',
  },
];

export const navLinks = [
  { href: '#fitur', label: 'Fitur' },
  { href: '#command', label: 'Command' },
  { href: '#cara', label: 'Cara pakai' },
  { href: '#status', label: 'Status' },
  { href: '#faq', label: 'FAQ' },
];
