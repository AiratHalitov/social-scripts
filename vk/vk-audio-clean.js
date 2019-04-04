// Скрипт для очистки списка аудиозаписей
// Запускать на странице с вашими аудио в мобильной версии https://m.vk.com/audio
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('div.ai_menu > div.ai_del');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
    }
    alert('Finish: ' + mylist.length + '!');
}());
