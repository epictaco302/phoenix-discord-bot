const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Makes a person unable to speak",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
	return message.channel.send(` You don't have permission to mute members.`);
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(` I need permission to manage roles first.`);
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send(`Please ping the member that you want to mute.`)
    }
    
    if(user.id === message.author.id) {
      return message.channel.send(`...I'm not muting you dude.`);
    }
    
    let reason = args.slice(1).join(" ")
	
    if(!reason) {
      return message.channel.send(`Give the reason why you want to mute this member.`)
    }
    
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
   
      if(!muterole) {
      return message.channel.send(` This server doesn't have a "Muted" role.`)
    }
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send(` That user is already muted.`)
    }
    
    user.roles.add(muterole)
    
await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
  }
};