// JavaScript Document
// loading progress bar
var w = parseInt(document.currentScript.getAttribute('w'));
var namez = document.currentScript.getAttribute('name');
 
setTimeout(window.onload = move(w, namez),60);

 function move(w, namez) {
"use strict";
  var elem = document.getElementById(namez); 
  var width = 5;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >=w) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
	   
}
	