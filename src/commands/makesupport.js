import { SlashCommandBuilder } from 'discord.js'

import { SupportEmbed } from '#static/embeds/SupportEmbed.js'
import { ButtonTicket } from '#static/rows/ButtonTicket.js'

export default {
	name: 'makesupport',
	data: new SlashCommandBuilder()
		.setName('makesupport')
		.setDescription('SUS Staff internal command'),
	execute: async interaction => interaction.reply({ content: 'ready', ephemeral: true }).then(() => interaction.channel.send({ embeds: [SupportEmbed], components: [ButtonTicket] }))
}
