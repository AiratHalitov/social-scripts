// Скрипт для удаления пользователей из группы по списку ID
// Запускать на странице https://vk.com/dev/groups.removeUser
// Обязетельно вставьте ваш ID группы в переменную grpField.value = ...
function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}
(function() {
    'use strict';
    // Список ID пользователей через запятую в одну строку (1,2,3 - удалите)
    var mylist = [1,2,3];
    
    if (!confirm('Start: ' + mylist.length + '?')) return;
    var grpField = document.body.querySelector('#dev_const_group_id');
    grpField.value = 37273781; // ID вашей группы

    var formField = document.body.querySelector('#dev_const_user_id');
    var buttonLink = document.body.querySelector('#dev_req_run_btn');
    for (var i = 0; i < mylist.length; i++) {
        formField.value = mylist[i];
        buttonLink.click();
        sleep(2000); // задержка 2 секунды между запросами (в мс)
    }
    alert('Finish: ' + mylist.length + '!');
}());
