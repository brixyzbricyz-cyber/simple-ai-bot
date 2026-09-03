# 🤖 Dudung AI Bot

**Bot WhatsApp Cerdas dengan Fitur AI Lengkap**

---

## 📋 Daftar Fitur

### 👑 Owner Commands (Prefix: `.`)

| Command | Penggunaan | Keterangan |
|---------|-----------|------------|
| `.owner` / `.addowner` | `.addowner <nomor>` | Tambahkan owner baru |
| `.instalpanel` | `.instalpanel` | Install panel hosting |
| `.infovps` | `.infovps` | Lihat info VPS |
| `.antilinkall` | `.antilinkall` | Aktifkan anti link di grup |
| `.antiswgc` | `.antiswgc` | Cegah pembuatan subgroup |
| `.jpm` | `.jpm` | Cek JPM (delivery rate) |
| `.createdomain` | `.createdomain <nama>` | Buat domain baru |
| `.ping` | `.ping` | Cek koneksi bot |

### 🧠 AI Commands (Prefix: `.`)

| Command | Penggunaan | Keterangan |
|---------|-----------|------------|
| `.bertanya` | `.bertanya <pertanyaan>` | Tanya ke Dudung AI |
| `.buildapk` | `.buildapk <nama_app>` | Build APK otomatis |
| `.codingweb` | `.codingweb <bahasa>` | Generate code snippet |
| `.projek` | `.projek` | Lihat daftar project |

### 👥 Group Commands (Prefix: `.`)

| Command | Penggunaan | Keterangan |
|---------|-----------|------------|
| `.fun` | `.fun` | Lihat joke lucu |
| `.downloader` | `.downloader <url>` | Download file otomatis |

---

## 🚀 Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/brixyzbricyz-cyber/simple-ai-bot.git
cd simple-ai-bot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
```bash
cp .env.example .env
```

Edit `.env` dan masukkan API Keys Anda:
```env
OPENAI_API_KEY=sk-proj-xxxxxxxxx
HUGGINGFACE_API_KEY=hf_xxxxxxxxx
RAPIDAPI_KEY=your-key-here
```

### 4. Jalankan Bot
```bash
npm start
```

Scan QR Code dengan WhatsApp Anda.

---

## 🔑 API Keys yang Digunakan

### OpenAI API
- **Website**: https://platform.openai.com/
- **API Key Format**: `sk-proj-xxxxxxxxxxxxx`
- **Kegunaan**: Advanced AI & NLP

### Hugging Face API  
- **Website**: https://huggingface.co/
- **API Key Format**: `hf_xxxxxxxxxxxxx`
- **Kegunaan**: Machine Learning Models

### RapidAPI
- **Website**: https://rapidapi.com/
- **API Key Format**: `xxxxxxxxxxxxx`
- **Kegunaan**: Download & External APIs

---

## 📁 Struktur Folder

```
dudung-ai-bot/
├── src/
│   ├── index.js              # Main bot file
│   └── commands/
│       ├── owner.js          # Owner commands
│       ├── ai.js             # AI commands
│       └── group.js          # Group commands
├── .env                       # Environment variables
├── .env.example              # Example env file
├── .gitignore               # Git ignore
├── package.json             # Dependencies
└── README.md                # Dokumentasi
```

---

## ⚙️ Konfigurasi

Edit file `src/config.js` untuk mengubah:
- Bot Name
- Prefix Commands
- Owner Number
- Feature Settings

---

## 📝 Contoh Penggunaan

### AI Bertanya
```
.bertanya apa itu machine learning?
→ Dudung AI akan menjawab pertanyaan Anda
```

### Build APK
```
.buildapk MyAwesomeApp
→ Bot akan membuild APK dengan nama MyAwesomeApp
```

### Info VPS
```
.infovps
→ Menampilkan detail spesifikasi server
```

---

## 🛠️ Requirements

- Node.js v14 atau lebih tinggi
- NPM atau Yarn
- WhatsApp Account
- API Keys (Optional untuk fitur lanjutan)

---

## 📞 Support

Jika ada pertanyaan atau error, silakan buat issue di repository ini.

---

## 📄 License

MIT License - Bebas untuk digunakan dan dimodifikasi

---

**Made with ❤️ by brixyzbricyz**
