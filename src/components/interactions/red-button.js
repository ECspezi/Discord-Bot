import config from '#src/config.json' assert { type: 'json' }
import { SuccessEmbed } from '#static/embeds/SuccesEmbed.js'

export default async function (interaction) {
    await interaction.update({ embeds: [SuccessEmbed], components: [], ephemeral: true })
    
    await interaction.member.roles.add(config.verifyVerifiedRole)
    return interaction.member.roles.remove(config.verifyUnverifiedRole)
}