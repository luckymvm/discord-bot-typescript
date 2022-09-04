import client from '../index';

export function getChannel(channelId: string) {
  const guild = client.guilds.cache.get(process.env.GUILD_ID);
  return guild.channels.cache.get(channelId);
}
