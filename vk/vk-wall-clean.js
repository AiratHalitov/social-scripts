// Скрипт для очистки стены
// Запускать на открытой стене со всеми записями 
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('a.ui_actions_menu_item[onclick^="wall.deletePost"]');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
    }
    alert('Finish: ' + mylist.length + '!');
}());
