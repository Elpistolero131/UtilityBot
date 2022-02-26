const db = require('quick.db');
const emotes = require('../../../Storage/json/emotes.json')
const colors = require('../../../Storage/json/colors.json');

module.exports = {
    name: '8ball',
    aliases: ["8b", "ball"],
    onlyUsers: ["509765051435974692", "691644619758370846"],

    run: async (client, message, args, Discord) => {
        client.langs = new Discord.Collection()
        
              const Handler = require(`../../../Structures/Handlers/Handler`);
          await Handler.loadLangs(client);

        const lang = client.langs.get(db.get(`lang_${message.guild.id}`));

        let question = args.join(" ");
        if (!question)
            return message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setDescription(`${emotes.pepe.pepe_a} ┇ ${lang.commands.fun.ball[0]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                    .setColor(colors.EPINGLE)
                    .setFooter(`© ${client.user.username} `, client.user.avatarURL())
                    .setTimestamp()
                ]
            })

        if (question.length < 10) return message.reply({
            embeds: [
                new Discord.MessageEmbed()
                .setColor(colors.RED)
                .setDescription(`${emotes.autre.intelligent} ┇ ${lang.commands.fun.ball[9]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                .setFooter(`© ${client.user.username} `, client.user.avatarURL())
                .setTimestamp()
            ]
        })

        if (question === "test")
            return message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setDescription(`${emotes.autre.attention} ┇ ${lang.commands.fun.ball[1]}\n\n[${lang.commandsa[0]}](https://nepust.fr/)`)
                    .setColor(colors.EPINGLE)
                    .setFooter(`© ${client.user.username} `, client.user.avatarURL())
                    .setTimestamp()
                ]
            })

        let reponses = [
            lang.commands.fun.ball[4],
            lang.commands.fun.ball[5],
            lang.commands.fun.ball[6],
            lang.commands.fun.ball[7],
            lang.commands.fun.ball[8]
        ];
        let reponse = reponses[Math.floor(Math.random() * reponses.length)];
        let embed = new Discord.MessageEmbed()
            .setTitle("8BALL")
            .addFields({
                name: `${lang.commands.fun.ball[2]}  ${question}`,
                value: `${lang.commands.fun.ball[3]} ${reponse}`,
            })
            .setColor(colors.PERSO)
            .setDescription(`[${lang.commandsa[0]}](https://nepust.fr/)`)
            .setFooter(`© ${client.user.username} `, client.user.avatarURL())
            .setTimestamp();

        message.reply({
            embeds: [embed]
        }).then(() => {

        }).catch((e) => {
            console.log(e)
        })

    }
}