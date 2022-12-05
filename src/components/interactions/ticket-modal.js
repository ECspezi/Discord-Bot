import { ChannelType, PermissionsBitField } from 'discord.js'

import config from '#src/config.json' assert { type: 'json' }
import { insert } from '#lib/functions/mongo-functions.js'
import { TicketEmbed } from '#static/embeds/TicketEmbed.js'
import { TicketArrived } from '#static/embeds/TicketArrived.js'
import { TicketResolve } from '#static/rows/TicketResolve.js'
import { ButtonGetTicket } from '#static/rows/ButtonGetTicket.js'

export default async function (interaction){
	await interaction.reply({ content: 'Ваше обращение отправлено, мы уже создали для Вас тикет.', ephemeral: true })
	const ticketChannel = await interaction.guild.channels.create({
		name: `${interaction.user.username} ticket`,
		type: ChannelType.GuildText,
		parent: config.ticketCathegory,
		permissionOverwrites: [
			{
				id: interaction.guild.id,
				deny: [PermissionsBitField.Flags.ViewChannel],
			},
			{
				id: interaction.user.id,
				allow: [PermissionsBitField.Flags.ViewChannel],
			}
		]
	})

	const problem = interaction.fields.getTextInputValue('problemInput')
	const description = interaction.fields.getTextInputValue('descriptionInput')	
	
	await ticketChannel.send({ embeds: [TicketEmbed(ticketChannel.id, problem, description)], components: [TicketResolve]  })

	const ticketsArrivedChannel = interaction.guild.channels.cache.get(config.ticketArrivedChannel)
	const application = await ticketsArrivedChannel.send({ embeds: [TicketArrived(interaction.user.username, ticketChannel.id, problem, description)], components: [ButtonGetTicket] })
			
	return insert("tickets", "ticketInfo", {
		userId: interaction.user.id,
		userName: interaction.user.username,
		ticketId: ticketChannel.id,
		assignMessageId: application.id,
		problem: problem,
		description: description,
		moderatorId: null,
		active: true,
		status: "active",
	})
}