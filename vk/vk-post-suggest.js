// Скрипт для предложения постов в группы по списку ID
// Запускать на странице https://vk.com/dev/wall.post
// Обязетельно заполните все необходимые поля на странице
function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}
(function() {
    'use strict';
    // Список ID групп через запятую в одну строку без минусов (1,2,3 - удалите)
    var grpList = [1,2,3];
    
    if (!confirm('Start: ' + grpList.length + '?')) return;
    var grpField = document.body.querySelector('#dev_const_owner_id');
    var buttonLink = document.body.querySelector('#dev_req_run_btn');
    for (var i = 0; i < grpList.length; i++) {
        grpField.value = -grpList[i]; // ID группы
        buttonLink.click();
        sleep(5000); // задержка между запросами (в мс)
    }
    alert('Finish: ' + i + '!');
}());
