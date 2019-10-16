 const TelegramBot = require('node-telegram-bot-api');
 const os = require('os')
 //webtelegram.net : Боти -> dziman_bot токен 915...Ds для TelegramBot 
 const bot = new TelegramBot('915790041:AAHawwe6bcWETf9SYfPuL0m9MiOxdI36ADs',{polling: true});
 bot.on('message',msg => {
   bot.sendMessage(msg.chat.id, `Hello from ${os.type()}, bot says hi to "${msg.from.first_name}"`)
 }) 