import 'dotenv/config';
import cron from "node-cron";

cron.schedule("*/5 * * * *", async () => {
  let infisicalOk = '';

  const response = await (await fetch(process.env.SOUNDS_RADIOS_API_URL)).json();
  
  fetch(process.env.INFISICAL_URL)
    .then(() => {})
    .catch(error => {
      console.error('Erro de rede:', error);
    });

  console.log(`${response?.message}\n`);
});
