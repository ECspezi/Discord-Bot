import { EmbedBuilder } from 'discord.js'

export const TicketArrived = (username, id, problem, description) => new EmbedBuilder()
    .setTitle(`${username} создает тикет номер ${id}`)
	.addFields(
		{ name: 'Проблема', value: `${problem}` },
		{ name: 'Подробное описание', value: `${description}` })
	.setColor('#ff9900')

export const UpdateTicketArrived = (embedBuilder, userId) => embedBuilder
	.addFields({ name: 'Назначен', value: `Тикет назначен: <@${userId}>`})
	.setColor('#14a50e')
