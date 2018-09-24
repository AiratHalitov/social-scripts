function sleep(ms) {
	ms += new Date().getTime();
	while (new Date() < ms){}
} 
(function() {
    'use strict';
    if (!confirm('Ready?')) return;
    var mylist = document.body.querySelectorAll('a.group_u_action');
    if (!confirm(mylist.length + ' delete?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
        sleep(11);
    }
    alert(mylist.length + ' deleted');
}());
