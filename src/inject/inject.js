chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
    
      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log("Hello. This message was sent from scripts/inject.js");
      // ----------------------------------------------------------
    
      // Search for FAKE NEWS, FAKE (not news or hair), then finally FAKE HAIR, and replace them all with FAKE HAIR!
      // This way if someone actaully has mentiond his fake hair we'll have that covered too.
      
      // document.querySelect('body'
      
      // TODO: Something like:
      // Get all textContent and then
    	// t = t.replace(/\bFake News\b/g, "Fake Hair"); // Then a bunch more for other cases.
      // set textContent to t.
      
      // TODO: look up Regex for not Fake Hair, so we don't replace those, also look for punctuation after Fake
      
      // NOTE: The Drumpfinator used code from http://is.gd/mwZp7E but that's kinda out of date.
      
    }
  }, 10);
});

