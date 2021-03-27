module.exports = {
  name: "escwine",
  category: "escargot",
  aliases: ["wine", "wlmwine", "wlmmac", "wlmlinux"],
  description: "A tutorial on how to get MSN Messenger 7.5 to work on Wine",
  run: async (client, message, args) => {
    message.channel.send(`Getting MSN Messenger 7.5 to work on Wine:
Linux and macOS Pre-10.15 (Catalina): https://forum.nina.bz/thread-14.html 
macOS 10.15+ (Catalina and up): https://forum.nina.bz/thread-30.html`)
    }
  }