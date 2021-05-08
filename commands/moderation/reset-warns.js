const db = require("quick.db")

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  category: "moderation",
  usage: "resetwarns <@user>",
  description: "Resets warnings of the mentioned person",
  run: async (client, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have permission to run this command.")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("Please ping the member that you want to reset the warnings of.")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bot can't be warned.")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("You can't reset your own warnings.")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} does not have any warnings.`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`All of your warnings have been reset by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Reset all of ${message.mentions.users.first().username}'s warnings.`)
    
  
    
}
}
