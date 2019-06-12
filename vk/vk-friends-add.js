// Скрипт для добавления в друзья пользователей по списку ID
// Запускать на странице https://vk.com/dev/friends.add (важно очистить поле text!)
// Запросы, где появляется капча, пропускаются
function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}
(function() {
    'use strict';
    // Список ID пользователей через запятую в одну строку (1,2,3 - удалите)
    var mylist = [1,2,3];
    
    if (!confirm('Start: ' + mylist.length + '?')) return;
    var formField = document.body.querySelector('#dev_const_user_id');
    var buttonLink = document.body.querySelector('#dev_req_run_btn');
    for (var i = 0; i < mylist.length; i++) {
        formField.value = mylist[i];
        buttonLink.click();
        sleep(5000); // задержка 5 секунд между запросами (в мс)
    }
    alert('Finish: ' + i + '!');
}());
