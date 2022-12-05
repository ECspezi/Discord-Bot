import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js'

export const ButtonTakePlayer = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('buttontakeplayer')
            .setLabel('💞 Получить из очереди')
            .setStyle(ButtonStyle.Secondary))
