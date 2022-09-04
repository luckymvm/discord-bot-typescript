import { Interaction } from 'discord.js';
import { embedTemplate } from '../helpers/embedTemplate';

export async function messageToUser(interaction: Interaction): Promise<void> {
  if (!interaction.isChatInputCommand()) return;

  try {
    const {
      options: { data },
    } = interaction;
    const to = data[0].user;
    const title = data[1].value as string;
    const description = data[2].value as string;
    const embed = embedTemplate({
      title,
      description,
      footerText: 'OWRP Support',
    }).setThumbnail('https://i.imgur.com/zNWLpLq.png');

    await to.send({ embeds: [embed] });
    await interaction.reply('Отправлено.');
  } catch (e) {
    await interaction.reply(e.message);
  }

  return;
}
