import cron from "node-cron";

cron.schedule("*/3 * * * *", async () => {
  const health = await (await fetch(process.env.SOUNDS_RADIOS_API_URL)).json();
  await (await fetch(process.env.INFISICAL_URL)).json();

  console.log(`${health?.message}`);
});
