'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeCtr').click(googleAnalytics);
	$('.likeBtn').click(googleAnalytics);
}

function googleAnalytics(e){
	e.preventDefault();
	console.log("the like uitton has been pressed");
	ga('create', 'UA-114605567-1', 'auto');
	ga("send", "event", 'like', 'click');	
}

