const Discord = require("discord.js");
const colors = require('../../../Storage/json/colors.json')
const emotes = require('../../../Storage/json/emotes.json')
const db = require('quick.db')

module.exports = {
    name: "calcul",
    aliases: ["cal"],
    onlyUsers: ["509765051435974692", "691644619758370846"],

    run: async (client, message, args, Discord) => {
        client.langs = new Discord.Collection()
        
              const Handler = require(`../../../Structures/Handlers/Handler`);
          await Handler.loadLangs(client);
        
        let lang = client.langs.get(db.get(`lang_${message.guild.id}`));

        if (!args[0]) return message.reply({
            embeds: [
            new Discord.MessageEmbed()
            .setColor(colors.EPINGLE)
            .setDescription(`${config.emotes.pepe.pepe_a} ┇ ${lang.commands.util.calcul[0]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
            .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
            .setTimestamp()
            ]
        });
        if (!args[1]) return message.reply({
            embeds: [
            new Discord.MessageEmbed()
            .setColor(colors.EPINGLE)
            .setDescription(`${config.emotes.pepe.pepe_a} ┇ ${lang.commands.util.calcul[1]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
            .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
            .setTimestamp()
            ]
        });
        if (!args[2]) return message.reply({
            embeds: [
            new Discord.MessageEmbed()
            .setColor(colors.EPINGLE)
            .setDescription(`${config.emotes.pepe.pepe_a} ┇ ${lang.commands.util.calcul[2]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
            .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
            .setTimestamp()
            ]
        });
        message.reply({
            embeds: [
            new Discord.MessageEmbed()
            .setColor(colors.PERSO)
            .addFields({
                name: 'Calcul :',
                value: `${args[0]} ${args[1]} ${args[2]}`
            }, {
                name: 'Résultat :',
                value: `${calculator(args[0], args[1], args[2])}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`
            })
            .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
            .setDescription(`${config.emotes.autre.cool_pika}`)
            .setTimestamp()
        ]
    });

        function calculator(num1, operator, num2) {
            if (isNaN(num1)) return message.reply({
                embeds: [
                new Discord.MessageEmbed()
                .setColor(colors.EPINGLE)
                .setDescription(`${config.emotes.autre.attention} ┇ ${lang.commands.util.calcul[3]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
                .setTimestamp()
                ]
            });
            if (isNaN(num2)) return message.reply({
                embeds: [
                new Discord.MessageEmbed()
                .setColor(colors.EPINGLE)
                .setDescription(`${config.emotes.autre.attention} ┇ ${lang.commands.util.calcul[4]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
                .setTimestamp()
                ]
            });

            switch (operator) {
                case "+":
                    return parseInt(num1) + parseInt(num2);
                    break;
                case "-":
                    return num1 - num2;
                    break;
                case "*":
                    return num1 * num2;
                    break;
                case "/":
                    return (num1 / num2).toFixed(2);
                    break;
                default:
                    return message.reply({
                        embeds: [
                        new Discord.MessageEmbed()
                        .setColor(colors.EPINGLE)
                        .setDescription(`${config.emotes.pepe.pepe_a} ┇ ${lang.commands.util.calcul[5]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                        .setFooter({text: `© ${client.user.username}`,  iconURL: client.user.avatarURL()})
                        .setTimestamp()
                        ]
                    });
                    break;
            }

        }
    },
};