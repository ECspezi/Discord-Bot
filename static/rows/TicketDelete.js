import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const TicketDelete = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('buttonticketdelete')
            .setLabel('❌ Удалить тикет')
            .setStyle(ButtonStyle.Secondary))
