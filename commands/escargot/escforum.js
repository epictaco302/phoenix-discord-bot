module.exports = {
  name: "escforum",
  category: "escargot",
  aliases: ["forum", "escargotforum", "escnina"],
  description: "Check out Escargot's discussion board on the NINA forums",
  run: async (client, message, args) => {
    message.channel.send(`Check out the Escargot discussion board on the NINA forums: https://forum.nina.bz/forum-40.html`)
    }
  }