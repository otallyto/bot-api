import { Telegraf, session } from 'telegraf';

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN as string);
console.log('bot version 0.0.0');
bot.command('start', (ctx) => ctx.reply(`Olá ${ctx.chat.first_name} é um prazer conversar com você`));
bot.command('shit', Telegraf.reply('💩'));
bot.command('gabriel', Telegraf.reply('Vai estudar JavaScript'));

bot.on('text', (ctx) => {
  // Explicit usage
  // ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)

  // Using context shortcut
  ctx.reply(ctx.chat);
});

bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
