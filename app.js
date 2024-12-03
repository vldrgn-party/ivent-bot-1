const TelegramBot = require('node-telegram-bot-api');

const token = '7765928875:AAEFJoV2WEMmFiBKuLVhwcq_sucCfl9bPqA';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Играть сейчас",
                            web_app: {url: "https://bonus-dragon.online/7cHPMC"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - версия",
                            url: "https://bonus-dragon.online/7cHPMC",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendVideo(chatId, './img/video.MP4');
            await bot.sendMessage(chatId, ` <b>Раздача на 🍋1МЛН$😱 </b>\n\n ЗАПУСКАЕМ НОВОГОДНИЙ БЕСПРЕДЕЛ НА DRAGON MONEY 🎄\n\n 💸 Более 100 000 000₽ на кону! Выбирай что подходит тебе — Porsche Panamera для самого удачливого игрока или BMW M4 для крутого партнера 🎁\n\n С 3.12 по 12.01 — турниры от Дракона и топовых провайдеров, конкурсы и раздачи — всё, что ты любишь 😍\n\n <b>Фирменный мерч, много денег\n и топовые призы — забери самое вкусное и въедь в 2025-й на новой тачке 🎉</b> `, menu_game) 
        }
    }
    startBot()
})