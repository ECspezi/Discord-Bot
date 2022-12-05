import { SlashCommandBuilder } from 'discord.js'

export default {
	name: 'ping',
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
		execute: async interaction => interaction.reply({ content: 'Понг! Бот исправно функционирует.', ephemeral: true})
}
