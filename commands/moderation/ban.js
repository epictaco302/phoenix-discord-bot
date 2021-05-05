const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban a user from the server.",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(` **${message.author.username}**,  You don't have permission to ban someone.`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(` **${message.author.username}**, I don't have permission to ban someone.`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Please ping the person that you want to ban.`)
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, ...You can't ban yourself dingus.`)
    }
     
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Give a reason to ban this member.`)
   }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Banned by ${message.author.tag}`);
    
    message.channel.send(embed)
    target.ban(args[1])
  }
}