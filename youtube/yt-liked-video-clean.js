(function() {
    'use strict';
    if (!confirm('Очистить список видео?')) return;
    var deletePostLink = document.body.querySelectorAll('div.pl-video-edit-options > button');
    for (var i = 0; i < deletePostLink.length; i++) {
        deletePostLink[i].click();
    }
    alert(deletePostLink.length + ' video deleted');
}());
