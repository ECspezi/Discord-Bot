import { SlashCommandBuilder } from 'discord.js'
import { findOne, insert, remove } from '#lib/functions/mongo-functions.js'

export default {
    name: "addimperialpass",
	data: new SlashCommandBuilder()
		.setName('addimperialpass')
		.setDescription('Выдает приор-слот по ID')
        .addStringOption(option =>
			option.setName('userid')
				.setDescription('ID of user to add ImpPass')
				.setRequired(true)),
	execute: async interaction => findOne("imperialPass", "imperialPass", { 
            userId: interaction.options.getString('userid') 
        })
        .then((result) => result !== null 
            ? remove("imperialPass", "imperialPass", { userId: result.userId })
                .then(() => interaction.reply({ content: `Пользователь с ID *${result.userId}* удален из списка ImperialPass`}))
            : insert("imperialPass", "imperialPass", {
                userId: interaction.options.getString('userid'),
                priorityJoin: true,
            })
                .then(() => interaction.reply({ content: `Пользователь с ID *${interaction.options.getString('userid')}* добавлен в список ImperialPass`}))
        )
}
