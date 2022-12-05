import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const TicketResolveConfirm = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('ticketresolveconfirm')
            .setLabel('💚 Закрыть обращение')
            .setStyle(ButtonStyle.Secondary))