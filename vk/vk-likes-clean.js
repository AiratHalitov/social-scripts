// Скрипт для удаления лайков по списку
// Запускать на странице https://vk.com/dev/likes.delete
function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}
(function() {
    'use strict';
    // Список ID через запятую в одну строку (1,2,3 - удалите)
    // ID групп начинается с минуса
    var owner_id_list = [1,2,3];
    var item_id_list = [1,2,3];
    if (!confirm('Start: ' + owner_id_list.length + '?')) return;
    // post - запись, photo - фото и т.д. (см. описание функции)
    document.body.querySelector('#dev_const_type').value = 'post';
    
    var owner_id_field = document.body.querySelector('#dev_const_owner_id');
    var item_id_field = document.body.querySelector('#dev_const_item_id');
    var buttonLink = document.body.querySelector('#dev_req_run_btn');
    for (var i = 0; i < owner_id_list.length; i++) {
        owner_id_field.value = owner_id_list[i];
        item_id_field.value = item_id_list[i];
        buttonLink.click();
        sleep(2000); // задержка 2 секунды между запросами (в мс)
    }
    alert('Finish: ' + i + '!');
}());
