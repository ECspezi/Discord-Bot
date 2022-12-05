import { SlashCommandBuilder } from 'discord.js'
import { MentorEmbeded }  from '#static/embeds/MentorEmbeded.js'
import { FindMentor } from '#static/rows/FindMentor.js'

export default {
	name: 'makementor',
	data: new SlashCommandBuilder()
		.setName('makementor')
		.setDescription('Staff internal command'),
	execute: async interaction => interaction.reply({ content: 'ready', ephemeral: true }).then(() => interaction.channel.send({ embeds: [MentorEmbeded], components: [FindMentor] }))
}