from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # WebApp button (opens inside Telegram)
    keyboard = [
        [InlineKeyboardButton("🚀 Launch App", web_app=WebAppInfo(url="https://your-miniapp-link.vercel.app"))],
        [InlineKeyboardButton("✅ Get Started", url="https://t.me/adgigs")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    caption = (
        "👋 *Welcome to Adgigs!*\n\n"
        "Earn rewards 💰 or promote your project 🚀.\n\n"
        "Complete simple tasks, join channels or groups, and even launch ad campaigns directly from our mini-app."
    )

    await update.message.reply_photo(
        photo="https://i.imgur.com/GYYEw4F.png",
        caption=caption,
        reply_markup=reply_markup,
        parse_mode="Markdown",
        protect_content=True
    )

app = ApplicationBuilder().token(BOT_TOKEN).build()
app.add_handler(CommandHandler("start", start))
app.run_polling()
