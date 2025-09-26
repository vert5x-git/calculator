const { Bot } = require('grammy');
const { evaluate } = require('mathjs');

// Вставь сюда свой токен, который ты получил от BotFather
const bot = new Bot('ВАШ_ТОКЕН_ОТ_БОТА');

// Инструкция для пользователя
const instructions = `
Привет! Я твой личный калькулятор-бот.

Просто отправь мне математическое выражение, и я его посчитаю.

Примеры:

*   Простые операции: 2 + 2 * 2
*   Скобки: (2 + 2) * 2
*   Возведение в степень: 2^3
*   Тригонометрия: sin(pi / 2)
*   Логарифмы: log(100, 10)
*   И многое другое!

Команды:
/start - Запустить бота и показать это сообщение
/help - Показать эту инструкцию
`;

// Обработчик команды /start
bot.command('start', (ctx) => {
    ctx.reply(instructions);
});

// Обработчик команды /help
bot.command('help', (ctx) => {
    ctx.reply(instructions);
});

// Обработчик текстовых сообщений (для вычислений)
bot.on('message:text', async (ctx) => {
    const expression = ctx.message.text;

    try {
        const result = evaluate(expression);
        await ctx.reply(`Результат: ${result}`);
    } catch (error) {
        await ctx.reply('Ой, что-то пошло не так. Убедись, что твое выражение написано правильно.');
    }
});

// Запускаем бота
bot.start();

console.log('Бот запущен!');