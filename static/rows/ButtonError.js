import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const ButtonError = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('buttonError')
            .setLabel('🔧 Что-то пошло не так')
            .setStyle(ButtonStyle.Secondary))
