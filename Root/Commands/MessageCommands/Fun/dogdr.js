const emotes = require('../../../Storage/json/emotes.json')
const db = require('quick.db');
const colors = require('../../../Storage/json/colors.json')

module.exports = {
    name: 'fun-dog',
    aliases: ["f-d"],
    cooldown: 5000,
    onlyUsers: ["509765051435974692", "691644619758370846"],

    run: async(client, message, args, Discord) => {
        client.langs = new Discord.Collection()
        
              const Handler = require(`../../../Structures/Handlers/Handler`);
          await Handler.loadLangs(client);
        
        let lang = client.langs.get(db.get(`lang_${message.guild.id}`));

        const dogdr = [
            "https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif",
            "https://media.giphy.com/media/21GCae4djDWtP5soiY/giphy.gif",
            "https://media.giphy.com/media/KGH8s2KHqWCYhd27W4/giphy.gif",
            "https://media.giphy.com/media/8vsW14FCMQVz7rKSuN/giphy.gif",
            "https://media.giphy.com/media/Xg4mqfGJM5YnCEshiM/giphy.gif",
            "https://media.giphy.com/media/xUA7aQaXbhnkX4znm8/giphy.gif",
            "https://media.giphy.com/media/yJHN2CCfPIw4o/giphy.gif",
            "https://media.giphy.com/media/Yjc9l1Q6Al1DO/giphy.gif",
            "https://media.giphy.com/media/dTJd5ygpxkzWo/giphy.gif",
            "https://media.giphy.com/media/3lxD1O74siiz5FvrJs/giphy.gif",
            "https://media.giphy.com/media/l4KhKdeCGzp0RORDW/giphy.gif",
            "https://media.giphy.com/media/mokQK7oyiR8Sk/giphy.gif",
            "https://media.giphy.com/media/cLcxtL1z8t8oo/giphy.gif"
        ]
        const dogd = dogdr[Math.floor(Math.random() * dogdr.length)];

        message.reply({
            embeds: [
                new Discord.MessageEmbed()
            .setColor(colors.PERSO)
            .setTitle(lang.commands.fun.animaux[0])
            .setURL(dogd)
            .setDescription(`${emotes.autre.dog} ${lang.commands.fun.animaux[1]}  ${emotes.autre.dog}`)
            .setImage(dogd)
             .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
            .setTimestamp()
            ]
        });
    }
}