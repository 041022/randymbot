// Dependencies
import { Telegraf, ContextMessageUpdate } from 'telegraf'
import { checkIfAdmin } from '../helpers/checkAdmin'

/**
 * Setting up the start and help commands
 * @param bot Bot to setup the commands
 */
export function setupStartAndHelp(bot: Telegraf<ContextMessageUpdate>) {
  bot.command(['start', 'help'], async (ctx) => {
    // Check if admin
    const isAdmin = await checkIfAdmin(ctx)
    if (!isAdmin) return
    // Reply
    const text = ctx.chat.type === 'private' ?
      'Привет! Это Рэнди Марш. Я умею случайным образом выбирать участника чата или канала из тех, что нажали на кнопку "Участвовать".\n\n1. Добавьте меня на канал или в чат, отправьте команду /randy и начнется розыгрыш.\n2. Ответьте на сообщение о розыгрыше любым сообщением, и розыгрыш завершится, а победитель будет выбран из участников.\n\nОстались вопросы? Пишите создателю — @borodutch 🦄' :
      'Привет! Это Рэнди Марш. Я умею случайным образом выбирать участника чата или канала из тех, что нажали на кнопку "Участвовать".\n\n1. Отправьте команду /randy и начнется розыгрыш.\n2. Ответьте на сообщение о розыгрыше любым сообщением, и розыгрыш завершится, а победитель будет выбран из участников.\n\nОстались вопросы? Пишите создателю — @borodutch 🦄'
    ctx.replyWithMarkdown(text)
  })
}