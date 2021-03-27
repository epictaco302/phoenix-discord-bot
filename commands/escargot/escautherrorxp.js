module.exports = {
  name: "escautherrorxp",
  category: "escargot",
  aliases: ["autherrorxp", "xpsignonerror"],
  description: "Got an error signing into Escargot on Windows XP? Run this command for a fix to your issues",
  run: async (client, message, args) => {
    message.channel.send(`Got an error while logging in on Messenger 4.7 and 5+ on Windows XP or Vista? Read this thread: https://forum.nina.bz/thread-13.html`)
    }
  }