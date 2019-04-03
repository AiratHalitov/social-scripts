# social-scripts
Полезные скрипты для работы с соцсетями от Айрата Халитова. Прочтите описание репозитория ниже на странице и добро пожаловать! :)

## Список скриптов

### [ВКонтакте](https://github.com/AiratHalitov/social-scripts/tree/master/vk) 
* `vk-wall-clean.js` Скрипт для очистки стены
* `vk-event-users-clean.js` Скрипт для очистки пользователей групп и встреч
* `vk-video-clean.js` Скрипт для очистки списка [видео](https://vk.com/video)
* `vk-blacklist-clean.js` Скрипт для очистки [черного списка](https://vk.com/settings?act=blacklist)
* `vk-possible-friends-clean.js` Скрипт для очистки списка [возможных друзей](https://vk.com/friends?act=find)
* `vk-grp-subs-clean.js` Скрипт для удаления пользователей из группы по списку ID. Запускать [тут](https://vk.com/dev/groups.removeUser)
* `vk-subs-clean.js` Скрипт для удаления подписчиков/друзей пользователя по списку ID. Запускать [тут]( https://vk.com/dev/account.ban). Через пару часов нужно почистить ЧС через `vk-blacklist-clean.js`
* ... список регулярно пополняется

### [Facebook](https://github.com/AiratHalitov/social-scripts/tree/master/facebook) 
* `fb-possible-friends-clean.js` Скрипт для очистки списка [возможных друзей](https://www.facebook.com/friends/requests/?fcref=swpsa)
* `fb-recommended-groups-clean.js` Скрипт для очистки списка [рекомендуемых групп](https://www.facebook.com/groups/?category=top)
* [Invite All Friends on Facebook](https://chrome.google.com/webstore/detail/invite-all-friends-on-fac/inmmhkeajgflmokoaaoadgkhhmibjbpj?hl=ru) - расширение для Google Chrome для быстрого (в один клик) приглашения всех друзей на встречу или лайкнуть страницу
* ... список регулярно пополняется

### [Twitter](https://github.com/AiratHalitov/social-scripts/tree/master/twitter)
* Скрипт для очистки твитов: https://twitwipe.com/
* ... список регулярно пополняется

### [YouTube](https://github.com/AiratHalitov/social-scripts/tree/master/youtube) 
* `yt-liked-video-clean.js` Скрипт для очистки списка понравившихся видео
* ... список регулярно пополняется

### [GitHub](https://github.com/AiratHalitov/social-scripts/tree/master/github) 
* `gh-follow.js` Скрипт для подписки на пользователей (лимит: 500 в день или в 12 часов)
* ... список регулярно пополняется

## Как использовать?
1. Зайти на нужную страницу соцсети, авторизоваться и выбрать подходящий скрипт.
1. Открыть панель разработчика в браузере (клавиша F12) и перейти в консоль (вкладка Console).
1. Вставить код в консоль и нажать Enter. И это всё!
1. Важно: некоторые скрипты нужно исправить под себя, поэтому читайте комментарии в коде. 

## В чем плюсы?
* Это безопасно, т.к. не нужно выдавать права на аккаунт.
* Никаких установок — всё работает прямо у вас в браузере.
* Открытый исходный код скриптов, который можно проверить и модифицировать.

## Сколько это стоит?
Это абсолютно бесплатно. Это значит, что вы никому ничего не должны (так же, как и вам никто ничего не должен).

## Что обновилось?
Полная история изменений в файле [CHANGELOG.md](https://github.com/AiratHalitov/social-scripts/blob/master/CHANGELOG.md)

## Как внести свой вклад?
Решили помочь в развитии проекта? Тогда вам нужен файл [CONTRIBUTING.md](https://github.com/AiratHalitov/social-scripts/blob/master/CONTRIBUTING.md)

## Ошибка / Идея / Вопрос?
Сообщить о найденной ошибке, предложить свою идею или задать вопрос можно [на этой странице](https://github.com/AiratHalitov/social-scripts/issues). Просто кликните по зеленой кнопке **[New issue](https://github.com/AiratHalitov/social-scripts/issues/new/choose)** и выберите подходящий вариант.

## Лицензия
В этом проекте используется [лицензия GPLv3](https://github.com/AiratHalitov/social-scripts/blob/master/LICENSE).

**Нужно сказать, что эти скрипты предоставляются вам в том виде, как они есть. Вы сами отвечаете за последствия их использования, т.к. у каждого своя голова на плечах. Используйте их с умом и только для хороших дел (например, автоматизация рутинных действий). И помните, что с большой силой приходит большая ответственность. :)**

---

**P.S.** _Привет! Многие подобные скрипты можно найти в интернете. Я создал этот репозиторий, чтобы собрать всё в одном месте и это было удобно редактировать. Раньше для ВК была удобная программа vkbot, но её больше нет. iMacros тоже уже не торт, поэтому вот такие отдельные JS-файлы. Хотя может и для iMacros можно будет скрипты накидать (у меня их много было). 
Буду рад, если вы будете вносить свои правки и предлагать идеи._

_С уважением, [Айрат Халитов](https://github.com/AiratHalitov)_
