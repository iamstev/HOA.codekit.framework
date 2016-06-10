// VERSION 1.1

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


// show success http://goo.gl/wnmwIl
// future: add this for showing success on fulscreen hide

function fullScreenLoad(action,delay) {
    "use strict";
    if(action === 'show') {
        document.getElementById('fullscreenload').style.display = 'block';
    }
    if(action === 'hide'){
		if(typeof delay === 'number'){
			setTimeout(function(){
				document.getElementById('fullscreenload').style.display = 'none';
			}, delay);
		}else{
	        document.getElementById('fullscreenload').style.display = 'none';
		}
    }
}



function basicModalCleanup(){
    document.getElementById('modal_h1').innerHTML = '';
    document.getElementById('modal_content').innerHTML = '';
	$('#modal_close').unbind('click');
}
function basicModal(u,d1){
    fullScreenLoad('show');
    $('#modal_close').click(function(){ basicModalCleanup(); });
	var ajx = $.get(
		u,
		{data1:d1},
		function( data ) {
            if(data.error === '0'){
                document.getElementById('modal_h1').innerHTML = data.h1;
                document.getElementById('modal_content').innerHTML = data.html;
                showModal('ajax-modal');
                fullScreenLoad('hide');
            }else if(data.error === '1'){
                document.getElementById('modal_h1').innerHTML = data.h1;
                document.getElementById('modal_content').innerHTML = data.html;
                showModal('ajax-modal');
                fullScreenLoad('hide');
            }else if(data.error === '2'){
                window.location = data.redir;
            }else if(data.error === '3'){
                fullScreenLoad('hide');
                topError(data.html);
            }else if(data.error === '4'){
				// Do not use error 4 in basicModal
				alert('error 4');
            }else{
                document.getElementById('modal_h1').innerHTML = 'Error';
                document.getElementById('modal_content').innerHTML = 'There was an error. [ref: unspecified]';
                showModal('ajax-modal');
                fullScreenLoad('hide');
            }
		},
		"json"
	);
	ajx.fail( function(){
        document.getElementById('modal_h1').innerHTML = 'Error';
        document.getElementById('modal_content').innerHTML = 'There was an error. [ref: ajax fail]';
        showModal('ajax-modal');
		fullScreenLoad('hide');
	});
}
