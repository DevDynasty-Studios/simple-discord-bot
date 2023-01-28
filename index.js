import { Client, GatewayIntentBits, Collection } from 'discord.js';
import fs from 'fs';
import config from './config.json' assert { type: "json" };

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

(async function readdir(path='./commands') {
    const allCommands = fs.readdirSync(path);
    for (const command of allCommands) {
        if(fs.statSync(`${path}/${command}`).isDirectory()) {
            await readdir(`${path}/${command}`);
            continue;
        }

        try {
            const loaded = await import(`${path}/${command}`);
            client.commands.set(loaded.default.data.name, loaded);
        } catch (error) {
            console.log(error);
        }
    }
})();


client.once('ready', () => {
    console.log('Bot started.')
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.default.execute(interaction);
    } catch (error) {
        console.error(error);
    }
});

client.login(config.token).then(r => {});