import { SlashCommandBuilder } from 'discord.js'
import { findOne, insert, remove } from '#lib/functions/mongo-functions.js'

export default {
    name: "demotementor",
	data: new SlashCommandBuilder()
		.setName('demotementor')
		.setDescription('Staff internal command')
        .addStringOption(option =>
			option.setName('mentorid')
				.setDescription('ID of mentor to demote')
				.setRequired(true)),
	execute: async interaction => {
        const result = await findOne("mentorship", "activeMentors", { userId: interaction.options.getString('mentorid') })
        
        return result !== null
            ? remove("mentorship", "activeMentors", { userId: mentorId })
                .then(() => interaction.reply({ content: 'Ментор понижен и удален из базы данных.', ephemeral: true }))
            : interaction.reply({ content: 'ID ментора не найден в базе данных', ephemeral: true })
	},
};