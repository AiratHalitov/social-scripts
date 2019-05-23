// Скрипт для очистки списка исходящих запросов в друзья
// Запускать на странице с запросами: https://vk.com/friends?section=out_requests (прокрутить страницу вниз до конца)
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('div.friends_controls > button');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
    }
    alert('Finish: ' + i + '!');
}());
