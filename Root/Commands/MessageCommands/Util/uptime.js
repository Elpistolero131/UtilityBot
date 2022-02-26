const colors = require('../../../Storage/json/colors.json');
const emotes = require('../../../Storage/json/emotes.json')
const db = require('quick.db');

module.exports = {
    name: 'uptime',
    description: 'none',
    onlyUsers: ["509765051435974692", "691644619758370846"],
    cooldown: 5000,

    run: async(client, message, args, Discord) => {
        client.langs = new Discord.Collection()
        
              const Handler = require(`../../../Structures/Handlers/Handler`);
          await Handler.loadLangs(client);
        
        let lang = client.langs.get(db.get(`lang_${message.guild.id}`));

        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        message.reply({
            embeds: [
                new Discord.MessageEmbed()
            .setColor(colors.PERSO)
            .setDescription(`${emotes.autre.cool_pika} ┇ Uptime : ${days} ${lang.commands.util.temp[0]}, ${hours} ${lang.commands.util.temp[1]}, ${minutes} ${lang.commands.util.temp[2]}, ${seconds} ${lang.commands.util.temp[3]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
             .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
            .setTimestamp()
            ]
        });
    }
}