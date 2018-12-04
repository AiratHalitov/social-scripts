
(function() {
    'use strict';
    if (!confirm('Очистить черный список?')) return;
    var deletePostLink = document.body.querySelectorAll('div.settings_bl_action > a');
    for (var i = 0; i < deletePostLink.length; i++) {
        deletePostLink[i].click();
    }
    alert(deletePostLink.length + ' user deleted');
}());
