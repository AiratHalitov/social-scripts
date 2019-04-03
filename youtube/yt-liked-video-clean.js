// Скрипт для очистки списка понравившихся видео
// Запускать на странице плейлиста с понравившимися видео
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('div.pl-video-edit-options > button');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
    }
    alert('Finish: ' + mylist.length + '!');
}());
