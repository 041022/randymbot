export function loc(text: string, language: string) {
  return localizations[text][language];
}

const localizations: { [index: string]: {[ index:string]: string } } = {
  'private_help_start': {
    ru: 'Привет! Это Рэнди Марш. Я умею случайным образом выбирать участника чата или канала из тех, что нажали на кнопку "Участвовать". Мой исходный код [вот тут](https://github.com/backmeupplz/randymbot). Сменить язык можно командой /language.\n\n1. Добавьте меня на канал или в чат, отправьте команду /randy и начнется розыгрыш.\n2. Ответьте на сообщение о розыгрыше любым сообщением, и розыгрыш завершится, а победитель будет выбран из участников.\n\nОстались вопросы? Пишите создателю — @borodutch 🦄',
    en: 'Hi there! I\'m Randy Marsh. I can randomly select a raffle participant (that hit the "Participate" button) in a chat or a channel. My source code is [here](https://github.com/backmeupplz/randymbot). You can also change /language.\n\n1. Add me to a channel or a chat, send /randy command and the raffle will begin.\n2. Reply with any message to my raffle message to finish the raffle, and a random winner will be picked from the participants.\n\nStill got questions? Contact my creator — @borodutch 🦄',
  },
  'public_help_start': {
    'ru': 'Привет! Это Рэнди Марш. Я умею случайным образом выбирать участника чата или канала из тех, что нажали на кнопку "Участвовать". Мой исходный код [вот тут](https://github.com/backmeupplz/randymbot). Сменить язык можно командой /language.\n\n1. Отправьте команду /randy и начнется розыгрыш.\n2. Ответьте на сообщение о розыгрыше любым сообщением, и розыгрыш завершится, а победитель будет выбран из участников.\n\nОстались вопросы? Пишите создателю — @borodutch 🦄',
    en: 'Hi there! I\'m Randy Marsh. I can randomly select a raffle participant (that hit the "Participate" button) in a chat or a channel. My source code is [here](https://github.com/backmeupplz/randymbot). You can also change /language.\n\n1. Send /randy command and the raffle will begin.\n2. Reply with any message to my raffle message to finish the raffle, and a random winner will be picked from the participants.\n\nStill got questions? Contact my creator — @borodutch 🦄',
  },
  'no_work_private': {
    ru: 'Простите, но эта команда не работает в личке с ботом.',
    en: 'Sorry, but this command is not available in private messages.',
  },
  'select_language': {
    ru: 'Пожалуйста, выберите язык',
    en: 'Please, select the language',
  },
  'language_selected': {
    ru: 'Спасибо, теперь я говорю по-русски!',
    en: 'Thank you! Now I speak English',
  },
  'raffle_text': {
    ru: 'Розыгрыш начался! Нажмите на кнопку ниже, чтобы принять участие. Победитель будет выбран случайным образом из участников, когда администраторы ответят на это сообщение. Желаю удачи!',
    en: 'Raffle has begun! Press the button below to participate. The winner will be randomly selected among the participants when an admin replies to this message. Good luck!'
  },
  'please_retry': {
    ru: 'Пожалуйста, попробуйте через пару минут',
    en: 'Please, try in a couple of minutes',
  },
  'already_participating': {
    ru: 'Вы уже принимаете участие, отлично!',
    en: 'You are already participating, wonderful!',
  },
  'participated': {
    ru: 'Отлично, вы отметились, как участник!',
    en: 'Great, you are now participating in this raffle!',
  },
  'participants_number': {
    ru: 'Количество участников',
    en: 'Number of participants',
  },
  'participate_button': {
    ru: 'Участвовать!',
    en: 'Participate!',
  },
  'no_participants': {
    ru: 'В этот раз участников розыгрыша не было 😅',
    en: 'No participants this time 😅',
  },
  'winner': {
    ru: 'В этот раз победитель',
    en: 'The winner is',
  },
  'congratulations': {
    ru: 'Поздравляем',
    en: 'Congratulations',
  },
}