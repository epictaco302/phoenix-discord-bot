module.exports = {
  name: "esctray",
  category: "escargot",
  aliases: ["tray", "wlm2009tray"],
  description: "Restore the tray functionality on WLM 2009 on Windows 7 and later",
  run: async (client, message, args) => {
    message.channel.send(`Here's how to make WLM 2009 show up on the tray: https://forum.nina.bz/thread-70.html`)
    }
  }
