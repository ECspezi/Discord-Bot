import { EmbedBuilder } from 'discord.js'

export const TicketClosed = (result) => new EmbedBuilder()
	.setTitle(`${result.userName} создает тикет номер ${result.ticketId}`)
	.addFields(
		{ name: 'Проблема', value: `${result.problem}` },
		{ name: 'Подробное описание', value: `${result.description}` },
		{ name: 'Назначен', value: `Тикет назначен: <@${result.moderatorId}>`},
		{ name: 'Причина закрытия', value: 'Пользователь закрыл тикет.'}
    )
	.setColor('#32a9ff')