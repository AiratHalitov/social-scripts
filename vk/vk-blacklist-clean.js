// Скрипт для очистки черного списка
// Запускать на странице https://vk.com/settings?act=blacklist (прокрутить страницу вниз до конца)
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('div.settings_bl_action > a');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
    }
    alert('Finish: ' + mylist.length + '!');
}());
