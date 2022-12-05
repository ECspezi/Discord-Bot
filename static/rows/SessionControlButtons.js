import { ButtonBuilder, ButtonStyle } from 'discord.js'

export const TicketControlButtons = [ 
    new ButtonBuilder()
      .setCustomId(`mentorSessionClose`)
      .setLabel('❌ Закрыть сессию')
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId(`mentorSendReminder`)
      .setLabel('💤 Отправить напоминание о сессии')
      .setStyle(ButtonStyle.Secondary)
]
