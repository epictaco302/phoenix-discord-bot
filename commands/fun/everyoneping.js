module.exports = {
	name: 'everyoneping',
	description: 'Pings @everyone',
	run: async (client, message) => {
  message.channel.send("@everyone hi");

  }
};
