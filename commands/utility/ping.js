module.exports = {
	name: 'ping',
	cooldown: 5,
	execute(message) {
			message.channel.send("Pinging ...")
			.then((msg) => {
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp))
			});
		}
	};
