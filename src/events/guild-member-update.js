import config from '#src/config.json' assert { type: 'json' }

export default {
	name: 'guildMemberUpdate',
	execute: async member => {
        if (member.pending === true) {
            member.roles.add(config.verifyUnverifiedRole)
        }
    }
}