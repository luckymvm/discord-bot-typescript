import { Interaction, TextChannel } from 'discord.js';
import { onlyInDM } from '../helpers/onlyInDM';
import { getChannel } from '../helpers/getGeneralChannel';
import { embedTemplate } from '../helpers/embedTemplate';

export async function messageToServer(interaction: Interaction) {
  if (!interaction.isChatInputCommand()) return;

  try {
    onlyInDM(interaction);
    const generalChannel = getChannel(process.env.TO_SERVER_CHANNEL_ID);
    const {
      options: { data },
    } = interaction;
    const title = data[0].value as string;
    const description = data[1].value as string;
    const embed = embedTemplate({
      title,
      description,
      footerText: 'OWRP Support',
    });

    await (generalChannel as TextChannel).send({ embeds: [embed] });
    await interaction.reply('Отправлено.');
  } catch (e) {
    await interaction.reply(e.message);
  }

  return;
}
