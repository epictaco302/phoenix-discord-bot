const Discord = require('discord.js');
exports.run = (client, msg, args, customisation) => {
  msg.delete();
  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .addField('About The Bot', `TacoBot is a personal project of EpicTaco. It is written in Node.JS.}`);
  msg.channel.send({embed});
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
  name: 'about',
  description: 'About the bot.',
  usage: 'about',
  category: "Useful"
};
