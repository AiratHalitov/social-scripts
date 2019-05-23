// Скрипт для очистки списка рекомендуемых групп
// Запускать на странице https://www.facebook.com/groups/?category=top (прокрутить страницу вниз до конца)
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('div._4-jm > button');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
    }
    alert('Finish: ' + i + '!');
}());
