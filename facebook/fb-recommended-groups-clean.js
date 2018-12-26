(function() {
    'use strict';
    if (!confirm('Удалить рекомендуемые группы?')) return;
    var deletePostLink = document.body.querySelectorAll('div._4-jm > button');
    for (var i = 0; i < deletePostLink.length; i++) {
        deletePostLink[i].click();
    }
    alert(deletePostLink.length + ' group deleted');
}());
