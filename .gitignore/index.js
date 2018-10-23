const Discord = require("discord.js");

var PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Heronia - !help");
    console.log("Le bot a bien ete connecte");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "help":
        var embed = new Discord.RichEmbed()
            .setTitle("Heronia Commande Discord")
            .addField("Commande", "!ip » Permet d'afficher l'IP du serveur", "!site » Permet d'afficher le lien du site d'Heronia")
            .addField("-", "-")
            .setColor(0xFF8000)
            .setFooter("by Heronia » Crazy")
        message.channel.sendEmbed(embed);
    }
});

bot.login(process.env.TOKEN);
