import { REST, Routes } from 'discord.js';
import { dmCommands, guildCommands } from './commands/';

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
const { applicationGuildCommands, applicationCommands } = Routes;

async function refreshCommands() {
  try {
    await rest.put(applicationCommands(process.env.CLIENT_ID), {
      body: dmCommands,
    });
    await rest.put(
      applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: guildCommands },
    );
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}

export default refreshCommands;
