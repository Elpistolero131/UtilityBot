const db = require('quick.db')
const Discord = require('discord.js')
const colors = require('../../../Storage/json/colors.json')
const config = require('../../../Storage/json/Config.json')

module.exports = {
    name: "HelpTotalWarns",
    run: async(client, interaction) => {
        var prefix = db.get(`prefix_${interaction.guild.id}`) || 'u!'
        let lang = client.langs.get(db.get(`lang_${interaction.guild.id}`) || 'en')

        try {
        interaction.user.send({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(colors.PERSO)
                .setTitle(lang.commands.help.helpTw[1].replace('{PREFIX}', prefix))
                .setDescription(lang.commands.helpa[5])
                .addFields({
                    name: lang.commands.helpa[7],
                    value: lang.commands.help.helpTw[2]
                }, {
                    name: lang.commands.helpa[8],
                    value: lang.commands.help.helpTw[3].replace('{PREFIX}', prefix),
                    inline: true
                }, {
                    name: lang.commands.helpa[9],
                    value: `\`${prefix}t-w\``,
                    inline: true
                }, {
                    name: lang.commands.helpa[2],
                    value: lang.commands.helpa[1]
                }, {
                    name: lang.commands.helpa[11],
                    value: lang.commands.helpa[12]
                },  {
                    name: "Cooldown",
                    value: "0s"
                }, {
                    name: lang.commands.helpa[10],
                    value: lang.commands.helpa[14]+`\n\n[${lang.commandsa[0]}](https://nepust.fr/)`
                })
                 .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.displayAvatarURL()})
                .setTimestamp()
            ]
        }).then(() => {
            interaction.reply({
                content: lang.commands.help.success[0],
                ephemeral: true
        })
        })
    } catch {
            interaction.reply(`Please active your DMs.`)
    }
    }
}
