const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const config = require('./config');
const ownerCmd = require('./commands/owner');
const aiCmd = require('./commands/ai');
const groupCmd = require('./commands/group');
const fs = require('fs');
const path = require('path');

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: './wwebjs_auth'
  })
});

client.on('qr', (qr) => {
  console.log('\n📱 QR Code received, scan with your WhatsApp:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('\n✅ Dudung AI Bot is Ready!');
  console.log('━'.repeat(50));
  console.log(`Bot Name: ${config.botName}`);
  console.log(`Prefix: ${config.prefix}`);
  console.log('━'.repeat(50) + '\n');
});

client.on('message', async (msg) => {
  try {
    const text = msg.body;
    const chat = await msg.getChat();
    const isGroup = chat.isGroup;
    const sender = msg.from;

    // Ignore if message doesn't start with prefix
    if (!text.startsWith(config.prefix)) return;

    const command = text.split(' ')[0].substring(1).toLowerCase();
    const args = text.split(' ').slice(1);

    // Owner Commands
    if (['owner', 'addowner', 'instalpanel', 'infovps', 'antilinkall', 'antiswgc', 'jpm', 'createdomain', 'ping'].includes(command)) {
      await ownerCmd.handle(msg, command, args, client, config);
    }
    // AI Commands
    else if (['ai', 'bertanya', 'buildapk', 'codingweb', 'projek'].includes(command)) {
      await aiCmd.handle(msg, command, args, config);
    }
    // Group Commands
    else if (isGroup && ['grup', 'fun', 'downloader'].includes(command)) {
      await groupCmd.handle(msg, command, args, client, config);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

client.initialize();
