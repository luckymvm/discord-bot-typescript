import 'dotenv/config';
import {
  Client,
  GatewayIntentBits,
  OAuth2Scopes,
  Partials,
  PermissionFlagsBits,
} from 'discord.js';
import { ready } from './listeners/ready';
import { interactionCreate } from './listeners/interactionCreate';
import refreshCommands from './rest';

refreshCommands();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on('ready', ready);
client.on('interactionCreate', interactionCreate);

client.login(process.env.TOKEN);

export default client;
