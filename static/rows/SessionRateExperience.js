import { ButtonBuilder, ButtonStyle } from 'discord.js'

export const SessionRateExperience = [ 
    new ButtonBuilder()
      .setCustomId(`rateExperienceGood`)
      .setLabel('💚 Сессия была полезна!')
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId(`rateExperienceBad`)
      .setLabel('❌ Сессия не была полезна')
      .setStyle(ButtonStyle.Danger)
]