import { SlashCommandBuilder } from 'discord.js'

import { VerifyEmbed } from '#static/embeds/VerifyEmbed.js'
import { EmbedVerifyRow } from '#static/rows/EmbedVerifyRow.js'

export default {
	name: 'makeverify',
	data: new SlashCommandBuilder()
		.setName('makeverify')
		.setDescription('SUS Staff internal command'),
	execute: async interaction => interaction.reply({ content: 'ready', ephemeral: true }).then(() => interaction.channel.send({ embeds: [VerifyEmbed], components: [EmbedVerifyRow] }))
}