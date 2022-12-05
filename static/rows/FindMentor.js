import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const FindMentor = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('findMentor')
            .setLabel('🤯 Мне нужен ментор!')
            .setStyle(ButtonStyle.Primary))
