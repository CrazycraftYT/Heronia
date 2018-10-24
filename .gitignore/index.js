const Discord = require("discord.js");
const fs = require("fs");

var prefix = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Maintenance en cours - Crazy");
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
            .setDescription(" Elles ont à suivrent à la lettre")
            .addField("__Infos :__", " Avant de commencer sachez que dès votre **première connexion** sur le serveur Heronia le staff considérera  que vous avez **pris conscience du règlement, que vous l'avez lu et approuvé.** Et que par conséquent vous vous engagez à le respecter quelque soit la situation. ", true)
            .addField("1. Le cheat :", " Premièrement tout **logiciel de triche** est __interdit__ sur Heronia et toutes personnes en utilisant un quelque soit le type de triche (*Reach, Fly, Speedhack ...*) sera  __banni du serveur__ pour une durée de *14 jours.* Nous tenons également à préciser que le staff a l'interdiction de __vérifier le joueur__.", true)
            .addField("2. Les clicks :", "Deuxièmement nous tenons à indiquer pour tout les joueurs fans de **butterflyclick, dragclick, jitterclick** qu'il est __interdit de dépasser 15 clicks par secondes__ ( ou CPS pour ceux qui préfèrent.) Et si jamais à de multiples reprises des alertes montre que vous avez dépasser ce nombre de click par secondes un modérateur pourra vous **bannir 14 jours.**", true)
            .addField("3. La publicitée :", "Nous tenons également à dire que Heronia n'est pas un __annuaire pour les publicités__ par conséquent si il n'y ne sera qu'une seule publicité dans le chat du serveur pour un discord ou l'ip d'un autre serveur minecraft le joueur en question aura un **bannissement d'une heure.**", true)
            .addField("4. Les insultes / Style de jeu :", "Ensuite avec les sanctions qui valent un bannissement sachez que Heronia n'est pas un défouloir à nerfs et que par conséquent les insultes graves seront sanctionnées d'un bannissement d'une heure.  Le style de jeu est aussi sanctionnable c'est pourquoi l'anti-jeu comme le spawnkill, les towers et les alliances seront sanctionnées **d'abord d'un kick puis en cas de récidive d'un bannissement de 10 minutes.**", true)
            .addField("5. Les provocations :", "Ensuite avec les sanctions qui valent un bannissement sachez que Heronia n'est pas un défouloir à nerfs et que par conséquent __les insultes graves seront sanctionnées__ **d'un bannissement d'une heure.**  Le style de jeu est aussi sanctionnable c'est pourquoi __l'anti-jeu comme le spawnkill, les towers et les alliances__ seront sanctionnées **d'abord d'un kick puis en cas de récidive d'un bannissement de 10 minutes.**", true)
            .addField("6. Propos :", "Tout ce qui est des __propos racistes, homophobes et antisémites__ sont totalement interdits et seront sanctionnable  **d'un mute de 12 heures.**", true)
            .addField("7. Spam / Flood :", "__Le spam et le flood__ sont aussi interdits et sont sanctionnable d'un kick et en cas de récidive d'un **mute de 10 minutes** quelque en soit la raison.", true)
            .addField("8. Use-Bug :", "Nous vous informons également que tout __use-bug__ est interdit et est sanctionnable **d'un kick**, mais il serait préférable de parler du bug en question pour que l'équipe **d'administration le règle**.", true)
            .setColor(0x0000FF)
            .setFooter("© Heronia 2018")
        message.channel.sendEmbed(embed);
    }

    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "Test");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la permission").catch(console.error);
        }
        if(message.mentions.user.size === 0) {
            return message.reply("Merci de mentionner le joueur !").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        id(!kickMember) {
            return message.reply("Utilisateur introuvable / grade trop élevé !")
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("J'ai besoin des permissions !").catch(console.error);
        } 
        kickMemer.kick().the,(member => {
            message.reply(`${member.user.username} a été kick du serveur !`).catch(console.error);
            message.guild.channels.find("name", "💬discussion").send(`**${member.user.username} a été kick du discord par **${message.author.username}**`)
        }).catch(console.error)
    }

    if (command === "ban") {
        let ModRole = message.guild.roles.find("name", "Test");
        if(!message.member.roles.has(modRole.id))
            return message.reply("Pas la permission").catch(console.error);
        }
        const member = message.mentions.members.first();
        if (!member) return message.reply("Manque la mention !");
        member.ban().then(member => {
            message.reply(`${member.user.username} a été ban !`)
            message.guild.channels.find("name", "Test").send(`${member.user.username} a été bannis par ${member.author.username} !`)
        }).catch(console.error)

});

bot.login(process.env.TOKEN);
