import client from '../index';

export async function ready(): Promise<void> {
  console.log(`Logged in as ${client.user.tag}!`);
}
