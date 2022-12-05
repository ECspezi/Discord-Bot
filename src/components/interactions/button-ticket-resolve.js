import { TicketResolveConfirm } from '#static/rows/ticketResolveConfirm.js'
import { findOne } from '#lib/functions/mongo-functions.js'

export default async function (interaction) {
	return findOne("tickets", "ticketInfo", { ticketId: interaction.channel.id })
		.then(result => interaction.user.id === result.userId
			? interaction.reply({content: 'Ваша проблема решена полностью, и вы готовы окончательно закрыть обращение?', components: [TicketResolveConfirm], ephemeral: true})
			: interaction.reply({content: 'Вы не можете закрывать чужие тикеты.', ephemeral: true})
		)
}