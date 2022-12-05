import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const ButtonGetTicket = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('buttongetticket')
            .setLabel('🖐 Взять тикет')
            .setStyle(ButtonStyle.Primary))
