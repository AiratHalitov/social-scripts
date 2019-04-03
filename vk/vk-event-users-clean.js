// Скрипт для очистки пользователей групп и встреч
// Запускать на странице участников сообщества
function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
} 
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('a.group_u_action');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
        sleep(11); // Задержка в мс.
    }
    alert('Finish: ' + mylist.length + '!');
}());
