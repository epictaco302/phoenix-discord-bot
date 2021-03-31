const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('What are you doing here? This site is supposed to be running the Phoenix Discord bot...'));

app.listen(port, () => console.log(`Phoenix Bot is listening at http://localhost:${port}`));

// bot code
const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");

const client = new Client({
  disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
  path: __dirname + "/.env"
});

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  console.log(`Hi, ${client.user.username} is now online!`);
    client.user.setPresence({
        status: 'online',
        activity: {
            name: "ph!help - version 1.0.1",
            type: "WATCHING"
        }
    });
});

  client.on("message", async message => {
    const prefix = "ph!";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
      command.run(client, message, args);
  });

  client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});

// login to Discord with your app's token
client.login('TOKEN_GOES_HERE');
