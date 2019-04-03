// Скрипт для очистки списка возможных друзей
// Запускать на странице https://vk.com/friends?act=find
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('a.friends_find_user_remove');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
    }
    alert('Finish: ' + mylist.length + '!');
}());
