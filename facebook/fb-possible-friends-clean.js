// Скрипт для очистки списка возможных друзей
// Запускать на странице https://www.facebook.com/friends/requests/?fcref=swpsa
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('div.friendBrowserAddAsFriend > a');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
    }
    alert('Finish: ' + mylist.length + '!');
}());
