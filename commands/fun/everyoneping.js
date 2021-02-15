module.exports = {
	name: 'everyoneping',
	description: 'Pings @everyone',
	execute(message) {
  message.channel.send("@everyone hi");

  }
};
