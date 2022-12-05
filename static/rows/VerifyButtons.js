import { ButtonBuilder, ButtonStyle } from 'discord.js'

export const RedButton = new ButtonBuilder()
            .setCustomId(`redbutton`)
            .setLabel(' ')
            .setStyle(ButtonStyle.Danger)

export const BlueButton = (i) => new ButtonBuilder()
            .setCustomId(`${i}bluebutton`)
            .setLabel(' ')
            .setStyle(ButtonStyle.Primary)