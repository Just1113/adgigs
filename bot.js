import { Telegraf, Markup } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  const name = ctx.from.first_name || "User";
  await ctx.replyWithPhoto(
    { url: "https://your-banner-image-link.com/adgigs-banner.jpg" },
    {
      caption: `Welcome, ${name} 💎👋

Want to earn coins from gigs? 💰  
With *Adgigs Mini App*, you can earn by completing ads, joining channels, or visiting websites.

If you're an advertiser, promote your projects starting from just ₦1.

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

bot.launch();
console.log("✅ Adgigs Bot is running...");
