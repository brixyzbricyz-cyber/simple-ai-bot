module.exports = {
  handle: async (msg, command, args, client, config) => {
    switch (command) {
      case 'grup':
      case 'fun':
        const jokes = [
          '😂 Kenapa ayam menyeberang jalan? Karena ingin ke sebelah sana!',
          '🤣 Apa bedanya buku dengan meja? Buku punya halaman, meja punya kaki!',
          '😆 Berapa banyak programmer untuk mengganti bola lampu? Tidak ada, itu pekerjaan hardware!',
          '🤪 Programmer makan sambil coding. Hasilnya: File.txt\n--- FILE CONTAINS: RICE AND BUGS ---',
          '😄 Error di kode? Mungkin keyboard lu yang bermasalah!'
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        msg.reply(randomJoke);
        break;

      case 'downloader':
        if (args.length === 0) return msg.reply('Format: .downloader <url>');
        const url = args[0];
        msg.reply(`📥 Download dari: ${url}\n⏳ Processing...`);
        
        setTimeout(() => {
          msg.reply(`✅ File berhasil didownload!\n📦 Size: 12.5MB\n📝 Nama: file.zip\n⭐ Quality: HD`);
        }, 3000);
        break;

      default:
        msg.reply('❌ Command tidak dikenali');
    }
  }
};
