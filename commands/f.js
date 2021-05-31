const Discord = require('discord.js');

exports.run = async (client, message, args, customisation) => {
    if(args && args.length > 1){
        message.channel.send(`${message.author.username} has paid their respects for **${args.join(' ')}** <:MafuHearty:596554617349865493>`)
    }else{
        message.channel.send(`${message.author.username} has paid their respects <:MafuHearty:596554617349865493>`)
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["eff"],
    permLevel: 0
  };
  exports.help = {
	name: 'f',
	description: 'Press F to pay Respekts',
	category: "Fun",
	usage: 'f'
};
