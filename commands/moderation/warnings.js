const db = require("quick.db")

module.exports = {
  name: "warnings",
  description: "Gets your warnings or the warnings of a mentioned person",
  category: "moderation",
  run: (client, message, args) => {
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    
    message.channel.send(`${user} has **${warnings}** warning(s).`)
  
  
  }
}
