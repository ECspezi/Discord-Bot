import { ActionRowBuilder } from 'discord.js'

import { EmbedFiveButtonsRow } from '#static/embeds/EmbedFiveButtonsRow.js'
import { RedButton, BlueButton } from '#static/rows/VerifyButtons.js'

export default async function (interaction) {
    const randomIndex = Math.floor(Math.random() * 5)
    return interaction.reply({ 
        embeds: [EmbedFiveButtonsRow], 
        components: [new ActionRowBuilder().addComponents(Array.from(Array(5)).map((v, i) => i === randomIndex
            ? RedButton
            : BlueButton(i)
        ))],
        ephemeral: true
    })
}