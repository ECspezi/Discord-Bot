import { EmbedBuilder } from 'discord.js'

export const TicketControlEmbed = new EmbedBuilder()
        .setTitle('Ticket Control Panel')
        .setDescription('**Закрыть тикет** - удаляет пользователя из тикета, не удаляя канал.\n**Покинуть тикет** - снимает с Вас назначение на этот тикет.\n**Эскалировать** - вызывает старшую администрацию для решения вопроса.')
        .setColor('#10ca17')