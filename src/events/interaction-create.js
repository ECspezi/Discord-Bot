import { captureRejectionSymbol } from 'node:events'
import { readdir } from 'node:fs/promises'

const INTERACTIONS_X_HANDLERS = await readdir('src/components/interactions')
    .then(result => result.reduce((acc, v) => ({ ...acc, [v.split('.').shift()?.split('-').join('')]: import(`#src/components/interactions/${(v)}`).then(({ default: i }) => i)}), {}))

export default { 
    name: 'interactionCreate',
    execute: async interaction => {
        if (interaction.isCommand() && !interaction.isContextMenuCommand()) 
            return interaction.client.commands.get(interaction.commandName)(interaction)

        const id = /^\d.*$/.test(interaction.customId) // (╯°□°）╯︵ ┻━┻
            ? interaction.customId.replace(/^\d/, 'i')
            : interaction.customId

        return INTERACTIONS_X_HANDLERS[id]
            ? (await INTERACTIONS_X_HANDLERS[id])(interaction)
            : interaction.reply({ content: 'Команда не найдена', ephemeral: true })
    }
}