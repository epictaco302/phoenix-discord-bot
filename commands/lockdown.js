exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  //if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");

  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(`Damn, **${message.author.username}** just locked the channel down. Don't worry though, the admins of this guild will *hopefully* open the chat up again soon, so be patient.`);
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 2
};

exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down.',
  category: "Mod",
  usage: 'lockdown'
};
