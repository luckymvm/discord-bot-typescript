import { PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';

export const SEND_USER_MESSAGE_TO_SERVER = 'toserver';
export const SEND_MESSAGE_TO_USER = 'touser';

export const dmCommands = [
  new SlashCommandBuilder()
    .setName(SEND_USER_MESSAGE_TO_SERVER)
    .setDescription('From DM to Server')
    .addStringOption((option) =>
      option
        .setName('title')
        .setNameLocalizations({ ru: 'заголовок' })
        .setDescription('Message title')
        .setDescriptionLocalizations({ ru: 'Заголовок сообщения' })
        .setRequired(true),
    )
    .addStringOption((option) =>
      option
        .setName('message')
        .setNameLocalizations({ ru: 'текст' })
        .setDescription('Message to be sent')
        .setDescriptionLocalizations({ ru: 'Сообщение для отправки' })
        .setRequired(true),
    ),
];

export const guildCommands = [
  new SlashCommandBuilder()
    .setName(SEND_MESSAGE_TO_USER)
    .setDescription('From Server to DM')
    .addMentionableOption((option) =>
      option
        .setName('user')
        .setNameLocalizations({ ru: 'пользователь' })
        .setDescription('To whom the message will be sent')
        .setDescriptionLocalizations({ ru: 'Кому отправляем сообщение' })
        .setRequired(true),
    )
    .addStringOption((option) =>
      option
        .setName('title')
        .setNameLocalizations({ ru: 'заголовок' })
        .setDescription('Message title')
        .setDescriptionLocalizations({ ru: 'Заголовок сообщения' })
        .setRequired(true),
    )
    .addStringOption((option) =>
      option
        .setName('message')
        .setNameLocalizations({ ru: 'текст' })
        .setDescription('Message to be sent')
        .setDescriptionLocalizations({ ru: 'Сообщение для отправки' })
        .setRequired(true),
    )
    .setDMPermission(false)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
];
