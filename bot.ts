import { Telegraf } from 'telegraf'
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN as string)
console.log("bot version 0.0.0")
bot.command('start', (ctx) => ctx.reply('Olá é um prazer conversar com você'))
bot.command('shit', Telegraf.reply('💩'))
bot.launch()