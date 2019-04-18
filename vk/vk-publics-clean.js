// Скрипт для очистки подписок на паблики
// Запускать на своей странице, открыв список подписок и прокрутив его вниз до конца
function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
} 
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('div.fans_idol_unsub > button');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
        sleep(11); // Задержка (в мс)
    }
    alert('Finish: ' + mylist.length + '!');
}());
