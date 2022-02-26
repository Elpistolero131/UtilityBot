const emotes = require('../../../Storage/json/emotes.json')
const db = require('quick.db');
const colors = require('../../../Storage/json/colors.json')

module.exports = {
  name: 'fun-fox',
  aliases: ["f-f"],
  cooldown: 5000,
  onlyUsers: ["509765051435974692", "691644619758370846"],

  run: async (client, message, args, Discord) => {
    client.langs = new Discord.Collection()
    
          const Handler = require(`../../../Structures/Handlers/Handler`);
      await Handler.loadLangs(client);
      
      let lang = client.langs.get(db.get(`lang_${message.guild.id}`))
      
        const foxdr = [
            "https://media.giphy.com/media/XijnjGLwbq5u8/giphy.gif",
            "https://media.giphy.com/media/Ful8UzCFYAjlu/giphy.gif",
            "https://media.giphy.com/media/bGl8yMNLsU7ao/giphy.gif",
            "https://media.giphy.com/media/qkdTy6tTmF7Xy/giphy.gif",
            "https://media.giphy.com/media/dZ3s1d6bsqQDK/giphy.gif",
            "https://media.giphy.com/media/Ko5dZRMv9uJFu/giphy.gif",
            "https://media.giphy.com/media/13Xy3MWV2Psz4I/giphy.gif",
            "https://media.giphy.com/media/fTne319LfO6Noh80qD/giphy.gif",
            "https://media.giphy.com/media/KsXe1cCROlJks/giphy.gif",
            "https://media.giphy.com/media/ZgBGTqC2Nbbws/giphy.gif",
            "https://media.giphy.com/media/iuRl3MucE9D8Y/giphy.gif",
            "https://media.giphy.com/media/l0HlMKxwnwT6J7gha/giphy.gif",
            "https://media.giphy.com/media/hBbxDNW8LFEA0/giphy.gif"
          ]
          const foxd = foxdr[Math.floor(Math.random() * foxdr.length)];
      
          message.reply({
              embeds: [
                new Discord.MessageEmbed()
                .setColor(colors.PERSO)
                .setTitle(lang.commands.fun.animaux[0])
                .setURL(foxd)
                .setDescription(`${emotes.autre.fox} AAA ${emotes.autre.fox}`)
                .setImage(foxd)
                .setTimestamp()
                 .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
              ]
          });
    }
}