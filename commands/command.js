import { SlashCommandBuilder } from "discord.js";
export default {
    data: new SlashCommandBuilder()
        .setName('command')
        .setDescription('Its a global command, what you think?'),
    async execute(interaction) {
        await interaction.reply("Hello.").catch(console.error);
    }
}