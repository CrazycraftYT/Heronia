const Discord = require("discord.js");

var prefix = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Heronia - !help");
    console.log("Le bot a bien ete connecte");
});

bot.on('message', message => {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("__Liste des commandes du discord :__")
            .setDescription(" ")
            .addField("*» Serveur «*", "!ip » Permet d'afficher l'IP du serveur", true)
            .addField("*» Forum «*", "!forum » Permet d'obtenir le lien du forum d'Heronia", true)
            .setColor(0x0000FF)
            .setFooter("by Heronia » Crazy")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "ip"){
        var embed = new Discord.RichEmbed()
            .setTitle("Voici l'IP du serveur :")
            .setDescription(" ")
            .addField("**mc.heronia.fr**")
            .setColor(0x0000FF)
            .setFooter("by Heronia » Crazy")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "forum"){
        var embed = new Discord.RichEmbed()
            .setTitle("Voici le forum du serveur :")
            .setDescription(" ")
            .addField("**heronia.fr**")
            .setColor(0x0000FF)
            .setFooter("by Heronia » Crazy")
        message.channel.sendEmbed(embed);
    }

});

bot.login(process.env.TOKEN);
