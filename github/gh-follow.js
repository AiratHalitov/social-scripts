function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}
(function() {
    'use strict';
    var mylist = document.body.querySelectorAll('span.follow > form > button');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    var mytime = 750;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
        sleep(mytime);
    }
    alert(mylist.length + ' items. Done!');
}());
