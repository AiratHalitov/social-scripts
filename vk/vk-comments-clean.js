// Скрипт для удаления комментариев по списку
// Запускать на странице https://vk.com/dev/wall.deleteComment
function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}
(function() {
    'use strict';
    // Список ID через запятую в одну строку (1,2,3 - удалите)
    // ID групп начинается с минуса
    var owner_id_list = [1,2,3];
    var comment_id_list = [1,2,3];
    if (!confirm('Start: ' + comment_id_list.length + '?')) return;
    
    var owner_id_field = document.body.querySelector('#dev_const_owner_id');
    var comment_id_field = document.body.querySelector('#dev_const_comment_id');
    var buttonLink = document.body.querySelector('#dev_req_run_btn');
    for (var i = 0; i < comment_id_list.length; i++) {
        owner_id_field.value = owner_id_list[i];
        comment_id_field.value = comment_id_list[i];
        buttonLink.click();
        sleep(1000); // задержка между запросами (в мс)
    }
    alert('Finish: ' + i + '!');
}());
