# social-scripts
Полезные скрипты для работы с соцсетями от [Айрата Халитова](https://github.com/AiratHalitov). Прочтите описание репозитория ниже на странице и добро пожаловать! :)


_Привет! Некоторые подобные скрипты можно найти в интернете. Я создал этот репозиторий, чтобы собрать всё в одном месте и это было удобно редактировать и обновлять. Раньше для автоматизации ВК была удобная программа vkbot, но её больше нет. iMacros тоже уже не торт, поэтому вот такие отдельные JS-файлы. Хотя может и для iMacros можно будет скрипты накидать (у меня их много было). А можно еще соединить эти JS скрипты и iMacros. 
Буду рад, если вы будете вносить свои правки и предлагать идеи._

_С уважением, [Айрат Халитов](https://github.com/AiratHalitov)_

## Список скриптов

### [ВКонтакте](https://github.com/AiratHalitov/social-scripts/tree/master/vk) 
* `vk-wall-clean.js` Скрипт для очистки стены
* `vk-event-users-clean.js` Скрипт для очистки пользователей групп и встреч
* `vk-video-clean.js` Скрипт для очистки списка [видео](https://vk.com/video)
* `vk-audio-clean.js` Скрипт для очистки списка [аудиозаписей](https://m.vk.com/audio)
* `vk-blacklist-clean.js` Скрипт для очистки [черного списка](https://vk.com/settings?act=blacklist)
* `vk-publics-clean.js` Скрипт для очистки подписок на паблики
* `vk-possible-friends-clean.js` Скрипт для очистки списка [возможных друзей](https://vk.com/friends?act=find)
* `vk-friends-add.js` Скрипт для добавления в друзья пользователей по списку ID
* `vk-grp-subs-clean.js` Скрипт для удаления пользователей из группы по списку ID. Запускать [тут](https://vk.com/dev/groups.removeUser)
* `vk-subs-clean.js` Скрипт для удаления подписчиков/друзей пользователя по списку ID. Запускать [тут](https://vk.com/dev/account.ban). Через пару часов нужно почистить ЧС через `vk-blacklist-clean.js`
* `vk-out-requests-clean.js` Скрипт для очистки списка [исходящих запросов](https://vk.com/friends?section=out_requests) в друзья
* `vk-likes-clean.js` Скрипт для удаления лайков по списку
* `vk-comments-clean.js` Скрипт для удаления комментариев по списку. Запускать [тут](https://vk.com/dev/wall.deleteComment)
* `vk-post-suggest.js` Скрипт для предложения постов в группы по списку ID. Запускать [тут](https://vk.com/dev/wall.post)
* [Поиск «мёртвых» участников и подписчиков](https://vk.com/app2732533) - приложение ВКонтакте для поиска заблокированных и удаленных пользователей (собачек) среди подписчиков страниц пользователей и групп
* [Раскрыватель](https://vk.com/app3842325) - приложение ВКонтакте для определения скрытого возраста пользователя и дополнительной информации на основе сканирования информации его друзей (возраст, город, ВУЗ, школа)
* [Посты](https://vk.com/app3876642) - приложение ВКонтакте для анализа постов пользователей и сообществ. Просмотр истории постов, поиск популярных постов, фильтрация, выгрузка в CSV и JSON.
* ... список регулярно пополняется

### [Facebook](https://github.com/AiratHalitov/social-scripts/tree/master/facebook) 
* `fb-possible-friends-clean.js` Скрипт для очистки списка [возможных друзей](https://www.facebook.com/friends/requests/?fcref=swpsa)
* `fb-recommended-groups-clean.js` Скрипт для очистки списка [рекомендуемых групп](https://www.facebook.com/groups/?category=top)
* [Invite All Friends on Facebook](https://chrome.google.com/webstore/detail/invite-all-friends-on-fac/inmmhkeajgflmokoaaoadgkhhmibjbpj?hl=ru) - расширение для Google Chrome для быстрого (в один клик) приглашения всех друзей на встречу или лайкнуть страницу
* ... список регулярно пополняется

### [Twitter](https://github.com/AiratHalitov/social-scripts/tree/master/twitter)
* [TwitWipe](https://twitwipe.com/) - Скрипт для удаления всех опубликованных твитов в один клик
* ... список регулярно пополняется

### [YouTube](https://github.com/AiratHalitov/social-scripts/tree/master/youtube) 
* `yt-liked-video-clean.js` Скрипт для очистки списка понравившихся видео
* [vidIQ](https://vidiq.com) - Расширение для работы с YouTube. Помогает смотреть статистику по видео, рейтинг, делать массовое редактирование описания видео и т.д. ([расширение для Chrome](https://chrome.google.com/webstore/detail/vidiq-vision-for-youtube/pachckjkecffpdphbpmfolblodfkgbhl))
* [TubeBuddy](https://www.tubebuddy.com/getfree) - Расширение для работы с YouTube: массовое редактирование, копирование заставок, подсказок, менеджер комментариев и т.д. ([расширение для Chrome](https://chrome.google.com/webstore/detail/tubebuddy-for-youtube/mhkhmbddkmdggbhaaaodilponhnccicb))
* ... список регулярно пополняется

### [GitHub](https://github.com/AiratHalitov/social-scripts/tree/master/github) 
* `gh-follow.js` Скрипт для подписки на пользователей (лимит: 500 в день или в 12 часов)
* ... список регулярно пополняется

## Как использовать?
1. Зайти на нужную страницу соцсети, авторизоваться и выбрать подходящий скрипт.
2. Открыть панель разработчика в браузере (клавиша F12) и перейти в консоль (вкладка Console).
3. Вставить код в консоль и нажать Enter. И это всё!
4. Важно: некоторые скрипты нужно исправить под себя, поэтому читайте комментарии в коде. 
5. Скрипты, расширения и приложения сторонних разработчиков работают так, как написано на их сайте/странице.

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
