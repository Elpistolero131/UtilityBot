const db = require('quick.db');
const colors = require('../../../Storage/json/colors.json');
const emotes = require('../../../Storage/json/emotes.json')

module.exports = {
    name: "total-warns",
    description: "Check a users warnings",
    aliases: ["t-w"],
    onlyUsers: ["509765051435974692", "691644619758370846"],
    userPermissions: ["MANAGE_MESSAGES"],

    run: async (client, message, args, Discord) => {
        client.langs = new Discord.Collection()
        
              const Handler = require(`../../../Structures/Handlers/Handler`);
          await Handler.loadLangs(client);
        
        let lang = client.langs.get(db.get(`lang_${message.guild.id}`));

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.author;


        let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);

        if (warnings === null) warnings = 0;

        message.reply({
            embeds: [
            new Discord.MessageEmbed()
            .setColor(colors.EPING)
            .setDescription(`${emotes.pepe.pepe_a} ┇ **${user.username}** ${lang.commands.mods.totalW[0].replace('{WARNINGS}', warnings)}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
             .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
            .setTimestamp()
            ]
        });
    }
}