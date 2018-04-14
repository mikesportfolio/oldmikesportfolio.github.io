// JavaScript Document
/*
function model(linkId){
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

linkId.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}}*/


function model(linkId){
	
	"use strict";
	var modal = document.getElementById('myModal');
	var md_content1 = document.getElementsByClassName('modal-content1');
	var modal1 = document.getElementById('myModal1');
	var modal2 = document.getElementById('myModal2');
	var modal3 = document.getElementById('myModal3');
	var modal4 = document.getElementById('myModal4');
	var modal5 = document.getElementById('myModal5');
	var modal6 = document.getElementById('myModal6');
	

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
	
	
	//Toggle between modals
	
	if (linkId==='myModal'){
		
		modal.style.display = "block";
		md_content1.display = "block";
		
		
	}
	
	
	if (linkId==='myModal1'){
		
		
	modal1.style.display = "block";
		
	}

	
	if (linkId==='myModal2'){
		
		
	modal2.style.display = "block";
		
	}
	
	if (linkId==='myModal3'){
		
		
	modal3.style.display = "block";
		
	}
	
	if (linkId==='myModal1'){
		
		
	modal1.style.display = "block";
		
	}
	
	if (linkId==='myModal4'){
		
		
	modal4.style.display = "block";
		
	}
	
	if (linkId==='myModal5'){
		
		
	modal5.style.display = "block";
		
	}
	
	if (linkId==='myModal6'){
		
		
	modal6.style.display = "block";
		
	}
	
	// When the user clicks on <span> (x), close the modal
span.onclick = function span() {
    modal.style.display = "none";
	modal1.style.display = "none";
	modal2.style.display = "none";
	modal3.style.display = "none";
	modal4.style.display = "none";
	modal5.style.display = "none";
	modal6.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function close(event) {
    if (event.target === modal|| event.target === modal1|| event.target === modal2||event.target === modal3||event.target === modal4||event.target === modal5||event.target === modal6) {
        modal.style.display = "none";
		modal1.style.display = "none";
		modal2.style.display = "none";
		modal3.style.display = "none";
		modal4.style.display = "none";
		modal5.style.display = "none";
		modal6.style.display = "none";
    }
	
};
}

function closes(){
	
	"use strict";
	//var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById('myModal');
	var modal1 = document.getElementById('myModal1');
	var modal2 = document.getElementById('myModal2');
	var modal3 = document.getElementById('myModal3');
	var modal4 = document.getElementById('myModal4');
	var modal5 = document.getElementById('myModal5');
	var modal6 = document.getElementById('myModal6');
	
	 modal.style.display = "none";
	modal1.style.display = "none";
	modal2.style.display = "none";
	modal3.style.display = "none";
	modal4.style.display = "none";
	modal5.style.display = "none";
	modal6.style.display = "none";
}