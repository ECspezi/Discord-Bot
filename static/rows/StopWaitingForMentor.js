import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const StopWaitingForMentor = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('stopWaitingForMentor')
            .setLabel('❌ Покинуть очередь')
            .setStyle(ButtonStyle.Primary))