(function() {
    'use strict';
    if (!confirm('Удалить возможных друзей?')) return;
    var deletePostLink = document.body.querySelectorAll('div.friendBrowserAddAsFriend > a');
    for (var i = 0; i < deletePostLink.length; i++) {
        deletePostLink[i].click();
    }
    alert(deletePostLink.length + ' user deleted');
}());
