export default async function (interaction) {
    interaction.deferUpdate()
    return interaction.member.kick()
        .catch(() => {})
}