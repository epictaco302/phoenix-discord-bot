const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    category: 'info',
    run: async (client, message, args) => {
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Ping`)
        .setDescription(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);

      message.channel.send(embed);
    }
};
