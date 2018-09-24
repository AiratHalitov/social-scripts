(function() {
    'use strict';
    if (!confirm('Удалить все Видео?')) return;
    var deletePostLink = document.body.querySelectorAll('div.video_thumb_action_delete');
    for (var i = 0; i < deletePostLink.length; i++) {
        deletePostLink[i].click();
    }
    alert(deletePostLink.length + ' posts deleted');
}());
