module.exports = {
  name: "escflash",
  category: "escargot",
  aliases: ["flash", "fixflash"],
  description: "Fix Flash Player related issues for MSN/Windows Live Messenger and/or other clients",
  run: async (client, message, args) => {
    message.channel.send(`Fixing issues with Flash content not playing on Messenger: https://forum.nina.bz/thread-19.html`)
    }
  }