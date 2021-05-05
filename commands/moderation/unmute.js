module.exports = {
  name: "unmute",
  category: "moderation",
  description: "Unmutes a member",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        ` You don't have permission to unmute members."`
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(` I need permission to manage roles first."`);
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        `Please ping the member that you want to unmute."`
      );
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send(` That user doesn't have the muted role. I can't take something that doesn't exist dingus.`)
    }
    
    user.roles.remove(muterole)
    
    await message.channel.send(`**${message.mentions.users.first().username}** is now unmuted`)
    
    user.send(`You are now unmuted from **${message.guild.name}**`)
  }
};
