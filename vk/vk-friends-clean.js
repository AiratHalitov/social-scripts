// Скрипт для очистки списка друзей
// Запускать на странице https://vk.com/friends (прокрутить страницу вниз до конца)
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('a.ui_actions_menu_item[onclick^="return Friends.deleteFriend"]');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
    }
    alert('Finish: ' + i + '!');
}());
