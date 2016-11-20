chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Unfresh Facebook by Barney Laurance is active");
		// ----------------------------------------------------------
                //
                //
                setInterval(hideContent, 1000);

	}
	}, 10);
});

function hideContent(){
    
    /*hide anything from after the last time it was 7am */
    var cutoff_hour = "7";
    var now = new Date();
    var cutoff = now;
    cutoff.setHours(cutoff_hour,0,0,0);

    if (now.getHours() < cutoff_hour) {
        /* If today's cutoff hour hasn't happened yet we use yesterdays */
        cutoff.setDate(now.getDate()-1);
    }
    hideNewContent(cutoff.getTime()/1000);
}

/**
 * int cutoff - unix timestamp
 * Remove facebook content published after cutoff
 */
function hideNewContent(cutoff) {
    jQuery("div").each(function( index, element ) {
       e = jQuery(element);
       if (parseInt(e.data('timestamp')) > cutoff){
           e.remove();
       } else {
       }

   });
}
