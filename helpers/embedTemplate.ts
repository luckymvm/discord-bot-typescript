import { EmbedBuilder } from 'discord.js';

interface EmbedTemplate {
  title: string;
  description: string;
  footerText: string;
}

export function embedTemplate({
  title,
  description,
  footerText,
}: EmbedTemplate): EmbedBuilder {
  return new EmbedBuilder()
    .setColor(0xffffff)
    .setTitle(title)
    .setDescription(description)
    .setFooter({ text: footerText, iconURL: 'https://i.imgur.com/D3e8y8P.png' })
    .setTimestamp();
}
