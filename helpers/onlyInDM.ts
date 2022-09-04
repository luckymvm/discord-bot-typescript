import { Interaction, Message } from 'discord.js';

export function onlyInDM(data: Interaction | Message) {
  if (data.guildId) {
    throw new Error('This command can only be used in DMs.');
  }
}
