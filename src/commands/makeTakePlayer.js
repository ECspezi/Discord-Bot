import { SlashCommandBuilder } from 'discord.js'

import { TakePlayer } from '#static/embeds/TakePlayer.js'
import { ButtonTakePlayer } from '#static/rows/buttonTakePlayer.js'

export default {
	name: 'maketakeplayer',
	data: new SlashCommandBuilder()
		.setName('maketakeplayer')
		.setDescription('Staff internal command'),
	execute: async interaction => interaction.reply({ content: 'ready', ephemeral: true }).then(() => interaction.channel.send({ embeds: [TakePlayer], components: [ButtonTakePlayer] }))
}
