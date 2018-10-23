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
            .addField("*» Forum «*", "!site » Permet d'obtenir le lien du forum d'Heronia", true)
            .setColor(0x0000FF)
            .setFooter("by Heronia » Crazy")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "ip"){
        var embed = new Discord.RichEmbed()
            .setTitle("Voici l'IP du serveur :")
            .addField("*mc.heronia.fr*", true)
            .addField("Si cela ne fonctionne pas, contactez un membre du Staff.")
            .setColor(0x0000FF)
            .setFooter("by Heronia » Crazy")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "site"){
        var embed = new Discord.RichEmbed()
            .setTitle("Voici le forum du serveur :")
            .addField("*heronia.fr*", true)
            .addField("Si cela ne fonctionne pas, contactez un membre du Staff.")
            .setColor(0x0000FF)
            .setFooter("by Heronia » Crazy")
        message.channel.sendEmbed(embed);
    }

});

bot.login(process.env.TOKEN);
