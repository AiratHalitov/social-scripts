function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

(function() {
    'use strict';
    // Запускать на странице https://vk.com/dev/groups.removeUser
    
    // Список айдишников пользователей через запятую
    var mylist = [1,2,3];
       
    if (!confirm('Delete ' + mylist.length + '?')) return;
    var grpField = document.body.querySelector('#dev_const_group_id');
    
    // Айдишник группы
    grpField.value = 37273781;
    
    var formField = document.body.querySelector('#dev_const_user_id');
    var buttonLink = document.body.querySelector('#dev_req_run_btn');
    for (var i = 0; i < mylist.length; i++) {
        formField.value = mylist[i];
        buttonLink.click();
        sleep(2000); // задержка 2 секунды между запросами
    }
    alert(mylist.length + ' user deleted');
}());
