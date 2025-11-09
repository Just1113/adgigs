import { Telegraf, Markup } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  const name = ctx.from.first_name || "User";
  await ctx.replyWithPhoto(
    { url: "http://webnar.serv00.net/bot.png" },
    {
      caption: `Welcome, ${name} 👋

Want to earn coins from gigs? 💰  
With *Adgigs Mini App*, you can earn by completing ads, joining channels, or visiting websites.

If you're an advertiser, promote your projects starting from just $1.

🚀 Tap below to begin:`,
      parse_mode: "Markdown",
      protect_content: true,
      ...Markup.inlineKeyboard([
        [Markup.button.webApp("🚀 Launch App", "https://webnar.serv00.net")],
        [Markup.button.url("📢 Our Channel", "https://t.me/ad_gigs")]
      ])
    }
  );
});

import express from "express";
const app = express();

app.use(express.json());

app.use(bot.webhookCallback("/webhook"));

const port = process.env.PORT || 3000;

// Replace YOUR_BOT_TOKEN with your actual Telegram bot token
await bot.telegram.setWebhook(`https://adgigs.onrender.com/webhook`);

app.get("/", (req, res) => {
  res.send("✅ Adgigs Bot is live on Render!");
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

console.log("✅ Adgigs Bot is running...");
