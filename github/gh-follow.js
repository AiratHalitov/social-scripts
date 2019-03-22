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
    var mylist = document.body.querySelectorAll('span.follow > form > button');
    if (!confirm('Start: ' + mylist.length + '?')) return;
    for (var i = 0; i < mylist.length; i++) {
        mylist[i].click();
        sleep(750);
    }
    alert(mylist.length + ' items. Done!');
}());
