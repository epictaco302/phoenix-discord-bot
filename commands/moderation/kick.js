const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kicks a user from the server",
  usage: "kick <@user> <reason>",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`:x: **${message.author.username}**, You don't have permission to kick someone.`)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`:x: **${message.author.username}**, I don't have permission to kick someone.`)
    }
    
    let target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Please ping the person that you want to kick.`)
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`:x: **${message.author.username}**, ...You can't kick yourself. Wh.. Why'd you even try???`)
    }
    
  if(!args[1]) {
    return message.channel.send(`:x: **${message.author.username}**, You gotta give a reason to kick this member.`)
  }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kicked ${target} (${target.id})`)
    .setColor("#ff2050")
    .setFooter(`Kicked by ${message.author.username}`);
    
    message.channel.send(embed)
    
    target.kick(args[1]);
  }
}
