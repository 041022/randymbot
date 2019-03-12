export function loc(text: string, language: string) {
  return localizations[text][language]
}

const localizations: { [index: string]: { [index: string]: string } } = {
  private_help_start: {
    ru:
      'Привет! Это Рэнди Марш. Я умею случайным образом выбирать участника чата или канала из тех, что нажали на кнопку "Участвовать". Мой исходный код [вот тут](https://github.com/backmeupplz/randymbot). Сменить язык можно командой /language. Сменить количество победителей (стандартно — 1) командой /number.\n\n1. Добавьте меня на канал или в чат, отправьте команду /randy и начнется розыгрыш.\n2. Ответьте на сообщение о розыгрыше любым сообщением, и розыгрыш завершится, а победитель будет выбран из участников.\n\nОстались вопросы? Почитайте наш канал поддержки — @borodutch\\_support 🦄',
    en:
      'Hi there! I\'m Randy Marsh. I can randomly select a raffle participant (that hit the "Participate" button) in a chat or a channel. My source code is [here](https://github.com/backmeupplz/randymbot). You can also change the /language and the /number of winners per raffle (default is 1).\n\n1. Add me to a channel or a chat, send /randy command and the raffle will begin.\n2. Reply with any message to my raffle message to finish the raffle, and a random winner will be picked from the participants.\n\nStill got questions? Go to our support channel — @borodutch\\_support 🦄',
    tr:
      'Merhaba! Ben Randy Marsh. Bir sohbet veya kanalda rastgele bir �ekilis katilimcisini ("Katil" d�gmesine basan) se�ebilirim. Kaynak kodum [here](https://github.com/backmeupplz/randymbot). Ayrica /language ve /number basina kazananlarin sayisini da degistirebilirsiniz (varsayilan 1).\n\n1. Beni bir kanala veya gruba ekle, /randy komutunu g�nder ve �ekilis baslasin!\n2. �ekilisi bitirmek i�in �ekilis iletime herhangi bir mesajla yanit verin ve katilimcilardan rastgele bir kazanan se�ilecektir.\n\nBaska sorularin mi var? Destek kanalimiza gelin — @borodutch\\_support 🦄',
  },
  public_help_start: {
    ru:
      'Привет! Это Рэнди Марш. Я умею случайным образом выбирать участника чата или канала из тех, что нажали на кнопку "Участвовать". Мой исходный код [вот тут](https://github.com/backmeupplz/randymbot). Сменить язык можно командой /language. Сменить количество победителей (стандартно — 1) командой /number.\n\n1. Отправьте команду /randy и начнется розыгрыш.\n2. Ответьте на сообщение о розыгрыше любым сообщением, и розыгрыш завершится, а победитель будет выбран из участников.\n\nОстались вопросы? Почитайте наш канал поддержки — @borodutch_support 🦄',
    en:
      'Hi there! I\'m Randy Marsh. I can randomly select a raffle participant (that hit the "Participate" button) in a chat or a channel. My source code is [here](https://github.com/backmeupplz/randymbot). You can also change the /language the /number of winners per raffle (default is 1).\n\n1. Send /randy command and the raffle will begin.\n2. Reply with any message to my raffle message to finish the raffle, and a random winner will be picked from the participants.\n\nStill got questions? Go to our support channel — @borodutch\\_support 🦄',
    tr:
      'Merhaba! Ben Randy Marsh. Bir sohbet veya kanalda rastgele bir �ekilis katilimcisini ("Katil" d�gmesine basan) se�ebilirim. Kaynak kodum [here](https://github.com/backmeupplz/randymbot). Ayrica /language ve /number basina kazananlarin sayisini da degistirebilirsiniz (varsayilan 1).\n\n1. Beni bir kanala veya gruba ekle, /randy komutunu g�nder ve �ekilis baslasin!\n2. �ekilisi bitirmek i�in �ekilis iletime herhangi bir mesajla yanit verin ve katilimcilardan rastgele bir kazanan se�ilecektir.\n\nBaska sorularin mi var? Destek kanalimiza gelin — @borodutch\\_support 🦄',
  },
  no_work_private: {
    ru: 'Простите, но эта команда не работает в личке с ботом.',
    en: 'Sorry, but this command is not available in private messages.',
    tr: '�zg�n�m, bu komut �zel mesajlarda mevcut degil.',
  },
  select_language: {
    ru: 'Пожалуйста, выберите язык',
    en: 'Please, select the language',
    tr: 'L�tfen dilinizi se�iniz',
  },
  language_selected: {
    ru: 'Спасибо, теперь я говорю по-русски!',
    en: 'Thank you! Now I speak English',
    tr: 'Tesekk�rler! Artik T�rk�e konusuyorum',
  },
  raffle_text: {
    ru:
      'Розыгрыш начался! Нажмите на кнопку ниже, чтобы принять участие. Победитель будет выбран случайным образом из участников, когда администраторы ответят на это сообщение. Желаю удачи!',
    en:
      'Raffle has begun! Press the button below to participate. The winner will be randomly selected from the participants when an admin replies to this message. Good luck!',
    tr:
      '�ekilis basladi! Katilmak i�in asagidaki d�gmeye basin. Bir y�netici bu mesaja cevap verdiginde kazanan kisi, katilimcilar arasindan rastgele olarak se�ilecektir. Iyi sanslar!',
  },
  raffle_text_multiple: {
    ru:
      'Розыгрыш начался! Нажмите на кнопку ниже, чтобы принять участие. Победители будут выбраны случайным образом из участников, когда администраторы ответят на это сообщение. Желаю удачи!',
    en:
      'Raffle has begun! Press the button below to participate. The winners will be randomly selected from the participants when an admin replies to this message. Good luck!',
    tr:
      '�ekilis basladi! Katilmak i�in asagidaki d�gmeye basin. Bir y�netici bu mesaja cevap verdiginde kazanan kisi, katilimcilar arasindan rastgele olarak se�ilecektir. Iyi sanslar!',
  },
  please_retry: {
    ru: 'Пожалуйста, попробуйте через пару минут',
    en: 'Please, try in a couple of minutes',
    tr: 'L�tfen birka� dakika i�inde tekrar deneyiniz',
  },
  already_participating: {
    ru: 'Вы уже принимаете участие, отлично!',
    en: 'You are already participating, wonderful!',
    tr: 'Zaten �ekilise katildiniz, geriye kazanmak kaldi!',
  },
  participated: {
    ru: 'Отлично, вы отметились, как участник!',
    en: 'Great, you are now participating in this raffle!',
    tr: 'Harika, �ekilise katildiniz!',
  },
  participants_number: {
    ru: 'Количество участников',
    en: 'Number of participants',
    tr: 'Katilimci sayisi',
  },
  participate_button: {
    ru: 'Участвовать!',
    en: 'Participate!',
    tr: 'Katil!',
  },
  no_participants: {
    ru: 'В этот раз участников розыгрыша не было 😅',
    en: 'No participants this time 😅',
    tr: 'Katilimci yok 😅',
  },
  winner: {
    ru: 'В этот раз победитель',
    en: 'The winner is',
    tr: 'Ve Kazanan kisi',
  },
  winners: {
    ru: 'В этот раз победители',
    en: 'The winners are',
    tr: 'Ve Kazanan kisilerr',
  },
  congratulations: {
    ru: 'Поздравляем',
    en: 'Congratulations',
    tr: 'Tebrikler',
  },
  raffle_over: {
    ru: 'Простите, но розыгрыш уже закончен',
    en: 'Sorry, the raffle is over now',
    tr: '�zg�n�m, �ekilis simdi bitti',
  },
  select_number: {
    ru: 'Пожалуйста, выберите, сколько победителей должно быть в розыгрыше',
    en: 'Please, select number of winners for a raffle',
    tr: 'L�tfen �ekilis i�in kazanacak kisi sayisini se�iniz',
  },
  number_selected: {
    ru: 'Отлично, вы выбрали количество победителей!',
    en: "Great! You've selected the number of winners!",
    tr: 'Harika! Kazanacak kisi sayisini se�tin!',
  },
  not_enough_participants: {
    ru: 'В этот раз участников розыгрыша было недостаточно 😅',
    en: 'Not enough participants this time 😅',
    tr: '�ekilis i�in yeteri kadar katilimci yok 😅',
  },
}
