const db = require('quick.db')
const Discord = require('discord.js')
const colors = require('../../../Storage/json/colors.json')
const config = require('../../../Storage/Vault/Config')

module.exports = {
    name: "HelpPause",
    
    run: async(client, interaction) => {
        var prefix = db.get(`prefix_${interaction.guild.id}`)
        if(prefix == null) prefix = config.prefix;
        let lang = client.langs.get(db.get(`lang_${interaction.guild.id}`) || 'en')
        
        interaction.user.send({
  embeds: [
      new Discord.MessageEmbed()
      .setColor(colors.PERSO)
      .setTitle(lang.commands.help.helpPause[1].replace('{PREFIX}', prefix))
      .setDescription(lang.commands.helpa[4])
      .addFields({
          name: lang.commands.helpa[5],
          value: lang.commands.help.helpPause[2]
      }, {
          name: lang.commands.helpa[6],
          value: `\`${prefix}pause\``,
          inline: true
      }, {
        name: lang.commands.helpa[7],
        value: lang.commands.helpa[8],
        inline: true
    }, {
        name: '\u200B',
        value: 'ㅤ'
    }, {
          name: lang.commands.helpa[2],
          value: lang.commands.helpa[1],
          inline: true
        }, {
              name: lang.commands.helpa[25],
              value: lang.commands.helpa[0],
              inline: true
    }, {
          name: lang.commands.helpa[9],
          value: `\`${lang.commands.help.music[1]}\``
      }, {
          name: "Cooldown",
          value: "0s"
      }, {
          name: lang.commands.helpa[10],
          value: lang.commands.helpa[11] + `\n\n[${lang.commandsa[0]}](https://nepust.fr/)`
      })
       .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.displayAvatarURL()})
      .setTimestamp()
  ]
}).then(() => {
  interaction.reply('Help sent with succes !')
})
}
}