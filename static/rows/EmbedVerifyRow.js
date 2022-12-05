import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const EmbedVerifyRow = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('verifyembedbutton')
            .setLabel('💥 Я не робот!')
            .setStyle(ButtonStyle.Secondary))