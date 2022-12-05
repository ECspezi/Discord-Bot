import { findOne, patch } from '#lib/functions/mongo-functions.js'
import { UpdateTicketArrived, TicketArrived } from '#static/embeds/TicketArrived.js'

export default async function (interaction) {
    const result = await findOne("tickets", "ticketInfo", { assignMessageId: interaction.message.id }) 
    if (result === null) return interaction.reply({ content: 'Запись не найдена в базе данных', ephemeral: true })

    await interaction.update({ embeds: [UpdateTicketArrived(TicketArrived(result.userName, result.ticketId, result.problem, result.description), interaction.user.id)], components: [] })
    await patch("tickets", "ticketInfo", { assignMessageId: result.assignMessageId }, { moderatorId: interaction.user.id })

    return interaction.guild.channels.cache.get(result.ticketId)
        .send({ content: `Модератор <@${interaction.user.id}> ответит на Ваш тикет.` })
            .then(msg => msg.channel.permissionOverwrites.edit(interaction.user.id, { ViewChannel: true }))
}