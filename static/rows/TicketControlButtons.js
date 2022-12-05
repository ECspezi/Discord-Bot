import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const TicketControlButtons = new ActionRowBuilder()
	.addComponents([ 
    new ButtonBuilder()
      .setCustomId(`adminCloseTicket`)
      .setLabel('❌ Закрыть тикет')
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId(`adminLeaveTicket`)
      .setLabel('🚪 Покинуть тикет')
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId(`adminEscalate`)
      .setLabel('💥 Эскалировать')
      .setStyle(ButtonStyle.Secondary)
])