/*
  MODULE 4 Solution
  SpeakGoodBye javascript code
  author: Sayed Abdullah Qutb
  date: 20/03/2020
  version: 1.0
 */

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
var byeSpeaker = {};

(function(window) { 
	var speakWord = "Good Bye";

	// STEP 8: Rewrite the 'speak' function such that it is attached to the
	byeSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}

	// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
	window.byeSpeaker = byeSpeaker;

})(window);
