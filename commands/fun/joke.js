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
    "What did the drummer call his twin daughters? Anna one, Anna two!",
    "I wanted to go on a diet, but I feel like I have way too much on my plate right now.",
    "Want to hear a joke about construction? I'm still working on it.",
    "What do you call a man with a rubber toe? Roberto.",
    "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.",
    "If a child refuses to sleep during nap time, are they guilty of resisting a rest?",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "How does a penguin build it's house? Igloos it together.",
    "What do you call cheese that isn't yours? Nacho Cheese.",
    "Why couldn't the bicycle stand up by itself? It was two tired.",
    "Did you hear about the scientist who was lab partners with a pot of boiling water? He had a very esteemed colleague. ",
    "When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.",
    "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
    "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle? Attire!",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",
    "Five out of four people admit they're bad with fractions!",
    "I invented a new word today: Plagiarism!",
    "My hotel tried to charge me ten dollars extra for air conditioning. That wasn't cool.",
    "Which U.S. state is famous for its extra-small soft drinks? Minnesota!",
    "Why do trees seem suspicious on sunny days? They just seem a little shady!",

	];

	const randomIndex = Math.floor(Math.random() * responses.length);
	message.channel.send(responses[randomIndex]);
      }
    };
