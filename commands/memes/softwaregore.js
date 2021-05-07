const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
  name: "softwaregore",
  category: "memes",
  description: "Sends some nasty looking software",
  run: async (client, message, args) => {
    const subReddits = ["softwaregore"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const img = await randomPuppy(random);
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage(img)
      .setTitle(`From /r/${random}`)
      .setURL(`https://reddit.com/r/${random}`);

    message.channel.send(embed);
  }
} 
