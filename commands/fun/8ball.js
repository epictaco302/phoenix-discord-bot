const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  category: "fun",
  description: "The Magic 8-ball, but it's on Discord.",
  run: async (client, message, args) => {
	const responses = [
		"It is certain",
		"It is decidedly so",
		"Without a doubt",
		"Yes, definitely",
		"You may rely on it",
		"As I see it, yes",
		"Most Likely",
		"Outlook good",
		"Yes",
		"Signs point to yes",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Reply hazy, try again",
    "Very doubtful"

	];

	const randomIndex = Math.floor(Math.random() * responses.length);
  
  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`The Magic 8-ball says...`)
    .setDescription(`:8ball: - ` + responses[randomIndex])
    .setFooter(`Magic 8-ball originially by Mattel`);

	message.channel.send(embed);
      }
    };
