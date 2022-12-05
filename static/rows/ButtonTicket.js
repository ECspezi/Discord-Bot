import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const ButtonTicket = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('buttonticket')
            .setLabel('🔧 Открыть тикет')
            .setStyle(ButtonStyle.Secondary))