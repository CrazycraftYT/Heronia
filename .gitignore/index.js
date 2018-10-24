const Discord = require("discord.js");
const fs = require("fs");

var prefix = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("EN DEVELOPPEMENT");
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
            .addField("*» Twitter «*", "!twitter » Permet d'obtenir le lien du twitter d'Heronia", true)
            .setColor(0x0000FF)
            .setFooter("© Heronia 2018")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "ip"){
        var embed = new Discord.RichEmbed()
            .setTitle("__Voici l'IP du serveur :__")
            .setDescription(" -=- ")
            .addField("*mc.heronia.fr*", " -=- ", true)
            .addField("Si cela ne fonctionne pas, contactez un membre du Staff.", " -=-  ", true)
            .setColor(0x0000FF)
            .setFooter("© Heronia 2018")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "site"){
        var embed = new Discord.RichEmbed()
            .setTitle("__Voici le forum du serveur :__")
            .setDescription(" -=- ")
            .addField("*http://heronia.fr/*", " -=- ", true)
            .addField("Si cela ne fonctionne pas, contactez un membre du Staff.", " -=- ", true)
            .setColor(0x0000FF)
            .setFooter("© Heronia 2018")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "twitter"){
        var embed = new Discord.RichEmbed()
            .setTitle("__Voici le twitter du serveur :__")
            .setDescription(" -=- ")
            .addField("*https://twitter.com/HeroniaFR*", " -=- ", true)
            .addField("Si cela ne fonctionne pas, contactez un membre du Staff.", " -=- ", true)
            .setColor(0x0000FF)
            .setFooter("© Heronia 2018")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "rules"){
        var embed = new Discord.RichEmbed()
            .setTitle("__Voici les règles du serveur :__")
            .setDescription(" -=- ")
            .addField("__Infos :__", " Avant de commencer sachez que dès votre **première connexion** sur le serveur Heronia le staff considérera  que vous avez **pris conscience du règlement, que vous l'avez lu et approuvé.** Et que par conséquent vous vous engagez à le respecter quelque soit la situation. ", true)
            .addField("1. Le cheat :", " Premièrement tout logiciel de triche est interdit sur Heronia et toutes personnes en utilisant un quelque soit le type de triche (Reach, Fly, Speedhack ...) sera  banni du serveur pour une durée de 14 jours. Nous tenons également à préciser que le staff a l'interdiction de vérifier le joueur.", true)
            .addField("2. Les clicks :", "Deuxièmement nous tenons à indiquer pour tout les joueurs fans de butterflyclick, dragclick, jitterclick qu'il est interdit de dépasser 15 clicks par secondes ( ou CPS pour ceux qui préfèrent.) et si jamais à de multiples reprises des alertes montre que vous avez dépasser ce nombre de click par secondes un modérateur pourra vous bannir 14 jours.", true)
            .addField("3. La publicitée :", "Nous tenons également à dire que Heronia n'est pas un annuaire pour les publicités par conséquent si il n'y ne sera qu'une seule publicité dans le chat du serveur pour un discord ou l'ip d'un autre serveur minecraft le joueur en question aura un bannissement d'une heure.", true)
            .setColor(0x0000FF)
            .setFooter("© Heronia 2018")
        message.channel.sendEmbed(embed);
    }

});

bot.login(process.env.TOKEN);
