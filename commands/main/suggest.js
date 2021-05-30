const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send a suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send(":x: You didn't give a suggestion. Please give one.")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send(":x: There is no suggestions channel.")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("🟩")
      m.react("🟨")
      m.react("🟥")
    })
    

    
    message.channel.send("Sent your suggestion to the suggestions channel!")
    
  }
}
