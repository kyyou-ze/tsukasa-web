// Konten landing page. Dipisah dari komponen supaya mudah diubah tanpa
// menyentuh layout. Semua perintah di bawah benar-benar ada di bot.

export const features = [
  {
    icon: 'sticker',
    title: 'Sticker',
    desc: 'Gambar, video, atau teks jadi sticker. Ada .brat, .ttp, dan pack sticker yang bisa ditambah sendiri.',
    commands: ['.s', '.brat', '.ttp'],
  },
  {
    icon: 'download',
    title: 'Downloader',
    desc: 'TikTok, Instagram, YouTube, dan puluhan situs lain. TikTok turun tanpa watermark.',
    commands: ['.tiktok', '.instagram', '.ytmp3'],
  },
  {
    icon: 'dice',
    title: 'Game grup',
    desc: 'Akinator, family 100, caklontong, blackjack, UNO, mafia. Skor dan sesi jalan di grup.',
    commands: ['.akinator', '.family100', '.uno'],
  },
  {
    icon: 'spark',
    title: 'RPG & ekonomi',
    desc: 'Kerja, belanja, tarung, naik level. Progres tersimpan per pengguna, bukan cuma sekali pakai.',
    commands: ['.rpg', '.shop', '.inv'],
  },
  {
    icon: 'shield',
    title: 'Moderasi',
    desc: 'Antilink, antispam, mute, welcome, dan aturan grup. Bisa diatur terpisah tiap grup.',
    commands: ['.antilink', '.welcome', '.mute'],
  },
  {
    icon: 'check',
    title: 'Alat & cek',
    desc: 'Cek ID, bio, nomor, hitung, barcode, sampai verifikasi akun TikTok anggota.',
    commands: ['.cekid', '.cekbio', '.verif'],
  },
];

// Contoh command untuk panel interaktif. `group` menentukan tab.
export const commandGroups = [
  {
    id: 'mulai',
    label: 'Mulai',
    items: [
      { cmd: '.menu', desc: 'Katalog semua kategori.' },
      { cmd: '.menu sticker', desc: 'Perintah dalam satu kategori.' },
      { cmd: '.menu cari brat', desc: 'Cari perintah berdasarkan nama.' },
      { cmd: '.help .s', desc: 'Cara pakai satu perintah.' },
    ],
  },
  {
    id: 'media',
    label: 'Media',
    items: [
      { cmd: '.s', desc: 'Gambar atau video jadi sticker.' },
      { cmd: '.brat <teks>', desc: 'Sticker brat dengan teks custom.' },
      { cmd: '.ttp <teks>', desc: 'Sticker dari teks biasa.' },
      { cmd: '.toimg', desc: 'Sticker jadi gambar.' },
    ],
  },
  {
    id: 'unduh',
    label: 'Unduh',
    items: [
      { cmd: '.tiktok <link>', desc: 'Video TikTok tanpa watermark.' },
      { cmd: '.instagram <link>', desc: 'Media dari post Instagram.' },
      { cmd: '.play <judul>', desc: 'Cari dan kirim audio dari YouTube.' },
      { cmd: '.ytmp3 <link>', desc: 'Unduh audio dari tautan YouTube.' },
    ],
  },
  {
    id: 'grup',
    label: 'Grup',
    items: [
      { cmd: '.tagall <pesan>', desc: 'Tag semua anggota grup.' },
      { cmd: '.antilink on', desc: 'Hapus pesan berisi tautan.' },
      { cmd: '.welcome on', desc: 'Sambutan otomatis anggota baru.' },
      { cmd: '.afk <alasan>', desc: 'Tandai sedang pergi.' },
    ],
  },
  {
    id: 'main',
    label: 'Main',
    items: [
      { cmd: '.akinator', desc: 'Akinator menebak tokoh yang kamu pikirkan.' },
      { cmd: '.family100', desc: 'Kuis family 100 versi grup.' },
      { cmd: '.ludo', desc: 'Ludo untuk beberapa pemain.' },
      { cmd: '.rpg', desc: 'Mulai atau cek progres RPG.' },
    ],
  },
];

export const steps = [
  {
    n: '01',
    title: 'Simpan nomornya',
    desc: 'Tambahkan nomor bot ke kontak WhatsApp. Tidak perlu daftar atau isi formulir.',
  },
  {
    n: '02',
    title: 'Kirim .menu',
    desc: 'Bot membalas katalog per kategori. Pilih satu, atau cari langsung dengan .menu cari <kata>.',
  },
  {
    n: '03',
    title: 'Pakai di grup',
    desc: 'Undang nomor bot ke grup. Moderasi dan game grup langsung tersedia; fitur bisa dimatikan per grup.',
  },
];

export const faqs = [
  {
    q: 'Tsukasa ini apa?',
    a: 'Bot WhatsApp untuk chat pribadi dan grup. Isinya sticker, downloader, game grup, RPG, moderasi, dan alat grup.',
  },
  {
    q: 'Gratis atau berbayar?',
    a: 'Perintah harian gratis: sticker, unduhan, game grup, moderasi. Tidak ada langganan untuk fitur dasar.',
  },
  {
    q: 'Bagaimana cara lihat daftar perintah?',
    a: 'Kirim .menu. Untuk satu kategori, kirim .menu <kategori>. Untuk mencari, pakai .menu cari <kata>.',
  },
  {
    q: 'Bisa dipakai di grup?',
    a: 'Bisa. Undang nomor bot ke grup. Fitur moderasi dan game grup langsung jalan, dan bisa diatur per grup lewat .fitur.',
  },
  {
    q: 'Data grup aman?',
    a: 'Bot menyimpan pengaturan grup, statistik keaktifan, dan progres game. Tidak ada data yang dijual atau dibagikan.',
  },
];

export const navLinks = [
  { href: '#fitur', label: 'Fitur' },
  { href: '#command', label: 'Perintah' },
  { href: '#cara', label: 'Cara pakai' },
  { href: '#simulasi', label: 'Simulasi' },
  { href: '#status', label: 'Status' },
  { href: '#faq', label: 'FAQ' },
];
