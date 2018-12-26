(function() {
    'use strict';
    if (!confirm('Удалить возможных друзей?')) return;
    var deletePostLink = document.body.querySelectorAll('a.friends_find_user_remove');
    for (var i = 0; i < deletePostLink.length; i++) {
        deletePostLink[i].click();
    }
    alert(deletePostLink.length + ' user deleted');
}());
