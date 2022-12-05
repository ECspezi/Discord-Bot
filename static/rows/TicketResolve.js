import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const TicketResolve = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('buttonticketresolve')
            .setLabel('✅ Проблема решена!')
            .setStyle(ButtonStyle.Success))