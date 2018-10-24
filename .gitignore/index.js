const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.mutes = require("./mutes.json");

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
            .addField("Si cela ne fonctionne pas, contactez un Administrateur.", " -=- ", true)
            .setColor(0x0000FF)
            .setFooter("© Heronia 2018")
        message.channel.sendEmbed(embed);
    }
    
    exports.run = async(client, message, args) => {
 
        if  (!message.member.hasPermissions(["KICK_MEMBERS"])) return message.reply("Vous n'avez pas les permissions !");
        let reason = args.slice(1).join(' ');
        let user = message.mentions.users.first();
        if (reason.length < 1) return message.reply('Vous devez entrer une raison valide !');
        if (message.mentions.users.size < 1) return message.reply('Vous devez séléctionner la personne !').catch(console.error);
     
        if (!message.guild.member(user).kickable) return message.reply("Vous ne pouvez pas kick cette personne !");
        let member = await message.guild.member(user).kick()
     
        const Discord = require("discord.js");
        const embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTimestamp()
            .addField('Action:', '__***Kick***__')
            .addField('Joueur:', `${user.username}`)
            .addField('Staff:', `${message.author.username}`)
            .addField('Raison', reason)
            .setFooter('© Heronia 2018')
        return message.channel.sendEmbed(embed).catch(console.error);
       
    };
    

});

bot.login(process.env.TOKEN);
