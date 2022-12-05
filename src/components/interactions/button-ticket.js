import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from 'discord.js'

export default async function (interaction) {
	const modal = new ModalBuilder()
		.setCustomId('ticketmodal')
		.setTitle('Создать новый тикет')

	const problem = new TextInputBuilder()
		.setCustomId('problemInput')
		.setLabel('Ваша проблема')
		.setPlaceholder('Кратко расскажите, что случилось')
		.setMaxLength(150)
		.setMinLength(3)
		.setStyle(TextInputStyle.Short)
	
	const description = new TextInputBuilder()
		.setCustomId('descriptionInput')
		.setLabel("Подробно опишите проблему")
		.setPlaceholder('В подробностях опишите, что произошло, и как мы можем Вам помочь.')
		.setMaxLength(1000)
		.setMinLength(50)
		.setStyle(TextInputStyle.Paragraph)

	const firstActionRow = new ActionRowBuilder().addComponents(problem)
	const secondActionRow = new ActionRowBuilder().addComponents(description)

	modal.addComponents(firstActionRow, secondActionRow)

	return interaction.showModal(modal)
}