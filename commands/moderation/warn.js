const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who does not obey the rules",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have permission to run this command.")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("Please ping the person you want to warn.")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("You can't warn bots.")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("You can't warn yourself.")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("...You obviously can't warn the server owner. Why did you even try?")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Give a reason to warn this member.")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} has already reached their warning limit.`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for ${reason}.`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}.`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${message.guild.name}** for ${reason}.`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}.`)
    }
    
  
  } 
}
