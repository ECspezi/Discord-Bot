import config from '#src/config.json' assert { type: 'json' }
import { PermissionsBitField } from 'discord.js'
import { TicketDelete } from '#static/rows/TicketDelete.js'
import { TicketClosed } from '#static/embeds/TicketClosed.js'
import { findOne, patch } from '#lib/functions/mongo-functions.js'

export default async function (interaction) {
	await Promise.all([
		interaction.channel.permissionOverwrites.edit(interaction.user.id, { ViewChannel: false }),
		interaction.update({ content: 'Обращение закрыто. Не стесняйтесь обращаться еще!', components: [], ephemeral: true}),
		interaction.channel.send({ content: 'Пользователь закрыл обращение.', components: [TicketDelete]}),
	])

	await patch("tickets", "ticketInfo", { ticketId: interaction.channel.id }, { status: "ClosedByUser" })
	
	const result = await findOne("tickets", "ticketInfo", { ticketId: interaction.channel.id })
	return interaction.guild.channels.cache.get(config.ticketArrivedChannel)
		.messages.edit(result.assignMessageId, { embeds: [TicketClosed(result)], components: [] })
}