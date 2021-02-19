const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Gives information about the server that it\'s executed in.',
    category: 'info',
    run: async(client, message) => {
        if (!message.guild.members.cache.has(message.guild.ownerID)) await message.guild.members.fetch(message.guild.ownerID);
        const embed = new MessageEmbed()
            .setColor(0x00AE86)
            .setTitle('Server Info')
	      		.setThumbnail(message.guild.iconURL)
		      	.addField(':arrow_right: Name', message.guild.name, true)
		      	.addField(':arrow_right: ID', message.guild.id,   true)
			      .addField(':arrow_right: Region', message.guild.region.toUpperCase(), true)
		      	.addField(':arrow_right: Creation Date', message.guild.createdAt.toDateString(), true)
	      		.addField(':arrow_right: Owner', message.guild.owner.user.tag, true)
	      		.addField(':arrow_right: Members', message.guild.memberCount, true)

            message.channel.send(embed);
    },
};
