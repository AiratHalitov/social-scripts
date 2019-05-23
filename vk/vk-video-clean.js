// Скрипт для очистки списка видео
// Запускать на странице с вашими видео или видео в группе
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('div.video_thumb_action_delete');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
    }
    alert('Finish: ' + i + '!');
}());
