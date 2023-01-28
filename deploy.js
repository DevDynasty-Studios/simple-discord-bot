import { REST, Routes } from 'discord.js';
import fs from 'fs';
import config from './config.json' assert { type: "json" };

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = await import(`./commands/${file}`);
    commands.push(command.default.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(config.token);
(async () => {
    try {
        await rest.put(
            Routes.applicationCommands(config.clientId),
            { body: commands },
        );

        console.log('All commands are loaded.');
    } catch (error) {
        console.log(error);
    }
})();