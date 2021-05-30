const { Client, Collection } = require("discord.js");
const { prefix, token } = require("./config.json");
const db = require("quick.db")
const client = new Client({
    disableEveryone: true
})
//_____________________________________________________________________________________________________________________________

client.on("ready", () => {
  console.log(`Hi, ${client.user.username} is now online!`);
    client.user.setPresence({
        status: 'online',
        activity: {
            name: "tb!help - version 1.4.1",
            type: "WATCHING"
        }
    });
//________________________________________________________________________________________________________________________________
client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.snipes = new Map()
client.on('messageDelete', function(message, channel){

  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })

})

client.on("message", async message => {
   let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix = "tb!"
  }

     let blacklist = await db.fetch(`blacklist_${message.author.id}`)

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    if (blacklist === "Blacklisted") return message.reply("You are blacklisted from the bot!")

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command)
        command.run(client, message, args);

    });

});

client.login(token);
