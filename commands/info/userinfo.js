const { MessageEmbed } = require("discord.js")
const moment = require("moment")

module.exports = {
  name: "userinfo",
  aliases: ["whois", "user"],
  usage: "userinfo <MENTION>",
  description: "Returns user info",
  category: "info",
  run: async (client, message, args) => {

    let user;

    if (!args[0]) {
      user = message.member;
    } else {


      if (isNaN(args[0])) return message.channel.send(":x: Invalid user ID!")


      user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => { return message.channel.send(":x: Unable to find this person!") })
    }

    if (!user) {
      return message.channel.send(":x: Unable to find this person!")
    }

    let badges = await user.user.flags
    badges = await badges.toArray();

    let newbadges = [];
    badges.forEach(m => {
      newbadges.push(m.replace("_", " "))
    })

    let embed = new MessageEmbed()
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

    let array = []
    if (user.user.presence.activities.length) {

      let data = user.user.presence.activities;

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "None"
        let xname = data[i].details || "None"
        let zname = data[i].state || "None"
        let type = data[i].type

        array.push(`**${type}** : \`${name} : ${xname} : ${zname}\``)

        if (data[i].name === "Spotify") {
          embed.setThumbnail(`https://i.scdn.co/image/${data[i].assets.largeImage.replace("spotify:", "")}`)
        }

        embed.setDescription(array.join("\n"))
      }
    }

      embed.setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)

      embed.setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))

      if (user.nickname !== null) embed.addField("Nickname", user.nickname)
      embed.addField("Joined on", moment(user.user.joinedAt).format("LLLL"))
        .addField("Account created on", moment(user.user.createdAt).format("LLLL"))
        .addField("Other info", `ID: \`${user.user.id}\`\nDiscriminator: ${user.user.discriminator}\nBot: ${user.user.bot}\nDeleted User: ${user.deleted}`)
        .addField("Badges", newbadges.join(", ").toLowerCase() || "None")

      return message.channel.send(embed).catch(err => {
        return message.channel.send("Error : " + err)
      })
    }
  }
