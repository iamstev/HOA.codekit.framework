// VERSION 1.0.5

function closeTopError(){
	"use strict";
	document.getElementById('top_error').style.display = 'none';
	document.getElementById('top_error').innerHTML = '';
}
function topError(c){
	"use strict";
	document.getElementById('top_error').innerHTML = c;
	document.getElementById('top_error').style.display = 'block';
}



function showModal(div, blackoutcolor) {
    "use strict";
    if (typeof blackoutcolor !== 'undefined') {
		document.getElementById('blackout').style.backgroundColor = blackoutcolor;
    }
    document.getElementById('blackout').style.display = 'block';
    document.getElementById(div).style.display = 'block';
    $('body').addClass('stop-scroll');
    document.openModal = div;
}
function hideModal(div) {
    "use strict";
    document.getElementById('blackout').style.display = 'none';
    document.getElementById('blackout').style.backgroundColor = 'black';
	document.getElementById(div).style.display = 'none';
	document.getElementById('modal_content').innerHTML = '';
    document.getElementById('modal_h1').innerHTML = '';
    $('body').removeClass('stop-scroll');
    document.openModal = '';
}


function fullScreenLoad(action) {
    "use strict";
    if (action === 'show') {
        document.getElementById('fullscreenload').style.display = 'block';
    }
    if (action === 'hide'){
        document.getElementById('fullscreenload').style.display = 'none';
    }
}
