const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('this website is running the phoenix discord bot'));

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
        game: { 
            name: 'my code',
            type: 'WATCHING'
        },
        status: 'online'
    })
})

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

// login to Discord with your app's token
client.login('ODEwNzk5NTg0ODE3MTg0ODAw.YCo59A.M-2DDPj54DoQfFC8ViZCgPktZlQ');