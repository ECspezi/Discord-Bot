import { SlashCommandBuilder, ActionRowBuilder } from 'discord.js'

import { TicketControlEmbed } from '#static/embeds/TicketControlEmbed.js'
import { TicketControlButtons } from '#static/rows/TicketControlButtons.js'
import { findOne } from '#lib/functions/mongo-functions.js'

export default {
	name: 'ticketcontrol',
	data: new SlashCommandBuilder()
		.setName('ticketcontrol')
		.setDescription('Staff internal command'),
	execute: async interaction => findOne("tickets", "ticketInfo", { ticketId: interaction.channel.id })
		.then(result => result !== null && interaction.channel.id === result?.ticketId
				? interaction.reply({ embeds: [TicketControlEmbed], components: [TicketControlButtons], ephemeral: true})
				: interaction.reply({ content: 'Команду /ticketcontrol можно использовать только внутри активного тикета.', ephemeral: true })
		)
}