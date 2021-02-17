const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "joke",
    category: "fun",
    description: "Sends a joke.",
    run: async (client, message, args) => {
	const responses = [
    "Two guys stole a calendar. They got six months each. ",
    "I make mistakes; I’ll be the second to admit it.",
    "What's a quiet Hawaiian laugh? Aloha.",
    "My dad is so cheap that when he dies, he’s going to walk toward the light and turn it off.",
    "Did you hear about the racing snail who got rid of his shell? He thought it would make him faster, but it just made him sluggish.",
    "Autocorrect can go straight to he’ll.",
    "I can give you the cause of anaphylactic shock in a nutshell.",
    "I called the tinnitus hotline, but it just kept ringing... ",
    "People say, “I’m taking it one day at a time.” You know what? So is everybody. That’s how time works. ",
    "A butcher accidentally backed into his meat grinder and got a little behind in his work!",
    "Two ships collided. One was carrying a load of red paint, the other a load of blue paint. All the passengers were marooned.",
    "What do you call four bullfighters in quicksand? Quattro sinko.",
    "What kind of tree has a hand? A palm tree.",
    "What kind of shoes does a lazy person wear? Loafers.",
    "Hal: How did you get hit on the head with a book? Sal: I only have my shelf to blame.",
    "Why should you save your pennies? It makes good cents.",
    "What kind of jokes are told on a farm? Corny ones.",
    "What is a tree’s favorite soda? Root Beer.",
    "Why doesn't McDonald's serve escargot? It's not fast food!",
    "To the guy who stole my antidepressants: I hope you’re happy now.",

	];

	const randomIndex = Math.floor(Math.random() * responses.length);
	message.channel.send(responses[randomIndex]);
      }
    };
