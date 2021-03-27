module.exports = {
  name: "escgitlab",
  category: "escargot",
  aliases: ["gitlab", "escargotgitlab", "escargotsource"],
  description: "Want to contruibite to Escargot? Here is it's source code on this Gitlab group",
  run: async (client, message, args) => {
    message.channel.send(`Want to contribute to Escargot's development? Check our GitLab group! https://gitlab.com/escargot-chat`)
    }
  }