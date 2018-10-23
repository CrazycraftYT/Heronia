const Discord = require("discord.js");

var PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Heronia - !help");
    console.log("Le bot a bien ete connecte");
});

if (message.content === (PREFIX) + "help"){
    var help_embed = new Discord.RichEmbed();
        .setColor('#0c04e8')
        .addField("Commande Heronia BOT", "!ip > Pour afficher l'IP du serveur", "!site> Pour afficher le lien du site")
    message.channel.sendEmbed(help_embed);
}

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "help":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "Commande Heronia Discord",
                    value: "https://discord.gg/29Ccx96 // "
                    inline: false
                }],
                footer: {
                    footer: "Partager ce lien à tous vos amis !",
                },
            }
        });
        break;
    }
});

bot.login(process.env.TOKEN);
