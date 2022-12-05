import { ButtonBuilder, ButtonStyle } from 'discord.js'

// export const MentorApplicationButtons = [ 
//     new ButtonBuilder()
//       .setCustomId(`mentorApplicationApprove`)
//       .setLabel('💚 Одобрить заявку')
//       .setStyle(ButtonStyle.Success),
//     new ButtonBuilder()
//       .setCustomId(`mentorApplicationReject`)
//       .setLabel('❌ Отклонить заявку')
//       .setStyle(ButtonStyle.Danger)
// ]

export const MentorApplicationButtons = new ButtonBuilder()
      .setCustomId(`mentorApplicationApprove`)
      .setLabel('💚 Одобрить заявку')
      .setStyle(ButtonStyle.Success),