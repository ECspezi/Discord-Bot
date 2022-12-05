import { SlashCommandBuilder } from 'discord.js'
import { BecomeMentorEmbed } from '#static/embeds/BecomeMentorEmbed.js'
import { BecomeMentor } from '#static/rows/BecomeMentor.js'

export default {
	name: 'makebecomementor',
	data: new SlashCommandBuilder()
		.setName('makebecomementor')
		.setDescription('Staff internal command'),
	execute: async interaction => interaction.reply({ content: 'ready', ephemeral: true }).then(() => interaction.channel.send({ embeds: [BecomeMentorEmbed], components: [BecomeMentor] }))
}