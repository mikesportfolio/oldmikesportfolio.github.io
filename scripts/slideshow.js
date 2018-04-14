var slideIndex = 1;

function slides(clickedslide) {

	//var slideIndex = 1;
	showSlides(slideIndex, clickedslide);

	// Next/previous controls
	/*function plusSlides(n) {

		if (slideIndex <= 2) {

			if (n < 1) {
				showSlides(slideIndex = 1, clickedslide);
			} else {
				showSlides(slideIndex += n, clickedslide);
			}

		} else {
			showSlides(slideIndex = 1, clickedslide);
		}



	}*/



}
// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n, clickedslide);
}

function showSlides(n, clickedslide) {
	"use strict";
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var slides1 = document.getElementsByClassName("mySlides1");
	var slides2 = document.getElementsByClassName("mySlides2");
	var slides3 = document.getElementsByClassName("mySlides3");
	var slides4 = document.getElementsByClassName("mySlides4");
	var slides5 = document.getElementsByClassName("mySlides5");
	var slides6 = document.getElementsByClassName("mySlides6");


	var dots = document.getElementsByClassName("dot");

	if (n > slides.length || n > slides1.length||n >slides2.length|| n>slides3.length||n>slides4.length|| n>slides5.length||n>slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
		slideIndex = slides1.length;
		slideIndex = slides2.length;
		slideIndex = slides3.length;
		slideIndex = slides4.length;
		slideIndex = slides5.length;
		slideIndex = slides6.length;
	}




	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		slides1[i].style.display = "none";
		slides2[i].style.display = "none";
		slides3[i].style.display = "none";
		slides4[i].style.display = "none";
		slides5[i].style.display = "none";
		slides6[i].style.display = "none";
		

	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	console.log("slides class name =" + slides1[0].className);

	if (clickedslide === slides[0].className) {
		slides[slideIndex - 1].style.display = "block";
	}

	if (clickedslide === slides1[0].className) {
		slides1[slideIndex - 1].style.display = "block";
	}
	if (clickedslide === slides2[0].className) {
		slides2[slideIndex - 1].style.display = "block";
	}
	if (clickedslide === slides3[0].className) {
		slides3[slideIndex - 1].style.display = "block";
	}
	if (clickedslide === slides4[0].className) {
		slides4[slideIndex - 1].style.display = "block";
	}
	if (clickedslide === slides5[0].className) {
		slides5[slideIndex - 1].style.display = "block";
	}
	if (clickedslide === slides6[0].className) {
		slides6[slideIndex - 1].style.display = "block";
	}

	dots[slideIndex - 1].className += " active";
} // JavaScript Document

var y = 0;

function plusSlides(n, clickedslide) {
	"use strict";
	if (y < n) {

		y = n;
	}

	if (slideIndex <= 2) {

		if (y < 1) {
			showSlides(slideIndex = 1, clickedslide);
		} else {
			showSlides(slideIndex += y, clickedslide);

		}

	} else {
		showSlides(slideIndex = 1, clickedslide);
	}



}
