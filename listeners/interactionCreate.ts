import { Interaction } from 'discord.js';
import { messageToServer } from '../commands/messageToServer';
import { messageToUser } from '../commands/messageToUser';
import { SEND_MESSAGE_TO_USER, SEND_USER_MESSAGE_TO_SERVER } from '../commands';

export async function interactionCreate(interaction: Interaction) {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === SEND_USER_MESSAGE_TO_SERVER) {
    return messageToServer(interaction);
  } else if (interaction.commandName === SEND_MESSAGE_TO_USER) {
    return messageToUser(interaction);
  }
}
