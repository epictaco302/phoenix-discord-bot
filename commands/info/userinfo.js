const Discord = require ('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'userinfo',
	description: 'Display info about yourself.',
  category: 'info',
  run: async(client, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "Online",
        idle: "Idle",
        dnd: "Do Not Disturb",
        offline: "Offline/Invisible",
      }
        
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "Yes";
  } else {
    bot = "No";
  }

            let embed = new Discord.MessageEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "None"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : " Not playing"}`,inline, true)
                .addField("Joined Discord At", member.user.createdAt)
                .setFooter(`Information about ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);

    }
   }
