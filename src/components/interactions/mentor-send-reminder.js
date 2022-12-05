// import { findOne } from '#lib/functions/mongo-functions.js'

// export default async function (interaction) {

//     const result = await readElement("mentorship", "usersQueue", { assignedMentor: interaction.user.id })
    
//         await client.users.send(result.userId, 'Привет, это из **Imperial Space**, сервера по SS14. \nНекоторое время назад вы запрашивали помощь ментора, и мы нашли его для Вас, однако вы не отвечаете, и ментор попросил нас, чтобы мы с Вами связались. Если вы так и не ответите - ментор может закрыть сессию.')
//         .then(() => interaction.reply({ content: 'Мы отправили личное сообщение Вашему подопечному.', ephemeral: true}))
//         .catch(() => interaction.reply({ content: 'Настройки конфиденциальности Вашего подопечного не позволяют нам отправить ему сообщение.', ephemeral: true}))

// }

export default async function (interaction) {
    console.log('a')
}
