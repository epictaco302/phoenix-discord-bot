const request = require('superagent');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'insult',
    description: 'insults the tagged user or the message sender if no one is tagged',
    cooldown: 3,
    category: 'fun',
    run: async (client, message, args) => {
        const user = message.mentions.members.first() - message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id);

        request.get('https://evilinsult.com/generate_insult.php?lang=en&type=json')
            .end((err, res) => {
                if (!err && res.status === 200) {
                    const fancyinsult = res.body;
                    const embed = new MessageEmbed()
                      .setColor("RANDOM")
                      .setTitle(`You've been insulted. Ha...`)
                      .setDescription(`${user}, ${fancyinsult.insult}`)
                    message.channel.send(embed);
                } 
                else {
                    console.log(`REST call failed: ${err}`)
                }
            });
    },
};
