const Discord = require("discord.js");
const fs = require("fs");

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
            .setTitle("__Voici le forum du serveur :__")
            .setDescription(" -=- ")
            .addField("*https://twitter.com/HeroniaFR*", " -=- ", true)
            .addField("Si cela ne fonctionne pas, contactez un membre du Staff.", " -=- ", true)
            .setColor(0x0000FF)
            .setFooter("© Heronia 2018")
        message.channel.sendEmbed(embed);
    }

    exports.run = async(client, message, args) => {
 
        if  (!message.member.hasPermissions(["KICK_MEMBERS"])) return message.reply("You don't have the appropriate rights to run this command!");
        let reason = args.slice(1).join(' ');
        let user = message.mentions.users.first();
        if (reason.length < 1) return message.reply('You must specify a reason for the kick!');
        if (message.mentions.users.size < 1) return message.reply('You must select the user you want to kick!').catch(console.error);
     
        if (!message.guild.member(user).kickable) return message.reply("I can't kick this user!");
        let member = await message.guild.member(user).kick()
     
        const Discord = require("discord.js");
        const embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTimestamp()
            .addField('Action:', '__***Kick***__')
            .addField('User:', `${user.username}`)
            .addField('Staff:', `${message.author.username}`)
            .addField('Reason', reason)
            .setFooter('A Official DynatriSoft bot')
        return message.channel.sendEmbed(embed).catch(console.error);
       
    };
    

});

bot.login(process.env.TOKEN);
