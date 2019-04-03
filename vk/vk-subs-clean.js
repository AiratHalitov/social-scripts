function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}
(function() {
    'use strict';
    // Запускать на странице https://vk.com/dev/account.ban
    // Все добавлятся в ЧС, потом через пару часов используйте vk-blacklist-clean.js
    
    // Список айдишников пользователей через запятую
    var mylist = [1,2,3];
    
    if (!confirm('Delete ' + mylist.length + '?')) return;
    var formField = document.body.querySelector('#dev_const_owner_id');
    var buttonLink = document.body.querySelector('#dev_req_run_btn');
    for (var i = 0; i < mylist.length; i++) {
        formField.value = mylist[i];
        buttonLink.click();
        sleep(2000); // задержка 2 секунды между запросами
    }
    alert(mylist.length + ' user deleted');
}());
