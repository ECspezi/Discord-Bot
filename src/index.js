import 'dotenv/config'

import { createDiscordClient } from '#lib/functions/create-discord-client.js'

async function main () {
	await createDiscordClient()
}

await main()
	.catch(console.error)