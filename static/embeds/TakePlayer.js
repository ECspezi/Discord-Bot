import { EmbedBuilder } from 'discord.js'

export const TakePlayer = new EmbedBuilder()
        .setTitle('Взять из очереди')
        .setDescription('Нажмите на кнопку, чтобы взять пользователя из очереди. Пользователь, ожидающий помощи ментора будет подобран автоматически.')
        .setColor('#10ca17')