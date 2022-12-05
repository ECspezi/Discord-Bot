import { SlashCommandBuilder } from 'discord.js'

export default {
	name: 'temptimeout',
	data: new SlashCommandBuilder()
		.setName('temptimeout')
		.setDescription('Staff internal command')
		.addUserOption(option =>
			option.setName('target')
				.setDescription('Timeout target')
				.setRequired(true))
		.addIntegerOption(option =>
			option.setName('days')
				.setDescription('Timeout time in days')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('reason')
				.setDescription('Reason of timeout')
				.setRequired(true)),	

	execute: async interaction => {
		const days = parseInt(interaction.options.getInteger('days'))
		const user = interaction.options.getMember('target')
		const reason = interaction.options.getString('reason')
		
		return user.timeout(days * 24 * 60 * 60 * 1000, `TEMPTIMEOUT: ${user} | ${days} дней, за "${reason}". Выдал: ${interaction.user.username}`)
			.then(() => interaction.channel.send({ content: `<:empire:1041683277997690880>   TEMPTIMEOUT: ${user}   |   Срок: ${days}d   |   Причина: "${reason}"   |   Выдал: ${interaction.user.username}`, ephemeral: true }))
			.catch(() => interaction.reply({ content: 'Ошибка. Таймаут можно выдать не более, чем на 27 дней, или этот пользователь имеет иммунитет.', ephemeral: true }))
	}
}
