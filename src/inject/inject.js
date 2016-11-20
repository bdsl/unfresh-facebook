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
    var cutoff = 1479667109;
    cutoff = cutoff - 60*60*24;

    hideNewContent(cutoff);
}

/**
 * int cutoff - unix timestamp
 * Remove facebook content published after cutoff
 */
function hideNewContent(cutoff) {
    jQuery("div").each(function( index, element ) {
       e = jQuery(element);
       if (parseInt(e.data('timestamp')) > cutoff){
           e.css({"border-color": "red", 
                        "border-width":"1px", 
                        "border-style":"solid"});
       } else {
       }

   });
}
