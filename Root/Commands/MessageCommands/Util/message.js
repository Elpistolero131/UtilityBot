const colors = require("../../../Storage/json/colors.json");
const emotes = require('../../../Storage/json/emotes.json');
const db = require('quick.db');

module.exports = {
    name: "message",
    onlyUsers: ["509765051435974692", "691644619758370846"],
    aliases: ["msg"],
    cooldown: 10000,

    run: async (client, message, args, Discord) => {
        client.langs = new Discord.Collection()
        
              const Handler = require(`../../../Structures/Handlers/Handler`);
          await Handler.loadLangs(client);

        let lang = client.langs.get(db.get(`lang_${message.guild.id}`));

        let msgUser = message.mentions.users.first();
        let messageBeingSent = args.join(" ").slice(22);
        if (!msgUser) return message.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setDescription(`${emotes.pepe.pepe_a} ┇ ${lang.commands.util.message[0]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                .setColor(colors.EPINGLE)
                 .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
                .setTimestamp()
            ]
        });
        if (!messageBeingSent) return message.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setDescription(`${emotes.pepe.pepe_a} ┇ ${lang.commands.util.message[1]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                .setColor(colors.EPINGLE)
                 .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
                .setTimestamp()
            ]
        })

        if (!message) {
            db.set(`inconvo_${message.author.id}_${msgUser.id}`, true);
        } else {
            msgUser.send({
                embeds: [
                    new Discord.MessageEmbed()
                    .setAuthor({name: message.author.tag, iconURL: message.author.displayAvatarURL({
                        dynamic: true
                    })})
                    .setTimestamp()
                    .setColor(colors.PERSO)
                    .setThumbnail(message.author.displayAvatarURL({
                        dynamic: true,
                    }))
                    .setFooter(message.client.user.username, message.client.user.displayAvatarURL({
                        dynamic: true
                    }))
                    .setTitle(`${emotes.blob.blob_w} ┇ ${lang.commands.util.message[2].replace('{USER}', message.author.tag)}`)
                    .setDescription(`\n${messageBeingSent}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                ]
            }).catch((err) => {
                message.reply({
                    embeds: [
                        new Discord.MessageEmbed()
                        .setColor(colors.RED)
                        .setDescription(`${emotes.autre.attention} ┇ ${lang.commands.util.messageA[1].replace('[contact]', '[contact the support](https://discord.gg/BT4SyHUM5z)')}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                         .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
                        .setTimestamp()
                    ]
                });
            });

            await message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setTitle(lang.commands.util.message[3])
                    .setDescription(`${emotes.pepe.pepe_s} ┇ ${lang.commands.util.message[4].replace('{USER}', msgUser)}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                    .setAuthor(
{ name: message.author.tag, iconURL:
                        message.author.displayAvatarURL({
                            dynamic: true
                        })}
                    )
                    .setThumbnail(msgUser.displayAvatarURL({
                        dynamic: true
                    }))
                    .setColor(colors.VERT)
                    .setFooter(`© ${client.user.username}`,
                        client.user.avatarURL()
                    )
                ]
            });
        };
    },
};