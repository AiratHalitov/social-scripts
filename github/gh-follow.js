// Скрипт для подписки на пользователей (лимит: 500 в день или в 12 часов)
// Запускать на странице со списком пользователей (прокрутить страницу вниз до конца)
function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('span.follow > form > button');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
        sleep(750); // Задержка (в мс)
    }
    alert('Finish: ' + i + '!');
}());
