import { EmbedBuilder } from 'discord.js'

export const TicketEmbed = (id, problem, description) => new EmbedBuilder()
    .setTitle(`Тикет номер ${id}`)
	.setDescription(`**Мы уже оповестили команду модерации о Вашем обращении**.\nВы получите оповещение, когда свободный модератор сможет ответить на запрос.`)
	.addFields(
		{ name: 'Проблема', value: `${problem}` },
		{ name: 'Подробное описание', value: `${description}` })
	.setColor('#ff9900')