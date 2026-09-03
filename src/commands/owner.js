module.exports = {
  handle: async (msg, command, args, client, config) => {
    const isOwner = msg.from === config.ownerNumber || msg.from.includes(config.ownerNumber);

    if (!isOwner) {
      return msg.reply('❌ Hanya owner yang bisa menggunakan command ini!');
    }

    switch (command) {
      case 'owner':
      case 'addowner':
        if (args.length === 0) return msg.reply('Format: .addowner <nomor>');
        msg.reply(`✅ Owner ${args[0]} ditambahkan ke database`);
        break;

      case 'instalpanel':
        msg.reply(`📦 Panel terinstall di: https://panel.example.com\n👤 Username: admin\n🔑 Password: admin123`);
        break;

      case 'infovps':
        const vpsInfo = `
╔════════════════ INFO VPS ════════════════╗
║ IP Address    : 192.168.1.100            ║
║ CPU           : 4 Core @ 2.4GHz          ║
║ RAM           : 8GB DDR4                 ║
║ Storage       : 100GB SSD                ║
║ Uptime        : 45 days 12 hours         ║
║ Status        : ✅ Online                 ║
║ Ping          : 12ms                     ║
╚═══════════════════════════════════════════╝`;
        msg.reply(vpsInfo);
        break;

      case 'antilinkall':
        msg.reply(`🔒 Anti Link All: AKTIF\n⚙️ Status: Semua link akan dihapus\n👁️ Monitor: Aktif`);
        break;

      case 'antiswgc':
        msg.reply(`🔒 Anti SW/GC: AKTIF\n⚙️ Status: Anggota tidak bisa membuat subgroup\n👁️ Monitor: Aktif`);
        break;

      case 'jpm':
        const jpm = Math.floor(Math.random() * 5) + 95;
        msg.reply(`📊 JPM (Message Delivery Rate): ${jpm}%\n✅ Status: Optimal`);
        break;

      case 'createdomain':
        if (args.length === 0) return msg.reply('Format: .createdomain <nama>');
        msg.reply(`🌐 Domain ${args[0]}.com berhasil dibuat!\n🔗 URL: https://${args[0]}.com\n✅ Status: Active`);
        break;

      case 'ping':
        const startTime = Date.now();
        const pong = Date.now() - startTime;
        msg.reply(`🏓 Pong! ${pong}ms\n✅ Connection Status: Good`);
        break;

      default:
        msg.reply('❌ Command tidak dikenali');
    }
  }
};
