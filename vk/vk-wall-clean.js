(function() {
    'use strict';
    if (!confirm('Удалить все записи со стены?')) return;
    var deletePostLink = document.body.querySelectorAll('a.ui_actions_menu_item[onclick^="wall.deletePost"]');
    for (var i = 0; i < deletePostLink.length; i++) {
        deletePostLink[i].click();
    }
    alert(deletePostLink.length + ' posts deleted');
}());
