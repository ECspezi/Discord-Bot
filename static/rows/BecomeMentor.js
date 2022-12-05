import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const BecomeMentor = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('becomeMentor')
            .setLabel('⭐ Хочу стать ментором!')
            .setStyle(ButtonStyle.Secondary))